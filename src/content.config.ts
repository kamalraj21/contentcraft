import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    role_tag: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    sort_order: z.number(),
    primary_track: z.string().optional(),
    outcome_metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    tech_stack: z.array(z.string()).optional(),
    github_repo: z.string().url().optional(),
    case_study_url: z.string().optional(),
  }),
});

export const collections = {
  blog,
  projects,
};
