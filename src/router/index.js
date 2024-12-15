// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Map from '../views/Map.vue';
import Jeu from '../views/Jeu.vue';
import ClassePage from '../views/ClassePage.vue';
import ClasseDetails from '../views/ClasseDetails.vue'; // Assure-toi que le chemin est correct
import VoiesPage from '../views/VoiesPage.vue';
import VoieDetails from '../views/VoieDetails.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  { 
    path: "/map", 
    name: "Map", 
    component: Map, 
    meta: { noPadding: true } 
  },
  {
    name: 'Jeu',
    path: '/jeu',
    component: Jeu,
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
  {
    name: 'VoiesPage',
    path: '/voies',
    component: VoiesPage,
  }, // Nouvelle route pour la liste des voies
  {
    name: 'VoieDetails',
    path: '/voies/:slug',
    component: VoieDetails,
  }, // Nouvelle route pour une voie spécifique
  // Autres routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
