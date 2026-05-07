import SectionHeader from './SectionHeader';

type Group = { label: string; items: string[] };

const stack: Group[] = [
  {
    label: 'Languages',
    items: ['Go', 'Python', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    label: 'Platform',
    items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'Delivery',
    items: ['ArgoCD', 'Kustomize', 'GitHub Actions'],
  },
  {
    label: 'Security',
    items: ['Vault', 'mTLS/PKI', 'cert-manager'],
  },
  {
    label: 'Observability',
    items: ['Prometheus', 'Grafana'],
  },
  {
    label: 'Infrastructure',
    items: [
      'Proxmox',
      'Portainer',
      'pfSense',
      'OPNsense',
      'Tailscale',
      'Cloudflare',
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="01" title="About" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="reveal md:col-span-7">
            <div className="space-y-5 text-[15px] leading-[1.7] text-ink-muted md:text-base">
              <p>
                Product assurance engineer pursuing DevSecOps. My current
                work covers the security and reliability of software before
                it ships. My focus going forward is on the delivery side of
                that: secure CI/CD, Kubernetes platform engineering, and
                supply-chain integrity.
              </p>
              <p>
                I&rsquo;m finishing an MSc in Computer Science. My homelab
                runs RKE2 with a full GitOps pipeline, Vault, and
                observability tooling, which is where I work with production
                DevSecOps patterns end to end.
              </p>
            </div>
          </div>

          <div className="reveal md:col-span-5">
            <dl className="space-y-6">
              {stack.map((g) => (
                <div key={g.label}>
                  <dt className="mb-2.5 text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                    {g.label}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-1.5">
                      {g.items.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
