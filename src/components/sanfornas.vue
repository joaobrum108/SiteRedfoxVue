<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <div class="accordion-title" @click="toggleAccordion(index)">
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
    title: "SOLUÇÕES DE DADOS",
    content: `
        <h4 style="font-weight: bold">Rede MPLS</h4>
        <p>Atualmente, muitas empresas centralizam o conteúdo de seus dados em sites da empresa ou em um Data Center e têm a necessidade de acessar, consultar e baixar esses arquivos de maneira rápida e segura a partir de outros pontos. A solução MPLS interliga e cria uma rede para agilizar suas transferências de informações.</p>
        
        <h4>Qualidade de Serviço (QoS)</h4>
        <p>Isso é possível porque a MPLS utiliza um método de classificação e priorização denominado DiffServ, resultando em QoS (qualidade de serviço) com diversas classes de serviços:</p>
        <ul>
          <li>Voz/Vídeo</li>
          <li>Missão Crítica</li>
          <li>Interativa</li>
          <li>Bulk</li>
          <li>Network Control</li>
          <li>Best Effort</li>
        </ul>
        
         <h4 style="font-weight: bold">Vantagens</h4>
        <p>Com as redes interligadas, você poderá falar à vontade com seus funcionários, sem custos com DDD/DDI. Além disso, você realiza videoconferências e transmite todas as aplicações corporativas com as devidas priorizações (e-mail, TEF, CRM, ERP etc).</p>
        
        <h4 style="font-weight: bold">Segurança</h4>
        <p>Todo o isolamento do tráfego é implementado e realizado no backbone IP/MPLS da Redfox.</p>
        
        <h4>Redução de Custos</h4>
        <p>Com o uso da estrutura IP/MPLS, sua empresa terá garantida uma formação de rede segura com baixos custos. A distância entre os pontos da rede ou sua configuração (topologia) não provocam impacto no custo total, garantindo, assim, o melhor custo-benefício na solução de formação de redes.</p>
        
        <h4 style="font-weight: bold">Tratamento do Tráfego</h4>
        <p>A função da Qualidade de Serviço (QoS) é otimizar os recursos da rede de sua empresa. Com diversas classes diferentes, você pode escolher quais aplicações devem ser tratadas.</p>
        
        <h4 style="font-weight: bold">Gerência</h4>
        <p>Se a sua empresa precisa de uma gerência simplificada, com menor grau de complexidade da rede, a Rede MPLS atende a sua necessidade.</p>
        
        <h4 style="font-weight: bold">Escalabilidade</h4>
        <p>O crescimento das empresas e o uso das redes, inclusive com novos tipos de aplicações, sem causar impacto na sua implementação, motivaram a criação do serviço MPLS.</p>
        
         <h4 style="font-weight: bold">Qualidade</h4>
        <p>A sua empresa tem a certeza de que a rede funcionará de forma apropriada para suportar suas aplicações, devido ao SLA (Service Level Agreement) que assegura a qualidade do backbone IP/MPLS da Redfox.</p>
        
         <h4 style="font-weight: bold">Opções de Topologia</h4>
        <p>Sua empresa terá maior economia de banda e possibilidade de controle interno de acessos e segurança com essa tecnologia que permite a adequação da topologia lógica da rede ao perfil de tráfego em cada ponto, seja ela full mesh (malha), hub-and-spoke (estrela) ou mista.</p>
      `,
    isOpen: false,
  },
  {
    title: "SOLUÇÕES DE VOZ",
    content: `
      <h4><strong>Conheça o VoIP REDFOX</strong></h4>
      <p>A REDFOX disponibiliza as melhores soluções de dados e voz, enquanto você cuida da produtividade do seu negócio, reduzindo custos e agregando soluções.</p>
      
      <h4><strong>Serviço de Telefonia</strong></h4>
      <p>Serviço de Telefonia é de vital importância, por isso é preciso contar com uma empresa que lhe ofereça um serviço de qualidade e que lhe traga redução de custos. Disponibilizamos infraestrutura de consultores especializados que possam garantir o projeto que melhor atenda às necessidades de comunicação de sua empresa. Oferecemos serviços de Voz e Internet com qualidade e diferenciais como: Outsourcing; Telefonia Classe IV e Classe V; Portabilidade numérica; PABX virtual entre outros, que contam com Backbone próprio NGN trazendo maior segurança e confiabilidade aos serviços ofertados.</p>
      
      <h4><strong>Conheça as soluções de voz da REDFOX</strong></h4>
      <p>Conheça as soluções de voz da REDFOX para sua empresa. São elas:</p>
      
      <h4><strong>Outsourcing REDFOX / Voice Supreme – Vic on Demand</strong></h4>
      <p>É o serviço ideal para empresas que focam seus esforços em seu core business e que precisam da segurança de um fornecedor de serviços de dados e voz com confiabilidade, qualidade e desempenho. A REDFOX implementa e gerencia as soluções que disponibilizamos, enquanto sua empresa foca os esforços em suas atividades diárias.</p>
      <p>Com este serviço sua empresa tem benefícios como: redução de custos entre 20 e 70%; redução do turnover; projetos customizados; maior produtividade, entre outros.</p>
      
      <h4><strong>Telefonia Classe IV</strong></h4>
      <p>A Telefonia Classe IV é mais conhecida como Rede Telefônica Pública Comutada (RTPC). Com este tipo de telefonia você pode realizar e receber ligações locais e interurbanas e o mesmo pode ser implantado no seu sistema atual de PABX; praticidade e qualidades em suas ligações telefônicas.</p>
      
      <h4><strong>Telefonia Classe V</strong></h4>
      <p>A telefonia Classe V é também conhecida como Telefonia IP e permite que sua empresa tenha diversos tipos de serviços agregados às suas linhas telefônicas, o que possibilita agregar novas funcionalidades Multimídia, com serviços inovadores, que dispensam altos investimentos em hardware, ou suporte avançado.</p>
    `,
    isOpen: false,
  },
  {
    title: "SOLUÇÕES DE INFRAESTRUTURA",
    content: `
      <h4><strong>Fibra Apagada</strong></h4>
      <p>Transferência de informações em altíssima velocidade com total independência para transmissão de dados.</p>
      <p>Solução de conectividade privada ponto-a-ponto para empresas que possuem necessidade de realizar uma transferência de grande volume de dados através de uma rede de fibra óptica moderna e virtualmente ilimitada.</p>
      <p>É a melhor alternativa para clientes que demandam alta eficiência, escalabilidade, gestão da rede e que se utilizem de aplicações sensíveis a latência ou com demanda de transparência de protocolos.</p>
      
      <h4><strong>Vantagens da Fibra Apagada</strong></h4>
      <ul>
        <li>Fibra exclusiva para sua empresa;</li>
        <li>Capilaridade de infraestrutura de fibra óptica dedicada;</li>
        <li>Agilidade na instalação das redes ópticas customizadas;</li>
        <li>Total independência para a transmissão dos seus dados;</li>
        <li>Informações transmitidas em altíssima velocidade.</li>
      </ul>
    `,
    isOpen: false,
  },
  {
    title: "SISTEMA PABX",
    content: `
      <h4><strong>PABX em Nuvem</strong></h4>
      <p>A tecnologia de PABX em nuvem permite que você tenha um sistema de telefonia completo em sua empresa, sem a necessidade de equipamento físico.</p>
      <p>Com múltiplos canais anexados a um único número de telefone, você terá flexibilidade e escalabilidade, com o sistema telefônico sempre se adaptando ao crescimento da sua empresa.</p>
      
      <h4><strong>Recursos do PABX em Nuvem</strong></h4>
      <ul>
        <li><strong>TRONCO CHAVE</strong>: Permite a conexão de várias linhas telefônicas a um único sistema.</li>
        <li><strong>URA (Unidade de Resposta Audível)</strong>: Automatiza o atendimento e direciona chamadas de forma eficiente.</li>
        <li><strong>CONFERÊNCIA VIRTUAL</strong>: Realize reuniões por telefone com múltiplos participantes.</li>
        <li><strong>TRANSFERÊNCIA DE CHAMADA</strong>: Transfira chamadas entre setores ou colaboradores com facilidade.</li>
      </ul>
    `,
    isOpen: false,
  },
  {
    title: "HOTSPOT REDFOX",
    content: `
      <h4><strong>O que é Hotspot?</strong></h4>
      <p>O hotspot é um ponto de acesso à internet sem fio que permite a conexão de dispositivos à rede local, proporcionando conectividade online em locais específicos, como estabelecimentos comerciais.</p>
      
      <h4><strong>Alta Velocidade e Capacidade de Tráfego</strong></h4>
      <p>Nossa solução de hotspot oferece uma conexão de alta velocidade e uma robusta capacidade de tráfego. A garantia de desempenho superior visa atender eficientemente às demandas de usuários dentro do estabelecimento.</p>
      
      <h4><strong>Sistema de Rede Mesh</strong></h4>
      <p>Utilizamos um sistema de rede mesh para assegurar uma distribuição uniforme do sinal de internet. A abordagem mesh elimina áreas de sombra, proporcionando cobertura estável e confiável em todo o espaço designado.</p>
      
      <h4><strong>Banner Personalizado</strong></h4>
      <p>Oferecemos aos clientes a capacidade de personalizar o hotspot com banners direcionados. Essa funcionalidade permite o redirecionamento para links específicos, como cardápios, catálogos ou redes sociais, enriquecendo a interação do cliente com o estabelecimento.</p>
      
      <h4><strong>Aumento da Satisfação do Cliente</strong></h4>
      <p>Proporcionar acesso à internet de alta qualidade contribui significativamente para a satisfação do cliente. A capacidade de navegar livremente durante a permanência no estabelecimento enriquece a experiência global do cliente.</p>
      
      <h4><strong>Geração de Leads Qualificados</strong></h4>
      <p>Ao realizar o cadastro para acessar o hotspot, os clientes geram leads qualificados. Esses dados estratégicos podem ser utilizados para aprimorar campanhas de marketing, compreender melhor o perfil do cliente e impulsionar iniciativas direcionadas.</p>
    `,
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
  margin: 0 auto;
  background-color: #820000;
}

.accordion-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}

.accordion-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #91031d;
  color: white;
  cursor: pointer;
}

.accordion-title h3 {
  margin: 0;
  font-size: 1.2rem;
}

.accordion-title span {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
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
