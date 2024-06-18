import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { builtinModules } from "module";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));


const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

const config = {
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
      onwarn(warning:any, warn:any) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      }
    },
  },
  plugins: [react()],
};

export default defineConfig(config);
