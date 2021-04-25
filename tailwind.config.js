/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  presets: [require("@samrobbins/typography")],
  darkMode: "class",
  purge: ["./components/**/*.jsx", "./pages/**/*.jsx", "./lib/snippet.js"],
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
        npm: "#CB3837",
        gmail: "#EA4335",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
      maxWidth: {
        "85ch": "85ch",
        "65ch": "65ch",
      },
      fontFamily: {
        latex: ["Latin Modern"],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["NewsreaderVariable", ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
                backgroundColor: theme("colors.gray.700"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
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
    },
  },
  plugins: [
    require("latex-tailwind"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
