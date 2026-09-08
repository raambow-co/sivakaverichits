import React, { useState, useEffect, useRef } from 'react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 11 — FINAL FOOTER
 * Professional institutional footer with clean English navigation and compliance disclosures.
 */

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'About Company', href: '#brand-story' },
    { label: 'Chit Schemes', href: '#schemes' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact Office', href: '#start-journey' },
    { label: 'FAQ', href: '#faq' },
  ];

  const socialLinks = ['WhatsApp', 'Instagram', 'Facebook', 'YouTube'];

  const legalLinks = ['Chit Funds Act, 1982 Disclosures', 'Privacy Policy', 'Terms & Conditions', 'Surety Guidelines'];

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-12 sm:py-20 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#04130E] text-ivory border-t border-gold/20 select-none"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.04] z-[1] mix-blend-screen" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(15, 56, 44, 0.4), transparent 70%),
            radial-gradient(circle at 85% 85%, rgba(184, 142, 56, 0.05), transparent 50%)
          `,
        }}
      />

      {/* Signature Visual Callback */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 sm:w-80 sm:h-80 rounded-full border border-gold/15 pointer-events-none z-[1]">
        <div className="absolute inset-3 rounded-full border border-dashed border-gold/10" />
        <div className="absolute inset-8 rounded-full border border-gold/5" />
      </div>

      <div
        className="relative z-10 max-w-[1360px] mx-auto space-y-8 sm:space-y-16"
      >
        {/* Top Closing Thought Statement */}
        <div className="text-center sm:text-left border-b border-gold/15 pb-6 sm:pb-8">
          <p className="text-base sm:text-xl text-ivory/80 italic font-medium">
            "{BRAND.mottoEnglish}"
          </p>
        </div>

        {/* Main Editorial Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Brand & Logo Area (lg:col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4 max-w-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full border-2 border-gold bg-white p-1.5 shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-ivory tracking-tight">
                  {BRAND.companyLegalName}
                </div>
                <div className="text-[0.68rem] tracking-wider text-gold-light/80 uppercase font-semibold">
                  ESTABLISHED {BRAND.establishedYear} • ELURU, AP
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-ivory/65 leading-relaxed font-normal">
              Serving the families, traders, and entrepreneurs of Eluru and West Godavari with financial discipline, transparent auctions, and registered security.
            </p>
          </div>

          {/* Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="text-[0.72rem] tracking-widest text-gold uppercase font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory/75 font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <div className="text-[0.72rem] tracking-widest text-gold uppercase font-bold">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-ivory/75 font-medium">
              <div>
                <span className="text-ivory/40 text-[0.68rem] block uppercase tracking-wider font-semibold">Phone</span>
                <span className="text-gold-light tracking-wide font-semibold">{BRAND.phone}</span>
              </div>
              <div>
                <span className="text-ivory/40 text-[0.68rem] block uppercase tracking-wider font-semibold">Email</span>
                <span className="text-gold-light font-semibold">{BRAND.email}</span>
              </div>
              <div>
                <span className="text-ivory/40 text-[0.68rem] block uppercase tracking-wider font-semibold">Hours</span>
                <span className="text-ivory/70 text-xs">9:30 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Location & Social (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="text-[0.72rem] tracking-widest text-gold uppercase font-bold">
              Registered Office
            </div>
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-semibold text-ivory">
                {BRAND.regionEnglish}
              </div>
              <p className="text-xs text-ivory/60 leading-relaxed font-normal">
                {BRAND.addressEnglish}
              </p>
              
              <div className="pt-2 flex items-center gap-4 text-xs text-ivory/70 font-semibold">
                {socialLinks.map((s, idx) => (
                  <span key={idx} className="hover:text-gold transition-colors cursor-pointer py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem] sm:text-xs text-ivory/50 text-center sm:text-left">
          
          <div>
            © 2026 {BRAND.companyLegalName}. All rights reserved. Registered under the Chit Funds Act, 1982.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[0.68rem] sm:text-[0.72rem] text-ivory/60 font-medium">
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-gold transition-colors duration-200 py-1"
              >
                {item}
              </a>
            ))}
          </div>

        </div>

      </div>

    </footer>
  );
}
