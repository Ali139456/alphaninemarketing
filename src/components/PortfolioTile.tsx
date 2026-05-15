"use client";

import { AutoplayVideo } from "@/components/AutoplayVideo";
import type { PortfolioItem } from "@/data/portfolio";
import Image from "next/image";

const variantClasses: Record<PortfolioItem["variant"], string> = {
  feature: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  video: "",
  "video-feature": "md:col-span-2 md:row-span-2",
};

type PortfolioTileProps = {
  item: PortfolioItem;
  className?: string;
};

export function PortfolioTile({ item, className = "" }: PortfolioTileProps) {
  return (
    <article
      className={`card-premium group overflow-hidden ${variantClasses[item.variant]} ${className}`}
      data-cursor="view"
      data-cursor-label="View"
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:min-h-[300px] md:min-h-[340px]">
        {item.type === "video" ? (
          <AutoplayVideo
            src={item.src}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            fallback="Video preview unavailable"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
              {item.tag}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
              {item.campaign}
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-instrument)] text-xl text-white sm:text-2xl">
            {item.title}
          </h3>
        </div>
      </div>
    </article>
  );
}
