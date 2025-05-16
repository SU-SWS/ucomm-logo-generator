/** @type {import("tailwindcss").Config} */

const decanter = require("decanter")

const path = require("path")
const dir = path.resolve(__dirname, "src/styles")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: decanter.theme.fontFamily,
    decanter: decanter.theme.decanter,
    screens: decanter.theme.screens,
    extend: {
      ...decanter.theme.extend,
      screens: {
        "3xl": "1600px",
      },
      containers: {
        "8xl": "80rem",
        "9xl": "90rem",
        "10xl": "100rem",
        "11xl": "110rem",
        "12xl": "120rem",
        "13xl": "130rem",
        "14xl": "140rem",
        "15xl": "150rem",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        stanford: ["var(--font-stanford)", "sans-serif"],
      },
    },
  },
  plugins: [
    ...decanter.plugins,
    require("@tailwindcss/container-queries")
  ],
}
