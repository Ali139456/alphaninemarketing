export type PortfolioItem = {
  id: string;
  title: string;
  tag: string;
  campaign: string;
  type: "image" | "video";
  variant: "feature" | "wide" | "tall" | "video" | "video-feature";
  section: "ugc" | "ai";
  src: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "gelato-video",
    title: "Gelato bar motion ad",
    tag: "Motion ad",
    campaign: "Food & beverage",
    type: "video",
    variant: "video-feature",
    section: "ugc",
    src: "/videos/portfolio/gelato.mp4",
  },
  {
    id: "reel-five",
    title: "Vertical video ad",
    tag: "Video edit",
    campaign: "Roadking",
    type: "video",
    variant: "video",
    section: "ai",
    src: "/videos/portfolio/roadking-vertical.mp4",
  },
  {
    id: "reel-one",
    title: "Roadking promotional reel",
    tag: "Video edit",
    campaign: "Roadking",
    type: "video",
    variant: "video",
    section: "ai",
    src: "/videos/portfolio/roadking-promo.mp4",
  },
  {
    id: "reel-three",
    title: "Roadking ad cut",
    tag: "Video edit",
    campaign: "Roadking",
    type: "video",
    variant: "video",
    section: "ai",
    src: "/videos/portfolio/roadking-ads.mp4",
  },
  {
    id: "reel-four",
    title: "Promotional ad edit",
    tag: "Video edit",
    campaign: "Roadking",
    type: "video",
    variant: "video",
    section: "ai",
    src: "/videos/portfolio/roadking-promotional.mp4",
  },
  {
    id: "vibe-grid",
    title: "Editorial apparel grid",
    tag: "Campaign grid",
    campaign: "Fashion creative",
    type: "image",
    variant: "feature",
    section: "ugc",
    src: "/images/portfolio/grid.jpeg",
  },
  {
    id: "eco-board",
    title: "Eco mobility moodboard",
    tag: "Moodboard",
    campaign: "Brand direction",
    type: "image",
    variant: "wide",
    section: "ugc",
    src: "/images/portfolio/moodboard.jpeg",
  },
  {
    id: "food-board",
    title: "Restaurant brand board",
    tag: "Moodboard",
    campaign: "Food campaign",
    type: "image",
    variant: "wide",
    section: "ugc",
    src: "/images/portfolio/restaurant-board.jpeg",
  },
  {
    id: "vibe-post",
    title: "Multi-panel social post",
    tag: "Social post",
    campaign: "Fashion creative",
    type: "image",
    variant: "tall",
    section: "ugc",
    src: "/images/portfolio/social-post.jpeg",
  },
  {
    id: "kart-hero",
    title: "Go-karting key visual",
    tag: "Hero post",
    campaign: "Sports leisure",
    type: "image",
    variant: "tall",
    section: "ugc",
    src: "/images/portfolio/go-karting.jpeg",
  },
];

export const portfolioSections = [
  {
    id: "ugc" as const,
    eyebrow: "UGC & Campaign Creative",
    title: "User-generated and campaign-led visual work.",
    description:
      "Real social posts, creative grids, moodboards, and branded content arranged as a premium showcase.",
    itemIds: [
      "gelato-video",
      "vibe-grid",
      "vibe-post",
      "kart-hero",
      "eco-board",
      "food-board",
    ],
  },
  {
    id: "ai" as const,
    eyebrow: "AI & Motion",
    title: "AI-crafted motion and ad creatives.",
    description:
      "Roadking video assets produced for faster concept generation, campaign testing, and polished promo outputs.",
    itemIds: ["reel-five", "reel-one", "reel-three", "reel-four"],
  },
];

/** Four highlight pieces for the home page bento grid */
export const homePortfolioItems: PortfolioItem[] = [
  portfolioItems.find((i) => i.id === "gelato-video")!,
  portfolioItems.find((i) => i.id === "vibe-grid")!,
  portfolioItems.find((i) => i.id === "reel-one")!,
  portfolioItems.find((i) => i.id === "kart-hero")!,
];

export const featuredPortfolio = homePortfolioItems;
