import { cwd } from "process";
import { defineConfig } from "vite";
import path from "path";
import { builtinModules } from "module";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));


const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

export default defineConfig({
  root: path.resolve(__dirname, "../src/preload"),
  envDir: cwd(),
  resolve: sharedResolve,
  build: {
    watch: {},
    outDir: path.resolve(__dirname, "../dist/preload"),
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "../src/preload/index.ts"),
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron", "lowdb", ...builtinModules],
      output: {
        entryFileNames: "[name].cjs",
      },
    },
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048,
  },
})
