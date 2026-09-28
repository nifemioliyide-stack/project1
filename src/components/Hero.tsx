import { Sparkles, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { BUSINESS } from '@/data';

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50" />

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div className="flex flex-col gap-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-100 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-brand-600" />
              <span className="text-sm font-semibold text-brand-700">Professional Cleaning Services in Lagos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-charcoal-900 tracking-tight">
              A Cleaner Space.
              <br />
              <span className="text-brand-600">A Better Life.</span>
            </h1>

            <p className="text-lg text-charcoal-600 leading-relaxed max-w-lg">
              Professional cleaning services that keep your home and workplace fresh, healthy and beautifully clean.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-glow hover:bg-brand-700 hover:scale-105 transition-all"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full border-2 border-brand-200 bg-white px-7 py-4 text-base font-bold text-brand-700 hover:bg-brand-50 hover:scale-105 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-1 text-sm font-semibold text-charcoal-500">
                    {['Reliable', 'Professional', 'Affordable', 'Quality Service'][i]}
                    {i < 3 && <span className="text-brand-400 mx-1">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.pexels.com/photos/6195274/pexels-photo-6195274.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional cleaners vacuuming and mopping a spotless modern living room in Lagos"
                className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-card p-5 max-w-[220px] animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                  <Star className="h-6 w-6 text-brand-600 fill-brand-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-charcoal-900">Trusted Service</p>
                  <p className="text-xs text-charcoal-500">Reliable & Professional</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-brand-600 rounded-full px-5 py-3 shadow-glow animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-sm font-bold text-white">Clean & Healthy Spaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
          <path d="M0 100V40C240 80 480 0 720 20C960 40 1200 80 1440 40V100H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
