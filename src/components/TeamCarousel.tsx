"use client";

import { TeamMemberCard } from "@/components/TeamMemberCard";
import type { TeamMember } from "@/data/team";
import { useCallback, useState } from "react";

type TeamCarouselProps = {
  members: TeamMember[];
};

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className="team-carousel__btn"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous team member" : "Next team member"}
    >
      <span aria-hidden>{direction === "prev" ? "←" : "→"}</span>
    </button>
  );
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = members.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  if (count === 0) return null;

  return (
    <>
      <div className="team-carousel lg:hidden" aria-roledescription="carousel">
        <div className="team-carousel__viewport">
          <div
            className="team-carousel__track"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {members.map((member) => (
              <div key={member.name} className="team-carousel__slide">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <div className="team-carousel__controls">
          <NavButton direction="prev" onClick={goPrev} disabled={count <= 1} />
          <p className="team-carousel__counter" aria-live="polite">
            <span className="font-mono text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[var(--text-dim)]"> / {String(count).padStart(2, "0")}</span>
          </p>
          <NavButton direction="next" onClick={goNext} disabled={count <= 1} />
        </div>
      </div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-3">
        {members.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </>
  );
}
