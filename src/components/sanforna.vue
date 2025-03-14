<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <div class="accordion-title" @click="toggleAccordion(index)">
        <span :class="{ rotate: item.isOpen }">&#9660;</span>
        <h3>{{ item.title }}</h3>
        <span :class="{ rotate: item.isOpen }">&#9660;</span>
      </div>
      <div class="accordion-content" v-if="item.isOpen">
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "Clique aqui para conferir os aplicativos disponíveis",
    content: ``,
    isOpen: false,
  },
]);

const toggleAccordion = (index) => {
  items.value[index].isOpen = !items.value[index].isOpen;
};
</script>

<style scoped>
.accordion {
  width: 100%;
  background-color: #db0e35;
}

.accordion-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #91031d;
}

.accordion-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #91031d;
  color: white;
  cursor: pointer;
  text-align: center;
}

.accordion-title h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.accordion-title span {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  margin-left: 10px;
}

.accordion-title span.rotate {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 15px;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
}

.accordion-content h4 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #333;
}

.accordion-content p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.accordion-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.accordion-content ul li {
  margin-bottom: 0.5rem;
  color: #555;
}
</style>
