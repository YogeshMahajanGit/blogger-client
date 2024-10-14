import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        sh4: {
          "50%": { width: "60px", height: "60px", transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        sh4: "sh4 1.5s infinite cubic-bezier(0.3, 1, 0, 1)",
      },
      backgroundImage: {
        "shapes-4": `
          conic-gradient(from -45deg at top 20px left 50%, #111, currentColor 1deg 90deg, #111 91deg),
          conic-gradient(from 45deg at right 20px top 50%, #111, currentColor 1deg 90deg, #111 91deg),
          conic-gradient(from 135deg at bottom 20px left 50%, #111, currentColor 1deg 90deg, #111 91deg),
          conic-gradient(from -135deg at left 20px top 50%, #111, currentColor 1deg 90deg, #111 91deg)
        `,
      },
    },
  },

  plugins: [],
};
export default config;
