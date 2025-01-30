import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('https://picsum.photos/1920/1920/?random&blur')",
        "body-img": "url('https://picsum.photos/1600/1600/?random')",
      },
      backgroundColor: {
        guinda: "#800040",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
} satisfies Config;
