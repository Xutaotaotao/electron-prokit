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

export default defineConfig({
  root: path.resolve(__dirname, "../"),
  resolve: sharedResolve,
  build: {
    watch: {},
    outDir: path.resolve(__dirname, "../dist/render"),
    minify: true,
    assetsInlineLimit: 1048576,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
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
