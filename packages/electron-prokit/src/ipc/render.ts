export const sendMsgToMain = (msg:any):void => {
  window.electronProkit.sendMsg(msg)
}

export const syncSendMsgToMain = (msg:any):void => {
  window.electronProkit.syncSendMsg(msg)
}

export const promiseSendMsgToMain = (msg:any):void => {
  window.electronProkit.promiseSendMsg(msg)
}