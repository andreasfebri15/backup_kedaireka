import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerServiceWorker";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIwfCW-96NXXHlrV1om1guUoaAgOhJ4YQ",
  authDomain: "progressive-web-45a88.firebaseapp.com",
  projectId: "progressive-web-45a88",
  storageBucket: "progressive-web-45a88.appspot.com",
  messagingSenderId: "406316285774",
  appId: "1:406316285774:web:c498efa408361eecd6a81f",
};

const app = initializeApp(firebaseConfig);
loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");
