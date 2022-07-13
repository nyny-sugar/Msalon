/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1920px",
    },
    colors: {
      base: "#E5D5C6",
      main: "#C97D68",
      main_h: "#ab624f",
      accent: "#C6CDBC",
      black: "#444444",
      white: "#FFFFFF",
    },
    fontFamily: {
      body: ["YuGothic", "Yu Gothic", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: "360px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
