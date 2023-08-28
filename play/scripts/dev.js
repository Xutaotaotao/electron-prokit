"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var electron_prokit_1 = require("electron-prokit");
(0, electron_prokit_1.createViteElectronService)({
    renderConfigFile: path_1.default.resolve(__dirname, "../vite/render.js"),
    preloadConfigFile: path_1.default.resolve(__dirname, "../vite/preload.js"),
    workConfigFile: path_1.default.resolve(__dirname, "../vite/work.js"),
    mainConfigFile: path_1.default.resolve(__dirname, "../vite/main.js"),
});
