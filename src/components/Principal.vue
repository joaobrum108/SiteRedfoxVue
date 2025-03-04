<template>
  <Header />
  <div
    class="containerPR w-full h-[400px] bg-[#E8EAEE] text-center flex flex-col gap-8 justify-center items-center"
  >
    <div class="flex flex-col gap-4">
      <h1 class="font-bold text-6xl mobile:text-3xl">
        CONEXÃO SEM LIMITES PARA VOCÊ
      </h1>
      <p class="text-base mobile:text-sm">
        A REDFOX te mantem conectado e oferece as melhores condições para você
        aproveitar o máximo sem <br class="mobile:hidden" />
        se preocupar!
      </p>
      <div class="font-bold text-4xl mobile:text-2xl">
        <h1>COMBO FAMÍLIA REDFOX & MAX</h1>
      </div>
    </div>
  </div>
  <div
    class="meulherFundoflex flex flex-col gap-8 justify-center items-center w-full h-[90vh]"
  >
    <div class="justify-start items-center gap-4 w-2/4">
      <a href="#"><img src="../assets/fundomue.png" alt="" /></a>
    </div>
  </div>
  <div
    class="containerP w-full h-[58vh] bg-[#d3021f] text-center flex flex-col gap-8 justify-center items-center"
  >
    <div class="responsivo1">
      <h1 class="font-bold text-white text-5xl mobile:text-2xl">
        OS MELHORES PLANOS, OS MELHORES PREÇOS
      </h1>
    </div>
    <div class="responsivo0">
      <div class="responsivo1 flex flex-row gap-4 mobile:flex-col">
        <div
          class="responsivo2 flex w-80 mobile:w-full items-center flex-col gap-4"
        >
          <img class="w-50 mobile:w-32" src="../assets/notebook.svg" alt="" />
          <p class="text-white mobile:text-sm">
            +150 canais AO VIVO para você aproveitar, assista onde e como
            quiser!*Incluso em planos a partir de R$99,90*
          </p>
          <a class="text-white underline mobile:text-sm" href="#">SAIBA MAIS</a>
        </div>
        <div class="responsivo3 flex flex-row gap-4 mobile:gap-2">
          <a href="#"
            ><img class="img12 mobile:w-16" src="../assets/350.png" alt=""
          /></a>
          <a href="#"
            ><img class="img12 mobile:w-16" src="../assets/500.png" alt=""
          /></a>
          <a href="#"
            ><img class="img12 mobile:w-16" src="../assets/700.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="ultima-section flex flex-col gap-20 justify-center items-center w-full h-[85vh] bg-[#E6E8ED]"
  >
    <div>
      <h1 class="font-bold text-5xl mobile:text-2xl">
        DESEMPENHO DE PONTA PARA A SUA CASA
      </h1>
    </div>
    <div class="flex flex-row gap-4 mobile:flex-col mobile:gap-8">
      <div>
        <a href="#">
          <img class="w-full mobile:w-64" src="../assets/129pro.svg" alt="" />
        </a>
      </div>
      <div>
        <a href="#">
          <img class="w-full mobile:w-64" src="../assets/179pro.svg" alt="" />
        </a>
      </div>
    </div>
    <div>
      <Botaozap />
    </div>
  </div>
  <a href="#"><div class="responsivoF w-full h-[80vh]"></div></a>
  <Footer />
</template>

<style scoped>
.responsivoF {
  background-image: url(../assets/157.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
.meulherFundoflex {
  background-image: url(../assets/fundomulher.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .responsivoF {
    height: 200px !important;
  }
  .containerPR {
    height: 300px;
  }

  .containerP {
    height: auto;
    padding: 20px 0;
  }

  .responsivo3 {
    flex-direction: row;
    justify-content: center;
  }

  .responsivo0 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .responsivo2 {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .responsivo1 {
    flex-direction: column;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
  }

  .meulherFundoflex {
    display: none;
  }

  img {
    max-width: 100%;
  }

  .img12 {
    width: 70px;
  }
}
@media (max-width: 768px) {
  .responsivoF {
    height: 400px;
  }
  .ultima-section {
    height: auto;
    padding: 40px 0;
    gap: 40px;
  }

  .ultima-section h1 {
    font-size: 1.8rem;
    text-align: center;
    padding: 0 20px;
  }

  .ultima-section img {
    width: 100%;
    max-width: 200px;
  }
}
</style>

<script setup>
import Botaozap from "./Botaozap.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>
