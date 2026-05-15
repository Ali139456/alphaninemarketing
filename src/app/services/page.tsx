import { GsapReveal } from "@/components/animations/GsapReveal";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Ads, AI, Content & Web",
  description:
    "Modular teams, one accountable partner — AI automation, ads, design, video, content, and web.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Precision across the stack"
        description="Ads, automation, content, and web — six capabilities, one accountable studio."
      />

      <section className="section section-line">
        <div className="container-orixo">
          <GsapReveal className="section-intro mb-12 max-w-2xl">
            <span className="section-num">01</span>
            <p className="eyebrow">Overview</p>
            <h2 className="display-lg max-w-3xl text-white">
              Pick a capability — or combine the full stack
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
              Jump to a service below, or book a call and we&apos;ll recommend the
              right mix for your stage and budget.
            </p>
          </GsapReveal>

          <nav
            className="flex flex-wrap gap-2 border-y border-[var(--border)] py-6"
            aria-label="Service quick links"
          >
            {services.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                data-cursor="hover"
              >
                {s.title}
              </Link>
            ))}
          </nav>

          <div className="mt-4">
            {services.map((service, i) => (
              <GsapReveal key={service.id} y={32} delay={i * 0.03}>
                <ServiceDetail service={service} index={i} />
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Need a modular team that ships?"
        description="Book a strategy call and we'll map the right blend of ads, AI, content, and web for your goals."
        buttonLabel="Book a strategy call"
      />
    </>
  );
}
