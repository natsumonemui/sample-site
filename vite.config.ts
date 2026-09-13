import { defineConfig } from "vite";
import satteri from "vite-plugin-satteri";

export default defineConfig({
  plugins: [
    satteri({
      features: {
        gfm: true,
        frontmatter: true,
      },
    }),
  ],
});