"use client";

import { ClientOnly } from "@/components/animations/ClientOnly";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { Preloader } from "@/components/animations/Preloader";
import { LenisContext } from "@/components/providers/LenisContext";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    registerGsap();

    const lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenis(lenisInstance);

    lenisInstance.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(raf);
      lenisInstance.destroy();
      setLenis(null);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <ClientOnly>
        <Preloader />
        <CustomCursor />
      </ClientOnly>
      {children}
    </LenisContext.Provider>
  );
}
