import { defineCollection, z } from "astro:content";

const characters = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    role: z.string().optional(),
    affiliation: z.string().optional(),

    // ✅ tambahin ini
    image: z.string().optional(),
  }),
});

const places = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    region: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    author: z.string().optional(),
    category: z.enum(["History", "Bestiary", "Botany", "Magic", "Religion", "Politics", "Fiction", "Compendium", "item", "Other"]).optional(),
    era: z.string().optional(),
    region: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  characters,
  places,
  books,
};
