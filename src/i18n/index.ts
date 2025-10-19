import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './translations/ru';
import en from './translations/en';

i18n
  .use(LanguageDetector) // автоматически определяет язык браузера
  .use(initReactI18next) // подключение react-i18next
  .init({
    resources: {
      ru,
      en,
    },
    fallbackLng: 'en',          // язык по умолчанию
    supportedLngs: ['en', 'ru'], // список поддерживаемых языков
    load: 'languageOnly',       // игнорируем региональные суффиксы
    ns: ['translations'],       // общий namespace
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,       // не нужно для React
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,        // современный способ ожидания загрузки
    },
  });

export default i18n;
