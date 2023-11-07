import { builtinModules } from "module";
import { fileURLToPath } from "url";
import { cwd } from "process";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import electronPath from "electron";
import type { UserConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const sharedResolve = {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
};

interface Config {
  main: UserConfig;
  preload: UserConfig;
  render: UserConfig;
  work: UserConfig;
  electronPath?: any;
}

const config: Config = {
  main: {
    root: path.resolve(__dirname, "src/main"),
    envDir: cwd(),
    resolve: sharedResolve,
    build: {
      watch: {},
      outDir: path.resolve(__dirname, "dist/main"),
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/main/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron","lowdb","koffi","electron-updater",...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  preload: {
    root: path.resolve(__dirname, "src/preload"),
    envDir: cwd(),
    resolve: sharedResolve,
    build: {
      watch: {},
      outDir: path.resolve(__dirname, "dist/preload"),
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/preload/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron","lowdb",...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  render: {
    root: path.resolve(__dirname, "src/render"),
    resolve: sharedResolve,
    build: {
      watch: {},
      outDir: path.resolve(__dirname, "dist/render"),
      minify: true,
      assetsInlineLimit: 1048576,
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
      rollupOptions: {
        external: [...builtinModules, "electron","lowdb"],
      },
    },
    plugins: [react()],
  },
  work: {
    root: path.resolve(__dirname, "src/work"),
    base: './',
    resolve: sharedResolve,
    build: {
      watch: {},
      outDir: path.resolve(__dirname, "dist/work"),
      minify: true,
      assetsInlineLimit: 1048576,
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
      rollupOptions: {
        external: [...builtinModules, "electron","lowdb"],
      },
    },
    plugins: [react()],
  },
  electronPath,
};

export default config;
