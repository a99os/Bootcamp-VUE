import axios from "@/service/axios.js";
export const auth = {
  state: () => ({
    token: null,
    isAuth: false,
    authMessage: null,
    username: null,
    role: null,
  }),

  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
      window.localStorage.setItem("username", state.username);
    },
    SET_ROLE(state, payload) {
      state.role = payload;
      window.localStorage.setItem("role", state.role);
    },

    SET_MESSAGE(state, payload) {
      state.authMessage = payload;
    },

    SET_TOKEN(state, token) {
      state.token = token;
      window.localStorage.setItem("token", state.token);
    },
  },

  actions: {
    LOGIN_USER: async ({ commit }, payload) => {
      try {
        const response = await axios.post("/admin/login", payload);
        commit("SET_AUTH", true);
        commit("SET_TOKEN", response.data.token);
        commit("SET_USERNAME", response.data.username);
        commit("SET_ROLE", response.data.role);
        commit("SET_MESSAGE", null);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        commit("SET_AUTH", false);
        commit("SET_MESSAGE", error);
        commit("SET_TOKEN", null);
        commit("SET_USERNAME", null);
        commit("SET_ROLE", null);
      }
    },
  },
};
