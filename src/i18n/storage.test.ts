import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LanguageStorage } from './storage';

describe('LanguageStorage', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe('get', () => {
    it('should retrieve saved language from localStorage', () => {
      localStorage.getItem = vi.fn().mockReturnValue('es');
      const result = LanguageStorage.get();
      expect(result).toBe('es');
      expect(localStorage.getItem).toHaveBeenCalledWith('language');
    });

    it('should return null when no language is saved', () => {
      localStorage.getItem = vi.fn().mockReturnValue(null);
      const result = LanguageStorage.get();
      expect(result).toBeNull();
    });

    it('should return null when localStorage throws error', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      localStorage.getItem = vi.fn().mockImplementation(() => {
        throw new Error('localStorage is disabled');
      });

      const result = LanguageStorage.get();
      expect(result).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  describe('set', () => {
    it('should save language to localStorage', () => {
      LanguageStorage.set('es');
      expect(localStorage.setItem).toHaveBeenCalledWith('language', 'es');
    });

    it('should handle localStorage errors gracefully', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      localStorage.setItem = vi.fn().mockImplementation(() => {
        throw new Error('localStorage is full');
      });

      expect(() => LanguageStorage.set('en')).not.toThrow();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  describe('clear', () => {
    it('should remove language from localStorage', () => {
      LanguageStorage.clear();
      expect(localStorage.removeItem).toHaveBeenCalledWith('language');
    });

    it('should handle localStorage errors gracefully', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      localStorage.removeItem = vi.fn().mockImplementation(() => {
        throw new Error('localStorage is disabled');
      });

      expect(() => LanguageStorage.clear()).not.toThrow();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });
});
