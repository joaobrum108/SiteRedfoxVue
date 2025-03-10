<template>
  <div class="caixaWhite">
    <span class="top-text">500</span>
    <span class="top-text1">MEGA</span>
    <span><img src="../../assets/print2.png" alt="" /></span>
    <span><button>ASSINE JÁ</button></span>
  </div>
</template>

<style scoped>
.caixaWhite {
  background-color: white;
  color: red;
  width: 350px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.caixaWhite:hover {
  background-color: #ff4d4d;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.top-text {
  font-weight: bold;
  font-size: 7.5rem;
  transition: color 0.3s ease;
}

.top-text1 {
  font-weight: bold;
  font-size: 6rem;
  transition: color 0.3s ease;
}

.caixaWhite:hover .top-text,
.caixaWhite:hover .top-text1 {
  color: white;
}

img {
  width: 335px;
  transition: transform 0.3s ease;
}

.caixaWhite:hover img {
  transform: scale(1.05);
}

button {
  padding: 10px 20px;
  width: 350px;
  height: 84px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #06eb62;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #05c753;
  box-shadow: 0 0 10px rgba(5, 199, 83, 0.8);
}

.caixaWhite:hover button {
  background-color: #05c753;
  color: white;
}
</style>

<script setup></script>
