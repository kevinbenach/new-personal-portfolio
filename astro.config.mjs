import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kevinbenach.com',
  integrations: [
    tailwind(),
    preact()
  ],
  build: {
    assets: 'assets'
  }
});