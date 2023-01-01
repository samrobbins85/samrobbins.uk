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
      "media.graphassets.com",
    ],
    deviceSizes: [50, 100, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  eslint: {
    dirs: ["pages", "components"],
  },
  async redirects() {
    return [
      {
        source: "/shdh",
        destination:
          "https://samrobbins.uk/projects/same-home-different-hacks/",
        permanent: true,
      },
      {
        source: "/digithon",
        destination: "https://samrobbins.uk/projects/oxford-digithon/",
        permanent: true,
      },
      {
        source: "/gh-portfolio",
        destination: "https://samrobbins.uk/projects/hugo-portfolio-website/",
        permanent: true,
      },
      {
        source: "/dh19",
        destination: "https://samrobbins.uk/projects/durhack-2019/",
        permanent: true,
      },
      {
        source: "/auth0",
        destination: "https://samrobbins.uk/projects/easy-dmarc/",
        permanent: true,
      },
      {
        source: "/csnotes",
        destination: "https://samrobbins.uk/projects/notes-website/",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
});
