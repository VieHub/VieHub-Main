import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react()],
  server: {
    port: 4173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
