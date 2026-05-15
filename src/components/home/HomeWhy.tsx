import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const points = [
  "AI automation that removes manual drag from campaigns",
  "Creative systems that scale without looking templated",
  "Transparent reporting and decisive iteration cycles",
];

export function HomeWhy() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg)] py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(163,230,53,0.06),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeader
              label="Why AlphaNine"
              title="Performance culture. Luxury presentation."
              description="We obsess over Core Web Vitals for your digital footprint, and over narrative craft for your brand — because growth without resonance does not last."
            />
            <ul className="mt-10 space-y-4">
              {points.map((point, i) => (
                <ScrollReveal key={point} delay={0.1 + i * 0.06}>
                  <li className="flex gap-4 rounded-xl border border-transparent bg-white/[0.02] p-4 transition hover:border-[var(--accent)]/20 hover:bg-[var(--accent-soft)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <span className="pt-1 leading-relaxed text-[var(--text-muted)]">
                      {point}
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="gradient-border-card overflow-hidden rounded-3xl">
              <div className="relative bg-gradient-to-br from-[var(--bg-card)] to-black p-10 sm:p-14">
                <div className="absolute inset-0 animate-shimmer opacity-60" aria-hidden />
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)]/15 blur-3xl"
                  aria-hidden
                />
                <p className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                  North star
                </p>
                <p className="relative mt-5 font-[family-name:var(--font-instrument)] text-4xl leading-tight text-white sm:text-5xl">
                  Fast, measurable,{" "}
                  <span className="text-gradient italic">elegant.</span>
                </p>
                <div className="relative mt-8 flex gap-6 border-t border-white/10 pt-8">
                  {["Speed", "Clarity", "Craft"].map((word) => (
                    <span
                      key={word}
                      className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
