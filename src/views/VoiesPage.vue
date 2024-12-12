<template>
  <div>
    <!-- Breadcrumb pour navigation -->
    <Breadcrumb :trail="breadcrumbTrail" />

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
import Breadcrumb from '../components/Breadcrumb.vue'; // Import du composant breadcrumb

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      voies, // Liste des voies
    };
  },
  computed: {
    // Trail pour le breadcrumb
    breadcrumbTrail() {
      return [
        { label: 'Voies', to: null }, // Page actuelle (pas de lien)
      ];
    },
  },
};
</script>

<style scoped>
/* Container de la galerie */
.gallery {
  display: grid; /* Utilise Grid pour la disposition */
  grid-template-columns: repeat(4, 1fr); /* 4 colonnes de largeur égale */
  gap: 1%; /* Espace entre les éléments */
  padding: 1%; /* Ajoute un peu d'espace autour de la galerie */

  /* Assure que la galerie est centrée sur la page */
  max-width: 100%; /* Limite la largeur max de la galerie */
  margin: 0 auto; /* Centrage horizontal */
  width: 100%; /* Utilise 100% de l'espace disponible pour l'élément parent */
  box-sizing: border-box; /* Inclut les paddings et marges dans la largeur totale */
}

/* Chaque élément de la galerie */
.gallery-item {
  background-color: #f0f0f0;
  padding: 1%; /* Réduit le padding pour une taille plus compacte */
  border-radius: 8px; /* Réduit le rayon des coins */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre plus légère */
  height: 50%; /* Augmente la hauteur des boîtes pour plus d'espace */
  overflow: hidden; /* Cache le contenu qui dépasse si nécessaire */
  display: flex; /* Utilisation de Flexbox pour l'alignement */
  flex-direction: column; /* Aligne les éléments en colonne */
  padding: 8%; /* Ajoute un peu de padding pour aérer */
}

/* Lien */
.gallery-item a {
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem; /* Taille du texte plus grande */
  color: #2c6578;
  margin-bottom: 8px; /* Espace entre le lien et la description */
}

.gallery-item a:hover {
  color: #c8aa6e;
}

/* Description */
.gallery-item p {
  text-align: justify; /* Aligne la description à gauche */
  font-size: 0.9rem; /* Réduit la taille du texte pour la description */
  margin: 0; /* Retirer les marges autour de la description */
  color: #555; /* Légère variation de couleur pour la description */
}

/* Responsivité : 1 élément par ligne sur petits écrans */
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr; /* Affiche 1 élément par ligne */
  }
}
</style>
