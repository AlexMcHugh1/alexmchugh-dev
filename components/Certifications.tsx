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
        <SectionHeader number="06" title="Certifications" />

        <ul className="grid gap-4 sm:grid-cols-2">
          {certs.map((c) => {
            const pending = !c.url;
            const inner = (
              <>
                <div className="flex flex-1 items-start gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.badge}
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className={`h-20 w-20 shrink-0 object-contain ${
                      pending ? 'opacity-40 grayscale' : ''
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-[14px] leading-snug ${
                        pending ? 'text-ink-muted' : 'text-ink'
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p
                      className={`mt-1 inline-flex items-center gap-2 text-[12px] ${
                        pending ? 'text-ink-faint' : 'text-ink-muted'
                      }`}
                    >
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{
                          background: pending
                            ? `${c.accent}66`
                            : c.accent,
                        }}
                      />
                      {c.issuer}
                    </p>
                    <p className="mt-3 text-[11px] text-ink-faint">
                      {c.status
                        ? c.status
                        : `Issued ${c.issued}${c.expires ? ` · Expires ${c.expires}` : ''}`}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-end text-[12px]">
                  {c.url ? (
                    <span className="text-ink-faint transition-colors group-hover:text-accent">
                      verify{' '}
                      <span
                        aria-hidden
                        className="inline-block transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  ) : (
                    <span className="text-ink-faint">— pending</span>
                  )}
                </div>
              </>
            );

            const baseClass =
              'group reveal relative flex h-full flex-col border border-line p-6 transition-colors duration-200';
            const stateClass = pending
              ? 'opacity-95'
              : 'hover:border-ink-faint/70';

            return (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${baseClass} ${stateClass}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`${baseClass} ${stateClass}`}>
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
