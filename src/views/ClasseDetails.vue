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
  .classe-details {
    background-color: #f4f4f9;
    padding: 20px;
    border-radius: 8px;
    max-width: 1200px;
    margin: 20px auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 2rem;
    color: #444;
    margin-top: 30px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #222;
    font-size: 1.6rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
  }
  
  button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  