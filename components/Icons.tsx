// Minimal line icons in an arch / lamp motif, drawn as inline SVG so no
// icon library dependency is required for a small fixed set of glyphs.
type IconProps = { className?: string };

const base = "h-6 w-6 stroke-gold-bright stroke-[1.2] fill-none";

export function ArchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 20V11a8 8 0 0 1 16 0v9" strokeLinecap="round" />
      <path d="M4 20h16" strokeLinecap="round" />
    </svg>
  );
}

export function CarIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 16V12l2-5h12l2 5v4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16h16M7 16v2M17 16v2" strokeLinecap="round" />
      <circle cx="7.5" cy="16" r="1.2" />
      <circle cx="16.5" cy="16" r="1.2" />
    </svg>
  );
}

export function GuideIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M5 20c0-3.9 3.13-7 7-7s7 3.1 7 7" strokeLinecap="round" />
    </svg>
  );
}

export function FlameIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1.5-1-2-1-3.5 2 1 3 3.3 3 5.5a5 5 0 0 1-10 0C7 8.5 10 6.5 12 3Z" strokeLinejoin="round" />
      <path d="M6 21h12" strokeLinecap="round" />
    </svg>
  );
}

export function BoatIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 15h16l-2 5H6l-2-5Z" strokeLinejoin="round" />
      <path d="M12 15V4M12 4c2.5 0 4 1.8 4 4h-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BowlIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 11h16a8 8 0 0 1-16 0Z" strokeLinejoin="round" />
      <path d="M9 11c0-2 1-3 3-3s3 1 3 3" strokeLinecap="round" />
    </svg>
  );
}

export function SupportIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M6.3 6.3l3.2 3.2M17.7 6.3l-3.2 3.2M6.3 17.7l3.2-3.2M17.7 17.7l-3.2-3.2" />
    </svg>
  );
}

export function ScrollIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6 4h11a2 2 0 0 1 2 2v13a1 1 0 0 1-1.5.87L15 18l-2.5 1.87L10 18l-2.5 1.87L5 18V6a2 2 0 0 1 1-1.73" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M9 9h6M9 12.5h6" strokeLinecap="round" />
    </svg>
  );
}
