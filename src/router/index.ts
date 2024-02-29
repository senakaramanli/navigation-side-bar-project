import { createRouter, createWebHistory } from "vue-router";
import eCommerce from "../components/eCommerce.vue";
import Projects from "../components/Projects.vue";
import Home from "../components/Home.vue";
import LoginPage from "../components/LoginPage.vue";

const isAuthenticated = () => {
  const userToken = localStorage.getItem("token");
  if (userToken === null) {
    return false;
  } else if (userToken === undefined) {
    return false;
  } else return true;
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/e-commerce",
    name: "eCommerce",
    component: eCommerce,
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      layout: "LoginLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (!isAuthenticated() && to.name !== "Login") {
    return { name: "Login" };
  } else if (isAuthenticated() && to.name === "Login") {
    return { name: "Home" };
  }
});

export default router;
