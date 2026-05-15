import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";
import Link from "next/link";

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-modern relative mt-auto overflow-hidden border-t border-[var(--border)]">
      <div className="footer-modern__glow pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />
      <div className="footer-modern__glow-soft pointer-events-none absolute -top-32 left-1/2 h-64 w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />

      <div className="container-orixo relative">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="footer-modern__brand col-span-2 lg:col-span-5">
            <Link href="/" className="inline-block" aria-label="Home">
              <Logo size={48} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="footer-modern__social-pill"
                >
                  {social.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>

          <nav
            className="lg:col-span-3 lg:col-start-7"
            aria-label="Footer navigation"
          >
            <p className="footer-modern__label">Navigate</p>
            <ul className="mt-5 space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="hover"
                    className="footer-modern__link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="footer-modern__label">Connect</p>
            <ul className="mt-5 space-y-4">
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-cursor="hover"
                  className="footer-modern__contact mt-1 inline-block"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                  Phone
                </span>
                <a
                  href={siteConfig.phoneHref}
                  data-cursor="hover"
                  className="footer-modern__contact mt-1 inline-block"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--text-dim)]" suppressHydrationWarning>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            Remote-first · Serving ambitious brands worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
