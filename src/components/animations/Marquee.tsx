type MarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
};

export function Marquee({ items, speed = 30, className = "" }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={`marquee-wrap overflow-hidden border-y border-[var(--border)] bg-[var(--bg)] py-5 ${className}`}
    >
      <div
        className="marquee-track flex w-max gap-12 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-sm font-medium uppercase tracking-[0.25em] text-[var(--text-dim)]"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
