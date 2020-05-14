export default {
  state: {
    stocks: [],
  },

  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
    radomPriceStocks(state) {
      state.stocks.forEach((stock) => {
        stock.price = Math.round(
          stock.price * (1 + Math.random() - 0.45),
        );
      });
    },
  },

  actions: {
    buyStock({ commit }, order) {
      commit("buyStock", order);
    },

    initStocks({ commit }) {
      commit("setStocks", [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 330 },
        { id: 4, name: "Twitter", price: 440 },
      ]);
    },

    radomPriceStocks({ commit }) {
      commit("radomPriceStocks");
    },
  },

  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
