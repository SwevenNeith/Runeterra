// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Account from '../views/Account.vue';
import ClassePage from '../views/ClassePage.vue';
import ClasseDetails from '../components/ClasseDetails.vue'; // Assure-toi que le chemin est correct

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Account',
    path: '/account',
    component: Account,
  },
  {
    name: 'ClassePage',
    path: '/classe',
    component: ClassePage,
  },
  {
    name: 'ClasseDetails',
    path: '/classe/:slug',
    component: ClasseDetails, // Le composant enfant pour afficher les détails d'une classe
  },
  // Autres routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
