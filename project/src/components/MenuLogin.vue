<!-- <template>
    <div class="login">
        <form>
            <h3>Login</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name:'Log-In'
    }
</script>
<style>
    
</style> -->
<template>
  <Leftside />
  <v-container style="justify-content: center; width: 800px; height: 649px;">
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" placeholder="Email..">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password..">
            </div><br>
            <router-link to="/Beranda" class="menus" @click="beranda()">
            <button type="submit" class="btn btn-primary">Login</button>
              </router-link>
            <!-- <div class="social-icons">
              <ul>
                  <li><a href="#"><i class="fas fa-google"></i></a></li>
                  <li><a href="#"><i class="fas fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fas fa-twitter"></i></a></li>
              </ul>
          </div> -->
          <div class="header">
            <div class="container">
              <nav class="navbar navbar-expand">
                <div class="collapse navbar-collapse" id="header_menu">
                  <ul class="navbar-nav ml-auto">
                    <li class="flex-shrink-0 nav-item">
                      <a class="nav-link" href="#"><i class="fas fa-heart fa-2x" style="vertical-align: middle;"></i>Github</a>
                    </li>
                    <li class="flex-shrink-0 nav-item">
                      <a class="nav-link" href="#"><i class="fas fa-shopping-cart fa-2x" style="vertical-align: middle;"></i> LinkedIn</a>
                    </li>
                    <li class="flex-shrink-0 nav-item">
                      <i class="fas fa-user fa-2x" style="vertical-align: middle;"></i>
                      <a class="nav-link" href="#">Google</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</v-container>
</template>

<script>
import Leftside from "../components/LeftSide.vue"


export default {
  components: {
        Leftside
    },
    name: 'v-container',

methods: {
beranda() {
  if (this.items.length < 3) {
    this.items.push('Beranda')
  }
  else {
    this.items.shift()
    this.items.push('Beranda')
  }
}}}

</script>