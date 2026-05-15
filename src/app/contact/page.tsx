import { GsapReveal } from "@/components/animations/GsapReveal";
import { ContactForm } from "@/components/ContactForm";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your goals, timelines, and links. We reply within two business days.",
};

const quickFacts = [
  { label: "Response time", value: "Within 2 business days" },
  { label: "Best for", value: "Ads, AI, content, web" },
  { label: "Engagement style", value: "Remote-first, high-touch" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's build momentum"
        description="Share your goals and timeline — we reply within two business days."
      />

      <section className="section pb-8">
        <div className="container-orixo">
          <GsapReveal className="contact-section__intro mx-auto mb-10 max-w-2xl text-center lg:mb-12">
            <p className="eyebrow mb-4">Start a project</p>
            <h2 className="display-lg text-white">Tell us what you need.</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Keep it simple. We&apos;ll turn it into a clear next move.
            </p>
          </GsapReveal>

          <div className="contact-section__grid grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-8">
            <div className="flex min-h-0">
              <GsapReveal className="flex h-full w-full min-h-0">
                <aside className="card-premium flex h-full w-full flex-col p-6 sm:p-8">
                  <p className="eyebrow eyebrow--muted mb-6">Quick facts</p>
                  <ul className="space-y-4">
                    {quickFacts.map((fact) => (
                      <li
                        key={fact.label}
                        className="flex justify-between gap-4 border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-[var(--text-dim)]">
                          {fact.label}
                        </span>
                        <span className="text-right text-sm font-medium text-white">
                          {fact.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="my-8 border-t border-[var(--border)]" />

                  <div className="grid gap-6 sm:grid-cols-1">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-2 inline-block text-sm text-[var(--accent)] hover:underline"
                        data-cursor="hover"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                        Phone
                      </p>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-2 inline-block text-sm text-white hover:text-[var(--accent)]"
                        data-cursor="hover"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                        Studio
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Remote-first · meetings by appointment
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-[var(--border)] pt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                      Social
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                        data-cursor="hover"
                      >
                        Instagram
                      </a>
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                        data-cursor="hover"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </aside>
              </GsapReveal>
            </div>

            <div className="flex min-h-0">
              <GsapReveal y={30} delay={0.1} className="flex h-full w-full min-h-0">
                <ContactForm className="h-full w-full min-h-0" />
              </GsapReveal>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Prefer email?"
        title="We're remote-first and high-touch."
        description="Share goals, timelines, and links — we reply within two business days."
        buttonLabel="View services"
        buttonHref="/services"
      />
    </>
  );
}
