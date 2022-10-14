/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cake1: "url('/assets/cake1.jpg')",
        cake2: "url('/assets/cake2.jpg')",
        coffee1: "url('/assets/coffee1.jpg')",
        iceCream1: "url('/assets/ice-cream1.jpg')",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
