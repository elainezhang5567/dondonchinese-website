import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — see README "Design tokens"
        ink: {
          DEFAULT: "#0B0D0C", // main background
          soft: "#131412", // secondary, slightly warmer charcoal
          lift: "#1A1B18", // lighter warm charcoal for contrast sections (menu)
          line: "#26272A", // hairline borders
        },
        ivory: {
          DEFAULT: "#F4F0E8", // primary text
          muted: "#9C968C", // secondary text
        },
        brand: {
          red: "#A52A1D", // deep Chinese red — used sparingly
          gold: "#B8975E", // subtle warm gold accent
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(184, 151, 94, 0.35)",
        lift: "0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
