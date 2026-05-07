'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
};

const COUNT_DESKTOP = 110;
const COUNT_MOBILE = 45;
const LINK_DIST = 170;
const MOUSE_RADIUS = 240;

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const interactive = finePointer && !mobile;
    const count = mobile ? COUNT_MOBILE : COUNT_DESKTOP;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const baseVx = (Math.random() - 0.5) * 0.55;
        const baseVy = (Math.random() - 0.5) * 0.55;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (interactive && mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS && d > 0) {
            const force = (1 - d / MOUSE_RADIUS) * 0.11;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }
        p.vx = p.vx * 0.985 + p.baseVx * 0.015;
        p.vy = p.vy * 0.985 + p.baseVy * 0.015;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const d = Math.sqrt(d2);
            let alpha = (1 - d / LINK_DIST) * 0.32;

            if (interactive && mouse.active) {
              const mx = (a.x + b.x) * 0.5 - mouse.x;
              const my = (a.y + b.y) * 0.5 - mouse.y;
              const md = Math.hypot(mx, my);
              if (md < MOUSE_RADIUS) {
                alpha += (1 - md / MOUSE_RADIUS) * 0.4;
              }
            }

            ctx.strokeStyle = `rgba(137,180,250,${Math.min(alpha, 0.85)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        let glow = 0;
        if (interactive && mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS) glow = 1 - d / MOUSE_RADIUS;
        }
        const r = 1.4 + glow * 2.2;
        const alpha = 0.55 + glow * 0.4;
        ctx.fillStyle = `rgba(137,180,250,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (visible) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      if (document.hidden) {
        visible = false;
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      } else if (!reduce) {
        visible = true;
        if (!raf) raf = requestAnimationFrame(tick);
      }
    };

    resize();
    seed();
    window.addEventListener('resize', () => {
      resize();
      seed();
    });
    if (interactive) {
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseleave', onLeave);
    }
    document.addEventListener('visibilitychange', onVisibility);

    if (reduce) tick();
    else raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (interactive) {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseleave', onLeave);
      }
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
