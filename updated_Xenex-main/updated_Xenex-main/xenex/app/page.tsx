import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredBuilds = [
    {
      id: 1,
      name: "The Shadow",
      description: "A midnight black transformation that commands presence",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      tag: "Road Build",
      specs: { power: "650 HP", topSpeed: "320 km/h", year: "2024" }
    },
    {
      id: 2,
      name: "Cinema Star",
      description: "Built for the silver screen, designed to own every frame",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      tag: "Film Build",
      specs: { power: "720 HP", topSpeed: "340 km/h", year: "2024" }
    },
    {
      id: 3,
      name: "The Phoenix",
      description: "Rising from vision to reality, a character reborn",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      tag: "Custom Build",
      specs: { power: "800 HP", topSpeed: "360 km/h", year: "2024" }
    },
    {
      id: 4,
      name: "Velocity",
      description: "Where speed meets sophistication",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      tag: "Performance Build",
      specs: { power: "900 HP", topSpeed: "380 km/h", year: "2024" }
    }
  ];

  return (
    <div className="min-h-screen bg-xenex-dark">
      {/* Hero Section with Car Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden particle-bg">
        <div className="absolute inset-0 z-0">
          {/* Full-screen cinematic video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover animate-scale-in"
            poster="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
              alt="XENEX Hero"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/90 to-xenex-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-xenex-dark via-transparent to-xenex-dark/50" />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-xenex-red/10 via-transparent to-xenex-red/10 animate-pulse-red"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold font-display mb-4 tracking-tight animate-fade-in-up glow-text">
              <span className="text-xenex-red animate-pulse-red inline-block">X</span>
              <span className="text-xenex-red animate-slide-in-right inline-block">ENEX</span>
            </h1>
            <div className="h-1 w-32 bg-xenex-red mx-auto mb-6 animate-scale-in shadow-red-glow"></div>
            <p className="text-xl md:text-3xl text-white font-semibold mb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We don't modify cars.
            </p>
            <p className="text-2xl md:text-4xl text-xenex-red font-bold font-display animate-slide-up glow-text" style={{ animationDelay: '0.4s' }}>
              We create characters.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/contact"
              className="btn-primary animate-float"
            >
              Start Your Build
            </Link>
            <Link
              href="/builds"
              className="btn-secondary animate-float"
              style={{ animationDelay: '0.1s' }}
            >
              View Builds
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Builds Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Featured <span className="text-xenex-red">Builds</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Each car tells a story. Each story defines a character.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBuilds.map((build, index) => (
              <div
                key={build.id}
                className="group bg-xenex-gray rounded-xl overflow-hidden shadow-card card-hover animate-fade-in-up gradient-border"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Link href={`/builds#${build.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={build.image}
                      alt={build.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    <div className="absolute top-4 right-4 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <span className="bg-xenex-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-red-glow animate-pulse-red">
                        {build.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-xenex-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-xenex-red/50 transition-all duration-500 rounded-xl" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-xenex-red transition-all duration-300 glow-text group-hover:glow-text">
                      {build.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {build.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/60 border-t border-xenex-red/20 pt-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <div className="text-xenex-red font-bold group-hover:glow-text">{build.specs.power}</div>
                        <div>Power</div>
                      </div>
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <div className="text-xenex-red font-bold group-hover:glow-text">{build.specs.topSpeed}</div>
                        <div>Top Speed</div>
                      </div>
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <div className="text-xenex-red font-bold group-hover:glow-text">{build.specs.year}</div>
                        <div>Year</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Industry Highlight */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <span className="text-xenex-red text-sm font-bold uppercase tracking-wider mb-4 block">
                Cinema & Screen
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                Cars Designed for <span className="text-xenex-red">Film</span>
              </h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                In films, cars are characters. They have presence, personality, and purpose. 
                At <span className="text-xenex-red">XENEX</span>, we understand that every frame matters, every angle tells a story.
              </p>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Our cinematic builds don't just look good—they own the screen, command attention, 
                and become unforgettable characters in their own right.
              </p>
              <Link
                href="/film-cars"
                className="btn-secondary inline-block"
              >
                Explore Film Builds
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card group">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
                alt="Film Car"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-xenex-red/30 rounded-xl group-hover:border-xenex-red transition-colors duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Design <span className="text-xenex-red">Philosophy</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-xenex-gray rounded-xl p-8 text-center card-hover gradient-border animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4 animate-float">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-xenex-red font-display glow-text group-hover:animate-pulse-red">Emotion</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                Every build starts with feeling. We don't just see a car—we feel its potential, 
                its character, its story waiting to be told.
              </p>
            </div>
            
            <div className="bg-xenex-gray rounded-xl p-8 text-center card-hover gradient-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.1s' }}>🔥</div>
              <h3 className="text-2xl font-bold mb-4 text-xenex-red font-display glow-text group-hover:animate-pulse-red">Power</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                Raw capability meets refined execution. Performance isn't just numbers—it's 
                the confidence that comes with true mastery.
              </p>
            </div>
            
            <div className="bg-xenex-gray rounded-xl p-8 text-center card-hover gradient-border animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.2s' }}>👑</div>
              <h3 className="text-2xl font-bold mb-4 text-xenex-red font-display glow-text group-hover:animate-pulse-red">Presence</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                When a <span className="text-xenex-red">XENEX</span> build enters a room, it doesn't just arrive—it commands. 
                Presence is the final, undeniable truth of character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-xenex-black to-xenex-dark relative overflow-hidden particle-bg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-xenex-red rounded-full blur-3xl animate-pulse-red"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-xenex-red rounded-full blur-3xl animate-pulse-red" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-xenex-red rounded-full blur-3xl animate-pulse-red" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 glow-text animate-scale-in">
            Tell us your car's <span className="text-xenex-red animate-pulse-red inline-block">story</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Every great transformation begins with a vision. Share yours with us, and let's 
            create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="btn-primary animate-float"
            >
              Start Your Build
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block animate-float"
              style={{ animationDelay: '0.1s' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
