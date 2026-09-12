import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, ChevronLeft, ChevronRight, Quote, Play, Pause, Sparkles } from 'lucide-react';
import { BRAND, MEMBER_REVIEWS } from '../../constants/tokens';

/**
 * SECTION 05 — TRUST & TRANSPARENCY
 * Left: Official regulatory compliance list
 * Right: Pure Auto-Sliding Verified Member Reviews (One by One without requiring clicks)
 */

const DOCUMENT_ITEMS = [
  "Pre-approved Registered Chit Agreements",
  "Audited Monthly Live Auction Records",
  "Complete Passbook & Dividend Statement Ledgers",
  "Statutory Security Bank Deposit Guarantees",
  "Standardized Surety & Disbursement Norms",
];

export function TrustTransparencySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  const totalReviews = MEMBER_REVIEWS.length;
  const currentReview = MEMBER_REVIEWS[currentIdx];
  const ROTATE_DURATION_MS = 4800;

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % totalReviews);
    setProgress(0);
  }, [totalReviews]);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + totalReviews) % totalReviews);
    setProgress(0);
  }, [totalReviews]);

  // Smooth progress bar update & continuous auto-slide loop
  useEffect(() => {
    if (!isAutoRotate || isHovered) return;

    const intervalTime = 40;
    const increment = (intervalTime / ROTATE_DURATION_MS) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(progressTimer);
  }, [isAutoRotate, isHovered, handleNext]);

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

  return (
    <section
      ref={sectionRef}
      id="transparency"
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0A241C] text-ivory transition-colors duration-500 border-t border-gold/20"
    >
      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045] z-[1] mix-blend-screen" />

      {/* Soft Ambient Gold & Emerald Radial Halos */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 75% 45%, rgba(184, 142, 56, 0.12), transparent 55%),
            radial-gradient(circle at 20% 80%, rgba(27, 83, 66, 0.4), transparent 60%),
            radial-gradient(ellipse at 50% 0%, rgba(184, 142, 56, 0.08), transparent 50%)
          `,
        }}
      />

      {/* Subtle Background Watermark */}
      <div className="absolute top-[10%] -left-[2%] pointer-events-none select-none z-[1] opacity-[0.025] font-black text-[clamp(4rem,14vw,16rem)] leading-none text-gold uppercase tracking-tight">
        TRUST
      </div>

      {/* Subtle Top & Bottom Gold Line Tracery */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

      {/* MAIN EDITORIAL GRID */}
      <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: STATEMENT & VERIFIED COMPLIANCE LIST */}
        <div
          className={`lg:col-span-6 space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-light font-english-display">
              Governance & Real Member Experiences
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ivory leading-[1.2] tracking-tight">
            Trust is not in words…<br />
            <span className="text-gradient-gold">It is proven through transparency.</span>
          </h2>

          {/* Clean English Compliance List */}
          <div className="pt-2 border-t border-gold/20 space-y-3">
            {DOCUMENT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3.5 py-2 border-b border-gold/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-2 h-2 rotate-45 border border-gold bg-gold/40 flex-shrink-0 group-hover:bg-gold transition-colors" />

                <span className="text-sm sm:text-base font-semibold text-ivory/95 group-hover:text-gold-light transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Single Understated CTA */}
          <div className="pt-3">
            <button
              onClick={() => {
                const el = document.getElementById('faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 text-gold-light hover:text-ivory font-semibold text-sm sm:text-base border-b border-gold/40 hover:border-gold pb-1.5 transition-all duration-300 group cursor-pointer"
            >
              <span>Learn More About Regulatory Protections</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: ORIGINAL DARK GOLD-ACCENTED REVIEW CARD WITH CORNER BRACKETS & AUTO-SLIDE */}
        <div
          id="transparency-reviews"
          className="lg:col-span-6 flex justify-center lg:justify-end relative py-4 sm:py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Outer Framework with 4 Gold Corner Filigree Brackets */}
          <div className="relative w-full max-w-[500px] sm:max-w-[530px]">
            
            {/* Top-Left Bracket */}
            <div className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-gold/70 rounded-tl-sm pointer-events-none z-20" />
            {/* Top-Right Bracket */}
            <div className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-gold/70 rounded-tr-sm pointer-events-none z-20" />
            {/* Bottom-Left Bracket */}
            <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-gold/70 rounded-bl-sm pointer-events-none z-20" />
            {/* Bottom-Right Bracket */}
            <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-gold/70 rounded-br-sm pointer-events-none z-20" />

            {/* Main Dark Green Review Card Stack (Leporello/Accordion Style) */}
            <div className="relative z-10 w-full h-[520px] sm:h-[480px] perspective-1000 select-none">
              
              {MEMBER_REVIEWS.map((review, idx) => {
                // Calculate relative position for the stack effect
                const offset = (idx - currentIdx + totalReviews) % totalReviews;
                
                // Only render the front card and the next 3 cards to prevent DOM bloat and messy overlaps
                if (offset > 3) return null;
                
                const isFront = offset === 0;

                return (
                  <div
                    key={review.id}
                    className="absolute inset-0 w-full transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                    style={{
                      transform: `translateY(${offset * 14}px) translateZ(-${offset * 40}px) scale(${1 - offset * 0.04})`,
                      opacity: 1 - offset * 0.25,
                      zIndex: 10 - offset,
                      pointerEvents: isFront ? 'auto' : 'none'
                    }}
                  >
                    <div className="w-full h-full bg-[#082218]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gold/35 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
                      
                      {/* Top Smooth Auto-Slide Progress Line (Only visible on front card) */}
                      {isFront && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gold/15 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-gold via-[#D4AF57] to-gold transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}

                      <div className="space-y-4 pt-1 flex-1">
                        {/* Header: Name, Stars & Chit Scheme Badge */}
                        <div className="flex items-start justify-between gap-3 pb-3 border-b border-gold/15">
                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-black text-ivory font-english-display uppercase tracking-wide leading-tight">
                              {review.nameEnglish}
                            </h3>
                            <div className="text-xs sm:text-sm font-bold text-gold-light font-telugu-body mt-1">
                              {review.nameTelugu}
                            </div>
                            <div className="text-[0.7rem] sm:text-xs text-ivory/70 font-medium mt-0.5">
                              {review.roleEnglish}
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                            {/* 5 Golden Stars */}
                            <div className="flex items-center gap-0.5 text-amber-400">
                              {[...Array(5)].map((_, starIdx) => (
                                <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              ))}
                            </div>

                            {/* Chit Plan Badge */}
                            <span className="px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold-light text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider font-english-display">
                              {review.chitScheme}
                            </span>
                          </div>
                        </div>

                        {/* Body: Large Quote & Telugu / English Text */}
                        <div className="space-y-3 my-3 relative">
                          <Quote className="w-8 h-8 text-gold/25 absolute -top-2 -left-1 pointer-events-none" />

                          {/* Telugu Experience */}
                          <p className="text-xs sm:text-sm md:text-[0.92rem] text-ivory/95 font-medium font-telugu-body leading-relaxed pl-3 relative z-10">
                            "{review.reviewTelugu}"
                          </p>

                          {/* English Translation */}
                          <p className="text-[0.72rem] sm:text-xs text-ivory/70 italic leading-relaxed pl-3 relative z-10">
                            "{review.reviewEnglish}"
                          </p>
                        </div>

                        {/* Footer Badges: Tenure & Official Verification */}
                        <div className="pt-3.5 border-t border-gold/15 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[0.72rem] sm:text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{review.tenure}</span>
                          </div>

                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-950/50 text-emerald-400 text-[0.65rem] sm:text-xs font-bold tracking-wider uppercase font-english-display">
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            <span>AP REGD VERIFIED</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation: Indicator Dots + Interactive Buttons (Only fully active on front card) */}
                      <div className={`mt-4 sm:mt-5 pt-3.5 border-t border-gold/15 flex items-center justify-between transition-opacity duration-300 ${isFront ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Dots Indicator */}
                        <div className="flex items-center gap-1.5">
                          {MEMBER_REVIEWS.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => {
                                if (!isFront) return;
                                setCurrentIdx(dotIdx);
                                setProgress(0);
                              }}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                dotIdx === currentIdx ? 'w-6 bg-gold shadow-xs' : 'w-1.5 bg-gold/30 hover:bg-gold/60'
                              }`}
                              aria-label={`Go to review ${dotIdx + 1}`}
                            />
                          ))}
                        </div>

                        {/* Action Controls: Pause, Prev, Next */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => isFront && setIsAutoRotate((prev) => !prev)}
                            className="w-7 h-7 rounded-full border border-gold/30 hover:border-gold text-gold/80 hover:text-gold flex items-center justify-center transition-colors cursor-pointer bg-gold/5"
                            title={isAutoRotate ? "Pause auto-slide" : "Resume auto-slide"}
                            aria-label="Toggle auto slide"
                          >
                            {isAutoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                          </button>

                          <button
                            onClick={() => isFront && handlePrev()}
                            className="w-7 h-7 rounded-full border border-gold/30 hover:border-gold text-gold/80 hover:text-gold flex items-center justify-center transition-colors cursor-pointer bg-gold/5"
                            title="Previous Review"
                            aria-label="Previous Review"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => isFront && handleNext()}
                            className="w-7 h-7 rounded-full border border-gold/30 hover:border-gold text-gold/80 hover:text-gold flex items-center justify-center transition-colors cursor-pointer bg-gold/5"
                            title="Next Review"
                            aria-label="Next Review"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
