import { ui } from './ui';

type Lang = 'pl' | 'en' | 'de';

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const translations = ui as any;
    return translations[key]?.[lang] || translations[key]?.['pl'] || key;
  }
}
