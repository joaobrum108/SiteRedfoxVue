<template>
  <div class="card">
    <div class="left-content">
      <h3>{{ leftTitle }}</h3>
      <p>{{ leftText }}</p>
    </div>
    <div class="right-content">
      <img src="../assets/md.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  leftTitle: {
    type: String,
    default: "PLANOS PERSONALIZADOS",
  },
  leftText: {
    type: String,
    default:
      "Aumente a produtividade e a eficiência do seu negócio com a nossa Internet Corporativa de alto desempenho. Proporcionamos soluções personalizadas para manter sua empresa sempre conectada com a máxima segurança e confiabilidade.Conte com uma conexão sólida e estável, projetada para atender às necessidades exclusivas da sua empresa. Nossa equipe especializada em atendimento está pronta para oferecer suporte personalizado, garantindo uma experiência perfeita e ininterrupta. Impulsione seu crescimento com a melhor tecnologia do mercado disponível para clientes REDFOX",
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

.left-content,
.right-content {
  width: 48%;
}

.left-content h3 {
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #f3f3f3;
}

.left-content p {
  font-size: 1em;
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
    font-size: 1em;
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
    font-size: 0.9rem;
  }

  .left-content p {
    font-size: 0.6rem !important;
    line-height: 1.4;
  }
  img {
    width: 180px !important;
  }
}
</style>
