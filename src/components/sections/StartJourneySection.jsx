import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';

/**
 * SECTION 10 — START YOUR CHIT JOURNEY (100% MOBILE RESPONSIVE & POLISHED)
 * 
 * CORE STATEMENT:
 *   "మీ కలలకు… మీ పొదుపుతో తొలి అడుగు."
 *   Supporting: "మీకు సరిపోయే చిట్ పథకం గురించి తెలుసుకోవడానికి మమ్మల్ని సంప్రదించండి."
 */

export function StartJourneySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="start-journey"
      className="relative w-full py-16 sm:py-32 lg:py-44 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#071D16] text-ivory transition-colors duration-500 border-t border-gold/25 select-none"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045] z-[1] mix-blend-screen" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 80% 50%, rgba(184, 142, 56, 0.14), transparent 60%),
            radial-gradient(circle at 20% 70%, rgba(27, 83, 66, 0.35), transparent 55%),
            radial-gradient(ellipse at 50% 0%, rgba(184, 142, 56, 0.08), transparent 50%)
          `,
        }}
      />

      {/* Faint Regional Watermark ("పునాది" - Foundation) */}
      <div className="absolute top-[15%] -left-[3%] pointer-events-none select-none z-[1] opacity-[0.025] font-telugu-display font-black text-[clamp(6rem,18vw,22rem)] leading-none text-gold">
        పునాది
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* Left / Center: Dominant Emotional Statement & Primary CTA */}
        <div
          className={`lg:col-span-8 space-y-6 sm:space-y-10 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-telugu-display text-2xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-bold text-ivory leading-[1.2] tracking-tight">
            మీ కలలకు…<br />
            <span className="text-gradient-gold">మీ పొదుపుతో తొలి అడుగు.</span>
          </h2>

          <p className="font-telugu-body text-sm sm:text-lg lg:text-xl text-ivory/85 leading-relaxed max-w-2xl font-normal">
            మీకు సరిపోయే చిట్ పథకం గురించి తెలుసుకోవడానికి మమ్మల్ని సంప్రదించండి.
          </p>

          {/* Primary Dominant CTA */}
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto text-center group relative inline-flex items-center justify-center gap-3.5 px-8 py-4 sm:px-10 sm:py-4.5 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-[2px] font-telugu-body font-bold text-base sm:text-lg shadow-[0_8px_30px_rgba(184,142,56,0.25)] hover:shadow-[0_12px_40px_rgba(184,142,56,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>మాతో మాట్లాడండి</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Minimal Secondary Contact Placeholders */}
          <div className="pt-6 sm:pt-10 border-t border-gold/20 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-x-10 sm:gap-y-4 text-xs sm:text-sm font-telugu-body text-ivory/70">
            <div>
              <span className="text-ivory/40 uppercase tracking-widest text-[0.65rem] sm:text-[0.68rem] block mb-0.5">ఫోన్</span>
              <span className="font-english-display font-medium text-gold-light tracking-wider">XXXXXXXXXX</span>
            </div>

            <div className="hidden sm:block w-[1px] h-6 bg-gold/20" />

            <div>
              <span className="text-ivory/40 uppercase tracking-widest text-[0.65rem] sm:text-[0.68rem] block mb-0.5">ఈమెయిల్</span>
              <span className="font-english-display font-medium text-gold-light">example@example.com</span>
            </div>

            <div className="hidden sm:block w-[1px] h-6 bg-gold/20" />

            <div>
              <span className="text-ivory/40 uppercase tracking-widest text-[0.65rem] sm:text-[0.68rem] block mb-0.5">ప్రాంతం</span>
              <span className="font-telugu-display text-ivory font-medium">ఎలూరు, ఆంధ్రప్రదేశ్</span>
            </div>
          </div>
        </div>

        {/* Right: Hero Gold Medallion Callback (Compact on Mobile) */}
        <div
          className={`lg:col-span-4 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center pointer-events-none select-none">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent rounded-full filter blur-2xl" />

            <div className="absolute inset-2 rounded-full border border-gold/30" />
            <div className="absolute inset-5 sm:inset-6 rounded-full border border-dashed border-gold/25" />
            <div className="absolute inset-9 sm:inset-12 rounded-full border border-gold/20" />

            <div className="relative w-28 h-28 sm:w-44 sm:h-44 rounded-full border-2 border-gold/60 bg-gradient-to-br from-[#0F382C] via-[#08221A] to-[#04130E] flex flex-col items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-gold/30" />

              <span className="font-telugu-display text-2xl sm:text-4xl font-bold text-gradient-gold">
                శ్రీ
              </span>
              <span className="font-english-display text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gold/70 uppercase mt-0.5 sm:mt-1">
                ESTD. 1998
              </span>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold bg-gold/40" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold bg-gold/40" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold bg-gold/40" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold bg-gold/40" />
          </div>
        </div>

      </div>

      {/* Lightweight Editorial Contact Modal (Keyboard-Safe & Scrollable) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#04130E]/85 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#08221A] border border-gold/40 rounded-[2px] p-5 sm:p-8 text-ivory shadow-[0_24px_60px_rgba(0,0,0,0.8)] select-text">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-ivory/60 hover:text-gold transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 mb-5 pr-8">
              <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-ivory">
                మాతో మాట్లాడండి
              </h3>
              <p className="font-telugu-body text-xs sm:text-sm text-ivory/70">
                మీ వివరాలను నమోదు చేయండి, మా ప్రతినిధులు త్వరలో సంప్రదిస్తారు.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-gold/60 bg-gold/20 flex items-center justify-center mx-auto text-gold font-bold">
                  ✓
                </div>
                <div className="font-telugu-display text-lg font-bold text-ivory">
                  ధన్యవాదాలు!
                </div>
                <p className="font-telugu-body text-xs text-ivory/70">
                  మీ సందేశం అందింది. మేము త్వరలోనే సంప్రదిస్తాము.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 font-telugu-body text-xs sm:text-sm">
                <div>
                  <label className="block text-xs text-ivory/70 mb-1">
                    పేరు
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="మీ పూర్తి పేరు"
                    className="w-full px-3 py-2 sm:py-2.5 bg-black/30 border border-gold/30 rounded-[2px] text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-ivory/70 mb-1">
                    మొబైల్ నంబర్
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10 అంకెల మొబైల్ నంబర్"
                    className="w-full px-3 py-2 sm:py-2.5 bg-black/30 border border-gold/30 rounded-[2px] text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-ivory/70 mb-1">
                    మీ సందేశం
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="మీరు తెలుసుకోవాలనుకుంటున్న వివరాలు..."
                    className="w-full px-3 py-2 sm:py-2.5 bg-black/30 border border-gold/30 rounded-[2px] text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors resize-none text-xs sm:text-sm"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gold hover:bg-gold-light text-[#08221A] font-bold rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm"
                  >
                    <span>సంప్రదించండి</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
