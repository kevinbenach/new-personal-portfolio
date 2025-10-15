/**
 * Translation Registry
 *
 * Central registry for all language translations.
 * Open/Closed Principle: Adding a new language requires only adding an import and entry.
 */

import { en } from './en';
import { es } from './es';
// Future languages can be imported here:
// import { fr } from './fr';
// import { de } from './de';

/**
 * All available translations indexed by language code
 * This object is used by the language store to provide translations
 */
export const translations = {
  en,
  es,
  // fr,
  // de,
} as const;

/**
 * Type helper for translation keys
 */
export type TranslationKey = keyof typeof translations;
