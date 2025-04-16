import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './translations/ru';
import en from './translations/en';

i18n.use(LanguageDetector).init({
    resources: {
        ru,
        en,
    },

    fallbackLng: 'en',
    whitelist: ['en', 'ru'],
    load: 'languageOnly',
    nonExplicitWhitelist: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});

export default i18n;
