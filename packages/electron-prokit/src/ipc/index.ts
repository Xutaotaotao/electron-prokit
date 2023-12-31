import { isRender } from "../env";
import {
  offMsgFromMain as renderOffMsgFromMain,
  onMsgFromMain as renderOnMsgFromMain,
  onRenderMsgToRender as renderOnRenderMsgToRender,
  renderMsgToMain as renderRenderMsgToMain,
  renderMsgToRender as renderRenderMsgToRender,
} from "./render";
import {
  offMsgFromMain as preloadOffMsgFromMain,
  onMsgFromMain as preloadOnMsgFromMain,
  onRenderMsgToRender as preloadOnRenderMsgToRender,
  renderMsgToMain as preloadRenderMsgToMain,
  renderMsgToRender as preloadRenderMsgToRender,
} from "./preload";

export * from "./main";
export const offMsgFromMain = isRender
  ? renderOffMsgFromMain
  : preloadOffMsgFromMain;
export const onMsgFromMain = isRender
  ? renderOnMsgFromMain
  : preloadOnMsgFromMain;
export const onMsgFormOtherRender = isRender
  ? renderOnRenderMsgToRender
  : preloadOnRenderMsgToRender;
export const sendMsgToMain = isRender
  ? renderRenderMsgToMain
  : preloadRenderMsgToMain;
export const sendMsgToOtherRender = isRender
  ? renderRenderMsgToRender
  : preloadRenderMsgToRender;
