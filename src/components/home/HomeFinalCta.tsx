import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(212,175,90,0.12),transparent)]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <div className="gradient-border-card mx-auto max-w-3xl overflow-hidden rounded-3xl">
            <div className="relative bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg)] px-8 py-16 sm:px-14 sm:py-20">
              <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
              <p className="relative eyebrow mx-auto">Ready to grow</p>
              <h2 className="relative mt-6 font-[family-name:var(--font-instrument)] text-3xl text-white sm:text-4xl lg:text-5xl">
                Let&apos;s Scale Your Brand
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-lg text-[var(--text-muted)]">
                Tell us where you are today — we&apos;ll map the fastest path to
                signal.
              </p>
              <div className="relative mt-10">
                <Button href="/contact">Start the conversation</Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
