
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    vision: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      project_type: formData.projectType,
      vision: formData.vision,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const errorMessage = result.message || result.error || 'Failed to submit form. Please try again.';
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', vision: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err?.message || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-20 bg-xenex-dark">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xenex-dark via-xenex-dark/80 to-xenex-dark" />
        </div>
        <div className="relative z-20 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            <span className="text-xenex-red">Contact</span> Us
          </h1>
          <p className="text-xl md:text-2xl text-white/80 italic">
            Every great car starts with a story
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-6 bg-xenex-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-xenex-gray rounded-xl p-8 border border-xenex-red/20 shadow-card">
              <h2 className="text-3xl font-bold font-display text-white mb-2">
                Tell us your <span className="text-xenex-red">vision</span>
              </h2>
              <p className="text-white/70 mb-8">
                Share your story, and let's create something extraordinary together.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-xenex-red/20 border border-xenex-red rounded-lg">
                  <p className="text-xenex-red font-semibold">✓ Thank you! Your vision has been submitted. We'll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 font-semibold">✗ {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-xenex-dark border border-xenex-red/20 rounded-lg text-white focus:outline-none focus:border-xenex-red transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-xenex-dark border border-xenex-red/20 rounded-lg text-white focus:outline-none focus:border-xenex-red transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2 font-semibold">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-xenex-dark border border-xenex-red/20 rounded-lg text-white focus:outline-none focus:border-xenex-red transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-white mb-2 font-semibold">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-xenex-dark border border-xenex-red/20 rounded-lg text-white focus:outline-none focus:border-xenex-red transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="road-build">Road Build</option>
                    <option value="film-build">Film / Cinema Build</option>
                    <option value="custom-build">Custom Build</option>
                    <option value="performance">Performance Build</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="vision" className="block text-white mb-2 font-semibold">
                    Your Vision *
                  </label>
                 <textarea
  id="vision"
  name="vision"
  required
  rows={5}
  value={formData.vision}  
  onChange={handleChange}
                    className="w-full px-4 py-3 bg-xenex-dark border border-xenex-red/20 rounded-lg text-white focus:outline-none focus:border-xenex-red transition-colors resize-none"
                    placeholder="Tell us about your car's story, what you envision, and what character you want to create..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Your Vision'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-xenex-gray rounded-xl p-8 border border-xenex-red/20 shadow-card">
                <h2 className="text-3xl font-bold font-display text-white mb-6">
                  Get in <span className="text-xenex-red">touch</span>
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-xenex-red mb-3">Location</h3>
                    <a
                      href="https://www.justdial.com/Hyderabad/Xenex-Automotive-Pvt-Ltd-Opposite-Hdfc-Bank-Kavuri-Hills-Madhapur/040PXX40-XX40-140714113633-V5Y4_BZDET"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 text-white/80 hover:text-xenex-red transition-colors duration-300 group"
                    >
                      <svg className="w-6 h-6 text-xenex-red mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="group-hover:underline">
                        Hyderabad, India
                      </p>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-xenex-red mb-3">WhatsApp</h3>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-white/80 hover:text-xenex-red transition-colors duration-300 group"
                    >
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="font-semibold">+91 98765 43210</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-xenex-gray rounded-xl p-8 border border-xenex-red/20 shadow-card">
                <h3 className="text-xl font-semibold text-xenex-red mb-4">Why choose XENEX?</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start space-x-3">
                    <span className="text-xenex-red font-bold">✓</span>
                    <span>Story-driven transformations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xenex-red font-bold">✓</span>
                    <span>Cinematic quality builds</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xenex-red font-bold">✓</span>
                    <span>Precision craftsmanship</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-xenex-red font-bold">✓</span>
                    <span>Film industry experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
