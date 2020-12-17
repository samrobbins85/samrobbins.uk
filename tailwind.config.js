module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  presets: [require("@samrobbins/typography")],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      maxWidth: {
        "85ch": "85ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
