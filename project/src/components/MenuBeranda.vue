<template>
  <v-container id="container" md="4">
    <v-breadcrumbs :items="items" id="navigasi">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <div>
      <v-row class="text-center" id="konten">
        <v-col cols="12">
          <v-img :src="require('../images/1.png')" contain height="200" />
          <p class="text-justify">
            Isai merupakan sebuah aplikasi berbasis website yang dibuat dan
            dikembangkan oleh perusahaan Beehive Drones. Aplikasi ini dibuat
            dengan tujuan supaya setiap orang dapat melakukan monitoring
            terhadap jumlah karbon pada wilayah-wilayah persawahan, perkebunan,
            dan juga hutan yang terdapat di seluruh wilayah Indonesia. Dengan
            melakukan hal ini, diharapkan Indonesia dapat memanfaatkan sumber
            daya berupa unsur karbon ini dengan baik, sehingga nantinya dapat
            meningkatkan perekonomian negara dan meningkatkan taraf hidup
            masyarakat, terutama para petani.
          </p>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col id="kontak">
          <h1>Contact Us</h1>
          <p><v-icon icon="mdi-email"></v-icon> contact@bvdrones.com</p>
          <p>
            <v-icon icon="mdi-map-marker"></v-icon> Jalan Arjuna 4B Wirobrajan
            Yogyakarta 55252
          </p>
        </v-col>
        <v-col id="sosial">
          <h1>Get To Know Us</h1>
          <v-btn
            class="ma-2"
            color="purple"
            icon="mdi-instagram"
            href="https://www.instagram.com/beehivedrones/"
          >
          </v-btn>
          <v-btn
            class="ma-2"
            color="blue"
            icon="mdi-linkedin"
            href="https://www.linkedin.com/company/beehivedrones/"
          ></v-btn>
          <v-btn
            class="ma-2"
            color="blue-darken-3"
            icon="mdi-facebook"
            href="https://www.facebook.com/beehivedrone?_rdc=1&_rdr"
          ></v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "v-container",
  auto_interval: 2000,
  data: () => ({
    items: ["Dashboard", "Beranda"],
    playing: true,
  }),
  methods: {
    //
  },
};
</script>

<style>
#container {
  width: 900px;
  height: 100%;
}

/* .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

/* @media screen and (max-width: 2000px) {
  #container {
    width: 900px;
    height: 100%;
  }
  #konten {
    font-size: 15px;
  }
} */

/* Smartphone */
@media screen and (max-width: 600px) {
  #container {
    width: 100%;
    height: 100%;
  }
  #navigasi {
    font-size: 14px;
  }
  #konten {
    font-size: 15px;
  }
  #kontak {
    font-size: 15px;
  }
  #sosial {
    font-size: 15px;
  }
  .ma-2 {
    size: 5ch;
  }
}
</style>
