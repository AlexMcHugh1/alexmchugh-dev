const sectionLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contributions', label: 'Open source' },
  { href: '#github', label: 'GitHub' },
  { href: '#education', label: 'Education' },
  { href: '#certs', label: 'Certifications' },
  { href: '#articles', label: 'Writing' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88vh] items-center"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-28 md:py-32">
        <h1 className="text-[40px] font-medium leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Alex McHugh
        </h1>

        <p className="mt-6 text-base text-ink-muted md:text-lg">
          DevSecOps engineer.
        </p>

        <nav
          aria-label="Sections"
          className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-[14px] text-ink-muted"
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

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-faint">
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
