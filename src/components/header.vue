<template>
  <div class="header">
    <div class="title">
      <strong>Stock</strong>
      <span>Trader</span>
    </div>
    <div class="buttons">
      <button>
        <router-link to="/">
          INICIO
        </router-link>
      </button>
      <button @click="navigateTo('portfoly')">PORTIFOLIO</button>
      <button @click="navigateTo('stocks')">AÇÕES</button>
    </div>
    <div class="options">
      <button @click="endDay">Finalizar Dia</button>
      <div>
        <md-menu md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Salvar & Carregar</md-button>

          <md-menu-content>
            <md-menu-item>
              <button @click="saveData">
                Salvar
              </button>
            </md-menu-item>
            <md-menu-item>
              <button @click="loadData">
                Carregar
              </button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
      <div class="funds">
        <strong>
          Seu Saldo :
        </strong>
        <span> {{ funds }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from "@/utils/format";

export default {
  created() {
    this.$store.dispatch("setFunds");
  },
  computed: {
    funds() {
      return formatPrice(this.$store.getters.funds);
    },
  },

  methods: {
    navigateTo(page) {
      this.$router.push(`/${page}`).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },

    endDay() {
      this.$store.dispatch("radomPriceStocks");
    },

    saveData() {
      const { funds, stocksPortfoly, stocks } = this.$store.getters;

      this.$http.put("data.json", { funds, stocksPortfoly, stocks });
    },

    loadData() {
      this.$store.dispatch("loadData");
    },
  },
};
</script>

<style scoped>
.header {
  padding: 10px 10px;
  box-shadow: 0px 3px 3px 0px rgba(173, 173, 173, 1);
  display: flex;
  align-items: center;
}

.title strong {
  font-size: 26px;
  font-weight: 500;
  color: #444;
}
.title span {
  font-size: 26px;
  color: #666;
  font-weight: 300;
}

.buttons {
  margin-left: 30px;
  display: flex;
}

button {
  border: 0;
  background: transparent;
  padding: 10px;
  align-items: center;
  justify-content: center;
  transition: background 0.5s;
  margin: 0;
  border-radius: 10px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #ddd;
}
button a {
  text-decoration: none !important;
  color: #444 !important;
}

.options {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.funds {
  background: #ddd;
  padding: 5px;
  border-radius: 8px;
}
.funds strong {
  font-size: 20px;
  color: #444;
}
.funds span {
  font-size: 15px;
  color: #666;
}
</style>
