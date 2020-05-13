<template>
  <div class="stock-list">
    <div class="no-sells" v-if="stocks.length === 0">
      <img src="../assets/empty.svg" alt="empty" />
      <span class="md-display-2">Você não comprou nenhuma ação</span>
    </div>
    <div class="cards" v-if="stocks.length > 0">
      <StockPortfoly
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
        :methodo="sellStock"
      />
    </div>
  </div>
</template>

<script>
import StockPortfoly from "../components/stockPortfoly";
export default {
  components: {
    StockPortfoly,
  },

  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch("sellStock", order);
      this.quantity = 0;

      return order;
    },
  },

  computed: {
    stocks() {
      return this.$store.getters.stocksPortfoly;
    },
  },
};
</script>

<style scoped>
.stock-list {
  animation-name: slide-right;
  animation-duration: 0.5s;
  height: 100%;
}

.no-sells {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.no-sells img {
  height: 400px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 0 40px;
}

button {
  background: orangered !important;
}

@media (max-width: 860px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 383px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
/* animation slide right */
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
