import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route for generating cinematic car scenes
 * 
 * This endpoint can be used to trigger image generation or return prompts
 * for use with external image generation services.
 */

interface Scene {
  scene: number;
  title: string;
  prompt: string;
  description: string;
}

const CINEMATIC_SCENES: Scene[] = [
  {
    scene: 1,
    title: "Dawn City Streets",
    prompt: "A cinematic shot of a sleek car speeding through empty city streets at dawn. Low-angle tracking shot, glowing headlights cutting through morning mist, reflections on wet roads, dramatic shadows, golden hour lighting, motion blur in background, ultra-realistic, cinematic lighting, 4K quality, film grain, professional cinematography, depth of field, shallow focus on car",
    description: "Low-angle tracking shot through empty city streets at dawn"
  },
  {
    scene: 2,
    title: "Highway Aerial",
    prompt: "Aerial view of a sleek car on an open highway, golden sunlight streaming through clouds, dramatic motion blur, speed lines, vast landscape, cinematic composition, golden hour, warm tones, ultra-realistic, 4K quality, film grain, professional aerial cinematography, wide angle, epic scale",
    description: "Aerial view on open highway with golden sunlight"
  },
  {
    scene: 3,
    title: "Horizon Finale",
    prompt: "Final frame: a sleek car stopped against a vast horizon at sunset, dramatic silhouette, speed and freedom and power, cinematic composition, golden hour, warm dramatic lighting, ultra-realistic, 4K quality, film grain, professional cinematography, wide landscape, epic scale, sense of journey completed",
    description: "Car stopped against vast horizon - final frame"
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const scene = searchParams.get('scene');
    
    if (scene) {
      const sceneNum = parseInt(scene);
      const selectedScene = CINEMATIC_SCENES.find(s => s.scene === sceneNum);
      
      if (!selectedScene) {
        return NextResponse.json(
          { error: `Scene ${sceneNum} not found` },
          { status: 404 }
        );
      }
      
      return NextResponse.json(selectedScene);
    }
    
    // Return all scenes
    return NextResponse.json({
      scenes: CINEMATIC_SCENES,
      total: CINEMATIC_SCENES.length
    });
  } catch (error) {
    console.error('Error in generate-cinematic route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, scene, apiKey, provider } = body;
    
    // For now, return prompts. In production, you could integrate with
    // OpenAI, Stability AI, or other image generation APIs here
    
    if (action === 'get_prompts') {
      return NextResponse.json({
        scenes: CINEMATIC_SCENES,
        instructions: {
          openai: "Use DALL-E 3 API with these prompts",
          stability: "Use Stability AI API with these prompts",
          replicate: "Use Replicate API with these prompts"
        }
      });
    }
    
    if (action === 'generate' && scene) {
      const sceneNum = parseInt(scene);
      const selectedScene = CINEMATIC_SCENES.find(s => s.scene === sceneNum);
      
      if (!selectedScene) {
        return NextResponse.json(
          { error: `Scene ${sceneNum} not found` },
          { status: 404 }
        );
      }
      
      // In production, you would call the image generation API here
      // For now, return the prompt and instructions
      return NextResponse.json({
        scene: selectedScene,
        message: "To generate images, use the Python script or integrate an image generation API",
        note: "Set OPENAI_API_KEY or STABILITY_API_KEY environment variable"
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in generate-cinematic POST route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}




