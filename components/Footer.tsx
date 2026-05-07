export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-faint">© 2026 Alex McHugh</p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-ink-faint">
          <a
            href="mailto:alex@alexmchugh.dev"
            className="transition-colors hover:text-accent"
          >
            email
          </a>
          <a
            href="https://github.com/alexmchughdev"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/alexmchughdev/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}
