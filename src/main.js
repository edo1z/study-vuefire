import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import './plugins/vuefire'
import './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
