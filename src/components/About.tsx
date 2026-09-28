import { Sparkles, CheckCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const POINTS = [
  'Professional Service',
  'Attention to Detail',
  'Customer Satisfaction',
  'Clean & Healthy Environments',
  'Reliable Service',
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <Reveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.pexels.com/photos/6195136/pexels-photo-6195136.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Professional cleaning team working together in a modern Lagos home"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Accent frame */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-brand-100 -z-10" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-brand-600/10 -z-10" />
            </div>
          </Reveal>

          {/* Content side */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-50 px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-brand-600" />
                <span className="text-sm font-semibold text-brand-700">About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 leading-tight tracking-tight">
                Cleaning Spaces.
                <br />
                <span className="text-brand-600">Creating Comfort.</span>
              </h2>

              <p className="text-lg text-charcoal-600 leading-relaxed">
                Impeccable Clean &amp; Green provides reliable cleaning solutions for homes, offices and other spaces
                across Lagos. We are committed to delivering professional service with careful attention to detail,
                ensuring every space we clean feels fresh, healthy and welcoming.
              </p>

              <p className="text-base text-charcoal-500 leading-relaxed">
                Whether you need regular home cleaning, a thorough deep clean, or post-construction cleaning for a
                newly completed property, our team approaches every job with the same dedication to quality and
                customer satisfaction. We take pride in helping our clients enjoy cleaner, more comfortable
                environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-charcoal-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
