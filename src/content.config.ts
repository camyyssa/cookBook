import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      servings: z.number().optional(),
      prepTime: z.string().optional(),
      cookTime: z.string().optional(),
      ingredients: z.array(z.string()),
      tags: z.array(z.string()).default([]),
      rating: z.number().min(1).max(5).optional(),
    }),
});

const inspiration = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/inspiration' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { recipes, inspiration };
