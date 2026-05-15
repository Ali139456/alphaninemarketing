"use client";

import { GsapReveal } from "@/components/animations/GsapReveal";
import { CtaCard } from "@/components/CtaCard";

type PageCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function PageCta({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
}: PageCtaProps) {
  return (
    <section className="section pb-8 sm:pb-12">
      <div className="container-orixo">
        <GsapReveal y={40}>
          <CtaCard
            eyebrow={eyebrow}
            title={title}
            description={description}
            buttonLabel={buttonLabel}
            buttonHref={buttonHref}
          />
        </GsapReveal>
      </div>
    </section>
  );
}
