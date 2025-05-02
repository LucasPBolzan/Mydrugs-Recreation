import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Caminho corrigido para o arquivo router

const app = createApp(App);
app.use(router);
app.mount('#app');