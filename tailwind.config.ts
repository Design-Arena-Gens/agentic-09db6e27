import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-urbanist)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#4338ca",
          foreground: "#f5f3ff"
        },
        neutral: {
          950: "#0f172a"
        }
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
