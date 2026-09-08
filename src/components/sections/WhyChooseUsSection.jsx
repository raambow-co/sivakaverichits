import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Scale, HeartHandshake, MapPin, Sparkles, Pause, Play, RotateCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 06 — WHY CHOOSE US (TWO-COLUMN EDITORIAL + RIGHT-ALIGNED ORBITAL SYSTEM)
 * Features:
 * - Left Column: Prestigious Editorial Statement, Interactive Pillar Highlights, Controls & CTA
 * - Right Column: Exactly centered rotating orbital system with the 4 pillars revolving around the central emblem
 * - 60FPS continuous smooth elliptical orbit
 * - Interactive synchronization between left pillar list and right revolving cards
 * - Hover-to-pause & click-to-spotlight
 */

const PILLARS = [
  {
    id: 'trust',
    number: '01',
    tag: 'ESTD 1998',
    titleEnglish: 'Over 25+ Years of Trust',
    titleTelugu: '25+ ఏళ్ల తిరుగులేని విశ్వసనీయత',
    descEnglish: 'Serving families, traders, and entrepreneurs across Eluru and West Godavari since 1998 with zero defaults and 100% prompt payout reliability.',
    icon: ShieldCheck,
  },
  {
    id: 'transparency',
    number: '02',
    tag: 'AP GOVT REGD',
    titleEnglish: '100% Regulated & Compliant',
    titleTelugu: 'ప్రభుత్వ గుర్తింపు & పూర్తి భద్రత',
    descEnglish: 'Strictly registered under the Chit Funds Act, 1982 with 100% bank-guaranteed statutory security deposits for every active group.',
    icon: Scale,
  },
  {
    id: 'care',
    number: '03',
    tag: 'DIRECT CARE',
    titleEnglish: 'Dedicated Personal Support',
    titleTelugu: 'వ్యక్తిగత సభ్యుల సేవ & శ్రద్ధ',
    descEnglish: 'Doorstep collection convenience, instant transparent ledger passbooks, timely auction reminders, and personalized guidance.',
    icon: HeartHandshake,
  },
  {
    id: 'local',
    number: '04',
    tag: 'ELURU REGIONAL HQ',
    titleEnglish: 'Direct Local Accountability',
    titleTelugu: 'ఏలూరులో ప్రత్యక్ష ప్రధాన కార్యాలయం',
    descEnglish: 'Physical registered office in Eluru with direct face-to-face management accessibility and three decades of community roots.',
    icon: MapPin,
  },
];

// Orbital Ellipse Radii (Optimized for the Right Side Column)
const RADIUS_X = 240; // Horizontal orbit radius
const RADIUS_Y = 190; // Vertical orbit radius

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [angle, setAngle] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activePillarIndex, setActivePillarIndex] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  // Intersection Observer for scroll reveal
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

  // 60FPS Continuous Orbital Revolution Loop
  useEffect(() => {
    const animateOrbit = (time) => {
      if (lastTimeRef.current != null) {
        const delta = time - lastTimeRef.current;
        // Orbit speed: 1 full rotation every ~26 seconds
        if (isAutoPlay && !isHovered) {
          setAngle((prev) => (prev + (delta * 0.0135)) % 360);
        }
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(animateOrbit);
    };

    animFrameRef.current = requestAnimationFrame(animateOrbit);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isAutoPlay, isHovered]);

  // Mobile Auto-Cycle Timer
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const interval = setInterval(() => {
      setMobileActiveIndex((prev) => (prev + 1) % PILLARS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered]);

  // Coordinates along the right-side elliptical orbit
  const pillarCoordinates = PILLARS.map((_, index) => {
    const pillarAngleDeg = (angle + index * 90) % 360;
    const rad = (pillarAngleDeg * Math.PI) / 180;
    const x = RADIUS_X * Math.cos(rad);
    const y = RADIUS_Y * Math.sin(rad);
    
    // Depth scaling: cards in front (y > 0) are slightly larger
    const depthFactor = (y + RADIUS_Y) / (2 * RADIUS_Y); // 0 to 1
    const scale = 0.92 + depthFactor * 0.14; // 0.92 to 1.06
    const zIndex = Math.round(10 + depthFactor * 30); // 10 to 40
    const opacity = 0.88 + depthFactor * 0.12;

    return { x, y, scale, zIndex, opacity, angleDeg: pillarAngleDeg };
  });

  const scrollToSchemes = () => {
    const schemesElem = document.getElementById('schemes');
    if (schemesElem) {
      schemesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActivePillarIndex(null);
      }}
    >
      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      {/* Ambient Soft Gold/Emerald Radial Halos */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 75% 50%, rgba(184, 142, 56, 0.12), transparent 60%),
            radial-gradient(circle at 15% 30%, rgba(15, 56, 44, 0.06), transparent 50%),
            radial-gradient(circle at 85% 85%, rgba(184, 142, 56, 0.08), transparent 50%)
          `,
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 75% 50%, rgba(27, 83, 66, 0.45), transparent 65%),
            radial-gradient(circle at 85% 80%, rgba(184, 142, 56, 0.12), transparent 55%),
            radial-gradient(circle at 15% 20%, rgba(27, 83, 66, 0.35), transparent 55%)
          `,
        }}
      />

      {/* Subtle Background Typography Watermark */}
      <div className="absolute top-[12%] right-[5%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.03] font-black text-[clamp(4rem,14vw,16rem)] leading-none text-forest dark:text-gold uppercase tracking-tight">
        TRUST
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto">
        
        {/* TWO-COLUMN EDITORIAL GRID (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: EDITORIAL STATEMENT, INTERACTIVE PILLAR LIST & CONTROLS
              ========================================================================= */}
          <div
            className={`lg:col-span-5 space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Header Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/50 bg-white/80 dark:bg-forest-dark/90 backdrop-blur-md shadow-xs animate-float-gentle">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-terracotta dark:text-gold-light font-telugu-body">
                  ఎందుకు శివ కావేరి చిట్స్? • WHY SIVA KAVERI CHITS
                </span>
                <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-forest dark:text-ivory tracking-tight leading-[1.18]">
                Four Pillars of <br />
                <span className="text-gradient-gold">Unwavering Trust</span>
              </h2>
            </div>

            {/* Interactive Pillar Highlights List (Syncs with the rotating orbit) */}
            <div className="space-y-3 pt-2">
              {PILLARS.map((pillar, idx) => {
                const IconComp = pillar.icon;
                const isSelected = activePillarIndex === idx;

                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => {
                      setActivePillarIndex(idx);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setActivePillarIndex(null);
                      setIsHovered(false);
                    }}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`group p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                      isSelected
                        ? 'bg-white dark:bg-[#071D16] border-2 border-gold shadow-md scale-[1.02] -translate-x-1'
                        : 'bg-white/60 dark:bg-forest-dark/50 border-gold/25 hover:border-gold/60 hover:bg-white dark:hover:bg-forest-dark'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-gold text-[#08221A]' : 'bg-gold/15 text-gold group-hover:bg-gold/25'
                        }`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-forest dark:text-ivory group-hover:text-gold transition-colors">
                            {pillar.titleEnglish}
                          </div>
                          <div className="text-[0.68rem] font-semibold text-terracotta dark:text-gold-light/90 font-telugu-body">
                            {pillar.titleTelugu}
                          </div>
                        </div>
                      </div>

                      <span className="text-[0.65rem] px-2 py-0.5 rounded-md bg-forest/10 dark:bg-gold/15 text-forest dark:text-gold-light border border-gold/25 font-bold uppercase font-english-display">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Controls Strip & CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="px-4 py-2 rounded-full border border-gold/50 bg-white/90 dark:bg-forest-dark/90 hover:border-gold text-xs font-bold flex items-center gap-2 text-forest dark:text-gold shadow-sm hover:scale-105 transition-all cursor-pointer select-none"
                title={isAutoPlay ? "Pause Orbit" : "Resume Orbit"}
              >
                {isAutoPlay ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-gold" />
                    <span>Pause Orbit</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-gold" />
                    <span>Resume Orbit</span>
                  </>
                )}
              </button>

              <button
                onClick={scrollToSchemes}
                className="inline-flex items-center gap-2 text-xs font-bold text-terracotta dark:text-gold hover:underline cursor-pointer transition-all"
              >
                <span>Explore Registered Schemes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: EXACTLY CENTERED REVOLVING ORBITAL SYSTEM (Desktop lg+)
              ========================================================================= */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <div
              className={`relative w-full max-w-[700px] h-[600px] xl:h-[620px] mx-auto flex items-center justify-center transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* SVG Celestial Orbit Canvas */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]">
                <svg
                  className="w-full h-full"
                  viewBox="-350 -300 700 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="orbitRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF57" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#B88E38" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8C671C" stopOpacity="0.7" />
                    </linearGradient>

                    <radialGradient id="centerLogoGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#B88E38" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="#0F382C" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Central Ambient Glow Disk */}
                  <circle cx="0" cy="0" r="120" fill="url(#centerLogoGlow)" />

                  {/* Main Dashed Orbit Ellipse Path */}
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={RADIUS_X}
                    ry={RADIUS_Y}
                    stroke="url(#orbitRightGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                    className="opacity-75"
                  />

                  {/* Concentric Inner Dashed Orbit */}
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={RADIUS_X * 0.7}
                    ry={RADIUS_Y * 0.7}
                    stroke="#B88E38"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    className="opacity-35"
                  />

                  {/* Dynamic Connector Beams from Center to Moving Pillar Nodes */}
                  {pillarCoordinates.map((coord, idx) => {
                    const isPillarHovered = activePillarIndex === idx;
                    return (
                      <g key={idx}>
                        <line
                          x1="0"
                          y1="0"
                          x2={coord.x}
                          y2={coord.y}
                          stroke="#B88E38"
                          strokeWidth={isPillarHovered ? '2' : '1'}
                          strokeDasharray={isPillarHovered ? 'none' : '4 4'}
                          className={`transition-all duration-300 ${
                            isPillarHovered ? 'opacity-90' : 'opacity-30'
                          }`}
                        />

                        {/* Node Beacon on Orbit Track */}
                        <circle
                          cx={coord.x}
                          cy={coord.y}
                          r={isPillarHovered ? '8' : '5'}
                          fill="#B88E38"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <circle
                          cx={coord.x}
                          cy={coord.y}
                          r={isPillarHovered ? '14' : '10'}
                          fill="none"
                          stroke="#B88E38"
                          strokeWidth="1"
                          className="opacity-50 animate-pulse"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* CENTRAL ILLUMINATED LOGO EMBLEM (Anchored at Dead Center of Orbit) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none z-20 pointer-events-auto">
                {/* Breathing Gold Halo */}
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-gold/35 via-gold/15 to-transparent filter blur-xl animate-glow-pulse pointer-events-none" />
                
                {/* Rotating Dashed Border Ring */}
                <div className="absolute w-36 h-36 rounded-full border-2 border-dashed border-gold/40 animate-spin-slow pointer-events-none" />
                
                {/* Medallion Base with Logo */}
                <div 
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-gold bg-white p-2.5 shadow-[0_0_40px_rgba(184,142,56,0.45)] flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer"
                  title="Siva Kaveri Chits — Center of Trust"
                >
                  <img 
                    src={BRAND.logo} 
                    alt="Siva Kaveri Chits Logo" 
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* 4 REVOLVING PILLAR CARDS (Moving continuously around the central logo) */}
              {PILLARS.map((pillar, idx) => {
                const coord = pillarCoordinates[idx];
                const IconComp = pillar.icon;
                const isHoveredCard = activePillarIndex === idx;

                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => {
                      setActivePillarIndex(idx);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setActivePillarIndex(null);
                      setIsHovered(false);
                    }}
                    onClick={() => setActivePillarIndex(idx)}
                    style={{
                      transform: `translate3d(calc(-50% + ${coord.x}px), calc(-50% + ${coord.y}px), 0) scale(${
                        isHoveredCard ? coord.scale * 1.05 : coord.scale
                      })`,
                      zIndex: isHoveredCard ? 50 : coord.zIndex,
                      opacity: coord.opacity,
                      transition: isHovered ? 'transform 0.25s ease-out, box-shadow 0.25s ease-out' : 'opacity 0.2s linear',
                    }}
                    className={`absolute top-1/2 left-1/2 w-[240px] xl:w-[255px] p-3.5 rounded-2xl bg-white/95 dark:bg-[#071D16]/95 backdrop-blur-md border cursor-pointer select-none transition-all duration-300 ${
                      isHoveredCard
                        ? 'border-2 border-gold shadow-2xl shadow-gold/30 ring-2 ring-gold/20'
                        : 'border-gold/35 shadow-heritage-md dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:border-gold/70'
                    }`}
                  >
                    {/* Header: Tag & Number */}
                    <div className="flex items-center justify-between gap-1.5 mb-1.5 pb-1 border-b border-gold/20">
                      <span className="px-2 py-0.5 rounded-md bg-forest text-white dark:bg-gold dark:text-[#08221A] text-[0.6rem] font-bold uppercase tracking-wider font-english-display">
                        {pillar.tag}
                      </span>
                      
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        <span className="text-[0.7rem] font-black text-gold uppercase tracking-wider">
                          {pillar.number}
                        </span>
                      </div>
                    </div>

                    {/* Title with Icon */}
                    <div className="flex items-start gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-gold/15 dark:bg-gold/20 flex items-center justify-center text-gold border border-gold/35 flex-shrink-0 mt-0.5">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-forest dark:text-ivory leading-tight">
                          {pillar.titleEnglish}
                        </h3>
                        <div className="text-[0.62rem] font-semibold text-terracotta dark:text-gold-light/90 font-telugu-body">
                          {pillar.titleTelugu}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[0.7rem] text-charcoal/80 dark:text-ivory/80 leading-snug font-normal line-clamp-3 pt-0.5">
                      {pillar.descEnglish}
                    </p>

                    {/* Subtle Corner Gold Accents */}
                    <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-gold/40 rounded-tl-sm" />
                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-gold/40 rounded-tr-sm" />
                    <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-gold/40 rounded-bl-sm" />
                    <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-gold/40 rounded-br-sm" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* =========================================================================
            MOBILE & TABLET: LUXURY ORBITAL CAROUSEL WITH CENTRAL EMBLEM (below lg)
            ========================================================================= */}
        <div className="lg:hidden space-y-6 pt-6">
          
          {/* Mobile Center Floating Emblem */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-4 border-gold shadow-[0_0_35px_rgba(184,142,56,0.45)] p-2.5 flex items-center justify-center animate-float-gentle overflow-hidden">
              <img 
                src={BRAND.logo} 
                alt="Siva Kaveri Chits Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            {/* Step Dots Indicator */}
            <div className="flex items-center gap-2 mt-4">
              {PILLARS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === mobileActiveIndex ? 'w-8 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold/60'
                  }`}
                  aria-label={`View Pillar ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Active Mobile Pillar Card Spotlight */}
          <div className="relative">
            {PILLARS.map((pillar, idx) => {
              if (idx !== mobileActiveIndex) return null;
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="p-5 sm:p-6 rounded-2xl border-2 border-gold bg-white dark:bg-forest-dark backdrop-blur-sm shadow-heritage-md space-y-2.5 animate-flip-in"
                >
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-gold/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gold/15 dark:bg-gold/20 flex items-center justify-center text-gold border border-gold/30">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-forest text-white dark:bg-gold dark:text-[#08221A] text-[0.65rem] font-bold uppercase tracking-wider font-english-display">
                        {pillar.tag}
                      </span>
                    </div>

                    <span className="text-xs font-black text-gold uppercase tracking-wider">
                      PILLAR 0{idx + 1} / 04
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-forest dark:text-ivory pt-1">
                    {pillar.titleEnglish}
                  </h3>
                  
                  <div className="text-xs font-bold text-terracotta dark:text-gold-light font-telugu-body">
                    {pillar.titleTelugu}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed font-normal pt-1">
                    {pillar.descEnglish}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel Navigation Arrows */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => setMobileActiveIndex((prev) => (prev === 0 ? PILLARS.length - 1 : prev - 1))}
              className="px-4 py-1.5 rounded-full border border-gold/40 bg-white/80 dark:bg-forest-dark/80 text-xs font-bold text-forest dark:text-gold hover:border-gold transition-all"
            >
              ← Previous
            </button>
            <span className="text-xs text-charcoal/60 dark:text-ivory/60 font-semibold">
              0{mobileActiveIndex + 1} of 04
            </span>
            <button
              onClick={() => setMobileActiveIndex((prev) => (prev + 1) % PILLARS.length)}
              className="px-4 py-1.5 rounded-full border border-gold/40 bg-white/80 dark:bg-forest-dark/80 text-xs font-bold text-forest dark:text-gold hover:border-gold transition-all"
            >
              Next →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
