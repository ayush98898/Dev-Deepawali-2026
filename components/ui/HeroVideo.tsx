"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  mp4: string;
  webm?: string;
  poster: string;
  className?: string;
};

/**
 * Background video for the hero. Falls back to nothing (revealing the CSS
 * atmosphere behind it) if the files aren't present yet, and is skipped
 * entirely for prefers-reduced-motion — the poster/gradient stand in instead.
 * mp4/H.264 alone covers every major browser (including Safari, which webm
 * doesn't) — webm is optional, for a smaller file if one is ever added.
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
      {webm && <source src={webm} type="video/webm" />}
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
