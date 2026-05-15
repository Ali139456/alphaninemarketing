"use client";

import { TextReveal } from "@/components/animations/TextReveal";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="page-hero relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(163,230,53,0.08),transparent)]"
        aria-hidden
      />

      <div className="container-orixo page-hero__inner">
        <TextReveal
          as="h1"
          className="page-hero__title display-xl text-white"
          delay={0.12}
          split="lines"
        >
          {title}
        </TextReveal>
        {description ? (
          <p className="page-hero__desc">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
