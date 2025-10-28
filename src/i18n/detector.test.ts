import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LanguageDetector } from './detector';

describe('LanguageDetector', () => {
  describe('detectBrowserLanguage', () => {
    beforeEach(() => {
      // Reset navigator mock before each test
      vi.stubGlobal('navigator', {
        language: 'en-US',
      });
    });

    it('should detect English from en-US browser language', () => {
      vi.stubGlobal('navigator', { language: 'en-US' });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('en');
    });

    it('should detect Spanish from es-ES browser language', () => {
      vi.stubGlobal('navigator', { language: 'es-ES' });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('es');
    });

    it('should detect Spanish from es-MX browser language', () => {
      vi.stubGlobal('navigator', { language: 'es-MX' });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('es');
    });

    it('should handle mixed case browser language', () => {
      vi.stubGlobal('navigator', { language: 'EN-us' });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('en');
    });

    it('should fallback to default when browser language is not supported', () => {
      vi.stubGlobal('navigator', { language: 'fr-FR' });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('en');
    });

    it('should fallback to default when navigator.language is undefined', () => {
      vi.stubGlobal('navigator', { language: undefined });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('en');
    });

    it('should fallback to default in SSR environment', () => {
      // @ts-ignore - Testing SSR behavior
      vi.stubGlobal('window', undefined);
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('en');
    });

    it('should handle language codes with hyphen correctly', () => {
      // Test that the split logic correctly extracts language code
      vi.stubGlobal('navigator', { language: 'en-GB' });
      const result = LanguageDetector.detectBrowserLanguage();
      expect(result).toBe('en');
    });
  });

  describe('isSupported', () => {
    it('should return true for English', () => {
      expect(LanguageDetector.isSupported('en')).toBe(true);
    });

    it('should return true for Spanish', () => {
      expect(LanguageDetector.isSupported('es')).toBe(true);
    });

    it('should return false for unsupported language', () => {
      expect(LanguageDetector.isSupported('fr')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(LanguageDetector.isSupported('')).toBe(false);
    });
  });
});
