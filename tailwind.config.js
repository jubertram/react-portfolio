const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        grey: "#2d2e32",
        mediumGray: "#555",
        green: "#3C887E",
        lightGray: "#f9f9f9",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
