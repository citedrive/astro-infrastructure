import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://citedrive.github.io',
  trailingSlash: 'always',
  integrations: [react(), partytown()]
});