"use client";

import { useAutoplayVideo } from "@/hooks/useAutoplayVideo";
import { useState } from "react";

type AutoplayVideoProps = {
  src: string;
  className?: string;
  fallback?: string;
};

export function AutoplayVideo({
  src,
  className = "h-full w-full object-cover",
  fallback = "Video unavailable",
}: AutoplayVideoProps) {
  const ref = useAutoplayVideo();
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full min-h-[200px] items-center justify-center bg-[var(--bg)] text-sm text-[var(--text-dim)]">
        {fallback}
      </div>
    );
  }

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      onError={() => setError(true)}
      aria-hidden
    />
  );
}
