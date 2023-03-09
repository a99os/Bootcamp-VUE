import { createStore } from "vuex";
import { auth } from "./modules/auth/auth";
import { admin } from "./modules/admin/createadmin";
import { category } from "./modules/category/createCategory";
import { post } from "./modules/post/createPost";
import { adminActions } from "./modules/admin/actionsAdmin";
import { postActions } from "./modules/post/actionsPost";
import { categoryActions } from "./modules/category/actionsCategory";

const store = createStore({
  modules: {
    auth,
    admin,
    category,
    categoryActions,
    postActions,
    adminActions,
    post,
  },
});

export default store;
