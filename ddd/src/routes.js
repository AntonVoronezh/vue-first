import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routerHistory = createWebHashHistory();

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});

export default routes;
