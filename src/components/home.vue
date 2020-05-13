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

    <div class="funds">
      <strong>
        Saldo :
      </strong>
      <span>
        {{ funds }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
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

.funds strong {
  font-size: 30px;
}
.funds span {
  font-size: 25px;
  color: #666;
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
