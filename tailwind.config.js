/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      width: {
        contain: '1100px'
      },
      background: {
        basic: "#0E2148"
      }
    },
  },
  plugins: [flowbite.plugin()],
};
