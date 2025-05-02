import { createRouter, createWebHistory } from 'vue-router';
import SiteMain from '../views/SiteHome.vue'; // Página inicial
import ShopPage from '../views/ShopPage.vue';
import SafetyPage from '../views/SafetyPage.vue';
import FaqPage from '../views/FaqPage.vue'; // Ajustado para FaqPage.vue
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', component: SiteMain }, // Rota para a página inicial
  { path: '/shop', component: ShopPage }, // Rota para a página de loja
  { path: '/safety', component: SafetyPage }, // Rota para a página de segurança
  { path: '/faq', component: FaqPage }, // Rota para a página de FAQ
  { path: '/contact', component: ContactPage }, // Rota para a página de contato
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;