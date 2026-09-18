import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design tokens sourced from the approved Velora Stitch HTML designs
      // (Industries & Partnerships, Let's talk / Contact, News & Updates).
      colors: {
        brand: {
          blue: "#2563EB",
          dark: "#1D4ED8",
          navy: "#0B1E48",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
