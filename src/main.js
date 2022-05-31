import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugin from './plugins'
import './assets/css/main.css'

Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    /* 添加事件总线 */
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
