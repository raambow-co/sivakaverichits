import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Sun, Moon, ArrowRight, ArrowDown, Instagram, ExternalLink, Sparkles, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { BRAND, INSTAGRAM_POSTS } from '../../constants/tokens';
import { GoldCoinsOverlay } from '../common/GoldCoinsOverlay';

/**
 * HERO SECTION - SIVA KAVERI CHITS RBT (100% MOBILE RESPONSIVE & POLISHED)
 * 
 * CORE HERO STATEMENT:
 * Telugu: "చిన్న చిన్న పొదుపులే… పెద్ద పెద్ద కలలకు పునాది."
 * English: "Small savings become the foundation for big dreams."
 */

export function HeroSection({ onOpenInquiry, theme = 'warm-ivory', onToggleTheme }) {
  const [currentLang, setCurrentLang] = useState('te'); 
  const [isAuto, setIsAuto] = useState(true);

  // Active Instagram Post Showcase state
  const [activePostIndex, setActivePostIndex] = useState(0);
  const [isPostHovered, setIsPostHovered] = useState(false);
  const [isPostAuto, setIsPostAuto] = useState(true);

  const totalPosts = INSTAGRAM_POSTS.length;
  const currentPost = INSTAGRAM_POSTS[activePostIndex];

  // Auto-cycle through Instagram posts every 4.8 seconds unless hovered
  useEffect(() => {
    if (!isPostAuto || isPostHovered) return;
    const timer = setInterval(() => {
      setActivePostIndex((prev) => (prev + 1) % totalPosts);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPostAuto, isPostHovered, totalPosts]);

  const teluguStatement = useMemo(() => ({
    line1: [
      { text: "చిన్న", isAccent: false },
      { text: "చిన్న", isAccent: false },
      { text: "పొదుపులే…", isAccent: true },
    ],
    line2: [
      { text: "పెద్ద", isAccent: false },
      { text: "పెద్ద", isAccent: false },
      { text: "కలలకు", isAccent: false },
      { text: "పునాది.", isAccent: true },
    ]
  }), []);

  const englishStatement = useMemo(() => ({
    line1: [
      { text: "Small", isAccent: false },
      { text: "savings", isAccent: false },
      { text: "become", isAccent: false },
      { text: "the", isAccent: false },
    ],
    line2: [
      { text: "foundation", isAccent: true },
      { text: "for", isAccent: false },
      { text: "big", isAccent: false },
      { text: "dreams.", isAccent: true },
    ]
  }), []);

  // Continuous auto-loop alternating between Telugu and English every 4.2 seconds
  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCurrentLang((prev) => (prev === 'te' ? 'en' : 'te'));
    }, 4200);

    return () => clearInterval(interval);
  }, [isAuto]);

  const handleSelectLanguage = useCallback((lang) => {
    setIsAuto(false);
    setCurrentLang(lang);
  }, []);

  const handleResumeAuto = useCallback(() => {
    setIsAuto(true);
  }, []);

  const getWordStyle = (lang, lineIndex, wordIndex) => {
    const totalIndex = lineIndex * 4 + wordIndex;
    const isTelugu = lang === 'te';
    const isActive = currentLang === lang;

    if (isActive) {
      return {
        opacity: 1,
        filter: 'blur(0px)',
        transform: 'translate3d(0, 0, 0) scale(1)',
        pointerEvents: 'auto',
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${totalIndex * 60}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${totalIndex * 60}ms, filter 0.6s ease ${totalIndex * 60}ms`,
      };
    } else {
      const yOffset = isTelugu ? '-10px' : '10px';
      return {
        opacity: 0,
        filter: 'blur(6px)',
        transform: `translate3d(0, ${yOffset}, 0) scale(0.96)`,
        pointerEvents: 'none',
        transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${totalIndex * 40}ms, transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) ${totalIndex * 40}ms, filter 0.5s ease ${totalIndex * 40}ms`,
      };
    }
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory selection:bg-gold selection:text-white transition-colors duration-500">
      
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div 
        className="dark:hidden absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 50% 45%, rgba(184, 142, 56, 0.08), transparent 70%),
            radial-gradient(circle 350px at 15% 25%, rgba(15, 56, 44, 0.04), transparent 60%)
          `,
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 48%, rgba(27, 83, 66, 0.35), transparent 72%),
            radial-gradient(circle 380px at 80% 20%, rgba(184, 142, 56, 0.08), transparent 65%)
          `,
        }}
      />

      {/* Subtle Telugu Typography Watermarks */}
      <div className="absolute top-[4%] -right-[3%] pointer-events-none select-none z-[2] font-telugu-display font-black text-[clamp(4.5rem,12vw,17rem)] leading-none text-gold/[0.04] dark:text-gold/[0.04]">
        విశ్వాసం
      </div>

      {/* Prominently Floating & Glowing Gold Coins */}
      <GoldCoinsOverlay />

      {/* Top Header Bar */}
      <header className="relative z-10 pt-4 sm:pt-8 px-4 sm:px-12 lg:px-16 flex items-center justify-between gap-2 sm:gap-4 max-w-7xl mx-auto w-full">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold bg-white p-1 shadow-md flex-shrink-0 flex items-center justify-center">
            <img 
              src={BRAND.logo} 
              alt="Siva Kaveri Chits Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-telugu-display text-base sm:text-xl font-bold text-forest dark:text-ivory leading-tight tracking-tight">
              {BRAND.nameTelugu}
            </span>
            <span className="font-english-display text-[0.55rem] sm:text-[0.68rem] tracking-[0.16em] sm:tracking-[0.18em] text-gold-dark dark:text-gold-light uppercase font-semibold">
              {BRAND.nameEnglish} • ELURU
            </span>
          </div>
        </div>

        {/* Minimal Utilities: Theme Toggle + Language Mode */}
        <div className="flex items-center gap-1.5 sm:gap-4">
          
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-charcoal/70 dark:text-ivory/80 hover:text-forest dark:hover:text-gold hover:bg-forest/5 dark:hover:bg-gold/10 transition-colors cursor-pointer"
              title={theme === 'dark-forest' ? 'లైట్ థీమ్‌కు మారండి' : 'డార్క్ థీమ్‌కు మారండి'}
              aria-label="Toggle theme"
            >
              {theme === 'dark-forest' ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-light" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest" />
              )}
            </button>
          )}

          <div 
            className="flex items-center gap-0.5 sm:gap-1.5 p-0.5 sm:p-1 bg-white/80 dark:bg-forest-dark/80 backdrop-blur-sm border border-gold/30 rounded-full shadow-xs text-xs"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={handleResumeAuto}
              className={`px-2 sm:px-2.5 py-1 rounded-full font-telugu-body text-[0.62rem] sm:text-xs font-semibold transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                isAuto
                  ? 'bg-forest/10 dark:bg-gold/20 text-forest dark:text-gold font-bold'
                  : 'text-charcoal/50 dark:text-ivory/40 hover:text-charcoal dark:hover:text-ivory'
              }`}
              title="ఆటో మోడ్"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isAuto ? 'bg-gold animate-pulse' : 'bg-charcoal/30 dark:bg-ivory/30'}`} />
              <span className="hidden sm:inline">ఆటో</span>
            </button>

            <span className="text-gold/30 text-[0.65rem]">|</span>

            <button
              onClick={() => handleSelectLanguage('te')}
              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-telugu-body text-[0.62rem] sm:text-xs font-semibold transition-all duration-300 cursor-pointer ${
                currentLang === 'te'
                  ? 'bg-forest text-white dark:bg-gold dark:text-forest-deep shadow-xs'
                  : 'text-charcoal/60 dark:text-ivory/60 hover:text-forest dark:hover:text-gold'
              }`}
            >
              తెలుగు
            </button>

            <button
              onClick={() => handleSelectLanguage('en')}
              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-english-display text-[0.62rem] sm:text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-forest text-white dark:bg-gold dark:text-forest-deep shadow-xs'
                  : 'text-charcoal/60 dark:text-ivory/60 hover:text-forest dark:hover:text-gold'
              }`}
            >
              EN
            </button>
          </div>

        </div>

      </header>

      {/* Main Two-Column Hero Stage */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full py-6 sm:py-10 my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center w-full">
          
          {/* LEFT COLUMN: Left-Weighted Animated Statement, Narrative, CTAs & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            
            {/* Regulatory & Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold/40 bg-white/70 dark:bg-forest-dark/80 backdrop-blur-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
              <span className="font-telugu-body text-[0.7rem] sm:text-xs font-bold text-forest dark:text-gold-light tracking-wide">
                {currentLang === 'te' 
                  ? 'ఆంధ్రప్రదేశ్ ప్రభుత్వ గుర్తింపు • 25+ ఏళ్ల విశ్వసనీయత' 
                  : 'AP GOVT REGISTERED • 25+ YEARS OF TRUST'}
              </span>
            </div>

            {/* Visual Typography Frame (Telugu ↔ English Morphing Animation) */}
            <div className="relative w-full select-none min-h-[110px] sm:min-h-[135px] md:min-h-[155px] lg:min-h-[175px] xl:min-h-[195px] flex flex-col justify-center">
              
              {/* Line 1 Frame */}
              <div className="relative w-full flex items-center justify-start h-[45px] sm:h-[56px] md:h-[68px] lg:h-[78px] xl:h-[88px]">
                
                {/* Telugu Line 1 */}
                <div 
                  className="absolute inset-y-0 left-0 flex items-center justify-start flex-wrap gap-x-2 sm:gap-x-3.5 md:gap-x-4 font-telugu-display text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.4rem] font-extrabold tracking-tight text-forest dark:text-ivory leading-none text-left"
                  aria-hidden={currentLang !== 'te'}
                >
                  {teluguStatement.line1.map((item, idx) => {
                    const style = getWordStyle('te', 0, idx);
                    return (
                      <span
                        key={`te-l1-${idx}`}
                        className={`morph-word ${item.isAccent ? 'text-gradient-gold' : ''}`}
                        style={style}
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </div>

                {/* English Line 1 */}
                <div 
                  className="absolute inset-y-0 left-0 flex items-center justify-start flex-wrap gap-x-1.5 sm:gap-x-3 md:gap-x-3.5 font-english-display text-lg sm:text-2xl md:text-3xl lg:text-[2.25rem] xl:text-[2.75rem] font-semibold tracking-tight text-forest dark:text-ivory leading-none text-left"
                  aria-hidden={currentLang !== 'en'}
                >
                  {englishStatement.line1.map((item, idx) => {
                    const style = getWordStyle('en', 0, idx);
                    return (
                      <span
                        key={`en-l1-${idx}`}
                        className="morph-word"
                        style={style}
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </div>

              </div>

              {/* Line 2 Frame */}
              <div className="relative w-full flex items-center justify-start h-[45px] sm:h-[56px] md:h-[68px] lg:h-[78px] xl:h-[88px] mt-1 sm:mt-2">
                
                {/* Telugu Line 2 */}
                <div 
                  className="absolute inset-y-0 left-0 flex items-center justify-start flex-wrap gap-x-2 sm:gap-x-3.5 md:gap-x-4 font-telugu-display text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.4rem] font-extrabold tracking-tight text-forest dark:text-ivory leading-none text-left"
                  aria-hidden={currentLang !== 'te'}
                >
                  {teluguStatement.line2.map((item, idx) => {
                    const style = getWordStyle('te', 1, idx);
                    return (
                      <span
                        key={`te-l2-${idx}`}
                        className={`morph-word ${item.isAccent ? 'text-gradient-gold' : ''}`}
                        style={style}
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </div>

                {/* English Line 2 */}
                <div 
                  className="absolute inset-y-0 left-0 flex items-center justify-start flex-wrap gap-x-1.5 sm:gap-x-3 md:gap-x-3.5 font-english-display text-lg sm:text-2xl md:text-3xl lg:text-[2.25rem] xl:text-[2.75rem] font-semibold tracking-tight text-forest dark:text-ivory leading-none text-left"
                  aria-hidden={currentLang !== 'en'}
                >
                  {englishStatement.line2.map((item, idx) => {
                    const style = getWordStyle('en', 1, idx);
                    return (
                      <span
                        key={`en-l2-${idx}`}
                        className={`morph-word ${item.isAccent ? 'text-gradient-gold' : ''}`}
                        style={style}
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* Supporting Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
              
              <a
                href="#schemes"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-xl font-telugu-body font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(184,142,56,0.35)] hover:shadow-[0_12px_35px_rgba(184,142,56,0.5)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>{currentLang === 'te' ? 'చిట్ పథకాలను చూడండి' : 'Explore Chit Schemes'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/85 dark:bg-forest-dark/85 hover:bg-white dark:hover:bg-forest-dark text-forest dark:text-ivory rounded-xl border border-forest/20 dark:border-gold/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 font-telugu-body font-semibold text-sm sm:text-base cursor-pointer hover:border-gold"
              >
                <span>{currentLang === 'te' ? 'మమ్మల్ని సంప్రదించండి' : 'Inquire / Contact Us'}</span>
              </button>

            </div>

            {/* Quick Credibility Markers with Interactive Hover Accents */}
            <div className="pt-3.5 sm:pt-4 border-t border-gold/30 w-full max-w-xl">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-left">
                <div className="space-y-0.5 group/stat cursor-default">
                  <div className="text-sm sm:text-base lg:text-lg font-black text-forest dark:text-gold-light font-english-display transition-transform duration-200 group-hover/stat:scale-105">
                    25+ YRS
                  </div>
                  <div className="text-[0.68rem] sm:text-xs text-charcoal/70 dark:text-ivory/70 font-telugu-body">
                    {currentLang === 'te' ? 'విశ్వసనీయ సేవ' : 'Trusted Legacy'}
                  </div>
                </div>
                <div className="space-y-0.5 border-l border-gold/30 pl-2.5 sm:pl-4 group/stat cursor-default">
                  <div className="text-sm sm:text-base lg:text-lg font-black text-forest dark:text-gold-light font-english-display transition-transform duration-200 group-hover/stat:scale-105">
                    100%
                  </div>
                  <div className="text-[0.68rem] sm:text-xs text-charcoal/70 dark:text-ivory/70 font-telugu-body">
                    {currentLang === 'te' ? 'ప్రభుత్వ రిజిస్టర్డ్' : 'AP Govt Regd.'}
                  </div>
                </div>
                <div className="space-y-0.5 border-l border-gold/30 pl-2.5 sm:pl-4 group/stat cursor-default">
                  <div className="text-sm sm:text-base lg:text-lg font-black text-forest dark:text-gold-light font-english-display transition-transform duration-200 group-hover/stat:scale-105">
                    ₹50K - ₹50L
                  </div>
                  <div className="text-[0.68rem] sm:text-xs text-charcoal/70 dark:text-ivory/70 font-telugu-body">
                    {currentLang === 'te' ? 'ఫ్లెక్సిబుల్ ప్లాన్స్' : 'Chit Schemes'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Pure Instagram Post Image Linked to Instagram */}
          <div 
            className="lg:col-span-5 relative w-full mt-4 lg:mt-0 flex flex-col items-center lg:items-end"
            onMouseEnter={() => setIsPostHovered(true)}
            onMouseLeave={() => setIsPostHovered(false)}
          >
            <div className="relative w-full max-w-[390px] sm:max-w-[420px]">
              
              {/* Only Pure Instagram Image - Directly Linked to Instagram Profile */}
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to follow on Instagram"
                className="group relative block w-full aspect-square rounded-2xl overflow-hidden bg-[#0A241C] border border-transparent shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Pure Instagram Post Graphic */}
                <img
                  key={currentPost.id}
                  src={currentPost.image}
                  alt={currentPost.titleEnglish || "Shiva Kaveri Chits Instagram"}
                  className="w-full h-full object-cover object-center animate-fade-in transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Sleek Instagram Pill Watermark (Top-Right) */}
                <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[0.7rem] font-bold shadow-md group-hover:bg-gradient-to-r group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#F77737] group-hover:border-transparent transition-all duration-300">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                  <span>Follow Us</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                </div>

                {/* Play Button Overlay for Reels */}
                {currentPost.type === 'reel' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none transition-opacity group-hover:bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-black/65 border-2 border-white/90 flex items-center justify-center text-white shadow-2xl backdrop-blur-xs transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Subtle Bottom Vignette with Click to Open Guidance */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[0.72rem] font-semibold truncate max-w-[260px]">
                    {currentPost.titleTelugu}
                  </span>
                  <span className="text-[0.68rem] text-gold-light font-bold flex items-center gap-1 flex-shrink-0">
                    <span>ఇన్‌స్టాగ్రామ్‌లో చూడండి</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Clean Minimal Dots Progress Indicator */}
              <div className="mt-3.5 flex items-center justify-center gap-2">
                {INSTAGRAM_POSTS.map((post, idx) => (
                  <button
                    key={post.id}
                    onClick={() => setActivePostIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activePostIndex ? 'w-6 bg-gold shadow-xs' : 'w-2 bg-gold/30 hover:bg-gold/60'
                    }`}
                    aria-label={`Go to Instagram post ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </main>

      {/* Bottom Subtext */}
      <footer className="relative z-10 pb-4 sm:pb-8 px-4 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto w-full text-[0.7rem] sm:text-xs font-telugu-body text-charcoal/60 dark:text-ivory/60 border-t border-gold/15 pt-3 sm:pt-4 text-center sm:text-left">
        
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
          <span>
            ఆంధ్రప్రదేశ్ ప్రభుత్వ గుర్తింపు పొందిన రిజిస్టర్డ్ చిట్ ఫండ్ సంస్థ • ఏలూరు
          </span>
        </div>

        <a 
          href="#brand-story" 
          className="inline-flex items-center gap-1.5 text-charcoal/50 dark:text-ivory/50 hover:text-gold transition-colors select-none"
        >
          <span className="text-[0.65rem] sm:text-[0.7rem] tracking-wider uppercase font-english-display">SCROLL</span>
          <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </a>

      </footer>

    </section>
  );
}
