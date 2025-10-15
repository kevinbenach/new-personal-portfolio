/**
 * Language Configuration
 *
 * Single Responsibility: Define supported languages and defaults
 * Open/Closed: Easy to add new languages without modifying logic
 */

export const DEFAULT_LANGUAGE = 'en' as const;

export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

/**
 * Language metadata for UI display
 */
export const LANGUAGE_METADATA = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
  },
} as const;
