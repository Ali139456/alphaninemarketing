import { Magnetic } from "@/components/animations/Magnetic";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonOrixoProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "sm";
  className?: string;
  type?: "button" | "submit";
};

function Arrow() {
  return (
    <span className="btn-orixo__arrow" aria-hidden>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M1 13L13 1M13 1H4M13 1V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function ButtonOrixo({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
}: ButtonOrixoProps) {
  const classes = `btn-orixo btn-orixo--${variant} ${size === "sm" ? "btn-orixo--sm" : ""} ${className}`.trim();

  if (href) {
    return (
      <Magnetic strength={0.25}>
        <Link href={href} className={classes} data-cursor="hover">
          <span>{children}</span>
          <Arrow />
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.25}>
      <button type={type} className={classes} data-cursor="hover">
        <span>{children}</span>
        <Arrow />
      </button>
    </Magnetic>
  );
}
