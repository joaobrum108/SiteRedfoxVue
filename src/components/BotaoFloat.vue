<template>
  <div class="fixed bottom-5 right-5 z-50 flex items-center space-x-2">
    <!-- Caixa de Texto -->
    <h1>{{ message }}</h1>

    <button
      @click="abrirWhatsapp"
      class="text-white p-4 rounded-full cursor-pointer"
    >
      <i class="mdi mdi-whatsapp"
        ><img class="w-15" src="../assets/whatsapp.png" alt=""
      /></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Fale conosco no WhatsApp!");

const abrirWhatsapp = () => {
  const phoneNumber = "123456789";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message.value
  )}`;
  window.open(url, "_blank");
};
</script>
