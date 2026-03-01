/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        base: '#FEF1E5',
        lightGray: '#F2F2F2',
        yellow: '#FFD301',
      },
      backgroundImage: {
        dots: "url('/src/assets/dots.png')",
      },
      screens: {
        'card-bp': '1327px',
      },
    },
  },
  plugins: [],
};
