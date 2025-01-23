import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cjsInterop } from "vite-plugin-cjs-interop";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cjsInterop({
      dependencies: ["react-router-dom"],
    }),
  ],
});
