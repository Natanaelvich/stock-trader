<template>
  <div class="box">
    <div class="title">
      <strong
        >{{ stock.name }}
        <small>(Preço : {{ priceFormat }})</small>
        <small>(Quantidade : {{ stock.quantity }})</small>
      </strong>
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
            <span class="md-error">Ultrapassa a quantidade</span>
          </md-field>
        </div>
        <md-button
          :disabled="
            quantity <= 0 ||
              !Number.isInteger(quantity) ||
              insufficientQuantity
          "
          @click.prevent.stop="sellStock"
          class="md-raised md-primary"
        >
          {{ insufficientQuantity ? "Insuficiente" : "Vender" }}
        </md-button>
      </form>
    </div>
  </div>
</template>

<script>
import { formatPrice } from "@/utils/format";
export default {
  props: {
    stock: Object,
  },

  data() {
    return {
      quantity: 0,
    };
  },

  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },

    priceFormat() {
      return formatPrice(this.stock.price);
    },
    messageClass() {
      return {
        "md-invalid": this.insufficientQuantity,
      };
    },
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
};
</script>

<style scoped>
.box {
  background: #ddd;
  margin: 10px;
  box-shadow: 2px 8px 21px -1px rgba(168, 168, 168, 1);
}
.box .title {
  background: orangered;
  padding: 10px 5px;
  color: #fff;
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
.form form button:disabled {
  background: #ddd !important;
}
.form form button {
  display: flex;
  background: orangered !important;
}
</style>
