import SectionHeader from './SectionHeader';

type Post = {
  tag: string;
  source?: string;
  sourceUrl?: string;
  title: string;
  url: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    tag: 'Featured',
    source: 'Published by deltaflare',
    sourceUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7438235126880239616/?originTrackingId=%2BDOv98%2BDBMzNOD5JV1Axvg%3D%3D',
    title:
      'The Death of the Trusted Zone: Navigating Decentralised Security',
    url: 'https://www.linkedin.com/posts/activity-7438227683089645568--bt6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEh31CcBN51w0RSiai2JMD1a5tLjziEr7F0',
    excerpt:
      'The “trusted zone” is a relic of an era when systems had perimeters. IoT, remote telemetry, and hybrid work have turned that perimeter into a fiction. The article explores what replaces it, and how to secure a decentralised world in practice.',
  },
  {
    tag: 'Recent',
    title:
      'How I built an open source visual QA tool after every AI agent I tried failed',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7451324085927727104/?originTrackingId=KiKB8a9rIS2zzSIRry0%2BWQ%3D%3D',
    excerpt:
      'I tried to automate QA testing with AI agents. They kept getting lost in the DOM and navigating to random pages. So I built something different. Here’s what I learned and the open source tool that came out of it.',
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader number="06" title="Writing" />

        <ul className="border-t border-line">
          {posts.map((p) => (
            <li key={p.url} className="reveal border-b border-line">
              <article className="relative grid grid-cols-1 gap-6 py-8 md:grid-cols-12 md:gap-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-faint md:col-span-3 md:pt-1">
                  <div>{p.tag}</div>
                  {p.source && p.sourceUrl ? (
                    <a
                      href={p.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 mt-1 block normal-case tracking-normal text-ink-muted transition-colors hover:text-accent"
                    >
                      {p.source} ↗
                    </a>
                  ) : null}
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-lg leading-snug text-ink md:text-xl">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent before:absolute before:inset-0 before:content-['']"
                    >
                      {p.title}
                    </a>
                  </h3>
                  <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
                    {p.excerpt}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
