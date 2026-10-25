// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import { defineMdastPlugin } from "satteri";
import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";

const beheadPlugin = defineMdastPlugin({
  name: "behead",
  heading(node) {
    const newDepth = Math.min(node.depth + 1, 6) as (typeof node)["depth"];

    return {
      ...node,
      depth: newDepth,
    };
  },
});

// https://astro.build/config
export default defineConfig({
  site: `https://samrobbins.uk`,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon(), alpinejs(), mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
    {
      provider: fontProviders.local(),
      name: "ETBook",
      cssVariable: "--font-etBook",
      options: {
        variants: [
          {
            weight: "normal",
            style: "normal",
            src: ["./src/assets/fonts/et-book/normal.woff2"],
          },
          {
            weight: "normal",
            style: "italic",
            src: ["./src/assets/fonts/et-book/italic.woff2"],
          },
          {
            weight: "bold",
            style: "normal",
            src: ["./src/assets/fonts/et-book/bold.woff2"],
          },
        ],
      },
    },
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    processor: satteri({
      mdastPlugins: [beheadPlugin],
      features: {
        math: true,
      },
    }),
  },
});
