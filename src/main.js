import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueNumberFormat from "vue-number-format";
createApp(App);
const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(VueNumberFormat, { prefix: " ", decimal: " ", thousand: " " })
  .use(router)
  .mount("#app");
