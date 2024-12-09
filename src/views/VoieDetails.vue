<template>
    <div>
      <!-- Affiche les détails de la voie -->
      <VoieTemplate v-if="voie" :voie="voie" />
      <!-- Message si aucune voie n'est trouvée -->
      <p v-else>Voie non trouvée.</p>
    </div>
  </template>
  
  <script>
  import { voies } from '../data/voies.js'; // Import des données des voies
  import VoieTemplate from '../components/VoieTemplate.vue'; // Import du component
  
  export default {
    components: {
      VoieTemplate,
    },
    data() {
      return {
        voie: null, // Stocke les données de la voie courante
      };
    },
    mounted() {
      // Récupère la voie en fonction du slug dans l'URL
      this.voie = voies.find((v) => v.slug === this.$route.params.slug);
    },
  };
  </script>
  