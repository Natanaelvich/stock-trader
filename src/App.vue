<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  components: {
    Header,
  },

  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  color: #2c3e50;
}

.md-field {
  margin: 0 !important;
}

.md-button.md-theme-default.md-raised {
  margin: 0 !important;
}

:root {
  --md-theme-default-primary: green !important;
  --md-theme-default-accent: #ff5252;
  --md-theme-default-theme: light;
}
</style>
