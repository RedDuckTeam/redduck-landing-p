import type { Config } from 'tailwindcss';
import tailwindCssAnimate from 'tailwindcss-animate';

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      colors: {
        border: 'var(--concrete)',
        input: 'var(--gray)',
        ring: 'var(--red)',
        red: 'var(--red)',
        green: 'var(--green)',
        gray: 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        'dark-gray': 'var(--dark-gray)',
        pink: 'var(--pink)',
        concrete: 'var(--concrete)',
        text: 'var(--text)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      screens: {
        xs: '375px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1436px',
        '3xl': '1636px',
        '4xl': '1786px',
        '5xl': '1925px',
      },
      animation: {
        duckFadeIn: 'duckFadeIn 0.5s ease-in-out',
        caseSlideNext: 'caseSlideNext 0.35s ease-out',
        caseSlidePrev: 'caseSlidePrev 0.35s ease-out',
        succeedFill: 'succeedFill 5000ms linear forwards',
      },
      keyframes: {
        succeedFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        duckFadeIn: {
          '0%': { opacity: '0%' },
          '75%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        caseSlideNext: {
          '0%': { opacity: '0%', transform: 'translateX(24px)' },
          '100%': { opacity: '100%', transform: 'translateX(0)' },
        },
        caseSlidePrev: {
          '0%': { opacity: '0%', transform: 'translateX(-24px)' },
          '100%': { opacity: '100%', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;

export default config;
