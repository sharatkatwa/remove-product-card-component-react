// tailwind.config.js
// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'roboto' is the custom name you will use in your classNames (e.g., 'font-roboto')
        // ["'Roboto'", 'sans-serif'] uses the exact font-family name from Google Fonts
        // bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
