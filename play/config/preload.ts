import { cwd } from "process";
import path from "path";
import { builtinModules } from "module";
import { fileURLToPath } from "url";
import type { UserConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));


const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

const config:UserConfig = {
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
      onwarn(warning, warn) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          warning.message.includes(`"use client"`)
        ) {
          return;
        }
        warn(warning);
      },
    },
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048,
  },
};

export default config;
