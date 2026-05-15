import { ButtonOrixo } from "@/components/ui/ButtonOrixo";

type CtaCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
};

export function CtaCard({
  eyebrow = "Let's work together",
  title = "Ready to scale your brand?",
  description = "Tell us where you are today — we'll map the fastest path to growth.",
  buttonLabel = "Start a project",
  buttonHref = "/contact",
  className = "",
}: CtaCardProps) {
  return (
    <div className={`cta-card ${className}`.trim()}>
      <div className="cta-card__content">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h2 className="display-md max-w-xl text-white">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      <div className="cta-card__action shrink-0">
        <ButtonOrixo href={buttonHref}>{buttonLabel}</ButtonOrixo>
      </div>
    </div>
  );
}
