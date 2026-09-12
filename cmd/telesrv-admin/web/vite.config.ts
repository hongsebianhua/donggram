import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    port: 2410,
    proxy: {
      "/api": "http://111.229.87.208:2600"
    }
  }
});
