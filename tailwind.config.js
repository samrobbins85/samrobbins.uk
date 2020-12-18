const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  presets: [require("@samrobbins/typography")],
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
