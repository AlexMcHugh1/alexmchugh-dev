import SectionHeader from './SectionHeader';

type Cert = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  accent: string;
  url?: string;
  badge: string;
  status?: string;
};

const certs: Cert[] = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issued: 'Oct 2025',
    expires: 'Oct 2028',
    accent: '#FF0000',
    url: 'https://www.credly.com/badges/df00b627-e948-4521-a8b2-4ad0ac523542/public_url',
    badge: '/certs/comptia-security-plus.png',
  },
  {
    name: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    issued: 'Oct 2025',
    expires: 'Oct 2028',
    accent: '#4CAF50',
    url: 'https://www.credly.com/badges/79c20cb8-f31c-4b49-aad5-dedc141eb2b8/public_url',
    badge: '/certs/isc2-cc.png',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'Oct 2025',
    expires: 'Oct 2028',
    accent: '#FF9900',
    url: 'https://www.credly.com/badges/c106804b-c2e7-47e1-8721-7b5f780013ce/public_url',
    badge: '/certs/aws-ccp.png',
  },
  {
    name: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    issued: 'Oct 2025',
    accent: '#0078D4',
    url: 'https://learn.microsoft.com/en-gb/users/alexmchugh-1009/credentials/1f7ef9db87e912c4',
    badge: '/certs/azure-fundamentals.svg',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    accent: '#7B42BC',
    badge: '/certs/terraform-associate.png',
    status: 'in progress',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative scroll-mt-8 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader command="ls certs/" title="certs" />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {certs.map((c) => {
            const inner = (
              <>
                <div className="flex flex-1 gap-4">
                  <img
                    src={c.badge}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-mono text-[15px] font-medium leading-snug text-ink">
                      {c.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-ink-muted">
                      {c.issuer}
                    </p>
                    <p className="mt-2 font-mono text-[11px] text-ink-faint">
                      {c.status
                        ? c.status
                        : `Issued ${c.issued}${c.expires ? ` · Expires ${c.expires}` : ''}`}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end font-mono text-xs">
                  {c.url ? (
                    <span className="text-accent transition-transform group-hover:translate-x-0.5">
                      ↗ verify
                    </span>
                  ) : (
                    <span className="text-ink-faint">— pending</span>
                  )}
                </div>
              </>
            );

            const baseClass =
              'group relative flex h-full flex-col border border-line/70 border-l-[3px] bg-bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 ease-out';
            const hoverClass = c.url
              ? 'hover:-translate-y-0.5 hover:border-ink-muted/60 hover:bg-bg-card/70'
              : 'opacity-90';

            return (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${baseClass} ${hoverClass}`}
                    style={{ borderLeftColor: c.accent }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    className={`${baseClass} ${hoverClass}`}
                    style={{ borderLeftColor: c.accent }}
                  >
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
