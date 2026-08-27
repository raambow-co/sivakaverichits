import React, { useState } from 'react';
import { BRAND } from '../../constants/tokens';
import { SealPill } from './SealBadge';
import { Phone, Menu, X, Sun, Moon, ShieldCheck, ArrowRight } from 'lucide-react';

export function Header({ theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { labelTelugu: "చిట్ పథకాలు", href: "#schemes" },
    { labelTelugu: "క్యాలిక్యులేటర్", href: "#calculator" },
    { labelTelugu: "ఎలా పనిచేస్తుంది?", href: "#how-it-works" },
    { labelTelugu: "ప్రభుత్వ భద్రత", href: "#security" },
    { labelTelugu: "లైవ్ వేలం", href: "#auctions" },
    { labelTelugu: "సంప్రదించండి", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/95 dark:bg-forest-dark/95 backdrop-blur-md border-b border-gold/30 shadow-card-light transition-colors duration-300">
      
      {/* Top Heritage Micro Bar */}
      <div className="bg-forest dark:bg-forest-deep text-ivory text-[0.75rem] py-1.5 px-4 sm:px-8 border-b border-gold/20">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-telugu-body text-gold-light">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              ఆంధ్రప్రదేశ్ ప్రభుత్వ గుర్తింపు సంఖ్య: <strong>{BRAND.registrationNumber}</strong>
            </span>
            <span className="hidden md:inline text-ivory/40">•</span>
            <span className="hidden md:inline font-english-display text-[0.68rem] tracking-wider text-ivory/80 uppercase">
              ESTABLISHED 1998 • ELURU, WEST GODAVARI
            </span>
          </div>

          <div className="flex items-center gap-4 text-ivory/90 font-telugu-body">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors font-medium">
              <Phone className="w-3 h-3 text-gold" />
              <span>{BRAND.phone}</span>
            </a>
            <span className="text-ivory/30">|</span>
            <span className="text-gold-light font-medium hidden sm:inline">
              సమయం: ఉదయం 9:30 - రాత్రి 7:00
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-[3px] border-2 border-gold bg-gradient-to-br from-forest to-forest-dark text-gold font-telugu-display text-2xl font-bold flex items-center justify-center shadow-card-light group-hover:scale-105 transition-transform">
            శ్రీ
          </div>
          <div className="flex flex-col">
            <span className="font-telugu-display text-xl sm:text-2xl font-extrabold text-forest dark:text-ivory leading-tight tracking-tight">
              {BRAND.nameTelugu}
            </span>
            <span className="font-english-display text-[0.68rem] font-bold tracking-[0.18em] text-gold-dark dark:text-gold-light uppercase">
              {BRAND.nameEnglish} • ELURU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-telugu-body font-semibold text-sm text-charcoal dark:text-ivory/90">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-forest dark:hover:text-gold hover:underline decoration-gold underline-offset-8 transition-colors duration-200"
            >
              {link.labelTelugu}
            </a>
          ))}
        </nav>

        {/* Action Controls (Theme Toggle & CTA) */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 bg-forest/5 dark:bg-gold/10 hover:bg-forest/10 dark:hover:bg-gold/20 border border-forest/20 dark:border-gold/30 rounded-full font-telugu-body text-xs font-semibold text-forest dark:text-ivory transition-all shadow-sm"
            title={theme === 'dark-forest' ? 'లైట్ థీమ్‌కు మారండి' : 'డార్క్ థీమ్‌కు మారండి'}
          >
            {theme === 'dark-forest' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-gold-light" />
                <span className="hidden sm:inline">లైట్ థీమ్</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-forest" />
                <span className="hidden sm:inline">డార్క్ థీమ్</span>
              </>
            )}
          </button>

          {/* Quick WhatsApp / Join CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-forest hover:bg-forest-light text-white dark:bg-gold dark:hover:bg-gold-light dark:text-forest-deep font-telugu-body font-bold text-xs rounded-[3px] shadow-sm transition-all hover:shadow-card-light"
          >
            <span>చిట్‌లో చేరండి</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-charcoal dark:text-ivory hover:bg-forest/5 dark:hover:bg-gold/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-forest-dark border-b border-gold/30 px-6 py-5 space-y-4 font-telugu-body">
          <div className="space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-charcoal dark:text-ivory hover:text-gold border-b border-gray-100 dark:border-forest"
              >
                {link.labelTelugu}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.mobile}`}
              className="flex items-center justify-center gap-2 py-2.5 bg-forest text-white rounded font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>కాల్ చేయండి: {BRAND.mobile}</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
