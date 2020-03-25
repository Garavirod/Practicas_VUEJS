<template>
  <v-app>
    <v-container>
    <v-row no-gutters>
      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="12"        
        class="purple display-1"
      >
         <router-view></router-view>
      </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>


