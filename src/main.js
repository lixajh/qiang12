import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import { Loading } from 'element-ui';
import VcPopupOver from 'vc-popup-over'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Loading.directive);
Vue.use(VcPopupOver)
Vue.prototype.$loading = Loading.service;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
