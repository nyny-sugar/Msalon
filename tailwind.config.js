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
      base_c: "#E5D5C6",
      main: "#C97D68",
      main_h: "#ab624f",
      accent: "#a0ab8f",
      black: "#444444",
      white: "#FFFFFF",
      white_h: "#f0f0f0",
      gray: "#C6C3C3",
      gray_h: "#716F6F",
    },
    fontFamily: {
      body: ["YuGothic", "Yu Gothic", "sans-serif"],
    },
    aspectRatio: {
      "16/9": "1920/1080",
      "4/3": "4/3",
    },
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadein: "fadein 1.5s ease-in-out",
      },
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
  },
};
