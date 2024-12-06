<!-- ClasseDetails.vue -->
<template>
    <div>
      <h3>{{ classData.title }}</h3>
      <p>{{ classData.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      // Cette méthode récupère le slug de l'URL
      slug() {
        console.log(this.$route.params.slug); // Vérifier le slug dans la console
        return this.$route.params.slug; // Retourner le slug récupéré dans l'URL
      },
      // Cette méthode retourne les données de la classe selon le slug
      classData() {
        const classes = {
          'ma-classe': {
            title: 'Ma classe',
            description: 'Description de ma classe.',
          },
          'classe-avancee': {
            title: 'Classe avancée',
            description: 'Description de la classe avancée.',
          },
          'classe-debutante': {
            title: 'Classe débutante',
            description: 'Description pour les débutants.',
          },
        };
        // Si le slug ne correspond à aucune classe, retourne une classe par défaut
        return (
          classes[this.slug] || {
            title: 'Classe non trouvée',
            description: 'Aucune description disponible.',
          }
        );
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tu peux ajouter des styles ici pour la page de la classe */
  </style>
  