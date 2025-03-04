<template>
  <!-- Header 1 -->
  <div
    class="header1 flex justify-around items-center bg-[#d9d9d9] p-2 h-[30px] text-xs"
  >
    <div class="flex gap-2">
      <router-link
        v-for="(link, index) in linksParaVoce"
        :key="index"
        :to="link.url"
        class="hover:text-red-500"
      >
        {{ link.texto }}
      </router-link>
    </div>

    <div class="flex gap-2">
      <!-- Correção aplicada aqui -->
      <template v-for="(item, index) in linksParaEmpresas" :key="index">
        <a
          v-if="item.url.startsWith('http')"
          :href="item.url"
          class="hover:text-red-500"
        >
          {{ item.texto }}
        </a>
        <router-link v-else :to="item.url" class="hover:text-red-500">
          {{ item.texto }}
        </router-link>
      </template>
    </div>
  </div>

  <!-- Header 2 (Desktop) e (Mobile) -->
  <div
    v-if="teladesktop"
    class="header2 flex justify-around items-center bg-[#d3021f] h-[78px] text-white"
  >
    <div>
      <a href="#"><img src="../assets/logo.svg" alt="Logo da Redfox" /></a>
    </div>

    <div class="flex gap-6 items-center">
      <v-btn class="text-xl font-semibold">Assine já</v-btn>

      <!-- Menu Internet -->
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

      <!-- Menu Área do Cliente -->
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

      <!-- Menu Suporte -->
      <div>
        <a
          @click="redireciona = true"
          class="hover:text-gray-500 cursor-pointer text-xl"
        >
          Suporte
        </a>
      </div>

      <!-- Menu A Redfox -->
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

  <!-- tela mobile -->
  <div
    v-else-if="telamobile"
    class="header2-mobile bg-[#d3021f] text-white p-4"
  >
    <div class="flex justify-between items-center">
      <img src="../assets/logo.svg" alt="Logo da Redfox" class="h-10" />
      <button @click="toggleMenu" class="text-xl cursor-pointer">☰</button>
    </div>

    <div v-if="menuAberto" class="mt-4">
      <div class="flex flex-col gap-4">
        <v-btn class="text-lg">Assine já</v-btn>
        <div class="flex flex-col gap-2">
          <div class="text-lg font-semibold">Internet</div>
          <div class="pl-4">
            <router-link
              v-for="(item, index) in internetItems"
              :key="index"
              :to="item.url"
              class="py-1 cursor-pointer hover:text-gray-500 block"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-lg font-semibold">Área do Cliente</div>
          <div class="pl-4">
            <router-link
              v-for="(item, index) in clienteItems"
              :key="index"
              :to="item.url"
              class="py-1 cursor-pointer hover:text-gray-500 block"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="text-lg font-semibold">A Redfox</div>
          <div class="pl-4">
            <router-link
              v-for="(item, index) in redfoxItems"
              :key="index"
              :to="item.url"
              class="py-1 cursor-pointer hover:text-gray-500 block"
            >
              {{ item.title }}
            </router-link>
          </div>
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
const redireciona = ref(false);
const showInternet = ref(false);
const showCliente = ref(false);
const showRedfox = ref(false);

const toggleMenu = () => {
  menuAberto.value = !menuAberto.value;
};

const verificarTamanhoTela = () => {
  if (window.innerWidth <= 700) {
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
  { title: "Residencial", url: "#" },
  { title: "Para Empresas", url: "/para-empresas" },
];

const clienteItems = [
  { title: "2 Via do Boleto", url: "/2via" },
  { title: "Central de Apps", url: "/CentralApp" },
  { title: "Tv RedFox", url: "/Tvredfox" },
  { title: "Beneficios e Descontos", url: "/BeneficiosDescontos" },
  //   { title: "Teste de Velocidade", url: "https://www.minhaconexao.com.br/" }, // Corrigido o link
];

const redfoxItems = [
  { title: "Sobre", url: "/Sobre" },
  { title: "Trabalhe Conosco", url: "/TrabalheConosco" },
  { title: "Contratos", url: "/Contratos" },
];

// Links
const linksParaVoce = [
  { texto: "Para você", url: "#" },
  { texto: "|", url: "#" },
  { texto: "Para empresas", url: "/para-empresas" },
];

const linksParaEmpresas = [
  { texto: "2ª Via do Boleto", url: "/2via" },
  { texto: "0800-773-2656", url: "https://wa.me/5508007732656" },
  { texto: "(11) 2484-2656", url: "https://wa.me/551124842656" },
];
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
