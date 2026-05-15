"use client";

import { GsapReveal } from "@/components/animations/GsapReveal";
import { TeamCarousel } from "@/components/TeamCarousel";
import { teamPreview } from "@/data/team";
import Link from "next/link";

export function HomeTeam() {
  return (
    <section className="section section-line">
      <div className="container-orixo">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GsapReveal className="lg:col-span-4">
            <span className="section-num">04</span>
          </GsapReveal>
          <GsapReveal className="lg:col-span-8" y={30}>
            <p className="eyebrow mb-4">Team</p>
            <h2 className="display-lg text-white">Meet our team</h2>
            <p className="mt-4 max-w-xl text-[var(--text-muted)]">
              Specialists across media, creative, and production — one studio,
              one standard of execution.
            </p>
          </GsapReveal>
        </div>

        <GsapReveal className="mt-10" y={40}>
          <TeamCarousel members={teamPreview} />
        </GsapReveal>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--text-dim)]">
            {teamPreview.length} leaders shown · full roster on About
          </p>
          <Link
            href="/about#team"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)] transition hover:gap-5"
            data-cursor="hover"
          >
            Meet the full team
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
