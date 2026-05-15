import Image from "next/image";

type ServiceThumbProps = {
  src: string;
  alt: string;
  size?: "sm" | "md";
};

const sizes = {
  sm: { box: 56, img: 96 },
  md: { box: 72, img: 128 },
};

export function ServiceThumb({ src, alt, size = "sm" }: ServiceThumbProps) {
  const { box, img } = sizes[size];

  return (
    <span
      className="service-thumb relative shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
      style={{ width: box, height: box }}
    >
      <Image
        src={src}
        alt={alt}
        width={img}
        height={img}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        sizes={`${box}px`}
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </span>
  );
}
