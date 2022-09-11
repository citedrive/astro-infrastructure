import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://citedrive.github.io',
 base: '/astro-infrastructure',
  trailingSlash: 'never',
  integrations: [
    react()
  ]
});
