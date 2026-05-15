"use client";

import { GsapReveal } from "@/components/animations/GsapReveal";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import type { TeamMember } from "@/data/team";
import Link from "next/link";

type TeamShowcaseProps = {
  members: TeamMember[];
  title?: string;
  description?: string;
  eyebrow?: string;
  showCta?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function TeamShowcase({
  members,
  title = "Meet our team",
  description = "Get to know the specialists behind Alpha Nine — strategy, creative, and production working as one studio.",
  eyebrow,
  showCta = false,
  ctaHref = "/about#team",
  ctaLabel = "Meet the full team",
}: TeamShowcaseProps) {
  return (
    <div className="team-section">
      {(eyebrow || title || description) && (
        <header className="mb-12 max-w-2xl lg:mb-14">
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h2 className="display-lg text-white">{title}</h2>
          {description ? (
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
              {description}
            </p>
          ) : null}
        </header>
      )}

      <GsapReveal
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        stagger={0.08}
        y={36}
      >
        {members.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </GsapReveal>

      {showCta ? (
        <div className="mt-12 border-t border-[var(--border)] pt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)] transition hover:gap-5"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
