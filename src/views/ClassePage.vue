<!-- ClassePage.vue (Composant parent) -->
<template>
    <div>
        <h1>Liste des classes</h1>
        <ul>
        <li v-for="(classe, index) in classes" :key="index">
            <!-- Lien vers les pages spécifiques de chaque classe -->
            <router-link :to="'/classe/' + classe.slug">{{ classe.name }}</router-link>
        </li>
        </ul>
    
        <!-- Le composant enfant (ClasseDetails) sera rendu ici selon le slug -->
        <router-view />
    </div>
    </template>
    
    <script>
    export default {
    data() {
        return {
        // Exemple de classes avec des slugs uniques
        classes: [
            { name: 'Ma classe', slug: 'ma-classe' },
            { name: 'Classe avancée', slug: 'classe-avancee' },
            { name: 'Classe débutante', slug: 'classe-debutante' },
        ],
        };
    },
    };
    </script>