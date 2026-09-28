import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { BUSINESS, SERVICES } from '@/data';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: BUSINESS.address,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: BUSINESS.phone,
      href: `tel:${BUSINESS.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: BUSINESS.hours,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <Send className="h-4 w-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-lg text-charcoal-500">
            Fill out the form below or reach us directly. We&apos;ll get back to you as soon as possible.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-4 h-full">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-all">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal-400">{info.label}</p>
                      <p className="text-base font-semibold text-charcoal-800 mt-0.5">{info.value}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              {/* WhatsApp button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-brand-600 p-5 shadow-glow hover:bg-brand-700 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-6 w-6 text-white" />
                <span className="text-base font-bold text-white">Chat with us on WhatsApp</span>
              </a>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-card flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-charcoal-200 bg-charcoal-50/50 px-4 py-3 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0801 234 5678"
                    className="w-full rounded-xl border border-charcoal-200 bg-charcoal-50/50 px-4 py-3 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-charcoal-200 bg-charcoal-50/50 px-4 py-3 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                  Service Required
                </label>
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-xl border border-charcoal-200 bg-charcoal-50/50 px-4 py-3 text-sm text-charcoal-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your cleaning needs..."
                  className="w-full rounded-xl border border-charcoal-200 bg-charcoal-50/50 px-4 py-3 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-glow hover:bg-brand-700 hover:scale-[1.02] transition-all"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Request Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Request a Quote
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-sm font-semibold text-brand-700">
                  Thank you! We&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        {/* Google Map */}
        <Reveal delay={200} className="mt-10">
          <div className="rounded-3xl overflow-hidden shadow-card h-[360px]">
            <iframe
              title="Impeccable Clean & Green Location — Somolu, Lagos"
              src="https://www.google.com/maps?q=Somolu,Lagos,Nigeria&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
