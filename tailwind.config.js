/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "501px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
