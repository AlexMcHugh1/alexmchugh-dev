export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line/60">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-3xl text-ink md:text-4xl">
              Let&rsquo;s build something{' '}
              <span className="display-italic text-prompt">resilient</span>.
            </p>
            <p className="mt-3 max-w-md font-sans text-sm text-ink-muted">
              Open to DevSecOps and platform engineering opportunities.
              Reach out — fastest reply by email.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-ink-muted">
            <a
              href="mailto:alex@alexmchugh.dev"
              className="transition-colors hover:text-accent"
            >
              email ↗
            </a>
            <a
              href="https://github.com/alexmchughdev"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              github ↗
            </a>
            <a
              href="https://www.linkedin.com/in/alexmchughdev/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              linkedin ↗
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-line/40 pt-6 font-mono text-[11px] text-ink-faint">
          <span>
            <span className="text-prompt">alex@mchugh</span>
            <span className="text-ink-muted">:</span>
            <span className="text-path">~</span>
            <span className="ml-1">$ echo &quot;&copy; 2026&quot;</span>
          </span>
          <span>built with next · deployed via argo</span>
        </div>
      </div>
    </footer>
  );
}
