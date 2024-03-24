/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ASSET_SET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
