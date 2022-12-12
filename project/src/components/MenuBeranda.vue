<template>
  <v-container id="container-1">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../images/1.png')" contain height="200" />
        <p class="text-justify">
          Isai merupakan sebuah aplikasi berbasis website yang dibuat dan
          dikembangkan oleh perusahaan Beehive Drones. Aplikasi ini dibuat
          dengan tujuan supaya setiap orang dapat melakukan monitoring terhadap
          jumlah karbon pada wilayah-wilayah persawahan, perkebunan, dan juga
          hutan yang terdapat di seluruh wilayah Indonesia. Dengan melakukan hal
          ini, diharapkan Indonesia dapat memanfaatkan sumber daya berupa unsur
          karbon ini dengan baik, sehingga nantinya dapat meningkatkan
          perekonomian negara dan meningkatkan taraf hidup masyarakat, terutama
          para petani.
        </p>
        <br />
        <p class="text-justify">
          Beehive Drones adalah perusahaan pesawat nirawak (biasa disebut
          'drone'), hal tersebut bergunakan sebagai menentukan titik lokasi yang
          akan kita ketahui berapa nilai karbon yang ada diarea tersebut hal ini
          dapat mempermudah para petani. Hal ini juga bermanfaat agar panen
          hasil dari pertanian bisa diketahui dengan hasil yang sudah didapatkan
          dari beberapa informasi mengenai komoditas dan lain sebagai nya
          menggunakan kemampuan drone tersebut.
        </p>
      </v-col>
    </v-row>

    <v-row
      class="text-center d-flex justify-contents-center"
      style="margin-top: 8%"
      id="beranda-1"
    >
      <v-col class="col-md-4">
        <h5 class="fw-bold p-2" style="border-bottom: 1px solid black">
          CONTACT US
        </h5>
        <div class="d-flex flex-column" id="kontak">
          <p><v-icon icon="mdi-email"></v-icon> contact@bvdrones.com</p>
          <p>
            <v-icon class="text-start" icon="mdi-map-marker"></v-icon>Jalan
            Arjuna 4B Wirobrajan <br />
            Yogyakarta 55252
          </p>
        </div>
      </v-col>
      <v-col
        class="col-md-4"
        style="background-color: #134280; border-radius: 8px 8px 8px 8px"
        id="col-padding"
      >
        <h5
          class="fw-bold p-2"
          style="border-bottom: 1px solid white; color: white"
          id="follow-us"
        >
          FOLLOW US
        </h5>
        <div id="sosial">
          <v-btn
            class="ma-1"
            color="purple"
            icon="mdi-instagram"
            href="https://www.instagram.com/beehivedrones/"
          >
          </v-btn>
          <v-btn
            class="ma-1"
            color="blue"
            icon="mdi-linkedin"
            href="https://www.linkedin.com/company/beehivedrones/"
          ></v-btn>
          <v-btn
            class="ma-1"
            color="blue-darken-3"
            icon="mdi-facebook"
            href="https://www.facebook.com/beehivedrone?_rdc=1&_rdr"
          ></v-btn>
        </div>
      </v-col>
      <v-col class="col-md-4">
        <h5 class="fw-bold p-2" style="border-bottom: 1px solid black">
          NAVIGATION
        </h5>
        <div class="d-flex flex-column">
          <router-link to="/beranda" class="menus">
            <v-icon icon="mdi-home" />&nbsp; Beranda
          </router-link>
          <router-link to="/maps" class="menus">
            <v-icon icon="mdi-map" />&nbsp; Maps
          </router-link>
          <router-link to="/bantuan" class="menus">
            <v-icon icon="mdi-help-circle" />&nbsp; Bantuan
          </router-link>
          <router-link to="/beranda" class="menus">
            <v-icon icon="mdi-account-edit" />&nbsp; Login
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#sidebarCollapse {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
}

#sidebarCollapse span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: #555;
  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);
}

.menus {
  color: white;
  background-color: #134280;
  width: 100%;
  height: 100%;
  margin: 5px;
  padding-right: -5px;
  border-radius: 5px;
}

.menus:hover {
  color: black;
  background-color: #134280;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #container-1 {
    height: 900px;
    width: 100%;
  }
  #sosial {
    font-size: 13px;
  }
  #beranda-1 {
    font-size: 13px;
  }
  #kontak {
    font-size: 13px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 601px) {
  #container-1 {
    height: 900px;
    width: 100%;
  }
  #sosial {
    font-size: 15px;
  }
  #beranda-1 {
    font-size: 14px;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  #container-1 {
    height: 100%;
    width: 100%;
  }
  #beranda-1 {
    font-size: 15px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #container-1 {
    height: 100%;
    width: 100%;
  }
  #beranda-1 {
    font-size: 15px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #container-1 {
    height: 100%;
    width: 900px;
  }
  #beranda-1 {
    font-size: 15px;
  }
}
</style>

<script>
import $ from "jquery";
import "jquery/dist/jquery.min.js";
export default {
  name: "v-container",
  auto_interval: 2000,
  data: () => ({
    items: ["Dashboard", "Beranda"],
  }),
};
</script>
