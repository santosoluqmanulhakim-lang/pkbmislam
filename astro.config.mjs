import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pkbmsunnah.id', // nama domain
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/kontribusi-pkbmii2121'),
    }),
  ],
});
