import Vue from 'vue';
import App from './App';
import router from './router';

// 引入 Bootstrap 的寫法
import '../node_modules/bootstrap/scss/bootstrap.scss';
import 'bootstrap';

import eventBus from './eventBus';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: () => {
    return {
      bus: eventBus,
    };
  },
  router,
  components: { App },
  template: '<App/>',
});
