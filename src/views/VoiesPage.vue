<template>
    <div>
      <h1>Liste des voies</h1>
      <ul>
        <li v-for="voie in voies" :key="voie.slug">
          <router-link :to="'/voies/' + voie.slug">{{ voie.name }}</router-link>
        </li>
      </ul>
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
  