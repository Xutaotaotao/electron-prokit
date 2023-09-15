import {onRenderMsgToRender} from 'electron-prokit'

onRenderMsgToRender((e,arg) => {
  console.log(e,arg)
})