import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js";
import "normalize.css"
//import axios from 'axios';
import i18n from './i18n.js'
//const lang = localStorage.getItem('lang') || 'en';
//axios.defaults.baseURL = 'https://localhost:5000/';
//axios.defaults.headers = ['Accept-Language'] = lang;

// Import bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
// import VueI18n from "vue-i18n"
// // import translations
// import ar from "./Locales/ar.json";
// import en from "./Locales/en.json";
// Vue.use(VueI18n)

// configure i18n
// Custom Formatter implementation


// const i18n = new VueI18n({
//   locale: "ar",
//   fallbackLocale: "en",

//   messages: { ar, en },
// })
// Import the VueI18n class correctly


new Vue({
  router,
  
 store,
 i18n,
  render: h => h(App)
}).$mount('#app')