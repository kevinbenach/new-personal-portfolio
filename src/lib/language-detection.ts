// Simple server-side language detection for Astro
export function detectLanguage(request?: Request): string {
  // Check URL parameters first (for future URL-based i18n)
  if (request) {
    const url = new URL(request.url);
    const langParam = url.searchParams.get('lang');
    if (langParam && ['en', 'es'].includes(langParam)) {
      return langParam;
    }
  }

  // For now, we'll default to English and let client-side handle detection
  // In a full i18n setup, we could check Accept-Language header here
  return 'en';
}