<script setup>
import Header from "../components/Header.vue";
import Formulario from "../components/Formulario.vue";
import CardInfo from "../components/CardInfo.vue";
import CardInfo2 from "../components/CardInfo2.vue";
import Sanfornas from "../components/sanfornas.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <div class="corporativo-Container">
    <div class="top-section">
      <img src="../assets/rg.svg" alt="" />
      <h1>Internet sob medida</h1>
    </div>
    <div class="form-section">
      <Formulario />
    </div>
  </div>
  <div class="sessao3">
    <CardInfo />
    <CardInfo2 />
  </div>
  <div class="sessao4">
    <Sanfornas />
  </div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.corporativo-Container {
  background-image: url(../assets/cop.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.top-section img {
  width: 150px !important;
}

.top-section h1 {
  color: #fff;
  font-size: 1rem !important;
  text-align: center;
}

.form-section {
  width: 100%;
  max-width: 200px;
  margin-top: 1rem;
}

.sessao3 {
  background-color: #000000;
  min-height: 220vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
}

.sessao4 {
  background-color: #fff;
  min-height: 42vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

@media (max-width: 400px) {
  .top-section h1 {
    font-size: 0.8rem;
  }

  .form-section {
    max-width: 180px;
  }

  .sessao3 {
    gap: 0.5rem;
  }
}

@media (max-width: 300px) {
  .top-section h1 {
    font-size: 0.7rem;
  }

  .form-section {
    max-width: 160px;
  }

  .sessao3 {
    gap: 0.3rem;
  }
}
</style>
