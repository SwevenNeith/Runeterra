<template>
  <div class="map-page">
    <!-- Conteneur principal pour Map.vue -->
    <div class="image-container">
      <!-- Image de fond -->
      <img src="../assets/Map.PNG" alt="Image de fond" />

      <!-- Zones cliquables positionnées sur l'image -->
      <div
        class="clickable-area"
        @click="goToPage('/demacia')"
        style="top: 20%; left: 25%; width: 10%; height: 10%;"
      ></div>
      <div
        class="clickable-area"
        @click="goToPage('/noxus')"
        style="top: 30%; left: 55%; width: 15%; height: 15%; border-radius: 50%;"
      ></div>
      <div
        class="clickable-area"
        @click="goToPage('/bilgewater')"
        style="
          top: 60%;
          left: 70%;
          width: 20%;
          height: 20%;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapPage",
  methods: {
    // Fonction pour rediriger vers une autre page
    goToPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.image-container {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Image de fond */
.image-container img {
  display: block;
  width: 100%;
  height: 110%;
  object-fit: cover;
}

/* Zones cliquables */
.clickable-area {
  position: absolute;
  background-color: rgba(255, 0, 0, 0.3); /* Couleur visible pour le test */
  cursor: pointer;
  z-index: 2; /* S'assure que les zones sont au-dessus de l'image */
}

.clickable-area:hover {
  background-color: rgba(255, 0, 0, 0.5); /* Effet visuel au survol */
}
</style>
