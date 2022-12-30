/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //font-family: 'Pacifico', cursive;
        //'Raleway', sans-serif font-family: 'Playfair Display SC', serif;
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        sevillana: ["Sevillana", "cursive"],
        playfair: ["Playfair Display SC", "serif"],
      },
    },
  },
  plugins: [],
};
