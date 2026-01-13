export const eastAfricaCountries = [
  {
    id: 'kenya',
    name: 'Kenya',
    capital: 'Nairobi',
    description: "Le Kenya est la destination safari par excellence ! Du Masai Mara mondialement célèbre aux plages de Diani, des sommets du Mont Kenya aux lacs de la Vallée du Rift, le pays offre une diversité naturelle exceptionnelle. La culture Maasaï et Swahili enrichit l'expérience.",
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
    flag: '🇰🇪',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Anglais', 'Swahili'],
    currency: 'Shilling kenyan (KES)',
    bestTimeToVisit: 'Juillet à Octobre (Grande Migration)',
    highlights: ['Masai Mara', 'Mont Kenya', 'Lac Nakuru', 'Plages de Mombasa', 'Laikipia'],
    regions: [
      {
        id: 'nairobi',
        name: 'Nairobi',
        description: "Capitale dynamique, Nairobi est la seule ville au monde avec un parc national en son sein. Les orphelinats d'éléphants et de girafes, les musées et la vie nocturne en font une métropole africaine incontournable.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Nairobi National Park', 'Sheldrick Elephant Orphanage', 'Giraffe Centre', 'Karen Blixen Museum', 'Marché Maasaï'],
        activities: ['Safari urbain', 'Orphelinat éléphants', 'Musées', 'Shopping artisanal', 'Visite culturelle'],
        gastronomy: ['Nyama choma', 'Ugali', 'Sukuma wiki', 'Mandazi', 'Samaki wa kupaka'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Uber, Taxi, Matatu (bus local)',
          accommodation: ['Giraffe Manor', 'Hemingways Nairobi', 'Villa Rosa Kempinski', 'Tribe Hotel']
        }
      },
      {
        id: 'masai-mara',
        name: 'Réserve Nationale du Masai Mara',
        description: "Le Masai Mara est le joyau du Kenya. La Grande Migration (juillet-octobre) voit des millions de gnous traverser la rivière Mara. Lions, léopards, guépards et la culture Maasaï font du Mara une destination mythique.",
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800',
        highlights: ['Grande Migration', 'Big Five', 'Rivière Mara', 'Villages Maasaï authentiques', 'Mara Triangle'],
        activities: ['Safari game drive', 'Vol en montgolfière', 'Visite culture Maasaï', 'Photographie animalière', 'Safari nocturne'],
        gastronomy: ['Cuisine de lodge', 'BBQ bush', 'Dîners sous les étoiles', 'Thé de l\'après-safari'],
        practicalInfo: {
          bestTime: 'Juillet à Octobre (Migration) / Janvier à Mars',
          transport: 'Vol charter depuis Nairobi (1h) ou route (5-6h)',
          accommodation: ['Governors\' Camp', 'Angama Mara', 'Mara Serena', 'Sand River Camp']
        }
      },
      {
        id: 'amboseli',
        name: 'Parc National d\'Amboseli',
        description: "Au pied du Kilimandjaro, Amboseli offre les plus belles vues sur le toit de l'Afrique. Les grands troupeaux d'éléphants marchant devant la montagne enneigée créent des images iconiques.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Vue panoramique sur le Kilimandjaro', 'Grands troupeaux d\'éléphants', 'Lac asséché d\'Amboseli', 'Observation des oiseaux'],
        activities: ['Safari game drive', 'Photographie', 'Observation oiseaux (400+ espèces)', 'Culture Maasaï'],
        gastronomy: ['Cuisine de lodge avec produits locaux'],
        practicalInfo: {
          bestTime: 'Juin à Octobre / Janvier à Février (vue dégagée)',
          transport: 'Route depuis Nairobi (4-5h) ou vol domestique',
          accommodation: ['Tortilis Camp', 'Amboseli Serena', 'Ol Tukai Lodge', 'Satao Elerai']
        }
      },
      {
        id: 'cote-kenyane',
        name: 'Côte Kényane',
        description: "La côte kenyane offre des plages de sable blanc et une culture swahili millénaire. Mombasa, avec son fort et sa vieille ville, et les plages de Diani et Malindi combinent histoire, détente et aventures sous-marines.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Vieille ville de Mombasa', 'Fort Jesus (UNESCO)', 'Plage de Diani', 'Lamu', 'Réserve marine de Watamu'],
        activities: ['Plongée et snorkeling', 'Histoire swahili', 'Voile en dhow traditionnel', 'Kitesurf', 'Observation des tortues'],
        gastronomy: ['Biryani', 'Mishkaki (brochettes)', 'Poisson grillé au coco', 'Madafu (noix de coco fraîche)', 'Pilau'],
        practicalInfo: {
          bestTime: 'Octobre à Mars',
          transport: 'Vol depuis Nairobi, SGR (train moderne) ou route',
          accommodation: ['Leopard Beach Resort', 'Almanara Luxury Villas', 'Diani Reef', 'Hemingways Watamu']
        }
      },
      {
        id: 'mont-kenya',
        name: 'Région du Mont Kenya',
        description: "Le Mont Kenya, deuxième plus haut sommet d'Afrique, offre des paysages alpins uniques. Les contreforts de la montagne sont parsemés de lodges luxueux, de plantations de thé et de café, et de sentiers de randonnée spectaculaires.",
        image: 'https://images.unsplash.com/photo-1517299321609-7a2c62913bad?w=800',
        highlights: ['Sommet du Mont Kenya (Batian)', 'Parc National du Mont Kenya', 'Plantations de thé de Nyeri', 'Sanctuaire de la rivière Sagana'],
        activities: ['Trekking et alpinisme', 'Observation de la faune', 'Visite de plantations', 'Pêche à la truite', 'Cyclisme'],
        gastronomy: ['Produits fermiers locaux', 'Thé et café de la région', 'Cuisine internationale dans les lodges'],
        practicalInfo: {
          bestTime: 'Janvier à Mars et Juillet à Octobre (pour le trek)',
          transport: 'Route depuis Nairobi (3-4h)',
          accommodation: ['Fairmont Mount Kenya Safari Club', 'Serena Mountain Lodge', 'The Ark Lodge']
        }
      }
    ],
    gastronomy: {
      dishes: ['Nyama choma (viande grillée)', 'Ugali (semoule de maïs)', 'Sukuma wiki (légumes sautés)', 'Pilau (riz épicé)', 'Chapati (galette)', 'Githeri (ragoût de maïs et haricots)'],
      description: "La cuisine kenyane est un mélange savoureux de traditions africaines et d'influences indiennes et arabes de la côte. Le nyama choma (viande grillée) avec ugali est le plat national incontournable. La cuisine swahili de la côte, riche en épices et en noix de coco, est particulièrement raffinée."
    },
    practicalInfo: {
      visa: 'eTA (Electronic Travel Authorization) obligatoire pour la plupart des nationalités, à obtenir en ligne avant le départ.',
      health: 'Vaccin fièvre jaune recommandé. Traitement antipaludéen fortement conseillé pour toutes les régions sauf Nairobi haute altitude. Eau potable limitée aux bouteilles capsulées.',
      safety: 'Pays généralement sûr pour les touristes. Vigilance normale recommandée dans les grandes villes. Éviter les zones frontalières avec la Somalie (Nord-Est).',
      transport: 'Aéroport international Jomo Kenyatta (NBO) et Moi (MBA). Excellent réseau de vols domestiques. Réseau routier correct sur les axes principaux, 4x4 recommandé pour les parcs.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Emma Johnson',
        country: 'Australie',
        rating: 5,
        text: "Voir la Grande Migration au Masai Mara est l'expérience d'une vie. Les traversées de la rivière Mara sont d'une intensité incroyable. Le Kenya m'a volé mon cœur.",
        date: '2024-09-15'
      },
      {
        id: '2',
        author: 'Thomas Laurent',
        country: 'France',
        rating: 5,
        text: "Le contraste entre les safaris dans la savane et la détente sur les plages de Diani est parfait. L'accueil des Kényans est d'une chaleur rare.",
        date: '2024-05-22'
      }
    ]
  },
  {
    id: 'tanzanie',
    name: 'Tanzanie',
    capital: 'Dodoma',
    description: "La Tanzanie offre les plus grands spectacles naturels d'Afrique. Le Serengeti et sa migration perpétuelle, le cratère du Ngorongoro, le Kilimandjaro et les plages de Zanzibar créent un concentré d'émerveillement. La culture swahili authentique ajoute une dimension humaine unique.",
    image: 'https://images.unsplash.com/photo-1536152471326-642d7460c6f3?w=800',
    flag: '🇹🇿',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Swahili', 'Anglais'],
    currency: 'Shilling tanzanien (TZS)',
    bestTimeToVisit: 'Juin à Octobre (saison sèche pour les safaris)',
    highlights: ['Serengeti', 'Cratère du Ngorongoro', 'Kilimandjaro', 'Zanzibar', 'Parc de Tarangire'],
    regions: [
      {
        id: 'northern-circuit',
        name: 'Circuit Nord (Serengeti & Ngorongoro)',
        description: "Le cœur battant du safari africain. Des plaines infinies du Serengeti, théâtre de la Grande Migration, au cratère intact du Ngorongoro, cette région offre la plus forte concentration de faune sauvage d'Afrique.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Grande Migration dans le Serengeti', 'Cratère du Ngorongoro (arché de Noé)', 'Parc National de Tarangire (éléphants & baobabs)', 'Manyara (lions grimpeurs)'],
        activities: ['Safari game drive', 'Safari en montgolfière au Serengeti', 'Marche guidée sur les crêtes du Ngorongoro', 'Visite culturelle Maasaï'],
        gastronomy: ['Déjeuner pique-nique en brousse', 'Cuisine des lodges de luxe', 'Produits frais des hauts plateaux'],
        practicalInfo: {
          bestTime: 'Juin-Octobre (sèche) / Janvier-Mars (mises bas)',
          transport: 'Vols charters depuis Arusha ou Kilimanjaro, ou safari en 4x4 avec chauffeur-guide',
          accommodation: ['Four Seasons Safari Lodge Serengeti', 'Singita Grumeti', 'Ngorongoro Crater Lodge', 'Lemala Camps']
        }
      },
      {
        id: 'kilimanjaro',
        name: 'Mont Kilimandjaro',
        description: "Le toit de l'Afrique (5 895 m) est le plus haut sommet du continent et l'une des 'Seven Summits'. L'ascension, exigeante mais accessible, traverse cinq zones climatiques, de la forêt tropicale aux neiges éternelles du glacier Furtwängler.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Sommet Uhuru Peak', 'Glaciers (en recul)', 'Porteurs et guides locaux expérimentés', 'Forêt de nuages', 'Vue depuis Shira Plateau'],
        activities: ['Ascension de 5 à 9 jours (routes Machame, Lemosho)', 'Randonnées d\'acclimatation', 'Photographie de paysages', 'Visite des villages Chagga'],
        gastronomy: ['Cuisine énergétique des camps (pâtes, soupes, fruits secs)', 'Thé et café locaux'],
        practicalInfo: {
          bestTime: 'Janvier à Mars et Juin à Octobre (moins de précipitations)',
          transport: 'Transfert depuis l\'aéroport de Kilimanjaro (JRO) vers Moshi ou Arusha',
          accommodation: ['Hôtels à Moshi/Arusha avant/après l\'ascension', 'Refuges et tentes sur la montagne']
        }
      },
      {
        id: 'zanzibar',
        name: 'Zanzibar',
        description: "L'île aux épices est un paradis tropical à l'histoire riche. Stone Town, classée UNESCO, mêle architectures arabe, persane, indienne et européenne. Les plages de sable blanc, les jardins d'épices et la culture swahili enchantent les visiteurs.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Stone Town (UNESCO) et son dédale de ruelles', 'Plages de Nungwi et Kendwa', 'Fermes aux épices', 'Prison Island (tortues géantes)', 'Forêt de Jozani (colobes rouges)'],
        activities: ['Plongée avec tuba sur les récifs', 'Visite historique de Stone Town', 'Excursion aux épices', 'Croisière au coucher du soleil en dhow', 'Kitesurf à Paje'],
        gastronomy: ['Zanzibari Mix (street food)', 'Pilau de fruits de mer', 'Urojo (soupe épicée)', 'Mandazi (beignets)', 'Café épicé'],
        practicalInfo: {
          bestTime: 'Juin à Octobre (sèche) / Décembre à Février (chaud)',
          transport: 'Vols depuis Dar es Salaam, Arusha ou internationaux vers ZNZ. Ferry depuis Dar.',
          accommodation: ['Park Hyatt Zanzibar', 'Baraza Resort & Spa', 'The Residence Zanzibar', 'Emerson Spice (boutique-hôtel)']
        }
      },
      {
        id: 'selous-ruaha',
        name: 'Sud Sauvage (Selous & Ruaha)',
        description: "Pour les amateurs de safari hors des sentiers battus. Les vastes réserves du Selous (Nyerere) et de Ruaha offrent une expérience de brousse plus exclusive et sauvage, avec des paysages spectaculaires et une faune abondante.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Rufiji River (Selous) et ses hippopotames', 'Grandes meutes de lycaons à Ruaha', 'Sources chaudes de Maji Moto', 'Safari à pied et en bateau'],
        activities: ['Safari en bateau sur la rivière', 'Safari à pied avec guide armé', 'Safari game drive classique', 'Observation des oiseaux spécialisés'],
        gastronomy: ['Cuisine de camp de brousse', 'Repas en plein air'],
        practicalInfo: {
          bestTime: 'Juin à Octobre',
          transport: 'Vol charter depuis Dar es Salaam ou Zanzibar',
          accommodation: ['Beho Beho Camp (Selous)', 'Jabali Ridge (Ruaha)', 'Sand Rivers Selous']
        }
      }
    ],
    gastronomy: {
      dishes: ['Ugali (base de la plupart des repas)', 'Nyama Choma (viante grillée)', 'Pilau (riz à la viande et épices)', 'Mishkaki (brochettes)', 'Chipsi Mayai (omelette-frites)'],
      description: "La cuisine tanzanienne est solide et réconfortante, à base de féculents. L'ugali (semoule de maïs) accompagne ragoûts de viande ou de légumes. La cuisine de Zanzibar, héritière des routes des épices, est un festival de saveurs (clou de girofle, cardamome, cannelle)."
    },
    practicalInfo: {
      visa: 'Visa à obtenir avant le voyage (e-visa recommandé) ou à l\'arrivée à l\'aéroport pour certaines nationalités.',
      health: 'Vaccin fièvre jaune obligatoire si provenance d\'un pays à risque. Traitement antipaludéen indispensable partout sauf Zanzibar ville. Recommandations standard pour l\'eau et la nourriture.',
      safety: 'Pays très sûr pour le tourisme. Respect et courtoisie sont la norme. Vigilance habituelle contre les pickpockets dans les marchés animés.',
      transport: 'Principaux aéroports : Dar es Salaam (DAR), Kilimanjaro (JRO), Zanzibar (ZNZ). Réseau de vols charters excellents pour les safaris. Transports publics (dala-dala) peu confortables pour les touristes.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Marco Rossi',
        country: 'Italie',
        rating: 5,
        text: "Descendre dans le cratère du Ngorongoro au petit matin et voir cette concentration incroyable d'animaux est un moment magique. Puis le farniente à Zanzibar pour récupérer... parfait !",
        date: '2024-07-20'
      }
    ]
  },
  {
    id: 'ouganda',
    name: 'Ouganda',
    capital: 'Kampala',
    description: "L'Ouganda, 'la Perle de l'Afrique', est un pays verdoyant aux paysages variés. Il est mondialement célèbre pour le trekking des gorilles de montagne et des chimpanzés, mais offre aussi la source du Nil, des safaris classiques et une culture chaleureuse.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇺🇬',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Anglais', 'Swahili', 'Luganda'],
    currency: 'Shilling ougandais (UGX)',
    bestTimeToVisit: 'Juin à Septembre et Décembre à Février (saisons les plus sèches)',
    highlights: ['Gorilles de Bwindi', 'Chimpanzés de Kibale', 'Source du Nil à Jinja', 'Parc National Queen Elizabeth', 'Murchison Falls'],
    regions: [
      {
        id: 'bwindi',
        name: 'Forêt Impénétrable de Bwindi (UNESCO)',
        description: "Cette forêt tropicale de montagne, classée au patrimoine mondial, abrite près de la moitié de la population mondiale de gorilles de montagne. Le trekking pour les observer est une expérience profondément émouvante et intense.",
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        highlights: ['Trekking des gorilles de montagne (permis requis)', 'Forêt primaire dense et biodiversité unique', 'Rencontre avec la communauté Batwa (Pygmées)', 'Oiseaux endémiques des Albertine Rift'],
        activities: ['Trekking guidé des gorilles (physiquement exigeant)', 'Promenades en forêt', 'Visites communautaires Batwa', 'Observation des oiseaux'],
        gastronomy: ['Cuisine simple et copieuse des lodges locaux', 'Fruits et légumes frais des collines'],
        practicalInfo: {
          bestTime: 'Juin à Septembre et Décembre à Février (pistes moins boueuses)',
          transport: 'Vol charter depuis Entebbe vers Kisoro ou Kihihi, ou longue route depuis Kampala (8-10h)',
          accommodation: ['Bwindi Lodge', 'Clouds Mountain Gorilla Lodge', 'Sanctuary Gorilla Forest Camp', 'Mahogany Springs']
        }
      },
      {
        id: 'kibale-queen',
        name: 'Kibale et Queen Elizabeth',
        description: "Le parc de Kibale est la capitale africaine des primates, avec la plus forte densité de chimpanzés. Le parc Queen Elizabeth, traversé par l'équateur, est célèbre pour ses lions grimpeurs aux arbres et la croisière sur le canal de Kazinga.",
        image: 'https://images.unsplash.com/photo-1536152471326-642d7460c6f3?w=800',
        highlights: ['Trekking des chimpanzés à Kibale (plus facile qu\'à Bwindi)', 'Lions arboricoles d\'Ishasha (Queen Elizabeth)', 'Croisière sur le canal de Kazinga (hippos, éléphants)', 'Gorge de Kyambura (chimpanzés de la vallée)'],
        activities: ['Trekking des chimpanzés', 'Safari game drive', 'Croisière sur la rivière', 'Marche dans la forêt tropicale de Kibale', 'Visite de cratères volcaniques'],
        gastronomy: ['Repas dans les lodges avec vue', 'Produits locaux'],
        practicalInfo: {
          bestTime: 'Juin à Septembre / Décembre à Février',
          transport: 'Route depuis Fort Portal (Kibale) ou Kasese (Queen). Vols charters possibles.',
          accommodation: ['Primate Lodge (Kibale)', 'Kyambura Gorge Lodge', 'Mweya Safari Lodge', 'Ishasha Wilderness Camp']
        }
      },
      {
        id: 'jinja-nile',
        name: 'Jinja et la Source du Nil',
        description: "Jinja, berceau du Nil Blanc, est la capitale africaine des sports d'aventure. C'est ici que le plus long fleuve du monde commence son périple jusqu'en Méditerranée. L'atmosphère est détendue et jeune.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Source historique du Nil Blanc', 'Rapides spectaculaires (Grade 5)', 'Bungee jumping au-dessus du Nil', 'Communauté indienne et architecture coloniale'],
        activities: ['Rafting en eaux vives (de classe mondiale)', 'Bungee jumping', 'Kayak, VTT, quad', 'Visite de la source', 'Croisière tranquille'],
        gastronomy: ['Cafés et restaurants internationaux', 'Street food', 'Cuisine indienne ougandaise'],
        practicalInfo: {
          bestTime: 'Toute l\'année (rafting meilleur en saison des pluies - plus d\'eau)',
          transport: 'Route facile depuis Kampala (1h30 - 2h)',
          accommodation: ['Wildwaters Lodge (île privée sur le Nil)', 'The Haven Jinja', 'Jinja Nile Resort']
        }
      }
    ],
    gastronomy: {
      dishes: ['Matooke (banane plantain cuite à la vapeur)', 'Rolex (omelette dans un chapati - street food)', 'Luwombo (viande ou poisson cuit à l\'étouffée dans des feuilles de bananier)', 'Posho (semoule de maïs)', 'Sauce aux arachides (groundnut sauce)'],
      description: "La cuisine ougandaise est généreuse et basée sur des ingrédients frais. Le matooke est l'aliment de base dans une grande partie du pays. Le 'Rolex' est le snack incontournable et délicieux. La viande (bœuf, chèvre, poulet) et les légumes feuilles (nakati, dodo) sont très présents."
    },
    practicalInfo: {
      visa: 'Visa requis. Le "East Africa Tourist Visa" (multi-entrée valable pour Ouganda, Kenya, Rwanda) est très avantageux si vous visitez plusieurs pays.',
      health: 'Vaccin fièvre jaune obligatoire. Traitement antipaludéen indispensable. Test COVID ou vaccination parfois requis.',
      safety: 'Pays sûr et peuple très accueillant. Éviter la région frontalière nord avec le Soudan du Sud et certaines zones à l\'est près du Kenya. Suivre les conseils des autorités et de votre lodge.',
      transport: 'Vols internationaux vers Entebbe (EBB). Routes principales bonnes, secondaires souvent en terre. Taxis-brousse (matatus) omniprésents mais peu confortables pour les longues distances. Vols domestiques limités.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Sophie Martin',
        country: 'Canada',
        rating: 5,
        text: "Regarder dans les yeux un gorille de montagne à Bwindi est une rencontre que je n'oublierai jamais. Une telle intelligence et sérénité. L'Ouganda est un pays magnifique et authentique.",
        date: '2024-08-10'
      }
    ]
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    capital: 'Kigali',
    description: "Le 'Pays des Mille Collines' a su se reconstruire avec une force incroyable après le génocide de 1994. Aujourd'hui, il est l'un des pays les plus propres, sûrs et bien organisés d'Afrique. Les gorilles de montagne des Volcans sont son trésor le plus précieux.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇷🇼',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Kinyarwanda', 'Français', 'Anglais', 'Swahili'],
    currency: 'Franc rwandais (RWF)',
    bestTimeToVisit: 'Juin à Septembre et Décembre à Février (saisons sèches - idéal pour le trek)',
    highlights: ['Gorilles des Volcans', 'Kigali moderne et propre', 'Lac Kivu serein', 'Forêt de Nyungwe (canopy walk)', 'Parc de l\'Akagera (safari)'],
    regions: [
      {
        id: 'volcanoes',
        name: 'Parc National des Volcans (Parc des Virunga)',
        description: "C'est ici que la légendaire Dian Fossey a étudié et protégé les gorilles. Le parc, fait de pics volcaniques luxuriants, offre le trekking des gorilles le plus accessible (proximité avec Kigali) et des paysages dignes du 'Royaume de Gorilles'.",
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        highlights: ['Trekking des gorilles de montagne', 'Tombe de Dian Fossey à Karisoke', 'Ascension des volcans Bisoke ou Karisimbi', 'Rencontre avec les singes dorés'],
        activities: ['Trekking des gorilles (permis très cher mais bien géré)', 'Randonnée sur les volcans', 'Visite du centre de recherche de Dian Fossey', 'Promenade culturelle chez les Iby\'iwacu'],
        gastronomy: ['Dîners gastronomiques dans les lodges de luxe', 'Produits du jardin'],
        practicalInfo: {
          bestTime: 'Juin à Septembre / Décembre à Février (moins de boue)',
          transport: 'Route depuis Kigali (2h30) jusqu\'à la base du parc. Transferts organisés par les lodges.',
          accommodation: ['Bisate Lodge (luxe exceptionnel)', 'Singita Kwitonda Lodge', 'One&Only Gorilla\'s Nest', 'Sabyinyo Silverback Lodge']
        }
      },
      {
        id: 'kigali',
        name: 'Kigali',
        description: "Capitale étonnamment propre, verte et organisée, souvent citée en exemple. Le Mémorial du Génocide de Gisozi est une visite essentielle et poignante pour comprendre le passé et le présent résilient du Rwanda. La scène culinaire et artistique est dynamique.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Mémorial du Génocide de Gisozi', 'Musée de l\'Environnement au Mont Kigali', 'Marché de Kimironko (coloré et animé)', 'Vue panoramique sur la ville depuis les collines'],
        activities: ['Visite des sites mémoriels et historiques', 'Shopping d\'artisanat de qualité (paniers, art)', 'Découverte de la scène café (excellent café rwandais)', 'Visite de projets sociaux et coopératives'],
        gastronomy: ['Brochettes rwandaises (mishikaki) omniprésentes', 'Cuisine fusion internationale', 'Café et thé de spécialité'],
        practicalInfo: {
          bestTime: 'Toute l\'année (climat agréable sur les hauts plateaux)',
          transport: 'Véhicules privés avec chauffeur recommandés. Moto-taxis (taxi-moto) rapides et réglementés.',
          accommodation: ['Kigali Marriott Hotel', 'The Retreat by Heaven', 'Radisson Blu Hotel & Convention Centre']
        }
      },
      {
        id: 'lake-kivu',
        name: 'Lac Kivu',
        description: "L'un des Grands Lacs d'Afrique, mais unique car dépourvu d'hippopotames et de crocodiles, ce qui le rend propice à la baignade. Son rivage découpé et montagneux est parsemé de villes tranquilles comme Rubavu (Gisenyi) et Karongi (Kibuye).",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Promenade le long de la \'Corniche\' à Rubavu', 'Île de Napoléon (Amahoro) aux singes', 'Monastère de Bethléem à Kibuye', 'Couchers de soleil magnifiques'],
        activities: ['Baignade', 'Kayak sur le lac calme', 'Cyclotourisme le long des rives', 'Excursion en bateau vers les îles', 'Randonnée dans les collines environnantes'],
        gastronomy: ['Poisson frais du lac (tilapia, sambaza) grillé', 'Cuisine simple des guesthouses'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Route pittoresque depuis Kigali (3-4h). Transport public (bus) disponible.',
          accommodation: ['Lake Kivu Serena Hotel', 'Cormoran Lodge (Kibuye)', 'Paradise Malahide (île privée)']
        }
      }
    ],
    gastronomy: {
      dishes: ['Brochettes (mishikaki) de bœuf, chèvre ou poisson', 'Isombe (feuilles de manioc pilées avec de la pâte d\'arachide)', 'Ugali (ici appelé bugali)', 'Poisson tilapia du lac Kivu grillé entier'],
      description: "La cuisine rwandaise traditionnelle est simple, nourrissante et basée sur des produits locaux : haricots, bananes, patates douces, manioc. Les brochettes grillées sont le plat de rue et de restaurant le plus courant. Kigali propose une scène gastronomique internationale en plein essor."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée disponible pour de nombreuses nationalités. Le "East Africa Tourist Visa" est également valable.',
      health: 'Vaccin fièvre jaune requis. Paludisme présent à basse altitude (lac Kivu, parcs). Kigali est en altitude et moins à risque. Eau en bouteille recommandée.',
      safety: 'L\'un des pays les plus sûrs d\'Afrique, voire du monde, pour les touristes. Propreté exemplaire (interdiction des sacs plastiques).',
      transport: 'Aéroport international de Kigali (KGL), moderne et bien connecté. Réseau routier en excellent état. Location de voiture avec chauffeur très recommandée.'
    },
    testimonials: [
      {
        id: '1',
        author: 'David Chen',
        country: 'États-Unis',
        rating: 5,
        text: "Le Rwanda défie tous les préjugés. Kigali est une capitale modèle. Et l'expérience avec les gorilles est tout simplement magique. Un pays qui inspire profondément.",
        date: '2024-04-18'
      }
    ]
  },
  {
    id: 'ethiopie',
    name: 'Éthiopie',
    capital: 'Addis-Abeba',
    description: "L'Éthiopie est un monde à part, une civilisation ancienne qui n'a jamais été colonisée. Elle séduit par son histoire unique (églises de Lalibela, royaume d'Axoum), ses paysages spectaculaires (Simien, Danakil), ses peuples de la vallée de l'Omo et sa cuisine et son café incomparables.",
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    flag: '🇪🇹',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Amharique', 'Oromo', 'Tigrinya', 'Anglais (tourisme)'],
    currency: 'Birr éthiopien (ETB) - espèces indispensables',
    bestTimeToVisit: 'Octobre à Mai (saison sèche principale). Éviter Juillet-Août (grandes pluies).',
    highlights: ['Églises rupestres de Lalibela', 'Châteaux de Gondar', 'Vallée de l\'Omo (tribus)', 'Montagnes du Simien (trek)', 'Addis-Abeba (musées, cuisine)'],
    regions: [
      {
        id: 'historical-north',
        name: 'Circuit Historique du Nord',
        description: "Le berceau de la civilisation éthiopienne chrétienne. Un voyage dans le temps à travers les églises monolithiques creusées dans la roche, les châteaux médiévaux et les stèles antiques.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Lalibela : 11 églises monolithiques (13ème s.)', 'Gondar : \'Le Camelot de l\'Afrique\' (châteaux du 17ème s.)', 'Axoum : ancienne capitale, stèles géantes, Arche d\'Alliance', 'Bahir Dar : monastères du lac Tana, chutes du Nil Bleu'],
        activities: ['Visite des sites religieux et historiques', 'Croisière sur le lac Tana pour voir les monastères', 'Randonnée vers les chutes du Nil Bleu', 'Assister à une cérémonie religieuse orthodoxe'],
        gastronomy: ['Injera (base de tous les repas) avec divers wot (ragoûts)', 'Café cérémoniel', 'Tej (hydromel local)'],
        practicalInfo: {
          bestTime: 'Octobre à Mars',
          transport: 'Vols domestiques essentiels entre Addis, Lalibela, Gondar, Axoum. Taxis locaux sur place.',
          accommodation: ['Maribela Hotel (Lalibela)', 'Goha Hotel (Gondar - vue)', 'Sabean Hotel (Axoum)', 'Kuriftu Resort (Bahir Dar)']
        }
      },
      {
        id: 'simien-mountains',
        name: 'Parc National du Simien (UNESCO)',
        description: "Paysages spectaculaires de montagnes érodées, de profondes gorges et de pics escarpés. 'Le toit de l\'Éthiopie' abrite des espèces endémiques emblématiques comme le babouin Gelada et le loup d'Abyssinie.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Ras Dashen (4 550 m - point culminant)', 'Troupeaux de babouins Gelada aux crinières dorées', 'Falaises vertigineuses et panoramas', 'Loup d\'Abyssinie (très rare à observer)'],
        activities: ['Trekking de plusieurs jours avec mules et cuisinier', 'Randonnées à la journée depuis les lodges', 'Observation de la faune endémique', 'Photographie de paysages grandioses'],
        gastronomy: ['Nourriture de camping préparée par l\'équipe de trek', 'Plats chauds et énergétiques'],
        practicalInfo: {
          bestTime: 'Octobre à Mars (jours cléments, nuits froides)',
          transport: 'Route depuis Gondar (2-3h) jusqu\'à Debark, entrée du parc. 4x4 nécessaire.',
          accommodation: ['Simien Lodge (le plus haut lodge d\'Afrique)', 'Limalimo Lodge (design et vue)', 'Camping pendant les treks']
        }
      },
      {
        id: 'omo-valley',
        name: 'Vallée de l\'Omo (Sud)',
        description: "Une des dernières régions d'Afrique où les peuples autochtones perpétuent des modes de vie et des traditions ancestraux. Un voyage ethnographique intense et fascinant, qui demande respect et préparation.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Tribus Mursi (plateaux labiaux)', 'Hamar (cérémonies de saut des taureaux)', 'Karo (peintures corporelles élaborées)', 'Marchés tribaux colorés (comme à Key Afer)'],
        activities: ['Visites de villages (toujours avec un guide local et autorisation)', 'Photographie culturelle (respectueuse, souvent payante)', 'Assister à un marché hebdomadaire', 'Navigation sur la rivière Omo'],
        gastronomy: ['Cuisine très basique (injera, sauce). Prévoir des snacks.', 'Eau uniquement en bouteille capsulée'],
        practicalInfo: {
          bestTime: 'Juin à Septembre et Décembre à Février (accès plus facile)',
          transport: 'Vol jusqu\'à Jinka ou Arba Minch, puis 4x4 indispensable avec chauffeur-guide expérimenté.',
          accommodation: ['Eco Omo Lodge', 'Buska Lodge', 'Kanta Lodge', 'Campements basiques']
        }
      }
    ],
    gastronomy: {
      dishes: ['Injera (grande crêpe spongieuse au teff, sert d\'assiette et de couvert)', 'Doro Wat (ragoût de poulet épicé, plat de fête)', 'Tibs (viande sautée avec épices)', 'Kitfo (viande de bœuf hachée crue assaisonnée)', 'Shiro (purée de pois chiches ou lentilles)'],
      description: "La cuisine éthiopienne est unique au monde, centrée autour de l'injera, une crêpe fermentée au goût acidulé, sur laquelle on sert des ragoûts (wot) et des légumes. Manger avec les mains (la droite) est la norme. La cérémonie du café, ritualisée, est un moment social incontournable."
    },
    practicalInfo: {
      visa: 'e-visa disponible en ligne pour la plupart des nationalités. Vérifier avant le départ.',
      health: 'Vaccin fièvre jaune obligatoire si provenance d\'une zone à risque. Paludisme présent dans les basses terres (Omo, lacs). Traitement antipaludéen recommandé. Mal d\'altitude possible dans le Simien.',
      safety: 'Situation variable. Le Nord historique, le Simien et Addis sont généralement stables. La région de l\'Omo nécessite une organisation solide. La région du Tigré est à éviter. TOUJOURS consulter les conseils aux voyageurs de son gouvernement avant de planifier.',
      transport: 'Principal hub : Aéroport d\'Addis-Abeba (ADD) avec Ethiopian Airlines. Vols domestiques très développés et essentiels pour gagner du temps. Réseau routier en amélioration mais longs trajets. Location de 4x4 avec chauffeur obligatoire pour la plupart des circuits.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Isabella Rossi',
        country: 'Italie',
        rating: 5,
        text: "Lalibela est un chef-d'œuvre de foi et d'architecture qui vous laisse sans voix. Et le café éthiopien est le meilleur du monde. Un pays d'une profondeur culturelle incroyable.",
        date: '2024-02-15'
      }
    ]
  },
  {
    id: 'madagascar',
    name: 'Madagascar',
    capital: 'Antananarivo',
    description: "La 'Grande Île', séparée du continent depuis 88 millions d'années, est un sanctuaire de biodiversité unique. C'est un monde à part peuplé de lémuriens, de baobabs iconiques, d'étranges formations karstiques (tsingy) et entouré de plages de rêve.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇲🇬',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Océan Indien)",
    languages: ['Malgache', 'Français'],
    currency: 'Ariary malgache (MGA)',
    bestTimeToVisit: 'Avril à Novembre (saison sèche). Décembre à Mars : chaud et cyclones possibles.',
    highlights: ['Allée des Baobabs', 'Parcs à lémuriens (Andasibe, etc.)', 'Tsingy de Bemaraha', 'Plages de Nosy Be et Île Sainte-Marie', 'Parc de l\'Isalo'],
    regions: [
      {
        id: 'centre',
        name: 'Centre - Antananarivo et Hautes Terres',
        description: "Antananarivo ('Tana'), capitale animée et colorée perchée sur douze collines. Les Hautes Terres offrent des paysages rizicoles en terrasses, des marchés artisanaux et l'accès aux forêts humides des lémuriens.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Palais de la Reine (Rova) à Tana', 'Marché artisanal d\'Andravoahangy', 'Parc d\'Andasibe-Mantadia (Indri Indri)', 'Ambositra (capitale de la marqueterie Zafimaniry - UNESCO)'],
        activities: ['Visite des sites historiques de Tana', 'Shopping d\'artisanat de qualité', 'Observation nocturne et diurne des lémuriens à Andasibe', 'Randonnée dans les forêts humides'],
        gastronomy: ['Romazava (ragoût de brèdes et viande)', 'Ravitoto (feuilles de manioc pilées au porc)', 'Varanga (fritons de zébu)', 'Rhum arrangé local'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Taxis-brousses bondés mais typiques. Véhicule privé avec chauffeur fortement recommandé pour les circuits.',
          accommodation: ['Hotel Carlton Madagascar (Tana)', 'Vakona Forest Lodge (Andasibe)', 'Relais des Plateaux (Antsirabe)']
        }
      },
      {
        id: 'ouest',
        name: 'Ouest - Baobabs et Tsingy',
        description: "La région de l'Ouest est célèbre pour ses paysages épiques de baobabs monumentaux et les formations karstiques déchiquetées des Tsingy, véritables cathédrales de calcaire.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Allée des Baobabs à Morondava (coucher de soleil mythique)', 'Tsingy de Bemaraha (UNESCO - paysage lunaire)', 'Réserve de Kirindy (fosa, lémuriens)'],
        activities: ['Photographie des baobabs à la lumière dorée', 'Randonnée et via ferrata dans les Tsingy', 'Safari nocturne dans la forêt sèche de Kirindy'],
        gastronomy: ['Poissons et fruits de mer frais', 'Cuisine simple de gargote (hotely)'],
        practicalInfo: {
          bestTime: 'Avril à Novembre (les Tsingy sont inaccessibles en saison des pluies)',
          transport: 'Route difficile et piste depuis Morondava pour les Tsingy. 4x4 obligatoire.',
          accommodation: ['Chez Maggie (Morondava)', 'Lodge des Terres Blanches (près des Tsingy)', 'Relais du Kirindy']
        }
      },
      {
        id: 'nord',
        name: 'Nord - Nosy Be et Archipels',
        description: "Nosy Be, 'l'île aux parfums', est la destination balnéaire la plus connue, entourée d'îlots paradisiaques (Nosy Komba, Nosy Tanikely, Nosy Iranja). Paradis pour la plongée et le farniente.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages de sable blanc de Madirokely et Andilana', 'Réserve marine de Nosy Tanikely (snorkeling)', 'Île de Nosy Komba (lémuriens Makis)', 'Plantations d\'ylang-ylang et de vanille'],
        activities: ['Plongée sous-marine (baleines de juillet à sept.)', 'Snorkeling avec tortues', 'Excursion en bateau dans les archipels', 'Observation des lémuriens', 'Dégustation de rhum arrangé'],
        gastronomy: ['Fruits de mer et poissons grillés (brochettes de crevettes)', 'Salade de poulpe', 'Rhum de la distillerie de Dzamandzar'],
        practicalInfo: {
          bestTime: 'Avril à Décembre (juillet-sept. pour les baleines)',
          transport: 'Vol direct depuis Tana vers Nosy Be (Fascene). Bateau-taxi pour les îles.',
          accommodation: ['Andilana Beach Resort', 'Ravintsara Wellness Hotel', 'Nosy Be Lodge']
        }
      }
    ],
    gastronomy: {
      dishes: ['Romazava (le plat national : ragoût de viande et brèdes)', 'Ravitoto sy hena-kisoa (feuilles de manioc pilées avec porc)', 'Mofo gasy (petits gâteaux de riz du petit-déjeuner)', 'Soupe chinoise malgache (soupe nouilles)'],
      description: "La cuisine malgache est à base de riz (vary), consommé à presque tous les repas, accompagné de 'laoka' (viande, poisson ou légumes en sauce). Les influences françaises, chinoises et indiennes sont perceptibles. Les fruits tropicaux sont délicieux et abondants. Le rhum arrangé (à la vanille, aux fruits) est la boisson typique."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée pour la plupart des touristes (environ 35€ pour 30 jours). Payer en euros.',
      health: 'Pas de vaccin obligatoire sauf fièvre jaune si provenance d\'une zone endémique. Paludisme présent partout (sauf haute altitude). Traitement antipaludéen indispensable. Bilharziose dans certaines eaux douces.',
      safety: 'Pays plutôt sûr mais pauvreté visible. Vols à la tire et agressions occasionnelles, surtout à Tana la nuit. Grande prudence recommandée, éviter de montrer des objets de valeur. La circulation est chaotique.',
      transport: 'Aéroport international d\'Ivato (Tana). Distances immenses à l\'intérieur du pays : les vols domestiques (Air Madagascar, Tsaradia) sont conseillés pour gagner du temps. Réseau routier très médiocre, les trajets sont longs et éprouvants.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Pierre Leclerc',
        country: 'France',
        rating: 5,
        text: "Voir les lémuriens sauter de branche en branche à Andasibe, puis se retrouver face aux baobabs géants de Morondava... Madagascar est un rêve de naturaliste. Un pays fatiguant à parcourir, mais chaque effort est récompensé.",
        date: '2024-06-05'
      }
    ]
  },
  {
    id: 'seychelles',
    name: 'Seychelles',
    capital: 'Victoria',
    description: "Archipel paradisiaque de 115 îles dans l'Océan Indien, célèbre pour ses plages de sable blanc parmi les plus belles du monde, ses rochers de granit spectaculaires et sa nature préservée. Une destination de luxe pour la lune de miel et l'écotourisme.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    flag: '🇸🇨',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Océan Indien)",
    languages: ['Seychellois (créole)', 'Anglais', 'Français'],
    currency: 'Roupie seychelloise (SCR)',
    bestTimeToVisit: 'Avril à Mai et Octobre à Novembre (périodes intermédiaires, moins de vent/pluie)',
    highlights: ['Plage d\'Anse Source d\'Argent (La Digue)', 'Vallée de Mai (UNESCO, coco de mer)', 'Parc marin de Sainte Anne', 'Île de Praslin', 'Plongée et snorkeling'],
    regions: [
      {
        id: 'mahe',
        name: 'Mahé',
        description: "L'île principale, montagneuse et verte, abrite la petite capitale Victoria et la majorité de la population. Elle concentre les infrastructures, mais aussi des plages magnifiques et des sentiers de randonnée dans le parc du Morne Seychellois.",
        image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800',
        highlights: ['Victoria (marché Sir Selwyn Clarke, Clock Tower)', 'Parc National du Morne Seychellois', 'Plages de Beau Vallon (animée) et Anse Intendance (sauvage)', 'Jardin botanique'],
        activities: ['Randonnée dans la forêt tropicale', 'Shopping et découverte du créole à Victoria', 'Snorkeling depuis les plages', 'Visite d\'une distillerie de rhum Takamaka'],
        gastronomy: ['Poisson grillé (bourgeois, capitaine)', 'Salade de palmiste (cœur de palmier)', 'Daube de chauve-souris (curieux!)', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Toute l\'année (éviter Juillet-Août si vent fort)',
          transport: 'Location de voiture recommandée (conduite à gauche!). Taxis chers.',
          accommodation: ['Four Seasons Resort Seychelles', 'MAIA Luxury Resort & Spa', 'Hilton Seychelles Northolme Resort']
        }
      },
      {
        id: 'praslin',
        name: 'Praslin et La Digue',
        description: "Praslin abrite la mystérieuse Vallée de Mai, forêt primitive où pousse le célèbre coco de mer. La Digue, accessible par bateau, est le cliché des Seychelles : vélos, charrettes à bœufs et l'iconique Anse Source d'Argent.",
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800',
        highlights: ['Vallée de Mai (UNESCO - forêt de coco de mer)', 'Anse Lazio (Praslin, plage classée)', 'Anse Source d\'Argent (La Digue, rochers de granit)', 'Réserve de l\'Union Estate (La Digue)'],
        activities: ['Visite de la Vallée de Mai', 'Vélo sur l\'île de La Digue', 'Plongée avec tuba à Coco Island', 'Observation des oiseaux endémiques (bulbul, veuve)'],
        gastronomy: ['Cuisine des lodges et petits restaurants', 'Poisson frais du jour'],
        practicalInfo: {
          bestTime: 'Avril à Novembre (mer calme pour les ferries)',
          transport: 'Ferry catamaran rapide depuis Mahé. Vélo ou charrette à bœufs à La Digue.',
          accommodation: ['Raffles Seychelles (Praslin)', 'Le Domaine de L\'Orangeraie (La Digue)', 'Château de Feuilles (Praslin)']
        }
      }
    ],
    gastronomy: {
      dishes: ['Poisson grillé ou en curry', 'Salade de palmiste (cœur de palmier)', 'Riz créole (avec tomate, oignon, épices)', 'Bouillon brède (soupe de légumes-feuilles)', 'Fruits à pain préparés de diverses façons'],
      description: "La cuisine seychelloise est un mélange créole savoureux, influencé par les cuisines africaine, française, indienne et chinoise. Le poisson et les fruits de mer sont rois, souvent préparés simplement grillés ou en curry épicé. Les fruits tropicaux (mangue, corossol, fruit de la passion) sont exquis."
    },
    practicalInfo: {
      visa: 'Aucun visa requis pour la plupart des nationalités pour un séjour touristique. Un permis de visiteur est délivré à l\'arrivée.',
      health: 'Aucun vaccin obligatoire. Pas de paludisme. Conditions sanitaires excellentes.',
      safety: 'Extrêmement sûr. Délit mineur très rare.',
      transport: 'Aéroport international de Mahé (SEZ). Ferries inter-îles (Cat Cocos) et avions de ligne domestiques (Air Seychelles) pour les autres îles. Location de voiture conseillée à Mahé et Praslin.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Sarah & James Wilson',
        country: 'Royaume-Uni',
        rating: 5,
        text: "Notre lune de miel aux Seychelles a été parfaite. Anse Source d'Argent est encore plus belle en vrai que sur les photos. Le luxe discret et la nature préservée font toute la différence.",
        date: '2024-01-30'
      }
    ]
  },
  {
    id: 'maurice',
    name: 'Île Maurice',
    capital: 'Port-Louis',
    description: "Île volcanique luxuriante entourée d'un lagon turquoise et protégée par une barrière de corail. Maurice combine plages de carte postale, activités nautiques, culture créole dynamique, histoire (Aapravasi Ghat) et une population multiculturelle accueillante.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇲🇺',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Océan Indien)",
    languages: ['Créole mauricien', 'Français', 'Anglais'],
    currency: 'Roupie mauricienne (MUR)',
    bestTimeToVisit: 'Mai à Décembre (hiver austral, frais et sec). Éviter Janvier à Mars (cyclones).',
    highlights: ['Plages de Flic-en-Flac et Trou aux Biches', 'Chamarel (terre des 7 couleurs, chutes)', 'Parc national des Gorges de la Rivière Noire', 'Port-Louis (marché central, champ de mars)'],
    regions: [
      {
        id: 'north-west',
        name: 'Nord-Ouest (Plages & Animations)',
        description: "Région la plus touristique, offrant les plus belles plages de sable blanc (Trou aux Biches, Mont Choisy) et une vie nocturne animée à Grand Baie. Idéale pour les familles et ceux qui aiment l'animation.",
        image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede3?w=800',
        highlights: ['Grand Baie (shopping, restaurants, bars)', 'Plage de Trou aux Biches (lagon peu profond)', 'Aquarium de Maurice', 'Jardin de Pamplemousses (nénuphars géants)'],
        activities: ['Sports nautiques (ski, wakeboard, parasailing)', 'Shopping', 'Sorties en bateau vers les îles du Nord (Coin de Mire)', 'Golf'],
        gastronomy: ['Restaurants internationaux et créoles', 'Dhodas (snacks créoles)', 'Alouda (boisson lactée)'],
        practicalInfo: {
          bestTime: 'Mai à Décembre',
          transport: 'Location de voiture, taxi ou bus local. Route côtière facile.',
          accommodation: ['The Oberoi Beach Resort', 'Trou aux Biches Beachcomber', 'Lux* Grand Gaube']
        }
      },
      {
        id: 'south-west',
        name: 'Sud-Ouest (Nature Sauvage & Culture)',
        description: "Côte plus sauvage et authentique, avec des paysages volcaniques spectaculaires, des falaises et une mer plus agitée. On y trouve le fameux 'Chamarel' et la capitale Port-Louis.",
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800',
        highlights: ['Chamarel (cascade et terre 7 couleurs)', 'Gorges de la Rivière Noire (point de vue)', 'Le Morne Brabant (UNESCO)', 'Port-Louis (marché central, Aapravasi Ghat - UNESCO)'],
        activities: ['Randonnée au Morne Brabant', 'Visite des domaines de rhum (Chamarel, St Aubin)', 'Découverte du patrimoine historique à Port-Louis', 'Observation des baleines (juillet-novembre)'],
        gastronomy: ['Cuisine créole authentique dans les \'snacks\'', 'Déjeuner dans une maison traditionnelle', 'Dégustation de rhum agricole'],
        practicalInfo: {
          bestTime: 'Toute l\'année (plus venteux de Juin à Septembre)',
          transport: 'Route de montagne sinueuse. Location de voiture recommandée.',
          accommodation: ['Lakaz Chamarel', 'Shanti Maurice', 'Résidence Peramal']
        }
      }
    ],
    gastronomy: {
      dishes: ['Rougaille (ragoût de tomates épicé avec saucisse, poisson ou œufs)', 'Carri (curry) de poulet, poisson ou oursins', 'Mine frit (nouilles sautées)', 'Gateaux piments (beignets de lentilles épicés)', 'Dholl puri (galette farcie)'],
      description: "La gastronomie mauricienne est un festival de saveurs, reflet de sa population multiculturelle : influences indiennes (currys), chinoises (mines frits), créoles (rougaille) et européennes. Le street food est excellent et très populaire."
    },
    practicalInfo: {
      visa: 'Aucun visa requis pour les séjours touristiques de moins de 90 jours pour la plupart des nationalités.',
      health: 'Aucun vaccin obligatoire. Paludisme éradiqué. Conditions sanitaires très bonnes.',
      safety: 'Très sûr. Petite délinquance occasionnelle dans les endroits très fréquentés de Port-Louis.',
      transport: 'Aéroport international Sir Seewoosagur Ramgoolam (MRU). Location de voiture très répandue et pratique (conduite à gauche!). Réseau de bus bon marché mais lent.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Jean Dupont',
        country: 'France',
        rating: 5,
        text: "Maurice, c'est bien plus que des plages. La randonnée au Morne, la découverte des rhumeries et la diversité des saveurs à chaque repas en font une destination complète et chaleureuse.",
        date: '2023-11-12'
      }
    ]
  },
  {
    id: 'djibouti',
    name: 'Djibouti',
    capital: 'Djibouti',
    description: "Petit pays stratégique à la croisée de la Mer Rouge et du Golfe d'Aden, Djibouti étonne par ses paysages extrêmes et minéraux. Entre le désert du Grand Bara, le lac Assal (point le plus bas d'Afrique) et les fonds marins exceptionnels, c'est une destination d'aventure et de plongée unique.",
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    flag: '🇩🇯',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Corne de l'Afrique)",
    languages: ['Français', 'Arabe', 'Somali', 'Afar'],
    currency: 'Franc de Djibouti (DJF) - indexé sur le USD',
    bestTimeToVisit: 'Octobre à Avril (moins chaud). Éviter Juin à Août (canicule).',
    highlights: ['Lac Assal (-155m, salé)', 'Lac Abbe (paysage surréaliste)', 'Golfe de Tadjourah (plongée avec les baleines)', 'Désert du Grand Bara', 'Marché de Djibouti-ville'],
    regions: [
      {
        id: 'lac-assal-abbe',
        name: 'Circuit des Lacs Extrêmes',
        description: "Un voyage dans des paysages lunaires et surréalistes. Le lac Assal, point le plus bas d'Afrique, est une étendue de sel blanc étincelante. Le lac Abbe, avec ses cheminées de calcaire, ressemble à une planète étrangère.",
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
        highlights: ['Lac Assal (croûte de sel, source chaude)', 'Lac Abbe (\'la porte de l\'enfer\', colonnes de calcaire)', 'Rencontre avec les nomades Afar', 'Vue sur le rift'],
        activities: ['Marche sur la croûte de sel', 'Photographie de paysages uniques', 'Campement bivouac près du lac Abbe', 'Observation des flamants roses'],
        gastronomy: ['Repas simple sous tente bédouine', 'Thé nomade', 'Poisson séché'],
        practicalInfo: {
          bestTime: 'Novembre à Février (températures supportables)',
          transport: '4x4 obligatoire avec chauffeur-guide. Convoi recommandé pour le lac Abbe.',
          accommodation: ['Campement Lac Assal (basique)', 'Campement étoilé à Lac Abbe', 'Hôtel à Tadjourah (étape)']
        }
      },
      {
        id: 'plongee-tadjourah',
        name: 'Golfe de Tadjourah - Plongée',
        description: "Les eaux de Djibouti sont parmi les plus poissonneuses au monde. Le golfe de Tadjourah est renommé pour la plongée avec les baleines à bosse (nov-janv) et la rencontre avec les requins baleines (oct-mai) dans un lagon protégé.",
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        highlights: ['Plongée avec les requins baleines', 'Observation des baleines à bosse (en surface)', 'Récifs coralliens préservés', 'Village de pêcheurs d\'Obock'],
        activities: ['Plongée sous-marine et snorkeling', 'Observation des cétacés en bateau', 'Kayak de mer', 'Rencontre avec les pêcheurs'],
        gastronomy: ['Poisson frais grillé (thons, mérous)', 'Fruits de mer', 'Riz à la djiboutienne'],
        practicalInfo: {
          bestTime: 'Octobre à Mai (requins baleines). Novembre à Janvier (baleines).',
          transport: 'Bateau depuis Tadjourah ou Doraleh (Djibouti-ville). Vol charter possible.',
          accommodation: ['Eco-lodge Les Sables Blancs (Moucha)', 'Hotel Safari à Tadjourah']
        }
      }
    ],
    gastronomy: {
      dishes: ['Skoudehkaris (ragoût de viande épicé avec riz)', 'Fah-fah (soupe de viande épaisse)', 'Lahoh (crêpe spongieuse)', 'Samboussa (beignet triangulaire farci)', 'Poisson et fruits de mer grillés'],
      description: "La cuisine djiboutienne est un mélange de saveurs somaliennes, afar, yéménites et françaises. Très épicée (berbéré), elle est basée sur la viande (chèvre, mouton), le riz et les pâtes. Le thé à la cardamome est la boisson sociale par excellence."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée disponible à l\'aéroport pour la plupart des nationalités.',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme présent. Traitement antipaludéen indispensable. Chaleur extrême : risque de déshydratation.',
      safety: 'Stabilité relative mais présence militaire étrangère importante. Éviter les zones frontalières avec l\'Érythrée et la Somalie. Suivre les conseils des autorités locales et de son guide.',
      transport: 'Aéroport international de Djibouti-Ambouli (JIB). Location de 4x4 avec chauffeur obligatoire pour tout voyage hors de la capitale. Taxis-bateaux pour les îles.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Alexandra B.',
        country: 'Belgique',
        rating: 4,
        text: "Djibouti, c'est l'aventure ! Nager avec un requin baleine était incroyable, et les paysages du lac Abbe sont d'un autre monde. Prévoir de l'eau et de la crème solaire !",
        date: '2024-03-08'
      }
    ]
  },
  {
    id: 'erythree',
    name: 'Érythrée',
    capital: 'Asmara',
    description: "Pays méconnu et fermé, l'Érythrée possède un patrimoine architectural Art Déco exceptionnel à Asmara (UNESCO) et des paysages variés allant des hauts plateaux aux îles désertiques de l'archipel de Dahlak. Le tourisme y est très limité et complexe.",
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    flag: '🇪🇷',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Corne de l'Afrique)",
    languages: ['Tigrinya', 'Arabe', 'Anglais', 'Italien (historique)'],
    currency: 'Nakfa érythréen (ERN)',
    bestTimeToVisit: 'Octobre à Avril (plus frais sur les hauts plateaux). Information à vérifier absolument avant tout projet.',
    highlights: ['Asmara (architecture Art Déco - UNESCO)', 'Archipel de Dahlak (plongée sur épaves)', 'Keren (marché historique)', 'Massawa (ville portuaire ottomane)'],
    regions: [
      {
        id: 'asmara',
        name: 'Asmara',
        description: "Capitale perchée à 2 300m, 'la petite Rome' d'Afrique est un musée à ciel ouvert d'architecture moderniste des années 1930 : cafés Art Déco, stations-service futuristes, cinémas. Une atmosphère figée dans le temps.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Cinéma Impero', 'Station-service Fiat Tagliero (style futuriste)', 'Marché principal', 'Cathédrale orthodoxe St Maryam', 'Anciens cafés italiens'],
        activities: ['Visite architecturale guidée', 'Flânerie dans les rues', 'Café dans un établissement historique'],
        gastronomy: ['Pasta (héritage italien)', 'Injera érythréenne (plus fine qu\'en Éthiopie)', 'Cappuccino dans les vieux cafés'],
        practicalInfo: {
          bestTime: 'Octobre à Avril',
          transport: 'Déplacements à pied pour le centre, taxi occasionnel.',
          accommodation: ['Hotel Albergo Italia (boutique historique)', 'Crystal Hotel', 'Asmara Palace Hotel']
        }
      }
    ],
    gastronomy: {
      dishes: ['Zigni (ragoût de bœuf épicé servi avec injera)', 'Tsebhi (ragoût en sauce)', 'Pasta (spaghetti, lasagne - héritage italien)', 'Fuul (purée de fèves)'],
      description: "La cuisine érythréenne est très similaire à celle de l'Éthiopie du Nord (Tigray), centrée sur l'injera et les ragoûts épicés. L'héritage de la colonisation italienne se manifeste par la présence de pâtes, de pizza et d'excellents cafés."
    },
    practicalInfo: {
      visa: 'Extrêmement difficile à obtenir. Nécessite une invitation d\'un contact local ou une agence agréée. Processus long et opaque.',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme présent dans les basses terres. Information à jour difficile à obtenir.',
      safety: 'Situation politique très fermée et répressive. Liberté de mouvement très restreinte pour les étrangers. Déconseillé formellement par la plupart des ministères des affaires étrangères.',
      transport: 'Aéroport international d\'Asmara (ASM). Déplacements intérieurs soumis à autorisation. Voyage uniquement avec un guide assigné par l\'État.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Un voyageur averti',
        country: 'Confidentiel',
        rating: 3,
        text: "Asmara est une capsule temporelle architecturale fascinante. Mais le voyage est contraignant, surveillé et moralement complexe compte tenu de la situation politique. Réservé aux explorateurs les plus endurcis et informés.",
        date: '2019-11-01'
      }
    ]
  },
  {
    id: 'somalie',
    name: 'Somalie / Somaliland',
    description: "La Somalie continentale est en proie à l'insécurité et déconseillée dans son ensemble. Le Somaliland, région auto-proclamée indépendante du Nord-Ouest, jouit d'une stabilité relative et commence à s'ouvrir au tourisme d'aventure extrême, attiré par ses peintures rupestres de Laas Geel et son histoire maritime.",
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    flag: '🇸🇴',
    capital: 'Mogadiscio (Somalie) / Hargeisa (Somaliland)',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Corne de l'Afrique)",
    languages: ['Somali', 'Arabe', 'Anglais'],
    currency: 'Shilling somalien (SOS) / Shilling du Somaliland (non reconnu)',
    bestTimeToVisit: 'Information non applicable - Déconseillé.',
    highlights: ['Somaliland : Sites de Laas Geel (peintures rupestres)', 'Somaliland : Berbera (port historique)', 'Somaliland : Paysages désertiques'],
    regions: [],
    gastronomy: {
      dishes: ['Canjeero (crêpe fermentée similaire au lahoh)', 'Bariis iskukaris (riz pilaf somali)', 'Maraq (soupe de viande)', 'Sambuusa (samoussa)'],
      description: "Cuisine somalie influencée par les traditions nomades, à base de viande (chèvre, mouton), de riz et de pâtes. Le canjeero est l'aliment de base. Le thé au gingembre est populaire."
    },
    practicalInfo: {
      visa: 'Somaliland : Visa délivré à l\'arrivée à Hargeisa. Somalie : Presque impossible et très dangereux.',
      health: 'Risques sanitaires extrêmes. Infrastructure médicale quasi-inexistante.',
      safety: 'Somalie : DANGER EXTRÊME. Enlèvements, attaques terroristes, guerre civile. DÉCONSEILLÉ FORMELLEMENT. Somaliland : Relativement stable mais précaire. Déplacements uniquement avec une sécurité armée et un fixer local.',
      transport: 'Somaliland : Vols depuis Djibouti ou Addis vers Hargeisa (HGA). Déplacements en 4x4 avec escortes.'
    },
    testimonials: []
  },
  {
    id: 'burundi',
    name: 'Burundi',
    capital: 'Gitega',
    description: "Petit pays enclavé des Grands Lacs, le Burundi cherche à se relever de décennies de conflits. Il offre les paysages verdoyants des 'milles collines', les rives du lac Tanganyika et une riche culture tambourinaire. Le tourisme y est encore balbutiant et nécessite une préparation minutieuse.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇧🇮',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Kirundi', 'Français'],
    currency: 'Franc burundais (BIF)',
    bestTimeToVisit: 'Juin à Septembre (saison sèche). Information à vérifier avant tout projet.',
    highlights: ['Lac Tanganyika (plages de Rumonge)', 'Réserve de la Rusizi (hippopotames, crocodiles)', 'Source du Nil (site historique à Rutovu)', 'Culture des tambours sacrés (Gishora)'],
    regions: [
      {
        id: 'bujumbura',
        name: 'Bujumbura et les Rives du Tanganyika',
        description: "Bujumbura, l'ancienne capitale, est située sur les rives du lac Tanganyika, le plus long et deuxième plus profond du monde. L'atmosphère est détendue malgré les difficultés du pays.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Promenade sur les bords du lac', 'Réserve naturelle de la Rusizi (delta)', 'Mausolée du Prince Louis Rwagasore', 'Marché central'],
        activities: ['Détente au bord du lac', 'Promenade en bateau sur la Rusizi', 'Observation des oiseaux', 'Visite du mausolée national'],
        gastronomy: ['Brochettes de poisson du lac (mukeke)', 'Frites de plantain', 'Bières locales (Primus, Amstel)'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxis en ville. Véhicule privé pour les excursions.',
          accommodation: ['Hotel Club du Lac Tanganyika', 'Sun Safari Hotel', 'Ubumwe Grande Hotel']
        }
      }
    ],
    gastronomy: {
      dishes: ['Brochettes de viande ou de poisson (Mishikaki)', 'Riz au haricots (Riz haricot)', 'Foufou (Ugali)', 'Légumes-feuilles (Isombe)'],
      description: "La cuisine burundaise est similaire à celle des pays voisins des Grands Lacs (Rwanda, Est RDC). Elle est basée sur les haricots, le riz, la banane plantain et la patate douce. Le poisson du lac Tanganyika est excellent."
    },
    practicalInfo: {
      visa: 'Visa requis, à demander avant le voyage. Processus parfois opaque.',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme très présent. Choléra récurrent. Conditions sanitaires précaires.',
      safety: 'Situation politique tendue et imprévisible. Manifestations parfois réprimées. DÉCONSEILLÉ par de nombreux gouvernements sauf raison impérative. Extrême prudence requise.',
      transport: 'Aéroport international de Bujumbura (BJM). Réseau routier médiocre. Déplacements limités le soir.'
    },
    testimonials: []
  },
  {
    id: 'soudan',
    name: 'Soudan',
    capital: 'Khartoum',
    description: "Le plus grand pays d'Afrique avant la sécession du Soudan du Sud, le Soudan possède un patrimoine archéologique immense et méconnu, avec plus de pyramides que l'Égypte (site de Méroé). Le désert de la Nubie et la culture arabo-africaine en font une destination unique pour les voyageurs avertis, malgré des défis politiques majeurs.",
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    flag: '🇸🇩',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Arabe', 'Anglais'],
    currency: 'Livre soudanaise (SDG)',
    bestTimeToVisit: 'Novembre à Février (températures supportables dans le désert). Sécurité à vérifier absolument.',
    highlights: ['Pyramides de Méroé (site napatéen)', 'Confluent des deux Nils à Khartoum', 'Temple de Soleb (Nubie)', 'Désert de la Nubie', 'Musée National de Khartoum'],
    regions: [
      {
        id: 'meroe-khartoum',
        name: 'Boucle du Nil - Méroé & Khartoum',
        description: "Au nord de Khartoum, le désert révèle les trésors du royaume de Koush : des dizaines de pyramides à forte pente sur le site de Méroé. Khartoum, au confluent du Nil Bleu et Blanc, est une ville africaine animée.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Site des pyramides de Méroé (lever/coucher de soleil)', 'Confluent des Nils Bleu et Blanc (Al-Mogran)', 'Musée National (stèles et temples sauvés des eaux d\'Assouan)', 'Marché d\'Omdurman (le plus grand du Soudan)'],
        activities: ['Visite des pyramides et tombes de Méroé', 'Assister à la cérémonie des Derviches tourneurs à Omdurman (vendredi)', 'Croisière au confluent', 'Photographie de paysages désertiques'],
        gastronomy: ['Foul medames (purée de fèves)', 'Kisra (pain plat à base de sorgho)', 'Shay (thé sucré servi en verre)', 'Agneau grillé'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Route depuis Khartoum (3-4h). 4x4 conseillé pour les sites désertiques. Guide local obligatoire.',
          accommodation: ['Meroe Tent Camp (camp de luxe face aux pyramides)', 'Acropole Hotel (Khartoum)', 'Al Salam Rotana Hotel (Khartoum)']
        }
      }
    ],
    gastronomy: {
      dishes: ['Ful Medames (plat national : fèves mijotées)', 'Gourrassa (grande galette de blé)', 'Mullah (ragoût de viande aux oignons et beurre de cacahuète)', 'Shakshouka (œufs dans une sauce tomate épicée)'],
      description: "La cuisine soudanaise est généreuse et partagée. Le ful (fèves) est le petit-déjeuner national. Les plats sont souvent accompagnés de gourrassa ou de kisra. L'influence arabe et africaine est palpable. Les jus de fruits frais (guava, mangue) sont excellents."
    },
    practicalInfo: {
      visa: 'Visa requis, à obtenir avant le voyage (e-visa disponible pour certaines nationalités). Processus assez simple.',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme présent. Conditions sanitaires précaires. Chaleur extrême.',
      safety: 'Conflit civil majeur en cours depuis Avril 2023. DANGER EXTRÊME. TOUS LES VOYAGES SONT FORMELLEMENT DÉCONSEILLÉS par les autorités internationales jusqu\'à nouvel ordre.',
      transport: 'Aéroport international de Khartoum (KRT) - fermé/ouvert selon l\'évolution du conflit. Déplacements extrêmement dangereux.'
    },
    testimonials: []
  }// ... (le code précédent reste inchangé jusqu'au dernier pays "Soudan")
,
  {
    id: 'soudan-du-sud',
    name: 'Soudan du Sud',
    capital: 'Djouba',
    description: "Le plus jeune pays du monde, indépendant depuis 2011, le Soudan du Sud possède une nature sauvage et intacte mais est en proie à des conflits internes récurrents. Les parcs nationaux de Boma et de Nimule abritent une faune abondante, mais l'accès est extrêmement difficile et dangereux.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇸🇸',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est",
    languages: ['Anglais', 'Arabe', 'Langues nilotiques'],
    currency: 'Livre sud-soudanaise (SSP)',
    bestTimeToVisit: 'Déconseillé - Si nécessaire : Décembre à Février (saison sèche)',
    highlights: ['Parc National de Boma (antilopes, éléphants)', 'Parc National de Nimule', 'Rivière Nil Blanc', 'Culture des peuples nilotiques (Dinka, Nuer)'],
    regions: [
      {
        id: 'djouba',
        name: 'Djouba et environs',
        description: "Djouba, la capitale, est située sur les rives du Nil Blanc. La ville a connu une croissance rapide mais chaotique depuis l'indépendance. La région environnante offre des paysages de savane et de marais.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Confluent du Nil', 'Marché de Konyo Konyo', 'Université de Djouba', 'Bords du Nil Blanc'],
        activities: ['Visite limitée aux zones sécurisées', 'Observation de la vie urbaine sud-soudanaise', 'Photographie de paysages fluviaux'],
        gastronomy: ['Cuisine simple à base de sorgho et de maïs', 'Poisson du Nil', 'Thé sucré'],
        practicalInfo: {
          bestTime: 'Décembre à Février (saison sèche)',
          transport: 'Déplacements strictement limités avec escortes. Aéroport international de Djouba (JUB).',
          accommodation: ['Djouba Bridge Hotel', 'Diamond Hotel', 'Logements très basiques']
        }
      }
    ],
    gastronomy: {
      dishes: ['Kisra (pain plat de sorgho)', 'Wal wal (porridge de maïs ou sorgho)', 'Bushi (sauce à base d\'okra ou de gombo)', 'Poisson du Nil grillé', 'Viande de bœuf ou de chèvre'],
      description: "La cuisine sud-soudanaise est simple et nutritive, basée sur les céréales locales comme le sorgho et le maïs. Le kisra accompagne la plupart des repas. Le poisson du Nil est une source importante de protéines. L'alimentation est similaire à celle du Soudan voisin."
    },
    practicalInfo: {
      visa: 'Visa requis, difficile à obtenir. Processus complexe et sujet à changements.',
      health: 'Risques sanitaires extrêmes. Paludisme endémique. Choléra fréquent. Infrastructure médicale quasi-inexistante.',
      safety: 'DANGER EXTRÊME. Conflit armé actif, violence intercommunautaire, criminalité élevée. DÉCONSEILLÉ FORMELLEMENT par toutes les autorités.',
      transport: 'Aéroport de Djouba (JUB) avec vols irréguliers. Réseau routier en très mauvais état, souvent impraticable en saison des pluies. Déplacements extrêmement dangereux.'
    },
    testimonials: []
  },
  {
    id: 'comores',
    name: 'Comores',
    capital: 'Moroni',
    description: "Archipel volcanique de l'océan Indien, les Comores sont 'les îles de la Lune' avec une culture swahili-arabe unique. Pays pauvre mais aux paysages spectaculaires, avec le volcan actif du Karthala, des forêts tropicales et des plages de sable noir. Une destination authentique et hors des sentiers battus.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    flag: '🇰🇲',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Océan Indien)",
    languages: ['Comorien (shikomor)', 'Arabe', 'Français'],
    currency: 'Franc comorien (KMF) - indexé sur l\'euro',
    bestTimeToVisit: 'Mai à Novembre (saison sèche et fraîche)',
    highlights: ['Volcan Karthala (Grande Comore)', 'Ancienne médina de Moroni', 'Île de Mohéli (parc marin, tortues)', 'Plages de sable noir', 'Plantations d\'ylang-ylang et de vanille'],
    regions: [
      {
        id: 'grande-comore',
        name: 'Grande Comore (Ngazidja)',
        description: "La plus grande île, dominée par le majestueux volcan Karthala (2 361 m) toujours actif. La capitale Moroni, avec sa vieille médina et sa mosquée du Vendredi, offre un mélange d'architecture swahili et arabe.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Volcan Karthala (randonnée au cratère)', 'Médina de Moroni et mosquée du Vendredi', 'Plage de Chomoni (sable noir)', 'Lac Salé (Lac Dziani Boundouni)'],
        activities: ['Ascension du Karthala (2 jours avec guide)', 'Visite de la médina et des marchés', 'Snorkeling dans les eaux claires', 'Visite de distilleries d\'ylang-ylang'],
        gastronomy: ['Langouste grillée', 'Pilao (riz épicé)', 'Mkatra foutra (crêpes)', 'Samboussa (beignets farcis)', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Juin à Octobre pour l\'ascension du Karthala',
          transport: 'Taxis collectifs (taxi-brousse). Location de voiture possible mais routes étroites.',
          accommodation: ['Itsandra Hotel & Spa', 'Retaj Moroni Hotel', 'Le Coralia Karthala']
        }
      },
      {
        id: 'moheli',
        name: 'Mohéli (Mwali)',
        description: "La plus petite et sauvage des îles, paradis de l'écotourisme. Le parc marin de Mohéli protège les tortues, les baleines et les dugongs. L'atmosphère est paisible et authentique.",
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
        highlights: ['Parc Marin de Mohéli (tortues, baleines)', 'Îlot de Nioumachoua', 'Plage d\'Itsamia (ponte des tortues)', 'Forêt tropicale préservée'],
        activities: ['Observation des tortues (ponte et éclosion)', 'Whale watching (juillet-octobre)', 'Plongée avec tuba', 'Randonnée dans la forêt', 'Visite de villages traditionnels'],
        gastronomy: ['Poisson frais et fruits de mer', 'Cuisine locale simple', 'Fruits tropicaux abondants'],
        practicalInfo: {
          bestTime: 'Juillet à Octobre pour les baleines',
          transport: 'Vol domestique ou bateau depuis Moroni. Vélo ou taxi sur l\'île.',
          accommodation: ['Laka Lodge', 'Chez Madame de Grâce', 'Ecolodge Moheli']
        }
      }
    ],
    gastronomy: {
      dishes: ['Langouste grillée (spécialité)', 'Mabawa (brochettes de poulet)', 'Pilao (riz épicé à la viande)', 'Mkatra foutra (crêpes servies avec du miel ou du curry)', 'Samoussas (beignets triangulaires farcis)'],
      description: "La cuisine comorienne est un savoureux mélange d'influences africaines, arabes et françaises. Les fruits de mer, notamment la langouste, sont excellents. Les plats sont souvent épicés et parfumés aux épices locales (cannelle, cardamome, clou de girofle). Les fruits tropicaux (mangue, banane, ananas) sont délicieux."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée disponible à l\'aéroport pour la plupart des nationalités.',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme présent. Bilharziose dans certaines eaux douces. Infrastructure médicale limitée.',
      safety: 'Globalement sûr, mais pauvreté visible. Manifestations politiques occasionnelles. Vigilance normale recommandée.',
      transport: 'Aéroport international Prince Saïd Ibrahim (HAH) à Moroni. Vols domestiques entre les îles (Int\'Air Îles). Ferries peu fiables. Taxis collectifs principaux moyens de transport.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Nadia Ahmed',
        country: 'France',
        rating: 4,
        text: "Les Comores sont une destination authentique et préservée. L'ascension du Karthala était intense, et voir les tortues pondre à Mohéli était magique. Un pays pauvre mais au peuple d'une grande gentillesse.",
        date: '2023-08-25'
      }
    ]
  },
  {
    id: 'mayotte',
    name: 'Mayotte',
    capital: 'Mamoudzou',
    description: "Département français d'outre-mer dans l'océan Indien, Mayotte est célèbre pour son lagon immense et préservé, l'un des plus beaux au monde. L'île combine infrastructures françaises, culture mahoraise et nature tropicale luxuriante.",
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800',
    flag: '🇾🇹',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Océan Indien)",
    languages: ['Français', 'Mahorais (shimaore)'],
    currency: 'Euro (€)',
    bestTimeToVisit: 'Mai à Novembre (saison sèche)',
    highlights: ['Lagon de Mayotte (classé parc marin)', 'Mont Choungui (point de vue)', 'Plage de Saziley (tortues)', 'Îlot de Sable Blanc', 'Mamoudzou (marché, vie animée)'],
    regions: [
      {
        id: 'grande-terre',
        name: 'Grande Terre',
        description: "L'île principale, volcanique et verdoyante, abrite la plus grande partie de la population. Le lagon, visible de nombreux points de vue, est l'attraction principale.",
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        highlights: ['Mont Choungui (pic emblématique)', 'Plage de N\'Gouja (tortues et snorkeling)', 'Mamoudzou (marché couvert, animation)', 'Cascades de Soulou'],
        activities: ['Snorkeling avec les tortues', 'Randonnée au Mont Choungui', 'Visite du marché de Mamoudzou', 'Observation des baleines à bosse (juillet-octobre)'],
        gastronomy: ['Poisson grillé et fruits de mer', 'Civet de zourite (poulpe)', 'Mabawa (brochettes)', 'Pilao mahorais', 'Pâtisseries françaises'],
        practicalInfo: {
          bestTime: 'Juillet à Octobre pour les baleines',
          transport: 'Location de voiture recommandée. Réseau routier correct. Taxis et bus locaux.',
          accommodation: ['Jardin Maoré', 'Hotel Sakouli', 'Les Baobabs']
        }
      },
      {
        id: 'petite-terre',
        name: 'Petite Terre (Pamanzi)',
        description: "Petite île reliée par une passerelle à la Grande Terre, abritant l'aéroport et la ville de Dzaoudzi. Charmante avec ses ruelles et ses maisons coloniales.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Dzaoudzi (ville historique)', 'Îlot du Bouéni (snorkeling)', 'Plage de Moya', 'Phare de Pamanzi'],
        activities: ['Flânerie dans Dzaoudzi', 'Snorkeling autour des îlots', 'Baignade sur les petites plages', 'Visite du fort français'],
        gastronomy: ['Restaurants de poissons frais', 'Cuisine créole et française', 'Glaces artisanales'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Navette maritime depuis Mamoudzou ou pont. Petite île explorable à pied.',
          accommodation: ['Hotel Le Rocher', 'Case Mamina']
        }
      }
    ],
    gastronomy: {
      dishes: ['Civet de zourite (ragoût de poulpe)', 'Mabawa (brochettes de viande marinée)', 'Pilao (riz épicé à la viande)', 'Bouchons (beignets de poisson)', 'Poisson grillé au coco'],
      description: "La cuisine mahoraise est un mélange de traditions locales, africaines et françaises. Les fruits de mer sont à l'honneur, notamment le poulpe (zourite). Les épices (curcuma, gingembre, safran) parfument les plats. L'influence française se ressent dans la présence de boulangeries et de pâtisseries."
    },
    practicalInfo: {
      visa: 'Territoire français - Pas de visa pour les ressortissants UE. Carte d\'identité ou passeport en cours de validité suffisant.',
      health: 'Aucun vaccin obligatoire. Paludisme faible risque. Infrastructure médicale française (hôpital, médecins).',
      safety: 'Très sûr (département français). Délits mineurs occasionnels. Vigilance normale.',
      transport: 'Aéroport de Dzaoudzi-Pamandzi (DZA). Location de voiture fortement recommandée. Réseau de bus (saca). Bateaux-taxis pour les îlots.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Lucie et Marc',
        country: 'France',
        rating: 5,
        text: "Mayotte offre le meilleur des deux mondes : la beauté sauvage d'un lagon préservé et le confort des infrastructures françaises. Nager avec les tortues à N'Gouja était un rêve !",
        date: '2024-02-18'
      }
    ]
  },
  {
    id: 'reunion',
    name: 'La Réunion',
    capital: 'Saint-Denis',
    description: "Département français d'outre-mer, La Réunion est une île volcanique spectaculaire au relief extrême. Entre le Piton de la Fournaise (volcan actif), les cirques (Mafate, Cilaos, Salazie) et les lagons, c'est un paradis pour la randonnée et les sports nature.",
    image: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=800',
    flag: '🇷🇪',
    continent: 'Afrique',
    subRegion: "Afrique de l'Est (Océan Indien)",
    languages: ['Français', 'Créole réunionnais'],
    currency: 'Euro (€)',
    bestTimeToVisit: 'Mai à Novembre (saison fraîche et sèche - idéal pour la randonnée)',
    highlights: ['Piton de la Fournaise (volcan actif)', 'Cirque de Mafate (accessible seulement à pied)', 'Cirque de Cilaos (village, vins)', 'Plages de l\'Ouest (Saint-Gilles)', 'Piton des Neiges (point culminant)'],
    regions: [
      {
        id: 'cirques',
        name: 'Les Cirques Intérieurs',
        description: "Trois cirques spectaculaires formés par l'effondrement de l'ancien volcan : Mafate (inaccessible par la route), Cilaos (connu pour ses vins et broderies) et Salazie (le plus vert, avec la cascade du Voile de la Mariée).",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Cirque de Mafate (hélicoptère ou randonnée)', 'Îlet de La Nouvelle (Mafate)', 'Cilaos (vins, broderie, thermalisme)', 'Hell-Bourg (Salazie - plus beau village)'],
        activities: ['Randonnée de plusieurs jours (GR R2)', 'Raids en hélicoptère vers Mafate', 'Dégustation de vin de Cilaos', 'Visite des villages créoles', 'Canyoning'],
        gastronomy: ['Cari (curry réunionnais)', 'Rougail saucisse', 'Vins de Cilaos', 'Lentilles de Cilaos', 'Bouchons (amuse-gueules)'],
        practicalInfo: {
          bestTime: 'Avril à Novembre (éviter la saison des pluies)',
          transport: 'Routes sinueuses de montagne. Accès à Mafate uniquement à pied ou en hélicoptère.',
          accommodation: ['Gîtes de montagne', 'Hotels à Cilaos et Hell-Bourg', 'Case créole chez l\'habitant']
        }
      },
      {
        id: 'volcan-est',
        name: 'Volcan et Côte Est',
        description: "Le Piton de la Fournaise, l'un des volcans les plus actifs au monde, et la côte au vent, sauvage et humide, avec ses forêts tropicales et ses cascades impressionnantes.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Piton de la Fournaise (éruptions fréquentes)', 'Plaine des Sables (paysage lunaire)', 'Forêt de Bébour-Bélouve', 'Cascades de Takamaka et du Trou de Fer'],
        activities: ['Randonnée sur le volcan (sentier du Pas de Bellecombe)', 'Survol en hélicoptère du Trou de Fer', 'Accompagnement par un guide volcanologue', 'Baignade dans les bassins naturels'],
        gastronomy: ['Restaurants du volcan avec vue', 'Produits locaux de la côte Est', 'Fruits tropicaux (letchis, mangues)'],
        practicalInfo: {
          bestTime: 'Toute l\'année pour le volcan (fermé lors des éruptions)',
          transport: 'Route de la Plaine des Sables (RN3). Accès réglementé selon activité volcanique.',
          accommodation: ['Gîte du Volcan', 'Hotel du Piton de la Fournaise', 'Eco-lodges dans l\'Est']
        }
      }
    ],
    gastronomy: {
      dishes: ['Cari (curry de poulet, porc, poisson ou zourite - poulpe)', 'Rougail saucisse (saucisses épicées en sauce tomate)', 'Bouchon (petit snack à la vapeur)', 'Samoussa (beignet triangulaire)', 'Bonbon piment (beignet épicé)'],
      description: "La cuisine réunionnaise est un mélange explosif de saveurs ! Influences française, indienne, chinoise et africaine. Les caris (currys) et rougails sont les plats de base, toujours accompagnés de riz, de grains (lentilles, haricots) et de 'brèdes' (légumes-feuilles). Très épicée grâce au piment 'rougail'."
    },
    practicalInfo: {
      visa: 'Territoire français - Pas de visa pour les ressortissants UE. Carte d\'identité ou passeport suffisant.',
      health: 'Aucun vaccin obligatoire. Pas de paludisme. Bonne infrastructure médicale.',
      safety: 'Très sûr. Vigilance contre les vols dans les voitures de location. Risques naturels (cyclones, éruptions, forte houle) à surveiller.',
      transport: 'Aéroport Roland Garros (RUN) à Saint-Denis. Location de voiture indispensable pour explorer. Réseau routier de qualité mais sinueux en montagne. Cars interurbains (Car Jaune).'
    },
    testimonials: [
      {
        id: '1',
        author: 'Antoine Moreau',
        country: 'France',
        rating: 5,
        text: "La Réunion, c'est l'Europe sous les tropiques avec des paysages à couper le souffle. La randonnée dans Mafate et l'ascension du volcan au petit matin sont des expériences inoubliables.",
        date: '2024-07-12'
      }
    ]
  },
  {
    id: 'zambie',
    name: 'Zambie',
    capital: 'Lusaka',
    description: "Pays enclavé d'Afrique australe parfois inclus dans les circuits d'Afrique de l'Est, la Zambie est célèbre pour les chutes Victoria (Mosi-oa-Tunya - 'la fumée qui tonne') et pour des safaris authentiques et peu fréquentés dans des parcs comme le Sud Luangwa ou le Kafue.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇿🇲',
    continent: 'Afrique',
    subRegion: "Afrique Australe / Afrique de l'Est",
    languages: ['Anglais', 'Bemba', 'Nyanja', 'Tonga'],
    currency: 'Kwacha zambien (ZMW)',
    bestTimeToVisit: 'Mai à Octobre (saison sèche - meilleur pour les safaris et les chutes)',
    highlights: ['Chutes Victoria (côté zambien)', 'Parc National du Sud Luangwa (marche à pied avec les lions)', 'Parc National de Kafue (immense et sauvage)', 'Lac Tanganyika (plongée)', 'Lusaka (capitale dynamique)'],
    regions: [
      {
        id: 'livingstone-victoria-falls',
        name: 'Livingstone et les Chutes Victoria',
        description: "La ville de Livingstone est la porte d'entrée pour les célèbres chutes Victoria, partagées avec le Zimbabwe. Le côté zambien offre la célèbre piscine du Diable (Devil's Pool) en saison sèche et une vue impressionnante sur les gorges.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Chutes Victoria (Mosi-oa-Tunya)', 'Devil\'s Pool (piscine naturelle au bord des chutes)', 'Musée de Livingstone', 'Croisière sur le Zambèze au coucher du soleil'],
        activities: ['Visite des chutes (côté zambien et traversée vers le Zimbabwe)', 'Baignade dans la Devil\'s Pool (juillet à janvier)', 'Saut à l\'élastique (111m)', 'Croisière safari sur le Zambèze', 'Vol en hélicoptère'],
        gastronomy: ['Dîners avec vue sur le fleuve', 'Cuisine internationale et locale', 'Cafés et restaurants de Livingstone'],
        practicalInfo: {
          bestTime: 'Juillet à Janvier pour la Devil\'s Pool. Avril à Mai pour le débit maximal des chutes.',
          transport: 'Aéroport de Livingstone (LVI). Taxis et transferts organisés.',
          accommodation: ['Royal Livingstone Hotel by Anantara', 'Tongabezi Lodge', 'Avani Victoria Falls Resort']
        }
      },
      {
        id: 'south-luangwa',
        name: 'Parc National du Sud Luangwa',
        description: "Considéré comme l'un des meilleurs parcs d'Afrique pour l'observation de la faune, le Sud Luangwa est le berceau du safari à pied. Densité exceptionnelle d'animaux, notamment de léopards, et paysages de méandres de la rivière Luangwa.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Safari à pied avec guide armé', 'Fortes densités de léopards', 'Rivière Luangwa (hippopotames, crocodiles)', 'Variété d\'antilopes (cobe à croissant, gnou)'],
        activities: ['Safari à pied (incontournable)', 'Safari game drive diurne et nocturne', 'Observation des oiseaux (plus de 400 espèces)', 'Visite de projets communautaires'],
        gastronomy: ['Cuisine de camp de brousse', 'Repas en plein air', 'Produits frais'],
        practicalInfo: {
          bestTime: 'Mai à Octobre (saison sèche, animaux près de la rivière)',
          transport: 'Vol charter depuis Lusaka ou Livingstone vers Mfuwe, puis transfert en 4x4.',
          accommodation: ['Chinzombo Camp', 'Tena Tena', 'Kapani Lodge', 'Mfuwe Lodge']
        }
      }
    ],
    gastronomy: {
      dishes: ['Nshima (porridge de maïs blanc - aliment de base)', 'Ifisashi (légumes-feuilles cuits avec des arachides)', 'Chikanda (saucisse végétale à base d\'orchidée)', 'Kapenta (petits poissons séchés du lac Tanganyika)', 'Viande de gibier (kudu, impala)'],
      description: "La cuisine zambienne est simple et consistante, centrée sur le nshima (sorte de polenta de maïs) qui accompagne des ragoûts de viande, de poisson ou de légumes. L'influence britannique se ressent dans le petit-déjeuner et le thé de l'après-midi. Dans les lodges, la cuisine est souvent internationale de qualité."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée disponible pour de nombreuses nationalités à l\'aéroport. Le Kaza Univisa (Zambie-Zimbabwe) est pratique pour visiter les deux côtés des chutes.',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme présent dans toutes les régions sauf Lusaka haute altitude. Traitement antipaludéen indispensable.',
      safety: 'Pays assez sûr pour les touristes. Vigilance normale à Lusaka contre les pickpockets. Respecter les consignes des guides dans les parcs.',
      transport: 'Aéroport international de Lusaka (LUN) et Livingstone (LVI). Excellents vols charters pour les parcs. Routes principales en bon état, secondaires en terre. Location de 4x4 recommandée pour l\'autonomie.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Robert Schmidt',
        country: 'Allemagne',
        rating: 5,
        text: "Le safari à pied dans le Sud Luangwa est une expérience unique : approcher des éléphants à pied, sentir la brousse... Et les chutes Victoria sont tout simplement époustouflantes. La Zambie mérite d'être plus connue !",
        date: '2024-08-30'
      }
    ]
  }
];
