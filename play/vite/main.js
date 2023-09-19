import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from 'node:process';
import path from "path";


const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  root: cwd(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/main"),
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "../src/main/index.ts"),
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron",...builtinModules],
      output: {
        entryFileNames: "[name].cjs",
      },
    },
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
  },
};
export default config;
