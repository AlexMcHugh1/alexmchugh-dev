'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#articles', label: 'Articles' },
  { href: '#cv', label: 'CV' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line/70 bg-bg/70 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span className="text-accent">~/</span>
          <span className="text-ink transition-colors group-hover:text-accent">
            alexmchugh.dev
          </span>
          <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-accent animate-cursor-blink" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-2 font-mono text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink-muted transition-colors hover:text-accent md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-3 w-4 flex-col justify-between">
            <span
              className={[
                'block h-[2px] w-full bg-current transition-transform',
                open ? 'translate-y-[5px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] w-full bg-current transition-opacity',
                open ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] w-full bg-current transition-transform',
                open ? '-translate-y-[5px] -rotate-45' : '',
              ].join(' ')}
            />
          </div>
        </button>
      </div>

      <div
        className={[
          'overflow-hidden border-t border-line/60 bg-bg/90 backdrop-blur-md md:hidden',
          open ? 'max-h-72' : 'max-h-0',
          'transition-[max-height] duration-300 ease-out',
        ].join(' ')}
      >
        <nav className="flex flex-col px-6 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 font-mono text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
