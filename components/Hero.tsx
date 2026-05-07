import Constellation from './Constellation';

const sectionLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certs', label: 'Certifications' },
  { href: '#github', label: 'GitHub' },
  { href: '#contributions', label: 'Open source' },
  { href: '#articles', label: 'Writing' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden"
    >
      <Constellation />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-bg"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 md:py-36">
        <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl lg:text-[88px]">
          Alex McHugh
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
          DevSecOps engineer building secure, observable, GitOps-driven
          platforms. Currently doing product assurance at{' '}
          <span className="text-ink">deltaflare</span> while finishing an{' '}
          <span className="text-ink">MSc in Computer Science</span>.
        </p>

        <nav
          aria-label="Sections"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-ink-muted"
        >
          {sectionLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="transition-colors duration-150 hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-ink-faint">
          <a
            href="https://github.com/alexmchughdev"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-150 hover:text-accent"
          >
            github →
          </a>
          <a
            href="https://www.linkedin.com/in/alexmchughdev/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-150 hover:text-accent"
          >
            linkedin →
          </a>
          <a
            href="mailto:alex@alexmchugh.dev"
            className="transition-colors duration-150 hover:text-accent"
          >
            email →
          </a>
        </div>
      </div>
    </section>
  );
}
