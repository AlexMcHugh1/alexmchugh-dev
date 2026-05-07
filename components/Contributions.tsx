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
      className="relative scroll-mt-8 py-12 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          command="gh pr list --author @me --state merged"
          title="contributions"
        />

        <ul className="mt-6 space-y-4">
          {contributions.map((c) => (
            <li key={c.prUrl}>
              <article className="card reveal relative">
                <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-faint">
                  {c.Icon ? (
                    <c.Icon
                      width={14}
                      height={14}
                      style={{ color: c.iconColor }}
                    />
                  ) : null}
                  <span className="text-pink">{c.repo}</span>
                  <span>·</span>
                  <a
                    href={c.prUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 t-link"
                  >
                    #{c.prNumber}
                  </a>
                </div>

                <h3 className="font-mono text-[15px] font-medium leading-snug text-ink">
                  <a
                    href={c.prUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="before:absolute before:inset-0 before:content-['']"
                  >
                    {c.title}
                  </a>
                </h3>

                <p className="mt-3 max-w-2xl font-mono text-[13px] leading-relaxed text-ink-muted">
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
