import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    outcome: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    role: z.string().optional(),
    stack: z.array(z.string()),
    repoUrl: z.string().url(),
    liveUrl: z.string().url().optional(),
    isFork: z.boolean().default(false),
    detail: z
      .object({
        problem: z.string(),
        architectureNotes: z.array(z.string()),
        highlights: z.array(z.string()),
        relatedExperience: z.string().optional(),
      })
      .optional(),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    org: z.string(),
    location: z.string(),
    start: z.string(),
    end: z.string(),
    outcome: z.string(),
    bullets: z.array(z.string()),
    evidence: z
      .object({
        label: z.string(),
        url: z.string().url(),
      })
      .optional(),
    order: z.number(),
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    venue: z.string(),
    summary: z.string(),
    url: z.string().nullable(),
    order: z.number(),
  }),
});

const patents = defineCollection({
  loader: file('src/data/patents.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    applicationNumber: z.string(),
    status: z.string(),
    publishedDate: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

const skillGroups = defineCollection({
  loader: file('src/data/skills.json'),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    items: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  experience,
  publications,
  patents,
  skillGroups,
};
