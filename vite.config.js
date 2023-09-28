import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4242,
    proxy: {
      "/.netlify/functions/": "http://localhost:8888",
      "/api": {
        target: "http://localhost:5252",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
