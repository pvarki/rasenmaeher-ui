import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFI from "./assets/locale/fi.json";
import translationEN from "./assets/locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fi: {
      translation: translationFI,
    },
    en: {
      translation: translationEN,
    },
  },
  lng: "fi",
  fallbackLng: "fi",

  interpolation: {
    escapeValue: false,
  },
});
