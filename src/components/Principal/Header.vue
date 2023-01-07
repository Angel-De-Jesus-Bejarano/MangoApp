<script setup>
import { ref } from 'vue'


defineProps({
  msg: String,
});



</script>

<template>
  <header class=" bg-slate-700 flex justify-between min-w-full items-center mb-14 h-13  ">
    <div class=" w-2/5  flex flex-col items-center " >
      <div class=" bg-slate-700 pb-5 pt-5 pl-2 pr-2  ">
        <img class=" m-auto w-20" src="../../assets/mango.png" alt=""/>
      </div>
    </div>
    <nav class=" w-9/12 flex justify-around items-center ">
      <div>
        <input class=" h-10 w-80 pl-4" type="text" placeholder="¿Que estas buscando?">
        <button class=" bg-orange-600 h-10">Buscar</button>
      </div>
      <div class=" flex justify-between">
      <a class=" mr-4" href="">Inicio</a>
      
      </div>
    </nav>
  </header>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

a{
  @apply text-xl text-orange-400
}
</style>
