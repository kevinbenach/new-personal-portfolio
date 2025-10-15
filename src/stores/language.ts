/**
 * Language Store
 *
 * Single Responsibility: Manage language state using Preact signals
 * Dependency Inversion: Uses abstractions from i18n modules
 * Open/Closed: Adding new languages doesn't require modifying this file
 *
 * This is the ONLY file that should handle reactive state management.
 * All translation data, storage, and detection logic is separated into specialized modules.
 */

import { computed, signal } from '@preact/signals';
import { DEFAULT_LANGUAGE, type Language } from '@/i18n/config';
import { LanguageStorage } from '@/i18n/storage';
import { LanguageDetector } from '@/i18n/detector';
import { translations } from '@/i18n/translations';

/**
 * Current language signal
 * Reactive state that triggers UI updates when changed
 */
export const currentLanguage = signal<Language>(DEFAULT_LANGUAGE);

/**
 * Computed translations signal
 * Automatically returns the correct translation set when language changes
 * Components access this via: t.value.section.key
 */
export const t = computed(() => translations[currentLanguage.value]);

/**
 * Initialize language on application load
 * Priority: 1. localStorage 2. Browser detection 3. Default
 *
 * Called by LanguageSwitcher component on mount
 */
export function initializeLanguage(): void {
  if (typeof window === 'undefined') return;

  // Try to load saved preference
  const savedLang = LanguageStorage.get();
  if (savedLang && LanguageDetector.isSupported(savedLang)) {
    currentLanguage.value = savedLang;
    updateDocumentLanguage(savedLang);
    return;
  }

  // Fall back to browser detection
  const detectedLang = LanguageDetector.detectBrowserLanguage();
  currentLanguage.value = detectedLang;
  updateDocumentLanguage(detectedLang);
}

/**
 * Toggle between available languages
 * Currently supports EN ↔ ES switching
 *
 * Future: Can be extended to cycle through multiple languages
 */
export function switchLanguage(): void {
  const newLang: Language = currentLanguage.value === 'en' ? 'es' : 'en';
  setLanguage(newLang);
}

/**
 * Set language explicitly
 * @param lang - Language code to set
 */
export function setLanguage(lang: Language): void {
  if (!LanguageDetector.isSupported(lang)) {
    console.warn(`Language "${lang}" is not supported. Falling back to default.`);
    currentLanguage.value = DEFAULT_LANGUAGE;
    return;
  }

  currentLanguage.value = lang;
  LanguageStorage.set(lang);
  updateDocumentLanguage(lang);
}

/**
 * Update HTML document language attribute
 * Important for accessibility and SEO
 * @param lang - Language code to set
 */
function updateDocumentLanguage(lang: Language): void {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
  }
}
