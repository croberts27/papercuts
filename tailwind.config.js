/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      dpurp: "#ff66c4",
      pink: "#fdf1f8",
      teal: "#f1fdf6",
      black: "#000000",
      white: "#ffffff",
      mgreen: "#66ffa1",
      pinker: "#f3aed7",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
