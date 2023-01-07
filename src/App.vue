<script setup>
import Header from './components/Principal/Header.vue';
import SectionPrincipal from './components/SectionPrincipal.vue'
import SectionProducto from './components/SectionProducto.vue'
import Categorias from './components/CategoriasPrincipal.vue'
import Footer from './components/Principal/Footer.vue'
import { MqResponsive } from 'vue3-mq';

</script>

<template>
  <Header msg="Vite + Vue"/>
  <router-link to="/Login">Login</router-link>
  <router-view/>
  <SectionPrincipal/>
  <Categorias/>
  <SectionProducto/>
  <Footer/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
