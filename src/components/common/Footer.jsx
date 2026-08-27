import React, { useState, useEffect, useRef } from 'react';

/**
 * SECTION 11 — FINAL FOOTER (ముగింపు & అధికారిక వివరాలు)
 * 
 * CORE IDEA:
 *   The final frame of the website.
 *   Conclude the story quietly: "పొదుపుతో మొదలైన ప్రయాణం… లక్ష్యంతో ముందుకు."
 * 
 * VISUAL CONCEPT:
 * - Deep forest green canvas (#04130E) settling down the visual world.
 * - Single subtle gold coin-inspired circular hairline callback near the edge.
 * - Simple, dignified typography links (no icons, no standard corporate grid).
 * - Telugu-first navigation, minimal contact placeholders, social text links, and legal links.
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
      className="relative w-full py-20 sm:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#04130E] text-ivory border-t border-gold/20 select-none"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURE: DEEP CANVAS, GRAIN & COIN CALLBACK
          ========================================================================= */}

      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.04] z-[1] mix-blend-screen" />

      {/* Ambient Soft Emerald Halo */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(15, 56, 44, 0.4), transparent 70%),
            radial-gradient(circle at 85% 85%, rgba(184, 142, 56, 0.05), transparent 50%)
          `,
        }}
      />

      {/* Signature Visual: Single Subtle Gold Circular Form Callback */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold/15 pointer-events-none z-[1]">
        <div className="absolute inset-3 rounded-full border border-dashed border-gold/10" />
        <div className="absolute inset-8 rounded-full border border-gold/5" />
      </div>

      <div
        className={`relative z-10 max-w-[1360px] mx-auto space-y-16 sm:space-y-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* =======================================================================
            TOP CLOSING THOUGHT STATEMENT
            ======================================================================= */}
        <div className="text-center sm:text-left border-b border-gold/15 pb-10">
          <p className="font-telugu-display text-lg sm:text-xl text-ivory/80 italic font-medium">
            "పొదుపుతో మొదలైన ప్రయాణం… లక్ష్యంతో ముందుకు."
          </p>
        </div>

        {/* =======================================================================
            MAIN EDITORIAL FOOTER COMPOSITION (Brand, Nav, Contact, Location)
            ======================================================================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          
          {/* Brand & Monogram Area */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-[2px] border border-gold/60 bg-[#08221A] flex items-center justify-center text-gold font-telugu-display text-2xl font-bold shadow-xs">
                శ్రీ
              </div>
              <div>
                <div className="font-telugu-display text-xl font-bold text-ivory tracking-tight">
                  శివ కావేరి చిట్స్ ప్రై.లి.
                </div>
                <div className="font-english-display text-[0.65rem] tracking-[0.2em] text-gold-light/80 uppercase">
                  SIVA KAVERI CHITS
                </div>
              </div>
            </div>
            <p className="font-telugu-body text-xs sm:text-sm text-ivory/65 leading-relaxed">
              విశ్వసనీయ పొదుపు, పారదర్శక వేలం మరియు వ్యక్తిగత మార్గదర్శనంతో మీ ఆర్థిక కలలకు తోడుగా.
            </p>
          </div>

          {/* Navigation Links (Telugu-first simple text links) */}
          <div className="space-y-3">
            <div className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold uppercase font-bold">
              విభాగాలు
            </div>
            <ul className="space-y-2.5 font-telugu-body text-sm text-ivory/75">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (Text Only) */}
          <div className="space-y-3">
            <div className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold uppercase font-bold">
              సంప్రదించండి
            </div>
            <div className="space-y-2.5 font-telugu-body text-sm text-ivory/75">
              <div>
                <span className="text-ivory/40 text-xs block">ఫోన్</span>
                <span className="font-english-display text-gold-light tracking-wider font-medium">XXXXXXXXXX</span>
              </div>
              <div>
                <span className="text-ivory/40 text-xs block">ఈమెయిల్</span>
                <span className="font-english-display text-gold-light font-medium">example@example.com</span>
              </div>
            </div>
          </div>

          {/* Location & Social (Text Only) */}
          <div className="space-y-3">
            <div className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold uppercase font-bold">
              స్థానం & అనుసరణ
            </div>
            <div className="space-y-2.5">
              <div className="font-telugu-display text-base font-semibold text-ivory">
                ఎలూరు, ఆంధ్రప్రదేశ్
              </div>
              <p className="font-telugu-body text-xs text-ivory/60">
                మీకు చేరువగా ఉండే స్థానిక సేవ.
              </p>
              
              {/* Social Text Links */}
              <div className="pt-2 flex items-center gap-4 text-xs font-english-display text-ivory/70">
                {socialLinks.map((s, idx) => (
                  <span key={idx} className="hover:text-gold transition-colors cursor-pointer">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* =======================================================================
            BOTTOM LEGAL BAR & COPYRIGHT
            ======================================================================= */}
        <div className="pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-telugu-body text-ivory/50 text-center sm:text-left">
          
          <div>
            © 2026 శివ కావేరి చిట్స్ ప్రై.లి. All rights reserved.
          </div>

          {/* Legal Placeholder Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-english-display text-[0.7rem] text-ivory/60">
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-gold transition-colors duration-200"
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
