<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view /><!-- Affichage des vues en fonction des routes -->
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'; // Import du composant Header

export default {
  components: {
    Header,
  },
};
</script>

<style>
main {
  margin-top: 60px;
  padding: 20px;
  box-sizing: border-box; /* S'assurer que le padding et margin sont bien gérés */
}
</style>
