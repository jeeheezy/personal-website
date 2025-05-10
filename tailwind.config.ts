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
          "0 0 0 4px rgba(255,255,255,0.1),0 0 30px 8px rgba(255,255,255,0.1),0 0 30px 10px rgba(255,255,255,0.1)",
      },
      inset: {
        "1/8": "12.5%",
        "3/8": "37.5%",
        "5/8": "62.5%",
        "7/8": "87.5%",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(top|right|bottom|left)-(?:1\/8|1\/4|3\/8|1\/2|5\/8|3\/4|7\/8)$/,
    },
    {
      pattern:
        /^-(top|right|bottom|left)-(?:1\/8|1\/4|3\/8|1\/2|5\/8|3\/4|7\/8)$/,
    },
  ],
  plugins: [],
} satisfies Config;
