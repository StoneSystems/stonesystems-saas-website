"""Step 7: assert dedupe, uniqueness, file existence, encoding and counts."""
import json
import re
import subprocess
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import COMPONENT, FFPROBE, RAW_DIR, ROOT, load_manifest

ok = True
def check(cond, msg):
    global ok
    print(("PASS " if cond else "FAIL ") + msg)
    ok = ok and cond

entries = load_manifest()
raw_files = sorted(p.name for p in RAW_DIR.iterdir() if not p.name.startswith("."))
check([e["source"] for e in entries] == raw_files, f"manifest covers every raw file exactly once ({len(raw_files)})")
check(all(e["status"] in {"duplicate-in-folder", "already-on-site", "new", "excluded"} for e in entries), "every entry has a terminal status")

src = COMPONENT.read_text()
srcs = re.findall(r"videoSrc:\s*'([^']+)'", src)
thumbs = re.findall(r"videoThumbnail:\s*'([^']+)'", src)
check(len(srcs) == len(set(srcs)), f"no two cards share videoSrc ({len(srcs)} cards)")
missing = [s for s in srcs + thumbs if not (ROOT / "public" / s.split("#")[0].lstrip("/")).exists()]
check(not missing, f"every videoSrc/videoThumbnail resolves to a file in public/ (missing: {missing})")

new = [e for e in entries if e["status"] == "new"]
matched = [e for e in entries if e["status"] == "already-on-site"]
dups = [e for e in entries if e["status"] == "duplicate-in-folder"]
excluded = [e for e in entries if e["status"] == "excluded"]
unique_folder = len(entries) - len(dups) - len(excluded)
check(all(e["videoSrc"] in srcs for e in new), "every new entry is on the page")
check(all(f"/videos/{e['matchedSiteVideo']}#t=0.1" in srcs for e in matched), "every matched entry's site video is on the page")
check(len(new) + len(matched) == unique_folder, f"folder-sourced cards = new {len(new)} + matched {len(matched)} = {unique_folder} unique raw videos (excluded {len(excluded)})")
check(all(e["caption"] and e["personName"] for e in new), "every new entry has caption and personName")

bad = []
for e in new:
    f = ROOT / "public" / e["videoSrc"].split("#")[0].lstrip("/")
    p = subprocess.run([FFPROBE, "-v", "error", "-show_entries", "stream=codec_name:format=duration", "-of", "json", str(f)], capture_output=True, text=True)
    j = json.loads(p.stdout)
    codecs = {s["codec_name"] for s in j["streams"]}
    dur = float(j["format"]["duration"])
    head = f.open("rb").read(64)
    if codecs != {"h264", "aac"} or abs(dur - e["durationSec"]) > 0.3 or b"moov" not in head:
        bad.append((f.name, codecs, round(dur - e["durationSec"], 2), b"moov" in head))
check(not bad, f"new videos are h264+aac, faststart, duration within 0.3s (bad: {bad})")
print(f"\nlegacy cards: {len(srcs) - len(new) - len(matched)}  matched: {len(matched)}  new: {len(new)}  total on page: {len(srcs)}")
sys.exit(0 if ok else 1)
