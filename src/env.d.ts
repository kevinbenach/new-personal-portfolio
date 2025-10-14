/// <reference types="astro/client" />
/// <reference types="vite/client" />

// Extend Vite's ImportMeta interface to include glob
interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  // Vite's glob import feature
  glob<T = any>(
    pattern: string,
    options?: {
      eager?: boolean;
      query?: string;
      import?: string;
    }
  ): Record<string, T>;
}
