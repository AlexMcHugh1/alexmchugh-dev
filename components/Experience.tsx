import SectionHeader from './SectionHeader';

type Role = {
  company: string;
  title: string;
  type: string;
  dates: string;
  bullets?: string[];
  summary?: string;
};

const roles: Role[] = [
  {
    company: 'deltaflare',
    title: 'Product Assurance Engineer',
    type: 'On-site · London',
    dates: 'Oct 2025 – Present',
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

        <ul className="border-t border-line">
          {roles.map((r) => (
            <li
              key={r.company}
              className="reveal grid grid-cols-1 gap-6 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-faint md:col-span-3 md:pt-1">
                <div>{r.dates}</div>
                <div className="mt-1 normal-case tracking-normal text-ink-faint/80">
                  {r.type}
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-lg text-ink md:text-xl">
                  {r.title}{' '}
                  <span className="text-ink-faint">/</span>{' '}
                  <span className="text-ink-muted">{r.company}</span>
                </h3>

                {r.summary ? (
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {r.summary}
                  </p>
                ) : null}

                {r.bullets ? (
                  <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
