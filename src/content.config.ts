import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const staff = defineCollection({
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    link: z.string().url(),
    organization: z.string().optional(),
    type: z.enum(["core", "day"]).optional().default("core"),
  }),
  loader: glob({ pattern: "*.json", base: "src/data/staff" }),
});

const workshops = defineCollection({
  schema: z.object({
    title: z.string(),
    connpassUrl: z.string().url().optional(),
    organizer: z.object({
      name: z.string(),
      avatar: z.string(),
      organization: z.string().optional(),
      profile: z.string(),
    }),
  }),
  loader: glob({ pattern: "*.md", base: "src/data/workshops" }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishedAt: z.string(),
  }),
  loader: glob({ pattern: "*.md", base: "src/data/posts" }),
});

const booths = defineCollection({
  schema: z.object({
    title: z.string(),
    organizer: z.object({
      name: z.string(),
      avatar: z.string().optional(),
      organization: z.string().optional(),
      profile: z.string(),
    }),
  }),
  loader: glob({ pattern: "*.md", base: "src/data/booths" }),
});

export const collections = { staff, workshops, posts, booths };
