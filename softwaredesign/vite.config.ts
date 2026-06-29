import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig(async () => ({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    react(),
    await babel({
      plugins: [["babel-plugin-react-compiler", {}]],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
}));
