<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <list></list>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    List,
  }
}
</script>

