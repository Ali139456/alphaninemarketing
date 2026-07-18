"use client";

import { Logo } from "@/components/Logo";
import { navItems } from "@/data/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { gsap, registerGsap } from "@/lib/gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonOrixo } from "./ui/ButtonOrixo";

/** Desktop nav from this width up (laptop+). Below = hamburger menu. */
const DESKTOP_NAV_MQ = "(min-width: 1024px)";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery(DESKTOP_NAV_MQ);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    document.body.style.overflow = open && !isDesktop ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isDesktop]);

  useEffect(() => {
    registerGsap();
    if (!open || isDesktop || !linksRef.current) return;

    const links = linksRef.current.querySelectorAll("li");
    gsap.fromTo(
      links,
      { x: 32, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "expo.out",
      }
    );
  }, [open, isDesktop]);

  return (
    <>
      <header className="nav-modern">
        <div
          className={`nav-modern__bar ${scrolled ? "nav-modern__bar--scrolled" : ""}`}
        >
          <Link
            href="/"
            className="nav-modern__brand"
            aria-label="AlphaNineMarketing home"
          >
            <Logo size={40} priority />
          </Link>

          {isDesktop ? (
            <nav className="nav-modern__desktop" aria-label="Primary">
              <ul className="nav-modern__pills">
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        data-cursor="hover"
                        className={`nav-modern__link ${active ? "nav-modern__link--active" : ""}`}
                      >
                        {active ? (
                          <span className="nav-modern__link-glow" aria-hidden />
                        ) : null}
                        <span className="nav-modern__link-text">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}

          <div className="nav-modern__end">
            <div className="nav-modern__actions">
              <ButtonOrixo href="/contact" variant="primary" size="sm">
                Book a call
              </ButtonOrixo>
            </div>

            {!isDesktop ? (
              <button
                type="button"
                className={`nav-modern__toggle ${open ? "nav-modern__toggle--open" : ""}`}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen(!open)}
              >
                <span />
                <span />
                <span />
              </button>
            ) : null}
          </div>
        </div>
      </header>

      {!isDesktop ? (
        <>
          <div
            className={`offcanvas nav-modern__drawer ${open ? "offcanvas--open" : ""}`}
            aria-hidden={!open}
          >
            <div className="nav-modern__drawer-head">
              <Logo size={36} />
              <button
                type="button"
                className="nav-modern__drawer-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <ul ref={linksRef} className="nav-modern__drawer-links">
              {navItems.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`nav-modern__drawer-link ${active ? "nav-modern__drawer-link--active" : ""}`}
                    >
                      <span className="font-mono text-xs text-[var(--accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="nav-modern__drawer-foot">
              <p className="text-xs text-[var(--text-dim)]">
                Strategy · Creative · Automation
              </p>
              <ButtonOrixo
                href="/contact"
                variant="primary"
                className="w-full justify-center"
              >
                Book a call
              </ButtonOrixo>
            </div>
          </div>

          {open ? (
            <button
              type="button"
              className="nav-modern__backdrop"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
}
