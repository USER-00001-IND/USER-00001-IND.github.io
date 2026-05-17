import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Keep "/" for a GitHub Pages user site named USER-00001-IND.github.io.
  base: "/",
});
