<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>Top western road trips</v-card-title>

      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

      <v-card-actions>
        <v-btn text>Share</v-btn>

        <v-btn color="purple" text>Explore</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-date-picker
          v-model="date"
          full-width
          :landscape="$vuetify.breakpoint.smAndUp"
          class="mt-4"
        ></v-date-picker>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    date: new Date().toISOString().substr(0, 10),
  }),
};
</script>