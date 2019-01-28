import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import quicklink from 'quicklink/dist/quicklink'

import './styles/base.scss'

import './utils/mrem'

Vue.config.productionTip = false

quicklink()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
