/** @type {import('tailwindcss').Config} */
const {nextui, colors} = require("@nextui-org/react");
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'redDefault': "#f56965",
        'lilaDefault': '#d69afc',
        'whiteDefault': '#e6e6ed',
        'default-black': '#18181b'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}