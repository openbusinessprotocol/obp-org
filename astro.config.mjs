import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://openbusinessprotocol.org',
  integrations: [tailwind()],
  output: 'static',
});
