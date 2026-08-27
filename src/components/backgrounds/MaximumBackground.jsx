import React from 'react';

export function MaximumBackground({ children, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden bg-ivory dark:bg-[#04130E] transition-colors duration-300 ${className}`}>
      
      {/* Layer 1: Ambient Warm Radial Glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(184,142,56,0.08),transparent_70%),radial-gradient(circle_at_10%_30%,rgba(15,56,44,0.03),transparent_40%),radial-gradient(circle_at_90%_60%,rgba(192,86,33,0.03),transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(27,83,66,0.35),transparent_70%),radial-gradient(circle_at_10%_40%,rgba(192,86,33,0.08),transparent_45%),radial-gradient(circle_at_90%_70%,rgba(184,142,56,0.08),transparent_50%)]" />

      {/* Layer 2: Tactile Subtle Paper Noise Texture */}
      <div className="texture-paper-grain absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.045] z-[1]" />

      {/* Layer 3: Giant Abstract Telugu Typography Watermarks */}
      <div className="absolute top-[4%] -right-[3%] font-telugu-display font-black text-gold/15 dark:text-gold/5 select-none pointer-events-none text-[clamp(6rem,14vw,18rem)] leading-none z-[1]">
        విశ్వాసం
      </div>
      <div className="absolute top-[45%] -left-[4%] font-telugu-display font-black text-forest/10 dark:text-terracotta/5 select-none pointer-events-none text-[clamp(5rem,12vw,15rem)] leading-none z-[1]">
        సమృద్ధి
      </div>

      {/* Layer 4: Regional Kalamkari Lattice Grid */}
      <div className="pattern-kalamkari-lattice absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-[2]" />

      {/* Layer 5: Andhra Architectural Geometric Frieze Line */}
      <div className="pattern-andhra-frieze absolute top-0 left-0 w-full h-5 pointer-events-none opacity-20 border-b border-gold/20 z-[2]" />

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>

    </div>
  );
}
