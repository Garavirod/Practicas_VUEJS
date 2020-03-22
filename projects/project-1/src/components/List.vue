<template>
  <div class="p-3">
    <ul class="list-group">
      <!-- Always you have to put a :key for say to vue you working with unique elements -->
      <li
        v-for="(f,index) of sortedFruit"
        :key="f.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{f.name}}
        <span class="badge badge-primary badge-pill">
          {{f.quantity}}
          <button class="btn btn-primary" @click="increase(index)">increase</button>
        </span>
      </li>
    </ul>
    <button class="btn btn-danger btn-lg btn-block" @click="resetFruit">Reset fruit</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "List",
  computed: {
    ...mapState(["fruit"]),
    sortedFruit() {
        let fruits = this.fruit;
        return fruits.sort((a, b) => b.quantity - a.quantity)
    }
  },
  methods: {
    ...mapMutations(["increase", "resetFruit"])
  }
};
</script>