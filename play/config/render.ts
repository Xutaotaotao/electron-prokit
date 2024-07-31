import path from "path";
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

export default defineConfig({
  root: path.resolve(__dirname, "../"),
  base: "./",
  resolve: sharedResolve,
  build: {
    watch: {},
    outDir: path.resolve(__dirname, "../dist/render"),
    minify: true,
    assetsInlineLimit: 1048576,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          warning.message.includes(`"use client"`)
        ) {
          return;
        }
        warn(warning);
      },
      external: [...builtinModules, "electron", "lowdb"],
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["@ant-design/icons-svg", "antd"],
  },
});
