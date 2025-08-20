import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

const staff = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/data/staff" }),
});

export const collections = { staff };
