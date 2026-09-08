import React from 'react';

export function HeritageFrame({
  children,
  className = "",
  hasCorners = true,
  variant = "surface"
}) {
  const baseBg = variant === "parchment"
    ? "bg-[#FAF6EC] text-charcoal border-gold/40 shadow-card-light"
    : variant === "terracotta"
    ? "bg-gradient-to-br from-terracotta to-terracotta-dark text-white border-gold/40 shadow-heritage-md"
    : variant === "emerald"
    ? "bg-forest text-ivory border-gold/50 shadow-heritage-md"
    : "bg-white dark:bg-forest/90 text-charcoal dark:text-ivory border-gold/30 shadow-card-light";

  return (
    <div className={`relative p-6 sm:p-8 border rounded-2xl transition-all duration-300 ${baseBg} ${className}`}>
      {hasCorners && (
        <>
          {/* Top Left */}
          <div className="absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-gold pointer-events-none rounded-tl-sm" />
          {/* Top Right */}
          <div className="absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-gold pointer-events-none rounded-tr-sm" />
          {/* Bottom Left */}
          <div className="absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-gold pointer-events-none rounded-bl-sm" />
          {/* Bottom Right */}
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-gold pointer-events-none rounded-br-sm" />
        </>
      )}
      {children}
    </div>
  );
}
