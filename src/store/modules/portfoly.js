export default {
  state: {
    funds: 10000,
    stocksPortfoly: [],
  },

  mutations: {
    buyStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocksPortfoly.find(
        (element) => element.id === stockId,
      );

      if (record) {
        record.quantity += quantity;
      } else {
        state.stocksPortfoly.push({
          id: stockId,
          quantity: quantity,
        });
      }

      state.funds -= stockPrice * quantity;
    },

    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocksPortfoly.find(
        (element) => element.id === stockId,
      );
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocksPortfoly.splice(
          state.stocksPortfoly.indexOf(record),
          1,
        );
      }

      state.funds += stockPrice * quantity;
    },
  },

  actions: {
    sellStock({ commit }, order) {
      commit("sellStock", order);
    },
  },

  getters: {
    stocksPortfoly(state, getters) {
      return state.stocksPortfoly.map((stock) => {
        const record = getters.stocks.find(
          (element) => element.id === stock.id,
        );

        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        };
      });
    },

    funds(state) {
      return state.funds;
    },
  },
};
