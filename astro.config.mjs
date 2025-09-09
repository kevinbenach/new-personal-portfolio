import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourname.dev',
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/globals.scss";`
        }
      }
    }
  },
  build: {
    assets: 'assets'
  }
});