import Image from 'next/image';
import Link from 'next/link';

export default function XDriveProduct() {
  const services = [
    {
      title: 'Performance Tuning',
      description: 'Advanced engine tuning and optimization for maximum power and efficiency. Unlock your vehicle\'s true potential.',
      icon: '⚡'
    },
    {
      title: 'Engine Upgrades',
      description: 'Complete engine modifications and upgrades. From turbocharging to supercharging, we enhance performance at every level.',
      icon: '🔧'
    },
    {
      title: 'Racing Modifications',
      description: 'Track-ready modifications for competitive racing. Built for speed, precision, and reliability.',
      icon: '🏁'
    },
    {
      title: 'Suspension & Handling',
      description: 'Precision suspension tuning for optimal handling and control. Every corner, every turn, perfectly dialed in.',
      icon: '🎯'
    }
  ];

  const features = [
    'Performance-focused engineering',
    'Track-tested modifications',
    'Advanced tuning capabilities',
    'Racing-grade components',
    'Dyno testing & validation',
    'Professional installation'
  ];

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-xenex-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-6xl md:text-8xl font-bold font-display text-white mb-4">
            <span className="text-xenex-red">X</span>DRIVE
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 italic">
            Power. Precision. Performance.
          </p>
        </div>
      </section>

      {/* About XDRIVE */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Performance <span className="text-xenex-red">Engineering</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              XDRIVE is our performance division, dedicated to unlocking the full potential of your vehicle. 
              We combine advanced engineering, precision tuning, and racing expertise to deliver power, speed, and control 
              that exceeds expectations. Every modification is tested, validated, and optimized for peak performance.
            </p>
          </div>

          {/* XDRIVE Car Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-card mb-12 group">
            <Image
              src="/xdrive-car1.jpeg"
              alt="XDRIVE Custom Toyota Fortuner Legender - Performance Vehicle"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300 rounded-xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-12">
            XDRIVE <span className="text-xenex-red">Services</span>
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
            Why Choose <span className="text-xenex-red">XDRIVE</span>
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

      {/* Performance Stats */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-12">
            Performance <span className="text-xenex-red">Results</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-xenex-gray rounded-xl p-8 border-2 border-xenex-red/30">
              <div className="text-5xl font-bold text-xenex-red mb-2">+50%</div>
              <div className="text-white/80 text-lg">Average Power Increase</div>
            </div>
            <div className="text-center bg-xenex-gray rounded-xl p-8 border-2 border-xenex-red/30">
              <div className="text-5xl font-bold text-xenex-red mb-2">+30%</div>
              <div className="text-white/80 text-lg">Torque Improvement</div>
            </div>
            <div className="text-center bg-xenex-gray rounded-xl p-8 border-2 border-xenex-red/30">
              <div className="text-5xl font-bold text-xenex-red mb-2">100%</div>
              <div className="text-white/80 text-lg">Track Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to unlock <span className="text-xenex-red">performance</span>?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Let's discuss your performance goals and create a custom solution.
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

