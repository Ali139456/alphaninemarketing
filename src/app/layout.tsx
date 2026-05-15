import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Michroma } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Digital Marketing Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AlphaNineMarketing — premium digital marketing, AI automation, ads, content, and web design for brands that want to scale.",
  metadataBase: new URL("https://alphaninemarketing.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${syne.variable} ${instrumentSerif.variable} ${michroma.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col antialiased"
      >
        <AnimationProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
