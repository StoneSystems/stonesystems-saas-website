"""Shared paths and helpers for the Results-page testimonial import."""
import json
import re
import subprocess
from pathlib import Path

FFMPEG = "/opt/homebrew/bin/ffmpeg"
FFPROBE = "/opt/homebrew/bin/ffprobe"
WHISPER = "/opt/homebrew/bin/whisper-cli"
WHISPER_MODEL = Path.home() / ".cache/whisper/ggml-base.en.bin"

RAW_DIR = Path("/Users/manuelojeda/Desktop/Claude Videos/testimonials raw")
ROOT = Path(__file__).resolve().parents[2]
VIDEOS_DIR = ROOT / "public/videos"
THUMBS_DIR = ROOT / "public/images/thumbnails"
HERE = Path(__file__).resolve().parent
MANIFEST = HERE / "manifest.json"
TRANSCRIPTS_DIR = HERE / "transcripts"
COMPONENT = ROOT / "components/TestimonialPage/TestimonialSection/TestimonialSection.tsx"

# Non-testimonial clips that also live in public/videos.
MARKETING_CLIPS = {
    "business-phone", "followup", "functional-website", "local-seo", "magic-funnel",
    "marketing-campaigns", "mctb", "print-services", "psy", "unified-inbox", "vsl",
}

# Raw files whose video is already on the site (confirmed by duration + the earlier
# import recorded in scripts/testimonial-import.json).
KNOWN_MATCHES = {
    "2026-04-16_Troys-trash_6ff532d4.mp4": "Troy.mp4",
    "2026-04-23_Aspira-Concrete-Solutions_43181e71.mp4": "Kirsten.mp4",
    "2026-04-23_New-England-Siding-LLC_1567e6de.mov": "Jeremy.mp4",
    "2026-04-24_RAM-Construction-Remodel_9d20a419.mov": "AlaskaClient.mp4",
    "2026-04-24_Upside-Roofing-Siding_72fd97c2.mp4": "UpsideRoofing.mp4",
    "2026-04-30_South-shore-enterprises-llc_73588e02.mov": "Junior.mp4",
    "2026-05-01_Brink-Painting-and-construction-llc_553239a7.mp4": "Brandon.mp4",
    "2026-05-01_Upside-Roofing-Siding_5f17b9cd.mov": "UpsideRoofing2.mp4",
    "2026-05-08_Mills-Driveway-and-Patio-Sealing_b6a10f04.mov": "ContractorClient.mp4",
    "2026-05-12_A-to-Z-Painting-LLC_8ce5b0f1.mp4": "Arlan.mp4",
    "2026-05-14_Avery-Roof-Services_45e4437b.mp4": "TomAvery.mp4",
}

NAME_RE = re.compile(r"^(\d{4}-\d{2}-\d{2})_(.+)_([0-9a-f]{8})\.[^.]+$")


def parse_name(filename: str):
    m = NAME_RE.match(filename)
    if not m:
        raise ValueError(f"unexpected raw filename: {filename}")
    return m.group(1), m.group(2), m.group(3)


def slugify(company: str) -> str:
    words = [w for w in re.split(r"[^A-Za-z0-9]+", company) if w]
    words = [w for w in words if w.lower() not in {"llc", "inc"}]
    return "".join(w[0].upper() + w[1:] for w in words)


def probe(path: Path) -> dict:
    p = subprocess.run(
        [FFPROBE, "-v", "error", "-select_streams", "v:0",
         "-show_entries", "stream=width,height,codec_name:stream_side_data=rotation:format=duration",
         "-of", "json", str(path)],
        capture_output=True, text=True, check=True,
    )
    j = json.loads(p.stdout or "{}")
    st = (j.get("streams") or [{}])[0]
    rot = 0
    for sd in st.get("side_data_list") or []:
        rot = sd.get("rotation", rot)
    return {
        "durationSec": round(float(j.get("format", {}).get("duration", 0)), 3),
        "width": st.get("width"), "height": st.get("height"),
        "rotation": rot, "codec": st.get("codec_name"),
    }


def load_manifest() -> list:
    return json.loads(MANIFEST.read_text())


def save_manifest(entries: list) -> None:
    MANIFEST.write_text(json.dumps(entries, indent=2, ensure_ascii=False) + "\n")


def site_testimonial_videos() -> list:
    return sorted(
        p for p in VIDEOS_DIR.iterdir()
        if p.suffix.lower() in {".mp4", ".mov"} and p.stem not in MARKETING_CLIPS
    )
