<template>
  <div>
    <h1>{{ classe.name }}</h1>
    <p>{{ classe.description }}</p>

    <!-- Affichage des voies associées -->
    <h2>Voies de cette classe :</h2>
    <ul>
      <li v-for="voie in voies" :key="voie.slug">
        <h3>{{ voie.name }}</h3>
        <p>{{ voie.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    classe: Object, // Classe spécifique
    voies: Array, // Liste des voies associées à cette classe
  },
};
</script>

<style scoped>
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
