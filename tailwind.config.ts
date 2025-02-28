import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lily_white: "#e2ebe8",
        contact_red: "#BD351F",
        project_green: "#B8C269",
        peach: "#F8CBA1",
        linkedin_blue: "#5E84C5",
        gray_light_blue: "#AECAE0",
      },
      spacing: {
        small_icon: "2rem",
        medium_icon: "3rem",
      },
      fontFamily: {
        sans: ["var(--font-elza)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
