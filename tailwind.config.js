/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "noux-purple": "#6300FF",
      white: "#FFFFFF",
      black: "#000000",
      "noux-gray": "#D9D9D9",
      "noux-violet": "#D4DBFF",
      "noux-white": "#F6F1FD",
      "noux-dark-purple": "#110326",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
