/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.body"),
        },
        html: {
          scrollBehavior: "smooth",
        },
      });
    }),
  ],
};
