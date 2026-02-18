import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F16B01",
        "primary-hover": "#D95E01",
        dark: "#101103",
        "dark-light": "#2A2A2D",
        secondary: "#344966",
        surface: "#F7F7F7",
        border: "#E5E5E5",
        success: "#16A34A",
        error: "#DC2626",
      },
      fontFamily: {
        sans: ['var(--font-opensans)', '"Open Sans"', "sans-serif"],
        display: ['var(--font-poppins)', '"Poppins"', "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
