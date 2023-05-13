import { type Config } from "tailwindcss";

/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-noto-serif)", ...fontFamily.serif],
        sans: ["var(--font-noto-sans)", ...fontFamily.sans],
      },
      colors: {
        olive: {
          100: "#f5f7f2",
          // background
          400: "#9ca486",
          // heading
          600: "#748238",
          // text
          800: "#526632",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
