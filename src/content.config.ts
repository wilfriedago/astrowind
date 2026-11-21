import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      role: z.string(),
      year: z.number().int(),
      /** Lower numbers appear first. */
      order: z.number().int().default(99),
      /** Featured projects appear on the home page (max 3 shown). */
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      /** Full stack, listed in the project details. */
      stack: z.array(z.string()).default([]),
      /** Short summary shown under the title, joined with " · ". */
      tags: z.array(z.string()).default([]),
      highlights: z.array(z.string()).default([]),
      /** Hero image in the project details; also the row thumbnail by default. */
      cover: image().optional(),
      /** Optional separate image for the project row. */
      thumbnail: image().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
    }),
});

export const collections = { projects };
