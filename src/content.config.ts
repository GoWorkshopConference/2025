import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const staff = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/data/staff" }),
});

const workshops = defineCollection({
  schema: z.object({
    title: z.string(),
    isGuest: z.boolean().optional(),
    organizer: z.object({
      name: z.string(),
      avatar: z.string().url(),
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

export const collections = { staff, workshops, posts };
