import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const publicUrl = import.meta.env.VITE_PUBLIC_URL;

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${publicUrl}/locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;
