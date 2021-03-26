import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'
// router setup
import router from './routes/router';

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(RouterPrefetch)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
