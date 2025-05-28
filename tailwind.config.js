/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      width: {
        contain: '1182px'
      },
      color: {
        basic: "#169976"
      }
    },
  },
  plugins: [flowbite.plugin()],
};
