import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://rd37011.github.io",
  integrations: [preact()]
});