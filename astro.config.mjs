import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://suresh-pradhana.vercel.app/',
  integrations: [tailwind(), svelte({
    include: ["**/svelte/*"]
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
