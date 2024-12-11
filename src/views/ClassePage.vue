<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb :trail="breadcrumbTrail" />
  
    <h1>Liste des Classes</h1>
    <ul>
      <li v-for="classe in classes" :key="classe.slug">
        <router-link :to="'/classe/' + classe.slug">{{ classe.name }}</router-link>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  // Importation des données des classes et du composant Breadcrumb
  import { classes } from '../data/classes.js';
  import Breadcrumb from '../components/Breadcrumb.vue';
  
  export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      classes,
      breadcrumbTrail: [
        { label: 'Classes', to: null }, // Étape actuelle
      ],
    };
  },
  };
  </script>
  