<template>
  <router-link to="/beranda" id="link" style="text-decoration: none">
    <div
      style="
        background: url(https://www.tandhur.id/bg_login.png);
        background-size: cover;
        /* height: 649px; */
      "
      id="dashboard"
    >
      <h1 id="welcome">SELAMAT DATANG DI ISAI</h1>
    </div>
  </router-link>
</template>

<style>
#welcome {
  color: white;
  background-color: black;
  opacity: 0;
  height: 649px;
  text-align: center;
  padding-top: 20%;
  font-size: 50px;
  transition-duration: 2s;
}
#welcome:hover {
  opacity: 0.7;
}

@media screen and (max-width: 1920px) {
  #dashboard {
    height: 100%;
    width: 100%;
  }
  #welcome {
    height: 100%;
    width: 100%;
    background-size: 50px;
  }
}

@media screen and (max-width: 1200px) {
  #dashboard {
    height: 100%;
    width: 100%;
  }
  #welcome {
    height: 100%;
    width: 100%;
    background-size: 50px;
  }
}

@media screen and (max-width: 600px) {
  #dashboard {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
  #welcome {
    height: 100%;
    width: 100%;
  }
}
</style>

<script>
export default {
  data: () => ({
    main: true,
  }),
  methods: {
    mains() {
      this.main = false;
    },
  },
};
</script>
