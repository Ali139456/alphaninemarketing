import Image from "next/image";

/** Official A9 logos from /public/images */
export const LOGO_WHITE = "/images/A9 white.png";
export const LOGO_BLACK = "/images/A9 black.png";

/** Intrinsic dimensions of A9 PNG assets */
const LOGO_INTRINSIC_WIDTH = 1240;
const LOGO_INTRINSIC_HEIGHT = 1718;

type LogoProps = {
  /** White lines on dark backgrounds (default). Use "black" on light surfaces. */
  variant?: "white" | "black";
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "white",
  size = 40,
  className = "",
  priority,
}: LogoProps) {
  const src = variant === "black" ? LOGO_BLACK : LOGO_WHITE;

  return (
    <Image
      src={src}
      alt="Alpha Nine Marketing"
      width={LOGO_INTRINSIC_WIDTH}
      height={LOGO_INTRINSIC_HEIGHT}
      priority={priority}
      sizes={`${size}px`}
      className={`object-contain ${className}`}
      style={{ width: size, height: "auto" }}
    />
  );
}
