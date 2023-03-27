/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robreg: ['robreg'],
        robmedium: ['robmedium'],
        roblight: ['roblight'],
      }
    },
  },
  plugins: [],
}
