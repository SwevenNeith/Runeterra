<template>
    <div v-if="voie">
      <h1>{{ voie.name }}</h1>
      <p>{{ voie.description }}</p>
    </div>
    <div v-else>
      <p>Voie non trouvée.</p>
    </div>
  </template>
  
  <script>
  import { voies } from '../data/voies.js';
  
  export default {
    props: ['slug'],
    data() {
      return {
        voie: null,
      };
    },
    mounted() {
      this.voie = voies.find((v) => v.slug === this.$route.params.slug);
    },
  };
  </script>