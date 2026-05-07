import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a10',
          elevated: '#13131a',
          card: '#13131a',
        },
        ink: {
          DEFAULT: '#e4e4ea',
          muted: '#9b9bab',
          faint: '#5a5a68',
        },
        accent: {
          DEFAULT: '#89b4fa',
          dim: '#74c7ec',
        },
        line: '#22222d',
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
