import { Sparkles, Phone, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data';

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600">
                <Sparkles className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight">IMPECCABLE</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-brand-400">{BUSINESS.tagline}</span>
              </div>
            </div>
            <p className="text-sm text-charcoal-300 leading-relaxed max-w-sm">
              Professional cleaning solutions for cleaner, healthier spaces.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-charcoal-300 hover:text-brand-400 transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h3>
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-charcoal-300 hover:text-brand-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <div className="flex items-start gap-2 text-sm text-charcoal-300">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              {BUSINESS.addressShort}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-charcoal-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs font-semibold text-charcoal-300 hover:text-brand-400 transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
