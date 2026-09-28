import { Home, Building2, Sparkles, Store, Truck, HardHat, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SERVICES, BUSINESS } from '@/data';

const ICONS: Record<string, typeof Home> = {
  'Home Cleaning': Home,
  'Office Cleaning': Building2,
  'Deep Cleaning': Sparkles,
  'Commercial Cleaning': Store,
  'Move-In & Move-Out Cleaning': Truck,
  'Post-Construction Cleaning': HardHat,
};

export function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <Sparkles className="h-4 w-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Cleaning Services We Offer
          </h2>
          <p className="mt-4 text-lg text-charcoal-500">
            From everyday cleaning to specialised deep cleaning, we provide a full range of professional cleaning
            services in Lagos.
          </p>
        </Reveal>

        {/* Service cards */}
        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.title] ?? Sparkles;
            return (
              <article
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 backdrop-blur shadow-soft">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed mb-5">{service.description}</p>
                  <button
                    onClick={scrollToContact}
                    className="group/btn flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </Reveal>

        {/* Bottom note */}
        <Reveal className="mt-12 text-center">
          <p className="text-charcoal-500">
            Don&apos;t see what you need?{' '}
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              className="font-bold text-brand-700 hover:text-brand-800 transition-colors"
            >
              Call us at {BUSINESS.phone}
            </a>{' '}
            to discuss your cleaning requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
