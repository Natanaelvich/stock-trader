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
          <md-field>
            <label>Quantidade</label>
            <md-input
              min="0"
              step="any"
              v-model.number="quantity"
              type="number"
            ></md-input>
          </md-field>
        </div>
        <md-button
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          @click.prevent.stop="methodo"
          class="md-raised md-primary"
          >COMPRAR</md-button
        >
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

  methods: {},
};
</script>

<style>
.box {
  background: #ddd;
  margin: 10px;
}
.box .title {
  background: green;
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
  background: green !important;
}
</style>
