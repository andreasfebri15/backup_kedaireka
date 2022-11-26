<template>
    <v-form v-model="valid">
        <v-container style="width: 900px; height: 100%;">
            <v-row class="row">
                <v-col class="tags">Lokasi</v-col>
                <v-col md="4">
                    <v-text-field class="input" label="Lokasi" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Komoditas</v-col>
                <v-col md="4">
                    <v-select class="input" label="Pilih Komoditas" :items="['Padi', 'Kentang', 'Cabai']" required>
                    </v-select>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Hari Setelah Tanam</v-col>
                <v-col md="4">
                    <v-select class="input" label="Pilih Hari Setelah Tanam" :items="['HST 0', 'HST 1', 'HST 2', 'HST 3']" required>
                    </v-select>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Longitude</v-col>
                <v-col md="4">
                    <v-text-field class="input" label="Titik Longitude" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Latitude</v-col>
                <v-col md="4">
                    <v-text-field class="input" label="Titik Latitude" required>
                    </v-text-field>
                </v-col>
            </v-row>
                    <div class="home">
                        <h1>Upload Image</h1>
                        <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent
                            @drop.prevent="toggleActive, drop" @change="selectedFile"
                            :class="{ 'active-dropzone': active }" class="dropzone">
                            <span>Drag and Drop Image File</span>
                            <span>OR</span>
                            <div>
                                <label for="dropzoneFile">Select File</label>
                                <input type="file" id="dropzoneFile" class="dropzoneFile"
                                    accept="image/jpg, image/png, image/jpeg">
                            </div>
                        </div>
                        <span class="file-info">File: {{ dropzoneFile.name }}</span>
                    </div>
        </v-container>
    </v-form>
    <v-btn type="submit" style="float: right">
        Upload
    </v-btn>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const active = ref(false);
        const toggleActive = () => {
            active.value = !active.value;
        };
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0]
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
        };
        return { active, toggleActive, dropzoneFile, drop, selectedFile };
    },

};
</script>

<style scoped lang="scss">
.tags{
    font-weight: bolder;
}
.input{
    width: 500px;
}
.home {
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;

    h1 {
        font-size: 30px;
        margin-bottom: 32px;
    }
}

.dropzone {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #41b883;
    background-color: #fff;
    transition: .3s ease all;

    div {
        width: 200px;
    }

    input {
        display: none;
    }

    label {
        padding: 8px 12px;
        color: #fff;
        background-color: #41b883;
        opacity: 0.7;
        border-radius: 3px;
        transition: .3s ease all;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    label:hover {
        opacity: 1;
    }

    #dropzoneFile {
        display: none;
    }
}

.active-dropzone {
    color: white;
    border-color: white;
    background-color: #41b883;

    label {
        background-color: white;
        color: #41b883;
    }
}
</style>