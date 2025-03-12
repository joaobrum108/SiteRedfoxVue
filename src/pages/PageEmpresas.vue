<template>
  <div v-show="Desktop" class="containerFull">
    <Header />
    <div class="sessao1">
      <div
        class="InformacaoCaixa"
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
          gap: 5rem;
        "
      >
        <span>
          <img src="../assets/rg.svg" alt="" />
        </span>
        <span
          ><h2 style="color: #fff; font-size: 2.5rem">
            Internet sob medida
          </h2></span
        >
      </div>
      <div
        style="
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <Formulario />
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5rem;
          height: 100vh;
        "
      >
        <CardInfo />
        <CardInfo2 />
      </div>
      <div style="display: flex; justify-content: center; align-items: center">
        <BtnAS />
      </div>
      <div class="bannercorp"></div>
      <Sanfornas />
      <div style="margin-top: -10px"><Footer /></div>
    </div>
  </div>

  <div v-show="Mobile" class="containerFull"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const tamanhoTela = ref(window.innerWidth);
const Mobile = computed(() => tamanhoTela.value <= 1021);
const Desktop = computed(() => tamanhoTela.value > 1021);

const atualizarTamanhoTela = () => {
  tamanhoTela.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", atualizarTamanhoTela);
});

onUnmounted(() => {
  window.removeEventListener("resize", atualizarTamanhoTela);
});

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Formulario from "../components/Formulario.vue";
import CardInfo from "../components/CardInfo.vue";
import CardInfo2 from "../components/CardInfo2.vue";
import BtnAS from "../components/BtnAS.vue";
import Sanfornas from "../components/sanfornas.vue";
</script>

<style scoped>
.sessao1 {
  height: 240vh;
  background-image: url(../assets/cop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.bannercorp {
  background-image: url(../assets/nd.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;
}
</style>
