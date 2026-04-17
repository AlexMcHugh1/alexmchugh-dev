import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0c0c10',
          elevated: '#14141c',
          card: '#13131b',
        },
        ink: {
          DEFAULT: '#d4d4d4',
          muted: '#8a8a92',
          faint: '#55555f',
        },
        accent: {
          DEFAULT: '#e5b567',
          dim: '#b38a4c',
        },
        line: '#22222a',
        prompt: '#7aa7d6',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'cursor-blink': 'blink 1.05s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
