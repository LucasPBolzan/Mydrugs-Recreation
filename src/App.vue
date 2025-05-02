<script setup>
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
</script>

<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
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