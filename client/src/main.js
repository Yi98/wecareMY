import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.mixin({
  data: function () {
    return {
      get domain() {
        //return 'http://localhost:3000';
        return 'https://wecaremy.org';
      }
    }
  }
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
