"""Step 1: build manifest.json with one entry per raw file (md5, duration, size)."""
import hashlib
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import RAW_DIR, parse_name, probe, save_manifest, slugify

entries = []
for f in sorted(RAW_DIR.iterdir()):
    if f.name.startswith("."):
        continue
    date, company, h = parse_name(f.name)
    info = probe(f)
    entries.append({
        "source": f.name, "date": date, "company": company, "hash": h,
        "md5": hashlib.md5(f.read_bytes()).hexdigest(), "bytes": f.stat().st_size,
        **info, "status": None, "matchedSiteVideo": None, "slug": slugify(company),
        "videoSrc": None, "videoThumbnail": None, "personName": None,
        "transcript": None, "caption": None,
    })
save_manifest(entries)
print(f"{len(entries)} raw files probed")
