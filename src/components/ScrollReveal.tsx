"use client";

import { gsap, registerGsap } from "@/lib/gsap";
import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    registerGsap();
    const el = ref.current;
    if (!el) return;

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      y: 32,
      opacity: 0,
      duration: 0.6,
      delay,
      ease: "power3.out",
    });
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
