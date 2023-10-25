export const hasElectron = typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron
export const hasUserAgent = typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0

export const isMain:boolean = hasElectron && !hasUserAgent;
export const isRender:boolean = !hasElectron && hasUserAgent;
export const isPreload:boolean  = hasElectron && hasUserAgent;