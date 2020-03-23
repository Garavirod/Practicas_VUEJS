<template>
    <div>
        <h3>Pictures Gallery</h3>
        <!-- name its router's name and params it's the varibale declared on router -->
        <!-- :to takes the current path-->
       <router-link :to="{name:'Pictures', params: {id: photo}}" 
            v-for="(photo,index) of photoArray" :key="index">
           <button class="btn btn-info">Photo {{photo}}</button>
       </router-link>
        <!-- Foreign component -->
       <Picture/>
       <button @click="goHome">Go Home</button>
       <button @click="goPrevious">Previous</button>
       <button @click="goNext">Next</button>

    </div>
</template>


<script>
    // We are calling one component from components for using in this view
    import Picture from '@/components/Picture.vue';
    export default {
        name: 'Pictures',
        components:{ //Components for using in this view
            Picture,
        },
        data() {
            return {
                photoArray:[1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods: {
            goHome(){
                this.$router.push('/')
            },
            goNext(){
                this.$router.go(1)
            },
            goPrevious(){
                this.$router.go(-1)
            }
        },
    }
</script>