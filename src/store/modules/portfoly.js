export default {
  state: {},

  mutations: {
    buyStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(
        (element) => element.id === stockId,
      );

      if (record) {
        record.stocks.push({
          id: stockId,
          quantity,
        });
      }

      state.funds -= stockPrice * quantity;
    },
  },

  actions: {},

  getters: {},
};
