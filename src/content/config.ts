import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional().default('Tim Redaksi'),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
  }),
});

const pkbmProfil = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    kota: z.string(),
    provinsi: z.string(),
    tahunBerdiri: z.number(),
    program: z.array(z.string()),
    website: z.string().optional(),
    deskripsi: z.string(),
    keunggulan: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
  }),
});

export const collections = { blog, 'pkbm-profil': pkbmProfil };
