import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (namespace: string = 'common') => {
  return useI18nTranslation(namespace);
};