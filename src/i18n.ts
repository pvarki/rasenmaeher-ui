import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { CONTENT_SERVICE } from "./views/products/ContentService";

void i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      backends: [
        LocalStorageBackend,
        resourcesToBackend(async (lang: string, namespace: string) => {
          if (namespace === "productContent") {
            return CONTENT_SERVICE.getTranslations(lang);
          }
          if (namespace === "dynamic") {
            return import(`./assets/set/locale/${lang}.json`);
          }
          return import(`./assets/locale/${lang}.json`);
        }),
      ],
      backendOptions: [
        {
          expirationTime: import.meta.env.PROD ? (
              7 * 24 * 60 * 60 * 1000 // 7 days in production
          ) : (
              1000                    // one second when not a production
          ),
        },
      ],
    },
    ns: ["common", "dynamic", "productContent"], // Add dynamic namespace
    defaultNS: "common", // Set common as the default namespace
    interpolation: {
      escapeValue: false,
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    },
  });

export default i18n;
