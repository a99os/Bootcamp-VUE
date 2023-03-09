import axios from "@/service/axios.js";

export const adminActions = {
  state: () => ({ authMessage: "", adminList: [] }),

  mutations: {
    SET_MESSAGES(state, payload) {
      state.authMessage = payload;
    },
    SET_ADMIN_LIST(state, payload) {
      state.adminList = payload;
    },
  },

  actions: {
    GET_ADMIN: async ({ commit }, payload) => {
      try {
        const response = await axios.get("/admin", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

        console.log(response);
        if (response.status == 200) {
          commit("SET_MESSAGES", "");
          commit("SET_ADMIN_LIST", response.data);
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

    DELETE_ADMIN: async ({ commit, dispatch }, id) => {
      try {
        console.log(id);
        const response = await axios.delete(`admin/delete/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        if (response.status == 200) {
          commit("SET_MESSAGES", "");
          dispatch("GET_ADMIN");
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
