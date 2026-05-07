type Props = {
  number: string;
  title: string;
};

export default function SectionHeader({ number, title }: Props) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
        {number}
        <span className="mx-2 text-ink-faint/50">/</span>
        section
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-10 bg-accent/60" />
    </div>
  );
}
