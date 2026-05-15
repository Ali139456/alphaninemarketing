import { GsapReveal } from "@/components/animations/GsapReveal";
import { PageHeader } from "@/components/PageHeader";
import { TeamShowcase } from "@/components/TeamShowcase";
import { PageCta } from "@/components/PageCta";
import { teamMembers } from "@/data/team";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Where strategy, automation, and creative move as one. Meet the AlphaNineMarketing team.",
};

const stats = [
  { value: "AI + media", label: "Core growth system" },
  { value: "Creative-led", label: "Brand execution" },
  { value: "Lean team", label: "Fast decision cycles" },
];

const capabilities = [
  "Ads systems tailored to your funnel",
  "Creative production with platform-native thinking",
  "Web experiences built for speed and conversion",
];

const principles = [
  {
    title: "Clarity first",
    body: "Every campaign, asset, and landing page should make the next customer decision easier.",
  },
  {
    title: "Systems over chaos",
    body: "We build repeatable marketing infrastructure so growth is not dependent on guesswork.",
  },
  {
    title: "Premium by restraint",
    body: "Strong typography, disciplined visuals, and performance-minded execution keep the brand elevated.",
  },
];

export default function AboutPage() {
  return (
    <article className="about-page">
      <PageHeader
        title="The people behind Alpha Nine"
        description="Strategy, automation, and creative — one focused team for premium brand execution."
      />

      <figure className="team-banner">
        <div className="container-orixo team-banner__inner">
          <Image
            src="/images/team/team-banner.jpg"
            alt="AlphaNineMarketing team — full group portrait"
            width={1400}
            height={781}
            className="team-banner__img"
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </figure>

      <section id="team" className="section scroll-mt-28">
        <div className="container-orixo">
          <GsapReveal y={36}>
            <TeamShowcase
              members={teamMembers}
              eyebrow="Meet our team"
              title="The people behind every campaign"
              description="Strategy, media, design, PR, photography, and video work together so the brand never feels fragmented."
            />
          </GsapReveal>
        </div>
      </section>

      <section className="section">
        <div className="container-orixo">
          <div className="about-split">
            <GsapReveal className="about-split__copy">
              <span className="section-num" aria-hidden>
                01
              </span>
              <p className="eyebrow">About us</p>
              <h2 className="display-lg text-white">
                Strategy, automation, and creative — aligned.
              </h2>
              <p className="about-split__lead">
                AlphaNineMarketing is a modern growth studio for brands that want
                sharper systems, stronger presentation, and execution that feels
                premium from first click to final conversion.
              </p>
            </GsapReveal>

            <GsapReveal y={28} delay={0.08} className="about-split__aside">
              <div className="about-stat-stack">
                {stats.map((stat) => (
                  <div key={stat.label} className="about-stat-card">
                    <p className="about-stat-card__value">{stat.value}</p>
                    <p className="about-stat-card__label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-orixo">
          <div className="about-split">
            <GsapReveal className="about-split__copy">
              <p className="eyebrow">Capabilities</p>
              <h2 className="display-lg text-white">
                Bespoke systems built around your business.
              </h2>
              <p className="about-split__lead">
                Performance marketing, AI-driven automation, design, and content
                production in one operating model.
              </p>
            </GsapReveal>

            <GsapReveal y={28} delay={0.08} className="about-split__aside">
              <aside className="about-feature-panel">
                <ul className="about-feature-panel__list">
                  {capabilities.map((item) => (
                    <li key={item}>
                      <span aria-hidden>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </GsapReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-orixo">
          <GsapReveal className="about-section-header">
            <p className="eyebrow">Philosophy</p>
            <h2 className="display-lg text-white">
              Quiet confidence, measured outcomes.
            </h2>
          </GsapReveal>

          <div className="about-principles">
            {principles.map((item, i) => (
              <GsapReveal key={item.title} y={32} delay={i * 0.06}>
                <article className="about-principle-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Bring the vision. We'll build the system."
        description="If you need strategy and polished execution in one team, we're built for that overlap."
      />
    </article>
  );
}
