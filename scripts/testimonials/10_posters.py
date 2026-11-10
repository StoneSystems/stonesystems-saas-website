"""Set each new card's start fragment (#t=) and poster to the same moment.

Browsers seek to the #t fragment as soon as metadata loads and Chrome then shows that
frame instead of the poster, so the fragment is what visitors actually see. Zoom
recordings open on the CSM; start-times.json gives those clips a later start (first
frame with the client on screen). Everything else starts at 0.1 s like the legacy cards.
"""
import json
import re
import subprocess
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import COMPONENT, FFMPEG, HERE, THUMBS_DIR, VIDEOS_DIR, load_manifest, save_manifest

starts = json.loads((HERE / "start-times.json").read_text())
entries = load_manifest()
src = COMPONENT.read_text()
for e in entries:
    if e["status"] != "new":
        continue
    t = starts.get(e["slug"], 0.1)
    new_src = f"/videos/{e['slug']}.mp4#t={t:g}"
    src, n = re.subn(r"videoSrc: '/videos/%s\.mp4#t=[0-9.]+'" % re.escape(e["slug"]), f"videoSrc: '{new_src}'", src)
    assert n == 1, (e["slug"], n)
    e["videoSrc"], e["startTimeSec"], e["posterTimeSec"] = new_src, t, t
    poster = THUMBS_DIR / f"{e['slug']}.jpg"
    subprocess.run([FFMPEG, "-v", "error", "-y", "-ss", str(t), "-i", str(VIDEOS_DIR / f"{e['slug']}.mp4"),
                    "-vframes", "1", "-q:v", "3", str(poster)], check=True)
    e["output"]["posterBytes"] = poster.stat().st_size
COMPONENT.write_text(src)
save_manifest(entries)
print("updated", sum(1 for e in entries if e["status"] == "new"), "cards; custom starts:", len(starts))
