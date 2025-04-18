export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#E5A9A9",
          mint: "#A6D1B9",
          moss: "#83A79D",
          backgroundStart: "#FFF8F6",
          backgroundEnd: "#E3F4EF",
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to bottom right, #FFF8F6, #E3F4EF)',
      },
      fontFamily: {
        syncopate: ['"Syncopate"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};




