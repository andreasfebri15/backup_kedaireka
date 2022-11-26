<template>
  <!-- Side Bar Menu -->
  <v-navigation-drawer class="bg-cyan-darken-3" expand-on-hover rail location="left">
    <!-- Logo Menu ISAI -->
    <v-list class="list">
      <v-list-item class="bg-cyan-lighten-3">
        <v-img src="../images/1.png" margin="0px" padding="0px"></v-img>
      </v-list-item>
    </v-list>
    <v-divider class="divider"></v-divider>
    <!-- Konten Menu -->
    <v-list nav>
      <router-link to="/beranda" class="menus">
        <v-list-item prepend-icon="mdi-home" value="beranda">Beranda</v-list-item>
      </router-link>
      <router-link to="/maps" class="menus">
        <v-list-item prepend-icon="mdi-map" value="maps">Maps</v-list-item>
      </router-link>
      <router-link to="/bantuan" class="menus">
        <v-list-item prepend-icon="mdi-help-circle" value="bantuan">Bantuan</v-list-item>
      </router-link>
      <router-link to="/visual_page" class="menus">
        <v-list-item prepend-icon="mdi-chart-line" value="grafik">Report Page</v-list-item>
      </router-link>
      <br>
      <v-divider class="divider"></v-divider>
      <router-link to="/login" class="menus">
        <v-list-item prepend-icon="mdi-account-edit" value="login">Login (Admin)</v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
  methods: {

  },
};
</script>

<style>
.menus {
  text-decoration: none;
  color: white;
  font-weight: bold;
  opacity: 0, 5;
  left: -30px;
}

.menus:hover {
  color: black;
}

.divider{
  padding: 2px;
  background-color: #26C6DA;
}
</style>
