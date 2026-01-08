import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      name: 'XENEX',
      description: 'Premium car transformation and customization services. Where vision meets reality, and every build becomes a character.',
      href: '/products/xenex',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      features: ['Custom Builds', 'Film Cars', 'Premium Modifications']
    },
    {
      name: 'XDRIVE',
      description: 'Performance-driven transformations. Power, precision, and passion in every build.',
      href: '/products/xdrive',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
      features: ['Performance Tuning', 'Engine Upgrades', 'Racing Modifications']
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop"
            alt="Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            Our <span className="text-xenex-red">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Choose your transformation journey
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link
                key={product.name}
                href={product.href}
                className="group bg-xenex-gray rounded-xl overflow-hidden shadow-card card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border-2 border-xenex-red/30 group-hover:border-xenex-red transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-white font-display mb-4 group-hover:text-xenex-red transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-xenex-red/20 text-xenex-red px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-xenex-red font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Explore {product.name} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Link */}
      <section className="py-20 px-4 md:px-6 bg-xenex-dark">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Our <span className="text-xenex-red">Design Process</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Discover how we transform vision into reality through our proven 4-step process.
          </p>
          <Link
            href="/design-process"
            className="btn-primary inline-block"
          >
            View Design Process
          </Link>
        </div>
      </section>
    </div>
  );
}

