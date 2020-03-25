<template>
  <div>
    <v-card class="mx-auto mt-5 mb-5" max-width="644">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>All about dollar</v-card-title>

      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

      <v-card-actions>
        <v-btn text>Share</v-btn>

        <v-btn color="purple" text>push</v-btn>

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
          ></v-date-picker>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    show: false,
    date: new Date().toISOString().substr(0, 10),
    minDate: "1984",
    maxDate: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    async getDollar(date) {      
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${date}`);
      console.log(datos.data.serie[0]);
    }
  },
  // When the documents be created
  created() {
    console.log("HOLA PERRO");
    this.getDollar("01-02-2009");
  }
};
</script>