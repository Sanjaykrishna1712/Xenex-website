import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
            alt="XENEX Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            About <span className="text-xenex-red">XENEX</span>
          </h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-white text-center">
            Origin <span className="text-xenex-red">Story</span>
          </h2>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              <span className="text-xenex-red">XENEX</span> was born from a simple yet profound realization: cars are not just machines. 
              They are characters. They have souls, stories, and the power to transform not just 
              how we move, but who we are.
            </p>
            <p>
              Founded in Hyderabad, <span className="text-xenex-red">XENEX</span> emerged from a passion for automotive artistry and 
              cinematic storytelling. We saw that the world needed more than modifications—it 
              needed transformations. Not just changes, but character development.
            </p>
            <p>
              Every build we create is a narrative. From the initial vision to the final reveal, 
              we craft stories that resonate, characters that command attention, and experiences 
              that define moments.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-white text-center">
            Our <span className="text-xenex-red">Vision</span>
          </h2>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-card mb-8 group">
            <Image
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=675&fit=crop"
              alt="XENEX Vision"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
          </div>
          <p className="text-white/80 text-xl leading-relaxed text-center italic">
            "Cars as emotional & cinematic entities. Not just transportation, but transformation. 
            Not just vehicles, but vessels of character, power, and presence."
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-white text-center">
            Our <span className="text-xenex-red">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-xenex-gray p-8 rounded-xl border border-xenex-red/20 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-xenex-red font-display">Custom Builds</h3>
              <p className="text-white/70 leading-relaxed">
                From concept to completion, we transform your vision into reality. Every detail 
                matters, every line tells a story.
              </p>
            </div>
            
            <div className="bg-xenex-gray p-8 rounded-xl border border-xenex-red/20 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-xenex-red font-display">Screen Cars</h3>
              <p className="text-white/70 leading-relaxed">
                Built for cinema, designed for impact. Our film cars don't just appear on screen— 
                they own it.
              </p>
            </div>
            
            <div className="bg-xenex-gray p-8 rounded-xl border border-xenex-red/20 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-xenex-red font-display">Storytelling</h3>
              <p className="text-white/70 leading-relaxed">
                Every build is a narrative. We don't just create cars—we craft characters that 
                resonate and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display text-white text-center">
            Brand <span className="text-xenex-red">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl mb-6">🔨</div>
              <h3 className="text-3xl font-bold mb-4 text-xenex-red font-display">Craft</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Precision in every detail. Excellence in every execution. Craft is not just what 
                we do—it's who we are.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-xenex-red font-display">Precision</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Every measurement matters. Every angle counts. Precision is the foundation of 
                perfection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-3xl font-bold mb-4 text-xenex-red font-display">Character</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Beyond aesthetics, beyond performance—character is the soul that makes every 
                <span className="text-xenex-red">XENEX</span> build unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
