import { reqPersons } from "../api";
export default {
  namespaced: true,
  state: {
    persons: {
      list: [],
      pageTotal:0
    }
  },
  actions: {
    async getPersonList({commit}) {
      const result = await reqPersons();
      console.log('请求人员。。。', result);
      if (result.data) {
        commit('HANDLE_PERSON_LIST',result.data);
      }
    }
  },
  mutations: {
    HANDLE_PERSON_LIST(state,data) {
      state.persons = data;
    }
  },
};
