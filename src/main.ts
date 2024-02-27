import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import { makeServer } from "./server";

var app = createApp(App);

app.config.globalProperties.menuList = ["asd", "efg"];

app.use(router).mount("#app");

makeServer();
