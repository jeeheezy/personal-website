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
        instrument: ["var(--font-instrument-sans)", "sans-serif"],
        red_hat: ["var(--font-redhat)", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 0 0 4px rgba(255,255,255,0.1),0 0 0 8px rgba(255,255,255,0.1),0 0 20px rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
