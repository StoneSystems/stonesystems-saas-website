"""Step 6: append new cards (oldest first) to the data array in the Results component."""
import json
import re
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import COMPONENT, load_manifest

entries = [e for e in load_manifest() if e["status"] == "new"]
entries.sort(key=lambda e: (e["date"], e["source"]))
src = COMPONENT.read_text()
missing = [e for e in entries if e["videoSrc"] not in src]
for e in missing:
    if not (e["caption"] and e["personName"]):
        sys.exit(f"missing caption/personName for {e['source']}")

def js(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)  # prettier normalises the quote style afterwards

block = "".join(
    "  {\n"
    f"    testimonial: {js(e['caption'])},\n"
    f"    videoSrc: {js(e['videoSrc'])},\n"
    f"    videoThumbnail: {js(e['videoThumbnail'])},\n"
    f"    personName: {js(e['personName'])},\n"
    "  },\n"
    for e in missing
)
start = src.index("const data = [")
end = src.index("\n];", start)
src = src[: end + 1] + block + src[end + 1 :]
COMPONENT.write_text(src)
print(f"inserted {len(missing)} cards; {len(re.findall(r'videoSrc:', src))} total")
