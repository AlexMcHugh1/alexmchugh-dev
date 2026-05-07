import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="03" title="Education" />

        <div
          className="reveal relative border border-line border-l-[3px] bg-bg-card/40 p-6 transition-colors hover:border-ink-faint/70"
          style={{ borderLeftColor: '#cba6f7' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-medium text-ink">
                MSc Computer Science
              </h3>
              <p className="mt-0.5 text-sm text-ink-muted">
                St Mary&rsquo;s University, Twickenham
              </p>
            </div>
            <div className="shrink-0 text-right font-mono text-xs text-ink-faint">
              <div>Sep 2025 – Sep 2026</div>
              <div className="mt-0.5">expected Sep 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
