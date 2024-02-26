import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? "http://localhost:4321" : "https://example.com",
  integrations: [tailwind(), sitemap(), robotsTxt()]
});