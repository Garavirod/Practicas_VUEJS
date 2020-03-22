<template>
    <div>
        <h3>Pictures Gallery</h3>
        <!-- Foreign component -->
        <Picture/>
    </div>
</template>


<script>
    // We are calling one component from components for using in this view
    import Picture from '@/components/Picture.vue';
    export default {
        name: 'Pictures',
        components:{ //Components for using in this view
            Picture,
        }
    }
</script>