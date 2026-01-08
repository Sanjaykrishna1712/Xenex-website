import Image from 'next/image';
import Link from 'next/link';

export default function XenexProduct() {
  const services = [
    {
      title: 'Custom Builds',
      description: 'Complete vehicle transformations tailored to your vision. From concept to completion, we bring your dream car to life.',
      icon: '🚗'
    },
    {
      title: 'Film Cars',
      description: 'Cinematic vehicles built for the silver screen. Designed to own every frame with presence and character.',
      icon: '🎬'
    },
    {
      title: 'Premium Modifications',
      description: 'High-end modifications that enhance both aesthetics and performance. Every detail matters.',
      icon: '✨'
    },
    {
      title: 'Design Consultation',
      description: 'Expert guidance from concept to execution. We help you define and refine your vision.',
      icon: '💡'
    }
  ];

  const features = [
    'Master craftsmanship',
    'Cinematic design approach',
    'Premium materials',
    'Film industry experience',
    'Custom fabrication',
    'Attention to detail'
  ];

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
            alt="XENEX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-6xl md:text-8xl font-bold font-display text-white mb-4">
            <span className="text-xenex-red">X</span>ENEX
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 italic">
            Where vision becomes character
          </p>
        </div>
      </section>

      {/* About XENEX */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Premium Car <span className="text-xenex-red">Transformation</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              XENEX represents our flagship transformation service. We don't just modify cars—we create characters. 
              Every build is a story, every detail a narrative choice, and every transformation a journey from vision to reality.
            </p>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden shadow-card mb-12 group">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=675&fit=crop"
              alt="XENEX Build"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-12">
            XENEX <span className="text-xenex-red">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-xenex-gray rounded-xl p-8 border-2 border-xenex-red/30 hover:border-xenex-red transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-12">
            Why Choose <span className="text-xenex-red">XENEX</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-xenex-gray rounded-lg p-4 border border-xenex-red/20"
              >
                <div className="text-xenex-red text-xl">✓</div>
                <span className="text-white/90 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to start your <span className="text-xenex-red">XENEX</span> transformation?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Let's discuss your vision and bring your dream car to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/products"
              className="btn-secondary inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

