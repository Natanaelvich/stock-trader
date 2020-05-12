import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home";
import Portfoly from "./pages/portfoly";
import Stocks from "./pages/stockList";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/portfoly", name: "Portfoly", component: Portfoly },
    { path: "/stocks", name: "Stocks", component: Stocks },
  ],
});
