<script setup>
import { onMounted, ref } from "vue";
import imageBanner from "../assets/banner1.svg";
import imageBanner2 from "../assets/banner2.svg";
import imageBanner3 from "../assets/banner3.svg";
import imageBanner4 from "../assets/banner4.svg";
import imageBanner5 from "../assets/banner5.svg";

const images = ref([
  { src: imageBanner },
  { src: imageBanner2 },
  { src: imageBanner3 },
  { src: imageBanner4 },
  { src: imageBanner5 },
]);

const posicaoAtual = ref(0);

const proximaImage = () => {
  if (posicaoAtual.value < images.value.length - 1) {
    posicaoAtual.value++;
  } else {
    posicaoAtual.value = 0;
  }
};

const ImageAnterior = () => {
  if (posicaoAtual.value > 0) {
    posicaoAtual.value--;
  } else {
    posicaoAtual.value = images.value.length - 1;
  }
};

const irParaImagem = (index) => {
  posicaoAtual.value = index;
};

onMounted(() => {
  setInterval(proximaImage, 5000);
});
</script>

<template>
  <div class="caixa-carrosel">
    <button class="nav-button prev" @click="ImageAnterior">&#10094;</button>

    <div class="images-carrosel">
      <img
        :src="images[posicaoAtual].src"
        :alt="`Banner ${posicaoAtual + 1}`"
        class="carrosel-imagem"
      />
    </div>

    <button class="nav-button next" @click="proximaImage">&#10095;</button>

    <div class="indicadores">
      <button
        v-for="(image, index) in images"
        :key="index"
        :class="['indicador', { active: index === posicaoAtual }]"
        @click="irParaImagem(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.caixa-carrosel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.images-carrosel {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.carrosel-imagem {
  width: 100%;
  height: auto;
  max-width: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  border-radius: 10px;
}

.carrosel-imagem:hover {
  transform: scale(1.05);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.caixa-carrosel:hover .nav-button {
  opacity: 1;
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.indicadores {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicador {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicador.active {
  background-color: rgba(255, 255, 255, 1);
}

.indicador:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
