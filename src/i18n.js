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
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;