"use client";

import { Logo } from "@/components/Logo";
import { gsap, registerGsap } from "@/lib/gsap";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "a9-preloader-seen";

function finish(setVisible: (v: boolean) => void) {
  sessionStorage.setItem(STORAGE_KEY, "1");
  setVisible(false);
  document.body.style.overflow = "";
}

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Decide whether to show (after mount so sessionStorage is available)
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
    document.body.style.overflow = "hidden";
  }, []);

  // Run animation only after the overlay is in the DOM (refs exist)
  useEffect(() => {
    if (!visible) return;

    const overlay = overlayRef.current;
    const bar = barRef.current;
    if (!overlay || !bar) return;

    registerGsap();

    const failsafe = window.setTimeout(() => finish(setVisible), 4000);

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(failsafe);
        finish(setVisible);
      },
    });

    tl.to(bar, { width: "100%", duration: 1.1, ease: "power2.inOut" })
      .to(overlay, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        delay: 0.15,
      })
      .to(overlay, { opacity: 0, duration: 0.2 }, "-=0.15");

    return () => {
      clearTimeout(failsafe);
      tl.kill();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="preloader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--bg)]"
      aria-hidden
    >
      <Logo size={72} priority />
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-dim)]">
        Loading experience
      </p>
      <div className="preloader__track mt-10 h-px w-48 overflow-hidden bg-[var(--border)]">
        <div ref={barRef} className="preloader__bar h-full w-0 bg-[var(--accent)]" />
      </div>
    </div>
  );
}
