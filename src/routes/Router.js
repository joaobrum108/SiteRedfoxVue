import { createRouter, createWebHistory } from "vue-router";
import Principal from "../components/Principal.vue";
import PageEmpresas from "../pages/PageEmpresas.vue";
import PageViaBoleto from "../pages/PageViaBoleto.vue";
import PageCentralApp from "../pages/PageCentralApps.vue";
import PageTV from "../pages/PageTV.vue";
import PageBeneficiosDescontos from "../pages/PageBeneficiosDescontos.vue";
import PageSobre from "../pages/PageSobre.vue";
import PageTrabalheConosco from "../pages/PageTrabalheConosco.vue";
import PageContato from "../pages/PageContratos.vue";
const routes = [
  {
    path: "/",
    name: "Principal",
    component: Principal,
  },
  {
    path: "/para-empresas",
    name: "PageEmpresas",
    component: PageEmpresas,
  },
  {
    path: "/2via",
    name: "PageViaBoleto",
    component: PageViaBoleto,
  },
  {
    path: "/CentralApp",
    name: "PageCentralApp",
    component: PageCentralApp,
  },
  {
    path: "/Tvredfox",
    name: "PageTV",
    component: PageTV,
  },
  {
    path: "/BeneficiosDescontos",
    name: "PageBeneficiosDescontos",
    component: PageBeneficiosDescontos,
  },
  {
    path: "/Sobre",
    name: "PageSobre",
    component: PageSobre,
  },
  {
    path: "/TrabalheConosco",
    name: "PageTrabalheConosco",
    component: PageTrabalheConosco,
  },
  {
    path: "/Contratos",
    name: "PageContato",
    component: PageContato,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
