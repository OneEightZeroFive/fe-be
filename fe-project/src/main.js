import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import axios from 'axios';
Vue.use(MuseUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')