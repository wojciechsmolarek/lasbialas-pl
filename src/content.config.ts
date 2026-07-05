import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { file } from 'astro/loaders';

const localeRecord = z.object({
  pl: z.string(),
  en: z.string(),
  de: z.string()
});

const topBoxesData = z.object({
  availabilityBlock: z.string(),
  summerBlock: z.string(),
  amenitiesBlock: z.string()
});

const site = defineCollection({
  loader: file('src/content/site/config.json', {
    parser: (text) => ({ config: JSON.parse(text) }),
  }),
  schema: z.object({
    promoBar: z.object({
      enabled: z.boolean(),
      messages: localeRecord
    }),
    availability: z.object({
      block: localeRecord
    }),
    topBoxes: z.object({
      pl: topBoxesData,
      en: topBoxesData,
      de: topBoxesData
    })
  })
});

export const collections = { site };
