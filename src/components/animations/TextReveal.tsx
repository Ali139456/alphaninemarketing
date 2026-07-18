"use client";

import { gsap, registerGsap } from "@/lib/gsap";
import { useLayoutEffect, useRef } from "react";

type TextRevealProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  split?: "lines" | "words";
};

export function TextReveal({
  children,
  as: Tag = "h1",
  className = "",
  delay = 0,
  split = "lines",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const inners = el.querySelectorAll(".reveal-inner");
    if (!inners.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(inners, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 105, force3D: true },
        {
          yPercent: 0,
          duration: 1.2,
          stagger: split === "words" ? 0.035 : 0.1,
          delay,
          ease: "expo.out",
          force3D: true,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children, delay, split]);

  if (split === "words") {
    const words = children.split(" ").filter(Boolean);
    return (
      <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="reveal-word inline-block">
            <span className="reveal-inner inline-block will-change-transform">
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  const lines = children.split("\n");
  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line block">
          <span className="reveal-inner block will-change-transform">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
