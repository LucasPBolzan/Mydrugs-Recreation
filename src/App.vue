<script setup>
import { ref } from 'vue';
import SiteHeader from './components/SiteHeader.vue';

const cartCount = ref(0); 


const updateCart = () => {
  cartCount.value += 1; 
};

</script>

<template>
  <div id="app">
    <SiteHeader :cart-count="cartCount" />
    <router-view @update-cart="updateCart" />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: black;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: black;
}

html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>