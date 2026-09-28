import { Camera } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { GALLERY } from '@/data';

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <Camera className="h-4 w-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">Our Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Clean Spaces We Love
          </h2>
          <p className="mt-4 text-lg text-charcoal-500">
            A look at the kind of spotless, fresh results we deliver for homes and offices across Lagos.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY.map((item) => (
            <figure
              key={item.src}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-sm font-bold text-white">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
