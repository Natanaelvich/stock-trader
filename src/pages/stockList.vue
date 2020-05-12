<template>
  <div class="stock-list">
    <h1>StokList</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.stock-list {
  animation-name: slide-right;
  animation-duration: 0.5s;
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
