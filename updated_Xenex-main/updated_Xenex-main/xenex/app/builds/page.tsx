import Image from 'next/image';
import Link from 'next/link';

export default function Builds() {
  const builds = [
    {
      id: 1,
      name: "The Shadow",
      tag: "Road Build",
      before: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      vision: "A midnight character that commands respect",
      quote: "I wanted something that didn't just turn heads—it commanded attention. <span className=\"text-xenex-red\">XENEX</span> delivered beyond my wildest dreams.",
      owner: "Rajesh K.",
      specs: { power: "650 HP", torque: "850 Nm", topSpeed: "320 km/h", acceleration: "3.2s" }
    },
    {
      id: 2,
      name: "Cinema Star",
      tag: "Film Build",
      before: "/cinema-star-before.jpg",
      after: "/cinema-star-after.jpg",
      vision: "Built for the silver screen, designed to own every frame",
      quote: "This car didn't just appear in our film—it became a character. <span className=\"text-xenex-red\">XENEX</span> understands cinema.",
      owner: "Film Production Team",
      specs: { power: "720 HP", torque: "900 Nm", topSpeed: "340 km/h", acceleration: "2.9s" }
    },
    {
      id: 3,
      name: "The Phoenix",
      tag: "Custom Build",
      before: "/phoenix-before.jpg",
      after: "/phoenix-after.jpg",
      vision: "Rising from vision to reality, a character reborn",
      quote: "From concept to completion, <span className=\"text-xenex-red\">XENEX</span> transformed not just my car, but my entire perspective on what's possible.",
      owner: "Amit S.",
      specs: { power: "800 HP", torque: "950 Nm", topSpeed: "360 km/h", acceleration: "2.6s" }
    },
    {
      id: 4,
      name: "Velocity",
      tag: "Performance Build",
      before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      vision: "Where speed meets sophistication",
      quote: "Performance meets artistry. <span className=\"text-xenex-red\">XENEX</span> created something truly special.",
      owner: "Priya M.",
      specs: { power: "900 HP", torque: "1000 Nm", topSpeed: "380 km/h", acceleration: "2.4s" }
    },
    {
      id: 5,
      name: "Akhanda Roxx",
      tag: "Film Cars",
      before: "/akhanda-roxx-poster.jpg",
      after: "/akhanda-roxx-poster.jpg",
      vision: "Featured in the blockbuster film Akhanda 2 - A character that commands the screen",
      quote: "The <span className=\"text-xenex-red\">XENEX</span> build for Akhanda 2 didn't just appear on screen—it became an icon. Every detail was crafted for cinematic impact.",
      owner: "Film Production - Akhanda 2",
      specs: { power: "Custom Build", torque: "Film Spec", topSpeed: "Screen Ready", acceleration: "Cinematic" }
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
            alt="XENEX Builds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            <span className="text-xenex-red">XENEX</span> <span className="text-xenex-red">Builds</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Each car = one story
          </p>
        </div>
      </section>

      {/* Builds Grid */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto">
          <div className="space-y-24">
            {builds.map((build, index) => (
              <div key={build.id} id={build.id.toString()} className="scroll-mt-20 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-8">
                  <span className="text-xs text-xenex-red uppercase tracking-wider mb-2 block font-bold">
                    {build.tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                    {build.name}
                  </h2>
                  <p className="text-xl text-xenex-red italic font-semibold">
                    "{build.vision}"
                  </p>
                </div>

                {/* Before & After / Single Image for Film Cars */}
                {build.tag === "Film Cars" ? (
                  <div className="mb-8">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-card group-hover:shadow-red-glow transition-all duration-300">
                      <Image
                        src={build.after}
                        alt={build.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 border-2 border-xenex-red transition-colors duration-300 rounded-xl" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="group">
                      <h3 className="text-sm text-white/60 uppercase tracking-wider mb-3 font-bold">Before</h3>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-card group-hover:shadow-red-glow transition-all duration-300">
                        <Image
                          src={build.before}
                          alt={`${build.name} - Before`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 border-2 border-xenex-gray group-hover:border-xenex-red transition-colors duration-300 rounded-xl" />
                      </div>
                    </div>
                    <div className="group">
                      <h3 className="text-sm text-white/60 uppercase tracking-wider mb-3 font-bold">After</h3>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-card group-hover:shadow-red-glow transition-all duration-300">
                        <Image
                          src={build.after}
                          alt={`${build.name} - After`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 border-2 border-xenex-red transition-colors duration-300 rounded-xl" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Quote */}
                <div className="bg-xenex-gray rounded-xl p-8 border-l-4 border-xenex-red shadow-card">
                  <p className="text-white/90 text-lg italic mb-4" dangerouslySetInnerHTML={{ __html: `"${build.quote.replace(/XENEX/g, '<span class="text-xenex-red">XENEX</span>')}"` }} />
                  <p className="text-xenex-red font-semibold">
                    — {build.owner}
                  </p>
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
            Ready to create your <span className="text-xenex-red">story</span>?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Every great build starts with a vision. Let's bring yours to life.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Start Your Build
          </Link>
        </div>
      </section>
    </div>
  );
}
