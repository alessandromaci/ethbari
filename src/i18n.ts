import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Carica traduzioni da /public/locales
  .use(LanguageDetector) // Rileva la lingua del browser
  .use(initReactI18next) // Passa i18n instance a react-i18next.
  .init({
    supportedLngs: ['it', 'en'],
    fallbackLng: 'en', // Lingua di fallback se la lingua rilevata non è disponibile
    debug: true, // Abilita i log di debug per i18next (rimuovere in produzione)
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Percorso ai file di traduzione
    },
    react: {
      useSuspense: true, // Usa Suspense per il caricamento delle traduzioni (raccomandato)
    },
  });

export default i18n; 