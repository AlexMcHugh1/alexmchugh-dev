import Constellation from './Constellation';

type Entry = { href: string; label: string; key: string };

const sections: Entry[] = [
  { href: '#about', label: 'about', key: '01' },
  { href: '#experience', label: 'experience', key: '02' },
  { href: '#education', label: 'education', key: '03' },
  { href: '#certs', label: 'certifications', key: '04' },
  { href: '#github', label: 'github', key: '05' },
  { href: '#contributions', label: 'open source', key: '06' },
  { href: '#articles', label: 'writing', key: '07' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <Constellation />

      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-bg" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-24 md:py-32">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green" />
          <span>available · london, uk</span>
        </div>

        <h1 className="mt-6 leading-[0.95] tracking-tight">
          <span className="display block text-5xl text-ink md:text-7xl lg:text-8xl">
            Alex
          </span>
          <span className="display-italic block text-5xl shimmer-text md:text-7xl lg:text-8xl">
            McHugh
          </span>
        </h1>

        <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-ink-muted md:text-lg">
          DevSecOps engineer building secure, observable, GitOps-driven
          platforms. Currently doing product assurance at{' '}
          <span className="text-ink">deltaflare</span> while finishing an{' '}
          <span className="text-ink">MSc in Computer Science</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#about" className="btn-primary">
            <span>↓</span> read on
          </a>
          <a
            href="https://github.com/alexmchughdev"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span aria-hidden>↗</span> github
          </a>
          <a
            href="https://www.linkedin.com/in/alex-mchugh-7b7245213/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span aria-hidden>↗</span> linkedin
          </a>
        </div>

        <nav
          aria-label="Sections"
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-line/60 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group flex items-baseline gap-2 font-mono text-[12px] text-ink-muted transition-colors hover:text-ink"
            >
              <span className="text-ink-faint group-hover:text-prompt">
                {s.key}
              </span>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
