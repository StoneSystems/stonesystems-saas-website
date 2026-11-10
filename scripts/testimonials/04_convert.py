"""Step 3: convert raw files with a given status to web mp4 + poster under public/."""
import subprocess
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import FFMPEG, RAW_DIR, THUMBS_DIR, VIDEOS_DIR, load_manifest, probe, save_manifest

statuses = set(sys.argv[1:]) or {"new"}
# Longest side capped at 1280, keep orientation (ffmpeg applies rotation metadata first),
# force even dimensions.
VF = ("scale=w='if(gt(iw,ih),min(1280,iw),-2)':h='if(gt(iw,ih),-2,min(1280,ih))',"
      "scale=trunc(iw/2)*2:trunc(ih/2)*2")


def encode(src: Path, dst: Path, crf: int) -> None:
    subprocess.run([FFMPEG, "-v", "error", "-y", "-i", str(src), "-vf", VF,
                    "-c:v", "libx264", "-preset", "slow", "-crf", str(crf), "-pix_fmt", "yuv420p",
                    "-c:a", "aac", "-b:a", "96k", "-ac", "1", "-movflags", "+faststart", str(dst)],
                   check=True)


entries = load_manifest()
existing = {p.stem.lower() for p in VIDEOS_DIR.iterdir()}
for e in entries:
    if e["status"] not in statuses:
        continue
    slug = e["slug"]
    if slug.lower() in existing and not e.get("videoSrc"):
        slug = f"{slug}{e['hash'][:4]}"
        e["slug"] = slug
    video = VIDEOS_DIR / f"{slug}.mp4"
    poster = THUMBS_DIR / f"{slug}.jpg"
    if not video.exists():
        encode(RAW_DIR / e["source"], video, 26)
        if video.stat().st_size > 10_000_000:
            encode(RAW_DIR / e["source"], video, 28)
    if not poster.exists():
        subprocess.run([FFMPEG, "-v", "error", "-y", "-ss", "0.5", "-i", str(video),
                        "-vframes", "1", "-q:v", "3", str(poster)], check=True)
    out = probe(video)
    e.update({
        "videoSrc": f"/videos/{slug}.mp4#t=0.1",
        "videoThumbnail": f"/images/thumbnails/{slug}.jpg",
        "output": {**out, "bytes": video.stat().st_size, "posterBytes": poster.stat().st_size},
    })
    existing.add(slug.lower())
    print(f"{e['source']} -> {slug}.mp4 {out['width']}x{out['height']} "
          f"{video.stat().st_size/1e6:.1f}MB dur {out['durationSec']} (src {e['durationSec']})", flush=True)
save_manifest(entries)
print("done")
