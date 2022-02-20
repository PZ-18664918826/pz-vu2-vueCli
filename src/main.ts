// import { createApp } from 'vue-demi';
// import VueCompositionAPI from '@vue/composition-api';
// import { setupAssets } from './plugins';
// import { setupStore } from './store';
// import App from './App.vue';

// async function setupApp() {
//   const app = createApp(App);
//   // 优先挂载全局状态
//   setupStore(app);
//   app.use(VueCompositionAPI);
//   app.mount('#app');
// }

// setupApp();
// setupAssets();

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
