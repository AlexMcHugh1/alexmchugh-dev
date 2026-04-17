export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* background: grid + radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40" />
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.08),transparent_55%)]" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-accent-cyan/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="section-label animate-fade-in">
            <span className="h-px w-8 bg-accent/60" />
            portfolio / v1
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-8xl">
            Alex
            <br />
            <span className="bg-gradient-to-r from-ink via-ink to-accent bg-clip-text text-transparent">
              McHugh
            </span>
          </h1>

          <p className="mt-6 font-mono text-sm text-ink-muted md:text-base">
            <span className="text-accent">&gt;</span> DevSecOps Engineer{' '}
            <span className="mx-2 text-line">|</span> MSc Computer Science
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            I design and ship secure, observable systems — GitOps pipelines,
            Kubernetes platforms, and supply-chain guardrails that let engineers
            move fast without breaking the things that matter.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              <span className="text-accent/70">$</span>
              View Projects
              <span aria-hidden>→</span>
            </a>
            {/* PLACEHOLDER — replace /cv.pdf with real CV file in /public */}
            <a href="/cv.pdf" className="btn-ghost" download>
              Download CV
              <span aria-hidden>↓</span>
            </a>
          </div>

          <div className="mt-16 flex items-center gap-3 font-mono text-xs text-ink-faint">
            <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
            available for select engagements
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
        scroll ↓
      </div>
    </section>
  );
}
