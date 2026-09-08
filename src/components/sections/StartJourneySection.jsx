import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 10 — START YOUR CHIT JOURNEY
 * High-conversion enquiry CTA and consultation form in clean English.
 */

export function StartJourneySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', scheme: '₹2,50,000 Scheme', message: '' });
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
      setFormData({ name: '', phone: '', scheme: '₹2,50,000 Scheme', message: '' });
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="start-journey"
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#071D16] text-ivory transition-colors duration-500 border-t border-gold/25"
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

      {/* Subtle Background Watermark */}
      <div className="absolute top-[15%] -left-[2%] pointer-events-none select-none z-[1] opacity-[0.025] font-black text-[clamp(4rem,14vw,18rem)] leading-none text-gold uppercase tracking-tight">
        FUTURE
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* Left / Center: Dominant Statement & Primary CTA */}
        <div
          className={`lg:col-span-7 space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-light">
              Start Your Journey
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ivory leading-[1.15] tracking-tight">
            For Your Family's Dreams…<br />
            <span className="text-gradient-gold">Take the first step with disciplined savings.</span>
          </h2>

          <p className="text-sm sm:text-lg lg:text-xl text-ivory/85 leading-relaxed max-w-2xl font-normal">
            Contact our advisors today to find the exact chit scheme tailored for your life goals, wedding plans, or commercial business milestones.
          </p>

          {/* Primary Dominant CTA */}
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto text-center group relative inline-flex items-center justify-center gap-3.5 px-8 py-4 sm:px-10 sm:py-4.5 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-xl font-bold text-base sm:text-lg shadow-[0_8px_30px_rgba(184,142,56,0.25)] hover:shadow-[0_12px_40px_rgba(184,142,56,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Speak with Our Advisors</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Contact Details Row */}
          <div className="pt-6 sm:pt-8 border-t border-gold/20 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-x-8 sm:gap-y-3 text-xs sm:text-sm text-ivory/70">
            <div>
              <span className="text-ivory/40 uppercase tracking-widest text-[0.68rem] block mb-0.5 font-medium">Direct Phone</span>
              <span className="font-semibold text-gold-light tracking-wide">{BRAND.phone}</span>
            </div>

            <div className="hidden sm:block w-[1px] h-6 bg-gold/20" />

            <div>
              <span className="text-ivory/40 uppercase tracking-widest text-[0.68rem] block mb-0.5 font-medium">Email Support</span>
              <span className="font-semibold text-gold-light">{BRAND.email}</span>
            </div>

            <div className="hidden sm:block w-[1px] h-6 bg-gold/20" />

            <div>
              <span className="text-ivory/40 uppercase tracking-widest text-[0.68rem] block mb-0.5 font-medium">Branch Location</span>
              <span className="text-ivory font-medium">Eluru, Andhra Pradesh</span>
            </div>
          </div>
        </div>

        {/* Right: Massive Gold Medallion Emblem with Rotating Orbital Rings & Breathing Glow */}
        <div
          className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] flex items-center justify-center pointer-events-none select-none">
            {/* Breathing Gold Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/35 via-gold/15 to-transparent rounded-full filter blur-3xl animate-glow-pulse" />

            {/* Rotating Outer Dashed Rings */}
            <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-gold/30" />
            <div className="absolute inset-6 sm:inset-10 rounded-full border-2 border-dashed border-gold/40 animate-spin-slow" />
            <div className="absolute inset-12 sm:inset-16 rounded-full border border-gold/25" />

            {/* Central 3D Embossed Seal with Big Official Logo */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-gold/90 bg-gradient-to-br from-[#0F382C] via-[#08221A] to-[#04130E] flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-float-gentle p-3">
              <div className="absolute inset-2 rounded-full border border-gold/40" />
              
              <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-white border-4 border-gold overflow-hidden flex items-center justify-center p-3 relative z-10 shadow-[0_0_40px_rgba(184,142,56,0.6)]">
                <img 
                  src={BRAND.logo} 
                  alt="Siva Kaveri Chits Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]" 
                />
              </div>

              <span className="text-[0.6rem] sm:text-xs tracking-[0.2em] text-gold-light uppercase font-bold font-english-display relative z-10 mt-1.5">
                ESTD. {BRAND.establishedYear} • ELURU
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Consultation Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#04130E]/85 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#08221A] border border-gold/40 rounded-2xl p-5 sm:p-8 text-ivory shadow-[0_24px_60px_rgba(0,0,0,0.8)] select-text">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-ivory/60 hover:text-gold transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5 pr-8 border-b border-gold/20 pb-4">
              <div className="w-16 h-16 rounded-full border-2 border-gold bg-white p-1.5 shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-lg sm:text-xl font-bold text-ivory">
                  Request a Consultation
                </h3>
                <p className="text-xs text-ivory/70">
                  {BRAND.nameEnglish} • Registered Chit Funds, Eluru
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-gold/60 bg-gold/20 flex items-center justify-center mx-auto text-gold font-bold">
                  ✓
                </div>
                <div className="text-lg font-bold text-ivory">
                  Thank You!
                </div>
                <p className="text-xs text-ivory/70">
                  Your enquiry has been received. Our team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs text-ivory/70 mb-1 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-black/30 border border-gold/30 rounded-lg text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-ivory/70 mb-1 font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 bg-black/30 border border-gold/30 rounded-lg text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-ivory/70 mb-1 font-medium">
                    Preferred Scheme Value
                  </label>
                  <select
                    value={formData.scheme}
                    onChange={(e) => setFormData({ ...formData, scheme: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#04130E] border border-gold/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors text-xs sm:text-sm"
                  >
                    <option value="₹50,000 Scheme">₹50,000 Scheme (₹2,000/mo)</option>
                    <option value="₹1,00,000 Scheme">₹1,00,000 Scheme (₹4,000/mo)</option>
                    <option value="₹2,50,000 Scheme">₹2,50,000 Scheme (₹6,250/mo)</option>
                    <option value="₹5,00,000 Scheme">₹5,00,000 Scheme (₹12,500/mo)</option>
                    <option value="₹10,00,000 Scheme">₹10,00,000 Scheme (₹25,000/mo)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-ivory/70 mb-1 font-medium">
                    Message / Queries (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are saving for..."
                    className="w-full px-3.5 py-2.5 bg-black/30 border border-gold/30 rounded-lg text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors resize-none text-xs sm:text-sm"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gold hover:bg-gold-light text-[#08221A] font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm"
                  >
                    <span>Submit Enquiry</span>
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
