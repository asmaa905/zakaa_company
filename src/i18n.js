import Vue from 'vue'

import VueI18n from "vue-i18n"
// import translations
import ar from "./Locales/ar.json";
import en from "./Locales/en.json";

Vue.use(VueI18n)
export default new VueI18n({
    locale: localStorage.getItem('lang') || 'ar',
   fallbackLocale: "en",
  
    messages: { ar, en },
  })