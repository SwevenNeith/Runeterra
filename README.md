# Runeterra
Website for the RPG I created around the world of Runeterra (League of Legends)

Se référer au projet TGVue : https://github.com/Turdyo/TGVue/tree/main

## Démarrage du projet :
    Télécharger Node.js : https://nodejs.org/fr
    
    Installer des router : npm install vue-router@next
    
## Utilisation de props pour mes différentes classes : 
### Création de Routeur dynamique (ex : Classes): 
    // router.js ou index.js de Vue Router
    import { createRouter, createWebHistory } from 'vue-router';
    import ClassePage from './components/ClassePage.vue';  // Le parent
    import ClasseDetails from './components/ClasseDetails.vue';  // L'enfant qui affiche les détails de chaque classe

    const routes = [
    {
        path: '/classe',
        component: ClassePage,
        children: [
        {
            path: ':slug',  // Route dynamique avec un paramètre `slug` pour la classe spécifique
            component: ClasseDetails,
            name: 'ClasseDetails',  // Nom de la route pour la page des détails
        },
        ],
    },
    ];

    const router = createRouter({
    history: createWebHistory(),
    routes,
    });

    export default router;

### Affichage de la liste de classes :
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

### Affichage d'une classe en particulier : 
    <!-- ClasseDetails.vue (Composant enfant) -->
    <template>
    <div>
        <h2>{{ classData.title }}</h2>
        <p>{{ classData.description }}</p>
    </div>
    </template>

    <script>
    export default {
    computed: {
        slug() {
        return this.$route.params.slug;  // Récupérer le slug depuis l'URL
        },
        classData() {
        const classes = {
            'ma-classe': { title: 'Ma classe', description: 'Description de ma classe.' },
            'classe-avancee': { title: 'Classe avancée', description: 'Description de la classe avancée.' },
            'classe-debutante': { title: 'Classe débutante', description: 'Description pour les débutants.' },
        };
        return classes[this.slug] || { title: 'Classe non trouvée', description: 'Aucune description disponible.' };
        },
    },
    };
    </script>