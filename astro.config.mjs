// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import behead from "remark-behead";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: `https://samrobbins.uk`,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon(), alpinejs(), mdx(), sitemap()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
      {
        provider: "local",
        name: "ETBook",
        cssVariable: "--font-etBook",
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
    ],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    remarkPlugins: [remarkMath, [behead, { depth: 1 }]],
    rehypePlugins: [rehypeKatex],
  },
});
