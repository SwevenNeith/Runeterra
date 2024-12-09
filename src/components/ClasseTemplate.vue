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
        <!-- Afficher chaque caractéristique -->
        </li>
    </ul>

    <!-- Affichage des voies associées -->
    <ul>
        <li v-for="voie in voies" :key="voie.slug">
        <h3>{{ voie.name }}</h3>
        <p>{{ voie.description }}</p>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    props: {
    classe: Object, // Classe spécifique
    voies: Array, // Liste des voies associées à cette classe
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

h2 {
    font-size: 2rem;
    color: #444;
    margin-top: 30px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #f0f0f0;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

h3 {
    font-size: 1.8rem;
    color: #333;
}

p {
    font-size: 1.1rem;
    color: #555;
}
</style>
