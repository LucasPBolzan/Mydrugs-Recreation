<script setup>
import { ref } from 'vue';

import slide1 from '@/assets/slides/Slide_Blue_Pill.cd5977bb.jpg';
import slide2 from '@/assets/slides/Slide_Green_Pill.63990feb.jpg';
import slide3 from '@/assets/slides/Slide_Purple_Pill.973957e6.jpg';
import slide4 from '@/assets/slides/Slide_Red_Pill.52b9c112.jpg'; 

const images = ref([slide1, slide2, slide3, slide4]);
const currentIndex = ref(0);

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

</script>

<template>
  <main>
    <div class="carousel">
      <div class="carousel-inner">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ active: index === currentIndex }"
          alt="Imagem do carrossel"
          v-show="index === currentIndex" 
        />
      </div>
      <button class="carousel-btn prev" @click="prevImage">◄</button>
      <button class="carousel-btn next" @click="nextImage">►</button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: black;
  width: 100%; 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.carousel {
  width: 95%; 
  max-width: none; 
  overflow: hidden;
}

.carousel-inner {
  width: 100%;
  height: 600px; 
}

.carousel-inner img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  display: block; 
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.carousel-btn:hover {
  background-color: black
}

.active {
  display: block;
}
</style>