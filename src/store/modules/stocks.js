export default {
  state: {
    stocks: [],
  },

  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
  },

  actions: {
    buyStock({ commit }, order) {
      commit();
    },

    initStocks({ commit }) {
      commit("setStocks", [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 330 },
        { id: 4, name: "Twitter", price: 440 },
      ]);
    },
  },

  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
