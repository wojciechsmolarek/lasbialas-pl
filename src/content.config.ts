import { defineCollection } from 'astro:content';
import { z } from 'zod';

const localeSchema = z.object({
  pl: z.string(),
  en: z.string(),
  de: z.string()
});

export const collections = {};
