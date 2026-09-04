"use client";

import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import HeroVideo from "../ui/HeroVideo";
import { eventDates } from "@/lib/content";

// Deterministic scattered points standing in for distant diyas along the
// ghats — restrained in number and motion, no fabricated photography.
const DIYAS = [
  { top: "78%", left: "8%", size: 3, delay: 0 },
  { top: "82%", left: "16%", size: 2, delay: 0.6 },
  { top: "75%", left: "24%", size: 4, delay: 1.2 },
  { top: "84%", left: "33%", size: 2, delay: 0.2 },
  { top: "79%", left: "42%", size: 3, delay: 1.8 },
  { top: "86%", left: "51%", size: 2, delay: 0.9 },
  { top: "77%", left: "60%", size: 4, delay: 1.5 },
  { top: "83%", left: "69%", size: 2, delay: 0.4 },
  { top: "80%", left: "78%", size: 3, delay: 2.1 },
  { top: "85%", left: "87%", size: 2, delay: 1.1 },
  { top: "73%", left: "92%", size: 3, delay: 0.7 },
  { top: "88%", left: "5%", size: 2, delay: 1.6 },
];

export default function Hero() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!layerRef.current) return;
      const y = window.scrollY;
      layerRef.current.style.transform = `translateY(${Math.min(y * 0.25, 140)}px) scale(${1 + Math.min(y * 0.0002, 0.08)})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      {/* Atmosphere layers */}
      <div ref={layerRef} className="absolute inset-0 will-change-transform">
        <HeroVideo
          mp4="/videos/hero-loop.mp4"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_115%,rgba(201,105,31,0.22)_0%,rgba(201,105,31,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_100%,rgba(231,200,115,0.14)_0%,rgba(231,200,115,0)_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0)_0%,rgba(11,10,8,0.4)_55%,rgba(11,10,8,0.96)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-ganga via-ganga/40 to-transparent opacity-70" />

        {DIYAS.map((d, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute animate-flicker rounded-full bg-gold-bright shadow-[0_0_12px_4px_rgba(231,200,115,0.55)]"
            style={{
              top: d.top,
              left: d.left,
              width: d.size,
              height: d.size,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <div aria-hidden className="absolute inset-0 bg-charcoal/10" />

      {/* Content */}
      <div className="section-shell relative z-10 flex w-full flex-col gap-8 pb-24 pt-40 sm:pb-28">
        <p className="eyebrow">
          {eventDates.range} &nbsp;·&nbsp; {eventDates.duration}
        </p>

        <div>
          <h1 className="font-display text-display-xl italic leading-[0.95] text-ivory">Dev Deepawali</h1>
          <p className="mt-3 font-display text-display-sm text-gold-bright">Varanasi, 2026</p>
        </div>

        <p className="max-w-prose text-lg text-ivory-dim sm:text-xl">
          A 2-Night, 3-Day journey into the divine illumination of Banaras.
        </p>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
          <Button href="#packages" variant="primary">
            Book Your Experience
          </Button>
          <Button href="#journey" variant="secondary">
            Explore the Journey ↓
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 opacity-70">
          <span className="h-10 w-px bg-gradient-to-b from-ivory/60 to-transparent animate-drift" />
          <span className="text-[10px] uppercase tracking-widest2 text-ivory-dim">Scroll</span>
        </div>
      </div>
    </section>
  );
}
