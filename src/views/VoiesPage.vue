<template>
    <div>
      <h1>Liste des voies</h1>
      <!-- Container pour la galerie -->
      <div class="gallery">
        <div v-for="voie in voies" :key="voie.slug" class="gallery-item">
          <router-link :to="'/voies/' + voie.slug">{{ voie.name }}</router-link>
          <p>{{ voie.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { voies } from '../data/voies.js';
  
  export default {
    data() {
      return {
        voies,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Container de la galerie */
  .gallery {
    display: grid; /* Utilise Grid pour la disposition */
    grid-template-columns: repeat(4, 1fr); /* 4 colonnes de largeur égale */
    gap: 20px; /* Espace entre les éléments */
    padding: 20px; /* Ajoute un peu d'espace autour de la galerie */
  
    /* Assure que la galerie est centrée sur la page */
    max-width: 3000px; /* Limite la largeur max de la galerie */
    margin: 0 auto; /* Centrage horizontal */
    width: 122%; /* Utilise 100% de l'espace disponible pour l'élément parent */
    box-sizing: border-box; /* Inclut les paddings et marges dans la largeur totale */
  }
  
  /* Chaque élément de la galerie */
  .gallery-item {
    background-color: #f0f0f0;
    padding: 8px; /* Réduit le padding pour une taille plus compacte */
    border-radius: 8px; /* Réduit le rayon des coins */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre plus légère */
    text-align: center;
    height: 85px; /* Réduit la hauteur des boîtes */
    overflow: hidden; /* Cache le contenu qui dépasse si nécessaire */
  }
  
  /* Lien */
  .gallery-item a {
    text-decoration: none;
    font-size: 1rem; /* Réduit la taille du texte */
    color: #2c6578;
  }
  
  .gallery-item a:hover {
    color: #c8aa6e;
  }
  
  /* Responsivité : 1 élément par ligne sur petits écrans */
  @media (max-width: 768px) {
    .gallery {
      grid-template-columns: 1fr; /* Affiche 1 élément par ligne */
    }
  }
  </style>
  