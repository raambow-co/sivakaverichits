import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { BrandStory } from './components/sections/BrandStory';
import { ChitPlansSection } from './components/sections/ChitPlansSection';
import { HowChitsWorkSection } from './components/sections/HowChitsWorkSection';
import { TrustTransparencySection } from './components/sections/TrustTransparencySection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { PeopleLocalPresenceSection } from './components/sections/PeopleLocalPresenceSection';
import { StartJourneySection } from './components/sections/StartJourneySection';
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/common/Footer';

export default function App() {
  // Default to clean, radiant 'warm-ivory' Light Theme
  const [theme, setTheme] = useState('warm-ivory');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'warm-ivory' ? 'dark-forest' : 'warm-ivory';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleOpenInquiry = () => {
    const targetElem = document.getElementById('start-journey') || document.getElementById('faq');
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSchemeForInquiry = (scheme) => {
    const targetElem = document.getElementById('start-journey') || document.getElementById('faq');
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory selection:bg-gold selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* 
        SECTION 01: HERO SECTION
        100vh opening visual scene with Telugu ↔ English metamorphosis
      */}
      <HeroSection 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* 
        SECTION 02: BRAND STORY
        Cinematic narrative continuation ("ఒక చిన్న అడుగు… ఒక పెద్ద ప్రయాణం.")
      */}
      <BrandStory onOpenInquiry={handleOpenInquiry} />

      {/* 
        SECTION 03: CHIT PLANS
        Spacious editorial financial schemes ("మీకు సరిపోయే చిట్ ఏది?")
      */}
      <ChitPlansSection onSelectSchemeForInquiry={handleSelectSchemeForInquiry} />

      {/* 
        SECTION 04: HOW THE CHIT WORKS
        Continuous visual journey ("చిట్ ఎలా పనిచేస్తుంది?")
      */}
      <HowChitsWorkSection />

      {/* 
        SECTION 05: TRUST & TRANSPARENCY
        Quiet editorial financial document composition ("నమ్మకం మాటల్లో కాదు… పారదర్శకతలో కనిపిస్తుంది.")
      */}
      <TrustTransparencySection />

      {/* 
        SECTION 06: WHY CHOOSE US
        Asymmetric editorial orbital composition ("ఎందుకు మమ్మల్ని ఎంచుకోవాలి?")
      */}
      <WhyChooseUsSection />

      {/* 
        SECTION 07: OUR PEOPLE & LOCAL PRESENCE
        Asymmetric editorial photography & regional presence ("మీకు చేరువగా… మీతో పాటు.")
      */}
      <PeopleLocalPresenceSection />

      {/* 
        SECTION 08: START YOUR CHIT JOURNEY
        Emotional closing composition & hero callback ("మీ కలలకు… మీ పొదుపుతో తొలి అడుగు.")
      */}
      <StartJourneySection />

      {/* 
        SECTION 09: FAQ
        Calm conversational accordion & essential clarity ("మీకు ఉన్న ప్రశ్నలకు… మా సమాధానాలు.")
      */}
      <FAQSection />

      {/* 
        SECTION 10: FINAL FOOTER
        Final closing thought, Telugu navigation, placeholders, and signature gold coin callback
      */}
      <Footer />
    </div>
  );
}








