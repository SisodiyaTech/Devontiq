/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2F2F2F',
          black: '#121212',
          surface: '#1E1E1E',
          card: '#242424',
          border: '#383838',
          subtle: '#4A4A4A',
          muted: '#9E9E9E',
          light: '#F4F4F5',
          lime: '#C5FF00',
          'lime-hover': '#b0e600',
          'lime-dim': 'rgba(197, 255, 0, 0.12)',
          purple: '#3A00FF',
          'purple-light': '#5D2EFA',
          'purple-dim': 'rgba(58, 0, 255, 0.15)',
        }
      },
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"General Sans"', 'sans-serif'],
        sans: ['"General Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.12em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'lime-glow': '0 0 35px -5px rgba(197, 255, 0, 0.35)',
        'lime-sm': '0 0 15px -3px rgba(197, 255, 0, 0.4)',
        'purple-glow': '0 0 40px -5px rgba(58, 0, 255, 0.4)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
