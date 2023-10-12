import { useContextBridge } from "./hooks";
import {
  onMsgFromMain,
  onRenderMsgToRender,
  renderMsgToMain,
  renderMsgToRender
} from './ipc/preload'
import {
  clearDb,
  initDb,
  readDb,
  writeDb
} from './db/preload'

const contextBridge = useContextBridge();

export function initExposeInMainWorld(): void {
  contextBridge.exposeInMainWorld("electronProkit", {
    // communication
    renderMsgToMain,
    onMsgFromMain,
    renderMsgToRender,
    onRenderMsgToRender,

    // db
    clearDb,
    initDb,
    readDb,
    writeDb
  });
}