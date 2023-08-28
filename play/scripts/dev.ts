import path from "path";
import {createViteElectronService} from 'electron-prokit'

createViteElectronService({
  renderConfigFile:path.resolve(__dirname, "../vite/render.js"),
  preloadConfigFile:path.resolve(__dirname, "../vite/preload.js"),
  workConfigFile:path.resolve(__dirname, "../vite/work.js"),
  mainConfigFile:path.resolve(__dirname, "../vite/main.js"),
})

