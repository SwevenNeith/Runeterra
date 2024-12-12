<template>
  <div>
    <div class="classe-header">
      <!-- Bloc texte -->
      <div class="classe-text">
        <h1>{{ classe.name }}</h1>
        <p>{{ classe.description }}</p>
        <ul class="caracteristique">
          <li
            v-for="caracteristique in classe.caracteristiques"
            :key="caracteristique"
          >
            <p>{{ caracteristique }}</p>
          </li>
        </ul>
      </div>

      <!-- Conteneur Image -->
      <div class="classe-image-container">
        <div class="classe-image">
          <img :src="classe.image" :alt="classe.name" />
        </div>
      </div>
    </div>

    <!-- Liste des voies en accordéon -->
    <ul class="voies-list">
      <li v-for="voie in voies" :key="voie.slug" class="voie-item">
        <div @click="toggleVoie(voie.slug)" class="voie-header">
          <h3>{{ voie.name }}</h3>
          <span class="toggle-indicator">{{
            isVoieOpen(voie.slug) ? '▲' : '▼'
          }}</span>
        </div>
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
                  <span class="toggle-indicator">{{
                    isCompetenceOpen(competence.slug) ? '▲' : '▼'
                  }}</span>
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
                      <span v-if="competence.level"
                        ><strong>Niveau :</strong> {{ competence.level }}</span
                      >
                      <span v-if="competence.effet1"
                        ><strong>1 :</strong> {{ competence.effet1 }}</span
                      >
                      <span v-if="competence.effet2"
                        ><strong>2 :</strong> {{ competence.effet2 }}</span
                      >
                      <span v-if="competence.effet3"
                        ><strong>3 :</strong> {{ competence.effet3 }}</span
                      >
                      <span v-if="competence.damage"
                        ><strong>Dégâts :</strong> {{ competence.damage }}</span
                      >
                      <span v-if="competence.alliés"
                        ><strong>Alliés :</strong> {{ competence.alliés }}</span
                      >
                      <span v-if="competence.ennemis"
                        ><strong>Ennemis :</strong>
                        {{ competence.ennemis }}</span
                      >
                      <span v-if="competence.support"
                        ><strong>Jet de Sauvegarde :</strong>
                        {{ competence.sauvegarde }}</span
                      >
                      <span v-if="competence.range"
                        ><strong>Portée :</strong> {{ competence.range }}</span
                      >
                      <span v-if="competence.duration"
                        ><strong>Durée :</strong>
                        {{ competence.duration }}</span
                      >
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
    toggleVoie(voieSlug) {
      if (this.openVoies.includes(voieSlug)) {
        this.openVoies = this.openVoies.filter((slug) => slug !== voieSlug);
      } else {
        this.openVoies.push(voieSlug);
      }
    },
    isVoieOpen(voieSlug) {
      return this.openVoies.includes(voieSlug);
    },
    getCompetencesByVoie(voieSlug) {
      return this.competences.filter(
        (competence) => competence.voie === voieSlug
      );
    },
    toggleCompetence(competenceSlug) {
      if (this.openCompetences.includes(competenceSlug)) {
        this.openCompetences = this.openCompetences.filter(
          (slug) => slug !== competenceSlug
        );
      } else {
        this.openCompetences.push(competenceSlug);
      }
    },
    isCompetenceOpen(competenceSlug) {
      return this.openCompetences.includes(competenceSlug);
    },
  },
};
</script>

<style scoped>
/* Conteneur principal de l'en-tête contenant le texte et l'image */
.classe-header {
  display: flex; /* Affiche les éléments en ligne côte à côte */
  flex-direction: row; /* Aligne les éléments horizontalement */
  gap: 5px; /* Espacement entre l'image et le texte (ajustable en px) */
  margin-bottom: 20px; /* Marge sous le conteneur principal, ajustable en px */
}

/* Bloc texte, ajustez la largeur */
.classe-text {
  flex: 1 1 50%; /* Prend 50% de l'espace disponible */
  padding: 20px; /* Espacement interne de 20px */
}

/* Conteneur de l'image */
.classe-image-container {
  flex: 1 1 20%; /* Prend 20% de l'espace disponible */
  max-width: 100%; /* L'image ne dépasse pas de son conteneur */
  height: auto; /* Hauteur ajustée automatiquement */
  position: relative; /* Nécessaire si vous voulez des effets de position */
}

/* Style de l'image */
.classe-image {
  width: 100%; /* L'image prend toute la largeur du conteneur */
  height: auto; /* La hauteur de l'image est ajustée proportionnellement */
}

/* L'image elle-même avec un objet-fit pour garder les proportions */
.classe-image img {
  width: 100%;
  height: auto;
  object-fit: contain; /* Maintient les proportions de l'image sans la déformer */
  border-radius: 10px; /* Bords arrondis de l'image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre douce autour de l'image */
}

/* Taille du titre */
h1 {
  font-size: 40px; /* Taille fixe en px */
  color: #333; /* Couleur du texte, ajustable */
}

/* Style pour les éléments de liste des caractéristiques */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f3f3f3; /* Couleur de fond des items de la liste */
  padding: 10px; /* Espacement interne des éléments */
  margin-bottom: 15px; /* Espacement entre les éléments de la liste */
  border-radius: 8px;
}

/* Liste des caractéristiques */
.caracteristique {
  font-weight: 500;
  display: flex;
  gap: 30px; /* Espacement entre chaque élément, ajustable en px */
  flex-wrap: wrap; /* Permet aux éléments de se répartir sur plusieurs lignes si nécessaire */
}

.caracteristique li {
  list-style: none;
  padding: 10px;
}

/* Liste des voies */
.voies-list {
  list-style: none;
  padding: 0;
}

.voie-item {
  margin-bottom: 10px; /* Marge sous chaque voie */
  border: 1px solid #ccc; /* Bordure des éléments de voie */
  border-radius: 8px;
}

.voie-header {
  display: flex;
  justify-content: space-between; /* Aligne le titre à gauche et l'icône à droite */
  align-items: center;
  background-color: #f5f5f5; /* Couleur de fond de l'en-tête de la voie */
  padding: 5px; /* Espacement interne */
  cursor: pointer; /* Curseur de main pour rendre cliquable */
}

.voie-header h3 {
  margin: 0;
  font-size: 20px; /* Taille de police fixe en px */
}

.voie-content {
  padding: 5px; /* Espacement interne du contenu */
}

/* Liste des compétences */
.competences-list {
  list-style: none;
  padding-left: 0;
}

.competence-item {
  margin-bottom: 10px; /* Espacement entre les éléments de compétence */
  padding: 5px; /* Espacement interne des éléments de compétence */
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0; /* Bordure autour des compétences */
}

/* Header de chaque compétence */
.competence-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 5px; /* Espacement interne du header */
  border-radius: 4px;
}

.competence-header h3 {
  margin: 0;
  font-size: 18px; /* Taille de police fixe en px */
}

/* Contenu de la compétence */
.competence-content {
  padding: 5px; /* Espacement interne du contenu */
}

/* Détails supplémentaires de la compétence */
.competence-details {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Espacement entre les détails de compétence */
  margin-top: 20px; /* Marge au-dessus des détails */
}

.competence-details span {
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 15px; /* Taille de police fixe en px */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); /* Ombre douce autour des détails */
}
</style>
