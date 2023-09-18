interface ImportMetaEnv {
  readonly VITE_CURRENT_RUN_MODE: 'render' | 'preload' | 'main' | 'work'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}