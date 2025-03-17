<template>
  <div
    v-if="teladesktop"
    class="header2 flex justify-around items-center bg-[#d3021f] h-[78px] text-white"
  >
    <div>
      <a href="#"></a>
      <router-link to="/">
        <img src="../assets/logo.svg" alt="" />
      </router-link>
    </div>

    <div class="flex gap-6 items-center">
      <v-btn class="text-xl font-semibold">Assine já</v-btn>

      <div
        class="relative"
        @mouseenter="showInternet = true"
        @mouseleave="showInternet = false"
      >
        <div class="hover:text-gray-500 cursor-pointer text-xl font-semibold">
          Internet
        </div>
        <div
          v-if="showInternet"
          class="absolute bg-white text-gray-800 rounded-lg shadow-lg mt-2 py-2 min-w-[160px] top-5 left-0 z-10"
        >
          <router-link
            v-for="(item, index) in internetItems"
            :key="index"
            :to="item.url"
            class="px-4 py-2 hover:bg-gray-100 block cursor-pointer"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <div
        class="relative"
        @mouseenter="showCliente = true"
        @mouseleave="showCliente = false"
      >
        <div class="hover:text-gray-500 cursor-pointer text-xl">
          Área do Cliente
        </div>
        <div
          v-if="showCliente"
          class="absolute bg-white text-gray-800 rounded-lg shadow-lg mt-2 py-2 min-w-[160px] top-5 left-0 z-10"
        >
          <router-link
            v-for="(item, index) in clienteItems"
            :key="index"
            :to="item.url"
            class="px-4 py-2 cursor-pointer block hover:bg-gray-100"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <div>
        <router-link
          to="/TrabalheConosco"
          class="hover:text-gray-500 cursor-pointer text-xl"
        >
          Fale Conosco
        </router-link>
      </div>

      <div
        class="relative"
        @mouseenter="showRedfox = true"
        @mouseleave="showRedfox = false"
      >
        <div class="hover:text-gray-500 cursor-pointer text-xl">A Redfox</div>
        <div
          v-if="showRedfox"
          class="absolute bg-white text-gray-800 rounded-lg shadow-lg mt-2 py-2 min-w-[160px] top-5 left-0 z-10"
        >
          <router-link
            v-for="(item, index) in redfoxItems"
            :key="index"
            :to="item.url"
            class="px-4 py-2 cursor-pointer block hover:bg-gray-100"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const telamobile = ref(false);
const teladesktop = ref(true);
const menuAberto = ref(false);
const showInternet = ref(false);
const showCliente = ref(false);
const showRedfox = ref(false);

const toggleMenu = () => {
  menuAberto.value = !menuAberto.value;
};

const verificarTamanhoTela = () => {
  if (window.innerWidth <= 600) {
    teladesktop.value = false;
    telamobile.value = true;
  } else {
    teladesktop.value = true;
    telamobile.value = false;
  }
};

onMounted(() => {
  verificarTamanhoTela();
  window.addEventListener("resize", verificarTamanhoTela);
});

onUnmounted(() => {
  window.removeEventListener("resize", verificarTamanhoTela);
});

const internetItems = [
  { title: "Residencial", url: "/" },
  { title: "Para Empresas", url: "/para-empresas" },
];

const clienteItems = [
  { title: "2 Via do Boleto", url: "/2via" },
  { title: "Central de Apps", url: "/CentralApp" },
  { title: "Tv RedFox", url: "/Tvredfox" },
  { title: "Beneficios e Descontos", url: "/BeneficiosDescontos" },
];

const redfoxItems = [
  { title: "Sobre", url: "/Sobre" },
  { title: "Trabalhe Conosco", url: "/TrabalheConosco" },
  { title: "Contratos", url: "/Contratos" },
];
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
