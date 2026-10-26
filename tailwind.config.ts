import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F80FF",
        "primary-contrast": "#FFFFFF",
        secondary: "#202020",
        tertiary: "#E5E7EB",
        neutral: "#F7F7F8",
        surface: "var(--surface)",
        "on-surface": "var(--text)",
        error: "#EF4444",
        border: "var(--border)",
        muted: "var(--text-dim)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        full: "9999px",
      },
      spacing: {
        xs: "2px",
        sm: "6px",
        md: "14px",
        lg: "24px",
        xl: "64px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        'button-primary': '0 1px 2px rgba(63, 128, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
