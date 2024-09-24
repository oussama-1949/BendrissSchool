// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from "./locales/en/translation.json";
import frTranslations from './locales/fr/transalation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
