<template>
    <nav aria-label="breadcrumb" class="breadcrumb">
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
          <span v-if="trail.length > 0" class="separator">&gt;</span>
        </li>
        <li v-for="(item, index) in trail" :key="index">
          <router-link v-if="item.to" :to="item.to">{{ item.label }}</router-link>
          <span v-else>{{ item.label }}</span>
          <!-- N'ajouter ">" que si ce n'est pas le dernier élément -->
          <span v-if="index < trail.length - 1" class="separator">&gt;</span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      trail: {
        type: Array,
        required: true,
        default: () => [], // Tableau des étapes du breadcrumb
      },
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb {
    padding: 10px 0;
    font-size: 0.9rem;
    color: #555;
  }
  
  .breadcrumb ul {
    list-style: none;
    display: flex;
    gap: 5px;
    padding: 0;
    margin: 0;
    align-items: center;
  }
  
  .breadcrumb li {
    display: flex;
    align-items: center;
  }
  
  .breadcrumb a {
    text-decoration: none;
    color: #2c6578;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  .breadcrumb span {
    color: #555;
  }
  
  .breadcrumb .separator {
    margin: 0 5px; /* Légère marge autour du '>' */
  }
  </style>
  