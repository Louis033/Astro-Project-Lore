import { defineCollection, z } from "astro:content";

const characters = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string().optional(),
    affiliation: z.string().optional(),
  }),
});

const items = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    type: z.string(),
    rarity: z.string(),
    origin: z.string().optional(),
  }),
});

export const collections = {
  characters,
  items,
};
