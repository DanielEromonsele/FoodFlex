/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        S320: {max: "320px"},
        S375: {max: "375px"},
        S425: {max: "425px"},
        S670: {max: "670px"},
        S530: {max: "530px"},
        S768: {max: "768px"},
        S900: {max: "900px"},
        S1000: {max: "1024px"},
        S1200: {max: "1200px"}
      }
    },
  },
  plugins: [],
};
