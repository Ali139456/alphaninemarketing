import { GsapReveal } from "@/components/animations/GsapReveal";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { portfolioItems, portfolioSections } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Creative assets arranged like a real showcase — editorial grids, social posts, brand boards, and motion cuts.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Creative showcase"
        description="Motion, social, and campaign creative built for scroll-stopping performance."
      />

      <section className="section pb-8" aria-label="Portfolio gallery">
        <div className="container-orixo">
          {portfolioSections.map((section, si) => {
            const items = section.itemIds
              .map((id) => portfolioItems.find((item) => item.id === id))
              .filter((item): item is (typeof portfolioItems)[number] => Boolean(item));

            return (
              <div
                key={section.id}
                className={si > 0 ? "mt-24 border-t border-[var(--border)] pt-24" : ""}
              >
                <GsapReveal className="section-intro mb-12 max-w-2xl">
                  <span className="section-num">{String(si + 1).padStart(2, "0")}</span>
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2 className="display-lg text-white">{section.title}</h2>
                  <p className="mt-4 text-[var(--text-muted)]">{section.description}</p>
                </GsapReveal>

                <GsapReveal y={40}>
                  <div className="portfolio-bento portfolio-bento--gallery">
                    {items.map((item, i) => (
                      <PortfolioCard
                        key={item.id}
                        item={item}
                        index={i}
                        layout="grid"
                        href={`/portfolio#${item.id}`}
                      />
                    ))}
                  </div>
                </GsapReveal>
              </div>
            );
          })}
        </div>
      </section>

      <PageCta
        title="Want your brand shown with the same premium system?"
        description="We build content engines that feel editorial, intentional, and built to convert."
      />
    </>
  );
}
