const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const csp = `default-src 'self' cloudflareinsights.com static.cloudflareinsights.com;
img-src 'self' blob: data: https://media.graphcms.com https://avatars.githubusercontent.com https://res.cloudinary.com https://www.datocms-assets.com;
script-src 'self' 'unsafe-eval' 'unsafe-inline' cloudflareinsights.com static.cloudflareinsights.com;
style-src 'self' 'unsafe-inline' `;

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
    value: csp.replace(/\n/g, ""),
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
