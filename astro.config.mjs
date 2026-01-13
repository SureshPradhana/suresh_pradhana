import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import auth from "auth-astro";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://suresh-pradhana.vercel.app/",
  integrations: [
    tailwind(),
    svelte({
      include: ["**/svelte/*"],
    }),
    auth(),
    robotsTxt(),
    react(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: vercel(),
});
