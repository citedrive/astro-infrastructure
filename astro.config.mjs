import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://www.citedrive.com',
  trailingSlash: 'always',
  integrations: [react(), partytown(), mdx(), sitemap()],
  adapter: node({
    mode: 'standalone'
  }),
});