/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      primary: "#fbfaf1",
      secondary: "#ffce31",
      tertiary: "#ca8a04",
      black: "#020617",
      button: "#334155",
      silver: "#787878",
      red: "#dc2626",
      green: "#22c55e",
      greenHover: "#16a34a",
      slate: "#FFFF",
      border: "#0284c7",
      blue: "#4ade80",
    },
  },
  plugins: [],
};
