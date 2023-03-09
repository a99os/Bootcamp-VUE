import axios from "@/service/axios.js";

export const categoryActions = {
  state: () => ({ authMessage: "", categoryList: [] }),

  mutations: {
    SET_MESSAGES(state, payload) {
      state.authMessage = payload;
    },
    SET_CATEGORY_LIST(state, payload) {
      state.categoryList = payload;
    },
  },

  actions: {
    GET_CATEGORY: async ({ commit }, payload) => {
      try {
        const response = await axios.get("/category", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

        console.log(response);
        if (response.status == 200) {
          commit("SET_MESSAGES", "");
          commit("SET_CATEGORY_LIST", response.data);
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

    DELETE_CATEGORY: async ({ commit, dispatch }, id) => {
      try {
        console.log(id);
        const response = await axios.delete(`/category/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        if (response.status == 200) {
          commit("SET_MESSAGES", "");
          dispatch("GET_CATEGORY");
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
