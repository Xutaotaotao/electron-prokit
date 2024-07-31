import path from "path";
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));


const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

export default defineConfig({
  root: path.resolve(__dirname, "../src/work"),
  base: "./",
  resolve: sharedResolve,
  build: {
    watch: {},
    outDir: path.resolve(__dirname, "../dist/work"),
    minify: true,
    assetsInlineLimit: 1048576,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      external: [...builtinModules, "electron", "lowdb"],
    },
  },
})

