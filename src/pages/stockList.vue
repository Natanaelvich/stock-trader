<template>
  <div class="stock-list">
    <dic class="container">
      <div class="cards">
        <Stock v-for="stock in stocks" :key="stock.id" />
      </div>
    </dic>
  </div>
</template>

<script>
import Stock from "../components/stock";
export default {
  components: {
    Stock,
  },

  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 330 },
        { id: 4, name: "Twitter", price: 440 },
      ],
    };
  },
};
</script>

<style scoped>
.stock-list {
  animation-name: slide-right;
  animation-duration: 0.5s;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 0 40px;
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
