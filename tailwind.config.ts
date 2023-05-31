import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navy: "#002F6C",
        "navy-hover": "#0050B8",
        rose: "#c18e98",
        "rose-hover": "#e3b5b9",
      },
    },
  },
  plugins: [],
} satisfies Config;
