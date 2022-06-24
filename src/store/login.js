import { reqLogin,reqRegister } from "../api"
export default {
  namespaced: true,
  state: {
    userInfo: {
      name: '',
      date: '',
      _id:''
    }
  },
  actions: {
    async getLoginInfo({ commit }, data) {
      //console.log(data);
      const result = await reqLogin(data);
      //console.log('getLoginInfo', result);
      if (result.code === 0) {
        commit('HANDLE_LOGIN_INFO', result.data);
        commit("SAVE_USERINFO_TO_STORAGE", result.data);
        return Promise.resolve(result.msg);
      } else {
        return Promise.reject(result.msg);
      }
    },
    async getRegister({commit},data) {
      const result = await reqRegister(data);
      //console.log('getLoginInfo', result);
      if (result.code === 0) {
        commit("HANDLE_LOGIN_INFO", result.data);
        commit("SAVE_USERINFO_TO_STORAGE",result.data);
        return Promise.resolve(result.msg);
      } else {
        return Promise.reject(result.msg);
      }
    },
    // 方便生产模式下运行的注册 api
    async getRegisterProd({commit},data) {
      commit("HANDLE_LOGIN_INFO", data);
      commit("SAVE_USERINFO_TO_STORAGE",data);
      return '登陆成功';
    }
  },
  mutations: {
    HANDLE_LOGIN_INFO(state,data) {
      state.userInfo = data
    },
    SAVE_USERINFO_TO_STORAGE(_,data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  }
}

