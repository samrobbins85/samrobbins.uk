/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  presets: [require("@samrobbins/typography")],
  darkMode: "class",
  mode: "jit",
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
        sky: colors.sky,
        rose: colors.rose,
        emerald: colors.emerald,
        npm: "#CB3837",
        gmail: "#EA4335",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
        "nord6.1": "#f8f9fb",
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
      },
      fontFamily: {
        latex: ["Latin Modern"],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      },
      height: {
        18: "4.5rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              pre: {
                backgroundColor: "#2e3440",
              },
              color: "#2e3440",
              "figure figcaption": {
                color: "#2e3440",
              },
              maxWidth: "85ch",
            },
          ],
        },
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
                color: "#d8dee9",
              },
              "ul > li::before": {
                backgroundColor: "#d8dee9",
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
                color: theme("colors.gray.200"),
              },
              code: {
                color: theme("colors.white"),
                backgroundColor: "#2e3440",
              },
              "a code": {
                color: theme("colors.white"),
              },
              "pre code": {
                backgroundColor: "transparent !important",
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
      outlinePlugin: ["hover", "focus", "group-focus"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-outline-plugin"),
    require("tailwind-nord"),
  ],
};
