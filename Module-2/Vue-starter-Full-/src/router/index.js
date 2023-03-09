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
      name: "signin",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/admin/:add",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      children: [
        {
          path: "add",
          component: () => import("../views/AddAdmin.vue"),
        },
        {
          path: "list",
          component: () => import("../views/AdminList.vue"),
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
