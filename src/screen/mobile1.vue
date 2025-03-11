<script setup>
import Header from "../components/Header.vue";
</script>
<template>
  <Header />
  <div class="meucontainer">
    <div class="section h-[35vh] w-full">
      <div
        style="
          width: 50%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        "
      >
        <h2 style="text-align: center; font-size: 0.8rem; font-weight: bold">
          CONEXÃO SEM LIMITES <br />
          PARA VOCÊ
        </h2>
        <div>
          <button
            style="
              background-color: #ff4d4d;
              display: flex;

              align-items: center;
              color: white;
              font-size: 0.9rem;
              font-weight: bold;
              padding: 15px 30px;
              border: none;
              width: 130px;
              height: 35px;
              border-radius: 8px;
              cursor: pointer;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
              transition: background-color 0.3s ease, transform 0.3s ease,
                box-shadow 0.3s ease;
            "
            onmouseover="this.style.backgroundColor='#ff1a1a'; this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 12px rgba(0, 0, 0, 0.3)';"
            onmouseout="this.style.backgroundColor='#ff4d4d'; this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0, 0, 0, 0.2)';"
          >
            ASSINE JÁ
          </button>
        </div>
      </div>
    </div>
    <div class="section2"></div>
    <div class="section3">
      <div class="box">
        <span
          ><h1 style="font-size: 0.9rem; font-weight: bold">
            DESEMPENHO DE PONTA PARA A SUA CASA
          </h1></span
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.section {
  background-image: url(../assets/fundomulher.svg);
  background-position: 60% !important;
  background-repeat: no-repeat;
  background-size: 80vh;
  width: 100%;
}
.section2 {
  background-color: #ac0734;
  height: 30vh;
}
.section3 {
  background-color: #fff;
  background-image: url(../assets/gl.svg);
  background-position: 60% !important;
  background-repeat: no-repeat;
  background-size: 80vh;
  height: 60vh;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
