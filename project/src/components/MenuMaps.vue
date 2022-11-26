<template>
    <v-container style="width: 900px; height: 100%;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <Maps/>
    </v-container>
</template>

<script>
import Maps from "./FullMaps.vue"

export default {
    components: {
        Maps
    },
    data: () => ({
        items: [
            'Dashboard',
            'Maps']
    }),
}
</script>