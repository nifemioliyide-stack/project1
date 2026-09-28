import { ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { BUSINESS } from '@/data';

export function CTA() {
  const whatsappUrl = `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-16 sm:px-12 lg:px-16 lg:py-20 shadow-card">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

            <div className="relative flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready for a Cleaner Space?
              </h2>
              <p className="text-lg text-brand-50 leading-relaxed">
                Let Impeccable Clean &amp; Green take care of the cleaning while you enjoy a fresher, healthier
                environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={scrollToContact}
                  className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-brand-700 shadow-lg hover:bg-brand-50 hover:scale-105 transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white hover:bg-white/20 hover:scale-105 transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
