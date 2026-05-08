import type { Config } from 'tailwindcss';

const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: c('bg'),
          elevated: c('bg-elevated'),
          card: c('bg-card'),
        },
        ink: {
          DEFAULT: c('ink'),
          muted: c('ink-muted'),
          faint: c('ink-faint'),
        },
        accent: {
          DEFAULT: c('accent'),
          dim: c('accent-dim'),
        },
        line: c('line'),
        prompt: c('prompt'),
        path: c('path'),
        pink: c('pink'),
        peach: c('peach'),
        mauve: c('mauve'),
        green: c('green'),
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
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
