import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "Feels like": "Feels like",
        Sunday: "Sunday",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
        Humidity:"Humidity",
        'Broken clouds':'Broken clouds',
        'Thunderstorm with light rain':'Thunderstorm with light rain',
        "Overcast clouds": "Overcast clouds",
        "Unknown Precipitation":"Unknown Precipitation",
        "Scattered clouds":"Scattered clouds",
        "Few clouds":"Few clouds",
        "Clear sky":"Clear sky",
        "Freezing Fog":"Freezing Fog",
        'Fog':'Fog'
      }
    },
    ru: {
      translations: {
        "Feels like": "Ощущается",
        Sunday: "Воскресенье",
        Monday: "Понедельник",
        Tuesday: "Вторник",
        Wednesday: "Среда",
        Thursday: "Четверг",
        Friday: "Пятница",
        Saturday: "Суббота",
        Humidity:"Влажность",
        'Broken clouds':'Облачно',
        "Overcast clouds": "Пасмурно",
        "Unknown Precipitation":"Неизвестные осадки",
        "Scattered clouds":"Рассеянные облака",
        "Few clouds":"малооблачно",
        "Clear sky":"ясно",
        "Freezing Fog":"Морозный туман",
        'Fog':'Туман'
      }
    },

    be: {
      translations: {
        "Feels like": "Адчуваецца як",
        Sunday: "Нядзеля",
        Monday: "Панядзелак",
        Tuesday: "Аўторак",
        Wednesday: "Серада",
        Thursday: "Чацьвер",
        Friday: "Пятніца",
        Saturday: "Субота",
        Humidity:"Вільготнасць",
        'Broken clouds':'Воблачна',
        'Thunderstorm with light rain':'Thunderstorm with light rain',
        "Overcast clouds":"Пасмурна",
        "Unknown Precipitation":"Невядомыя ападкі",
        "Scattered clouds":"Невялікія хмары",
        "Few clouds":"малавоблачна",
        "Clear sky":"ясна",
        "Freezing Fog":"Замярзаючы туман",
        'Fog':'Туман'
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;