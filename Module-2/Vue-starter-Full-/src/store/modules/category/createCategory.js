import axios from "@/service/axios.js";

export const category = {
  state: () => ({ authMessage: "" }),

  mutations: {
    SET_MESSAGES(state, payload) {
      state.authMessage = payload;
    },
  },

  actions: {
    ADD_CATEGORY: async ({ commit }, payload) => {
      try {
        const response = await axios.post("/category", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

        console.log(response);
        if (response.status == 201) {
          return true;
        } else {
        }
        commit("SET_MESSAGES", "");

        return response;
      } catch (err) {
        console.log(err);
        if (err.response.status == 500) {
          commit("SET_MESSAGES", err.response.data.message[0].message);
        } else {
          commit("SET_MESSAGES", err.response.data.message);
        }
      }
    },
  },
};
