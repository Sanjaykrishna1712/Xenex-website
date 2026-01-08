"""
Cinematic Car Scene Generator
Generates ultra-realistic cinematic car shots using AI image generation APIs.
"""

import os
import requests
import json
from typing import Optional, List
from pathlib import Path

# Configuration
OUTPUT_DIR = Path("public/cinematic")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

class CinematicCarGenerator:
    """Generate cinematic car scenes using AI image generation."""
    
    def __init__(self, api_key: Optional[str] = None, provider: str = "openai"):
        """
        Initialize the generator.
        
        Args:
            api_key: API key for the image generation service
            provider: 'openai' (DALL-E), 'stability' (Stable Diffusion), or 'replicate'
        """
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        self.provider = provider
        
    def generate_scene_1(self) -> dict:
        """Scene 1: Low-angle tracking shot through empty city streets at dawn."""
        prompt = (
            "A cinematic shot of a sleek car speeding through empty city streets at dawn. "
            "Low-angle tracking shot, glowing headlights cutting through morning mist, "
            "reflections on wet roads, dramatic shadows, golden hour lighting, "
            "motion blur in background, ultra-realistic, cinematic lighting, 4K quality, film grain, "
            "professional cinematography, depth of field, shallow focus on car"
        )
        return {
            "scene": 1,
            "title": "Dawn City Streets",
            "prompt": prompt,
            "description": "Low-angle tracking shot through empty city streets at dawn"
        }
    
    def generate_scene_2(self) -> dict:
        """Scene 2: Aerial view on open highway with golden sunlight."""
        prompt = (
            "Aerial view of a sleek car on an open highway, golden sunlight streaming through clouds, "
            "dramatic motion blur, speed lines, vast landscape, cinematic composition, "
            "golden hour, warm tones, ultra-realistic, 4K quality, film grain, "
            "professional aerial cinematography, wide angle, epic scale"
        )
        return {
            "scene": 2,
            "title": "Highway Aerial",
            "prompt": prompt,
            "description": "Aerial view on open highway with golden sunlight"
        }
    
    def generate_scene_3(self) -> dict:
        """Scene 3: Car stopped against vast horizon."""
        prompt = (
            "Final frame: a sleek car stopped against a vast horizon at sunset, "
            "dramatic silhouette, speed and freedom and power, cinematic composition, "
            "golden hour, warm dramatic lighting, ultra-realistic, 4K quality, film grain, "
            "professional cinematography, wide landscape, epic scale, sense of journey completed"
        )
        return {
            "scene": 3,
            "title": "Horizon Finale",
            "prompt": prompt,
            "description": "Car stopped against vast horizon - final frame"
        }
    
    def generate_with_openai(self, prompt: str, size: str = "1024x1024") -> Optional[str]:
        """Generate image using OpenAI DALL-E API."""
        if not self.api_key:
            raise ValueError("OpenAI API key not found. Set OPENAI_API_KEY environment variable.")
        
        url = "https://api.openai.com/v1/images/generations"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        data = {
            "model": "dall-e-3",
            "prompt": prompt,
            "size": "1792x1024",  # Wide format for cinematic shots
            "quality": "hd",
            "n": 1
        }
        
        try:
            response = requests.post(url, headers=headers, json=data, timeout=60)
            response.raise_for_status()
            result = response.json()
            
            if "data" in result and len(result["data"]) > 0:
                image_url = result["data"][0]["url"]
                return self._download_image(image_url, f"scene_{len(os.listdir(OUTPUT_DIR)) + 1}.png")
            return None
        except Exception as e:
            print(f"Error generating image with OpenAI: {e}")
            return None
    
    def generate_with_stability(self, prompt: str) -> Optional[str]:
        """Generate image using Stability AI API."""
        if not self.api_key:
            raise ValueError("Stability AI API key not found. Set STABILITY_API_KEY environment variable.")
        
        url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        data = {
            "text_prompts": [{"text": prompt}],
            "cfg_scale": 7,
            "height": 1024,
            "width": 1792,
            "samples": 1,
            "steps": 30
        }
        
        try:
            response = requests.post(url, headers=headers, json=data, timeout=60)
            response.raise_for_status()
            result = response.json()
            
            if "artifacts" in result and len(result["artifacts"]) > 0:
                import base64
                image_data = base64.b64decode(result["artifacts"][0]["base64"])
                filename = OUTPUT_DIR / f"scene_{len(os.listdir(OUTPUT_DIR)) + 1}.png"
                with open(filename, "wb") as f:
                    f.write(image_data)
                return str(filename)
            return None
        except Exception as e:
            print(f"Error generating image with Stability AI: {e}")
            return None
    
    def _download_image(self, url: str, filename: str) -> str:
        """Download image from URL and save locally."""
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        filepath = OUTPUT_DIR / filename
        with open(filepath, "wb") as f:
            f.write(response.content)
        return str(filepath)
    
    def generate_all_scenes(self) -> List[dict]:
        """Generate all three cinematic scenes."""
        scenes = [
            self.generate_scene_1(),
            self.generate_scene_2(),
            self.generate_scene_3()
        ]
        
        results = []
        for scene in scenes:
            print(f"\n🎬 Generating Scene {scene['scene']}: {scene['title']}")
            print(f"   {scene['description']}")
            
            if self.provider == "openai":
                image_path = self.generate_with_openai(scene['prompt'])
            elif self.provider == "stability":
                image_path = self.generate_with_stability(scene['prompt'])
            else:
                print(f"⚠️  Provider '{self.provider}' not implemented. Skipping generation.")
                image_path = None
            
            scene['image_path'] = image_path
            scene['status'] = 'success' if image_path else 'failed'
            results.append(scene)
            
            if image_path:
                print(f"✅ Generated: {image_path}")
            else:
                print(f"❌ Failed to generate scene {scene['scene']}")
        
        return results
    
    def save_prompts(self, filename: str = "cinematic_prompts.json"):
        """Save all prompts to a JSON file for reference."""
        scenes = [
            self.generate_scene_1(),
            self.generate_scene_2(),
            self.generate_scene_3()
        ]
        
        filepath = Path(filename)
        with open(filepath, "w") as f:
            json.dump(scenes, f, indent=2)
        print(f"\n💾 Prompts saved to {filepath}")


def main():
    """Main function to run the generator."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Generate cinematic car scenes")
    parser.add_argument("--provider", choices=["openai", "stability"], default="openai",
                       help="Image generation provider")
    parser.add_argument("--api-key", type=str, help="API key (or set environment variable)")
    parser.add_argument("--prompts-only", action="store_true",
                       help="Only save prompts without generating images")
    
    args = parser.parse_args()
    
    generator = CinematicCarGenerator(api_key=args.api_key, provider=args.provider)
    
    if args.prompts_only:
        generator.save_prompts()
        print("\n✨ Prompts saved. Use these with any image generation tool!")
    else:
        print("🚗 Starting cinematic car scene generation...")
        print(f"📁 Output directory: {OUTPUT_DIR.absolute()}")
        results = generator.generate_all_scenes()
        
        print("\n" + "="*60)
        print("📊 GENERATION SUMMARY")
        print("="*60)
        for result in results:
            status_icon = "✅" if result['status'] == 'success' else "❌"
            print(f"{status_icon} Scene {result['scene']}: {result['title']}")
            if result.get('image_path'):
                print(f"   → {result['image_path']}")
        print("="*60)


if __name__ == "__main__":
    main()




