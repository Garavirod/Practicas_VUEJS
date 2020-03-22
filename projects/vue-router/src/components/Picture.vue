<template>
    <div>
        <!-- id is the name of the variable in the router -->
        <h1>Picture : {{$route.params.id}}</h1>
    </div>
</template>


<script>
    export default {
        name: 'Picture'
    }
</script>