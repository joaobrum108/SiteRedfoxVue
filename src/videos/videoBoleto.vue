<script setup>
import { ref } from "vue";

const videoYotube = ref(null);

const playVideo = () => {
  console.log("Vídeo começou a tocar");
};

const pauseVideo = () => {
  console.log("Vídeo pausado");
};
</script>

<template>
  <div class="container-video">
    <iframe
      ref="videoYotube"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/8eFAXQbBgcA"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      @play="playVideo"
      @pause="pauseVideo"
    ></iframe>
  </div>
</template>

<style scoped>
.container-video {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

iframe {
  width: 80%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
}

@media (max-width: 200px) {
  .container-video {
    padding: 0.5rem;
  }

  iframe {
    width: 100%;
    height: 100px;
    border-radius: 4px;
  }
}
</style>
