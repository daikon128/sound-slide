import react from "@vitejs/plugin-react";

export default {
  server: {
    port: 3000
  },
  preview: {
    port: 13000
  },
  plugins: [react()],
  build: {
    outDir: "dist",
    lib: {
      entry: 'src/index.jsx',
      name: 'sound',
      formats: ['iife'],
      fileName: (_format) => `sound.js`
    }
  }
}