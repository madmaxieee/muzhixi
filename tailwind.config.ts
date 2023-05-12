import { type Config } from "tailwindcss";

/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-noto-serif)", ...fontFamily.serif],
      },
      colors: {
        olive: {
          // background
          100: "#9ca486",
          // heading
          400: "#748238",
          // text
          800: "#526632",
        },
        offwhite: {
          DEFAULT: "#f5f7f2",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
