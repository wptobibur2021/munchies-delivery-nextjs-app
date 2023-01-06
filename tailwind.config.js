/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "hero-section-bg": "#0C1712",
        "btn-bg": "#F3BA00",
        "feature-bg": "#F7F8FA",
      },
      fontFamily: {
        SFProText: ["SFProText"],
        Gilroy: ["Gilroy"],
      },
      colors: {
        searchText: "#929292",
        filterBorder: "#F3BA00",
      },
    },
  },
  plugins: [],
};
