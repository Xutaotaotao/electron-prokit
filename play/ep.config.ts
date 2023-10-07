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
  electronPath:any;
}

const config: Config = {
  main: {
    root: cwd(),
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "dist/main"),
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/main/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron", "koffi", ...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  preload: {
    root: cwd(),
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "dist/preload"),
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/preload/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron", ...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  render: {
    root: cwd(),
    base: "./",
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "../dist/render"),
      minify: true,
      assetsInlineLimit: 1048576,
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
      rollupOptions: {
        external: [...builtinModules, "electron"],
      },
    },
    plugins: [react()],
  },
  work: {
    root: path.resolve(__dirname, "src/work"),
    envDir: cwd(),
    resolve: sharedResolve,
    build: {
      outDir: path.resolve(__dirname, "dist/work"),
      assetsDir: ".",
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/work/index.ts"),
        formats: ["cjs"],
      },
      rollupOptions: {
        external: ["electron", ...builtinModules],
        output: {
          entryFileNames: "[name].cjs",
        },
      },
      emptyOutDir: true,
      chunkSizeWarningLimit: 2048,
    },
  },
  electronPath,
};

export default config;
