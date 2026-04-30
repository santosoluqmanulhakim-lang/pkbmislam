import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pkbmislam.id', // ganti dengan domain Anda
  integrations: [sitemap()],
});
