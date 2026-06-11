import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Ambil loader glob bawaan Astro v6

const blog = defineCollection({
  // 2. Ganti type: 'content' dengan loader glob ke folder blog
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
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
  // 3. Ganti type: 'content' dengan loader glob ke folder pkbm-profil
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/pkbm-profil" }),
  schema: z.object({
    nama: z.string(),
    kota: z.string(),
    provinsi: z.string(),
    tahunBerdiri: z.number(),
    program: z.array(z.string()),
    status: z.enum([
      'Homeschooling', 
      'Menginduk', 
      'PKBM Mandiri - Akreditasi A', 
      'PKBM Mandiri - Akreditasi B', 
      'PKBM Mandiri - Akreditasi C', 
      'PKBM Mandiri - Belum Akreditasi'
    ]).default('PKBM Mandiri - Belum Akreditasi'), // Catatan: sesuaikan default dengan salah satu opsi enum agar tidak error
    website: z.string().optional(),
    deskripsi: z.string(),
    keunggulan: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
    maps: z.string().optional().default(''),
    kontak: z.string().optional().default(''),
    email: z.string().optional().default(''),
    galeri: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog, 'pkbm-profil': pkbmProfil };