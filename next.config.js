// prettier-ignore
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ["media.graphcms.com", "github.com", "www.datocms-assets.com"],
    deviceSizes: [50, 100, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack5: true,
  eslint: {
    dirs: ["pages", "components"],
  },
});
