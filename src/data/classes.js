// data/classes.js
import ArcanisteImage from '../assets/classes/Arcaniste.png';
export const classes = [
  {
    slug: '',
    name: '',
    description: '',
    caracteristiques: [''],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'arcaniste',
    name: 'Arcaniste',
    description:
      'Un expert des arts magiques, capable de manipuler les arcanes pour créer des effets destructeurs ou défensifs. Axé sur le contrôle de la magie, il excelle dans les sorts a longue portée, les contrôles de zone et les buffs stratégiques.',
    caracteristiques: ['INTELLIGENCE'],
    voies: [
      'catalyseur-d-éther',
      'géomancien-élémentaire',
      'graveur-de-runes',
      'maitre-des-arcanes',
      'maitre-des-reflets',
    ], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'assassin',
    name: 'Assassin',
    description:
      'Privilégie les attaques précises et rapides, éliminant discrètement ses ennemis. Spécialiste des attaques sournoises, il excelledans les combats rapides et furtifs.',
    caracteristiques: ['DEXTERITE', 'INTELLIGENCE'],
    voies: [
      'déchiqueteur',
      'faucheur',
      'lames-silencieuses',
      'maitre-des-ombres',
      'ombre',
    ], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'champion',
    name: 'Champion',
    description:
      "Combattant polyvalent et robuste, habitué aux batailles rangées. Il peut jouer un rôle de tank ou de damage dealer avec une grande variété d'armes.",
    caracteristiques: ['FORCE', 'CONSTITUTION'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'conseiller',
    name: 'Conseiller',
    description:
      "Maître de la diplomatie et de la stratégie sociale. Axé sur le soutien et les interactions sociales, il utilise ses compétences pour apaiser les conflits ou manipuler les ennemis. (C'est une classe de la haute société !)",
    caracteristiques: ['CHARISME', 'DEXTERITE'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'druide',
    name: 'Druide',
    description:
      'Protecteur de la nature, capable de manipuler les éléments et de se transformer en créatures sauvages. Il peut jouer le rôle de soigneur, tank ou contrôleur en fonction des besoins.',
    caracteristiques: ['SAGESSE', 'CONSTITUTION'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'enforceur',
    name: 'Enforceur',
    description:
      'Combine la force brute et la technologie avancée (Hextech) pour infliger des dégâts. Il excelle dans les combats rapprochés tout en utilisant des gadgets pour contrôler le champ de bataille.',
    caracteristiques: ['INTELLIGENCE', 'CONSTITUTION'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'ensorceleur',
    name: 'Ensorceleur',
    description:
      "Puise dans une magie instinctive et innée pour libérer des sorts dévastateurs. Polyvalent et explosifs, il combine puissance brute et improvisation magique pour s'adapter aux situations.",
    caracteristiques: ['CHARISME'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'invoqueur',
    name: 'Invoqueur',
    description:
      'Intermédiaire entre les mortels et les entités divines. Axé sur le soutien et la guérison, il utilise des sorts pour renforcer ses alliés et affaiblir ses ennemis.',
    caracteristiques: ['SAGESSE', 'FORCE'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'maître-lames',
    name: 'Maître Lames',
    description:
      "Un combattant discipliné, formé à l'art du duel et au maniement des armes nobles. Axés sur le duel et la défense, il peut bloquer les attaques ennemies tout en infligeant des coups précis et puissants.",
    caracteristiques: ['FORCE', 'CHARISME'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'mercenaire',
    name: 'Mercenaire',
    description:
      'Un combattant brutal et sans pitié. Habitué aux guerres et aux batailles sanglantes, il est une force de destruction.',
    caracteristiques: ['FORCE', 'CONSTITUTION'],
    voies: [
      'berserker',
      'briseur',
      'fléau-des-batailles',
      'frappeur-des-lignes',
      'ravageur',
    ], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'mystique',
    name: 'Mystique',
    description:
      'Allie discipline spirituelle et arts martiaux pour exploiter sa force intérieure tout en restant mobile et inssaisissable.',
    caracteristiques: ['SAGESSE', 'DEXTERITE'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'nécromancien',
    name: 'Nécromancien',
    description:
      "Manipulateur des morts et des âmes. Axé sur l'invocation et le contrôle, il utilise des créatures mortes (du Néant) pour submerger ses ennemis et infliger des malédictions.",
    caracteristiques: ['INTELLIGENCE'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
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
    image: ArcanisteImage,
  },
  {
    slug: 'tireur-d-élite',
    name: "Tireur d'Elite",
    description:
      "Spécialiste des armes à projectiles, capable d'infliger des dégâts précis et dévastateurs à distance. Il se concentre sur les attaques à longue portée avec une précision mortelle.",
    caracteristiques: ['DEXTERITE', 'CONSTITUTION'],
    voies: [''], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  {
    slug: 'traqueur',
    name: 'Traqueur',
    description:
      "Un combattant discret et agile, habitué à survivre dans la nature. Spécialiste de la furtivité et de l'adaption, il excelle dans les embuscades, la reconnaissance et les attaques à distance.",
    caracteristiques: ['DEXTERITE', 'SAGESSE'],
    voies: [
      'chasseur-de-prime',
      'éclaireur-implacable',
      'maitre-des-bêtes',
      'marcheur-sylvestre',
      'tireur-embusqué',
    ], // Liste des slugs des voies associées à la classe
    image: ArcanisteImage,
  },
  // Ajouter d'autres classes selon besoin
];
