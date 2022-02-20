import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';
import { setupAssets } from './plugins';
import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  render: h => h(App),
  pinia
}).$mount('#app');
setupAssets();
