module.exports = {
  images: {
    domains: ["media.graphcms.com", "github.com"],
    deviceSizes: [50, 100, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  //   webpack: (config, { dev, isServer }) => {


  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat'
  //     });
  //   }

  //   return config;
  // }
};
