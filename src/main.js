import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from "./vuex/store";
import router from "./router/router";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
