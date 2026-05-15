import Link from "next/link";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
};

export function LinkArrow({ href, children }: LinkArrowProps) {
  return (
    <Link href={href} className="link-arrow group">
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
