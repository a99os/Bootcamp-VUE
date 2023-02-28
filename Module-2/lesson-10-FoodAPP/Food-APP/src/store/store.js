import { createStore } from "vuex";
import increment from "../service/increment";
export const store = createStore({
  state() {
    return {
      price: 2.39,
      meals: [],
    };
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { increment },
});
