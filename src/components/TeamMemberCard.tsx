import type { TeamMember } from "@/data/team";
import Image from "next/image";

type TeamMemberCardProps = {
  member: TeamMember;
  className?: string;
};

export function TeamMemberCard({ member, className = "" }: TeamMemberCardProps) {
  return (
    <article
      className={`team-member-card hover-lift group ${className}`.trim()}
    >
      <div className="team-member-card__media">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          className="team-member-card__photo"
          sizes="(max-width: 640px) 100vw, 380px"
        />
        <div className="team-member-card__media-glow" aria-hidden />
      </div>
      <div className="team-member-card__body">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          {member.role}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-instrument)] text-xl text-white transition group-hover:text-[var(--accent)] sm:text-2xl">
          {member.name}
        </h3>
      </div>
    </article>
  );
}
