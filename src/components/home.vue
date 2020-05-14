<template>
  <div class="home">
    <span class="md-display-1">Negocie e Consulte suas ações</span>

    <div class="card">
      <md-card class="md-primary">
        <md-card-header>
          <div class="md-title">
            <md-icon class="md-accent">info</md-icon>
            Você pode Salvar & Carregar os Dados.
          </div>
        </md-card-header>
      </md-card>
    </div>

    <div class="card">
      <md-card class="md-accent">
        <md-card-header>
          <div class="md-title">
            <md-icon class="md-accent">calendar_today</md-icon>
            Clique em 'Finalizar Dia' para iniciar um novo dia!
          </div>
        </md-card-header>
      </md-card>
    </div>

    <div class="funds">
      <span class="md-display-1">
        Seu Saldo :
      </span>
      <span class="md-display-1">
        {{ funds }}
      </span>
    </div>
  </div>
</template>

<script>
import { formatPrice } from "@/utils/format";
export default {
  computed: {
    funds() {
      return formatPrice(this.$store.getters.funds);
    },
  },
};
</script>

<style scoped>
.home {
  animation-name: slide-right;
  animation-duration: 0.5s;
  padding: 40px;
}

.card {
  margin-top: 20px;
  box-shadow: 2px 8px 21px -1px rgba(168, 168, 168, 1);
}
.card div {
  margin: 0 !important;
}

.card i {
  color: #fff !important;
}

.funds {
  margin-top: 20px;
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
