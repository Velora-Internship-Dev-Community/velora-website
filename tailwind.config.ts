import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // TODO: replace all placeholder values with the confirmed design tokens from the approved Figma file before building real pages.
      colors: {
        primary: { DEFAULT: "#000000" }, // PLACEHOLDER — replace with confirmed brand color
        paper: "#FFFFFF",
        ink: "#111111", // PLACEHOLDER
      },
      fontFamily: {
        display: ["sans-serif"], // PLACEHOLDER — replace once brand font is confirmed
        body: ["sans-serif"],
      },
      borderRadius: {},
      maxWidth: {
        content: "1180px", // reasonable default content width, adjust as needed
      },
    },
  },
  plugins: [],
};

export default config;
