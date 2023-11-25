import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-body)",
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      colors: {
        black: "var(--color-black)",
        white: "var(--color-white)",
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
        },
        neutral: {
          100: "var(--color-neutral-grey-100)",
          200: "var(--color-neutral-grey-200)",
          300: "var(--color-neutral-grey-300)",
        },
        violet: {
          100: "var(--color-violet-100)",
          200: "var(--color-violet-200)",
        },
        navy: "var(--color-navy)",
      },
      fontSize: {
        "display-one": ["var(--text-display-one)", "1.1"],
        "display-two": ["var(--text-display-two)", "1.1"],
        "heading-one": "var(--text-heading-one)",
        "heading-two": "var(--text-heading-two)",
        body: "var(--text-body)",
      },
      backgroundImage: {
        "gradient-design": "var(--gradient-design)",
      },
      borderRadius: {
        16: "var(--border-radius-16)",
        56: "var(--border-radius-56)",
      },
      boxShadow: {
        btn: "var(--shadow-btn)",
      },
    },
  },
  plugins: [],
};
export default config;
