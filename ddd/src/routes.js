import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routerHistory = createWebHashHistory();

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import NotFoundPage from "./pages/notFound";
import ItemAlias from "./pages/itemAlias";

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:itemAlias",
      name: "itemAlias",
      component: ItemAlias,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routes;
