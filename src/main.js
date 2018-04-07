import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
