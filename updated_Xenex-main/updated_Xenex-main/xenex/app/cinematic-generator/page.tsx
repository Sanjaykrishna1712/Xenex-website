'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Scene {
  scene: number;
  title: string;
  prompt: string;
  description: string;
}

export default function CinematicGenerator() {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchScenes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-cinematic');
      const data = await response.json();
      setScenes(data.scenes || []);
    } catch (err) {
      setError('Failed to load scenes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async (sceneNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/generate-cinematic?scene=${sceneNum}`);
      const scene = await response.json();
      setSelectedScene(scene);
    } catch (err) {
      setError('Failed to generate scene');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-xenex-red/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            Cinematic <span className="text-xenex-red">Generator</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 italic">
            Ultra-realistic cinematic car scenes
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-6xl">
          {/* Instructions */}
          <div className="bg-xenex-gray rounded-xl p-8 mb-12 border-2 border-xenex-red/30">
            <h2 className="text-3xl font-bold font-display text-white mb-4">
              How to Generate Cinematic Scenes
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                <strong className="text-xenex-red">Option 1:</strong> Use the Python script with AI image generation APIs
              </p>
              <code className="block bg-xenex-dark p-4 rounded-lg text-sm">
                cd xenex<br />
                python scripts/generate_cinematic_car.py --provider openai
              </code>
              <p className="mt-4">
                <strong className="text-xenex-red">Option 2:</strong> Use the prompts below with any image generation service
              </p>
              <button
                onClick={fetchScenes}
                disabled={loading}
                className="btn-primary mt-4"
              >
                {loading ? 'Loading...' : 'Load Cinematic Prompts'}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-4 mb-8 text-red-200">
              {error}
            </div>
          )}

          {/* Scenes Display */}
          {scenes.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-display text-white text-center mb-8">
                Cinematic <span className="text-xenex-red">Scenes</span>
              </h2>
              
              {scenes.map((scene) => (
                <div
                  key={scene.scene}
                  className="bg-xenex-gray rounded-xl overflow-hidden border-2 border-xenex-red/30 hover:border-xenex-red transition-colors"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold font-display text-white mb-2">
                          Scene {scene.scene}: {scene.title}
                        </h3>
                        <p className="text-white/70">{scene.description}</p>
                      </div>
                      <span className="bg-xenex-red text-white px-4 py-2 rounded-full text-sm font-bold">
                        Scene {scene.scene}
                      </span>
                    </div>
                    
                    <div className="bg-xenex-dark rounded-lg p-4 mb-4">
                      <p className="text-white/90 text-sm leading-relaxed">
                        <strong className="text-xenex-red">Prompt:</strong> {scene.prompt}
                      </p>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleGenerate(scene.scene)}
                        className="btn-primary"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(scene.prompt);
                          alert('Prompt copied to clipboard!');
                        }}
                        className="btn-secondary"
                      >
                        Copy Prompt
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Selected Scene Details */}
          {selectedScene && (
            <div className="mt-12 bg-xenex-gray rounded-xl p-8 border-2 border-xenex-red">
              <h3 className="text-3xl font-bold font-display text-white mb-4">
                {selectedScene.title}
              </h3>
              <p className="text-white/80 mb-6">{selectedScene.description}</p>
              <div className="bg-xenex-dark rounded-lg p-6">
                <p className="text-white/90 leading-relaxed">{selectedScene.prompt}</p>
              </div>
              <p className="text-white/60 text-sm mt-6 italic">
                💡 Use this prompt with DALL-E 3, Stable Diffusion, Midjourney, or any image generation service
              </p>
            </div>
          )}

          {/* Scene Descriptions */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-xenex-gray rounded-xl p-6 border-2 border-xenex-red/30">
              <div className="text-4xl mb-4">🎬</div>
              <h4 className="text-xl font-bold text-white mb-2">Scene 1: Dawn City Streets</h4>
              <p className="text-white/70 text-sm">
                Low-angle tracking shot through empty city streets at dawn. Glowing headlights, reflections on wet roads.
              </p>
            </div>
            <div className="bg-xenex-gray rounded-xl p-6 border-2 border-xenex-red/30">
              <div className="text-4xl mb-4">✈️</div>
              <h4 className="text-xl font-bold text-white mb-2">Scene 2: Highway Aerial</h4>
              <p className="text-white/70 text-sm">
                Aerial view on open highway with golden sunlight. Dramatic motion blur and speed lines.
              </p>
            </div>
            <div className="bg-xenex-gray rounded-xl p-6 border-2 border-xenex-red/30">
              <div className="text-4xl mb-4">🌅</div>
              <h4 className="text-xl font-bold text-white mb-2">Scene 3: Horizon Finale</h4>
              <p className="text-white/70 text-sm">
                Final frame: car stopped against vast horizon. Speed, freedom, and power.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




