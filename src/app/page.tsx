import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { HomePortfolio } from "@/components/home/HomePortfolio";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeTeam } from "@/components/home/HomeTeam";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Agency",
  description:
    "Scale smarter with AI-powered growth. Premium digital marketing, automation, ads, content, and web design.",
};

export default function HomePage() {
  return (
    <div className="home-sections">
      <HomeHero />
      <HomeMarquee />
      <HomeAbout />
      <HomePortfolio />
      <HomeServices />
      <HomeTeam />
      <HomeCta />
    </div>
  );
}
