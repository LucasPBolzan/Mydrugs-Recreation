<script setup>
import { ref, onMounted } from 'vue';
import { defineEmits } from 'vue';

// Evento para comunicar com o componente pai
const emit = defineEmits(['update-cart']);

// Lista reativa de produtos
const products = ref([]);

// Função para buscar os produtos da API
const fetchProducts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Mapear imagens locais com base no ID
    const imageMap = {
      1: new URL('@/assets/slides/Slide_Purple_Pill.973957e6.jpg', import.meta.url).href,
      2: new URL('@/assets/slides/Slide_Green_Pill.63990feb.jpg', import.meta.url).href,
      3: new URL('@/assets/slides/Slide_Blue_Pill.cd5977bb.jpg', import.meta.url).href,
      4: new URL('@/assets/slides/Slide_Red_Pill.52b9c112.jpg', import.meta.url).href
    };

    // Pegar apenas os 4 primeiros e formatar os dados
    products.value = data.slice(0, 4).map(post => ({
      id: post.id,
      title: post.title.slice(0, 15),
      description: post.body.slice(0, 30),
      price: `0.00${post.id} BTC | 0.0${post.id * 2} ETH`,
      image: imageMap[post.id] || 'https://via.placeholder.com/150'
    }));
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
};

// Buscar produtos assim que o componente montar
onMounted(fetchProducts);

// Emitir evento ao clicar no botão
const addToCart = () => {
  emit('update-cart');
};
</script>

<template>
  <div class="shop-page">
    <h1 class="title">FEATURED PRODUCTS</h1>
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
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
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 200px;
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
