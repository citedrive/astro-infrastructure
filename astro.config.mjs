import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://pages.citedrive.com',
  trailingSlash: 'always',
  integrations: [react(), partytown(), mdx(), sitemap(), compress()],
  output: "server",
  adapter: netlify()
});


