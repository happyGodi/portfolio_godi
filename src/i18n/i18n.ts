import { createI18n } from "vue-i18n";
import en from './locales/en.json';
import fr from './locales/fr.json';

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_DEFAULT_LOCALE ,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages: {
        en,
        fr,
    },
    globalInjection: true
})

export default i18n