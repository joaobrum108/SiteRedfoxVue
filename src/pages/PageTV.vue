<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

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

import Header from "../components/Header.vue";
import Carroseltv from "../components/carroseltv.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container-Itens">
    <div class="desktop" style="width: 100%" v-show="Desktop">
      <Header />
      <div class="sessao-informacao">
        <div class="container-linha">
          <div class="container-left">
            <h1
              style="
                color: #fff;
                font-weight: bold;
                text-align: center;
                font-size: 3.5rem;
              "
            >
              REDFOX TV
            </h1>
            <p style="color: #fff; text-align: center">
              Nosso canal exclusivo de TV, totalmente grátis e <br />
              com programas EXCLUSIVOS! <br />
              <br />
              Apresentado por Adilson JR.
            </p>
            <div style="display: flex; gap: 2rem">
              <img style="width: 180px" src="../assets/ios.svg" alt="" />
              <img style="width: 180px" src="../assets/android.svg" alt="" />
            </div>
          </div>
          <div class="container-right-photo">
            <img style="width: 345px" src="../assets/adilson.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="sessao2-banners">
        <Carroseltv />
        <button class="button1">ANUNCIE NA NOSSA TV</button>
      </div>
      <div class="sessao3-itens">
        <div class="container-coluna">
          <div class="items">
            <img src="../assets/pt.svg" alt="" />
            <p style="text-align: center">
              O REDFOX Play é o nosso app de TV gratuito para clientes REDFOX à
              partir dos planos de R$79,90. <br />
              <br />
              Faça upgrade do seu plano de internet para ter acesso a mais
              canais e poder assistir qualquer conteúdo em mais telas <br />
              ao mesmo tempo. <br />
              Você pode acessar agora mesmo pelo navegador ou baixar em qualquer
              aparelho.
            </p>
            <div class="selecaoBotao">
              <button class="button2">ACESSAR NO NAVEGADOR</button>
              <img style="width: 180px" src="../assets/ios.svg" alt="" />
              <img style="width: 180px" src="../assets/android.svg" alt="" />
            </div>
          </div>
        </div>
        <a style="width: 100%" href="#">
          <img style="width: 100%" src="../assets/sofag.svg" alt="sofa"
        /></a>
      </div>
      <Footer />
    </div>
  </div>
  <div v-show="Mobile">oi</div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.button1 {
  background-color: #fff;
  color: #db0e35;
  font-weight: bold;
  width: 280px;
  height: 42px;
  font-size: 1rem !important;
  border-radius: 8px;
  border: 2px solid #db0e35;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.button1:hover {
  background-color: #db0e35;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(219, 14, 53, 0.4);
}

.button1::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
  transition: all 0.5s ease;
  z-index: 0;
}

.button1:hover::after {
  width: 0;
  height: 0;
}

.button1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #db0e35, #ff6b6b);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.button1:hover::before {
  opacity: 1;
}

.button1 span {
  position: relative;
  z-index: 1;
}
.selecaoBotao {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.button2 {
  background-color: #db0e35;
  color: #fff;
  font-weight: bold;
  width: 280px;
  height: 42px;
  font-size: 1rem !important;
  border-radius: 8px;
  border: 2px solid #db0e35;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.button2:hover {
  background-color: #fff;
  color: #db0e35;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(219, 14, 53, 0.4);
}

.items {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.container-coluna {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.sessao3-itens {
  width: 100%;
  height: 180vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e6e8ed;
}
.sessao2-banners {
  width: 100%;
  height: 39vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #b80223;
  /* background-image: url(../assets/ver.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}
.container-Itens {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.sessao-informacao {
  background-image: url(../assets/ver.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-linha {
  display: flex;
  width: 100%;
  height: 100%;
}

.container-left {
  display: flex;
  width: 25% !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 28px;
}
.container-right-photo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding: 28px;
}

.container-left,
.container-right-photo {
  flex: 1;
}
</style>
