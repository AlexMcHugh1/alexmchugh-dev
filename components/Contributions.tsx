import { ComponentType, SVGProps } from 'react';
import SectionHeader from './SectionHeader';
import { FalcoIcon, KubernetesIcon, PrometheusIcon } from './icons';

type Contribution = {
  repo: string;
  title: string;
  prNumber: number;
  prUrl: string;
  description: string;
  status?: string;
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
  {
    repo: 'prometheus/prometheus',
    title:
      'promql: reject NaN/Inf and fix overflow bound in duration expressions',
    prNumber: 18639,
    prUrl: 'https://github.com/prometheus/prometheus/pull/18639',
    description:
      "Bug fix in PromQL duration expression evaluation. Identified two correctness issues in calculateDuration: an off-by-1e9 magnitude bound check (seconds compared against the nanosecond range of int64) and a NaN/Infinity bypass that allowed implementation-defined values into selector range, offset, and step. Fixed both with regression tests covering each failure mode.",
    Icon: PrometheusIcon,
    iconColor: '#E6522C',
  },
  {
    repo: 'prometheus/prometheus',
    title:
      'fix: check bounds on remote write receive when parsing symbolized metadata',
    prNumber: 18641,
    prUrl: 'https://github.com/prometheus/prometheus/pull/18641',
    description:
      'Identified and reported an out-of-bounds panic in the remote write v2 receiver triggered by malformed protobuf symbol references. Reported privately to maintainers per the project security policy. Fix authored by bwplotka (PRW 2.0 lead author) with credit in the PR description.',
    status: 'credited',
    Icon: PrometheusIcon,
    iconColor: '#E6522C',
  },
  {
    repo: 'falcosecurity/falco',
    title:
      'fix(userspace): open pidfile with O_NOFOLLOW to prevent symlink TOCTOU',
    prNumber: 3871,
    prUrl: 'https://github.com/falcosecurity/falco/pull/3871',
    description:
      "Hardening change to Falco's pidfile open path. Replaced std::ofstream with a raw POSIX open() using O_NOFOLLOW and O_CLOEXEC on POSIX platforms, closing a defence-in-depth gap where a pidfile in an unprivileged-writable directory could be redirected via symlink. Windows builds retain the original behaviour since the relevant flags don't exist there and the threat model differs.",
    Icon: FalcoIcon,
    iconColor: '#00AEC7',
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
        <SectionHeader number="05" title="Open source" />

        <ul className="border-t border-line">
          {contributions.map((c) => (
            <li key={c.prUrl} className="reveal border-b border-line">
              <a
                href={c.prUrl}
                target="_blank"
                rel="noreferrer"
                className="group block py-8 transition-colors"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3 md:pt-1">
                    <div className="flex items-center gap-3">
                      {c.Icon ? (
                        <c.Icon
                          width={28}
                          height={28}
                          style={{ color: c.iconColor }}
                          className="shrink-0"
                        />
                      ) : null}
                      <div className="min-w-0">
                        <div className="truncate text-[12px] text-ink-muted">
                          {c.repo}
                        </div>
                        <div className="text-[11px] text-ink-faint">
                          {c.status ?? 'merged'} · #{c.prNumber}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <h3 className="text-lg text-ink transition-colors group-hover:text-accent md:text-xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
                      {c.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[12px] text-ink-faint transition-colors group-hover:text-accent">
                      view pull request{' '}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
