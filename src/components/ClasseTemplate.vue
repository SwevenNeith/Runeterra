<template>
  <div>
    <h1>{{ classe.name }}</h1>
    <p>{{ classe.description }}</p>

    <!-- Affichage des caractéristiques -->
    <ul class="caracteristique">
      <li
        v-for="caracteristique in classe.caracteristiques"
        :key="caracteristique"
      >
        <p>{{ caracteristique }}</p>
      </li>
    </ul>

    <!-- Liste des voies en accordéon -->
    <ul class="voies-list">
      <li v-for="voie in voies" :key="voie.slug" class="voie-item">
        <!-- Titre de la voie cliquable -->
        <div @click="toggleVoie(voie.slug)" class="voie-header">
          <h3>{{ voie.name }}</h3>
          <span class="toggle-indicator">
            {{ isVoieOpen(voie.slug) ? '▲' : '▼' }}
          </span>
        </div>
        <!-- Description et compétences -->
        <transition name="fade">
          <div v-if="isVoieOpen(voie.slug)" class="voie-content">
            <p>{{ voie.description }}</p>
            <h4>Compétences :</h4>
            <ul class="competences-list">
              <li
                v-for="competence in getCompetencesByVoie(voie.slug)"
                :key="competence.slug"
                class="competence-item"
              >
                <div
                  @click="toggleCompetence(competence.slug)"
                  class="competence-header"
                >
                  <h3>{{ competence.name }}</h3>
                  <span class="toggle-indicator">
                    {{ isCompetenceOpen(competence.slug) ? '▲' : '▼' }}
                  </span>
                </div>
                <transition name="fade">
                  <div
                    v-if="isCompetenceOpen(competence.slug)"
                    class="competence-content"
                  >
                    <p v-if="competence.description">
                      <strong>Description :</strong>
                      {{ competence.description }}
                    </p>
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
                        <strong>Jet de Sauvegarde :</strong>
                        {{ competence.sauvegarde }}
                      </span>
                      <span v-if="competence.range">
                        <strong>Portée :</strong> {{ competence.range }}
                      </span>
                      <span v-if="competence.duration">
                        <strong>Durée :</strong> {{ competence.duration }}
                      </span>
                    </div>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    classe: Object,
    voies: Array,
    competences: Array,
  },
  data() {
    return {
      openVoies: [], // Liste des slugs des voies ouvertes
      openCompetences: [], // Liste des slugs des compétences ouvertes
    };
  },
  methods: {
    // Basculer la visibilité d'une voie
    toggleVoie(voieSlug) {
      if (this.openVoies.includes(voieSlug)) {
        this.openVoies = this.openVoies.filter((slug) => slug !== voieSlug);
      } else {
        this.openVoies.push(voieSlug);
      }
    },
    // Vérifie si une voie est ouverte
    isVoieOpen(voieSlug) {
      return this.openVoies.includes(voieSlug);
    },
    // Récupérer les compétences associées à une voie
    getCompetencesByVoie(voieSlug) {
      return this.competences.filter(
        (competence) => competence.voie === voieSlug
      );
    },
    // Basculer la visibilité d'une compétence
    toggleCompetence(competenceSlug) {
      if (this.openCompetences.includes(competenceSlug)) {
        this.openCompetences = this.openCompetences.filter(
          (slug) => slug !== competenceSlug
        );
      } else {
        this.openCompetences.push(competenceSlug);
      }
    },
    // Vérifie si une compétence est ouverte
    isCompetenceOpen(competenceSlug) {
      return this.openCompetences.includes(competenceSlug);
    },
  },
};
</script>

<style scoped>
.classe-template {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f3f3f3;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.caracteristique {
  font-weight: 500;
  display: flex; /* Applique flexbox pour disposer les éléments sur une ligne */
  gap: 20px; /* Espace entre chaque élément */
}

.caracteristique li {
  list-style: none; /* Retirer les puces de la liste */
  padding: 10px; /* Ajouter de l'espace autour des éléments */
}

.voies-list {
  list-style: none;
  padding: 0;
}

.voie-item {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.voie-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
}

.voie-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.voie-content {
  padding: 10px;
}

.competences-list {
  list-style: none;
  padding-left: 0;
}

.competence-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.competence-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
}

.competence-header h3 {
  margin: 0;
  font-size: 1rem;
}

.competence-content {
  padding: 10px;
}

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
</style>
