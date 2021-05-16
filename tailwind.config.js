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
        dark: {
          contrast: "#2e3440",
        },
        nord: {
          0: "#2e3440",
          1: "#3b4252",
          2: "#434c5e",
          3: "#4c566a",
          4: "#d8dee9",
          5: "#e5e9f0",
          6: "#eceff4",
          7: "#8fbcbb",
          8: "#88c0d0",
          9: "#81a1c1",
          10: "#5e81ac",
          11: "#bf616a",
          12: "#d08770",
          13: "#ebcb8b",
          14: "#a3be8c",
          15: "#b48ead",
        },
      },
      fill: {
        current: "currentColor",
        line: "#2F2F3A",
        "polywork-1": "#88CFB0",
        "polywork-2": "#F2C94C",
        "polywork-3": "#BD83CE",
        "polywork-4": "#40BE88",
        "polywork-5": "#FF7474",
        "polywork-6": "#6776F9",
        "polywork-7": "#37C2E2",
        "polywork-8": "#F2994A",
        "nord-3": "#4c566a",
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
    },
  },
  plugins: [
    require("latex-tailwind"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
