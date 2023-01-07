<script setup>
import CardProducto from './CardProducto.vue'
import { ref } from 'vue';
</script>

<template>
    <main class=" w-full m-auto  flex flex-col  ">
        <div>
            <h1 class=" text-3xl mb-10 mt-10 text-center">Encuentra nuestros pricipaples productos</h1>
        </div>
        <div class=" w-4/5 m-auto flex flex-wrap justify-between mb-16">
            <CardProducto/>
            <CardProducto/>
            <CardProducto/>
            <CardProducto/>
            <CardProducto/>
        </div>
    </main>
</template>

<style scoped>

</style>