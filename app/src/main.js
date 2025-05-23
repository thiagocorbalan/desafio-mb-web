import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import autofocusDirective from "./directives/autofocus";

import "@/assets/scss/global.scss";

const app = createApp(App);

app.use(store);
app.directive("autofocus", autofocusDirective);
app.mount("#app");
