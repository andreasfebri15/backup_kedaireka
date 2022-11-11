<template>
  <v-app>
    <Dashboard />
  </v-app>
</template>

<script>
import Dashboard from "./components/MenuDashboard.vue";
import { RouterLink, RouterView } from "vue-router";

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

export default {
  name: "App",

  components: {
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>
