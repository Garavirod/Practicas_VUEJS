<template>
  <div>
    <v-card class="mx-auto mt-5 mb-5" max-width="644">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>All about dollar</v-card-title>

      <v-card-subtitle>{{dolarValue}} miles of wonder</v-card-subtitle>

      <v-card-actions>
        <v-btn text>Share</v-btn>

        <v-btn color="purple" text>Push me</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-date-picker
            v-model="date"
            full-width
            :landscape="$vuetify.breakpoint.smAndUp"
            class="mt-4"
            locale="es-me"
            :min="minDate"
            :max="maxDate"
            @change="getDollar(date)"
          ></v-date-picker>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    show: false,
    date: new Date().toISOString().substr(0, 10),
    minDate: "1984",
    maxDate: new Date().toISOString().substr(0, 10),
    dolarValue: null
  }),
  methods: {
    ...mapMutations(["showLoading", "hideLoading"]),
    async getDollar(date) {
      let arrayDate = date.split(["-"]); //we convert to array the date
      let newDate = arrayDate[2] + "-" + arrayDate[1] + "-" + arrayDate[0]; //we invert the date because the format
      try {
        this.showLoading({ title: "Loading results",color:'dark' });
        let datos = await axios.get(`https://mindicador.cl/api/dolar/${newDate}`);
        if (datos.data.serie.length > 0) {
          // This await is waiting for previous await
          this.dolarValue = await datos.data.serie[0].valor;
        } else {
          this.dolarValue = "No results";
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.hideLoading();
      }
    }
  },
  // When the documents be created
  created() {
    this.getDollar(this.date);
  }
};
</script>