<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

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
  <div class="container-Itens">
    <div v-show="Desktop">
      <Header />
      <div class="telaSectionPrincipal">
        <div class="ttile-top">
          <h1 style="font-weight: 700; color: #fff; font-size: 5rem">
            DESCONTOS NO CINEMA
          </h1>
          <div style="height: 2100px"></div>
          <div style="display: flex; flex-direction: column; gap: 2rem">
            <p style="font-size: 1.1rem">
              Você pode GANHAR MENSALIDADES GRATUITAS indicando <br />
              <br />
              amigos .Com o nosso programa de indicações você pode economizar
              <br />
              muito trazendo os seus amigos e conhecidos para a Redfox! <br />
              <br />
              A cada 4 pessoas indicadas você ganha 1 mensalidade com <br />
              custo ZERO. <br />
              <br />A promoção é acumulativa, indique o máximo que puder e
              <br />
              economize muito!
            </p>
            <button class="button2">QUERO INDICAR</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <div v-show="Mobile"></div>
  </div>
</template>

<style scoped>
.telaSectionPrincipal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-image: url(../assets/trt.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 310vh;
  gap: 1rem;
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
</style>
