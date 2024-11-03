import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kamalraj21.github.io',
  base: '/contentcraft',  // Make sure this matches exactly
  integrations: [tailwind()]
});