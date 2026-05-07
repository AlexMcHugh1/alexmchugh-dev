import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0b0b12',
          elevated: '#11111b',
          card: '#161624',
        },
        ink: {
          DEFAULT: '#cdd6f4',
          muted: '#a6adc8',
          faint: '#6c7086',
        },
        accent: {
          DEFAULT: '#89b4fa',
          dim: '#74c7ec',
        },
        line: '#2a2a3e',
        prompt: '#cba6f7',
        path: '#89b4fa',
        pink: '#f5c2e7',
        peach: '#fab387',
        mauve: '#cba6f7',
        green: '#a6e3a1',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      animation: {
        'cursor-blink': 'blink 1.05s step-end infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
