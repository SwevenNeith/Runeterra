<template>
  <div class="competences-container">
    <h2>Compétences</h2>
    <div v-if="filteredCompetences.length > 0" class="competences-list">
      <div
        v-for="competence in filteredCompetences"
        :key="competence.slug"
        class="competence-item"
      >
        <h3>{{ competence.name }}</h3>
        <p>{{ competence.description }}</p>
        <ul>
          <li><strong>Niveau :</strong> {{ competence.level }}</li>
          <li><strong>1 :</strong> {{ competence.effet1 }}</li>
          <li><strong>2 :</strong> {{ competence.effet2 }}</li>
          <li><strong>3 :</strong> {{ competence.effet3 }}</li>
          <li><strong>Dégâts :</strong> {{ competence.damage }}</li>
          <li><strong>Alliés :</strong> {{ competence.alliés }}</li>
          <li><strong>Ennemis :</strong> {{ competence.ennemis }}</li>
          <li>
            <strong>Jet de Sauvegarde :</strong> {{ competence.sauvegarde }}
          </li>
          <li><strong>Portée :</strong> {{ competence.range }}</li>
          <li><strong>Durée :</strong> {{ competence.duration }}</li>
        </ul>
      </div>
    </div>
    <p v-else>Aucune compétence trouvée.</p>
  </div>
</template>

<script>
import { competences } from '../data/competences.js';

export default {
  props: {
    associatedVoie: String, // Slug de la voie spécifique
    associatedVoies: Array, // Tableau des slugs pour plusieurs voies (optionnel)
  },
  computed: {
    filteredCompetences() {
      if (this.associatedVoie) {
        return competences.filter(
          (c) => c.associatedVoie === this.associatedVoie
        );
      }
      if (this.associatedVoies) {
        return competences.filter((c) =>
          this.associatedVoies.includes(c.associatedVoie)
        );
      }
      return [];
    },
  },
};
</script>

<style scoped>
.competences-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.competences-list {
  background-color: #f0f0f0;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.competence-item {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2c6578;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
</style>
