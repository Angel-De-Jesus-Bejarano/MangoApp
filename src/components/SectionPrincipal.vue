<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

</script>

<template>
    <Splide :options="{ rewind: true, autoStart: boolean = true }" aria-label="My Favorite Images">
        <SplideSlide>
            <img class=" w-96 h-80 m-auto " src="../assets/img1.jpg" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
            <img class=" w-96 h-80 m-auto " src="../assets/img2.jpg" alt="Sample 2">
        </SplideSlide>
    </Splide>

    <section class=" flex justify-between w-11/12 m-auto mt-20 mb-20">
        <div class=" bg-slate-700 w-84 h-80"></div>
        <div class=" bg-orange-500 w-84 h-80"></div>
    </section>
</template>

<style scoped>

</style>