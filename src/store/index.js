import Vuex from 'vuex'
import Vue from 'vue'
import loginAbout from './login'

Vue.use(Vuex);

/* 模块化状态管理 */
export default new Vuex.Store({
  modules: {
    loginAbout
  }
})
