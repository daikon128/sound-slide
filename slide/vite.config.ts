import {defineConfig} from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 4000
  },
  plugins: [
    viteReact()
  ],
  build: {
    outDir: "build"
  }
})