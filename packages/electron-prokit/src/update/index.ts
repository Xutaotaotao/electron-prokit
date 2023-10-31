import { useUpdater } from "../hooks";

let autoUpdater = null;

interface UpadateOptions {
  forceDevUpdateConfig?: boolean;
  autoDownload?: boolean;
  updateUrl: string;
  updateDownloadedCallBack: () => void;
}

const logger = {
  info(message?: any, ...optionalParams: any[]) {
    console.log(message);
  },
  warn(warn?: any, ...optionalParams: any[]) {
    console.warn(warn);
  },
  error(err?: any, ...optionalParams: any[]) {
    console.error(err);
  },
};

export const initUpadate = (options: UpadateOptions) => {
  if (autoUpdater) {
    autoUpdater = null
  }
  autoUpdater = useUpdater()
  autoUpdater.logger = logger;
  autoUpdater.forceDevUpdateConfig = options.forceDevUpdateConfig;
  autoUpdater.autoDownload = options.autoDownload;
  console.log(options.updateUrl)
  autoUpdater.setFeedURL(options.updateUrl);
  autoUpdater.checkForUpdates();
  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on("error", function (error: Error) {
    printUpdaterMessage("error");
    console.log(error);
  });

  autoUpdater.on("checking-for-update", function () {
    printUpdaterMessage("checking-for-update");
  });

  autoUpdater.on("update-available", function (info) {
    printUpdaterMessage("update-available");
    logger.info(info);
  });

  autoUpdater.on("update-not-available", function (info) {
    printUpdaterMessage("update-not-available");
    logger.info(info);
  });

  autoUpdater.on("download-progress", function (info) {
    printUpdaterMessage("download-progress");
    logger.info(info);
  });

  autoUpdater.on("update-downloaded", function (info) {
    console.time()
    console.log(11111)
    printUpdaterMessage("update-downloaded");
    options.updateDownloadedCallBack();
    logger.info(info);
  });
  return autoUpdater;
};

function printUpdaterMessage(key: string) {
  const message = {
    error: "Update error ",
    "checking-for-update": "Checking update",
    "update-available": "Update available",
    "download-progress": "Downloading",
    "update-not-available": "Update not available",
    "update-downloaded": "Update downloaded",
  };
  logger.info("printUpdaterMessage", message[key]);
}

export const intsallUpdateApp = () => {
  logger.info("update", "intsallUpdateApp");
  autoUpdater.quitAndInstall();
};