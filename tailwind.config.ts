import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0B0A08",
          soft: "#14110D",
          panel: "#1A1611",
        },
        ivory: {
          DEFAULT: "#F4EFE6",
          dim: "#C9C0AE",
          faint: "#8F8676",
        },
        gold: {
          DEFAULT: "#B8923B",
          bright: "#E7C873",
          dim: "#7A6229",
        },
        saffron: {
          DEFAULT: "#C9691F",
          deep: "#9C4E18",
        },
        vermilion: {
          DEFAULT: "#7A2230",
          bright: "#A32E3F",
        },
        ganga: {
          DEFAULT: "#111E30",
          light: "#1E3350",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2.1rem, 4vw, 3.5rem)", { lineHeight: "1.08" }],
        "display-sm": ["clamp(1.6rem, 2.6vw, 2.25rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
        gutter: "clamp(1.5rem, 6vw, 6rem)",
      },
      maxWidth: {
        editorial: "1440px",
        prose: "42rem",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "6px",
        lg: "10px",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "diya-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(231,200,115,0.18) 0%, rgba(231,200,115,0) 70%)",
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.82" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        risefade: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 3.4s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
        risefade: "risefade 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
