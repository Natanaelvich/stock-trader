import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Stocks from "./modules/stocks";
import Portfoly from "./modules/portfoly";

export default new Vuex.Store({
  modules: {
    Stocks,
    Portfoly,
  },
});
