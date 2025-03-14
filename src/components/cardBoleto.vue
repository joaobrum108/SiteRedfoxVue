<script setup>
import { ref } from "vue";

const textStyle = ref({});

function animateButton() {
  textStyle.value = {
    transform: "translateY(-5px)",
    color: "#ffcc00",
    transition: "all 0.3s ease",
  };
}

function resetButton() {
  textStyle.value = {
    transform: "translateY(0)",
    color: "#ffffff",
    transition: "all 0.3s ease",
  };
}
</script>

<template>
  <div class="container">
    <div class="center-left">
      <h2>PORTAL REDFOX</h2>
      <p style="display: flex; text-align: left">
        Pague os boletos de forma simples e rápida, no conforto da <br />
        sua casa. <br />
        <br />
        O nosso portal do cliente foi pensado para você realizar <br />
        desbloqueios, consultar segunda via de boletos e efetuar <br />
        pagamentos via PIX em poucos cliques!
      </p>
      <button
        @mouseover="animateButton"
        @mouseleave="resetButton"
        class="button"
      >
        <span :style="textStyle">CLIQUE AQUI PARA ACESSAR O PORTAL</span>
      </button>
    </div>
    <div class="foto">
      <img src="../assets/nerd.svg" alt="photos" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  width: 100%;
}

.center-left {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  width: 50%;
  height: 600px;
}

.button {
  border-radius: 10px;
  height: 50px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 1.4rem;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #cc0000;
}

h2 {
  color: #000;
  font-size: 2.5rem;
  font-weight: bold;
}

p {
  color: #000000;
  font-size: 1.2rem;
}

.foto img {
  width: 100%;
  height: auto;
}
@media (max-width: 200px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
  h2 {
    color: #000;
    font-size: 0.9rem;
    font-weight: bold;
  }
  p {
    color: #000000;
    font-size: 0.5rem;
  }
  .foto img {
    display: none;
  }
  .button {
    border-radius: 10px;
    height: 20px;
    background-color: #ff0000;
    color: #ffffff;
    font-size: 0.4rem !important;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #cc0000;
  }
}
</style>
