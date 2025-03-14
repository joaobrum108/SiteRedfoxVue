<template>
  <div class="caixaWhite">
    <div class="content">
      <span class="top-text">2 APPS</span>
      <span class="top-text1">POR APENAS</span>
      <div class="price">
        <img src="../../assets/py2.svg" alt="Preço" class="price-icon" />
      </div>
      <button class="subscribe-button">ASSINE JÁ</button>
    </div>
  </div>
</template>

<style scoped>
.caixaWhite {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 250px;
  height: 350px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
}

.caixaWhite:hover {
  background-color: #ff0000;
  transform: scale(1.05);
}

.caixaWhite:hover .top-text,
.caixaWhite:hover .top-text1 {
  color: #ffffff;
  transform: translateY(-5px);
}

.caixaWhite:hover .price-icon {
  transform: rotate(10deg);
}

.caixaWhite:hover .subscribe-button {
  background: linear-gradient(45deg, #ff0000, #cc0000);
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  color: #ffffff;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.top-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  transition: all 0.3s ease;
}

.top-text1 {
  font-size: 1rem;
  color: #333;
  margin: 0;
  transition: all 0.3s ease;
}

.price {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price-icon {
  width: 120px;
  height: auto;
  transition: all 0.3s ease;
}

.subscribe-button {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: -40px;
}

.subscribe-button:hover {
  background: linear-gradient(45deg, #cc0000, #ff0000);
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
}
</style>
