"use client";

import { useEffect, useRef } from "react";

/** Autoplay muted video when visible; replays when scrolled back into view. */
export function useAutoplayVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const play = () => {
      if (!video) return;
      video.play().catch(() => {});
    };

    play();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.15, rootMargin: "50px" }
    );

    observer.observe(video);

    const onVisibility = () => {
      if (document.visibilityState === "visible") play();
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return ref;
}
