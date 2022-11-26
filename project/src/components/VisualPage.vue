<template>
  <v-container style="width: 900px; height: 100%">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-card
      class="wrapper bg-blue-lighten-3"
      elevation="20"
      height="550"
      width="900"
      style="margin-top: -6px"
    >
      <p class="text-h5 font-weight-medium pt-5 ms-8">
        REPORT PERKEMBANGAN KARBON
      </p>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left bg-blue-lighten-3">
              <v-select
                class="down"
                :items="periode"
                label="HST"
                outlined
                variant="solo"
                dense
                max-width="150"
              >
              </v-select>
            </th>
            <th class="text-left bg-blue-lighten-3">
              <v-select
                class="down"
                :items="years"
                label="Tahun"
                outlined
                variant="solo"
                dense
                max-width="150"
              >
              </v-select>
            </th>
          </tr>
        </thead>
      </v-table>
      <div class="bg-blue-lighten-5">
        <canvas id="data-tren"></canvas>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Chart from "chart.js/auto";
import datatrenChartData from "../data/datatren.js";
export default {
  /* eslint-disable */
  name: "datatren",
  data() {
    return {
      periode: ["Sebelum Tanam", "HST Awal", "HST Tengah", "HST Akhir"],
      years: ["2022"],
      datatrenChartData: datatrenChartData,
      items: ["Dashboard", "Report Page"],
    };
  },
  mounted() {
    const ctx = document.getElementById("data-tren");
    new Chart(ctx, this.datatrenChartData);
  },
};
</script>
