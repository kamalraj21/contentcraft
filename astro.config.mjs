import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kamalraj21.github.io',
  base: '/contentcraft',
  output: "static",
  integrations: [react(), tailwind(), mdx()]
});