<template>
    <div>
      <h1>Liste des classes</h1>
      <ul>
        <li v-for="classe in classes" :key="classe.slug">
          <router-link :to="'/classe/' + classe.slug">{{
            classe.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { classes } from '../data/classes.js';
  
  export default {
    data() {
      return {
        classes,
      };
    },
  };
  </script>
  