// data/classes.js
export const classes = [
    {
      slug: 'arcaniste',
      name: 'Arcaniste',
      description:
        'Un expert des arts magiques, capable de manipuler les arcanes pour créer des effets destructeurs ou défensifs. Axé sur le contrôle de la magie, il excelle dans les sorts a longue portée, les contrôles de zone et les buffs stratégiques.',
      caracteristiques: ['INTELLIGENCE'],
      voies: [
        'catalyseur-d-ether',
        'géomancien-élémentaire',
        'graveur-de-runes',
        'maitre-des-arcanes',
        'maitre-des-reflets',
      ], // Liste des slugs des voies associées à la classe
    },
    {
      slug: 'mercenaire',
      name: 'Mercenaire',
      description:
        'Un combattant brutal et sans pitié. Habitué aux guerres et aux batailles sanglantes, il est une force de destruction.',
      caracteristiques: ['FORCE', 'CONSTITUTION'],
      voies: ['voie-sagesse'], // Liste des slugs des voies associées à la classe
    },
    {
      slug: 'scientifique',
      name: 'Scientifique',
      description:
        'Un expert des concoctions magiques et chimique. Polyvalent et utilitaire, il peut infliger des dégâts, soigner ou fournir des buffs à ses alliés, avec ses créations.',
      caracteristiques: ['INTELLIGENCE', 'SAGESSE'],
      voies: [
        'biologiste-mutagène',
        'chimiste-toxique',
        'inventeur-chimiste',
        'physicien-énergétique',
        'transmutateur-visionnaire',
      ], // Liste des slugs des voies associées à la classe
    },
    {
      slug: 'traqueur',
      name: 'Traqueur',
      description:
        "Un combattant discret et agile, habitué à survivre dans la nature. Spécialiste de la furtivité et de l'adaption, il excelle dans les embuscades, la reconnaissance et les attaques à distance.",
      caracteristiques: ['DEXTERITE', 'SAGESSE'],
      voies: ['voie-sagesse'], // Liste des slugs des voies associées à la classe
    },
    // Ajouter d'autres classes selon besoin
  ];
  