import { voies } from './voies.js';

export const classes = [
  {
    slug: 'ma-classe',
    title: 'Ma classe',
    description: 'Description de ma classe.',
    voies: ['voie-force', 'voie-agilite'], // Slugs des voies associées
  },
  {
    slug: 'classe-avancee',
    title: 'Classe avancée',
    description: 'Description de la classe avancée.',
    voies: ['voie-sagesse', 'voie-mystique'],
  },
  {
    slug: 'classe-debutante',
    title: 'Classe débutante',
    description: 'Description pour les débutants.',
    voies: ['voie-initiation'],
  },
];

// Fonction pour obtenir les données complètes d'une classe avec ses voies
export function getClassWithVoies(slug) {
  const classe = classes.find((c) => c.slug === slug);
  if (!classe) return null;

  const voiesDetails = classe.voies.map((slug) =>
    voies.find((voie) => voie.slug === slug)
  );

  return { ...classe, voies: voiesDetails };
}
