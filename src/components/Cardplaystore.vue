<script setup>
const redirecionarAppstore = () => {
  window.open("https://apps.apple.com/br/app/sac-redfox/id1564489257");
};
const redirecionarPlaystore = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=br.com.sacredfox.app&hl=en"
  );
};
</script>

<template>
  <div class="containerStore">
    <div class="left-Content">
      <img src="../assets/foxBranco.svg" alt="photos" />
      <p style="text-align: left; color: aliceblue; font-size: 2rem">
        Consulte segunda vias de boleto, efetue <br />
        desbloqueios e pague faturas, tudo na <br />
        palma da sua mão!
      </p>
      <h4 style="color: aliceblue; font-weight: bold">BAIXE AGORA MESMO</h4>
      <div
        style="display: flex; flex-direction: row; gap: 2rem"
        class="buttons"
      >
        <button @click="redirecionarAppstore" class="button">
          <img style="width: 200px" src="../assets/ios.svg" alt="photos" />
        </button>
        <button @click="redirecionarPlaystore" class="button">
          <img style="width: 200px" src="../assets/android.svg" alt="photos" />
        </button>
      </div>
    </div>
    <div class="right-Content">
      <img src="../assets/cel.svg" alt="cel" />
    </div>
  </div>
</template>

<style scoped>
.containerStore {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
}
.left-Content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 10px;
  gap: 1rem;
}
.button {
  cursor: pointer;
}
h4 {
  font-size: 2.1rem !important;
}
p {
  font-size: 2rem !important;
}
.buttons {
  gap: 0.2rem !important;
}

.logo {
  width: 30px;
}

.description {
  font-size: 0.6rem;
}

.cta {
  font-size: 5rem;
}

.store-icon {
  width: 50px;
}

.phone {
  width: 50px;
}
</style>
