"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { ButtonOrixo } from "@/components/ui/ButtonOrixo";
import { gsap, registerGsap } from "@/lib/gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HomeHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const image = imageRef.current;
    const section = sectionRef.current;
    if (!image || !section) return;

    const ctx = gsap.context(() => {
      gsap.from(image, {
        scale: 1.12,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.to(image, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-hero relative min-h-[100svh] overflow-hidden pt-32 sm:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(163,230,53,0.08),transparent)]" />

      <div className="container-orixo relative flex min-h-[calc(100svh-7rem)] flex-col justify-end pb-16 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow home-hero__eyebrow mb-8 opacity-0 animate-fade-up [animation-delay:0.15s]">
              Digital marketing agency
            </p>

            <TextReveal
              as="h1"
              className="display-xl text-white"
              delay={0.25}
              split="words"
            >
              Scale smarter with AI-powered growth.
            </TextReveal>

            <p className="mt-8 max-w-lg text-lg text-[var(--text-muted)] opacity-0 animate-fade-up [animation-delay:0.7s]">
              Alpha Nine Marketing pairs precision media, automation, and craft
              creative so ambitious brands move faster — without the noise.
            </p>

            <div className="home-hero__ctas mt-10 grid grid-cols-2 gap-2 opacity-0 animate-fade-up [animation-delay:0.9s] sm:flex sm:flex-wrap sm:gap-4">
              <ButtonOrixo href="/contact" className="home-hero__cta">
                Book a strategy call
              </ButtonOrixo>
              <ButtonOrixo href="/portfolio" variant="outline" className="home-hero__cta">
                View our work
              </ButtonOrixo>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)]"
            >
              <Image
                src="/images/brand/hero-marketing.png"
                alt="Digital marketing strategist with AI analytics and campaign dashboards"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
