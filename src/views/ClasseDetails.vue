<template>
    <div v-if="classe">
      <h1>{{ classe.title }}</h1>
      <p>{{ classe.description }}</p>
      <h2>Voies associées :</h2>
      <ul>
        <li v-for="voie in classe.voies" :key="voie.slug">
          <strong>{{ voie.name }}</strong
          >: {{ voie.description }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Classe non trouvée.</p>
    </div>
  </template>
  
  <script>
  import { getClassWithVoies } from '../data/classes.js';
  
  export default {
    props: ['slug'],
    data() {
      return {
        classe: null,
      };
    },
    mounted() {
      this.classe = getClassWithVoies(this.$route.params.slug);
    },
  };
  </script>
  