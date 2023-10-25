#!/usr/bin/env node
import { dirname } from "path";
import { build } from "vite";
import type { UserConfig } from "vite";
import pkgJson from "../package.json" assert { type: "json" };
import config from "../ep.config";

interface PackageConfigs {
  [key: string]: UserConfig;
}

const processArgv = process.argv.splice(2);
const mode =
  processArgv && processArgv.length > 0 ? processArgv[0] : "production";

const packagesConfigs: PackageConfigs = {
  main: config.main,
  preload: config.preload,
  render: config.render,
  work: config.work,
};

// set mode
process.env.VITE_CURRENT_RUN_MODE = "render";

// set version
process.env.VITE_CURRENT_VERSION = pkgJson.version;

// set mode
process.env.MODE = mode;

// current platform
process.env.VITE_CURRENT_OS = process.platform;

const buildByConfig = (config: UserConfig) => build({ ...config, mode });

(async () => {
  try {
    const totalTimeLabel = "Total bundling time";
    console.time(totalTimeLabel);

    for (const config in packagesConfigs) {
      process.env.VITE_CURRENT_RUN_MODE = config;
      const consoleGroupName = `${dirname(config)}/`;
      console.group(consoleGroupName);
      console.log(`Bundling ${config}`)
      const timeLabel = "Bundling time";
      console.time(timeLabel);
      await buildByConfig(packagesConfigs[config]);
      console.timeEnd(timeLabel);
      console.groupEnd();
      console.log("\n"); // Just for pretty print
    }
    console.timeEnd(totalTimeLabel);
    process.exit();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
