// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend'; // <---- add this

import translationEN from './locales/en.json';
import translationUK from './locales/uk.json';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

export const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: options,
    supportedLngs: ['en', 'uk'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
