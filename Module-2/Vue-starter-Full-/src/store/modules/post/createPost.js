import axios from "@/service/axios.js";

export const post = {
  state: () => ({ authMessage: "" }),

  mutations: {
    SET_MESSAGES(state, payload) {
      state.authMessage = payload;
    },
  },

  actions: {
    ADD_POST: async ({ commit }, payload) => {
      try {
        const response = await axios.post("/post", payload, {
          headers: {
            "Content-Type": "multipart/form-data",
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
