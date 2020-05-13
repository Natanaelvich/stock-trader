<template>
  <div class="box">
    <div class="title">
      <strong>Nome <small>(Preço : PRECO)</small></strong>
    </div>
    <div class="form">
      <form>
        <div>
          <md-field>
            <label>Quantidade</label>
            <md-input type="number"></md-input>
          </md-field>
        </div>
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
  padding: 20px 10px;
}
.box .form form {
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0 5px;
}

.form form div {
  flex: 1;
}
.form form button {
  border: 0;
  background: green;
  color: #fff;
  padding: 3px 8px;
  text-align: center;
}
</style>
