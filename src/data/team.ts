export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

/** Card halo backdrops — radial glow behind portrait (Orixo dark + lime) */
export const teamMemberTones = [
  "radial-gradient(ellipse 85% 55% at 50% 32%, rgba(163, 230, 53, 0.2) 0%, #0c1210 48%, #060606 100%)",
  "radial-gradient(ellipse 85% 55% at 50% 32%, rgba(100, 170, 200, 0.16) 0%, #0a1014 48%, #060606 100%)",
  "radial-gradient(ellipse 85% 55% at 50% 32%, rgba(163, 230, 53, 0.14) 0%, #101410 48%, #060606 100%)",
  "radial-gradient(ellipse 85% 55% at 50% 32%, rgba(140, 180, 220, 0.14) 0%, #0c1016 48%, #060606 100%)",
  "radial-gradient(ellipse 85% 55% at 50% 32%, rgba(163, 230, 53, 0.12) 0%, #0e1210 48%, #060606 100%)",
  "radial-gradient(ellipse 85% 55% at 50% 32%, rgba(120, 200, 160, 0.12) 0%, #0a1210 48%, #060606 100%)",
];

export function teamMemberTone(index: number): string {
  return teamMemberTones[index % teamMemberTones.length];
}

export const teamMembers: TeamMember[] = [
  { name: "Waqar Ahmed", role: "Founder & CEO", image: "/images/team/waqar.jpg" },
  {
    name: "Amir Jibran",
    role: "AI Automation & Ads Specialist",
    image: "/images/team/amir.jpg",
  },
  { name: "Abdullah", role: "Creative Head", image: "/images/team/abdullah.jpg" },
  { name: "Amna Jabeen", role: "PR Manager", image: "/images/team/amna.jpg" },
  {
    name: "Arslan Khalid",
    role: "Creative Photographer",
    image: "/images/team/arslan.jpg",
  },
  { name: "Fahad Ali", role: "Videographer", image: "/images/team/fahad.jpg" },
];

export const teamPreview = teamMembers.slice(0, 3);
