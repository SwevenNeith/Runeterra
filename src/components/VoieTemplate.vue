<template>
    <div class="voie-template">
      <h1>{{ voie.name }}</h1>
      <p>{{ voie.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['voie'], // La voie sera passée en prop.
  };
  </script>
  
  <style scoped>
  .voie-template {
    /* Styles spécifiques ici */
  }
  </style>
  