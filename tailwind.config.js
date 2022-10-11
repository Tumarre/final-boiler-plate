module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      thunder: ["thunderBlack", "san-serif"],
      thunderOTF: ["thunderBlackOTF", "san-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
