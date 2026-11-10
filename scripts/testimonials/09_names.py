"""Step 8: replace personName on the page from names.json (raw source filename -> first name)."""
import json
import re
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import COMPONENT, HERE, load_manifest, save_manifest

names = json.loads((HERE / "names.json").read_text())
caps_path = HERE / "captions.json"
caps = json.loads(caps_path.read_text())
entries = load_manifest()
src = COMPONENT.read_text()
changed, skipped = [], []
for e in entries:
    if e["status"] != "new":
        continue
    first = (names.get(e["source"]) or "").strip()
    if not first:
        skipped.append(e["company"]); continue
    new_name = f"-{first}"
    if e["personName"] == new_name:
        continue
    pat = re.compile(r"(videoSrc: '%s',\n(?:.*\n)?\s*personName: )(?:'[^']*'|\"[^\"]*\")" % re.escape(e["videoSrc"]))
    src, n = pat.subn(lambda m: m.group(1) + json.dumps(new_name).replace('"', "'"), src)
    assert n == 1, (e["source"], n)
    changed.append((e["personName"], new_name))
    e["personName"] = new_name
    caps[e["source"]]["personName"] = new_name
COMPONENT.write_text(src)
save_manifest(entries)
caps_path.write_text(json.dumps(caps, indent=2, ensure_ascii=False) + "\n")
for old, new in changed: print(f"{old:40} -> {new}")
print(f"\nchanged {len(changed)}; still without a first name: {len(skipped)}")
for s in skipped: print("  ", s)
