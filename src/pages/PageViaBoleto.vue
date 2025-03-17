<script setup>
import CardBoleto from "../components/cardBoleto.vue";
import Cardplaystore from "../components/Cardplaystore.vue";
import Header from "../components/Header.vue";
import VideoBoleto from "../videos/videoBoleto.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import MobileBoleto from "../screen/MobileBoleto.vue";

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
</script>

<template>
  <div class="modelos">
    <div v-show="Desktop">
      <div class="container-boleto">
        <Header />
        <div style="padding: 1rem">
          <h1 style="text-align: center">
            Segunda via de Boletos e <br />
            Desbloqueios
          </h1>
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center"
          class="card-boleto"
        >
          <CardBoleto />
        </div>
        <span
          style="display: flex; justify-content: center; align-items: center"
        >
          <h3
            style="
              font-family: Poppins, sans-serif;
              font-size: 2rem;
              font-weight: 700;
            "
          >
            Aprenda a usar o PORTAL REDFOX!
          </h3>
        </span>
        <span>
          <VideoBoleto />
        </span>
        <div class="sessao-meio">
          <div>
            <h3
              style="
                color: #fff;
                font-family: poppins, sans-serif;
                font-weight: bolder;
                font-size: 4rem;
                text-align: center;
                padding: 4rem;
              "
            >
              APLICATIVO REDFOX SAC
            </h3>
            <p
              style="
                color: #fff;
                font-family: Poppins, sans-serif;
                text-align: center;
                font-size: 2rem;
              "
            >
              Pague faturas, efetue desbloqueios, consulte sua <br />
              conta e muito mais na palma da sua mão!
            </p>
          </div>
          <div class="aplicativo">
            <Cardplaystore />
          </div>
        </div>
        <div><Footer /></div>
      </div>
    </div>
  </div>
  <div v-show="Mobile">
    <MobileBoleto />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sessao-meio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  gap: 1rem;
}

.container-boleto {
  background-image: url(../assets/fundo33.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 360vh;
  gap: 2rem !important;
}

h1 {
  font-family: "Poppins", sans-serif;
  color: rgb(0, 0, 0);
  font-size: 3.5rem;
  font-weight: bold;
}
</style>
