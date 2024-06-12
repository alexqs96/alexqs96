import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedAt: z
      .string()
      .or(z.date())
      .transform((val) => (val ? new Date(val) : undefined)),
    cover: z.string().optional(),
    video: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
