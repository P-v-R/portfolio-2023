/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FEF1E5",
        lightGray: "#F2F2F2",
        yellow: "#FFD301",
      },
      backgroundImage: {
        dots: "url('/src/assets/dots.png')",
      },
    },
  },
  plugins: [],
};
