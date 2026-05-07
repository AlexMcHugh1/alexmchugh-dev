import { ComponentType, SVGProps } from 'react';
import SectionHeader from './SectionHeader';
import { KubernetesIcon } from './icons';

type Contribution = {
  repo: string;
  title: string;
  prNumber: number;
  prUrl: string;
  description: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconColor?: string;
};

const contributions: Contribution[] = [
  {
    repo: 'kubernetes/kubernetes',
    title:
      'kubeadm: validate HTTP status when fetching cluster-info over HTTPS',
    prNumber: 138852,
    prUrl: 'https://github.com/kubernetes/kubernetes/pull/138852',
    description:
      "Bug fix in kubeadm's HTTPS cluster discovery flow. The existing code parsed any HTTP response body as a kubeconfig, including 4xx/5xx error pages, which surfaced as a confusing parser error rather than a clear HTTP failure. Added a status code check and rewrote a stale function comment that misrepresented the TLS trust model.",
    Icon: KubernetesIcon,
    iconColor: '#326CE5',
  },
];

export default function Contributions() {
  if (contributions.length === 0) return null;

  return (
    <section
      id="contributions"
      className="relative scroll-mt-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="06" title="Open source" />

        <ul className="space-y-5">
          {contributions.map((c) => (
            <li key={c.prUrl}>
              <article className="card reveal relative">
                <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-faint">
                  {c.Icon ? (
                    <c.Icon
                      width={14}
                      height={14}
                      style={{ color: c.iconColor }}
                    />
                  ) : null}
                  <span className="text-ink-muted">{c.repo}</span>
                  <span className="text-ink-faint/60">·</span>
                  <a
                    href={c.prUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 text-accent transition-colors hover:text-accent-dim"
                  >
                    #{c.prNumber}
                  </a>
                </div>

                <h3 className="text-lg font-medium leading-snug text-ink md:text-xl">
                  <a
                    href={c.prUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="before:absolute before:inset-0 before:content-['']"
                  >
                    {c.title}
                  </a>
                </h3>

                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-muted">
                  {c.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
