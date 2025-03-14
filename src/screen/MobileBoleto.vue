<script setup>
import Header from "../components/Header.vue";
import Cardboleto from "../components/cardBoleto.vue";
</script>

<template>
  <div>
    <Header />
    <div class="top-section">
      <h1>Segunda via de Boletos e Desbloqueios</h1>
      <div>
        <Cardboleto />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
}
</style>
