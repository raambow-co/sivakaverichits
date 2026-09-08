import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CHIT_SCHEMES, BRAND } from '../../constants/tokens';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Pause, 
  Play, 
  ShieldCheck, 
  Wallet, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  Phone, 
  CheckCircle2,
  Coins
} from 'lucide-react';

/**
 * SECTION 03 — CHIT PLANS & FINANCIAL SCHEMES ULTRA-ANIMATED SLIDESHOW
 * Features:
 * - Signature Deep Emerald Green (#0A241C / #071D16) Institutional Canvas
 * - 3D Interactive Parallax Tilt & Dynamic Specular Cursor Glow
 * - Direction-Aware Slide & Staggered Reveal Animations
 * - Rotating Sacred Gold Watermark Crest
 * - Dynamic Shimmer Laser Light Sweeps
 * - Magnetic Glowing Quick Selector Tabs
 * - Auto-Play Countdown Progress Bar with Hover-Pause
 * - Mobile Touch Swipe Support
 */

const AUTOPLAY_INTERVAL = 5500; // 5.5s per slide

export function ChitPlansSection({ onSelectSchemeForInquiry }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // 3D Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const progressTimerRef = useRef(null);

  const totalPlans = CHIT_SCHEMES.length;
  const currentPlan = CHIT_SCHEMES[currentIndex];

  const handleNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalPlans);
    setProgress(0);
  }, [totalPlans]);

  const handlePrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalPlans) % totalPlans);
    setProgress(0);
  }, [totalPlans]);

  const handleSelectPlan = useCallback((index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setProgress(0);
  }, [currentIndex]);

  // Smooth Auto-Play Progress Loop
  useEffect(() => {
    if (!isAutoPlay || isHovered) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const stepTime = 50;
    const stepIncrement = (stepTime / AUTOPLAY_INTERVAL) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepTime);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isAutoPlay, isHovered, handleNext]);

  // Mouse Move Parallax Tilt Handler
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage positions (0 to 100)
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    setMousePos({ x: xPct, y: yPct });

    // Subtle 3D tilt calculation (-4deg to +4deg)
    const tiltX = ((y / rect.height) - 0.5) * -6;
    const tiltY = ((x / rect.width) - 0.5) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="schemes"
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0A241C] text-ivory border-t border-gold/25 transition-colors duration-500"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045] z-[1] mix-blend-screen" />

      {/* Pulsating Ambient Deep Emerald & Gold Halos */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] animate-glow-pulse"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 50% 30%, rgba(27, 83, 66, 0.45), transparent 75%),
            radial-gradient(circle at 85% 85%, rgba(184, 142, 56, 0.14), transparent 55%),
            radial-gradient(circle at 15% 80%, rgba(27, 83, 66, 0.35), transparent 50%)
          `,
        }}
      />

      {/* Subtle Background Watermark */}
      <div className="absolute top-[6%] -right-[3%] pointer-events-none select-none z-[1] opacity-[0.028] font-black text-[clamp(4.5rem,15vw,18rem)] leading-none text-gold uppercase tracking-tight">
        SCHEMES
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading with Glowing Pill Badge */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-[#071D16]/90 backdrop-blur-md shadow-xs animate-float-gentle">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gold-light font-telugu-body">
              రిజిస్టర్డ్ చిట్ పథకాలు • REGISTERED SAVINGS PLANS
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-ivory leading-[1.2] tracking-tight">
            Find the Chit Scheme That Fits Your Goals
          </h2>
        </div>

        {/* TOP QUICK-SELECTOR TABS (Pills with Interactive Hover & Glow) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10 px-1">
          {CHIT_SCHEMES.map((scheme, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={scheme.id || idx}
                onClick={() => handleSelectPlan(idx)}
                className={`group relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-300 font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] text-[#08221A] border-gold shadow-lg shadow-gold/30 scale-[1.05] font-bold'
                    : 'bg-[#071D16]/90 text-ivory/80 border-gold/30 hover:border-gold hover:text-gold-light hover:scale-[1.02] hover:bg-[#0F382C]'
                }`}
                title={`View ${scheme.nameEnglish}`}
              >
                {/* Active Indicator Pulse Ring */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gold" />
                  </span>
                )}

                <span className={`text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-[#08221A]' : 'text-gold'}`}>
                  0{idx + 1}
                </span>
                <span className="font-extrabold tracking-tight">
                  {scheme.formattedValue}
                </span>
              </button>
            );
          })}
        </div>

        {/* MAIN SLIDESHOW CARD CONTAINER WITH 3D PERSPECTIVE */}
        <div 
          className="relative perspective-card group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrow Left */}
          <button
            onClick={handlePrev}
            aria-label="Previous Plan"
            className="absolute -left-3.5 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#071D16]/95 border-2 border-gold/70 text-gold hover:text-[#08221A] hover:bg-gold transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer hover:scale-115 active:scale-95 group-hover:border-gold"
            title="గత ప్లాన్ (Previous Plan)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={handleNext}
            aria-label="Next Plan"
            className="absolute -right-3.5 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#071D16]/95 border-2 border-gold/70 text-gold hover:text-[#08221A] hover:bg-gold transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer hover:scale-115 active:scale-95 group-hover:border-gold"
            title="తదుపరి ప్లాన్ (Next Plan)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* 3D Interactive Tilting Card Frame */}
          <div 
            ref={cardRef}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
            className="relative overflow-hidden rounded-3xl border-2 border-gold/60 bg-[#071D16]/95 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.65)] border-glow-gold"
          >
            
            {/* Top Auto-Play Progress Bar with Glowing Head */}
            <div className="h-1.5 w-full bg-gold/15 relative overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#B88E38] via-[#F3EEDB] to-[#D4AF57] transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(212,175,87,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dynamic Cursor Spotlight Effect */}
            <div 
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 87, 0.14), transparent 45%)`,
              }}
            />

            {/* Diagonal Laser Shimmer Sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-shimmer-slide opacity-70" />
            </div>

            {/* Heritage Corner Accents */}
            <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-gold pointer-events-none z-20" />
            <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-gold pointer-events-none z-20" />
            <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-gold pointer-events-none z-20" />
            <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-gold pointer-events-none z-20" />

            {/* Background Slow-Spinning Official Logo Crest Watermark */}
            <div className="absolute right-4 -bottom-10 pointer-events-none select-none z-0">
              <div className="relative flex items-center justify-center">
                <div className="w-[16rem] sm:w-[22rem] h-[16rem] sm:h-[22rem] rounded-full border border-gold/10 animate-spin-slow" />
                <div className="absolute w-40 h-40 sm:w-56 sm:h-56 opacity-[0.07] select-none flex items-center justify-center">
                  <img src={BRAND.logo} alt="Siva Kaveri Chits Logo Watermark" className="w-full h-full object-contain filter grayscale" />
                </div>
              </div>
            </div>

            {/* Active Plan Content with Directional Animation & Staggered Reveal */}
            <div 
              key={currentPlan.id || currentIndex}
              className={`relative z-10 p-6 sm:p-9 lg:p-11 ${
                direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
            >
              {/* Card Header Strip: Badge, Category, Regd Seal & Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-gold/20 animate-fade-up-1">
                
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <div className="w-8 h-8 rounded-full border border-gold/60 bg-white p-0.5 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs">
                    <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-full h-full object-contain" />
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-gold text-[#08221A] text-[0.68rem] sm:text-xs font-bold font-english-display tracking-widest uppercase shadow-sm">
                    PLAN 0{currentIndex + 1} OF 0{totalPlans}
                  </span>

                  <span className="px-3 py-1 rounded-lg bg-gold/20 text-gold-light border border-gold/35 text-xs font-bold font-telugu-body">
                    {currentPlan.categoryTelugu}
                  </span>

                  <span className="text-xs text-ivory/70 font-medium hidden md:inline">
                    • {currentPlan.categoryEnglish}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
                  {/* AP Chit Funds Act Pill with Glowing Beacon */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#04130E]/80 border border-gold/35 text-[0.65rem] sm:text-xs font-bold text-gold-light uppercase font-english-display shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>AP ACT 1982 REGD</span>
                  </div>

                  {/* Play / Pause Toggle Button */}
                  <button
                    onClick={() => setIsAutoPlay((prev) => !prev)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-ivory/70 hover:text-gold hover:bg-gold/15 transition-colors cursor-pointer border border-gold/20"
                    title={isAutoPlay ? "Pause Auto-play" : "Resume Auto-play"}
                    aria-label="Toggle auto-play"
                  >
                    {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>

              {/* Main Content Showcase Grid: Left (Titles & Massive ₹ Value) | Right (4 Data Metrics) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center py-6 sm:py-8">
                
                {/* LEFT SHOWCASE: Titles, Big ₹ Value & Purpose */}
                <div className="lg:col-span-6 space-y-5 text-left animate-fade-up-2">
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ivory font-telugu-display leading-tight">
                      {currentPlan.nameTelugu}
                    </h3>
                    <div className="text-xs sm:text-sm font-bold tracking-wider text-gold-light uppercase font-english-display">
                      {currentPlan.nameEnglish}
                    </div>
                  </div>

                  {/* Highlighted ₹ Value Display with Shimmer and Pop */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-[#04130E]/85 border-2 border-gold/45 relative overflow-hidden group/box hover:border-gold transition-colors duration-300">
                    
                    {/* Top Corner Badge */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[0.68rem] sm:text-xs font-bold text-ivory/60 uppercase tracking-wider font-english-display">
                        TOTAL CHIT VALUE (మొత్తం చిట్ విలువ)
                      </span>
                      <Coins className="w-4 h-4 text-gold animate-bounce" />
                    </div>

                    {/* Massive Value with Gold Gradient */}
                    <div className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-gradient-gold leading-none font-english-display py-1">
                      {currentPlan.formattedValue}
                    </div>

                    <div className="text-[0.72rem] sm:text-xs text-gold-light font-medium pt-1.5 font-telugu-body flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>గరిష్ట వేలం మినహాయింపు & తక్షణ చెల్లింపు భరోసా</span>
                    </div>
                  </div>

                  {/* Purpose Statement */}
                  <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed font-normal italic border-l-2 border-gold pl-3.5 py-0.5">
                    "{currentPlan.purposeEnglish}"
                  </p>

                </div>

                {/* RIGHT DETAILS PANEL: 4 Metric Cards Grid with Interactive Hovers */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 animate-fade-up-3">
                  
                  {/* Tile 1: Monthly Subscription */}
                  <div className="p-4 rounded-xl bg-[#0A241C]/90 border border-gold/35 hover:border-gold shadow-md transition-all duration-300 hover:-translate-y-0.5 group/tile cursor-pointer">
                    <div className="flex items-center gap-2 mb-1.5 text-gold">
                      <Wallet className="w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 group-hover/tile:scale-115" />
                      <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-ivory/60 font-english-display">
                        Monthly Subscription
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-gold-light leading-tight">
                      {currentPlan.formattedMonthly}
                    </div>
                    <div className="text-[0.68rem] text-ivory/60 mt-0.5 font-telugu-body">
                      నెలవారీ క్రమశిక్షణతో కూడిన పొదుపు
                    </div>
                  </div>

                  {/* Tile 2: Tenure / Duration */}
                  <div className="p-4 rounded-xl bg-[#0A241C]/90 border border-gold/35 hover:border-gold shadow-md transition-all duration-300 hover:-translate-y-0.5 group/tile cursor-pointer">
                    <div className="flex items-center gap-2 mb-1.5 text-gold">
                      <Calendar className="w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 group-hover/tile:scale-115" />
                      <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-ivory/60 font-english-display">
                        Duration / Tenure
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-ivory leading-tight">
                      {currentPlan.tenureMonths} Months (నెలలు)
                    </div>
                    <div className="text-[0.68rem] text-ivory/60 mt-0.5 font-telugu-body">
                      ఖచ్చితమైన నెలవారీ వేలం సైకిల్
                    </div>
                  </div>

                  {/* Tile 3: Live Auctions */}
                  <div className="p-4 rounded-xl bg-[#0A241C]/90 border border-gold/35 hover:border-gold shadow-md transition-all duration-300 hover:-translate-y-0.5 group/tile cursor-pointer">
                    <div className="flex items-center gap-2 mb-1.5 text-gold">
                      <TrendingUp className="w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 group-hover/tile:scale-115" />
                      <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-ivory/60 font-english-display">
                        Live Auction Payouts
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-ivory leading-tight">
                      100% Transparent
                    </div>
                    <div className="text-[0.68rem] text-ivory/60 mt-0.5 font-telugu-body">
                      అవసరమైనప్పుడు తక్షణ నిధుల లభ్యత
                    </div>
                  </div>

                  {/* Tile 4: Bank Guarantee & Trust */}
                  <div className="p-4 rounded-xl bg-[#0A241C]/90 border border-gold/35 hover:border-gold shadow-md transition-all duration-300 hover:-translate-y-0.5 group/tile cursor-pointer">
                    <div className="flex items-center gap-2 mb-1.5 text-gold">
                      <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 group-hover/tile:scale-115" />
                      <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-ivory/60 font-english-display">
                        Depository Guarantee
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-ivory leading-tight">
                      100% Bank Backed
                    </div>
                    <div className="text-[0.68rem] text-ivory/60 mt-0.5 font-telugu-body">
                      చట్టబద్ధమైన బ్యాంక్ డిపాజిట్ భద్రత
                    </div>
                  </div>

                </div>

              </div>

              {/* Card Footer Actions Strip */}
              <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 animate-fade-up-4">
                
                <div className="flex items-center gap-2 text-xs text-ivory/80 font-telugu-body">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    ఈ ప్లాన్ కోసం తక్షణ రిజిస్ట్రేషన్ & కస్టమర్ సేవ అందుబాటులో ఉంది.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectSchemeForInquiry && onSelectSchemeForInquiry(currentPlan)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-xl font-telugu-body font-bold text-sm sm:text-base shadow-lg shadow-gold/25 hover:shadow-gold/45 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group/btn"
                  >
                    <span>ఈ చిట్ ప్లాన్ ఎంచుకోండి (Enquire Now)</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM PAGINATION & CONTROLS STRIP */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          
          {/* Slide Indicator & Expanding Dots */}
          <div className="flex items-center gap-3">
            <span className="font-english-display text-xs sm:text-sm font-bold text-gold-light tracking-wider">
              0{currentIndex + 1} / 0{totalPlans}
            </span>
            
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Scheme Slides">
              {CHIT_SCHEMES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPlan(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex 
                      ? 'w-8 sm:w-10 bg-gold shadow-md shadow-gold/40' 
                      : 'w-2 bg-gold/30 hover:bg-gold/60'
                  }`}
                  aria-label={`Go to Plan ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Direct Phone / Helpline with Pulse */}
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-ivory/80 hover:text-gold transition-colors font-medium group"
          >
            <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-3.5 h-3.5 text-gold" />
            </span>
            <span>ప్రత్యక్ష సహాయం కొరకు: <strong className="text-gold-light">{BRAND.phone}</strong></span>
          </a>

        </div>

      </div>

    </section>
  );
}
