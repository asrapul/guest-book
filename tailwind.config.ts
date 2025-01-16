import { title } from "process";
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
        'merah-telkom':'#E4262C',
      },
      fontFamily:{
        title:["poppins", "serif"],
        weight: "500",
        style: "normal"
      }
    },
  },
  plugins: [],
} satisfies Config;
