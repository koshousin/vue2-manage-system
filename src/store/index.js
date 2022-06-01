import Vuex from 'vuex'
import Vue from 'vue'
import loginAbout from './login'
import personAbout from './person'

Vue.use(Vuex);

/* 模块化状态管理 */
export default new Vuex.Store({
  modules: {
    loginAbout,
    personAbout
  }
})
