import { Marquee } from "@/components/animations/Marquee";

const items = [
  "AI Automation",
  "Paid Media",
  "Brand Design",
  "Video Production",
  "Web Design",
  "Content Strategy",
  "Performance Marketing",
];

export function HomeMarquee() {
  return <Marquee items={items} speed={35} />;
}
