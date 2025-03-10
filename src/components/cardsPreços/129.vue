<template>
  <div class="boxer">
    <div class="precoLeft">
      <div class="coluna">
        <span class="numero">700</span>
        <span class="max-icon">
          <img src="../../assets/max.svg" alt="max" />
        </span>
      </div>
      <span class="mega-vertical">mega</span>
      <span class="print-icon">
        <img src="../../assets//preco1299.svg" alt="print" />
      </span>
    </div>
    <button class="botao-verde">ASSINE JÁ</button>
  </div>
</template>

<script setup></script>

<style scoped>
.boxer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eb0635, #ff3b3f);
  width: 400px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: white;
  font-family: "Arial", sans-serif;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.boxer:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #ff3b3f, #eb0635);
}

.precoLeft {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
}

.coluna {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.numero {
  font-size: 64px;
  color: yellow;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.mega-vertical {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.max-icon img {
  height: 50px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.print-icon img {
  height: 130px;
  width: 200px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.botao-verde {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  height: 80px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.botao-verde:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.botao-verde:active {
  transform: scale(0.95);
}
</style>
