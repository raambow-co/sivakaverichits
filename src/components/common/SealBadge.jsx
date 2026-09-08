import React from 'react';
import { BRAND } from '../../constants/tokens';

export function SealPill({ text = "రిజిస్టర్డ్ చిట్ ఫండ్ • పశ్చిమ గోదావరి", variant = "gold" }) {
  const styles = variant === "emerald"
    ? "bg-forest/10 border-forest/30 text-forest dark:bg-forest-light/20 dark:border-forest-light/40 dark:text-ivory"
    : "bg-gold/15 border-gold/40 text-gold-dark dark:text-gold-light dark:bg-gold/10";

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full font-telugu-body text-xs font-semibold tracking-wide backdrop-blur-sm ${styles}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_rgba(184,142,56,0.6)]" />
      <span>{text}</span>
    </div>
  );
}

export function CircularEmblem({
  year = "ESTD 1998",
  city = "ELURU"
}) {
  return (
    <div className="relative w-24 h-24 rounded-full border-2 border-gold/70 flex flex-col items-center justify-center text-center p-1.5 bg-gradient-to-b from-forest-surface to-white dark:from-forest-dark dark:to-forest text-forest dark:text-ivory shadow-card-light overflow-hidden">
      <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-14 h-14 object-contain" />
      <span className="font-english-display text-[0.55rem] tracking-widest text-gold-dark dark:text-gold font-bold">
        {year} • {city}
      </span>
    </div>
  );
}
