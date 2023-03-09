import { createStore } from "vuex";
import { auth } from "./modules/auth/auth.js";
// import { signup } from "./modules/auth/signup.js";

const store = createStore({
  modules: { auth },
});

export default store;
