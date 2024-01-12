/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink": "#F25EA3",
        "purple": "#CE49F2",
        "blue": "#35AAF2",
        "gray": "#D2D6D9",
        "orange": "#F2921D",
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 100,
          },
        },
        fadeOut: {
          "0%": {
            opacity: 100,
          },
          "100%": {
            opacity: 0,
          },
        }
      },
    },
  },
  plugins: [],
};
