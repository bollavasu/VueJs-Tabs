import Vue from 'vue'
import App from './App.vue'
import Message from './components/Message.vue'
import {Tabs, Tab} from 'vue-tabs-component';

Vue.config.productionTip = false
Vue.component('app-message', Message);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

new Vue({
  render: h => h(App),
}).$mount('#app')
