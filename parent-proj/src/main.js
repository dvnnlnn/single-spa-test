import Vue from 'vue';
import Ant from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import './single-spa-config';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Ant);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
