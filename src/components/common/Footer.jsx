import React, { useState, useEffect, useRef } from 'react';

/**
 * SECTION 11 — FINAL FOOTER (100% MOBILE RESPONSIVE & POLISHED)
 * 
 * CORE STATEMENT:
 *   "పొదుపుతో మొదలైన ప్రయాణం… లక్ష్యంతో ముందుకు."
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
    { label: 'మా గురించి', href: '#brand-story' },
    { label: 'చిట్ పథకాలు', href: '#schemes' },
    { label: 'ఎలా పనిచేస్తుంది', href: '#how-it-works' },
    { label: 'వేలం', href: '#auctions' },
    { label: 'తరచుగా అడిగే ప్రశ్నలు', href: '#faq' },
    { label: 'సంప్రదించండి', href: '#start-journey' },
  ];

  const socialLinks = ['Instagram', 'Facebook', 'YouTube'];

  const legalLinks = ['Privacy Policy', 'Terms & Conditions', 'Chit Terms'];

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-14 sm:py-24 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#04130E] text-ivory border-t border-gold/20 select-none"
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
        className={`relative z-10 max-w-[1360px] mx-auto space-y-10 sm:space-y-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Top Closing Thought Statement */}
        <div className="text-center sm:text-left border-b border-gold/15 pb-6 sm:pb-10">
          <p className="font-telugu-display text-base sm:text-xl text-ivory/80 italic font-medium">
            "పొదుపుతో మొదలైన ప్రయాణం… లక్ష్యంతో ముందుకు."
          </p>
        </div>

        {/* Main Editorial Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Brand & Monogram Area (lg:col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[2px] border border-gold/60 bg-[#08221A] flex items-center justify-center text-gold font-telugu-display text-xl font-bold shadow-xs flex-shrink-0">
                శ్రీ
              </div>
              <div>
                <div className="font-telugu-display text-lg sm:text-xl font-bold text-ivory tracking-tight">
                  శివ కావేరి చిట్స్ ప్రై.లి.
                </div>
                <div className="font-english-display text-[0.62rem] sm:text-[0.65rem] tracking-[0.18em] text-gold-light/80 uppercase">
                  SIVA KAVERI CHITS
                </div>
              </div>
            </div>
            <p className="font-telugu-body text-xs sm:text-sm text-ivory/65 leading-relaxed">
              విశ్వసనీయ పొదుపు, పారదర్శక వేలం మరియు వ్యక్తిగత మార్గదర్శనంతో మీ ఆర్థిక కలలకు తోడుగా.
            </p>
          </div>

          {/* Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold uppercase font-bold">
              విభాగాలు
            </div>
            <ul className="space-y-2 font-telugu-body text-xs sm:text-sm text-ivory/75">
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
            <div className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold uppercase font-bold">
              సంప్రదించండి
            </div>
            <div className="space-y-2 font-telugu-body text-xs sm:text-sm text-ivory/75">
              <div>
                <span className="text-ivory/40 text-[0.68rem] block">ఫోన్</span>
                <span className="font-english-display text-gold-light tracking-wider font-medium">XXXXXXXXXX</span>
              </div>
              <div>
                <span className="text-ivory/40 text-[0.68rem] block">ఈమెయిల్</span>
                <span className="font-english-display text-gold-light font-medium">example@example.com</span>
              </div>
            </div>
          </div>

          {/* Location & Social (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold uppercase font-bold">
              స్థానం & అనుసరణ
            </div>
            <div className="space-y-2">
              <div className="font-telugu-display text-sm sm:text-base font-semibold text-ivory">
                ఎలూరు, ఆంధ్రప్రదేశ్
              </div>
              <p className="font-telugu-body text-xs text-ivory/60">
                మీకు చేరువగా ఉండే స్థానిక సేవ.
              </p>
              
              <div className="pt-1.5 flex items-center gap-4 text-xs font-english-display text-ivory/70">
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
        <div className="pt-6 sm:pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] sm:text-xs font-telugu-body text-ivory/50 text-center sm:text-left">
          
          <div>
            © 2026 శివ కావేరి చిట్స్ ప్రై.లి. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-english-display text-[0.65rem] sm:text-[0.7rem] text-ivory/60">
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
