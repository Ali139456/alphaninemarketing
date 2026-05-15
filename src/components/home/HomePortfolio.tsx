"use client";

import { GsapReveal } from "@/components/animations/GsapReveal";
import { PortfolioCard } from "@/components/PortfolioCard";
import { homePortfolioItems } from "@/data/portfolio";
import Link from "next/link";

export function HomePortfolio() {
  return (
    <section className="section section-line overflow-hidden">
      <div className="container-orixo">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GsapReveal className="lg:col-span-4">
            <span className="section-num">02</span>
          </GsapReveal>
          <GsapReveal className="lg:col-span-8">
            <p className="eyebrow mb-4">Portfolio</p>
            <h2 className="display-lg text-white">
              Work that turns attention into action
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-muted)]">
              A sample of motion, social, and campaign creative — built for
              scroll-stopping performance.
            </p>
          </GsapReveal>
        </div>

        <GsapReveal className="mt-8" y={40}>
          <div className="portfolio-bento portfolio-bento--home grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
            {homePortfolioItems.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} layout="home" />
            ))}
          </div>
        </GsapReveal>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--text-dim)]">
            {homePortfolioItems.length} featured projects · full gallery inside
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)] transition hover:gap-5"
            data-cursor="hover"
          >
            Explore full portfolio
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
