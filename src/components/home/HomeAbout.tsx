import { GsapReveal } from "@/components/animations/GsapReveal";

export function HomeAbout() {
  return (
    <section className="section section-line">
      <div className="container-orixo">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <GsapReveal className="lg:col-span-4">
            <span className="section-num">01</span>
          </GsapReveal>

          <GsapReveal className="lg:col-span-8" y={40}>
            <p className="eyebrow mb-6">About us</p>
            <h2 className="display-md max-w-3xl text-white">
              We help brands unlock clarity, performance, and{" "}
              <span className="font-[family-name:var(--font-instrument)] italic text-[var(--accent)]">
                measurable growth
              </span>{" "}
              through modern marketing systems.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Strategy, media, design, and production work as one studio line —
              tuned for velocity, taste, and outcomes that compound over time.
            </p>
          </GsapReveal>
        </div>

        <GsapReveal className="mt-12 grid gap-6 sm:grid-cols-3" stagger={0.12}>
          {[
            { label: "Mission", text: "AI + media systems that remove manual drag from growth." },
            { label: "Vision", text: "Premium presentation with performance culture at the core." },
            { label: "Focus", text: "Ads, automation, content, and web — end to end." },
          ].map((item) => (
            <article
              key={item.label}
              className="hover-lift rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                {item.label}
              </p>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">{item.text}</p>
            </article>
          ))}
        </GsapReveal>
      </div>
    </section>
  );
}
