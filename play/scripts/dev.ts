#!/usr/bin/env node
import createViteElectronService from "@electron-prokit/create-service";
import electronPath from "electron";
import main from "../config/main";
import render from "../config/render";
import work from "../config/work";
import preload from "../config/preload";

createViteElectronService({
  render,
  preload,
  work,
  main,
  electronPath
});
