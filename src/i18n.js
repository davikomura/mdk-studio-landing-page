// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './locales/translationPT.json';
import translationEN from './locales/translationEN.json';
import translationES from './locales/translationES.json';

const resources = {
  pt: {
    translation: translationPT
  },
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // default language
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;