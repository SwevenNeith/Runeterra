<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb :trail="breadcrumbTrail" />

    <!-- Contenu de la classe -->
    <ClasseTemplate
      v-if="classe"
      :classe="classe"
      :voies="voiesAssociees"
      :competences="competencesAssociees"
    />
    <p v-else>Classe non trouvée.</p>
  </div>
</template>

<script>
import { classes } from '../data/classes.js';
import { voies } from '../data/voies.js';
import { competences } from '../data/competences.js';
import Breadcrumb from '../components/Breadcrumb.vue';
import ClasseTemplate from '../components/ClasseTemplate.vue';

export default {
  components: {
    Breadcrumb,
    ClasseTemplate,
  },
  data() {
    return {
      classe: null,
      voiesAssociees: [],
      competencesAssociees: [],
      breadcrumbTrail: [], // Tableau des étapes du breadcrumb
    };
  },
  mounted() {
    const slug = this.$route.params.slug;
    this.classe = classes.find((c) => c.slug === slug);

    if (this.classe) {
      this.voiesAssociees = voies.filter((voie) =>
        this.classe.voies.includes(voie.slug)
      );

      this.competencesAssociees = competences.filter((competence) =>
        this.voiesAssociees.some((voie) => voie.slug === competence.voie)
      );

      // Mise à jour du breadcrumb
      this.breadcrumbTrail = [
        { label: 'Classes', to: '/classe' }, // Lien vers la liste des classes
        { label: this.classe.name, to: null }, // Classe actuelle
      ];
    }
  },
};
</script>
