'use client';

import { useEffect, useState } from 'react';

const ART = `
  ┌─────────────────┐
  │   alex@mchugh   │
  └────────┬────────┘
           │
           ▼
  ╔═════════════════╗
  ║   ./about       ║━━━━━━━━━━┓
  ╚════════┳════════╝          ┃
           ┃                   ┃
           ▼                   ▼
  ┌─────────────────┐  ┌─────────────────┐
  │  ./experience   │  │  ./education    │
  └────────┬────────┘  └────────┬────────┘
           │                    │
           └────────┬───────────┘
                    │
                    ▼
           ┌─────────────────┐
           │     ./certs     │
           └────────┬────────┘
                    │
        ┌───────────┼────────────┐
        │           │            │
        ▼           ▼            ▼
  ┌──────────┐ ┌──────────┐ ┌────────────────┐
  │ ./github │ │./contribs│ │  ./articles    │
  └────┬─────┘ └────┬─────┘ └────────┬───────┘
       │            │                │
       └────────────┼────────────────┘
                    │
                    ▼
           ┌─────────────────┐
           │   $ end-of-line │
           └─────────────────┘
`;

const LINES = ART.split('\n');

export default function AsciiPipeline() {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let started = false;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (!started) {
        if (y <= 0) return;
        started = true;
      }
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.max(0, Math.min(1, y / max));
      const eased = reduce ? progress : progress * progress * (3 - 2 * progress);
      setReveal(Math.ceil(eased * LINES.length));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (reveal === 0) return null;

  const visible = LINES.slice(0, reveal).join('\n');

  return (
    <pre
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden select-none overflow-hidden font-mono text-[12px] leading-[1.35] text-accent/[0.18] md:block"
      style={{
        paddingTop: 'max(6vh, 48px)',
        paddingLeft: 'max(8vw, 32px)',
        whiteSpace: 'pre',
      }}
    >
      {visible}
    </pre>
  );
}
