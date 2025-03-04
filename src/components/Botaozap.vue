<template>
  <button class="assine-ja-btn" @click="redirecionarParaTelefone">
    Assine Já
  </button>
</template>

<script setup>
const redirecionarParaTelefone = () => {
  window.location.href = "tel:1124842656";
};
</script>

<style scoped>
.assine-ja-btn {
  background-color: #ff0000;
  color: #ffffff;
  font-size: 24px;
  width: 200px;
  padding: 20px 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.assine-ja-btn:hover {
  background-color: #cc0000;
}

@media (max-width: 768px) {
  .assine-ja-btn {
    font-size: 18px;
    width: 160px;
    padding: 15px 30px;
  }
}
</style>
