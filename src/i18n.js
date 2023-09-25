import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import localStorage from "redux-persist/es/storage";
const en = require("./i18n/En.json");
const kr = require("./i18n/Kr.json");
const uz = require("./i18n/Uz.json");
const ru = require("./i18n/Ru.json");
const sa = require("./i18n/Sa.json");

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
let defaultLng = "1";
const mapLngToIndex = {
  0: "kr",
  1: "en",
  2: "ru",
  3: "sa",
  4: "uz",
};
const ls = localStorage.getItem("persist:root");
(async () => {
  const data = await ls;
  const parsed = JSON.parse(data);
  defaultLng = parsed["lngActiveIndex"];

  const resources = {
    en: {
      translation: en,
    },
    kr: {
      translation: kr,
    },
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
    sa: {
      translation: sa,
    },
  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: mapLngToIndex[defaultLng], // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
})();

export default i18n;
