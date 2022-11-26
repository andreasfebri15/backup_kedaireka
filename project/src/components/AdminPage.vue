<template>
  <v-container style="width: 900px; height: 100%;" id="elem">
    <div>
      <v-btn @click="logout" style="float: right">
        Logout
      </v-btn>
      <p id="alert">This page will be unable to change or reload after 1 hour</p>
    </div>
    
      <Dropzone/>

  </v-container>
</template>

<script>
import Dropzone from "./DragDrop.vue";
import { useRouter } from "vue-router";

export default {
  setup(){
    const router = useRouter();
    const logout = () => {
      localStorage.setItem("authenticated", false);
      router.push("/Login")
    };
    return {logout};
  },
  components: {
    Dropzone
  }
};
</script>

<style lang="scss" scoped>
  #alert{
    font-size: 14px;
  }
</style>