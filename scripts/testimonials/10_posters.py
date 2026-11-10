"""Regenerate posters for new entries from the 5 s mark so Zoom recordings show the client,
not the CSM who is on screen first. Optional per-slug overrides in poster-times.json."""
import json
import subprocess
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import FFMPEG, HERE, THUMBS_DIR, VIDEOS_DIR, load_manifest, save_manifest

overrides = json.loads((HERE / "poster-times.json").read_text()) if (HERE / "poster-times.json").exists() else {}
entries = load_manifest()
for e in entries:
    if e["status"] != "new":
        continue
    d = e["output"]["durationSec"]
    t = overrides.get(e["slug"], 5.0 if d >= 7 else round(d * 0.6, 2))
    t = min(t, d - 0.5)
    poster = THUMBS_DIR / f"{e['slug']}.jpg"
    subprocess.run([FFMPEG, "-v", "error", "-y", "-ss", str(t), "-i", str(VIDEOS_DIR / f"{e['slug']}.mp4"),
                    "-vframes", "1", "-q:v", "3", str(poster)], check=True)
    e["posterTimeSec"] = t
    e["output"]["posterBytes"] = poster.stat().st_size
save_manifest(entries)
print("posters regenerated:", sum(1 for e in entries if e["status"] == "new"))
