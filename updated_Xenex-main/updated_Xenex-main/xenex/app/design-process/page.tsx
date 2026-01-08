import Image from 'next/image';
import Link from 'next/link';

export default function DesignProcess() {
  const steps = [
    {
      number: 1,
      title: "Vision",
      subtitle: "Understanding character & emotion",
      description: "Every transformation begins with understanding. We listen to your story, feel your vision, and connect with the emotion behind what you want to create. This isn't just about aesthetics—it's about character, presence, and the story your car will tell.",
      image: "/vision-process.jpg",
      icon: "💭"
    },
    {
      number: 2,
      title: "Concept",
      subtitle: "Sketches & cinematic references",
      description: "Ideas take shape. We create detailed concepts, sketches, and mood boards. We draw inspiration from cinema, art, and design to craft a vision that's both unique and timeless. Every line, every curve, every detail is intentional.",
      image: "/concept-process.jpg",
      icon: "✏️"
    },
    {
      number: 3,
      title: "Craft",
      subtitle: "Workshop execution",
      description: "Vision meets reality. Our master craftsmen bring the concept to life with precision, passion, and unparalleled attention to detail. This is where character is forged, where every component is perfected, and where transformation truly happens.",
      image: "/craft-process.jpg",
      icon: "🔨"
    },
    {
      number: 4,
      title: "Reveal",
      subtitle: "Final presence & delivery",
      description: "The moment of truth. The reveal isn't just about showing the finished build—it's about experiencing the character that's been created. This is where vision becomes reality, where emotion meets execution, and where your car's story truly begins.",
      image: "/reveal-process.jpg",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop"
            alt="Design Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            Design <span className="text-xenex-red">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            How a vision becomes a build
          </p>
        </div>
      </section>

      {/* Products Steps */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <span className="text-xenex-red text-sm uppercase tracking-wider font-bold">
                      Step {step.number}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                      {step.title}
                    </h2>
                    <p className="text-xl text-xenex-red italic mt-2 font-semibold">
                      {step.subtitle}
                    </p>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-card group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to start your <span className="text-xenex-red">transformation</span>?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Every great build starts with a vision. Let's begin your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="btn-secondary inline-block"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              Begin Your Build
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
