import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Discount from "@/views/Discount.vue";
import NotFound from "@/views/PageNotFount.vue";
import Main from "@/components/Main/Main.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
      redirect: (to) => {
        return { path: "/home/category/Beef" };
      },
      children: [
        {
          path: "/home/category/:value",
          name: "Category",
          component: Main,
        },
        {
          path: "/home/search/:value",
          name: "Search",
          component: Main,
        },
        {
          path: "/home/letter/:value",
          name: "letter",
          component: Main,
        },
      ],
    },
    {
      path: "/",
      redirect: (to) => {
        return { path: "/home/category/Beef" };
      },
    },
    {
      path: "/home/search",
      redirect: (to) => {
        return { path: "/home/category/Beef" };
      },
    },

    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
