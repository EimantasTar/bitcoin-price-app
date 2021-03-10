import i18n from 'i18next';
import { lithuanian } from './locales/translation-lt';
import { english } from './locales/translation-en';
import { initReactI18next } from 'react-i18next';

const resources = {
    lt: {
        translation: lithuanian
    },
    en: {
        translation: english
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    }).then();

export default i18n;
