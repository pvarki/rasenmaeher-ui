import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

void i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: "fi",
    fallbackLng: "fi",
    backend: {
      backends: [
        LocalStorageBackend,
        resourcesToBackend(
          async (lang: string) => import(`./assets/locale/${lang}.json`),
        ),
      ],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
      ],
    },
    interpolation: {
      escapeValue: false,
    },
  });
