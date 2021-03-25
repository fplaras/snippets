import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'
// router setup
import router from './routes/router';
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(RouterPrefetch)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
