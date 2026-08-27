/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark-forest"]'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0F382C', // Authoritative Emerald Forest
          dark: '#08221A',
          deep: '#04130E',
          light: '#1B5342',
          surface: '#EBF3F0',
          subtle: 'rgba(15, 56, 44, 0.07)',
          glass: 'rgba(15, 56, 44, 0.88)',
        },
        ivory: {
          DEFAULT: '#FCFAF6', // Clean warm canvas
          light: '#FFFFFF',
          dark: '#F3EEDB',
          surface: '#F9F5EC',
          border: '#E8DEC8',
          muted: 'rgba(252, 250, 246, 0.85)',
          glass: 'rgba(252, 250, 246, 0.92)',
        },
        terracotta: {
          DEFAULT: '#C05621', // Warm Godavari Terracotta
          light: '#DD6B20',
          dark: '#9C4221',
          subtle: 'rgba(192, 86, 33, 0.1)',
          glass: 'rgba(192, 86, 33, 0.88)',
        },
        gold: {
          DEFAULT: '#B88E38', // Temple Antique Gold
          light: '#D4AF57',
          dark: '#8C671C',
          subtle: 'rgba(184, 142, 56, 0.12)',
          border: 'rgba(184, 142, 56, 0.35)',
        },
        charcoal: {
          DEFAULT: '#1E2623', // Deep readable slate charcoal
          light: '#3C4944',
          muted: '#60706A',
        },
        sand: '#EFE7D5',
      },
      fontFamily: {
        'telugu-display': ['"Noto Serif Telugu"', 'Suranna', 'Georgia', 'serif'],
        'telugu-body': ['"Noto Sans Telugu"', 'sans-serif'],
        'english-display': ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        'english-body': ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card-light': '0 4px 20px -2px rgba(15, 56, 44, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 14px 35px -4px rgba(15, 56, 44, 0.12), 0 4px 12px -2px rgba(184, 142, 56, 0.18)',
        'gold-soft': '0 0 25px rgba(184, 142, 56, 0.22)',
        'heritage-md': '0 8px 24px rgba(15, 56, 44, 0.12)',
        'heritage-lg': '0 16px 48px rgba(15, 56, 44, 0.18)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer-gold': 'shimmerGold 2.5s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite alternate',
        'flip-in': 'flipIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.015)' },
        },
        shimmerGold: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        floatSlow: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-6px)' },
        },
        flipIn: {
          '0%': { opacity: '0', transform: 'translateY(12px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
