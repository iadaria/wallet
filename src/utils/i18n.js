import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';

import en from '../locales/en.json';
import ru from '../locales/ru.json';
import tr from '../locales/tr.json';

const LANGUAGES = ['en', 'ru', 'tr'];

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    // const locales = RNLocalize.getLocales();
    const locales = LANGUAGES;
    const prefferedLocale = await AsyncStorage.getItem('locale');

    if (prefferedLocale) {
      callback(prefferedLocale);
    } else if (Array.isArray(locales)) {
      //callback(locales[0].languageTag);
      callback(locales[0]);
    } else {
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem('locale', locale);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: { en, ru, tr },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export const getLocale = (i18nInstance) => {
  const locale = i18nInstance.language.slice(0, 2); //|| 'en';
  if (LANGUAGES.includes(locale)) {
    return locale;
  }

  return 'en';
};

export default i18n;
