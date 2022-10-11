import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://citedrive.com',
  trailingSlash: 'always',
  integrations: [react(), partytown(), mdx(), sitemap()]
});
