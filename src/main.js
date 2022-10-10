import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./App.vue";
import router from "./router";

import vfmPlugin from "vue-final-modal";

import "./assets/main.css";
const pinia = createPinia();
// createApp(App).mount("#app");

// const app = createApp(App);
createApp(App).use(router).use(pinia).mount("#app");

// app.use(createPinia());
// app.use(router);

// app.mount("#app");
