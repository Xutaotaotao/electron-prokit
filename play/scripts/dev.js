import path from "path";
import { fileURLToPath } from "url";
import createViteElectronService from 'create-vite-electron-service'

const __dirname = fileURLToPath(new URL(".", import.meta.url));

createViteElectronService({
  renderConfigFile:path.resolve(__dirname, "../vite/render.js"),
  preloadConfigFile:path.resolve(__dirname, "../vite/preload.js"),
  workConfigFile:path.resolve(__dirname, "../vite/work.js"),
  mainConfigFile:path.resolve(__dirname, "../vite/main.js"),
})

