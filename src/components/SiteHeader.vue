<script setup>
</script>

<template>
  <header>
    <div class="header-container">
      <nav>
        <div class="nav-left">
          <a href="#">SHOP</a>
          <a href="#">FAQ</a>
        </div>
        <a href="/" class="logo">
          <img src="@/assets/logo.png" alt="Logo" />
        </a>
        <div class="nav-right">
          <a href="#">SAFETY</a>
          <a href="#">CONTACT</a>
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
</style>