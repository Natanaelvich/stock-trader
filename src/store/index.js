import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";

import Stocks from "./modules/stocks";
import Portfoly from "./modules/portfoly";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    Stocks,
    Portfoly,
  },
});
