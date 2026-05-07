import SectionHeader from './SectionHeader';

type Degree = {
  title: string;
  institution: string;
  dates: string;
  expected?: string;
};

const degrees: Degree[] = [
  {
    title: 'MSc Computer Science',
    institution: 'St Mary’s University, Twickenham',
    dates: 'Sep 2025 – Sep 2026',
    expected: 'expected Sep 2026',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="02" title="Education" />

        <ul className="border-t border-line">
          {degrees.map((d) => (
            <li
              key={d.title}
              className="reveal grid grid-cols-1 gap-6 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-faint md:col-span-3 md:pt-1">
                <div>{d.dates}</div>
                {d.expected ? (
                  <div className="mt-1 normal-case tracking-normal text-ink-faint/80">
                    {d.expected}
                  </div>
                ) : null}
              </div>

              <div className="md:col-span-9">
                <h3 className="text-lg text-ink md:text-xl">
                  {d.title}{' '}
                  <span className="text-ink-faint">/</span>{' '}
                  <span className="text-ink-muted">{d.institution}</span>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
