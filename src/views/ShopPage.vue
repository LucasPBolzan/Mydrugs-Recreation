<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['update-cart']);

const addToCart = () => {
  emit('update-cart');
};
</script>

<template>
  <div class="shop-page">
    <h1 class="title">FEATURED PRODUCTS</h1>
    <div class="product-container">
      <div class="product-card">
        <img src="@/assets/slides/Slide_Purple_Pill.973957e6.jpg" alt="Purple Flower" class="product-image" />
        <h2>Purple Flower</h2>
        <p>70mg of MDMA per pill</p>
        <p>0.0021 BTC | 0.0802 ETH</p>
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
      </div>

      <div class="product-card">
        <img src="@/assets/slides/Slide_Green_Pill.63990feb.jpg" alt="Green Snowflake" class="product-image" />
        <h2>Green Snowflake</h2>
        <p>150mg of MDMA per pill</p>
        <p>0.0045 BTC | 0.1667 ETH</p>
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
      </div>

      <div class="product-card">
        <img src="@/assets/slides/Slide_Blue_Pill.cd5977bb.jpg" alt="Blue Clover" class="product-image" />
        <h2>Blue Clover</h2>
        <p>100mg of MDMA per pill</p>
        <p>0.0029 BTC | 0.114 ETH</p>
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
      </div>

      <div class="product-card">
        <img src="@/assets/slides/Slide_Red_Pill.52b9c112.jpg" alt="Red Pill" class="product-image" />
        <h2>Red Pill</h2>
        <p>90mg of MDMA per pill</p>
        <p>0.013 BTC | 0.23 ETH</p>
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop-page {
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 20px;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title {
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;
}

.product-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.product-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 200px;
  border: 1px solid white;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-card h2 {
  font-size: 20px;
  margin: 10px 0;
}

.product-card p {
  font-size: 14px;
  color: white;
  margin: 5px 0;
}

.add-to-cart {
  background-color: #ff6200;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

.add-to-cart:hover {
  background-color: #e65c00;
}
</style>