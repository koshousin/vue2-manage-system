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
        localStorage.setItem("userInfo",JSON.stringify(result.data));
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
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        return Promise.resolve(result.msg);
      } else {
        return Promise.reject(result.msg);
      }
    }
  },
  mutations: {
    HANDLE_LOGIN_INFO(state,data) {
      state.userInfo = data
    }
  }
}

