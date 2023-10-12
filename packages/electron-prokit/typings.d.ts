interface ImportMetaEnv {
  readonly VITE_CURRENT_RUN_MODE: 'render' | 'preload' | 'main' | 'work'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface IpcDBArgs {
  fun: 'initDb' | 'writeDb' | 'readDb' | 'clearDb';
  file?: string;
  key?:string;
  data?:any
}