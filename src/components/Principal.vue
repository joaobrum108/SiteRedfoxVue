<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Header from "./Header.vue";
import Cardpl from "./cardsPreços/350.vue";
import Cardp2 from "./cardsPreços/500.vue";
import Precos129 from "../components/cardsPreços/preco129.vue";
import Preco179 from "./cardsPreços/preco179.vue";
import Mobile1 from "../screen/mobile1.vue";

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
  <div v-show="Desktop" class="containerFull">
    <Header />
    <div class="parte1">
      <div class="conteudo1">
        <h1 class="text-[#333333] font-bold">CONEXÃO SEM LIMITES PARA VOCÊ</h1>
        <p class="">
          A REDFOX te mantem conectado e oferece as melhores condições para você
          aproveitar o máximo sem <br />
          se preocupar!
        </p>
        <h1 class="text-[#333333] font-bold">COMBO FAMÍLIA REDFOX & MAX</h1>
      </div>
    </div>
    <div class="parte2">
      <div class="conteudo2">
        <Precos129 />
      </div>
    </div>
    <div class="parte3">
      <div class="conteudo3">
        <div>
          <h2 style="color: aliceblue">
            OS MELHORES PLANOS COM SEUS APPS FAVORITOS
          </h2>
        </div>
        <div class="apps">
          <div class="apps1">
            <div><Cardpl /></div>
            <div><Cardp2 /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="parte4">
      <div class="ttle1">
        <h1
          style="
            font-size: 2rem;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
          "
        >
          DESEMPENHO DE PONTA PARA A SUA CASA
        </h1>
      </div>
      <div class="caixas">
        <div style="align-items: center">
          <span style="font-size: 1rem; font-weight: bold"
            >* 150 Cainais AO VIVO e 5 Telas simultãneas</span
          >
          <br />
          <br />
          <Precos129 />
        </div>
        <div>
          <span style="font-size: 1rem; font-weight: bold"
            >* 150 Cainais AO VIVO e 5 Telas simultãneas</span
          >
          <br />
          <br />
          <Preco179 />
        </div>
      </div>
      <div>
        <button
          style="
            background-color: #ff4d4d;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            padding: 15px 30px;
            border: none;
            width: 250px;
            border-radius: 25px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease, transform 0.3s ease,
              box-shadow 0.3s ease;
          "
          onmouseover="this.style.backgroundColor='#ff1a1a'; this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 12px rgba(0, 0, 0, 0.3)';"
          onmouseout="this.style.backgroundColor='#ff4d4d'; this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.2)';"
        >
          ASSINE JÁ
        </button>
      </div>
    </div>
    <div class="partefinal"></div>
  </div>
  <div v-show="Mobile" class="containerFull">
    <Mobile1 />
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.partefinal {
  background-image: url(../assets/ff.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
}
.caixas {
  display: flex;
  flex-direction: row;
  gap: 9rem;
}
.parte4 {
  background-color: #d9d9d9;
  background-image: url(../assets/g.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
}
.apps {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.apps1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
}
.conteudo3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px;
  gap: 1rem;
}
.parte3 {
  width: 100%;
  height: 80dvh;
  background-color: #ac0118;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 28px;
}

h2 {
  font-size: 1.9rem !important;
  font-weight: bold;
}
.conteudo2 {
  display: flex;
  height: 80%;
  width: 70%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
}

.parte2 {
  width: 100%;
  height: 80vh;
  background-image: url("../assets/fundomulher.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: start !important;
}

.conteudo1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px;
  gap: 1rem;
}
h1 {
  font-size: 1.9rem !important;
}
.parte1 {
  width: 100%;
  height: 20vh;
  background-color: #e8eaee;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  height: 100vh; /* Ou tente height: 100dvh */
}

.containerFull {
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
}
</style>
