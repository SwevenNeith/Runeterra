export const competences = [
    {
      slug: 'impulsion-énergétique',
      name: 'Impulsion Energétique',
      description:
        "Une onde d'énergie brute est libérée, repoussant les ennemis et infligeant des dégâts modérés dans un rayon proche.",
      level: '1',
      damage: '1d6 DM',
      bonus: 'Les ennemis touchés sont repoussés de 2 mètres',
      malus: '',
      sauvegarde: '',
      range: '3 mètres',
      duration: '',
      voie: 'physicien-énergétique', // Correspond au slug de la voie
    },
    {
      slug: 'jet-de-venin',
      name: 'Jet de Venin',
      description:
        'Le Scientifique projette une dose de venin concentré sur un ennemi.',
      level: '1',
      damage: '1d4 DM',
      bonus: '',
      malus: '',
      sauvegarde: 'CON ou -1 FOR et -1 DEX',
      range: '6 mètres',
      duration: "[1 + Mod d'INT]",
      voie: 'chimiste-toxique', // Correspond au slug de la voie
    },
    {
      slug: 'mutation-adaptative',
      name: 'Mutation Adaptative',
      description:
        'En adaptant ses formules, le Scientifique offre à un allié, une créature mutante ou à lui-même, une amélioration temporaire de ses capacités physiques.',
      level: '1',
      damage: '',
      bonus: '+2 DEX ou +2 CON (à choisir avant le lancé)',
      malus: '',
      sauvegarde: '',
      range: 'Au contact',
      duration: "[1 + Mod d'INT]",
      voie: 'biologiste-mutagène', // Correspond au slug de la voie
    },
    {
      slug: 'champ-répulsif',
      name: 'Champ Répulsif',
      description:
        "Crée une barrière d'énergie autour de lui-même ou d'un allié, réduisant les dégâts et repoussant les ennemis qui s'approchent trop près.",
      level: '2',
      damage: '1d4 DM',
      bonus:
        'Le ennemis sont repoussés de 3 mètre. Les alliés dans la zone ont +1 CA',
      malus: '',
      sauvegarde: '',
      range: '5 mètres',
      duration: "[1 + Mod d'INT]",
      voie: 'physicien-énergétique', // Correspond au slug de la voie
    },
    {
      slug: 'créature-de-laboratoire',
      name: 'Créature de Laboratoire',
      description:
        "Grâce à ses recherches, le Scientifique est capable d'invoquer une petite créature chimérique issue de ses expérimentations pour l'aider en combat.",
      level: '2',
      damage: '1d6 DM',
      bonus: 'La créature a [5 x Niveau] PV',
      malus: '',
      sauvegarde: '',
      range: '6 mètres',
      duration: "[2 + Mod d'INT] ou jusqu'à sa mort",
      voie: 'biologiste-mutagène', // Correspond au slug de la voie
    },
    {
      slug: 'gaz-suffocant',
      name: 'Gaz Suffocant',
      description: 'Le Scientifique créé un nuage de gaz toxique dans une zone.',
      level: '2',
      damage: '1d4 chaque tours',
      bonus:
        'Le nuage bloque la vision dans la zone, rendant les attaques à distance impossibles',
      malus: "-1 aux jets d'attaques",
      sauvegarde: '',
      range: '6 mètres',
      duration: "[1 + Mod d'INT]",
      voie: 'chimiste-toxique', // Correspond au slug de la voie
    },
    {
      slug: 'acide-corrosif',
      name: 'Acide Corrosif',
      description:
        "Un jet d'acide qui ronge l'armure et inflige des dégâts à une cible.",
      level: '3',
      damage: '2d6 DM',
      bonus: '-2 CA',
      malus: '',
      sauvegarde: 'DEX ou 1d6 DM chaque tours',
      range: '8 mètres',
      duration: "[1 + Mod d'INT]",
      voie: 'chimiste-toxique', // Correspond au slug de la voie
    },
    {
      slug: 'shimmer',
      name: 'Shimmer',
      description:
        'Le Scientifique administre une concoction qui renforce temporairement un allié ou lui-même, augmentant sa puissance physique. Il subira cependant un malus de Sagesse en raison des effets secondaires.',
      level: '3',
      damage: '1d6DM',
      bonus: '+2 FOR et [+ 5 + Mod de SAG] PV',
      malus: '-1 SAG',
      sauvegarde: '',
      range: '6 mètres',
      duration: '[1 + Mod de SAG]',
      voie: 'biologiste-mutagène', // Correspond au slug de la voie
    },
    {
      slug: 'surcharge-énergétique',
      name: 'Surcharge Energétique',
      description:
        'Cannalise une énergie concentrée dans une arme ou un gadget, augmentant considérablement son efficacité pendant un court instant.',
      level: '3',
      damage: '2d6 DM',
      bonus: '+2 de portée pour les attaques à distance',
      malus: '',
      sauvegarde: '',
      range: '',
      duration: "Jusqu'à utilisation",
      voie: 'physicien-énergétique', // Correspond au slug de la voie
    },
    {
      slug: 'brume-mortelle',
      name: 'Brume Mortelle',
      description:
        'Le Scientifique libère une brume toxique qui recouvre une zone.',
      level: '4',
      damage: '2d8 DM',
      bonus: '',
      malus: '',
      sauvegarde: 'CON ou 2d6 DM chaque tour',
      range: "8 mètres autour d'un point visible",
      duration: "[1 + Mod d'INT]",
      voie: 'chimiste-toxique', // Correspond au slug de la voie
    },
    {
      slug: 'nuéé-chimérique',
      name: 'Nuée Chimérique',
      description:
        'Une horde de petites créatures mutantes est libérée, semant le chaos et infligeant des dégâts à tous les ennemis dans une zone.',
      level: '4',
      damage: "2d6 DM au début de leur tour, s'ils restent dans la zone",
      bonus: '',
      malus: '',
      sauvegarde: '',
      range: 'Une zone de 8 mètres de rayon à 3 mètres du Scientifique',
      duration: "[2 + Mod d'INT]",
      voie: 'biologiste-mutagène', // Correspond au slug de la voie
    },
    {
      slug: 'onde-de-choc-instable',
      name: 'Onde de Choc Instable',
      description:
        "Libère une vague d'énergie destabilisante dans une large zone, infligeant des dégâts tout en désorientant les ennemis.",
      level: '4',
      damage: '2d8 DM',
      bonus:
        'Toute utilisation de magie ou capacité de focus est impossible dans la zone',
      malus: 'Les alliés dans la zone subissent également les dégâts',
      sauvegarde: "DEX ou -2 aux jets d'attaques",
      range: "10 mètres autour d'un point visible",
      duration: "[1 + Mod d'INT]",
      voie: 'physicien-énergétique', // Correspond au slug de la voie
    },
    {
      slug: 'abomination',
      name: 'Abomination',
      description:
        'Le Scientifique fusionne plusieurs de ses créations mutantes (2 au minimum) pour engendrer une abomination massive, instable et redoutable, qui agit de manière autonome et chaotique.',
      level: '5',
      damage: '3d8 DM',
      bonus: 'La créature a [12 x Niveau] PV',
      malus:
        'Si elle tombe à 0 PV ou après la fin de la durée, elle explose dans une détonation toxique et inflige 3d6 DM',
      sauvegarde: '',
      range: '2 mètres des créatures à fusionner',
      duration: "[1 + Mod d'INT]",
      voie: 'biologiste-mutagène', // Correspond au slug de la voie
    },
    {
      slug: 'catastrophe-chimique',
      name: 'Catastrophe Chimique',
      description:
        "Le Scientifique libère un mélange extrêmement toxique, saturant l'air et rendant l'environnement inhospitalier pour tous les ennemis.",
      level: '5',
      damage: '4d8 DM puis 2d6 DM',
      bonus: '',
      malus: '',
      sauvegarde: 'CON ou -2 FOR et -2 DEX',
      range: "12 mètres autour d'un point visible",
      duration: "[1 + Mod d'INT]",
      voie: 'chimiste-toxique', // Correspond au slug de la voie
    },
    {
      slug: 'nexus-d-énergie',
      name: "Nexus d'Energie",
      description:
        "Le Scientifique utilise une source d'énergie pure et massive pour générer des effets dévastateurs ou protecteurs selon les besoins.",
      level: '5',
      damage:
        'Explosion Energétique : 3d10 DM et repousse les ennemis de 5 mètres',
      bonus:
        'Barrière Régénératrice : réduit les dégâts subit par des alliés de moitié et leur fait gagner 2d6 PV',
      malus: '',
      sauvegarde: '',
      range: '12 mètres',
      duration: '1',
      voie: 'physicien-énergétique', // Correspond au slug de la voie
    },
    {
      slug: '',
      name: '',
      description: '',
      level: '',
      damage: '',
      bonus: '',
      malus: '',
      sauvegarde: '',
      range: '',
      duration: '',
      voie: '', // Correspond au slug de la voie
    },
    {
      slug: '',
      name: '',
      description: '',
      level: '',
      damage: '',
      bonus: '',
      malus: '',
      sauvegarde: '',
      range: '',
      duration: '',
      voie: '', // Correspond au slug de la voie
      effect1: {
        name: '', // Nom de l'effet 1
        damage: '', // Dégâts de l'effet 1
        bonus: '', // Bonus de l'effet 1
        malus: '', // Malus de l'effet 1
      },
      effect2: {
        name: '', // Nom de l'effet 2
        damage: '', // Dégâts de l'effet 2
        bonus: '', // Bonus de l'effet 2
        malus: '', // Malus de l'effet 2
      },
    },
  
    // Ajoutez d'autres compétences...
  ];
  