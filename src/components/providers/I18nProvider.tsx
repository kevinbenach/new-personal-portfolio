import { useEffect } from 'react';
import '../../../lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialize i18n when component mounts
    // This ensures i18n is loaded before any components that use it
  }, []);

  return <>{children}</>;
}