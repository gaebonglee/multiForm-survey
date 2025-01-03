/** @type {import('tailwindcss').Config} */
import colors from "./tailwind/color";

export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: { colors },
  },
  plugins: [],
};
