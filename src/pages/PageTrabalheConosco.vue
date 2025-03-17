<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Map from "../components/map.vue";
const tamanhoTela = ref(window.innerWidth);

const atualizarTamanhoTela = () => {
  tamanhoTela.value = window.innerWidth;
};

const Mobile = computed(() => tamanhoTela.value <= 1021);
const Desktop = computed(() => tamanhoTela.value > 1021);

onMounted(() => {
  window.addEventListener("resize", atualizarTamanhoTela);
});

onUnmounted(() => {
  window.removeEventListener("resize", atualizarTamanhoTela);
});

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container-Itens">
    <div v-show="Desktop">
      <div class="telaSectionPrincipal">
        <Header />
        <div class="linha-de-items">
          <div class="item">
            <div class="titulo">WHATSAPP</div>
            <span class="logozapzap">
              <h5 style="color: #fff; font-size: 2rem; font-weight: 700">
                (11) 2484-2656
              </h5>
              <p style="text-align: center; font-size: 0.8rem; color: #f5f5f5">
                Precisa de ajuda ou tem dúvidas? <br />
                Fale diretamente com nosso time pelo WhatsApp!
              </p>
              <button class="button2">INICIAR ATENDIMENTO</button>
            </span>
          </div>

          <div class="item">
            <div class="titulo">SAC</div>
            <span class="logotele">
              <h5 style="color: #fff; font-size: 2rem; font-weight: 700">
                0800 773 2656
              </h5>
              <p style="text-align: center; font-size: 0.8rem; color: #f5f5f5">
                Nosso Serviço de Atendimento ao Cliente está aqui para ajudar.
                <br />
                Ligue gratuitamente!
              </p>
              <button class="button2">LIGAR AGORA</button>
            </span>
          </div>

          <div class="item">
            <div class="titulo">E-MAIL COMERCIAL</div>
            <span class="logoemailff">
              <h5 style="color: #fff; font-size: 1.4rem; font-weight: 700">
                vendas@redfoxtelecom.com.br
              </h5>
              <p style="text-align: center; font-size: 0.8rem; color: #f5f5f5">
                Envie um e-mail para nossa equipe comercial. <br />
                Responderemos o mais rápido possível!
              </p>
              <button class="button2">ENVIAR E-MAIL</button>
            </span>
          </div>
        </div>
        <div class="containerEspace">
          <div class="component1">
            <h5>
              Envie seu curriculo para : <br />
              <span style="font-weight: bold">
                trabalheconosco@redfoxtelecom.com.br</span
              >
            </h5>
            <div>
              <button class="btn-iniciar-conversa">Inicie conversa</button>
            </div>
          </div>
        </div>
        <div class="component2" style="height: 100vh">
          <div class="fale-conosco">
            <h2>FALE CONOSCO</h2>
            <form class="formulario">
              <div class="form-group">
                <label for="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Assunto</label>
                <input
                  type="Assunto"
                  id="Assunto"
                  name="Assunto"
                  placeholder="Digite seu Assunto"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              <div class="form-group">
                <label for="mensagem">Mensagem:</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Digite sua mensagem"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-enviar">Enviar Mensagem</button>
            </form>
          </div>
        </div>
        <div class="componet3">
          Encontre a loja REDFOX mais próxima da sua região
        </div>
        <div class="component4">
          <Map />
        </div>
        <Footer />
      </div>
    </div>
    <div v-show="Mobile">oii</div>
  </div>
</template>

<style scoped>
.component4 {
  background-color: #e6e8ed;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 3rem;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.componet3 {
  background-color: #db0e35;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 3rem;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fale-conosco {
  background: linear-gradient(135deg, #b90202, #5a0023);
  padding: 40px;
  border-radius: 15px;
  color: #ffffff;
  width: 65%;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.fale-conosco h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 1.1rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.btn-enviar {
  background-color: #ff0000;
  color: #ffffff;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  margin-top: 10px;
}

.btn-enviar:hover {
  background-color: #cc0000;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
.component2 {
  background-color: #e6e8ed;
  padding: 40px;
}
.btn-iniciar-conversa {
  background-color: #ff0000;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-iniciar-conversa:hover {
  background-color: #cc0000;
}
.containerEspace {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.component1 {
  background-image: url(../assets/ret.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25vh;
  width: 63%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  border-radius: 12px;
  padding: 10px;
}
.button2 {
  background-color: #15db0e;
  color: #fff;
  font-weight: bold;
  width: 280px;
  height: 42px;
  font-size: 1rem !important;
  border-radius: 8px;
  border: 2px solid #0edb7b;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.button2:hover {
  background-color: #fff;
  color: #15db0e;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(219, 14, 53, 0.4);
}

.logozapzap {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 440px;
  background-image: url(../assets/logozapzap.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.logozapzap:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
}

.logotele {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 440px;
  background-image: url(../assets/telef.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.logotele:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
}

.logoemailff {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 440px;
  background-image: url(../assets/emailff.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.logoemailff:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
}

.linha-de-items {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  padding: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20%;
}

.titulo {
  text-align: center;
  font-family: poppins, sans-serif;
  font-weight: bolder;
  font-size: 2rem;
}

.telaSectionPrincipal {
  background-color: #e6e8ed;
  height: 100vh;
}
</style>
