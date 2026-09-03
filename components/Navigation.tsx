"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { navLinks } from "@/lib/content";

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY.current && y > 160) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-cinematic ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-charcoal/85 backdrop-blur-md border-b border-ivory/10" : "bg-transparent"
        }`}
      >
        <nav className="section-shell flex items-center justify-between py-5" aria-label="Primary">
          <Link href="#top" className="font-display text-sm tracking-widest2 text-ivory">
            WANDERMATE
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest2 text-ivory-dim transition-colors hover:text-gold-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#packages" variant="secondary" className="px-6 py-3 text-[11px]">
              Book Now
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
          >
            <span className={`block h-px w-6 bg-ivory transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ivory transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-px w-6 bg-ivory transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </div>

      <div
        className={`overflow-hidden bg-charcoal/97 backdrop-blur-md transition-[max-height] duration-500 ease-cinematic lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="section-shell flex flex-col gap-5 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest2 text-ivory-dim hover:text-gold-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button href="#packages" variant="primary" className="mt-2 w-full">
              Book Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
