/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#2d2e32",
        mediumGray: "#555",
        green: "#3C887E",
        lightGray: "#f9f9f9",
      }
    },
  },
  plugins: [],
}
