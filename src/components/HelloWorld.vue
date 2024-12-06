<script>
export default {
  props: {
    classe: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    voie: {
      type: Array,
      required: false, // Rend cette prop facultative
      default: () => [], // Valeur par défaut : tableau vide
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ classe }}</h1>
    <p>{{ content }}</p>
    <ul>
      <li v-for="(compétence, index) in voie" :key="index">
        {{ compétence }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
