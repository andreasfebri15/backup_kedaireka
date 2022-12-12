<template>
  <v-container id="container-1">
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <h2><v-icon icon="mdi-calculator"></v-icon>Kalkulator Karbon ISAI</h2>
    <div id="con">
      <v-form>
        <v-row>
          <v-col id="upload">
            <v-file-input
              v-model="uploadPNG"
              @change="addPNG($event)"
              label="Masukkan gambar"
              variant="filled"
              prepend-icon="mdi-camera"
              accept="image/jpg, image/png, image/jpeg"
              required
            >
            </v-file-input>
          </v-col>
        </v-row>
      </v-form>
      <div>
        <v-btn
          type="submit"
          @click="submitForm"
          style="background-color: #757678; color: white"
          >Upload</v-btn
        >&nbsp;
        <v-btn @click="reset">Reset</v-btn>
      </div>
    </div>
    <h6 v-html="text" style="display: flex; justify-content: center"></h6>
  </v-container>
</template>

<style>
#con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}

@media only screen and (max-width: 600px) {
  #container-1 {
    height: 100%;
    width: 100%;
  }
  #upload {
    width: 400px;
    height: 100%;
  }
}

@media only screen and (min-width: 601px) {
  #container-1 {
    height: 900px;
    width: 100%;
  }
  #upload {
    width: 450px;
    height: 100%;
  }
}
@media only screen and (min-width: 1200px) {
  #container-1 {
    height: 100%;
    width: 900px;
  }
  #upload {
    width: 600px;
    height: 100%;
  }
}
</style>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

var uuid = uuidv4();
export default {
  data: function () {
    return {
      items: {
        uuid: null,
        uploadPNG: "",
      },
      text: "Karbon tanah: " + sessionStorage.getItem("karbonTanah"),
      bread: ["Dashboard", "KalkulIsai"],
    };
  },
  methods: {
    addPNG: function (event) {
      this.uploadPNG = event.target.files[0];
    },
    submitForm: async function () {
      this.uuid = String(uuid);
      let binary = await this.readBinary(this.uploadPNG);

      const s3 =
        "https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/kalkulator-isai/" +
        this.uuid +
        ".png";
      const url =
        "https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/kalkulator/" +
        this.uuid +
        ".png";

      let bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const contentType = "image/png";
      let file = new Blob([bytes], { type: contentType });
      axios.post(s3, file, { headers: { "Content-Type": "image/png" } });
      setTimeout(function () {
        axios.get(url).then(resp => {
          sessionStorage.setItem("karbonTanah", resp.data.body.karbon_tanah);
          location.reload();
        });
      }, 500);
    },
    readBinary: function (file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
      });
    },
    reset: function () {
      sessionStorage.removeItem("karbonTanah");
      location.reload();
    },
  },
};
</script>
