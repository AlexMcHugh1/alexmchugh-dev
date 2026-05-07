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
    status: 'In progress',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="04" title="Certifications" />

        <ul className="grid gap-5 sm:grid-cols-2">
          {certs.map((c) => {
            const pending = !c.url;
            const inner = (
              <>
                <div className="flex flex-1 gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.badge}
                    alt=""
                    width={68}
                    height={68}
                    loading="lazy"
                    decoding="async"
                    className={`h-[68px] w-[68px] shrink-0 object-contain ${
                      pending ? 'opacity-40 grayscale' : ''
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-[15px] font-medium leading-snug ${
                        pending ? 'text-ink-muted' : 'text-ink'
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        pending ? 'text-ink-faint' : 'text-ink-muted'
                      }`}
                    >
                      {c.issuer}
                    </p>
                    <p className="mt-3 font-mono text-[11px] text-ink-faint">
                      {c.status
                        ? c.status
                        : `Issued ${c.issued}${c.expires ? ` · Expires ${c.expires}` : ''}`}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-end font-mono text-xs">
                  {c.url ? (
                    <span className="text-accent transition-transform group-hover:translate-x-0.5">
                      verify →
                    </span>
                  ) : (
                    <span className="text-ink-faint">— pending</span>
                  )}
                </div>
              </>
            );

            const baseClass =
              'group reveal relative flex h-full flex-col border border-line border-l-[3px] p-6 transition-colors duration-200';
            const hoverClass = pending
              ? 'bg-bg-card/20'
              : 'bg-bg-card/40 hover:border-ink-faint/70 hover:bg-bg-card/60';

            const railColor = pending
              ? `${c.accent}55`
              : c.accent;

            return (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${baseClass} ${hoverClass}`}
                    style={{ borderLeftColor: railColor }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    className={`${baseClass} ${hoverClass}`}
                    style={{ borderLeftColor: railColor }}
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
