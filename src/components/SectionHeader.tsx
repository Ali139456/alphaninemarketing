import { ScrollReveal } from "@/components/ScrollReveal";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <ScrollReveal className={`max-w-2xl ${alignClass} flex flex-col ${className}`}>
      <span className="eyebrow">{label}</span>
      <h2 className="mt-5 font-[family-name:var(--font-instrument)] text-3xl font-normal leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
