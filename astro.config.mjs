// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update once the Netlify site name is finalized in the deploy phase.
  site: 'https://pavithra-manogaran.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});