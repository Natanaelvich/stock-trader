<template>
  <div class="box">
    <div class="title">
      <strong>Nome <small>(Preço : PRECO)</small></strong>
    </div>
    <div class="form">
      <form>
        <input type="text" />
        <button>COMPRAR</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
  padding: 20px 0;
}
.box .form form {
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0 5px;
}
.form form input {
  flex: 1;
  border: 0;
  border-bottom: 2px solid #fff;
  background: transparent;
}
.form form button {
  border: 0;
  background: green;
  color: #fff;
  padding: 3px 8px;
  text-align: center;
}
</style>
