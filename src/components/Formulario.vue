<template>
  <div class="form-container">
    <h2 class="form-title">FALE COM UM ESPECIALISTA</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input
          type="text"
          v-model="nome"
          placeholder="Nome"
          :class="{ 'input-error': !nome && submitted }"
        />
      </div>

      <div class="form-group">
        <input
          type="email"
          v-model="email"
          placeholder="E-mail"
          :class="{ 'input-error': !email && submitted }"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nome = ref("");
const email = ref("");
const submitted = ref(false);

const submitForm = () => {
  submitted.value = true;
  if (nome.value && email.value) {
    alert("Formulário enviado com sucesso!");
  }
};
</script>

<style scoped>
.form-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.form-title::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: rgba(255, 61, 0, 0.8);
  margin: 10px auto 0;
  border-radius: 2px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

input:focus {
  border-color: rgba(255, 255, 255, 0.7);
  outline: none;
}

.input-error {
  border-color: #ff3d00;
}

button {
  width: 100%;
  padding: 10px;
  background: rgba(255, 61, 0, 0.8);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: rgba(255, 61, 0, 1);
}
</style>
