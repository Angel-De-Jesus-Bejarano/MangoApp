<script>
import { ref } from 'vue';
import imagen2 from '../assets/Pokemon.png'
export default {
    setup() {
        
        const message = 'HOLA';
        const start  = function() { console.log('hola') }
        const images ={
            imagen1 : 'Pokemon.png',
        }
        
        return { message, start, images, imagen2 }  
    }
    

    
}
</script>

<template>
    <div class=" border-orange-600 border-y-4 w-60  flex flex-col items-center mb-10 rounded-xl ">
        <img class=" w-40 mb-8 " v-bind:src="imagen2"  alt="">
        
        <div class=" flex flex-col justify-between pt-2  pb-2 bg-slate-600 rounded-lg ">
            <p class=" font-bold text-center text-white">Esto es un producto que se vende en mango</p>
            <span class=" text-orange-500 text-lg text-center">$100</span>
        </div>
    </div>
</template>

<style scoped>

</style>