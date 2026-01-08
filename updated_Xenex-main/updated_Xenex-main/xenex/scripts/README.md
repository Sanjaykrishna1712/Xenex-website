# Cinematic Car Scene Generator

Generate ultra-realistic cinematic car scenes using AI image generation APIs.

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Set up your API key (choose one):
   - **OpenAI (DALL-E 3)**: Set `OPENAI_API_KEY` environment variable
   - **Stability AI**: Set `STABILITY_API_KEY` environment variable

   On Windows PowerShell:
   ```powershell
   $env:OPENAI_API_KEY="your-api-key-here"
   ```

   On Linux/Mac:
   ```bash
   export OPENAI_API_KEY="your-api-key-here"
   ```

   Or create a `.env` file:
   ```
   OPENAI_API_KEY=your-api-key-here
   ```

## Usage

### Generate all three cinematic scenes:
```bash
python scripts/generate_cinematic_car.py --provider openai
```

### Save prompts only (without generating images):
```bash
python scripts/generate_cinematic_car.py --prompts-only
```

### Use with Stability AI:
```bash
python scripts/generate_cinematic_car.py --provider stability
```

### Specify API key directly:
```bash
python scripts/generate_cinematic_car.py --provider openai --api-key your-key-here
```

## Output

Generated images will be saved to `public/cinematic/` directory.

## Scenes

1. **Dawn City Streets**: Low-angle tracking shot through empty city streets at dawn
2. **Highway Aerial**: Aerial view on open highway with golden sunlight
3. **Horizon Finale**: Car stopped against vast horizon - final frame

## API Providers

### OpenAI DALL-E 3
- High quality, realistic images
- Requires API key from https://platform.openai.com
- Best for cinematic, photorealistic results

### Stability AI
- Good quality, customizable
- Requires API key from https://platform.stability.ai
- Supports fine-tuning

## Web Interface

Visit `/cinematic-generator` in your Next.js app to:
- View all prompts
- Copy prompts for use with any image generation service
- Get detailed scene descriptions

## Notes

- Images are generated in 1792x1024 (wide cinematic format)
- Each scene takes 30-60 seconds to generate
- Make sure you have API credits available
- Generated images are saved locally in `public/cinematic/`




