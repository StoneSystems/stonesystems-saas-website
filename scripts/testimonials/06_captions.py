"""Step 5: merge hand-written captions.json (source -> caption/personName) into the manifest."""
import json
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import HERE, load_manifest, save_manifest

caps = json.loads((HERE / "captions.json").read_text())
entries = load_manifest()
missing = []
for e in entries:
    if e["status"] != "new":
        continue
    c = caps.get(e["source"])
    if not c:
        missing.append(e["source"]); continue
    e["caption"], e["personName"] = c["caption"], c["personName"]
    n = len(e["caption"].split())
    if not (12 <= n <= 50) or not e["caption"].startswith('"') or not e["caption"].endswith('"'):
        print(f"WARN {e['source']}: {n} words / quoting")
save_manifest(entries)
unknown = set(caps) - {e["source"] for e in entries}
print(f"captions applied: {len(caps) - len(unknown)}; new entries without caption: {len(missing)}; unknown keys: {unknown}")
for m in missing: print("  missing:", m)
