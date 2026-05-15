"use client";

import { useLenis } from "@/components/providers/LenisContext";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const prevPath = useRef<string | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    registerGsap();
    const content = contentRef.current;
    const curtain = curtainRef.current;
    if (!content || !curtain) return;

    // Always keep curtain off-screen unless we are mid-transition
    gsap.set(curtain, { yPercent: 100, autoAlpha: 1 });

    const isRouteChange =
      mounted.current && prevPath.current !== null && prevPath.current !== pathname;

    prevPath.current = pathname;
    mounted.current = true;

    if (!isRouteChange) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(curtain, { yPercent: 100 });
        ScrollTrigger.refresh();
      },
    });

    tl.set(curtain, { yPercent: 100 })
      .to(curtain, { yPercent: 0, duration: 0.4 })
      .to(content, { opacity: 0, y: -16, duration: 0.2 }, 0)
      .call(() => {
        window.scrollTo(0, 0);
        lenis?.scrollTo(0, { immediate: true });
      })
      .set(content, { opacity: 0, y: 20 })
      .to(curtain, { yPercent: -100, duration: 0.45 })
      .to(content, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, "-=0.3");

    return () => {
      tl.kill();
      gsap.set(curtain, { yPercent: 100 });
    };
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps -- lenis read at transition time only

  return (
    <>
      <div
        ref={curtainRef}
        className="page-curtain pointer-events-none fixed inset-0 z-[90] bg-[var(--accent)]"
        aria-hidden
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
}
