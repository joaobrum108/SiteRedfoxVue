<template>
  <div class="card">
    <div class="left-content">
      <img src="../assets/mdg.svg" alt="" />
    </div>
    <div class="right-content">
      <h3>{{ leftTitle }}</h3>
      <p>{{ leftText }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  leftTitle: {
    type: String,
    default: "SOLUÇÕES SOB MEDIDA",
  },
  leftText: {
    type: String,
    default:
      "Na REDFOX, entendemos que cada empresa é única e tem necessidades específicas de conectividade. É por isso que oferecemos soluções sob medida para o seu negócio. Nossos Planos de Internet são completamente customizáveis e criados exclusivamente para atender às demandas da sua empresa.Além dos planos de Internet customizados, oferecemos uma ampla variedade de serviços adicionais para atender a todas as suas necessidades, desde telefonia empresarial até soluções de segurança avançada. Conte conosco como seu parceiro de confiança para garantir que sua empresa esteja sempre conectada, protegida e crescendo.",
  },
});
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.right-content {
  width: 48%;
}

.right-content h3 {
  margin-bottom: 10px;
  font-size: 1em;
  color: #f3f3f3;
}

.right-content p {
  font-size: 0.9em;
  line-height: 1.5;
  color: #f3f3f3;
}

.right-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 1000px) {
  .card {
    width: 80%;
    flex-direction: column;
    padding: 15px;
  }

  .left-content,
  .right-content {
    width: 100%;
  }

  .left-content h3 {
    font-size: 1.2em;
  }

  .left-content p {
    font-size: 0.9em;
    color: #fff;
  }
}

@media (max-width: 600px) {
  .card {
    width: 90%;
    padding: 10px;
  }

  .left-content h3 {
    font-size: 1em;
  }

  .left-content p {
    font-size: 0.8em;
  }
}

@media (max-width: 400px) {
  .card {
    width: 95%;
    padding: 8px;
  }

  .left-content h3 {
    font-size: 0.9em;
  }

  .left-content p {
    font-size: 0.7em;
    line-height: 1.4;
  }
}

@media (max-width: 200px) {
  .card {
    width: 95%;
    padding: 8px;
  }

  .left-content h3 {
    font-size: 0.9em;
  }

  .left-content p {
    font-size: 0.6em !important;
    line-height: 1.4;
  }
  img {
    width: 180px !important;
  }
}
</style>
