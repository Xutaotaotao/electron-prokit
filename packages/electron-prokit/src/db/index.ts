import { isMain,isRender } from "../env";

import {
  clearDb as mainClearDb, 
  initDb as mainInitDb,
  readDb as mainReadDb,
  writeDb as mainWriteDb
} from './main'
import {
  clearDb as renderClearDb,
  initDb as renderInitDb,
  readDb as renderReadDb,
  writeDb as renderWriteDb
} from './render'
import {
  clearDb as preloadClearDb,
  initDb as preloadInitDb,
  readDb as preloadReadDb,
  writeDb as preloadWriteDb
} from './preload'

export const initDb = isMain ? mainInitDb : isRender ? renderInitDb : preloadInitDb

export const readDb = isMain ? mainReadDb : isRender ? renderReadDb : preloadReadDb

export const writeDb = isMain ? mainWriteDb: isRender ? renderWriteDb : preloadWriteDb

export const clearDb = isMain ? mainClearDb : isRender ? renderClearDb : preloadClearDb