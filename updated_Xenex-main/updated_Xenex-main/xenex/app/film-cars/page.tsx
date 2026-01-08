import Image from 'next/image';
import Link from 'next/link';

export default function FilmCars() {
  const filmProjects = [
    {
      id: 1,
      title: "Action Thriller Feature",
      car: "The Pursuit",
      description: "High-speed chase sequences required a vehicle that could perform and look stunning on camera.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      category: "Feature Film",
      specs: { power: "750 HP", topSpeed: "350 km/h" }
    },
    {
      id: 2,
      title: "Luxury Brand Campaign",
      car: "Silver Screen",
      description: "A promotional car that embodied elegance and sophistication for a premium brand launch.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      category: "Commercial",
      specs: { power: "680 HP", topSpeed: "330 km/h" }
    },
    {
      id: 3,
      title: "Akhanda 2",
      car: "Mahindra Thar Roxx",
      description: "Featured vehicle in the blockbuster Telugu action film Akhanda 2. Custom-built Mahindra Thar Roxx designed to match the intensity and rugged character of the film's protagonist.",
      image: "/akhanda-roxx-poster.png",
      category: "Feature Film",
      specs: { power: "150 HP", topSpeed: "155 km/h" }
    },
    {
      id: 4,
      title: "Guntur Karam",
      car: "Guntur Karam",
      description: "Featured vehicle in the Telugu action film Guntur Karam. Custom-built red Jeep Wrangler Rubicon designed for off-road action sequences and dramatic desert scenes.",
      image: "/jeep-rubicon-guntur.jpg",
      category: "Feature Film",
      specs: { power: "285 HP", topSpeed: "180 km/h" }
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
            alt="Film & Cinema Cars"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            Film & <span className="text-xenex-red">Cinema</span> Cars
          </h1>
          <p className="text-xl md:text-2xl text-white/80 italic">
            In films, cars are characters
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Built for the <span className="text-xenex-red">Screen</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              When a car appears on screen, it's not just a prop—it's a character. It has presence, 
              personality, and purpose. At <span className="text-xenex-red">XENEX</span>, we understand that every frame matters, every angle 
              tells a story, and every detail contributes to the narrative.
            </p>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden shadow-card mb-12 group">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=675&fit=crop"
              alt="Film Car Production"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
          </div>

          <p className="text-white/70 text-lg leading-relaxed text-center">
            Our cinematic builds are designed with the camera in mind. We know how light plays on surfaces, 
            how colors translate on screen, and how presence translates to impact. Every <span className="text-xenex-red">XENEX</span> film car 
            doesn't just look good—it owns the frame.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-white text-center">
            Film <span className="text-xenex-red">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filmProjects.map((project, index) => (
              <div key={project.id} className="group bg-xenex-gray rounded-xl overflow-hidden shadow-card card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-xenex-red text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white font-display group-hover:text-xenex-red transition-colors">
                    {project.car}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{project.title}</p>
                  <p className="text-white/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-xenex-red/20">
                    <div>
                      <div className="text-xenex-red font-bold">{project.specs.power}</div>
                      <div className="text-white/60">Power</div>
                    </div>
                    <div>
                      <div className="text-xenex-red font-bold">{project.specs.topSpeed}</div>
                      <div className="text-white/60">Top Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Presentation */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-white text-center">
            Movie-Style <span className="text-xenex-red">Presentation</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-card group">
              <Image
                src="/filmcar1.jpg"
                alt="Film Car 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-card group">
              <Image
                src="/filmcar2.jpg"
                alt="Film Car 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-card group">
              <Image
                src="/filmcar3.jpg"
                alt="Film Car 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Looking for a car that <span className="text-xenex-red">owns the frame</span>?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Whether it's for a feature film, commercial, music video, or special event, 
            we create cars that command attention and deliver impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              Discuss Your Project
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
