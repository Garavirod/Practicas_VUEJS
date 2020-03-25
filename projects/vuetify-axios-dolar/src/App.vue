<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="n in 1" :key="n" cols="12" sm="12" class="display-1">
          <router-view></router-view>
          <v-dialog v-model="loading.status" hide-overlay persistent width="300">
            <v-card :color="loading.color" dark>
              <v-card-text>
                {{loading.title}}
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import {mapState} from 'vuex';
export default {
  name:'App',
  data(){
    return {
      //
    }
  },
  computed: {
    ...mapState(['loading'])
  },
}
</script>


