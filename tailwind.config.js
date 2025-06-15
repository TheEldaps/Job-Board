// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         nelda: ["Nelda", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Rubik Bubbles", "sans-serif"],
//       },
//     },
//   },
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        Nelda: ["Nelda", "sans-serif"], // Define custom font
      },
    },
  },
  plugins: [],
};
