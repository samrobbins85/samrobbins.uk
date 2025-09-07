import { defineCollection, reference, z } from "astro:content";

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

const technologies = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/technologies" }),
  schema: z.object({
    name: z.string(),
    link: z.string(),
    category: z.enum([
      "APIs",
      "CMS",
      "Frameworks",
      "Hardware",
      "Infrastructure",
      "Languages",
      "Libraries",
      "Styling",
    ]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    date: z.date(),
    icon: z.string(),
    website: z.string().optional(),
    github: z.string().optional(),
    npm: z.string().optional(),
    technologies: reference("technologies").array(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = { jobs, writing, projects, technologies, blogs };
