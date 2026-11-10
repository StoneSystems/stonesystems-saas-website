"""Step 4: transcribe raw files locally with whisper.cpp; JSON lands in transcripts/."""
import json
import subprocess
import sys
import tempfile
from pathlib import Path
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import FFMPEG, RAW_DIR, TRANSCRIPTS_DIR, WHISPER, WHISPER_MODEL

TRANSCRIPTS_DIR.mkdir(exist_ok=True)
sources = sys.argv[1:] or sorted(p.name for p in RAW_DIR.iterdir() if not p.name.startswith("."))
with tempfile.TemporaryDirectory() as tmp:
    for name in sources:
        out = TRANSCRIPTS_DIR / (Path(name).stem + ".json")
        if out.exists():
            continue
        wav = Path(tmp) / "audio.wav"
        subprocess.run([FFMPEG, "-v", "error", "-y", "-i", str(RAW_DIR / name),
                        "-ar", "16000", "-ac", "1", "-c:a", "pcm_s16le", str(wav)], check=True)
        subprocess.run([WHISPER, "-m", str(WHISPER_MODEL), "-f", str(wav), "-oj", "-np",
                        "-of", str(out.with_suffix(""))], check=True, capture_output=True)
        text = " ".join(s["text"].strip() for s in json.loads(out.read_text())["transcription"])
        print(f"{name}: {text[:90]}", flush=True)
print("done")
