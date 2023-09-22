import { isRender } from '../env'
import {onRenderMsgToRender as preloadOnRenderMsgToRender} from './preload'
import {onRenderMsgToRender as renderOnRenderMsgToRender} from './render'

export * from './main'
export {initExposeInMainWorld} from './preload'
export {renderMsgToMain,onMsgFromMain,renderMsgToRender} from './render'
export const onRenderMsgToRender = isRender ? renderOnRenderMsgToRender:preloadOnRenderMsgToRender

