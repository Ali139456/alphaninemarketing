"use client";

import { AutoplayVideo } from "@/components/AutoplayVideo";
import type { PortfolioItem } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

/** Home 4×2 bento — no overlapping spans (kart is 1 col, not 2) */
const homePlacement: Record<string, string> = {
  "gelato-video": "md:col-span-2 md:row-span-2",
  "vibe-grid": "md:col-span-1 md:row-span-1",
  "reel-one": "md:col-span-1 md:row-span-2",
  "kart-hero": "md:col-span-1 md:row-span-1",
};

type PortfolioCardProps = {
  item: PortfolioItem;
  index?: number;
  layout?: "home" | "grid";
  href?: string;
};

export function PortfolioCard({
  item,
  index = 0,
  layout = "grid",
  href = "/portfolio",
}: PortfolioCardProps) {
  const placementClass = layout === "home" ? homePlacement[item.id] ?? "" : "";

  return (
    <Link
      id={layout === "grid" ? item.id : undefined}
      href={href}
      className={`portfolio-card portfolio-card--grid group relative block h-full min-h-0 scroll-mt-28 ${placementClass}`}
      data-cursor="view"
      data-cursor-label="View"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] max-md:aspect-[4/5] max-md:min-h-[260px] md:absolute md:inset-0">
        <div className="absolute inset-0">
          {item.type === "video" ? (
            <AutoplayVideo
              src={item.src}
              className="portfolio-card__img h-full w-full object-cover"
            />
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="portfolio-card__img object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

        <span className="absolute left-5 top-5 font-mono text-xs text-[var(--accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
              {item.tag}
            </span>
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/80">
              {item.campaign}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white transition group-hover:text-[var(--accent)] sm:text-xl">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
