<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue"; // Importe computed
import bannerCarrosel from "../assets/bannerCarrosel.svg";
import dz from "../assets/dz.svg";
import sport from "../assets/sport.svg";
import gd from "../assets/gd.svg";
import ft from "../assets/ft.svg";

const carrossel = ref(null);
const imagens = ref([
  { src: bannerCarrosel, link: "https://www.exemplo.com/banner" },
  { src: dz, link: "https://www.exemplo.com/dz" },
  { src: sport, link: "https://www.exemplo.com/sport" },
  { src: gd, link: "https://www.exemplo.com/gd" },
  { src: ft, link: "https://www.exemplo.com/ft" },
]);
const posicaoAtual = ref(0);

const moverDireita = () => {
  posicaoAtual.value = (posicaoAtual.value + 1) % imagens.value.length;
  atualizarCarrossel();
};

const atualizarCarrossel = () => {
  if (carrossel.value) {
    const translateX = -posicaoAtual.value * 100;
    carrossel.value.style.transform = `translateX(${translateX}%)`;
  }
};

let intervalo;

onMounted(() => {
  intervalo = setInterval(moverDireita, 6000); // Muda a imagem a cada 6 segundos
});

onUnmounted(() => {
  clearInterval(intervalo);
});

// Lógica de responsividade
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
  <div v-show="Desktop">
    <div class="carrosel-container">
      <div ref="carrossel" class="carrosel">
        <div v-for="(item, index) in imagens" :key="index" class="slide">
          <a :href="item.link" target="_blank">
            <img :src="item.src" alt="Slide" class="slide-image" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-show="Mobile">
    <div class="carrosel-container2">
      <div ref="carrossel" class="carrosel2">
        <div v-for="(item, index) in imagens" :key="index" class="slide2">
          <a :href="item.link" target="_blank">
            <img :src="item.src" alt="Slide" class="slide-image2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carrosel-container {
  width: 100%;
  height: 701px;
  overflow: hidden;
  position: relative;
}

.carrosel {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1021px) {
  .carrosel-container {
    height: 40vh;
  }
}

@media (max-width: 600px) {
  .carrosel-container {
    height: 30vh;
  }
}
</style>
