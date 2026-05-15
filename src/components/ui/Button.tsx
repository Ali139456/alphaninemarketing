import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "relative overflow-hidden bg-[var(--accent)] text-black hover:bg-[var(--accent-bright)] shadow-[0_0_32px_var(--accent-glow)] hover:shadow-[0_0_48px_var(--accent-glow)]",
  ghost:
    "border border-white/12 bg-white/[0.03] text-white backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.06]",
  outline:
    "border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent)]/60",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const classes = `${base} ${variants[variant]} ${className}`;

  const shine =
    variant === "primary" ? (
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden
      />
    ) : null;

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`}>
        {shine}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={`group ${classes}`} onClick={onClick}>
      {shine}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
