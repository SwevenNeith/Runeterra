<template>
    <div>
      <h1>Liste des Classes</h1>
      <ul>
        <li v-for="classe in classes" :key="classe.slug">
          <router-link :to="'/classe/' + classe.slug">{{
            classe.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // Importation des données des classes depuis un fichier data/classes.js
  import { classes } from '../data/classes.js';
  
  export default {
    data() {
      return {
        classes, // Assigner les classes aux données du composant
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour la liste des classes */
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  router-link {
    text-decoration: none;
    color: #42b983;
  }
  </style>
  