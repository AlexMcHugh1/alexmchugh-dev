const stack = [
  'Go',
  'Python',
  'React',
  'Kubernetes',
  'ArgoCD',
  'Vault',
  'Terraform',
  'GitHub Actions',
  'Trivy',
  'Semgrep',
  'Kyverno',
  'Wazuh',
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <div className="section-label reveal">
            <span className="font-mono text-ink-faint">01</span>
            about
          </div>
          <h2 className="section-title reveal">Engineer by trade, operator by instinct.</h2>
        </div>

        <div className="reveal md:col-span-8">
          <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              I started in IT assurance — auditing the controls behind financial
              systems — and moved into DevSecOps because the most interesting
              failures happen where security, infrastructure, and developer
              experience collide.
            </p>
            <p>
              I&rsquo;m finishing an MSc in Computer Science while running a
              homelab that mirrors the production patterns I work with:
              RKE2, GitOps, policy-as-code, SIEM, signed artifacts. When I&rsquo;m
              not at a terminal I train competitive combat sports — same
              discipline, different arena.
            </p>
          </div>

          <div className="mt-10 reveal">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              {'// stack'}
            </div>
            <ul className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
