<template>
  <div
    class="CaixaPrincipal flex flex-row justify-center items-center bg-[#2d2d2d] h-[50vh] text-white"
  >
    <div
      class="CaixaInterna flex flex-row justify-center items-center bg-[#2d2d2d] h-[40vh] text-white border border-[#3d3d3d] p-4 w-[80%] gap-8"
    >
      <div class="SubCaixa flex justify-center items-center">
        <div class="InformacoesFox1 flex flex-col gap-4">
          <div class="flex justify-center items-center">
            <img class="w-60" src="../assets/logo.svg" alt="" />
          </div>
          <div class="text-center text-sm">
            <h3>
              RAZÃO SOCIAL: GUARULHOS <br />
              TELECOMUNICAÇÕES LTDA
            </h3>
            <h3>CNPJ: 27.583.479/0001-92</h3>
          </div>
        </div>
      </div>

      <div class="CaixaNavegacao">
        <div class="Navegacao1">
          <h2 class="font-semibold"><strong>Navegação</strong></h2>
        </div>
        <div>
          <a
            v-for="(link, index) in informacoesnave"
            :key="index"
            :href="link.url"
            class="block hover:text-red-500"
          >
            {{ link.texto }}
          </a>
        </div>
      </div>

      <div class="CaixaContato flex flex-col gap-4">
        <div class="CaixaContato1">
          <h2 class="font-semibold"><strong>Contato</strong></h2>
        </div>
        <div>
          <a
            v-for="(link, index) in InformaçaoContato"
            :key="index"
            :href="link.url"
            class="block hover:text-red-500"
          >
            <i :class="link.icon"></i> {{ link.texto }}
          </a>
          <div class="CaixaContato1">
            <h2 class="font-semibold">Painel</h2>
          </div>
          <a
            v-for="(link, index) in InfoPainel"
            :key="index"
            :href="link.url"
            class="block hover:text-red-500"
          >
            <i class="fas fa-user-circle"></i> {{ link.texto }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const informacoesnave = [
  { texto: "Para sua casa", url: "/residencial" },
  { texto: "Para sua empresa", url: "/para-empresas" },
  { texto: "2 Via do Boleto", url: "/2via" },
  { texto: "Central de Apps", url: "/CentralApp" },
  { texto: "Tv RedFox", url: "/Tvredfox" },
  { texto: "Beneficios e Descontos", url: "/BeneficiosDescontos" },
  { texto: "Sobre", url: "/Sobre" },
  {
    texto: "Termos e Politicas de Privacidade - RedFox TV App",
    url: "/TermosPoliticasRedFoxTVApp",
  },
  {
    texto: "Termos e Politicas de Privacidade - RedFox SAC App",
    url: "/TermosPoliticasRedFoxSACApp",
  },
];

const InformaçaoContato = [
  {
    texto: "Vendas@redfoxtelecom.com.br",
    url: "/Vendas@redfoxtelecom.com.br",
    icon: "fas fa-envelope",
  },
  { texto: "(11)24842656", url: "tel:1124842656", icon: "fab fa-whatsapp" },
  { texto: "0800-773-2656", url: "tel:08007732656", icon: "fas fa-phone-alt" },
];
const InfoPainel = [
  { texto: "Portal dos assinantes", url: "/PortalAssinantes" },
];
</script>

<style scoped>
.CaixaPrincipal {
  flex-direction: row;
  height: 50vh;
}

.CaixaInterna {
  gap: 2rem;
}

.CaixaPrincipal .CaixaNavegacao,
.CaixaPrincipal .CaixaContato {
  margin-left: 2rem;
}

.CaixaPrincipal .InformacoesFox1 img {
  width: 80%;
}

.CaixaPrincipal h3 {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .CaixaPrincipal {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  .CaixaInterna {
    height: 80vh;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
  }

  .CaixaPrincipal .CaixaNavegacao,
  .CaixaPrincipal .CaixaContato {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }

  .CaixaPrincipal .InformacoesFox1 img {
    width: 60%;
  }

  .CaixaPrincipal h3 {
    font-size: 1rem;
  }

  .CaixaNavegacao h2,
  .CaixaContato h2 {
    font-size: 1rem;
  }

  .CaixaNavegacao a,
  .CaixaContato a {
    font-size: 0.9rem;
  }
}
</style>
