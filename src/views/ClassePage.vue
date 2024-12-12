<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb :trail="breadcrumbTrail" />

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
