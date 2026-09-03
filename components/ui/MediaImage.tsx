"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

/**
 * An <img> that quietly disappears if its file doesn't exist yet, leaving
 * whatever CSS atmosphere sits behind it (in the DOM, not stacked via
 * z-index) as the visible placeholder. Drop a real file at `src` and it
 * appears on the next load — no code change required.
 */
export default function MediaImage({ src, alt, className = "", eager = false }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
