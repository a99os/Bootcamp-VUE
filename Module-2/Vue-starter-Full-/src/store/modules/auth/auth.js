import axios from "@/service/axios.js";

export const auth = {
  state: () => ({
    isAuth: false,
    authMessage: "",
    token: "",
    username: "",
    role: "",
  }),

  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
      window.localStorage.setItem("auth", state.isAuth);
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
      window.localStorage.setItem("username", state.username);
    },
    SET_ROLE(state, payload) {
      state.role = payload;
      window.localStorage.setItem("role", state.role);
    },

    SET_MESSAGES(state, payload) {
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
        commit("SET_MESSAGES", "");
        commit("SET_USERNAME", response.data.username);
        commit("SET_ROLE", response.data.role);

        return response;
      } catch (err) {
        console.log(err);

        commit("SET_MESSAGES", err.response.data.message);
        commit("SET_TOKEN", "");
        commit("SET_AUTH", false);
        commit("SET_USERNAME", "");
        commit("SET_ROLE", "");
      }
    },
  },
};
