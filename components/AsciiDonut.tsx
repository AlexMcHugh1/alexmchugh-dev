'use client';

import { useEffect, useRef } from 'react';

const CHARS = '.,-~:;=!*#$@';
const W = 28;
const H = 14;
const R1 = 1;
const R2 = 2;
const K2 = 5;
const K1 = (W * K2 * 3) / (8 * (R1 + R2));

const STOPS = ['#89b4fa', '#cba6f7', '#f5c2e7', '#fab387', '#a6e3a1'];

const hex = (h: string) => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
};
const STOPS_RGB = STOPS.map(hex);

function gradientAt(t: number): string {
  const n = STOPS_RGB.length - 1;
  const x = Math.max(0, Math.min(1, t)) * n;
  const i = Math.floor(x);
  const f = x - i;
  if (i >= n) {
    const [r, g, b] = STOPS_RGB[n];
    return `rgb(${r},${g},${b})`;
  }
  const a = STOPS_RGB[i];
  const b = STOPS_RGB[i + 1];
  const r = Math.round(a[0] + (b[0] - a[0]) * f);
  const g = Math.round(a[1] + (b[1] - a[1]) * f);
  const bl = Math.round(a[2] + (b[2] - a[2]) * f);
  return `rgb(${r},${g},${bl})`;
}

export default function AsciiDonut() {
  const preRef = useRef<HTMLPreElement>(null);
  const stateRef = useRef({
    A: 0,
    B: 0,
    scroll: 0,
    vel: 0,
    lastY: 0,
  });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      stateRef.current.scroll = max > 0 ? y / max : 0;
      stateRef.current.vel = Math.abs(y - stateRef.current.lastY);
      stateRef.current.lastY = y;
    };

    const render = () => {
      const s = stateRef.current;
      const boost = Math.min(s.vel / 30, 2);
      s.A += 0.024 + boost * 0.006;
      s.B += 0.012 + boost * 0.003;
      s.vel *= 0.9;

      const cosA = Math.cos(s.A);
      const sinA = Math.sin(s.A);
      const cosB = Math.cos(s.B);
      const sinB = Math.sin(s.B);

      const out: string[] = new Array(W * H).fill(' ');
      const zbuf: number[] = new Array(W * H).fill(0);

      for (let theta = 0; theta < 6.28; theta += 0.07) {
        const ct = Math.cos(theta);
        const st = Math.sin(theta);
        for (let phi = 0; phi < 6.28; phi += 0.02) {
          const cp = Math.cos(phi);
          const sp = Math.sin(phi);
          const cx = R2 + R1 * ct;
          const cy = R1 * st;

          const x =
            cx * (cosB * cp + sinA * sinB * sp) - cy * cosA * sinB;
          const y =
            cx * (sinB * cp - sinA * cosB * sp) + cy * cosA * cosB;
          const z = K2 + cosA * cx * sp + cy * sinA;
          const ooz = 1 / z;

          const xp = Math.floor(W / 2 + K1 * ooz * x);
          const yp = Math.floor(H / 2 - K1 * ooz * y * 0.5);

          const L =
            cp * ct * sinB -
            cosA * ct * sp -
            sinA * st +
            cosB * (cosA * st - ct * sinA * sp);

          if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
            const idx = xp + yp * W;
            if (ooz > zbuf[idx]) {
              zbuf[idx] = ooz;
              const li = Math.max(
                0,
                Math.min(CHARS.length - 1, Math.floor(L * 8)),
              );
              out[idx] = CHARS[li];
            }
          }
        }
      }

      let text = '';
      for (let j = 0; j < H; j++) {
        text += out.slice(j * W, (j + 1) * W).join('') + '\n';
      }

      if (preRef.current) {
        preRef.current.textContent = text;
        preRef.current.style.color = gradientAt(s.scroll);
      }

      raf = requestAnimationFrame(render);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (reduce) {
      render();
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden
      className="pointer-events-none fixed right-5 top-5 z-40 hidden font-mono text-[8px] leading-[8px] tracking-tighter opacity-60 mix-blend-screen md:block"
      style={{ color: '#89b4fa' }}
    />
  );
}
