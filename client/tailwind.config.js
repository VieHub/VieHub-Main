/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [
    require("daisyui"),
    require("tailwindcss"),
    require("autoprefixer"),
    // require('@tailwindcss/typography'),
  ],
  themes: ["light", "dark"],
  daisyui: {
    darkTheme: "light",
  },
  theme: {
    extend: {
      colors: {
        // ------------ primary ------------
        primary: "#3271ff",
        primaryHover: "#165dff0f",

        // ------------ Text ------------
        // ------------ general ------------
        gray: "#cdcdcd", //gray on hover
        softGray: "#f6f8ff",
        lightGray: "#ffffff99", //gray on hover
        purple: "#7a39ff",
        dodgerblue: "#165dff",
        green: "#039f52",
        "shadow-color": "#0000008f",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      spacing: {
        xss: ".25rem",
        xs: "0.5rem",
        sm: "0.75rem",
        base: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "2.75rem",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
};
