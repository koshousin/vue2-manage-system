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
        return Promise.resolve("登录成功");
      } else {
        //console.log('请求失败。。');
        return Promise.reject(result.msg);
      }
    },
    async getRegister() {
      
    }
  },
  mutations: {
    HANDLE_LOGIN_INFO(state,data) {
      state.userInfo = data
    }
  }
}

