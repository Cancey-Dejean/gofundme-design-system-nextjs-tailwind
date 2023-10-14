import type { Config } from "tailwindcss"

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

      colors: {
        black: "var(--color-black)",
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
        },
        neutral: {
          100: "var(--color-neutral-grey-100)",
          200: "var(--color-neutral-grey-200)",
          300: "var(--color-neutral-grey-300)",
        },
        violet: {
          50: "#ebe9f0",
          100: "#c2bbd0",
          200: "#a49aba",
          300: "#7b6c9a",
          400: "#615086",
          500: "#3a2468",
          600: "#35215f",
          700: "#291a4a",
          800: "#201439",
          900: "#180f2c",
        },
        navy: "#01485C",
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
}
export default config
