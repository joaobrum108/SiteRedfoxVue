import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import router from "./routes/Router";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(router);
app.use(vuetify);
app.use(createPinia());
app.mount("#app");
