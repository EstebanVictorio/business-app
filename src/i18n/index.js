import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import pagesEN from "./locales/en/pages.json"
import commonEN from "./locales/en/common.json"
import dialogEN from "./locales/en/dialog.json"
import pagesES from "./locales/es/pages.json"
import commonES from "./locales/es/common.json"
import dialogES from "./locales/es/dialog.json"

const resources = {
  en: {
    pages: pagesEN,
    common: commonEN,
    dialog: dialogEN,
  },
  es: {
    pages: pagesES,
    common: commonES,
    dialog: dialogES,
  },
}

i18next
.use(initReactI18next)
.init({
  debug: true,
  resources,
  ns: ['pages', 'common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  },
  lng:'en',
  fallbackLng: 'en',
})


export default i18next
