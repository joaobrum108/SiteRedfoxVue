<script setup></script>
<template>
  <div class="cardcontent">
    <div class="left-Content">
      <p>
        <strong>Ubook Go - Audiobooks Grátis para Clientes REDFOX! </strong
        ><br />
        <br />
        Clientes RedFox têm acesso gratuito a milhares de <br />
        audiobooks em diversos gêneros. Ouça no celular ou <br />computador,
        onde e quando quiser, enquanto estuda, treina <br />
        ou se desloca. Tudo isso sem custo adicional!
      </p>
      <button class="custom-button">Como acessar seus aplicativos</button>
    </div>
    <div class="right-Content">
      <img style="width: 290px" src="../assets/PH.svg" alt="photos" />
    </div>
  </div>
</template>
<style scoped>
.cardcontent {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: center !important;
  align-items: center;
}
p {
  text-align: left;
  color: rgb(31, 31, 31);
  font-size: 1rem;
}
.left-Content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center !important;
  align-items: left;
}
.custom-button {
  background-color: #3d3d3d;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.custom-button:hover {
  background-color: #555;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 70%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.custom-button:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

.custom-button::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.custom-button:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
