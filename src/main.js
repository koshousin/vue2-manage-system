import Vue from 'vue'
import App from './App.vue'
import { Checkbox } from 'element-ui'
import router from './router'
import store from './store'
import dialogDrag from './plugins/dialogDrag'
import i18n from './plugins/i18n'
import './assets/css/main.css'
import './mock'

Vue.config.productionTip = false
Vue.use(dialogDrag)
Vue.component('el-checkbox',Checkbox);

new Vue({
  render: h => h(App),
  i18n,
  router,
  store,
  beforeCreate() {
    /* 添加事件总线 */
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
