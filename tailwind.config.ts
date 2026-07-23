import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EFE9DD",
        surface: "#FFFFFF",
        ink: "#2B2620",
        inkmuted: "#6B6252",
        line: "#D8CFBE",
        teal: {
          DEFAULT: "#1F6F5C",
          dark: "#164F41",
        },
        rust: {
          DEFAULT: "#C9622A",
          dark: "#A34D1F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        card: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
