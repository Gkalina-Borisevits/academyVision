import i18next, { Resource } from "i18next"
import translationDe from "../locales/de/translation.json"
import translationEn from "../locales/en/translation.json"
import translationRu from "../locales/ru/translation.json"
import translationUa from"../locales/ua/translation.json"

import I18NextHttpBackend from "i18next-http-backend"
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"



const resources: Resource = {
  de: { translation: translationDe },
  en: { translation: translationEn },
  ru: { translation: translationRu },
  ua: { translation: translationUa },
}

i18next
  .use(initReactI18next)
  .use(i18nextBrowserLanguagedetector)
  .use(I18NextHttpBackend)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
