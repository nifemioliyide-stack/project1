import { useEffect, useState } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow transition-transform group-hover:scale-105">
              <Sparkles className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-lg font-extrabold tracking-tight transition-colors ${
                  scrolled ? 'text-charcoal-900' : 'text-charcoal-900'
                }`}
              >
                IMPECCABLE
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-600">
                {BUSINESS.tagline}
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-semibold text-charcoal-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-brand-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-glow hover:bg-brand-700 hover:scale-105 transition-all"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-800 hover:bg-brand-50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-6 pb-8 h-full overflow-y-auto no-scrollbar">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-3.5 text-lg font-semibold text-charcoal-700 hover:text-brand-700 border-b border-charcoal-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-200 px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-all"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:bg-brand-700 transition-all"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
