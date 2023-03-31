/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/snippet.js",
  ],
  theme: {
    extend: {
      colors: {
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
      minWidth: {
        16: "4rem",
      },
      flex: {
        "1/4": "1 0 25%",
        "1/2": "1 0 50%",
      },
      fontFamily: {
        latex: ["Latin Modern"],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-etBook)", ...defaultTheme.fontFamily.serif],
      },
      height: {
        18: "4.5rem",
      },
    },
  },
  plugins: [
    require("tailwind-outline-plugin"),
    require("tailwind-nord"),
    require("@samrobbins/custom-typography"),
    require("radix-colors-for-tailwind")({
      colors: ["cyan", "sky", "blue", "purple", "slate", "amber"],
    }),
  ],
};
