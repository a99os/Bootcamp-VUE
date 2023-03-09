import axios from "@/service/axios.js";

export const postActions = {
  state: () => ({ authMessage: "", postList: [] }),

  mutations: {
    SET_MESSAGES(state, payload) {
      state.authMessage = payload;
    },
    SET_POST_LIST(state, payload) {
      state.postList = payload;
    },
  },

  actions: {
    GET_POST: async ({ commit }, payload) => {
      try {
        const response = await axios.get("/post");

        console.log(response);
        if (response.status == 200) {
          commit("SET_MESSAGES", "");
          commit("SET_POST_LIST", response.data);
          return true;
        }
      } catch (err) {
        console.log(err);
        if (err.response.status == 500) {
          commit("SET_MESSAGES", err.response.data.message[0].message);
        } else {
          commit("SET_MESSAGES", err.response.data.message);
        }
      }
    },

    DELETE_POST: async ({ commit, dispatch }, id) => {
      try {
        console.log(id);
        const response = await axios.delete(`/post/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        if (response.status == 200) {
          commit("SET_MESSAGES", "");
          dispatch("GET_POST");
          return true;
        }
      } catch (err) {
        console.log(err);
        if (err?.response?.status == 500) {
          commit("SET_MESSAGES", err.response.data.message[0].message);
        } else {
          commit("SET_MESSAGES", err.response.data.message);
        }
      }
    },
  },
};
