"""Step 2: mark each raw file duplicate-in-folder / already-on-site / new / check."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import KNOWN_MATCHES, load_manifest, probe, save_manifest, site_testimonial_videos

entries = load_manifest()
site = {p.name: probe(p)["durationSec"] for p in site_testimonial_videos()}
claimed = set(KNOWN_MATCHES.values())
seen_md5 = {}
for e in entries:
    e["matchedSiteVideo"] = None
    e["durationCandidates"] = []
    if e["md5"] in seen_md5:
        e["status"] = "duplicate-in-folder"
        e["duplicateOf"] = seen_md5[e["md5"]]
        continue
    seen_md5[e["md5"]] = e["source"]
    if e["source"] in KNOWN_MATCHES:
        e["status"] = "already-on-site"
        e["matchedSiteVideo"] = KNOWN_MATCHES[e["source"]]
        continue
    cands = sorted(
        (abs(d - e["durationSec"]), n) for n, d in site.items()
        if n not in claimed and abs(d - e["durationSec"]) <= 2.0
    )
    e["durationCandidates"] = [f"{n} ({diff:.2f}s)" for diff, n in cands]
    e["status"] = "check" if cands else "new"
save_manifest(entries)

from collections import Counter
print(Counter(e["status"] for e in entries))
for e in entries:
    if e["status"] == "duplicate-in-folder":
        print("  dup:", e["source"], "==", e["duplicateOf"])
    if e["status"] == "check":
        print("  check:", e["source"], e["durationSec"], "->", e["durationCandidates"])
unmatched_site = sorted(set(site) - claimed)
print("site videos with no raw match:", len(unmatched_site))
