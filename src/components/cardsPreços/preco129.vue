<template>
  <div class="card-horizontal">
    <div class="card-content">
      <div class="card-text">
        <span class="card-title">800</span>
        <span class="card-subtitle">MEGA</span>
      </div>
      <div class="card-image">
        <img src="../../assets/5t.png" alt="Internet 1GIGA" />
      </div>
    </div>
    <div class="button-container">
      <img class="button-icon" src="../../assets/9.svg" alt="Ícone" />
      <button @click="enviarWpp" class="card-button">ASSINE JÁ</button>
    </div>
  </div>
</template>

<style scoped>
.card-horizontal {
  background: linear-gradient(135deg, #db0e35, #ff6b6b);
  color: white;
  width: 400px;
  height: 220px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.card-horizontal:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.card-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffcc00;
  transition: color 0.3s ease;
}

.card-subtitle {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  transition: color 0.3s ease;
}

.card-horizontal:hover .card-title {
  color: #00ccff;
}

.card-horizontal:hover .card-subtitle {
  color: #ffcc00;
}

.card-image img {
  width: 225px;
  height: 140px;
  transition: transform 0.3s ease;
}

.button-container {
  display: flex;
  align-items: center;
  width: 400px;
  height: 9px;
  gap: 0;
}

.button-icon {
  width: 50%;
  height: auto;
  transition: transform 0.3s ease;
}

.card-button {
  padding: 10px 20px;
  width: 50%;
  background-color: #06eb62;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 0 0 15px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.card-button:hover {
  background-color: #05c753;
  transform: scale(1.05);
}

.card-horizontal::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.card-horizontal:hover::before {
  left: 100%;
}

@media (max-width: 500px) {
}
</style>

<script setup>
import { ref } from "vue";

const enviarWpp = () => {
  window.location.href = "https://api.whatsapp.com/send?112484-2656";
};
</script>
