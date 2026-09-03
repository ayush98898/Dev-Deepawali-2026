import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest2 transition-all duration-300 ease-cinematic focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold-bright";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-charcoal hover:bg-gold-bright hover:-translate-y-0.5",
  secondary: "border border-ivory/30 text-ivory hover:border-gold-bright/70 hover:text-gold-bright",
  ghost: "text-ivory/80 hover:text-gold-bright",
  whatsapp: "bg-[#16281F] text-ivory border border-gold-dim/60 hover:border-gold-bright hover:text-gold-bright",
};

export default function Button({ href, children, variant = "primary", className = "", external = false }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
