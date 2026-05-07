import SectionHeader from './SectionHeader';

type Role = {
  company: string;
  title: string;
  type: string;
  dates: string;
  bullets?: string[];
  summary?: string;
  accent: string;
  muted?: boolean;
};

const roles: Role[] = [
  {
    company: 'deltaflare',
    title: 'Product Assurance Engineer',
    type: 'On-site · London',
    dates: 'Oct 2025 – Present',
    accent: '#cba6f7',
    bullets: [
      'Supporting testing and assurance activities for the Phoenix platform.',
      'Assisting with software validation, documentation, and automation tasks.',
      'Writing Go and Bash tooling for automation and internal infrastructure tasks.',
      'Linux systems administration and container management via Docker and Portainer.',
      'Grafana dashboards for container monitoring and observability.',
      'Participating in security assessment and patch testing activities.',
      'Collaborating with senior engineers to resolve technical issues and explore new development concepts.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="02" title="Experience" />

        <ul className="space-y-5">
          {roles.map((r) => (
            <li
              key={r.company}
              className="reveal relative border border-line border-l-[3px] bg-bg-card/40 p-6 transition-colors hover:border-ink-faint/70"
              style={{ borderLeftColor: r.accent }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{r.company}</p>
                </div>
                <div className="shrink-0 text-right font-mono text-xs text-ink-faint">
                  <div>{r.dates}</div>
                  <div className="mt-0.5">{r.type}</div>
                </div>
              </div>

              {r.summary ? (
                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                  {r.summary}
                </p>
              ) : null}

              {r.bullets ? (
                <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-ink-muted">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
