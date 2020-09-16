import singleSpaVue from 'single-spa-vue';
import Vue from 'vue';
import Ant from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Ant);

const vueOptions = {
  el: '#child-app',
  router,
  render: (h) => h(App),
};

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions,
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;

export default vueLifecycles;
