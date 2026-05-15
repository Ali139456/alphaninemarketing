import "./BrandMark.css";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact }: BrandMarkProps) {
  return (
    <div className={`brand-mark${compact ? " brand-mark--compact" : ""}`}>
      <span className="brand-mark__top">Alpha Nine</span>
      <span className="brand-mark__bottom">
        <span className="brand-mark__line" aria-hidden />
        <span className="brand-mark__sub">Marketing</span>
        <span className="brand-mark__line" aria-hidden />
      </span>
    </div>
  );
}
