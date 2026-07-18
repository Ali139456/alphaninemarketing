"use client";

import { gsap, registerGsap } from "@/lib/gsap";
import { useEffect, useRef, type ReactNode } from "react";

type GsapRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  scale?: number;
};

export function GsapReveal({
  children,
  className = "",
  delay = 0,
  y = 48,
  stagger = 0,
  scale,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    registerGsap();

    const targets =
      stagger > 0 ? (Array.from(el.children) as HTMLElement[]) : [el];

    const travel = Math.min(y, 36);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          y: travel,
          opacity: 0,
          scale: scale ?? 1,
          force3D: true,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.05,
          delay,
          stagger: stagger ? stagger * 0.85 : undefined,
          ease: "expo.out",
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y, stagger, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
