import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Language } from "./lang/Language";
import translationEN from "./lang/en.json";
import translationFR from "./lang/fr.json";

// Retrieve saved language from localStorage
const savedLang = localStorage.getItem("lang");
const defaultLanguage = savedLang ? JSON.parse(savedLang) : Language.FR;

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,

    keySeparator: ".", // To support nested translations

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
