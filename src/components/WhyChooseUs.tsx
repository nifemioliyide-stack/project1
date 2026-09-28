import {
  Briefcase,
  Search,
  ShieldCheck,
  Heart,
  CalendarClock,
  Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { WHY_CHOOSE_US } from '@/data';

const ICONS: Record<string, typeof Briefcase> = {
  Briefcase,
  Search,
  ShieldCheck,
  Heart,
  CalendarClock,
  Sparkles,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <ShieldCheck className="h-4 w-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Why Choose Impeccable Clean &amp; Green?
          </h2>
          <p className="mt-4 text-lg text-charcoal-500">
            We are dedicated to providing cleaning services that meet the highest standards of quality and
            reliability.
          </p>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature) => {
            const Icon = ICONS[feature.icon] ?? Sparkles;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-7 shadow-soft hover:shadow-card border border-charcoal-100 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 group-hover:bg-brand-600 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-charcoal-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
