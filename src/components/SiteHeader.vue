<script setup>
import { defineProps } from 'vue';
const props = defineProps(['cartCount']);
</script>

<template>
  <header>
    <div class="header-container">
      <nav>
        <div class="nav-left">
          <router-link to="/shop">SHOP</router-link>
          <router-link to="/faq">FAQ</router-link>
        </div>
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Logo" />
        </router-link>
        <div class="nav-right">
          <router-link to="/safety">SAFETY</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </div>
        <div class="cart-container">
          <img src="@/assets/carrinho_sem_fundo.png" alt="Carrinho" class="cart-image" />
          <span class="cart-count">{{ props.cartCount }}</span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  color: white;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  position: relative; 
}

.nav-left,
.nav-right {
  display: flex;
  gap: 100px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
  padding: 8px 16px;
}

.logo img {
  height: 100px;
  width: auto;
  display: block;
}

.cart-container {
  position: absolute; 
  right: 50px; 
  top: 50%; 
  transform: translateY(-50%); 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-image {
  height: 40px;
  width: auto;
  display: block;
}

.cart-count {
  font-size: 16px;
  color: white;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>