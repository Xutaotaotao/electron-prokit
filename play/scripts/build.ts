#!/usr/bin/node
import { build } from "vite";
import pkgJson from "../package.json" assert { type: "json" };
import { fileURLToPath } from 'url';
import { dirname,resolve } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const processArgv = process.argv.splice(2);
const mode =
  processArgv && processArgv.length > 0 ? processArgv[0] : "production";

  const packagesConfigs:any = [
    resolve(__dirname, '../config/render.js'),
    resolve(__dirname, '../config/work.js'),
    resolve(__dirname, '../config/main'),
    resolve(__dirname, '../config/preload.js'),
  ]

// set mode
process.env.VITE_CURRENT_RUN_MODE = "render";

// set version
process.env.VITE_CURRENT_VERSION = pkgJson.version

// set mode
process.env.MODE = mode;

// current platform
process.env.VITE_CURRENT_OS = process.platform;


const buildByConfig = (configFile:any) => build({ configFile, mode })

const main = async () => {
  try {
    const totalTimeLabel = "Total bundling time";
    console.time(totalTimeLabel);
    for (const config of packagesConfigs) {
      process.env.VITE_CURRENT_RUN_MODE = config;
      const consoleGroupName = `${dirname(config)}/`;
      console.group(consoleGroupName);
      const timeLabel = "Bundling time";
      console.time(timeLabel);
      await buildByConfig(packagesConfigs[config]);
      console.timeEnd(timeLabel);
      console.groupEnd();
      console.log("\n"); // Just for pretty print
    }
    console.timeEnd(totalTimeLabel);
    // process.exit(0)
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
 

