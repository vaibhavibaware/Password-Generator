/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}" // ✅ Scan all relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
