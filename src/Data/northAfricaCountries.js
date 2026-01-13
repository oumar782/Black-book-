export const northAfricaCountries = [
  {
    id: 'egypte',
    name: 'Égypte',
    capital: 'Le Caire',
    description: "Terre des pharaons et berceau d'une des plus anciennes civilisations, l'Égypte fascine par ses monuments millénaires, le Nil légendaire et la mer Rouge aux récifs coralliens spectaculaires. Un voyage dans le temps et la culture.",
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
    flag: '🇪🇬',
    continent: 'Afrique',
    subRegion: 'Afrique du Nord',
    languages: ['Arabe'],
    currency: 'Livre égyptienne (EGP)',
    bestTimeToVisit: 'Octobre à Avril',
    highlights: ['Pyramides de Gizeh', 'Temple de Louxor', 'Mer Rouge', 'Vallée des Rois'],
    regions: [
      {
        id: 'le-caire',
        name: 'Le Caire',
        description: "Mégalopole vibrante de plus de 20 millions d'habitants, Le Caire juxtapose l'antiquité pharaonique avec la modernité chaotique. Les pyramides de Gizeh, le musée égyptien et le vieux Caire islamique créent un mélange unique.",
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
        highlights: ['Pyramides de Gizeh', 'Sphinx', 'Musée égyptien', 'Vieux Caire'],
        activities: ['Pyramides', 'Musées', 'Shopping', 'Croisière Nil'],
        gastronomy: ['Koshari', 'Ful medames', 'Falafel', 'Thé égyptien'],
        practicalInfo: {
          bestTime: 'Octobre à Avril',
          transport: 'Métro, Taxis, Uber',
          accommodation: ['Four Seasons Nile Plaza', 'Marriott Mena House', 'Sofitel Cairo']
        }
      },
      {
        id: 'luxor',
        name: 'Louxor',
        description: "Ancienne Thèbes, Louxor est le plus grand musée à ciel ouvert du monde. Les temples de Karnak et Louxor, la Vallée des Rois et la Vallée des Reines offrent une immersion dans l'Égypte pharaonique.",
        image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?w=800',
        highlights: ['Temple de Karnak', 'Vallée des Rois', 'Temple de Louxor', 'Colosses de Memnon'],
        activities: ['Visite temples', 'Vallée des Rois', 'Montgolfière', 'Musée Louxor'],
        gastronomy: ['Restaurants locaux', 'Cuisine égyptienne'],
        practicalInfo: {
          bestTime: 'Octobre à Avril',
          transport: 'Vol depuis Le Caire, Taxis, Calèches',
          accommodation: ['Winter Palace', 'Steigenberger Nile Palace', 'Hilton Luxor']
        }
      },
      {
        id: 'aswan',
        name: 'Assouan',
        description: "Ville la plus méridionale d'Égypte, Assouan offre une ambiance plus paisible et des sites magnifiques. Le temple de Philae, le haut barrage et les carrières de granit témoignent de l'ingénierie égyptienne antique.",
        image: 'https://images.unsplash.com/photo-1599580420608-49b9f9ba6c0c?w=800',
        highlights: ['Temple de Philae', 'Barrage d\'Assouan', 'Obélisque inachevé', 'Île Éléphantine'],
        activities: ['Temple Philae', 'Felouque sur Nil', 'Village nubien', 'Temple Abou Simbel'],
        gastronomy: ['Cuisine nubienne', 'Poissons du Nil'],
        practicalInfo: {
          bestTime: 'Octobre à Avril',
          transport: 'Train depuis Louxor, Vols',
          accommodation: ['Sofitel Legend Old Cataract', 'Mövenpick Aswan', 'Pyramisa Isis Island']
        }
      },
      {
        id: 'mer-rouge',
        name: 'Mer Rouge',
        description: "Les stations balnéaires de la mer Rouge comme Hurghada et Sharm el-Sheikh offrent certains des meilleurs sites de plongée au monde. Récifs coralliens, poissons tropicaux et paysages désertiques créent un paradis aquatique.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Récifs coralliens', 'Plongée sous-marine', 'Désert', 'Vie marine'],
        activities: ['Plongée', 'Snorkeling', 'Excursion désert', 'Sports nautiques'],
        gastronomy: ['Fruits de mer', 'Cuisine internationale'],
        practicalInfo: {
          bestTime: 'Mars à Mai, Septembre à Novembre',
          transport: 'Vols vers Hurghada/Sharm el-Sheikh',
          accommodation: ['Four Seasons Sharm', 'Rixos Sharm', 'Steigenberger Makadi']
        }
      },
      {
        id: 'alexandrie',
        name: 'Alexandrie',
        description: "Fondée par Alexandre le Grand, Alexandrie fut le centre intellectuel du monde antique. La nouvelle bibliothèque, les catacombes et la forteresse Qaitbay surplombant la Méditerranée rappellent son glorieux passé.",
        image: 'https://images.unsplash.com/photo-1575918530621-93e89025db24?w=800',
        highlights: ['Bibliotheca Alexandrina', 'Forteresse Qaitbay', 'Catacombes Kom el Shoqafa', 'Pilar de Pompée'],
        activities: ['Patrimoine', 'Plages', 'Histoire', 'Gastronomie'],
        gastronomy: ['Fruits de mer méditerranéens', 'Foul', 'Falafel alexandrin'],
        practicalInfo: {
          bestTime: 'Avril à Juin, Septembre à Novembre',
          transport: 'Train depuis Le Caire, Taxis',
          accommodation: ['Four Seasons Alexandria', 'Hilton Alexandria', 'Steigenberger Cecil']
        }
      },
      {
        id: 'sinai',
        name: 'Sinaï',
        description: "Péninsule entre l'Afrique et l'Asie, le Sinaï offre le mont Moïse pour les pèlerins, les monastères historiques pour les amateurs d'histoire et les fonds marins exceptionnels pour les plongeurs.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Mont Sinaï', 'Monastère Sainte-Catherine', 'Canyon Coloré', 'Dahab'],
        activities: ['Ascension Mont Sinaï', 'Plongée', 'Randonnée', 'Culture bédouine'],
        gastronomy: ['Cuisine bédouine', 'Fruits de mer'],
        practicalInfo: {
          bestTime: 'Octobre à Avril',
          transport: 'Vol vers Sharm el-Sheikh',
          accommodation: ['Jasmine Village', 'Dahab Paradise', 'Basata Ecolodge']
        }
      }
    ],
    gastronomy: {
      dishes: ['Koshari', 'Ful medames', 'Falafel', 'Molokhia', 'Hawawshi', 'Umm Ali'],
      description: "La cuisine égyptienne est savoureuse et variée. Le koshari (mélange de pâtes, riz, lentilles) est le plat national. Les falafels égyptiens (taameya) sont différents de leurs cousins libanais. Les desserts comme l'umm ali et les boissons comme le karkadé sont délicieux."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée ou e-visa disponible',
      health: 'Précautions alimentaires. Vaccins recommandés',
      safety: 'Vigilance dans les grandes villes. Éviter le Sinaï nord',
      transport: 'Vols vers Le Caire. Trains confortables. Vols intérieurs'
    },
    testimonials: [
      {
        id: '1',
        author: 'Histoire Vivante',
        country: 'France',
        rating: 5,
        text: "Voir les pyramides de ses propres yeux est une expérience indescriptible. Louxor est incroyable. L'Égypte dépasse toutes les attentes.",
        date: '2024-03-15'
      }
    ]
  },
  {
    id: 'soudan',
    name: 'Soudan',
    capital: 'Khartoum',
    description: "Le Soudan abrite plus de pyramides que l'Égypte, mais reste largement méconnu. Les sites archéologiques méroïtiques, le désert de Nubie et la confluence du Nil Bleu et Blanc offrent une aventure authentique hors des sentiers battus.",
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    flag: '🇸🇩',
    continent: 'Afrique',
    subRegion: 'Afrique du Nord',
    languages: ['Arabe', 'Anglais'],
    currency: 'Livre soudanaise (SDG)',
    bestTimeToVisit: 'Novembre à Février',
    highlights: ['Pyramides de Méroé', 'Khartoum', 'Désert de Nubie', 'Nil'],
    regions: [
      {
        id: 'meroe',
        name: 'Pyramides de Méroé',
        description: "Les pyramides nubiennes de Méroé, plus petites et plus pointues que leurs cousines égyptiennes, s'élèvent dans le désert. Ce site UNESCO reste peu visité, offrant une expérience archéologique intime.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Pyramides nubiennes', 'Site archéologique', 'Désert', 'Histoire méroïtique'],
        activities: ['Archéologie', 'Photographie', 'Désert', 'Histoire'],
        gastronomy: ['Camps de désert'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 depuis Khartoum',
          accommodation: ['Camping près du site']
        }
      },
      {
        id: 'khartoum',
        name: 'Khartoum',
        description: "Capitale située au confluent du Nil Bleu et Blanc, Khartoum offre des musées fascinants sur l'histoire nubienne. Le marché d'Omdurman et les mosquées reflètent la culture soudanaise.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Confluence des Nils', 'Musée national', 'Marché d\'Omdurman', 'Mosquées'],
        activities: ['Histoire', 'Marchés', 'Patrimoine', 'Croisière Nil'],
        gastronomy: ['Ful soudanais', 'Kisra', 'Café soudanais'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Taxis, Minibus',
          accommodation: ['Corinthia Hotel', 'Acropole Hotel', 'Al Salam Rotana']
        }
      },
      {
        id: 'nubie',
        name: 'Désert de Nubie',
        description: "Vaste région désertique au nord du Soudan, le désert de Nubie abrite des sites archéologiques méconnus et des paysages lunaires spectaculaires. Un paradis pour les aventuriers et les amateurs d'histoire.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Paysages désertiques', 'Sites archéologiques', 'Étoiles', 'Culture nubienne'],
        activities: ['Camping désert', 'Archéologie', 'Photographie', 'Observation étoiles'],
        gastronomy: ['Cuisine de camp', 'Thé du désert'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 avec guide',
          accommodation: ['Camping']
        }
      }
    ],
    gastronomy: {
      dishes: ['Ful medames', 'Kisra', 'Shaiyah', 'Gurasa', 'Asida', 'Tamayya'],
      description: "La cuisine soudanaise est simple et savoureuse. Le ful (fèves) est omniprésent au petit-déjeuner. La kisra (galette de sorgho) accompagne les repas. Le café préparé avec du gingembre et des épices est une tradition sociale."
    },
    practicalInfo: {
      visa: 'Visa obligatoire, souvent délivré à l\'arrivée',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens',
      safety: 'Situation volatile. Vérifier les avis gouvernementaux avant le voyage',
      transport: 'Vols vers Khartoum. Transport terrestre basique'
    },
    testimonials: [
      {
        id: '1',
        author: 'Archéologue amateur',
        country: 'Allemagne',
        rating: 4,
        text: "Les pyramides de Méroé sont époustouflantes et si peu visitées. Une expérience authentique pour les amateurs d'archéologie et d'aventure.",
        date: '2024-01-20'
      }
    ]
  }
];