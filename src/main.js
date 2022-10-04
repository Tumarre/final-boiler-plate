import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
const pinia = createPinia();
// createApp(App).mount("#app");

// const app = createApp(App);
createApp(App).use(router).use(pinia).mount("#app");

// app.use(createPinia());
// app.use(router);

// app.mount("#app");
