import React from 'react';

export function OrnamentDivider({ variant = "gold", className = "" }) {
  const isTerracotta = variant === "terracotta";
  const lineColor = isTerracotta
    ? "from-transparent via-terracotta/60 to-transparent"
    : "from-transparent via-gold/60 to-transparent";
  const glyphColor = isTerracotta ? "bg-terracotta" : "bg-gold";

  return (
    <div className={`flex items-center justify-center gap-4 w-full my-6 opacity-85 ${className}`}>
      <div className={`flex-1 h-[1px] bg-gradient-to-r ${lineColor}`} />
      <div className={`w-2.5 h-2.5 ${glyphColor} rotate-45 relative flex-shrink-0`}>
        <div className="absolute inset-[1.5px] bg-white dark:bg-forest-deep" />
      </div>
      <div className={`flex-1 h-[1px] bg-gradient-to-r ${lineColor}`} />
    </div>
  );
}
