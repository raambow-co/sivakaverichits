import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Sun, Moon, ArrowRight, ArrowDown } from 'lucide-react';
import { BRAND } from '../../constants/tokens';
import { GoldCoinsOverlay } from '../common/GoldCoinsOverlay';

/**
 * HERO SECTION - SIVA KAVERI CHITS RBT (SEAMLESS BILINGUAL CYCLE & REFINED SCALE)
 * 
 * CORE HERO STATEMENT:
 * Telugu: "చిన్న చిన్న పొదుపులే… పెద్ద పెద్ద కలలకు పునాది."
 * English: "Small savings become the foundation for big dreams."
 */

const HOLD_DURATION = 4200;
const MORPH_DURATION = 1300;

export function HeroSection({ onOpenInquiry, theme = 'warm-ivory', onToggleTheme }) {
  const [currentLang, setCurrentLang] = useState('te'); 
  const [targetLang, setTargetLang] = useState('te');
  const [isAuto, setIsAuto] = useState(true);
  const [phase, setPhase] = useState('HOLD_TE'); // 'HOLD_TE' | 'MORPHING_TO_EN' | 'HOLD_EN' | 'MORPHING_TO_TE'

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

  // Robust 4-stage State Machine: Telugu ↔ English continuous auto-loop
  useEffect(() => {
    if (!isAuto) return;

    let timer;

    if (phase === 'HOLD_TE') {
      timer = setTimeout(() => {
        setPhase('MORPHING_TO_EN');
        setTargetLang('en');
      }, HOLD_DURATION);
    } else if (phase === 'MORPHING_TO_EN') {
      timer = setTimeout(() => {
        setCurrentLang('en');
        setPhase('HOLD_EN');
      }, MORPH_DURATION);
    } else if (phase === 'HOLD_EN') {
      timer = setTimeout(() => {
        setPhase('MORPHING_TO_TE');
        setTargetLang('te');
      }, HOLD_DURATION);
    } else if (phase === 'MORPHING_TO_TE') {
      timer = setTimeout(() => {
        setCurrentLang('te');
        setPhase('HOLD_TE');
      }, MORPH_DURATION);
    }

    return () => clearTimeout(timer);
  }, [isAuto, phase]);

  const handleSelectLanguage = useCallback((lang) => {
    if (lang === targetLang && !isAuto) return;

    setIsAuto(false);

    if (lang === 'en' && currentLang !== 'en') {
      setPhase('MORPHING_TO_EN');
      setTargetLang('en');
    } else if (lang === 'te' && currentLang !== 'te') {
      setPhase('MORPHING_TO_TE');
      setTargetLang('te');
    }
  }, [currentLang, targetLang, isAuto]);

  const handleResumeAuto = useCallback(() => {
    setIsAuto(true);
    if (currentLang === 'te') {
      setPhase('HOLD_TE');
    } else {
      setPhase('HOLD_EN');
    }
  }, [currentLang]);

  const getWordStyle = (lang, lineIndex, wordIndex) => {
    const totalIndex = lineIndex * 4 + wordIndex;
    const enterDelay = totalIndex * 60;
    const exitDelay = totalIndex * 40;

    const isTeluguActive = phase === 'HOLD_TE';
    const isEnglishActive = phase === 'HOLD_EN';
    const isMorphingToEn = phase === 'MORPHING_TO_EN';
    const isMorphingToTe = phase === 'MORPHING_TO_TE';

    if (lang === 'te') {
      if (isTeluguActive) {
        return {
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'translate3d(0, 0, 0) scale(1)',
          letterSpacing: 'normal',
        };
      }
      if (isMorphingToEn) {
        return {
          opacity: 0,
          filter: 'blur(6px)',
          transform: 'translate3d(0, -6px, 0) scale(0.97)',
          letterSpacing: '0.02em',
          transition: `opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) ${exitDelay}ms, transform 0.75s cubic-bezier(0.4, 0, 0.2, 1) ${exitDelay}ms, filter 0.65s ease ${exitDelay}ms`,
        };
      }
      if (isEnglishActive) {
        return {
          opacity: 0,
          filter: 'blur(6px)',
          transform: 'translate3d(0, -6px, 0) scale(0.97)',
          pointerEvents: 'none',
        };
      }
      if (isMorphingToTe) {
        return {
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'translate3d(0, 0, 0) scale(1)',
          letterSpacing: 'normal',
          transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${enterDelay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${enterDelay}ms, filter 0.75s ease ${enterDelay}ms`,
        };
      }
    }

    if (lang === 'en') {
      if (isEnglishActive) {
        return {
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'translate3d(0, 0, 0) scale(1)',
          letterSpacing: '0.02em',
        };
      }
      if (isMorphingToTe) {
        return {
          opacity: 0,
          filter: 'blur(6px)',
          transform: 'translate3d(0, 6px, 0) scale(1.02)',
          letterSpacing: '0.03em',
          transition: `opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) ${exitDelay}ms, transform 0.75s cubic-bezier(0.4, 0, 0.2, 1) ${exitDelay}ms, filter 0.65s ease ${exitDelay}ms`,
        };
      }
      if (isTeluguActive) {
        return {
          opacity: 0,
          filter: 'blur(6px)',
          transform: 'translate3d(0, 6px, 0) scale(1.02)',
          pointerEvents: 'none',
        };
      }
      if (isMorphingToEn) {
        return {
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'translate3d(0, 0, 0) scale(1)',
          letterSpacing: '0.02em',
          transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${enterDelay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${enterDelay}ms, filter 0.75s ease ${enterDelay}ms`,
        };
      }
    }

    return {};
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory selection:bg-gold selection:text-white transition-colors duration-500">
      
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
      <div className="absolute top-[4%] -right-[3%] pointer-events-none select-none z-[2] font-telugu-display font-black text-[clamp(5.5rem,13vw,17rem)] leading-none text-gold/[0.04] dark:text-gold/[0.04]">
        విశ్వాసం
      </div>

      {/* Prominently Floating & Glowing Gold Coins */}
      <GoldCoinsOverlay />

      {/* Top Header Bar */}
      <header className="relative z-10 pt-6 sm:pt-8 px-6 sm:px-12 lg:px-16 flex items-center justify-between gap-4 max-w-7xl mx-auto w-full">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[2px] bg-forest dark:bg-forest-dark border border-gold/60 text-gold flex items-center justify-center font-telugu-display text-xl sm:text-2xl font-bold shadow-xs">
            శ్రీ
          </div>
          <div className="flex flex-col">
            <span className="font-telugu-display text-base sm:text-lg font-bold text-forest dark:text-ivory leading-tight tracking-tight">
              {BRAND.nameTelugu}
            </span>
            <span className="font-english-display text-[0.62rem] sm:text-[0.68rem] tracking-[0.18em] text-gold-dark dark:text-gold-light uppercase">
              {BRAND.nameEnglish} • ELURU
            </span>
          </div>
        </div>

        {/* Minimal Utilities: Theme Toggle + Language Mode */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center text-charcoal/70 dark:text-ivory/80 hover:text-forest dark:hover:text-gold hover:bg-forest/5 dark:hover:bg-gold/10 transition-colors cursor-pointer"
              title={theme === 'dark-forest' ? 'లైట్ థీమ్‌కు మారండి' : 'డార్క్ థీమ్‌కు మారండి'}
              aria-label="Toggle theme"
            >
              {theme === 'dark-forest' ? (
                <Sun className="w-4 h-4 text-gold-light" />
              ) : (
                <Moon className="w-4 h-4 text-forest" />
              )}
            </button>
          )}

          <div 
            className="flex items-center gap-1 sm:gap-1.5 p-1 bg-white/80 dark:bg-forest-dark/80 backdrop-blur-sm border border-gold/30 rounded-full shadow-xs text-xs"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={handleResumeAuto}
              className={`px-2.5 py-1 rounded-full font-telugu-body text-[0.68rem] sm:text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                isAuto
                  ? 'bg-forest/10 dark:bg-gold/20 text-forest dark:text-gold font-bold'
                  : 'text-charcoal/50 dark:text-ivory/40 hover:text-charcoal dark:hover:text-ivory'
              }`}
              title="ఆటో మోడ్"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isAuto ? 'bg-gold animate-pulse' : 'bg-charcoal/30 dark:bg-ivory/30'}`} />
              <span className="hidden sm:inline">ఆటో</span>
            </button>

            <span className="text-gold/30">|</span>

            <button
              onClick={() => handleSelectLanguage('te')}
              className={`px-2 sm:px-2.5 py-1 rounded-full font-telugu-body text-[0.68rem] sm:text-xs font-semibold transition-all duration-300 cursor-pointer ${
                targetLang === 'te'
                  ? 'bg-forest text-white dark:bg-gold dark:text-forest-deep shadow-xs'
                  : 'text-charcoal/60 dark:text-ivory/60 hover:text-forest dark:hover:text-gold'
              }`}
            >
              తెలుగు
            </button>

            <button
              onClick={() => handleSelectLanguage('en')}
              className={`px-2 sm:px-2.5 py-1 rounded-full font-english-display text-[0.68rem] sm:text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                targetLang === 'en'
                  ? 'bg-forest text-white dark:bg-gold dark:text-forest-deep shadow-xs'
                  : 'text-charcoal/60 dark:text-ivory/60 hover:text-forest dark:hover:text-gold'
              }`}
            >
              EN
            </button>
          </div>

        </div>

      </header>

      {/* Center Cinematic Typography Frame */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 max-w-6xl mx-auto w-full my-auto py-12">
        
        {/* Visual Center Frame */}
        <div className="relative w-full flex flex-col items-center justify-center select-none py-2 min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[270px]">
          
          {/* Line 1 Frame */}
          <div className="relative w-full flex items-center justify-center h-[65px] sm:h-[85px] md:h-[110px] lg:h-[125px]">
            
            {/* Telugu Line 1 */}
            <div 
              className="absolute inset-0 flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-5 md:gap-x-7 font-telugu-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-forest dark:text-ivory leading-none"
              aria-hidden={targetLang !== 'te'}
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

            {/* English Line 1 (Refined & Smaller for aesthetic harmony) */}
            <div 
              className="absolute inset-0 flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3.5 md:gap-x-5 font-english-display text-xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-semibold tracking-tight text-forest dark:text-ivory leading-none"
              aria-hidden={targetLang !== 'en'}
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
          <div className="relative w-full flex items-center justify-center h-[65px] sm:h-[85px] md:h-[110px] lg:h-[125px] mt-1 sm:mt-2">
            
            {/* Telugu Line 2 */}
            <div 
              className="absolute inset-0 flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-5 md:gap-x-7 font-telugu-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-forest dark:text-ivory leading-none"
              aria-hidden={targetLang !== 'te'}
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

            {/* English Line 2 (Refined & Smaller for aesthetic harmony) */}
            <div 
              className="absolute inset-0 flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3.5 md:gap-x-5 font-english-display text-xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-semibold tracking-tight text-forest dark:text-ivory leading-none"
              aria-hidden={targetLang !== 'en'}
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
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-14 w-full">
          
          <a
            href="#schemes"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-[2px] font-telugu-body font-bold text-sm sm:text-base shadow-xs hover:shadow-heritage-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>చిట్ పథకాలను చూడండి</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-7 py-4 bg-white/70 dark:bg-forest-dark/70 hover:bg-white dark:hover:bg-forest-dark text-forest dark:text-ivory rounded-[2px] border border-forest/20 dark:border-gold/40 shadow-xs transition-all duration-300 hover:-translate-y-0.5 font-telugu-body font-semibold text-sm sm:text-base cursor-pointer"
          >
            <span>మమ్మల్ని సంప్రదించండి</span>
          </button>

        </div>

      </main>

      {/* Bottom Subtext */}
      <footer className="relative z-10 pb-6 sm:pb-8 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full text-xs font-telugu-body text-charcoal/60 dark:text-ivory/60 border-t border-gold/15 pt-4">
        
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span>
            ఆంధ్రప్రదేశ్ ప్రభుత్వ గుర్తింపు పొందిన రిజిస్టర్డ్ చిట్ ఫండ్ సంస్థ • ఏలూరు
          </span>
        </div>

        <a 
          href="#brand-story" 
          className="flex items-center gap-1.5 text-charcoal/50 dark:text-ivory/50 hover:text-gold transition-colors select-none"
        >
          <span className="text-[0.7rem] tracking-wider uppercase font-english-display">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

      </footer>

    </section>
  );
}
