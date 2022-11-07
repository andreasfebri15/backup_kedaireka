<template>
    <Leftside />
    <v-container style="width: 800px; height: 649px;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col>
                <h1>
                    <v-icon icon="mdi-help-circle"></v-icon> PUSAT BANTUAN
                </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-expansion-panels variant="accordion">
            <v-expansion-panel>
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                    <v-icon icon="mdi-information"></v-icon> [Tentang Karbon] Teori Karbon
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    Dalam manusia karbon sekitar 20% dan ada beberapa karbon yang terdapat dalam tumbuhan
                    <br>
                    Bagian yang termasuk dalam teori karbon
                    <br>1.Komersial dan Destruktif
                    <br>2.Penginderaan jauh (citra satelit)
                        <br>NIR = radiasi inframerah dekat dari piksel
                        <br>RED = radiasi cahaya merah dari piksel
                    <br>3.Pemodelan
                    <br>Citra drone -> Indeks spektral(X) -> Hasil analisis -> Karbon pada sampel tanaman(Y) -> Model alometrik
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel >
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                    <v-icon icon="mdi-chat-question"></v-icon> [Tentang Karbon] Mengapa karbon penting?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <br>
                    -Mampu mengevalusiasi suatu sektor untuk menghitung antara sarapan dan luaran karbon
                    <br>
                    -Mampu memaksimalkan perdagangan karbon
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                    <v-icon icon="mdi-chat-question"></v-icon>Bagaimana cara mendapatkan nilai karbon?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <br>- masuk ke dalam aplikasi ISAI
                    <br>- kemudian klik menu maps 
                    <br>- Pilih lokasi yang di inginkan 
                    <br>- Lalu klik titik lokasi tersebut
                    <br>- kemudian akan muncul beberapa data 
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                    <v-icon icon="mdi-chat-question"></v-icon> Situs tidak bisa diakses?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <br>- Cek koneksi internet
                    <br>- Periksa URL penulisan 
                    <br>- Muat ulang atau segarkan halaman
                    <br>- Bersihkan cache dan history browser
                    <br>- Setel ulang browser yang digunakan
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                    <v-icon icon="mdi-chat-question"></v-icon> Bagaimana cara menghubungi customer service?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <br>- Masuk dalam aplikasi ISAI 
                    <br>- Kemudian klik menu beranda 
                    <br>- hubungi nomor dan sosial media yang telah tertera 
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
            </v-col>
        </v-row>
        <br>
    </v-container>
</template>

<script>
import Leftside from "../components/LeftSide.vue"

export default {

    components: {
        Leftside
    },

    data: () => ({
        items: [
            'Dashboard',
            'Bantuan']
    })
}

</script>

<style>
.panel {
    background-color:  rgb(126, 126, 255);
    font-weight: bold;
    font-size: 18px;
}
</style>