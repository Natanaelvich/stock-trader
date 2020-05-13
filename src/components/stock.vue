<template>
  <div class="box">
    <div class="title">
      <strong
        >{{ stock.name }}
        <small>(Preço : {{ stock.price }})</small></strong
      >
    </div>
    <div class="form">
      <form>
        <div>
          <md-field :class="messageClass">
            <label>Quantidade</label>
            <md-input
              min="0"
              step="any"
              v-model.number="quantity"
              type="number"
            ></md-input>
            <span class="md-error">Seu saldo é Insuficiente</span>
          </md-field>
        </div>
        <md-button
          :disabled="
            quantity <= 0 ||
              !Number.isInteger(quantity) ||
              insufficientFunds
          "
          @click.prevent.stop="buyStock"
          class="md-raised md-primary"
        >
          {{ insufficientFunds ? "Insuficiente" : "Comprar" }}
        </md-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: Object,
    methodo: Function,
  },

  data() {
    return {
      quantity: 0,
    };
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },

    insufficientFunds() {
      return this.stock.price * this.quantity >= this.funds;
    },

    messageClass() {
      return {
        "md-invalid": this.insufficientFunds,
      };
    },
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;

      return order;
    },
  },
};
</script>

<style scoped>
.box {
  background: #ddd;
  margin: 10px;

  box-shadow: 2px 8px 21px -1px rgba(168, 168, 168, 1);
}
.box .title {
  background: green;
  padding: 10px 5px;
  color: #fff;
}
.box .title strong {
  font-weight: bold;
}
.box .title strong small {
  font-weight: normal;
}

.box .form {
  padding: 20px 10px;
}
.box .form form {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex: 1;
  padding: 0 5px;
}

.form form div {
  flex: 1;
}
</style>
