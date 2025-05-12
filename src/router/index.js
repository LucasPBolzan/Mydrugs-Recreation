import { createRouter, createWebHistory } from 'vue-router';
import SiteMain from '../views/SiteHome.vue'; 
import ShopPage from '../views/ShopPage.vue';
import SafetyPage from '../views/SafetyPage.vue';
import FaqPage from '../views/FaqPage.vue'; 
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', component: SiteMain },
  { path: '/shop', component: ShopPage }, 
  { path: '/safety', component: SafetyPage },
  { path: '/faq', component: FaqPage }, 
  { path: '/contact', component: ContactPage }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;