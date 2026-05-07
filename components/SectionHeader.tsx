type Props = {
  command: string;
  title: string;
  number?: string;
};

export default function SectionHeader({ command, title, number }: Props) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-line/60 pb-4">
      <div className="flex items-baseline gap-3">
        {number ? (
          <span className="display text-2xl text-ink-faint md:text-3xl">
            {number}
          </span>
        ) : null}
        <div>
          <h2 className="display text-2xl leading-none text-ink md:text-3xl">
            {title}
          </h2>
          <div className="mt-1.5 font-mono text-[11px] text-ink-faint">
            <span className="text-prompt">~</span>
            <span className="mx-1">$</span>
            <span>{command}</span>
            <span className="ml-0.5 inline-block h-3 w-1.5 -translate-y-px translate-x-0.5 animate-cursor-blink bg-ink-faint align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}
