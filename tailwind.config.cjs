/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hero: "#FCEED5",
        "dark-blue": "#103559",
        "moon-yellow": "#F7DBA7",
        "neutral-100": "#00171F",
        "neutral-60": "#667479",
        "neutral-80": "#242B33",
        "neutral-40": "#99A2A5",
        "neutral-20": "#CCD1D2",
        "neutral-10": "#EBEEEF",
        "dark-blue-80": "#002A48",
        adoption: "#FFB775",
        "blue-sea": "#00A7E7",
      },
      fontFamily: {
        gilroy: ['"SVN-Gilroy"', "sans-serif"],
      },
      gridTemplateColumns: {
        "2-185px": "repeat(2, 185px)",
        "2-280px": "repeat(2, 280px)",
        "1-380px": "repeat(1, 380px)",
        "2-380px": "repeat(2, 380px)",
        "3-380px": "repeat(3, 380px)",
        "3-280px": "repeat(3, 280px)",
        "4-280px": "repeat(4, 280px)",
        "1-max-content": "max-content",
        "2-max-content": "repeat(2, max-content)",
        "3-max-content": "repeat(3, max-content)",
        "max-1fr": "max-content, 1fr",
      },
      screens: {
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
