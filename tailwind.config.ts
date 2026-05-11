import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        naya: {
          bg:              "#030308",
          surface:         "#0C0C18",
          "surface-2":     "#111128",
          border:          "#1E1E3A",
          "border-light":  "#2A2A50",
          primary:         "#7C3AED",
          "primary-light": "#A78BFA",
          "primary-dark":  "#5B21B6",
          accent:          "#06B6D4",
          "accent-light":  "#67E8F9",
          gold:            "#F59E0B",
          muted:           "#6B7280",
          text:            "#F3F4F6",
          "text-secondary":"#9CA3AF",
          "text-muted":    "#4B5563",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "aurora": "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(124,58,237,0.5) 0%, rgba(6,182,212,0.15) 45%, transparent 70%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
      },
      animation: {
        "pulse-slow":  "pulse 5s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":       "float 7s ease-in-out infinite",
        "float-slow":  "float 10s ease-in-out infinite",
        "marquee":     "marquee 28s linear infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-18px) rotate(2deg)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-purple":    "0 0 50px rgba(124,58,237,0.3)",
        "glow-purple-sm": "0 0 25px rgba(124,58,237,0.2)",
        "glow-cyan":      "0 0 50px rgba(6,182,212,0.2)",
        "card":           "0 1px 1px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover":     "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.2)",
        "inner-glow":     "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
