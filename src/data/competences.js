export const competences = [
  {
    slug: '',
    name: '',
    description: '',
    level: '',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '',
    voie: '', // Correspond au slug de la voie
  },

  {
    slug: 'coup-vital',
    name: 'Coup Vital',
    description:
      "L'Assassin vise un point faible pour infliger une blessure précise et efficace.",
    level: '1',
    damage: '1d8 DM + 1d4 DM si la cible est sous la moitié de ses PV',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '5 mètres',
    duration: '',
    voie: 'faucheur', // Correspond au slug de la voie
  },
  {
    slug: 'explosion-arcanique',
    name: 'Explosion Arcanique',
    description:
      "L'Arcaniste libère une petite explosion d'énergie magique concentrée pour attaquer un ennemi à distance.",
    level: '1',
    damage: '1d6 DM',
    alliés:
      "Si l'attaque touche, la prochaine attaque contre cette cible gagne +1 DM même si l'attaquant n'est pas l'Arcaniste",
    ennemis: '',
    sauvegarde: '',
    range: '15 mètres',
    duration: '',
    voie: 'maitre-des-arcanes', // Correspond au slug de la voie
  },
  {
    slug: 'flèche-de-sève',
    name: 'Flèche de Sève',
    description:
      'Le Traqueur imprègne une flèche de sève empoisonnée, affaiblissant légèrement son ennemi.',
    level: '1',
    damage: '1d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: "CON ou 1d4 DM jusqu'à la fin de la durée",
    range: '',
    duration: '[1 + Mod de SAG] tours',
    voie: 'marcheur-sylvestre', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-agile',
    name: 'Frappe Agile',
    description:
      'Le Mercenaire attaque tout en se déplaçant rapidement, perturbant son adversaire.',
    level: '1',
    damage: '1d6 DM',
    alliés: "Peut se déplacer de 3 mètres avant ou après l'attaque",
    ennemis: '-2 DEX',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'ravageur', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-dans-l-ombre',
    name: "Frappe dans l'Ombre",
    description:
      "L'Assassin se cache dans les ombres et frappe avec une précision mortelle.",
    level: '1',
    damage: '1d6 DM',
    alliés: '',
    ennemis: "-1 CA jusqu'au prochain tour si la cible n'a pas encore agit",
    sauvegarde: '',
    range: '10 mètres',
    duration: '',
    voie: 'maitre-des-ombres', // Correspond au slug de la voie
  },
  {
    slug: 'griffes-primitives',
    name: 'Griffes Primitives',
    description:
      'Le Mercenaire frappe avec une violence animale, infligeant des dégâts accrus au corps à corps.',
    level: '1',
    damage:
      '1d8 DM + 1d6 DM supplémentaire si la cible a agit avant le Mercenaire',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'briseur', // Correspond au slug de la voie
  },
  {
    slug: 'hache-tourbillonnante',
    name: 'Hache Tourbillonnante',
    description:
      'Le Mercenaire fait tournoyer son arme autour de lui, frappant tous les ennemis proches.',
    level: '1',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '3 mètres',
    duration: '',
    voie: 'fléau-des-batailles', // Correspond au slug de la voie
  },
  {
    slug: 'impact-brisé',
    name: 'Impact Brisé',
    description:
      'Le Mercenaire frappe une cible avec une force massive, perturbant sa position et ses défenses.',
    level: '1',
    damage: '1d8 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: "-1 CA jusqu'à la fin du prochain tour",
    range: '',
    duration: '',
    voie: 'frappeur-des-lignes', // Correspond au slug de la voie
  },
  {
    slug: 'instinct-sauvage',
    name: 'Instinct Sauvage',
    description:
      'Le Traqueur exploite son lien instinctif avec la faune pour renforcer temporairement sa précision et ses réflexes.',
    level: '1',
    damage: '',
    alliés: '+2 DEX et +1 CA',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de SAG] tours',
    voie: 'maitre-des-bêtes', // Correspond au slug de la voie
  },
  {
    slug: 'impulsion-énergétique',
    name: 'Impulsion Energétique',
    description:
      "Une onde d'énergie brute est libérée, repoussant les ennemis et infligeant des dégâts modérés dans un rayon proche.",
    level: '1',
    damage: '1d6 DM',
    alliés: '',
    ennemis: "Repoussés de 2 mètres s'ils ont été touchés",
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
    alliés: '',
    ennemis: '',
    sauvegarde: 'CON ou -1 FOR et -1 DEX',
    range: '6 mètres',
    duration: "[1 + Mod d'INT] tours",
    voie: 'chimiste-toxique', // Correspond au slug de la voie
  },
  {
    slug: 'lame-mortelle',
    name: 'Lame Mortelle',
    description:
      "L'Assassin attaque une cible avec une rapidité dévastatrice pour infliger des dégâts critiques.",
    level: '1',
    damage: "1d6 DM + 1d4 DM si la cible n'a pas encore agit",
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'lames-silencieuses', // Correspond au slug de la voie
  },
  {
    slug: 'lame-tellurique',
    name: 'Lame Tellurique',
    description:
      "L'Arcaniste invoque une lame d'énergie terrestre pour infliger une attaque directe.",
    level: '1',
    damage: '1d6 DM supplémentaire',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'géomancien-élémentaire', // Correspond au slug de la voie
  },
  {
    slug: 'lance-fiole',
    name: 'Lance-Fiole',
    description:
      "Un outil polyvalent permettant au Scientifique de projeter des fioles chimiques à distance pour des effets offensifs ou utilitaires. Choisir l'un des effets suivants : ",
    level: '1',
    effet1:
      'Acide Corrosif : Inflige 1d6 DM à un ennemi et -1 CA pendant 2 tours',
    effet2: 'Solution Régénérante : Soigne lui-même ou un allié de 1d6 PV ',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '5 mètres',
    duration: '',
    voie: 'inventeur-chimiste', // Correspond au slug de la voie
  },
  {
    slug: 'marque-du-chasseur',
    name: 'Marque du Chasseur',
    description:
      'Le Traqueur marque une cible, augmentant la précision et les dégâts de ses attaques contre elle.',
    level: '1',
    damage: '',
    alliés: "+1 aux jets d'attaque et le Traqueur a +2 DM sur cette cible",
    ennemis: '',
    sauvegarde: '',
    range: '8 mètres',
    duration: '[1 + Mod de SAG] tours',
    voie: 'chasseur-de-prime', // Correspond au slug de la voie
  },
  {
    slug: 'mutation-adaptative',
    name: 'Mutation Adaptative',
    description:
      'En adaptant ses formules, le Scientifique offre à un allié, une créature mutante ou à lui-même, une amélioration temporaire de ses capacités physiques.',
    level: '1',
    damage: '',
    alliés: '+2 DEX ou +2 CON (à choisir avant le lancé)',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'biologiste-mutagène', // Correspond au slug de la voie
  },
  {
    slug: 'rage-sauvage',
    name: 'Rage Sauvage',
    description:
      'Le Mercenaire canalise sa rage pour frapper avec une force accrue, mais perd en précision.',
    level: '1',
    damage: '',
    alliés: '+2 DM, +2 FOR et -1 DEX',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de CON] tours',
    voie: 'berserker', // Correspond au slug de la voie
  },
  {
    slug: 'rayon-éthéré',
    name: 'Rayon Ethéré',
    description:
      "Un faisceau d'énergie pure qui traverse les ennemis alignés pour infliger des dégâts précis.",
    level: '1',
    damage: '1d6 DM',
    alliés:
      "Si au moins 2 ennemis sont touchés, l'Arcaniste gagne +1 aux jets d'attaque magique pour son prochain tour",
    ennemis: '',
    sauvegarde: '',
    range: '8 mètres',
    duration: '',
    voie: 'catalyseur-d-éther', // Correspond au slug de la voie
  },
  {
    slug: 'reflet-lumineux',
    name: 'Reflet Lumineux',
    description:
      'Un rayon lumineux rapide qui rebondit entre 2 ennemis, infligeant des dégâts successifs.',
    level: '1',
    damage: '1d6 DM au premier et 1d4 DM au second',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '6 mètres entre les 2 cibles',
    duration: '',
    voie: 'maitre-des-reflets', // Correspond au slug de la voie
  },
  {
    slug: 'renforcement-métallique',
    name: 'Renforcement Métallique',
    description:
      'Le Scientifique applique un procédé rapide de transmutation pour renforcer temporairement une arme ou un bouclier.',
    level: '1',
    damage: '',
    effet1: 'Arme : +1 DM',
    effet2: 'Armure : +1 CA',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'transmutateur-visionnaire', // Correspond au slug de la voie
  },
  {
    slug: 'rune-d-impact',
    name: "Rune d'Impact",
    description:
      "Une rune explosive gravée sur une cible qui libère une décharge d'énergie",
    level: '1',
    damage: '1d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'graveur-de-runes', // Correspond au slug de la voie
  },
  {
    slug: 'tir-précis',
    name: 'Tir Précis',
    description:
      'Une attaque ciblée utilisant des techniques de visée avancées pour infliger des dégâts supplémentaires.',
    level: '1',
    damage: "1d8 DM + 1d4 si la cible n'a pas encore agit",
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '15 mètres',
    duration: '',
    voie: 'tireur-embusqué', // Correspond au slug de la voie
  },
  {
    slug: 'vision-du-traqueur',
    name: 'Vision du Traqueur',
    description:
      "Le Traqueur s'appuie sur son instinct pour localiser ses ennemis cachés ou invisibles.",
    level: '1',
    damage: '',
    alliés: '+2 DEX si un ennemi est détecté',
    ennemis: '',
    sauvegarde: '',
    range: '10 mètres',
    duration: '',
    voie: 'éclaireur-implacable', // Correspond au slug de la voie
  },

  {
    slug: 'altération-élémentaire',
    name: 'Altération Elémentaire',
    description:
      "En manipulant la matière autour de lui, le Scientifique transforme un élément du terrain pour créer un avantage stratégique. Choisir l'un des effets suivants : ",
    level: '2',
    effet1: 'Glace : Immobilise les ennemis présents dans la zone',
    effet2: 'Feu : 1d6 DM aux ennemis dans la zone',
    effet3: "Electricité : -1 aux jets d'attaque ennemis",
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Une zone de 3 mètres de rayon',
    duration: "[1 + Mod d'INT] tours",
    voie: 'transmutateur-visionnaire', // Correspond au slug de la voie
  },
  {
    slug: 'appareil-récupérateur',
    name: 'Appareil Récupérateur',
    description:
      'Un dispositif qui absorbe une partie des dégâts subis pour les transformer en soins progressifs.',
    level: '2',
    damage: '',
    alliés:
      'Absorbe 50% des DM infligés. Si des dégâts ont été absorbés, redonne 1d4 PV à la fin de chaque tours',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'inventeur-chimiste', // Correspond au slug de la voie
  },
  {
    slug: 'bénédiction-éthérée',
    name: 'Bénédiction Ethérée',
    description:
      "Une bénédiction qui augmente temporairement la puissance de l'Arcaniste ou d'un allié.",
    level: '2',
    damage: '',
    alliés: '+2 DM',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'catalyseur-d-éther', // Correspond au slug de la voie
  },
  {
    slug: 'bouclier-de-pierre',
    name: 'Bouclier de Pierre',
    description:
      "Une couche de pierre magique protège l'Arcaniste ou un allié.",
    level: '2',
    damage: '',
    alliés: '+2 CA',
    ennemis: '-2 DM',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'géomancien-élémentaire', // Correspond au slug de la voie
  },
  {
    slug: 'bouclier-mystique',
    name: 'Bouclier Mystique',
    description:
      "Une barrière d'énergie arcanique protège l'Arcaniste ou un allié.",
    level: '2',
    damage: '',
    alliés: "Absorbe jusqu'à [2 + Mod d'INT] DM",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "Jusqu'à dissipation",
    voie: 'maitre-des-arcanes', // Correspond au slug de la voie
  },
  {
    slug: 'champ-répulsif',
    name: 'Champ Répulsif',
    description:
      "Crée une barrière d'énergie autour de lui-même ou d'un allié, réduisant les dégâts et repoussant les ennemis qui s'approchent trop près.",
    level: '2',
    damage: '1d4 DM',
    alliés: 'Les alliés dans la zone ont +1 CA',
    ennemis: 'Les ennemis sont repoussés de 3 mètres',
    sauvegarde: '',
    range: '5 mètres',
    duration: "[1 + Mod d'INT] tours",
    voie: 'physicien-énergétique', // Correspond au slug de la voie
  },
  {
    slug: 'compagnon-fidèle',
    name: 'Compagnon Fidèle',
    description:
      'Le Traqueur choisit une bête alliée qui combat à ses côtés de façon permanente, apportant soutien et distraction. Le Trqueur ne peut avoir que 2 créature au maximum.',
    level: '2',
    damage: '1d6 DM',
    alliés: 'La créature a [10 + Mod de CON] PV et [CA/ 2] CA',
    ennemis: "-1 à leurs jets d'attaque pour intimidation",
    sauvegarde: '',
    range: 'Au contact (invocation dans un rayon de 3 mètres)',
    duration: "Jusqu'à sa mort",
    voie: 'maitre-des-bêtes', // Correspond au slug de la voie
  },
  {
    slug: 'créature-de-laboratoire',
    name: 'Créature de Laboratoire',
    description:
      "Grâce à ses recherches, le Scientifique est capable d'invoquer une petite créature chimérique issue de ses expérimentations pour l'aider en combat.",
    level: '2',
    damage: '1d6 DM',
    alliés: 'La créature a [5 x Niveau] PV',
    ennemis: '',
    sauvegarde: '',
    range: '6 mètres',
    duration: "[2 + Mod d'INT] tours ou jusqu'à sa mort",
    voie: 'biologiste-mutagène', // Correspond au slug de la voie
  },
  {
    slug: 'cri-de-guerre',
    name: 'Cri de Guerre',
    description:
      'Le Mercenaire pousse un cri puissant qui motive ses alliés et déstabilise ses ennemis.',
    level: '2',
    damage: '',
    alliés: '+2 FOR',
    ennemis: '',
    sauvegarde: '',
    range: '6 mètres',
    duration: '[1 + Mod de FOR] tours',
    voie: 'frappeur-des-lignes', // Correspond au slug de la voie
  },
  {
    slug: 'drain-de-vie',
    name: 'Drain de Vie',
    description:
      "L'Assassin utilise son habileté pour voler un fragment de l'énergie vitale de sa cible.",
    level: '2',
    damage: '2d6 DM',
    alliés: "L'Assassin regagne 1d6 PV",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '',
    voie: 'faucheur', // Correspond au slug de la voie
  },
  {
    slug: 'éclat-amplifié',
    name: 'Eclat Amplifié',
    description:
      'Une lumière concentrée améliore la précision et les dégâts des attaques magiques.',
    level: '2',
    damage: '',
    alliés: "+2 FOR (+2 INT s'il s'agit de l'Arcaniste) et +2 DEX",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'maitre-des-reflets', // Correspond au slug de la voie
  },
  {
    slug: 'esquive-réflexe',
    name: 'Esquive Réflexe',
    description:
      'Le Mercenaire utilise ses réflexes aiguisés pour éviter les attaques ennemies.',
    level: '2',
    damage: '',
    alliés:
      "+2 CA et peut se déplacer de 3 mètres immédiatement sans provoquer d'attaque d'opportunité si une attaque ennemie échoue contre lui",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de CON] tours',
    voie: 'ravageur', // Correspond au slug de la voie
  },
  {
    slug: 'évasion-fantomatique',
    name: 'Evasion Fantomatique',
    description:
      "L'Assassin utilise son agilité pour se fondre dans l'ombre et devenir invisible.",
    level: '2',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de SAG] tours',
    voie: 'maitre-des-ombres', // Correspond au slug de la voie
  },
  {
    slug: 'flèche-de-ronce',
    name: 'Flèche de Ronce',
    description:
      'Le Traqueur envoie une flèche entourée de ronces, immobilisant sa cible.',
    level: '2',
    damage: '1d8 DM',
    alliés: '',
    ennemis: 'Les ronces empêchent la cible de bouger et a -2 DEX',
    sauvegarde: '',
    range: '8 mètres',
    duration: 'Mod de SAG tours',
    voie: 'marcheur-sylvestre', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-décisive',
    name: 'Frappe Décisive',
    description:
      'Le Traqueur porte une attaque ciblée avec une précision mortelle, exploitant les faiblesses de son adversiare.',
    level: '2',
    damage: '1d6 DM',
    alliés: '',
    ennemis:
      'Si la cible a la Marque du Chasseur, elle subit 1d4 supplémentaire',
    sauvegarde: '',
    range: '6 mètres',
    duration: '',
    voie: 'chasseur-de-prime', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-précise',
    name: 'Frappe Précise',
    description:
      "L'Assassin frappe une cible avec une grande précision visant des points vitaux pour infliger des dégâts massifs.",
    level: '2',
    damage: '2d6 DM + 1d6 DM si la cible a moins de 50% PV',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'lames-silencieuses', // Correspond au slug de la voie
  },
  {
    slug: 'gaz-suffocant',
    name: 'Gaz Suffocant',
    description: 'Le Scientifique créé un nuage de gaz toxique dans une zone.',
    level: '2',
    damage: '1d4 chaque tours',
    alliés: '',
    ennemis:
      "Le nuage bloque la vision dans la zone, rendant les attaques à distance impossibles et ils ont -1 aux jets d'attaques",
    sauvegarde: '',
    range: '6 mètres',
    duration: "[1 + Mod d'INT] tours",
    voie: 'chimiste-toxique', // Correspond au slug de la voie
  },
  {
    slug: 'hurlement-sauvage',
    name: 'Hurlement Sauvage',
    description: 'Un cri animal qui déstabilise les ennemis proches.',
    level: '2',
    damage: '',
    alliés: 'Regagnent 1d6 PV',
    ennemis: '',
    sauvegarde: 'SAG ou -2 FOR',
    range: '6 mètres',
    duration: '',
    voie: 'briseur', // Correspond au slug de la voie
  },
  {
    slug: 'piège-camouflé',
    name: 'Piège Camouflé',
    description:
      "Le Traqueur place un piège invisible à l'oeil nu, infligeant des dégâts à toute personne qui le déclenche.",
    level: '2',
    damage: '1d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '5 mètres',
    duration: 'Tout le combat',
    voie: 'tireur-embusqué', // Correspond au slug de la voie
  },
  {
    slug: 'poursuite',
    name: 'Poursuite',
    description:
      "Le Traqueur augmente sa vitesse et sa précision lorsqu'il poursuit une cible.",
    level: '2',
    damage: '',
    alliés: 'Le Traqueur se déplace de 5 mètres supplémentaires et a +2 DEX',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de DEX] tours',
    voie: 'éclaireur-implacable', // Correspond au slug de la voie
  },
  {
    slug: 'présence-intimidante',
    name: 'Présence Intimidante',
    description:
      'La posture imposante et menaçante du Mercenaire déstabilise les ennemis à proximité.',
    level: '2',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: 'SAG ou -2 DEX pendant toute la durée',
    range: '6 mètres',
    duration: '[1+ Mod de FOR] tours',
    voie: 'fléau-des-batailles', // Correspond au slug de la voie
  },
  {
    slug: 'rugissement-intimidant',
    name: 'Rugissement Intimidant',
    description:
      'Le Mercenaire pousse un cri primal, déstabilisant ses ennemis proches.',
    level: '2',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: "SAG ou -2 aux jets d'attaque",
    range: '6 mètres',
    duration: '',
    voie: 'berserker', // Correspond au slug de la voie
  },
  {
    slug: 'rune-de-renforcement',
    name: 'Rune de Renforcement',
    description:
      "Une rune gravée sur l'Arcaniste ou un allié pour augmenter temporairement ses capacités offensives.",
    level: '2',
    damage: '',
    alliés: "+2 aux jets d'attaque",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + mod d'INT] tours",
    voie: 'graveur-de-runes', // Correspond au slug de la voie
  },

  {
    slug: 'acide-corrosif',
    name: 'Acide Corrosif',
    description:
      "Un jet d'acide qui ronge l'armure et inflige des dégâts à une cible.",
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '-2 CA',
    sauvegarde: 'DEX ou 1d6 DM chaque tours',
    range: '8 mètres',
    duration: "[1 + Mod d'INT] tours",
    voie: 'chimiste-toxique', // Correspond au slug de la voie
  },
  {
    slug: 'alchimie-instable',
    name: 'Alchimie Instable',
    description:
      "Le Scientifique libère une substance instable sur le terrain qui réagit de manière explosive ou défensive selon le besoin. Choisir l'un des effets suivants : ",
    level: '3',
    effet1: 'Explosion : Inflige 2d6',
    effet2: 'Bouclier Alchimique : +2 CA pendant la durée du sort',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '10 mètres autour de lui',
    duration: "[1 + Mod d'INT] tours",
    voie: 'transmutateur-visionnaire', // Correspond au slug de la voie
  },
  {
    slug: 'assassinat-soudain',
    name: 'Assassinat Soudain',
    description:
      "L'Assassin frappe de manière dévastatrice depuis l'ombre, exploitant la surprise pour maximiser les dégâts.",
    level: '3',
    damage: '2d8 DM',
    alliés: "Regagne 1d6 PV si l'attaque élimine la cible",
    ennemis: '',
    sauvegarde: '',
    range: '8 mètres',
    duration: '',
    voie: 'maitre-des-ombres', // Correspond au slug de la voie
  },
  {
    slug: 'balayage-circulaire',
    name: 'Balayage Circulaire',
    description:
      'Le Mercenaire effectue un large mouvement avec son arme pour attaquer tous les ennemis proches.',
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde:
      "Si elles sont touchées : DEX ou -2 DEX jusqu'à la fin du prochain tour",
    range: 'Toutes les cibles dans un rayon de 3 mètres',
    duration: '',
    voie: 'ravageur', // Correspond au slug de la voie
  },
  {
    slug: 'charge-dévastatrice',
    name: 'Charge Dévastatrice',
    description:
      'Le Mercenaire fonce sur une cible, la renversant avec une force brutale.',
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: 'FOR ou être projeté à 3 mètres et tomber à terre',
    range: '8 mètres',
    duration: '',
    voie: 'berserker', // Correspond au slug de la voie
  },
  {
    slug: 'explosion-énergétique',
    name: 'Explosion Energétique',
    description: "Une décharge concentrée d'énergie brute.",
    level: '3',
    damage: '2d6 DM',
    alliés: '+1 Mana si la cible est vaincue (à voir si utilisation de Mana)',
    ennemis: '',
    sauvegarde: '',
    range: '12 mètres',
    duration: '',
    voie: 'catalyseur-d-éther', // Correspond au slug de la voie
  },
  {
    slug: 'fissure-volcanique',
    name: 'Fissure Volcanique',
    description: "L'Arcaniste libère l'énergie d'une faille volcanique",
    level: '3',
    damage: '2d6 DM à tous les ennemis situés sur le trajet',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '10 mètres',
    duration: '',
    voie: 'géomancien-élémentaire', // Correspond au slug de la voie
  },
  {
    slug: 'flèche-perforante',
    name: 'Flèche Perforante',
    description:
      'Une flèche puissante conçue pour traverser les protections ennemies et infliger de lourds dégâts.',
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: 'Ignore les effets de boucliers / protections magiques',
    sauvegarde: '',
    range: '10 mètres',
    duration: '',
    voie: 'chasseur-de-prime', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-subtile',
    name: 'Frappe Subtile',
    description:
      "Une attaque calculée qui vise une faiblesse de l'ennemi pour infliger des dégâts.",
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '-2 CA pendant la durée du sort',
    sauvegarde: '',
    range: 'Au contact',
    duration: '[Mod de DEX] tours',
    voie: 'éclaireur-implacable', // Correspond au slug de la voie
  },
  {
    slug: 'harmonie-sylvestre',
    name: 'Harmonie Sylvestre',
    description:
      "Le Traqueur canalise l'énergie de la nature pour renforcer ses alliés proches.",
    level: '3',
    damage: '',
    alliés: '+1 FOR et regagnent 2d6 PV',
    ennemis: '',
    sauvegarde: '',
    range: '6 mètres autour de lui',
    duration: '[1 + Mod de SAG] tours',
    voie: 'marcheur-sylvestre', // Correspond au slug de la voie
  },
  {
    slug: 'maitre-des-points-vitaux',
    name: 'Maitre des Points Vitaux',
    description:
      "L'Assassin perfectionne son savoir-faire, maximisant l'efficacité de ses coups critiques.",
    level: '3',
    damage: '',
    alliés:
      "L' Assassin à +2 DEX et chaque coup critique inflige 1d6 DM supplémentaire",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de SAG] tours',
    voie: 'faucheur', // Correspond au slug de la voie
  },
  {
    slug: 'maitrise-des-lames',
    name: 'Maîtrise des Lames',
    description:
      "L'Assassin perfectionne ses techniques de combat, augmentant la rapidité et la brutalité de ses frappes.",
    level: '3',
    damage: '',
    alliés:
      "L'Assassin peut attaquer 2 fois par tours (sauf utilisation de compétences limitées) avec -1 aux jets d'attaque",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de DEX]',
    voie: 'lames-silencieuses', // Correspond au slug de la voie
  },
  {
    slug: 'nuage-stimulant',
    name: 'Nuage Stimulant',
    description:
      'Un gaz chimique qui booste temporairement les performances physiques du Scientifique et de ses alliés dans une zone.',
    level: '3',
    damage: '',
    alliés: '+2 FOR, +2 DEX et +1 DM',
    ennemis: '',
    sauvegarde: '',
    range: 'Zone de 6 mètres autour de lui',
    duration: "[1 + Mod d'INT] tours",
    voie: 'inventeur-chimiste', // Correspond au slug de la voie
  },
  {
    slug: 'onde-de-choc',
    name: 'Onde de Choc',
    description:
      "Le Mercenaire frappe le sol ou une cible avec une force énorme, libérant une onde d'énergie brutale.",
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: 'DEX ou être projetés à 3 mètres',
    range: 'Un cône de 6 mètres',
    duration: '',
    voie: 'fléau-des-batailles', // Correspond au slug de la voie
  },
  {
    slug: 'percée-brisée',
    name: 'Percée Brisée',
    description:
      'Le Mercenaire charge en ligne droite, renversant les ennemis sur son passage.',
    level: '3',
    damage: '3d6 DM à chaque ennemis touchés',
    alliés: '',
    ennemis: '',
    sauvegarde: 'FOR ou projetés de 3 mètres et tomber à terre',
    range: '8 mètres en ligne droite',
    duration: '',
    voie: 'frappeur-des-lignes', // Correspond au slug de la voie
  },
  {
    slug: 'prisme-énergétique',
    name: 'Prisme Energétique',
    description:
      'Une attaque lumineuse concentrée qui traverse les ennemis allignés.',
    level: '3',
    damage: '2d6 DM aux ennemis sur la ligne',
    alliés: '',
    ennemis: '-2 CA',
    sauvegarde: '',
    range: 'Une ligne droite de 10 mètres',
    duration: "[1 + Mod d'INT] tours",
    voie: 'maitre-des-reflets', // Correspond au slug de la voie
  },
  {
    slug: 'rage-de-la-bête',
    name: 'Rage de la Bête',
    description:
      "Le Traqueur canalise l'énergie de son lien avec ses bêtes pour améliorer leur efficacité au combat.",
    level: '3',
    damage: '',
    alliés: 'Tous les compagnons gagnent +2 DM et +3 CA',
    ennemis: '',
    sauvegarde: '',
    range: '10 mètres',
    duration: '[1 + Mod de SAG] tours',
    voie: 'maitre-des-bêtes', // Correspond au slug de la voie
  },
  {
    slug: 'renforcement-magique',
    name: 'Renforcement Magique',
    description:
      "L'Arcaniste concentre son énergie pour augmenter temporairement la puissance de ses sorts.",
    level: '3',
    damage: '',
    alliés:
      '+ 1DM aux sorts, +3 mètres de portée et +2 dans une caractéristique au choix',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'maitre-des-arcanes', // Correspond au slug de la voie
  },
  {
    slug: 'résilience-sauvage',
    name: 'Résilience Sauvage',
    description:
      'Le Mercenaire, porté par son instinct, devient temporairement insensible à la douleur et résiste mieux aux attaques ennemies.',
    level: '3',
    damage: '',
    alliés: '-2 DM aux dégâts subis et regagne 1d8 PV si une attaque est > 8M',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de CON] tours',
    voie: 'briseur', // Correspond au slug de la voie
  },
  {
    slug: 'rune-d-énergie',
    name: "Rune d'Energie",
    description:
      "Une rune projetée à distance qui libère une onde d'énergie infligeant des dégâts dans une zone restreinte.",
    level: '3',
    damage: '2d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '12 mètres et une zone avec un rayon de 3 mètres',
    duration: '',
    voie: 'graveur-de-runes', // Correspond au slug de la voie
  },
  {
    slug: 'shimmer',
    name: 'Shimmer',
    description:
      'Le Scientifique administre une concoction qui renforce temporairement un allié ou lui-même, augmentant sa puissance physique. Il subira cependant un malus de Sagesse en raison des effets secondaires.',
    level: '3',
    damage: '1d6DM',
    alliés: '+2 FOR et [+ 5 + Mod de SAG] PV et -1 SAG',
    ennemis: '',
    sauvegarde: '',
    range: '6 mètres',
    duration: '[1 + Mod de SAG] tours',
    voie: 'biologiste-mutagène', // Correspond au slug de la voie
  },
  {
    slug: 'surcharge-énergétique',
    name: 'Surcharge Energétique',
    description:
      'Cannalise une énergie concentrée dans une arme ou un gadget, augmentant considérablement son efficacité pendant un court instant.',
    level: '3',
    damage: '2d6 DM',
    alliés: '+2 de portée pour les attaques à distance',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: "Jusqu'à utilisation",
    voie: 'physicien-énergétique', // Correspond au slug de la voie
  },
  {
    slug: 'vantage-tactique',
    name: 'Vantage Tactique',
    description:
      'Le Traqueur se repositionne stratégiquement pour obtenir une meilleure ligne de tir ou échapper à ses ennemis.',
    level: '3',
    damage: '',
    alliés:
      "Le Traqueur se déplace de 6 mètres supplémentaires sans provoquer d'attaque d'opportunité et +2 au prochain jet d'attatque à distance",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '',
    voie: 'tireur-embusqué', // Correspond au slug de la voie
  },

  {
    slug: 'appel-de-la-forêt',
    name: 'Appel de la Forêt',
    description:
      'Le Traqueur invoque des racines et des vignes pour attaquer les ennemis.',
    level: '4',
    damage: '2d6 DM',
    alliés: '',
    ennemis: "-2 DEX jusqu'à la fin du sort",
    sauvegarde: '',
    range: "4 mètres autour d'un point visible",
    duration: '[1 + Mod de SAG] tours',
    voie: 'marcheur-sylvestre', // Correspond au slug de la voie
  },
  {
    slug: 'bond-sauvage',
    name: 'Bond Sauvage',
    description:
      "Le Mercenaire bondit avec force sur une cible, l'écrasant au sol.",
    level: '4',
    damage: '3d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: "FOR ou étourdie (n'agit pas) jusqu'au prochain tour",
    range: '6 mètres',
    duration: '',
    voie: 'briseur', // Correspond au slug de la voie
  },
  {
    slug: 'brume-mortelle',
    name: 'Brume Mortelle',
    description:
      'Le Scientifique libère une brume toxique qui recouvre une zone.',
    level: '4',
    damage: '2d8 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: 'CON ou 2d6 DM chaque tour',
    range: "8 mètres autour d'un point visible",
    duration: "[1 + Mod d'INT] tours",
    voie: 'chimiste-toxique', // Correspond au slug de la voie
  },
  {
    slug: 'cercle-runique',
    name: 'Cercle Runique',
    description:
      "Un cercle gravé au sol qui améliore les capacités offensives de tous les alliés présents à l'intérieur. L'Arcaniste prend 1 tour pour graver le cercle.",
    level: '4',
    damage: '',
    alliés: '+2 DM aux alliés dans le cercle',
    ennemis: '',
    sauvegarde: '',
    range: '6 mètres de diamètre autour de lui',
    duration: "[1 + Mod d'INT] tours",
    voie: 'graveur-de-runes', // Correspond au slug de la voie
  },
  {
    slug: 'charge-sauvage',
    name: 'Charge Sauvage',
    description:
      "Le compagnon du Traqueur fonce sur une cible, infligeant des dégâts massifs et déséquilibrant l'ennemi",
    level: '4',
    damage: '2d6',
    alliés: '',
    ennemis: '',
    sauvegarde: 'FOR ou être projeté à 3 mètres et tomber au sol',
    range: '8 mètres',
    duration: '',
    voie: 'maitre-des-bêtes', // Correspond au slug de la voie
  },
  {
    slug: 'concentration-amplifiée',
    name: 'Concentration Amplifiée',
    description:
      "L'Arcaniste canalise l'éther pour améliorer ses capacités magiques.",
    level: '4',
    damage: '',
    alliés: "+2 aux jets d'attaque et +2 DM",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod 'INT] tours",
    voie: 'catalyseur-d-éther', // Correspond au slug de la voie
  },
  {
    slug: 'courant-de-flamme',
    name: 'Courant de Flamme',
    description:
      'Un souffle ardent dévastateur inflige des dégâts massifs à plusieurs cibles.',
    level: '4',
    damage: '2d8 à tous les ennemis dans la zone',
    alliés: '',
    ennemis:
      "Les cibles touchées ne peuvent pas bénéficier de buffs jusqu'à la fin de leur prochain tour",
    sauvegarde: '',
    range: 'Cône de 6 mètres',
    duration: '',
    voie: 'géomancien-élémentaire', // Correspond au slug de la voie
  },
  {
    slug: 'embuscade',
    name: 'Embuscade',
    description:
      "Le Traqueur prépare une attaque stratégique qui maximise l'effet de surprise. Le Traqueur doit réussir son jet de DEX (discrétion) pour réussir son attaque",
    level: '4',
    damage: '3d6 DM',
    alliés: '',
    ennemis: "-2 FOR et -2 DEX jusqu'à la fin du prochain tour",
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'éclaireur-implacable', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-dominante',
    name: 'Frappe Dominante',
    description:
      "Une attaque puissante qui cible un point précis pour désorganiser un groupe d'ennemis.",
    level: '4',
    damage: '3d6 DM',
    alliés: '',
    ennemis: '-2 FOR pendant toute la durée',
    sauvegarde: '',
    range: "4 mètres autour d'un point visible",
    duration: '[1 + Mod de FOR] tours',
    voie: 'frappeur-des-lignes', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-fatale',
    name: 'Frappe Fatale',
    description:
      "L'Assassin concentre toute sa force et sa précision dans une attaque conçue pour abattre un ennemi affaibli.",
    level: '4',
    damage: '2d8 DM',
    alliés: '',
    ennemis: '-2 DEX et -2 FOR si la cible a moins de 25% de PV',
    sauvegarde: '',
    range: 'Au contact',
    duration: '2 tours',
    voie: 'faucheur', // Correspond au slug de la voie
  },
  {
    slug: 'furie-inarrêtable',
    name: 'Furie Inarrêtable',
    description:
      'Le Mercenaire entre dans une rage incontrôlable, devenant plus puissant à chaque coup porté.',
    level: '4',
    damage: '',
    alliés:
      "+1 DM cumulatif pour chaque attaques réussies (pouvant aller jusqu'à +4 DM). En raison de l'effort, il subit 1d4 DM à la fin de chaque tour",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de CON] tours',
    voie: 'berserker', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-invisible',
    name: 'Frappe Invisible',
    description:
      "L'Assassin disparaît brièvement dans l'ombre avec d'apparaître soudainement pour frapper avec une grande force.",
    level: '4',
    damage: '3d6 DM',
    alliés: 'Il devient invisible pendant 1 tour',
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'lames-silencieuses', // Correspond au slug de la voie
  },
  {
    slug: 'générateur-d-interférence',
    name: "Générateur d'Interférence",
    description:
      'Un dispositif perturbant les systèmes ennemis, réduisant leur efficacité et désorientant leurs actions.',
    level: '4',
    damage: '',
    alliés: '',
    ennemis:
      "-2 aux jets d'attaque et toutes actions nécessitant de la concentration (magie ou pouvoir continu) a 1/2 chance de réussir",
    sauvegarde: '',
    range: '10 mètres autour de lui',
    duration: "[1 + Mod d'INT] tours",
    voie: 'inventeur-chimiste', // Correspond au slug de la voie
  },
  {
    slug: 'instinct-prédatoire',
    name: 'Instinct Prédatoire',
    description:
      "Le Traqueur s'appuie sur ses instincts pour anticiper les mouvements de sa proie, améliorant sa précision et ses réflexes.",
    level: '4',
    damage: '',
    alliés:
      "+2 aux jets d'attaque sur les cibles marquées et +2 CA contre les attaques d'ennemis marqués",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de SAG] tours',
    voie: 'chasseur-de-prime', // Correspond au slug de la voie
  },
  {
    slug: 'nuéé-chimérique',
    name: 'Nuée Chimérique',
    description:
      'Une horde de petites créatures mutantes est libérée, semant le chaos et infligeant des dégâts à tous les ennemis dans une zone.',
    level: '4',
    damage: "2d6 DM au début de leur tour, s'ils restent dans la zone",
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: 'Une zone de 8 mètres de rayon à 3 mètres du Scientifique',
    duration: "[1 + Mod d'INT] tours",
    voie: 'biologiste-mutagène', // Correspond au slug de la voie
  },
  {
    slug: 'ombre-envahissante',
    name: 'Ombre Envahissante',
    description:
      "L'Assassin peut manipuler l'ombre pour englober une zone autour de lui, déstabilisant ses ennemis.",
    level: '4',
    damage: '3d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: "DEX ou -2 CA et aux jets d'attaques",
    range: '6 mètres autour de lui',
    duration: '',
    voie: 'maitre-des-ombres', // Correspond au slug de la voie
  },
  {
    slug: 'onde-de-choc-instable',
    name: 'Onde de Choc Instable',
    description:
      "Libère une vague d'énergie destabilisante dans une large zone, infligeant des dégâts tout en désorientant les ennemis.",
    level: '4',
    damage: '2d8 DM',
    alliés: 'Les alliés dans la zone subissent également les dégâts',
    ennemis:
      'Toute utilisation de magie ou capacité de focus est impossible dans la zone',
    sauvegarde: "DEX ou -2 aux jets d'attaques",
    range: "10 mètres autour d'un point visible",
    duration: "[1 + Mod d'INT] tours",
    voie: 'physicien-énergétique', // Correspond au slug de la voie
  },
  {
    slug: 'percée-tactique',
    name: 'Percée Tactique',
    description:
      'Le Mercenaire utilise son agilité pour traverser les lignes ennemies et attaquer une cible vulnérable.',
    level: '4',
    damage: '2d8 DM',
    alliés: "Se déplace jusqu'à 6 mètres ignorant les attaques d'opportunité",
    ennemis: '-2 CA pendant la durée si la cible est isolée',
    sauvegarde: '',
    range: 'Au contact',
    duration: '[Mod de FOR] tours',
    voie: 'ravageur', // Correspond au slug de la voie
  },
  {
    slug: 'réverbération-magique',
    name: 'Réverbération Magique',
    description: "Amplifie les effets d'un sort pour en maximiser l'impact.",
    level: '4',
    damage: '',
    alliés: "+4 DM sur la prochaine attaque de l'Arcaniste",
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: "Jusqu'à la fin du prochain tour de l'Arcaniste",
    voie: 'maitre-des-reflets', // Correspond au slug de la voie
  },
  {
    slug: 'salve-précise',
    name: 'Salve Précise',
    description:
      "Le Traqueur tire une rafale de projectiles soigneusement ajustés, visant plusieurs ennemis en succession rapide. Le Traqueur peut attaquer jusqu'à 3 cibles distinctes dans la zone.",
    level: '4',
    damage: '1d8 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '15 mètres',
    duration: '',
    voie: 'tireur-embusqué', // Correspond au slug de la voie
  },
  {
    slug: 'souffle-de-carnage',
    name: 'Souffle de Carnage',
    description:
      'Le Mercenaire entre dans un état frénétique, augmentant sa vitesse et sa force pour infliger des dégâts dévastateurs.',
    level: '4',
    damage: '',
    alliés: '+2 DM et +2 FOR',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de FOR] tours',
    voie: 'fléau-des-batailles', // Correspond au slug de la voie
  },
  {
    slug: 'surcharge-d-énergie',
    name: "Surcharge d'Energie",
    description:
      "L'Arcaniste libère une décharge d'énergie brute pour augmenter ses capacités physiques et magiques.",
    level: '4',
    damage: '',
    alliés: "+2 aux jets d'attaques magiques, +2 FOR et +2 DEX",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[1 + Mod d'INT] tours",
    voie: 'maitre-des-arcanes', // Correspond au slug de la voie
  },
  {
    slug: 'transmutation-avancée',
    name: 'Transmutation Avancée',
    description:
      "Le Scientifique manipule un objet non-magique pour en faire un outil ou une arme temporairement améliorée. Choisir l'un des effets suivants : ",
    level: '4',
    effet1:
      "Transformation Offensive : L'objet devient une arme imporvisée qui inflige 1d8 DM ainsi qu'un bonus de +1 aux jets d'attaques",
    effet2:
      "Transformation Défensive : L'objet devient une armure donnant +2 CA",
    effet3:
      "Transformation Utilitaire : L'objet devient alchimique et donne un avantage aux 4 prochains jets",
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: "[Mod d'INT] tours",
    voie: 'transmutateur-visionnaire', // Correspond au slug de la voie
  },

  {
    slug: 'abomination',
    name: 'Abomination',
    description:
      'Le Scientifique fusionne plusieurs de ses créations mutantes (2 au minimum) pour engendrer une abomination massive, instable et redoutable, qui agit de manière autonome et chaotique.',
    level: '5',
    damage: '3d8 DM',
    alliés: 'La créature a [12 x Niveau] PV',
    ennemis:
      'Si elle tombe à 0 PV ou après la fin de la durée, elle explose dans une détonation toxique et inflige 3d6 DM (aux alliés aussi)',
    sauvegarde: '',
    range: '2 mètres des créatures à fusionner',
    duration: "[1 + Mod d'INT] tours",
    voie: 'biologiste-mutagène', // Correspond au slug de la voie
  },
  {
    slug: 'alpha-implacable',
    name: 'Alpha Implacable',
    description:
      'Un compagnon devient une bête alpha imposante pour combattre à ses côtés et semer le chaos parmi ses ennemis.',
    level: '5',
    damage: '4d8 DM',
    alliés: 'Le compagnon a maintenant [50 + 5 x Niveau] PV',
    ennemis: '',
    sauvegarde: '',
    range:
      'Le compagnon doit être à 5 mètres du Traqueur et attaque immédiatement un cible à 10 mètres',
    duration: "[1 + Mod de SAG] tours ou jusqu'à sa mort",
    voie: 'maitre-des-bêtes', // Correspond au slug de la voie
  },
  {
    slug: 'assassin-parfait',
    name: 'Assassin Parfait',
    description:
      "L'Assassin se déploie dans l'ombre avec une maîtrise totale, exécutant une série de frappes mortelles.",
    level: '5',
    damage: '4d8 DM',
    alliés:
      "L'Assassin peut se déplacer de 5 mètres après l'attaque. Si la cible meurt, l'Assassin peut relancer cette compétence au prochain tour (à condition de réussir l'attaque)",
    ennemis: '',
    sauvegarde: '',
    range: '10 mètres',
    duration: '',
    voie: 'maitre-des-ombres', // Correspond au slug de la voie
  },
  {
    slug: 'avatar-de-la-bête',
    name: 'Avatar de la Bête',
    description:
      "Le Mercenaire canalise l'énergie d'une bête intérieure augmentant sa force et sa brutalité pour anéantir ses ennemis.",
    level: '5',
    damage: '1d6 aux ennemis adjacents à la cible',
    alliés: '+2 DM, -5 DM subis par une attaque ennemie',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '[1 + Mod de CON] tours',
    voie: 'briseur', // Correspond au slug de la voie
  },
  {
    slug: 'cascade-lumineuse',
    name: 'Cascade Lumineuse',
    description:
      'Une vague de lumière magique déferle sur une large zone, infligeant des dégâts importants à tous les ennemis et renforçant temporairement les alliés.',
    level: '5',
    damage: '4d8 DM',
    alliés: "2d6 PV et +2 aux jets d'attaque",
    ennemis: '',
    sauvegarde: '',
    range: 'Un cône de 10 mètres',
    duration: "Jusqu'au prochain tour",
    voie: 'maitre-des-reflets', // Correspond au slug de la voie
  },
  {
    slug: 'catastrophe-chimique',
    name: 'Catastrophe Chimique',
    description:
      "Le Scientifique libère un mélange extrêmement toxique, saturant l'air et rendant l'environnement inhospitalier pour tous les ennemis.",
    level: '5',
    damage: '4d8 DM puis 2d6 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: 'CON ou -2 FOR et -2 DEX',
    range: "12 mètres autour d'un point visible",
    duration: "[1 + Mod d'INT] tours",
    voie: 'chimiste-toxique', // Correspond au slug de la voie
  },
  {
    slug: 'coup-fatal',
    name: 'Coup Fatal',
    description:
      'Le Traqueur canalise toute sa concentration dans une attaque ultime destinée à abattre sa cible.',
    level: '5',
    damage: '4d8 DM + 2d6 DM si la cible est marquée',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '15 mètres',
    duration: '',
    voie: 'chasseur-de-prime', // Correspond au slug de la voie
  },
  {
    slug: 'danse-de-guerre',
    name: 'Danse de Guerre',
    description:
      'Le Mercenaire entre dans un état de combat frénétique, se déplaçant rapidement entre plusieurs cibles pour infliger des dégâts dévastateurs.',
    level: '5',
    damage: '3d8 DM',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range:
      "Jusqu'à 3 cibles dans un rayon de 10 mètres se déplaçant de 3 mètres entre chaque",
    duration: '',
    voie: 'ravageur', // Correspond au slug de la voie
  },
  {
    slug: 'dévastation-de-masse',
    name: 'Dévastation de Masse',
    description:
      'Le Mercenaire libère toute sa puissance dans une attaque massive, brisant les lignes ennemis en un seul coup.',
    level: '5',
    damage: '4d10 DM',
    alliés: '',
    ennemis: '-2 CA pendant toute la durée',
    sauvegarde: '',
    range: 'Un cône de 6 mètres',
    duration: '[1 + Mod de FOR] tours',
    voie: 'frappeur-des-lignes', // Correspond au slug de la voie
  },
  {
    slug: 'élimination-parfaite',
    name: 'Elimination Parfaite',
    description:
      "L'Assassin exploite à la perfection les faiblesses de son adversaire, infligeant un coup fatal et drainant son énergie vitale.",
    level: '5',
    damage: '4d10 DM',
    alliés: 'Regagne 3d8 PV si la cible est éliminée par cette attaque',
    ennemis: '',
    sauvegarde: '',
    range: '8 mètres',
    duration: '',
    voie: 'faucheur', // Correspond au slug de la voie
  },
  {
    slug: 'esprit-sylvestre',
    name: 'Esprit Sylvestre',
    description:
      "Le Traqueur invoque une entité protectrice imprégnée de l'essence de la forêt pour attaquer ses ennemis et renforcer ses alliés.",
    level: '5',
    damage: '',
    alliés: 'Regagnent 3d6 PV',
    ennemis: '2d8 DM pour les ennemis dans le rayon',
    sauvegarde: '',
    range: "10 mètres pour l'entité",
    duration: '[2 + Mod de SAG] tours',
    voie: 'marcheur-sylvestre', // Correspond au slug de la voie
  },
  {
    slug: 'exécution-silencieuse',
    name: 'Exécution Silencieuse',
    description:
      "L'Assassin exécute une attaque parfaite et mortelle utilisant sa lame avec une précision fatale.",
    level: '5',
    damage: '4d8 DM',
    alliés: "Si la cible est éliminée par l'attaque, l'Assassin regagne 2d6 PV",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: '',
    voie: 'lames-silencieuses', // Correspond au slug de la voie
  },
  {
    slug: 'frappe-de-la-fureur',
    name: 'Frappe de la Fureur',
    description:
      'Canalise toute la rage accumulée en une attaque dévastatrice qui écrase tout sur son passage.',
    level: '5',
    damage: '4d10 DM',
    alliés: '',
    ennemis:
      "Toutes les cibles dans un rayon de 3 mètres de la première subissent 2d8 DM à cause de l'onde de choc générée par l'attaque",
    sauvegarde: '',
    range: '',
    duration: '10 mètres',
    voie: 'berserker', // Correspond au slug de la voie
  },
  {
    slug: 'jugement-sanglant',
    name: 'Jugement Sanglant',
    description:
      'Le Mercenaire libère toute sa rage et sa puissance dans une attaque massive qui frappe tous les ennemis à portée.',
    level: '5',
    damage: '4d10 DM à toutes les cibles dans la zone',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '',
    duration: '5 mètres autour de lui',
    voie: 'fléau-des-batailles', // Correspond au slug de la voie
  },
  {
    slug: 'maîtrise-de-la-traque',
    name: 'Maîtrise de la Traque',
    description:
      "Le Traqueur concentre toute son énergie sur une cible spécifique, augmentant l'efficacité de ses attaques.",
    level: '5',
    damage:
      '1d8 supplémentaire pour chaque attaque du Traqueur réussie sur cette cible',
    alliés: '+2 DEX contre la cible désignée',
    ennemis: '',
    sauvegarde: '',
    range: '20 mètres',
    duration: '',
    voie: 'éclaireur-implacable', // Correspond au slug de la voie
  },
  {
    slug: 'métamorphose-suprême',
    name: 'Métamorphose Suprême',
    description:
      "Cette capacité permet de modifier radicalement les capacités d'un allié ou de lui-même.",
    level: '5',
    damage: '',
    alliés: "+3 aux jets d'attaque, +3 CA et regagne 3d6 PV",
    ennemis: '',
    sauvegarde: '',
    range: 'Au contact',
    duration: "[Mod d'INT] tours",
    voie: 'transmutateur-visionnaire', // Correspond au slug de la voie
  },
  {
    slug: 'nexus-d-énergie',
    name: "Nexus d'Energie",
    description:
      "Le Scientifique utilise une source d'énergie pure et massive pour générer des effets dévastateurs ou protecteurs selon les besoins. Choisir l'un des effets suivants : ",
    level: '5',
    effet1:
      'Explosion Energétique : 3d10 DM et repousse les ennemis de 5 mètres',
    effet2:
      'Barrière Régénératrice : réduit les dégâts subit par des alliés de moitié et leur fait gagner 2d6 PV',
    damage: '',
    alliés: '',
    ennemis: '',
    sauvegarde: '',
    range: '12 mètres / Au contact',
    duration: '1 tour',
    voie: 'physicien-énergétique', // Correspond au slug de la voie
  },
  {
    slug: 'orbe-d-annihilation',
    name: "Orbe d'Annihilation",
    description:
      "L'Arcaniste canalise une immense quantité d'énergie magique dans une sphère destructrice.",
    level: '5',
    damage: '4d10 DM',
    alliés: '',
    ennemis:
      "Si l'attaque touche, tous les ennemis dans un rayon de 3 mètres subissent 2d6 DM en raison de l'explosion d'énergie résiduelle",
    sauvegarde: '',
    range: '20 mètres',
    duration: '',
    voie: 'maitre-des-arcanes', // Correspond au slug de la voie
  },
  {
    slug: 'réacteur-alchimique',
    name: 'Réacteur Alchimique',
    description:
      'Le Scientifique libère un réacteur, aidant les alliés et affaiblissant les ennemis.',
    level: '5',
    damage: '',
    alliés:
      'Les alliés dans la zone, regagnent chaque tours 2d6 PV et ont +2 à tous leurs jets',
    ennemis: 'Les ennemis dans la zone subissent chaque tours 1d6 DM et -2 CA',
    sauvegarde: '',
    range:
      "12 mètres autour de lui / Le réacteur a une portée d'un rayon de 10 mètres",
    duration: "[2 + Mod d'INT] tours",
    voie: 'inventeur-chimiste', // Correspond au slug de la voie
  },
  {
    slug: 'rune-suprême',
    name: 'Rune Suprême',
    description:
      "Une rune colossale gravée dans l'air ou sur le sol qui libère une explosion dévastatrice d'énergie pure. L'Arcaniste prend 1 tour pour graver la rune.",
    level: '5',
    damage: '4d8 DM',
    alliés: 'Les lliés dans la zone gagnent +2 CA',
    ennemis: '',
    sauvegarde: '',
    range: 'Une zone de 10 mètres de rayon dans un rayon de 15 mètres',
    duration: '2 tours',
    voie: 'graveur-de-runes', // Correspond au slug de la voie
  },
  {
    slug: 'sphère-d-énergie',
    name: "Sphère d'Energie",
    description:
      "Une sphère massive d'éther concentré est projetée pour infliger des dégâts dévastateurs.",
    level: '5',
    damage: '3d10 DM',
    alliés: '',
    ennemis:
      "En raison de l'onde de choc, tous les ennemis dans un rayon de 3 mètres de l'attaque subissent 2d6 DM",
    sauvegarde: '',
    range: '20 mètres',
    duration: '',
    voie: 'catalyseur-d-éther', // Correspond au slug de la voie
  },
  {
    slug: 'tempête-élémentaire',
    name: 'Tempête Elémentaire',
    description:
      "L'Arcaniste déchaîne une tempête de pluie et d'orage d'énergie élémentaire, combinant plusieurs forces naturelles pour une attaque dévastatrice.",
    level: '5',
    damage: '4d8 DM',
    alliés: 'Dans la zone, ils bénéficient de +3 DM',
    ennemis: '',
    sauvegarde: '',
    range: "10 mètres autour d'un point visible",
    duration: "Jusqu'au prochain tour",
    voie: 'géomancien-élémentaire', // Correspond au slug de la voie
  },
  {
    slug: 'tir-mortel',
    name: 'Tir Mortel',
    description:
      "Une attaque dévastatrice qui cible une zone précise, infligeant des dégâts massifs à un groupe d'ennemis.",
    level: '5',
    damage: '4d10 DM',
    alliés: '',
    ennemis: "-2 au prochain jet d'attaque",
    sauvegarde: '',
    range: '',
    duration: 'Une zone de 5 mètres à une distance de 20 mètres',
    voie: 'tireur-embusqué', // Correspond au slug de la voie
  },
  // Ajoutez d'autres compétences...
];
