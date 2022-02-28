// prettier-ignore
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      "media.graphcms.com",
      "github.com",
      "www.datocms-assets.com",
      "images.unsplash.com",
    ],
  },
  webpack5: true,
  eslint: {
    dirs: ["pages", "components"],
  },
});
