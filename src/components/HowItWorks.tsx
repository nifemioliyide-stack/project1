import { PhoneCall, ClipboardList, CheckCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { HOW_IT_WORKS } from '@/data';

const ICONS: Record<string, typeof PhoneCall> = {
  PhoneCall,
  ClipboardList,
  CheckCircle,
};

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <ClipboardList className="h-4 w-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Simple as 1-2-3
          </h2>
          <p className="mt-4 text-lg text-charcoal-500">
            Getting your space professionally cleaned is easy. Here&apos;s how it works.
          </p>
        </Reveal>

        <Reveal stagger className="grid md:grid-cols-3 gap-8 lg:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />

          {HOW_IT_WORKS.map((item) => {
            const Icon = ICONS[item.icon] ?? CheckCircle;
            return (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-card border-4 border-brand-100 group hover:border-brand-300 transition-colors">
                  <Icon className="h-12 w-12 text-brand-600" />
                  <span className="absolute -top-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold shadow-glow">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-charcoal-900">{item.title}</h3>
                <p className="mt-2 text-base text-charcoal-500 max-w-[200px]">{item.description}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
