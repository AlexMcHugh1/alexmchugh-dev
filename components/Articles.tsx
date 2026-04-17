const ARTICLE_TITLE =
  'The Death of the Trusted Zone: Navigating Decentralised Security';
const ARTICLE_URL =
  'https://www.linkedin.com/posts/activity-7438227683089645568--bt6';

export default function Articles() {
  return (
    <section id="articles" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-14 reveal">
          <div className="section-label">
            <span className="font-mono text-ink-faint">04</span>
            articles
          </div>
          <h2 className="section-title">Writing.</h2>
        </header>

        <a
          href={ARTICLE_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-sm border border-line bg-bg-card/70 p-8 transition-all duration-300 hover:border-accent/50 hover:bg-bg-card md:p-10 reveal"
        >
          {/* Deltaflare accent bar */}
          <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent via-accent-cyan to-accent-cyan/30" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Featured
              </span>
              <span className="chip">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden
                >
                  <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
                </svg>
                Published by Deltaflare
              </span>
              <span className="chip">Reposted on LinkedIn</span>
            </div>

            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
              {ARTICLE_TITLE}
            </h3>

            <p className="max-w-2xl text-sm text-ink-muted md:text-base">
              {/* Short teaser — swap this out when you have the real article copy. */}
              A practitioner&rsquo;s take on building security into the delivery
              pipeline without slowing it down.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-accent/80">
              Read on Deltaflare
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
