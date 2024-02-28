import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://alexdev.com.ar",
  integrations: [tailwind(), mdx(), react()],
  output: "server",
  server: {
    host: true,
    port: 3000
  },
  adapter: vercel()
});