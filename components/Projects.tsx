type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: 'live' | 'early' | 'academic' | 'homelab';
};

const projects: Project[] = [
  {
    title: 'getdfx.uk',
    tagline: 'OT Edge Asset Management',
    description:
      'Go web app for industrial asset tagging, shipped on a full GitOps pipeline: signed images, admission-policy gating, and end-to-end observability from commit to cluster.',
    tech: [
      'Go',
      'GitHub Actions',
      'ArgoCD',
      'RKE2',
      'GHCR',
      'Kustomize',
      'Trivy',
      'Semgrep',
      'Cosign/Sigstore',
      'Kyverno',
      'cert-manager',
      'Prometheus',
      'Grafana',
      'Loki',
    ],
    live: 'https://getdfx.uk',
    status: 'live',
  },
  {
    title: 'DevSecOps Home Lab',
    tagline: 'Production patterns, at home',
    description:
      'RKE2 Kubernetes cluster on a Rocky Linux mini PC, fronted by OPNsense with Suricata feeding Wazuh SIEM. Vault for secrets, MinIO for object storage, Velero for backup. Proxmox on a Dell PowerEdge R220.',
    tech: [
      'RKE2',
      'Rocky Linux',
      'Vault',
      'Velero',
      'MinIO',
      'OPNsense',
      'Suricata',
      'Wazuh',
      'Proxmox',
    ],
    status: 'homelab',
  },
  {
    title: 'Seiri',
    tagline: 'Webhook & Cron Monitoring',
    description:
      'B2B SaaS that catches the failures nobody notices — silent webhook drops and cron jobs that simply stop firing. Early stage.',
    tech: ['SaaS', 'Observability', 'TBD'],
    status: 'early',
  },
  {
    title: 'Orion Belt',
    tagline: 'Open-source PAM Gateway',
    description:
      'A privileged access management gateway for teams that have outgrown shared SSH keys but can’t justify an enterprise PAM. Early stage.',
    tech: ['Open Source', 'Go', 'Zero Trust'],
    status: 'early',
  },
  {
    title: 'MSc AI Simulation',
    tagline: 'Multi-agent Python Simulation',
    description:
      'Multi-agent simulation inspired by Project Hail Mary — autonomous agents coordinating under partial information in a grid world.',
    tech: ['Python', 'Multi-agent', 'Simulation'],
    github: 'https://github.com/AlexMcHugh1/multi-agent-simulation-python',
    status: 'academic',
  },
  {
    title: 'MSc Web App',
    tagline: 'Campus Maintenance System',
    description:
      'Full-stack maintenance management system for a university campus — ticketing, asset tracking, role-based workflows.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    status: 'academic',
  },
];

const statusLabel: Record<NonNullable<Project['status']>, string> = {
  live: 'live',
  early: 'early stage',
  academic: 'academic',
  homelab: 'homelab',
};

const statusColor: Record<NonNullable<Project['status']>, string> = {
  live: 'text-accent border-accent/40 bg-accent/5',
  early: 'text-accent-cyan border-accent-cyan/40 bg-accent-cyan/5',
  academic: 'text-ink-muted border-line bg-bg-elevated/60',
  homelab: 'text-ink-muted border-line bg-bg-elevated/60',
};

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-14 flex flex-col gap-4 reveal md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">
              <span className="font-mono text-ink-faint">02</span>
              projects
            </div>
            <h2 className="section-title">Selected work.</h2>
          </div>
          <p className="max-w-md text-sm text-ink-muted">
            Platform, product, and research — shipped, running, or under
            construction.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="card group reveal">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-ink-muted">
                    {p.tagline}
                  </p>
                </div>
                {p.status ? (
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusColor[p.status]}`}
                  >
                    {statusLabel[p.status]}
                  </span>
                ) : null}
              </div>

              <p className="mb-5 text-sm leading-relaxed text-ink-muted">
                {p.description}
              </p>

              <ul className="mb-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-sm border border-line/70 bg-bg-elevated/50 px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline font-mono text-xs"
                  >
                    live <span aria-hidden>↗</span>
                  </a>
                ) : null}
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline font-mono text-xs"
                  >
                    github <span aria-hidden>↗</span>
                  </a>
                ) : null}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/40" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
