import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pkbmislam.id', // nama domain
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/kontribusi-pkbmii2121'),
    }),
  ],
});
