import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kamalraj21.github.io',
  base: '/contentcraft',  // Make sure this matches exactly
  integrations: [react(), tailwind()]
});