<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import CardApps from "../components/cardsPreços/CardApps.vue";
import CardApps2 from "../components/cardsPreços/CardApps2.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Sanforna from "../components/sanforna.vue";
import CarroselBanner from "../components/carroselBanner.vue";
import CardMorena from "../components/cardMorena.vue";

const tamanhoTela = ref(window.innerWidth);

const atualizarTamanhoTela = () => {
  tamanhoTela.value = window.innerWidth;
};

const Mobile = computed(() => tamanhoTela.value <= 1021);
const Desktop = computed(() => tamanhoTela.value > 1021);

onMounted(() => {
  window.addEventListener("resize", atualizarTamanhoTela);
});

onUnmounted(() => {
  window.removeEventListener("resize", atualizarTamanhoTela);
});
</script>

<template>
  <div v-show="Desktop" class="containerFull">
    <Header />
    <div
      class="sessao1"
      style="display: flex; flex-direction: column; background-color: #e6e8ed"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        "
      >
        <h1 style="color: #000; font-size: 5rem; font-weight: 500">
          CENTRAL DE APLICATIVOS
        </h1>
        <p style="text-align: center; color: #000; font-size: 1.5rem">
          Apps de entretenimento, educação e utilidade. <br />Cliente Redfox tem
          acesso aos principais streamings por um <br />
          preço especial!
        </p>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: center;
        padding: 2rem;
        background-color: #e6e8ed;
      "
      class="linhaBotao"
    >
      <button class="custom-button gray-button">
        Como Acessar seus aplicativos
      </button>
      <button class="custom-button red-button">
        Aplicativos <span class="bold-text">RedFox</span>
      </button>
    </div>
    <div class="sessaoMeio">
      <div style="display: flex; gap: 2rem" class="cardsPromocional">
        <CardApps />
        <CardApps2 />
      </div>
    </div>
    <div>
      <Sanforna />
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #000;
      "
    >
      <CarroselBanner />
    </div>
    <div class="sessaomaio2">
      <CardMorena />
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem;
          gap: 2rem;
        "
      >
        <h2 style="font-size: 2rem">REDFOX SAC</h2>
        <p style="text-align: center">
          Consulte segunda vias de boleto, efetue desbloqueios e <br />
          pague faturas, tudo na palma da sua mão!
        </p>
        <img style="width: 280px" src="../assets/mb.svg" alt="" />
        <button class="custom-button1 red-button1">SAIBA MAIS</button>
      </div>
    </div>
    <Footer />
  </div>

  <div v-show="Mobile"></div>
</template>

<style scoped>
.sessaomaio2 {
  background-color: #e6e8ed;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sessaoMeio {
  background-image: url(../assets/hm.svg);
  background-color: #e6e8ed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  align-items: center;
}

.cardsPromocional {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between !important;
  width: 100%;
}

.custom-button {
  font-size: 1.5rem;
  border-radius: 20px;
  width: 22%;
  height: 50px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.custom-button1 {
  font-size: 1rem;
  border-radius: 20px;
  width: 60% !important;
  height: 50px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.custom-button1:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.gray-button {
  background-color: #3d3d3d;
  color: #fff;
}

.red-button {
  background-color: red;
  color: #fff;
}
.red-button1 {
  background-color: red;
  color: #fff;
}

.bold-text {
  font-weight: bold;
}

.custom-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 70%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.custom-button:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

.custom-button::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.custom-button:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
