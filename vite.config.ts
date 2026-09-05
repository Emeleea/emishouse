import { defineConfig } from "vite";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  root: "src",
  build: {
    outDir: '../dist'
  },
  base: "/emis-house/",
  plugins: [
    yaml()
  ]
});
