import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://yourname.dev',
  integrations: [tailwind(), preact()],
  build: {
    assets: 'assets'
  }
});