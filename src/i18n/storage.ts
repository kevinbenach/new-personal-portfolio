/**
 * Language Storage Service
 *
 * Single Responsibility: Handle persistent storage of language preference
 * Dependency Inversion: Provides abstraction over localStorage implementation
 */

import type { Language } from './config';

const STORAGE_KEY = 'language';

/**
 * Service for persisting language preference
 * Abstracts away localStorage implementation details
 */
export const LanguageStorage = {
  /**
   * Retrieve saved language preference
   * @returns Saved language or null if not found
   */
  get(): Language | null {
    if (typeof window === 'undefined') return null;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved as Language | null;
    } catch (error) {
      console.warn('Failed to read language from localStorage:', error);
      return null;
    }
  },

  /**
   * Save language preference
   * @param lang - Language to persist
   */
  set(lang: Language): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  },

  /**
   * Clear saved language preference
   */
  clear(): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear language from localStorage:', error);
    }
  },
};
