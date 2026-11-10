"""Step 2b: resolve 'check' entries by comparing opening words with site transcripts;
also copy every raw transcript into the manifest."""
import difflib
import json
import re
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import TRANSCRIPTS_DIR, load_manifest, save_manifest


def words(path: Path, n=30):
    text = " ".join(s["text"].strip() for s in json.loads(path.read_text())["transcription"])
    return text, re.findall(r"[a-z0-9']+", text.lower())[:n]


entries = load_manifest()
for e in entries:
    t = TRANSCRIPTS_DIR / (Path(e["source"]).stem + ".json")
    if not t.exists():
        print("missing transcript:", e["source"]); continue
    e["transcript"], raw_words = words(t)
    if e["status"] != "check":
        continue
    best = (0.0, None)
    for cand in e["durationCandidates"]:
        name = cand.split(" ")[0]
        site = TRANSCRIPTS_DIR / "site" / (Path(name).stem + ".json")
        _, site_words = words(site)
        r = difflib.SequenceMatcher(None, raw_words, site_words).ratio()
        best = max(best, (r, name))
    e["transcriptSimilarity"] = {"best": best[1], "ratio": round(best[0], 2)}
    if best[0] >= 0.6:
        e["status"], e["matchedSiteVideo"] = "already-on-site", best[1]
    else:
        e["status"] = "new"
    print(f"{e['source'][:55]:55} best={best[1]} ratio={best[0]:.2f} -> {e['status']}")
save_manifest(entries)
from collections import Counter
print(Counter(e["status"] for e in entries))
