import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://alexdev.com.ar",
  integrations: [tailwind(), mdx(), react()],
  output: "hybrid",
  server: {
    host: true,
    port: 3000
  }
});