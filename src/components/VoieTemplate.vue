<template>
  <div class="voie-container">
    <!-- Affiche le nom et la description de la voie -->
    <h1>{{ voie.name }}</h1>
    <p>{{ voie.description }}</p>

    <!-- Affiche les compétences associées -->
    <div v-if="competences.length" class="competences-section">
      <h2>Compétences</h2>
      <ul>
        <li v-for="competence in competences" :key="competence.slug">
          <h3>{{ competence.name }}</h3>
          <p v-if="competence.description">
            <strong>Description :</strong> {{ competence.description }}
          </p>
          <!-- Regroupement des caractéristiques de la compétence -->
          <div class="competence-details">
            <span v-if="competence.level">
              <strong>Niveau :</strong> {{ competence.level }}
            </span>
            <span v-if="competence.effet1">
              <strong>1 :</strong> {{ competence.effet1 }}
            </span>
            <span v-if="competence.effet2">
              <strong>2 :</strong> {{ competence.effet2 }}
            </span>
            <span v-if="competence.effet3">
              <strong>3 :</strong> {{ competence.effet3 }}
            </span>
            <span v-if="competence.damage">
              <strong>Dégâts :</strong> {{ competence.damage }}
            </span>
            <span v-if="competence.alliés">
              <strong>Alliés :</strong> {{ competence.alliés }}
            </span>
            <span v-if="competence.ennemis">
              <strong>Ennemis :</strong> {{ competence.ennemis }}
            </span>
            <span v-if="competence.support">
              <strong>Jet de Sauvegarde :</strong> {{ competence.sauvegarde }}
            </span>
            <span v-if="competence.range">
              <strong>Portée :</strong> {{ competence.range }}
            </span>
            <span v-if="competence.duration">
              <strong>Durée :</strong> {{ competence.duration }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    voie: Object, // Reçoit les données de la voie comme prop
    competences: Array, // Reçoit les compétences associées comme prop
  },
};
</script>

<style scoped>
/* Conteneur principal pour une voie */
.voie-container {
  width: 96vw; /* Occupe presque toute la largeur de l'écran */
  max-width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Section des compétences */
.competences-section {
  margin-top: 5px;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #f3f3f3;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-sizing: border-box;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.2rem;
  color: #555;
}

strong {
  font-weight: bold;
}

/* Regroupement des caractéristiques de la compétence dans une seule boîte */
.competence-details {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.competence-details span {
  background-color: #f9f9f9;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 100%) {
  .voie-container {
    padding: 15px;
  }

  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  li {
    padding: 10px;
  }
}
</style>
