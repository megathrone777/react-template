/// <reference types="@rsbuild/core/types" />
interface ImportMetaEnv {
  APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
