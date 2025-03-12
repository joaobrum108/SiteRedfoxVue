<template>
  <button class="btnAS">Assine Já</button>
</template>

<style scoped>
.btnAS {
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, #820032, #db0e35);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: underline;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 20%;
}

.btnAS:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

.btnAS:active {
  transform: scale(0.95);
}
</style>
