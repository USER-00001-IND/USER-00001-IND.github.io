import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  // Keep "/" for a GitHub Pages user site named USER-00001-IND.github.io.
  base: "/",
});