/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      evergreen: "#426A5A",
      copy: "#304849",
      water: "#3AB7A8",
      bark: "#997B66",
      sun: "#FFCF56",
      backsun: "#FEF5AC",
      backgreen: "#A1E6DA",
    },
  },
  plugins: [],
}
