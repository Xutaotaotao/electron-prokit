import { useContextBridge } from "./hooks";
import {
  offMsgFromMain,
  onMsgFromMain,
  onRenderMsgToRender,
  renderMsgToMain,
  renderMsgToRender,
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
    offMsgFromMain,
    renderMsgToRender,
    onRenderMsgToRender,

    // db
    clearDb,
    initDb,
    readDb,
    writeDb
  });
}