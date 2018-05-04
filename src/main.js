import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import { Loading } from 'element-ui';

import Icon from 'vue-svg-icon/Icon.vue';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Loading.directive);
Vue.use(MuseUI)
Vue.component('icon', Icon); 
Vue.prototype.$loading = Loading.service;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
