import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/jobs" }),
  schema: ({ image }) =>
    z.object({
      role: z.string(),
      company: z.string(),
      duration: z.string(),
      logo: image(),
    }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/writing" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publisher: z.string(),
      link: z.string(),
      logo: image(),
      date: z.date(),
    }),
});

export const collections = { jobs, writing };
