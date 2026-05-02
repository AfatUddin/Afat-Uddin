import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        display: [
          '"SF Pro Display"',
          "InterVariable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        sans: [
          "InterVariable",
          "Inter",
          '"SF Pro Text"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        ink: {
          50: "#f7f7f8",
          100: "#eeeef1",
          200: "#d9d9df",
          300: "#b8b8c2",
          400: "#8e8e9b",
          500: "#6b6b77",
          600: "#4c4c56",
          700: "#37373f",
          800: "#23232a",
          900: "#15151a",
          950: "#0a0a0d",
        },
        accent: {
          DEFAULT: "#5b6cff",
          50: "#eef0ff",
          100: "#dde2ff",
          200: "#bcc6ff",
          300: "#8f9eff",
          400: "#6776ff",
          500: "#5b6cff",
          600: "#4452ee",
          700: "#3640c4",
          800: "#2c349a",
          900: "#1f2470",
        },
        gold: {
          DEFAULT: "#d6a85a",
          400: "#e0b878",
          500: "#d6a85a",
          600: "#b78a3f",
        },
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(15,15,20,0.06) 1px, transparent 0)",
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,15,20,0.04), 0 4px 16px rgba(15,15,20,0.06)",
        glow: "0 10px 60px -20px rgba(91,108,255,0.45)",
        ring: "0 0 0 1px rgba(15,15,20,0.06)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        "near-tight": "-0.015em",
      },
      animation: {
        "fade-up": "fadeUp .8s cubic-bezier(.22,1,.36,1) both",
        "shine": "shine 6s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
