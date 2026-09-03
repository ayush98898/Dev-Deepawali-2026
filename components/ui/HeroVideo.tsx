"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  webm: string;
  mp4: string;
  poster: string;
  className?: string;
};

/**
 * Background video for the hero. Falls back to nothing (revealing the CSS
 * atmosphere behind it) if the files aren't present yet, and is skipped
 * entirely for prefers-reduced-motion — the poster/gradient stand in instead.
 */
export default function HeroVideo({ webm, mp4, poster, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (failed || reducedMotion) {
    return <MediaPoster src={poster} className={className} />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      onError={() => setFailed(true)}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}

function MediaPoster({ src, className }: { src: string; className: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
