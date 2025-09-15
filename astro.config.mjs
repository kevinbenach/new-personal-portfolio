import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourname.dev',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});