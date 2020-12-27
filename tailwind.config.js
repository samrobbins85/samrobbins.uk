const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  presets: [require("@samrobbins/typography")],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        teal: colors.teal,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        lime: colors.lime,
        "light-blue": colors.lightBlue,
        rose: colors.rose,
        emerald: colors.emerald,
      },
      maxWidth: {
        "85ch": "85ch",
      },
      fontFamily: {
        latex: ["Latin Modern"],
      },
    },
  },
  plugins: [require("latex-tailwind"), require("@tailwindcss/aspect-ratio")],
};
