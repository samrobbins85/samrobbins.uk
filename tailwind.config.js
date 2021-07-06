/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // presets: [require("@samrobbins/typography")],
  darkMode: "class",
  mode: "jit",
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/snippet.js",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        teal: colors.teal,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        lime: colors.lime,
        sky: colors.sky,
        rose: colors.rose,
        emerald: colors.emerald,
        npm: "#CB3837",
        gmail: "#EA4335",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
        polywork: "#543DE0",
        "nord6.1": "#f8f9fb",
        link: "#0077aa",
        darkLink: "#96d0ff",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      maxWidth: {
        "85ch": "85ch",
        "65ch": "65ch",
        prose: "85ch",
      },
      flex: {
        "1/4": "1 0 25%",
        "1/2": "1 0 50%",
      },
      fontFamily: {
        latex: ["Latin Modern"],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      },
      height: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {
      display: ["hover"],
      backgroundColor: ["active"],
      fontWeight: ["active", "focus"],
      boxShadow: ["group-focus"],
      outline: ["group-focus"],
      ringColor: ["hover", "active"],
      outlinePlugin: ["hover", "focus", "group-focus"],
    },
  },
  plugins: [
    require("tailwind-outline-plugin"),
    require("tailwind-nord"),
    require("@samrobbins/custom-typography"),
    require("radix-colors-for-tailwind")({
      colors: ["cyan", "sky", "blue", "purple", "slate", "mint"],
    }),
  ],
};
