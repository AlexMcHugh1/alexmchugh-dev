import data from '@/data/github.json';

type Pin = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: { name: string; color: string } | null;
  topics: string[];
};

type Day = { date: string; count: number; weekday: number };
type Week = { days: Day[] };

type GithubData = {
  fetchedAt: string | null;
  stub?: boolean;
  pinned: Pin[];
  calendar: { total: number; weeks: Week[] };
};

const gh = data as GithubData;

// 5 intensity buckets → accent gradient, with a faint baseline for zero.
const CELL = 11;
const GAP = 3;
const WEEKDAY_LABELS = ['Mon', 'Wed', 'Fri'];

function intensity(count: number): string {
  if (count <= 0) return '#16161f';
  if (count < 3) return 'rgba(0,255,136,0.20)';
  if (count < 6) return 'rgba(0,255,136,0.40)';
  if (count < 10) return 'rgba(0,255,136,0.65)';
  return '#00ff88';
}

function Calendar({ weeks, total }: { weeks: Week[]; total: number }) {
  if (weeks.length === 0) {
    return (
      <p className="font-mono text-xs text-ink-faint">
        contribution data unavailable at build time.
      </p>
    );
  }

  const width = weeks.length * (CELL + GAP);
  const height = 7 * (CELL + GAP);

  // Month labels: first week a new month appears
  const monthMarkers: { x: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((w, wi) => {
    const first = w.days[0];
    if (!first) return;
    const m = new Date(first.date).getUTCMonth();
    if (m !== lastMonth) {
      monthMarkers.push({
        x: wi * (CELL + GAP),
        label: new Date(first.date).toLocaleString('en-US', {
          month: 'short',
          timeZone: 'UTC',
        }),
      });
      lastMonth = m;
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4 pr-2">
          <div className="font-mono text-xs text-ink-muted">
            <span className="text-accent">{total.toLocaleString()}</span>{' '}
            contributions · last 12 months
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
            less
            {[0, 2, 5, 9, 20].map((n) => (
              <span
                key={n}
                className="inline-block h-2.5 w-2.5 rounded-[2px]"
                style={{ background: intensity(n) }}
                aria-hidden
              />
            ))}
            more
          </div>
        </div>

        <svg
          width={width + 28}
          height={height + 22}
          viewBox={`0 0 ${width + 28} ${height + 22}`}
          role="img"
          aria-label={`${total} GitHub contributions in the last year`}
        >
          {/* weekday labels */}
          {WEEKDAY_LABELS.map((l, i) => (
            <text
              key={l}
              x={0}
              y={18 + (i * 2 + 1) * (CELL + GAP) + CELL - 2}
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              fill="#525260"
            >
              {l}
            </text>
          ))}
          {/* month labels */}
          {monthMarkers.map((m, i) => (
            <text
              key={`${m.label}-${i}`}
              x={24 + m.x}
              y={10}
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              fill="#525260"
            >
              {m.label}
            </text>
          ))}
          {/* cells */}
          <g transform="translate(24 18)">
            {weeks.map((w, wi) =>
              w.days.map((d) => (
                <rect
                  key={d.date}
                  x={wi * (CELL + GAP)}
                  y={d.weekday * (CELL + GAP)}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={intensity(d.count)}
                >
                  <title>
                    {d.count} contribution{d.count === 1 ? '' : 's'} on {d.date}
                  </title>
                </rect>
              )),
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}

function PinCard({ repo }: { repo: Pin }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="card group flex flex-col"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-mono text-sm font-medium text-ink transition-colors group-hover:text-accent">
          {repo.name}
        </h3>
        <span
          aria-hidden
          className="translate-x-0 font-mono text-xs text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent"
        >
          ↗
        </span>
      </div>

      <p className="mb-4 flex-1 text-xs leading-relaxed text-ink-muted">
        {repo.description || 'No description.'}
      </p>

      <div className="flex items-center gap-4 font-mono text-[11px] text-ink-faint">
        {repo.language ? (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: repo.language.color || '#8a8a99' }}
            />
            {repo.language.name}
          </span>
        ) : null}
        {repo.stars > 0 ? (
          <span className="inline-flex items-center gap-1">★ {repo.stars}</span>
        ) : null}
        {repo.forks > 0 ? (
          <span className="inline-flex items-center gap-1">⑂ {repo.forks}</span>
        ) : null}
      </div>
    </a>
  );
}

export default function GitHub() {
  const hasPinned = gh.pinned.length > 0;
  const hasCalendar = gh.calendar.weeks.length > 0;

  if (!hasPinned && !hasCalendar) return null;

  return (
    <section id="github" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-14 flex flex-col gap-4 reveal md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">
              <span className="font-mono text-ink-faint">03</span>
              github
            </div>
            <h2 className="section-title">Pinned work & activity.</h2>
          </div>
          <a
            href="https://github.com/AlexMcHugh1"
            target="_blank"
            rel="noreferrer"
            className="link-underline font-mono text-xs"
          >
            github.com/AlexMcHugh1 <span aria-hidden>↗</span>
          </a>
        </header>

        {hasCalendar ? (
          <div className="mb-12 rounded-sm border border-line bg-bg-card/70 p-5 md:p-6 reveal">
            <Calendar weeks={gh.calendar.weeks} total={gh.calendar.total} />
          </div>
        ) : null}

        {hasPinned ? (
          <ul className="grid gap-5 reveal sm:grid-cols-2 lg:grid-cols-3">
            {gh.pinned.map((repo) => (
              <li key={repo.name}>
                <PinCard repo={repo} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
