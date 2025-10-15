/**
 * Language Detector Service
 *
 * Single Responsibility: Detect user's preferred language from browser
 * Open/Closed: Detection logic can be extended without modifying consumers
 */

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, type Language } from './config';

/**
 * Service for detecting user's language preference
 */
export const LanguageDetector = {
  /**
   * Detect language from browser settings
   * Falls back to DEFAULT_LANGUAGE if browser language is not supported
   *
   * @returns Detected language code
   */
  detectBrowserLanguage(): Language {
    // SSR safety check
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return DEFAULT_LANGUAGE;
    }

    try {
      // Get browser language (e.g., "en-US", "es-ES")
      const browserLang = navigator.language || (navigator as any).userLanguage;

      if (!browserLang) {
        return DEFAULT_LANGUAGE;
      }

      // Extract language code (e.g., "en" from "en-US")
      const langCode = browserLang.toLowerCase().split('-')[0];

      // Check if the detected language is supported
      if (SUPPORTED_LANGUAGES.includes(langCode as Language)) {
        return langCode as Language;
      }

      // Fallback to default if not supported
      return DEFAULT_LANGUAGE;
    } catch (error) {
      console.warn('Failed to detect browser language:', error);
      return DEFAULT_LANGUAGE;
    }
  },

  /**
   * Check if a language code is supported
   * @param lang - Language code to check
   * @returns True if language is supported
   */
  isSupported(lang: string): lang is Language {
    return SUPPORTED_LANGUAGES.includes(lang as Language);
  },
};
