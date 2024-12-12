<template>
  <div>
    <!-- Breadcrumb pour navigation -->
    <Breadcrumb :trail="breadcrumbTrail" />

    <!-- Affiche les détails de la voie -->
    <VoieTemplate
      v-if="voie"
      :voie="voie"
      :competences="competencesAssociees"
    />
    <!-- Message si aucune voie n'est trouvée -->
    <p v-else>Voie non trouvée.</p>
  </div>
</template>

<script>
import { voies } from '../data/voies.js'; // Import des données des voies
import { competences } from '../data/competences.js'; // Import des compétences
import VoieTemplate from '../components/VoieTemplate.vue'; // Import du composant
import Breadcrumb from '../components/Breadcrumb.vue'; // Import du breadcrumb

export default {
  components: {
    VoieTemplate,
    Breadcrumb,
  },
  data() {
    return {
      voie: null, // Stocke les données de la voie courante
      competencesAssociees: [], // Stocke les compétences de la voie
    };
  },
  computed: {
    // Génère le trail pour le breadcrumb
    breadcrumbTrail() {
      if (this.voie) {
        return [
          { label: 'Voies', to: '/voies' },
          { label: this.voie.name, to: null }, // Page actuelle (sans lien)
        ];
      }
      return [{ label: 'Voies', to: '/voies' }]; // Cas où la voie n'est pas trouvée
    },
  },
  mounted() {
    // Récupère la voie en fonction du slug dans l'URL
    this.voie = voies.find((v) => v.slug === this.$route.params.slug);

    if (this.voie) {
      // Récupère les compétences associées à cette voie
      this.competencesAssociees = competences.filter(
        (competence) => competence.voie === this.voie.slug
      );
    }
  },
};
</script>

<style scoped>
/* Ajuste le conteneur pour qu'il prenne toute la largeur et la hauteur */
.voie-details {
  width: 100vw; /* Utilise toute la largeur de la fenêtre */
  min-height: 100vh; /* Assure qu'il occupe toute la hauteur de l'écran */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px; /* Ajoute du padding pour la marge interne */
  margin: 0;
  background-color: #f9f9f9; /* Fond uniforme */
  box-sizing: border-box; /* Evite les débordements */
}

/* Enlever toute marge et padding par défaut du body */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Empêche le défilement horizontal */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  background-color: #f3f3f3;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
