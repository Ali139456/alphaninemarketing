export type Service = {
  id: string;
  title: string;
  tag: string;
  thumbnail: string;
  summary: string;
  description: string;
  bullets: string[];
  deliverables: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    tag: "AI Systems",
    thumbnail: "/images/services/service-ai-automation.png",
    summary:
      "Workflows that route leads, generate variants, and report back — without losing human oversight.",
    description:
      "We design automation stacks that connect your CRM, ads, email, and creative tools. Every workflow is mapped to a business outcome: faster follow-up, cleaner handoffs, and reporting your leadership can trust. Models assist; your team stays accountable to revenue.",
    bullets: [
      "Lead scoring, routing, and nurture sequences tied to pipeline stages",
      "Creative variant generation for ads and email with brand guardrails",
      "Automated performance snapshots and anomaly alerts",
      "Integration with Meta, Google, HubSpot, Notion, Slack, and custom APIs",
    ],
    deliverables: [
      "Automation architecture diagram",
      "Implemented workflows + documentation",
      "Dashboard for ops and leadership",
    ],
    idealFor: "Teams drowning in manual reporting or slow lead response.",
  },
  {
    id: "ads-management",
    title: "Ads Management",
    tag: "Performance Media",
    thumbnail: "/images/services/service-ads.png",
    summary:
      "Search, social, and programmatic — built on testing discipline and clear attribution.",
    description:
      "We run paid media as a system: audience design, offer testing, creative rotation, and budget allocation that compounds learning. You get transparent narratives on what moved — not vanity metrics — plus creative feedback loops with our design team.",
    bullets: [
      "Full-funnel campaign structure (awareness → consideration → conversion)",
      "Audience research, exclusions, and lookalike strategy",
      "Creative testing matrices aligned to platform best practices",
      "Weekly optimization cadence with documented hypotheses",
    ],
    deliverables: [
      "Media plan and channel mix",
      "Live campaigns + optimization log",
      "Monthly performance review deck",
    ],
    idealFor: "Brands ready to scale spend with structure, not guesswork.",
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    tag: "Brand Visuals",
    thumbnail: "/images/services/service-design.png",
    summary:
      "Identity systems and campaign kits — restrained, premium, built for multi-channel use.",
    description:
      "From logo refinements to full campaign visual systems, we produce assets that feel cohesive across social, ads, print, and web. Our aesthetic leans dark, editorial, and high-contrast — with lime or brand accents used intentionally, not everywhere.",
    bullets: [
      "Brand guidelines, typography, and color systems",
      "Social templates, ad sets, and story formats",
      "Pitch decks, one-pagers, and sales collateral",
      "Motion-ready layouts for video and Reels overlays",
    ],
    deliverables: [
      "Master brand kit (Figma / Adobe)",
      "Campaign asset packages per channel",
      "Export specs for dev and media buyers",
    ],
    idealFor: "Brands that need one visual language across every touchpoint.",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    tag: "Post Production",
    thumbnail: "/images/services/service-video.png",
    summary:
      "Short-form and hero edits with rhythm-first cuts and platform-native pacing.",
    description:
      "We edit for retention and clarity: hook in the first second, brand visible throughout, CTA earned at the end. Sound design, captions, and aspect ratios are handled per platform — vertical for Reels/TikTok, cinematic for YouTube and web heroes.",
    bullets: [
      "UGC-style ads, promos, and product highlights",
      "Captioning, supers, and end-card templates",
      "Color grade and audio mix for premium finish",
      "Versioning for A/B tests across Meta and TikTok",
    ],
    deliverables: [
      "Master edits + platform exports",
      "Thumbnail / cover frames",
      "Asset library for paid and organic reuse",
    ],
    idealFor: "Campaigns that need scroll-stopping motion without a full production crew.",
  },
  {
    id: "content-production",
    title: "Content Production",
    tag: "Studio Content",
    thumbnail: "/images/services/service-content.png",
    summary:
      "Editorial calendars, shoots, and copy — from launch narratives to always-on social.",
    description:
      "We plan and produce content as a system: pillars, formats, and publishing rhythm aligned to your funnel. Copy is engineered for clarity; visuals are shot or designed for the channel they live on — not repurposed as an afterthought.",
    bullets: [
      "Content strategy and 90-day editorial calendars",
      "Scripting for video, carousels, and long-form posts",
      "On-brand photography direction and art direction",
      "Community-ready captions and hashtag frameworks",
    ],
    deliverables: [
      "Content playbook",
      "Batch-produced posts and assets",
      "Performance notes per content pillar",
    ],
    idealFor: "Brands that want consistency without hiring a full in-house studio.",
  },
  {
    id: "web-design",
    title: "Web Design",
    tag: "Performance UX",
    thumbnail: "/images/services/service-web.png",
    summary:
      "Marketing sites and landing pages — fast, accessible, and built to convert.",
    description:
      "We design and build web experiences that match your brand’s premium positioning: semantic structure, mobile-first layouts, and performance budgets from day one. Whether Next.js, Webflow, or handoff to your dev team, the output is production-ready.",
    bullets: [
      "Marketing sites, launch pages, and funnel landers",
      "Design systems and component libraries",
      "Core Web Vitals–minded implementation",
      "Analytics, forms, and CRM integration setup",
    ],
    deliverables: [
      "Figma designs + responsive specs",
      "Live site or dev-ready build",
      "Launch QA and analytics checklist",
    ],
    idealFor: "Teams whose site should sell as hard as their ads do.",
  },
];

/** Short rows for home + nav previews */
export const servicesPreview = services.map((s) => ({
  id: s.id,
  title: s.title,
  description: s.summary,
  tag: s.tag,
  thumbnail: s.thumbnail,
}));
