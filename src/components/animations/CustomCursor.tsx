"use client";

import { gsap, registerGsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    registerGsap();
    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    const setDot = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRing = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDot(mouseX);
      setDotY(mouseY);
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      setRing(ringX);
      setRingY(ringY);
    };

    gsap.ticker.add(tick);

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const mode = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const text = target.closest("[data-cursor-label]")?.getAttribute("data-cursor-label");

      gsap.to(ring, {
        scale: mode === "view" ? 2.8 : mode === "drag" ? 1.6 : 1.5,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: 0, duration: 0.25 });

      if (label && text) {
        label.textContent = text;
        gsap.to(label, { opacity: 1, scale: 1, duration: 0.3 });
      }
    };

    const onLeave = () => {
      gsap.to(ring, { scale: 1, duration: 0.35, ease: "power3.out" });
      gsap.to(dot, { scale: 1, duration: 0.25 });
      if (label) gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.25 });
    };

    const onDown = () => gsap.to(ring, { scale: 0.9, duration: 0.15 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.2 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const interactive = "a, button, [data-cursor], [data-cursor-label], .btn-orixo, input, textarea, select, label";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      gsap.ticker.remove(tick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden>
      <div ref={ringRef} className="custom-cursor__ring">
        <span ref={labelRef} className="custom-cursor__label" />
      </div>
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
