import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signin",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "registration",
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/addpost",
      name: "addpost",
      component: () => import("../views/Post/AddPost.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/Post/Post.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/Admin.vue"),

      children: [
        {
          path: "/admin/add",
          name: "add",
          component: () => import("../views/AddAdmin.vue"),
        },
        {
          path: "/admin/list",
          name: "list",
          component: () => import("../views/AdminLists.vue"),
        },
      ],
    },
    {
      path: "/category",
      component: () => import("../views/Category/Category.vue"),

      children: [
        {
          path: "/category/add",
          name: "category_add",
          component: () => import("../views/Category/AddCategory.vue"),
        },
        {
          path: "/category/list",
          name: "category_list",
          component: () => import("../views/Category/CategoryList.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
