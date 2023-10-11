/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#222",
        backgroundLight: "#333",
        primary: {
          DEFAULT: "#42687D",
          200: "#A2BBCB",
          300: "#809FB3",
          400: "#688AA0",
          500: "#42687D",
          600: "#42687D",
          700: "#335467",
          800: "#264252",
          900: "#152D3A",
        },
        success: {
          DEFAULT: "#44AA99",
          200: "#8ACEC3",
          300: "#809FB3",
          400: "#44AA99",
          500: "#359A88",
          600: "#F29F4C",
          700: "#2C7D6C",
        },
        error: {
          DEFAULT: "#CC6677",
          200: "#D67A8C",
          300: "#809FB3",
          400: "#CC6677",
          500: "#C45A65",
          600: "#B45461",
          700: "#9E4E5B",
          800: "#884955",
          900: "#653C48",
        },
      },
    },
  },
  plugins: [],
};
