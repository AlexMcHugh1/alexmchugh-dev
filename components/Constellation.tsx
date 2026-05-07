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

const COUNT_DESKTOP = 70;
const COUNT_MOBILE = 28;
const LINK_DIST = 130;
const MOUSE_RADIUS = 160;

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    const count = mobile ? COUNT_MOBILE : COUNT_DESKTOP;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const baseVx = (Math.random() - 0.5) * 0.16;
        const baseVy = (Math.random() - 0.5) * 0.16;
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
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS && d > 0) {
            const force = (1 - d / MOUSE_RADIUS) * 0.05;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }
        p.vx = p.vx * 0.96 + p.baseVx * 0.04;
        p.vy = p.vy * 0.96 + p.baseVy * 0.04;
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
            const alpha = (1 - d / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(137,180,250,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        let glow = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS) glow = 1 - d / MOUSE_RADIUS;
        }
        const r = 1.1 + glow * 1.2;
        const alpha = 0.5 + glow * 0.4;
        ctx.fillStyle = `rgba(137,180,250,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (visible) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      seed();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible = entry.isIntersecting;
          if (visible && !raf && !reduce) raf = requestAnimationFrame(tick);
          else if (!visible && raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        }
      },
      { threshold: 0 },
    );

    resize();
    seed();
    io.observe(container);
    window.addEventListener('resize', onResize);
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    if (reduce) tick();
    else raf = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
