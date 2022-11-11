import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDEa8bobROOH8l5ce7mNtMbszemM6PjjVA",
  authDomain: "kedaireka-cf553.firebaseapp.com",
  projectId: "kedaireka-cf553",
  storageBucket: "kedaireka-cf553.appspot.com",
  messagingSenderId: "600249633194",
  appId: "1:600249633194:web:9903cc767a073ff905c3d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");
