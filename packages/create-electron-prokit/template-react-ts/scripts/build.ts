#!/usr/bin/node
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { build } from 'vite';
import pkgJson from '../package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const processArgv = process.argv.splice(2);
const mode = processArgv && processArgv.length > 0 ? processArgv[0] : 'production';

const packagesConfigs = [
  resolve(__dirname, '../config/render'),
  resolve(__dirname, '../config/work'),
  resolve(__dirname, '../config/main'),
  resolve(__dirname, '../config/preload'),
];

// Set environment variables
process.env.VITE_CURRENT_RUN_MODE = 'render';
process.env.VITE_CURRENT_VERSION = pkgJson.version;
process.env.MODE = mode;
process.env.VITE_CURRENT_OS = process.platform;

const buildByConfig = async (configFile:string) => {
  try {
    await build({ configFile, mode });
  } catch (error) {
    console.error(`Error building ${configFile}:`, error);
    throw error;
  }
};

const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  try {
    console.time('Total bundling time');
    for (const config of packagesConfigs) {
      const modeMap:any = {
        main: 'main',
        render: 'render',
        preload: 'preload',
        work: 'work',
      };
      
      for (const key in modeMap) {
        if (config.includes(key)) {
          process.env.VITE_CURRENT_RUN_MODE = modeMap[key];
          break;
        }
      }

      console.time(`Bundling ${config}`);
      await buildByConfig(config);
      console.timeEnd(`Bundling ${config}`);
    }
    console.timeEnd('Total bundling time');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
  await delay(3000)
  process.exit(0);
};

main();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  process.exit(1);
});
