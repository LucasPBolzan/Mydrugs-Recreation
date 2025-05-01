<script setup>
import SiteHeader from './components/SiteHeader.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div id="app">
    <SiteHeader />
    <div class="content">
      <HelloWorld msg="Bem-vindo ao Meu Site!" />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  margin-top: 80px;
  padding: 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}
</style>