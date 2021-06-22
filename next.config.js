const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; img-src 'self' https://media.graphcms.com https://avatars.githubusercontent.com https://res.cloudinary.com https://www.datocms-assets.com; object-src 'none'; script-src 'self'; style-src 'self'",
  },
];

module.exports = withBundleAnalyzer({
  images: {
    domains: ["media.graphcms.com", "github.com"],
    deviceSizes: [50, 100, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack5: true,
  eslint: {
    dirs: ["pages", "components"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
});
