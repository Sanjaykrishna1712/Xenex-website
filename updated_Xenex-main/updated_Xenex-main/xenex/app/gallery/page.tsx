'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, title, index }: { src: string; title: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const time = Math.floor(video.currentTime);
      setCurrentTime(time);
      if (video.currentTime >= 30) {
        video.pause();
        setIsPlaying(false);
        video.currentTime = 0;
        setCurrentTime(0);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div
      className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer shadow-card card-hover animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loop={false}
        muted
        playsInline
        preload="metadata"
      />
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-xenex-red/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-red-glow">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      <div className="absolute top-4 left-4">
        <span className="bg-xenex-red/90 text-white px-3 py-1 rounded-lg text-xs font-bold">
          {title}
        </span>
      </div>
      {isPlaying && (
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
            {currentTime}s / 30s
          </span>
        </div>
      )}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
    </div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'road', label: 'Road Builds' },
    { id: 'film', label: 'Film Builds' },
    { id: 'reveals', label: 'Reveals' }
  ];

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop", category: 'road', type: 'photo' },
    { id: 2, src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop", category: 'film', type: 'photo' },
    { id: 3, src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop", category: 'reveals', type: 'photo' },
    { id: 4, src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop", category: 'road', type: 'photo' },
  ];

  const videos = [
    { id: 1, src: "/video1.mp4", title: "XENEX Reel", category: 'all', type: 'video' },
    { id: 2, src: "/video2.mp4", title: "XENEX Build", category: 'all', type: 'video' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(vid => vid.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            <span className="text-xenex-red">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Visual dominance
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 md:px-6 bg-xenex-black border-b border-xenex-red/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-xenex-red text-white shadow-red-glow'
                    : 'bg-xenex-gray text-white/70 hover:text-xenex-red hover:bg-xenex-gray-light border border-xenex-red/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-display text-white text-center">
            Cinematic <span className="text-xenex-red">Shots</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-card card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Image
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-display text-white text-center">
            Reels & <span className="text-xenex-red">Short Films</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <VideoPlayer
                key={video.id}
                src={video.src}
                title={video.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
