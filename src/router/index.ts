import { createRouter, createWebHistory } from "vue-router";
import eCommerce from "../components/eCommerce.vue";
import Projects from "../components/Projects.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayout",
    },
  },
  {
    path: "/e-commerce",
    name: "eCommerce",
    component: eCommerce,
    meta: {
      layout: "AppLayout",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      layout: "AppLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;