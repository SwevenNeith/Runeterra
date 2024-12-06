<template>
  <div>
    <!-- Affichage de la classe -->
    <ClasseTemplate v-if="classe" :classe="classe" :voies="voiesAssociees" />
    <p v-else>Classe non trouvée.</p>
  </div>
</template>

<script>
// Importation des données depuis les fichiers
import { classes } from '../data/classes.js';
import { voies } from '../data/voies.js';
import ClasseTemplate from '../components/ClasseTemplate.vue'; // Import du composant ClasseTemplate

export default {
  components: {
    ClasseTemplate,
  },
  data() {
    return {
      classe: null, // Classe associée au slug
      voiesAssociees: [], // Voies spécifiques à cette classe
    };
  },
  mounted() {
    const slug = this.$route.params.slug; // Récupérer le slug depuis l'URL
    this.classe = classes.find((c) => c.slug === slug); // Chercher la classe par son slug

    if (this.classe) {
      // Récupérer les voies associées par leur slug
      this.voiesAssociees = voies.filter((voie) =>
        this.classe.voies.includes(voie.slug)
      );

      // Vérification du contenu de `voiesAssociees`
      console.log('Voies associées à la classe :', this.voiesAssociees);
    }
  },
};
</script>

<style scoped>
/* Styles pour la page de détails d'une classe */
h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

p {
  font-size: 1.1em;
}
</style>
