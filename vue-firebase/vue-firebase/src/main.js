import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'

// router setup
import router from './routes/router';

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/css/style.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom-style.css'
import { VBTogglePlugin } from 'bootstrap-vue'

//PWA
import './registerServiceWorker'

//store
import store from "./store";
import firebase from "firebase/app";

//firebase config
const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(RouterPrefetch)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VBTogglePlugin)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
