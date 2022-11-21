import {defineConfig} from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 4000
  },
  preview: {
    port: 14000
  },
  plugins: [
    viteReact()
  ],
  build: {
    outDir: "build",
    lib: {
      entry: 'src/index.tsx',
      name: 'slide',
      formats: ['iife'],
      fileName: (_format) => `slide.js`
    }
  },
})