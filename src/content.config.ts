import { defineCollection, z } from "astro:content";

import { file, glob } from "astro/loaders";

const staff = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/data/staff" }),
});

const sponsors = defineCollection({
  loader: file("src/data/sponsors/data.json"),
  schema: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

export const collections = { staff, sponsors };
