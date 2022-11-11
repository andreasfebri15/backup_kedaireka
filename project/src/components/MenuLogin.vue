<template>
  <Leftside />
  <v-container style="justify-content: center; width: 800px; height: 649px">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login</div>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <p v-if="errMsg">{{ errMsg }}</p>
            </v-container>
          </v-form>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="register"
          >
            Login
          </v-btn>
          <v-container style="justify-content: center">
            <button
              type="button"
              class="btn btn-primary"
              @click="signInWithGoogle"
            >
              Sign in With Google
            </button>
          </v-container>
        </div>
      </div>
    </div>
  </v-container>
</template>

<!-- <template>
  <Leftside />
  Sign-in

  <h1>Sign in Account</h1>
  <p><input type="text" placeholder="email" v-model="email" /></p>
  <p><input type="password" placeholder="password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign in With Google</button></p>
</template> -->

<script setup>
import Leftside from "../components/LeftSide.vue";
import { ref } from "vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(data => {
      console.log("Sign in asukses");
      console.log(auth.currentUser);
      router.push("/Uji");
    })
    .catch(err => {
      console.log(err.code);
      errMsg.value = err.code;
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then(result => {
      console.log(result.user);
      router.push("/Uji");
    })
    .catch(error => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>

<script>
export default {
  components: {
    Leftside,
  },

  data: () => ({
    items: ["Dashboard", "Login (Admin)"],
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: value => !!value || "Required.",
    },
  }),

  // methods: {
  //   validate() {
  //     window.location.href = "http://localhost:8080/Beranda";
  //   },
  // },
};
</script>
