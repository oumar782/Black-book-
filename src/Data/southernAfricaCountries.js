export const southernAfricaCountries = [
  // Pays existants
  {
    id: 'afrique-du-sud',
    name: 'Afrique du Sud',
    capital: 'Pretoria (administrative)',
    description: "La Nation Arc-en-ciel offre une diversité spectaculaire. Du Cap et sa montagne de la Table aux safaris du Kruger, des vignobles de Stellenbosch aux plages du KwaZulu-Natal, l'Afrique du Sud combine nature, histoire et modernité.",
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
    flag: '🇿🇦',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Zoulou', 'Xhosa', 'Afrikaans', 'Anglais'],
    currency: 'Rand sud-africain (ZAR)',
    bestTimeToVisit: 'Mai à Septembre (safari), Octobre à Avril (Cape)',
    highlights: ['Le Cap', 'Kruger', 'Route des Jardins', 'Johannesburg'],
    regions: [
      {
        id: 'cape-town',
        name: 'Le Cap',
        description: "Ville la plus visitée d'Afrique, Le Cap est dominée par l'iconique Montagne de la Table. Plages, vignobles, Cap de Bonne-Espérance et scène culinaire exceptionnelle font du Cap une destination mondiale.",
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
        highlights: ['Montagne de la Table', 'Cap de Bonne-Espérance', 'Robben Island', 'V&A Waterfront'],
        activities: ['Téléphérique Table Mountain', 'Vignobles', 'Plages', 'Patrimoine Mandela'],
        gastronomy: ['Cape Malay', 'Fruits de mer', 'Vins du Cap', 'Bobotie'],
        practicalInfo: {
          bestTime: 'Octobre à Avril',
          transport: 'Uber, MyCiti Bus, Location voiture',
          accommodation: ['The Silo Hotel', 'Ellerman House', 'One&Only Cape Town']
        }
      },
      {
        id: 'kruger',
        name: 'Parc National Kruger',
        description: "L'un des plus grands parcs d'Afrique, le Kruger offre des safaris exceptionnels. Big Five garantis, lodges de luxe et expériences de brousse authentiques font du Kruger une destination safari de premier plan.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Big Five', 'Camps du parc', 'Lodges privés', 'Safari'],
        activities: ['Game drives', 'Walking safaris', 'Bush dinner', 'Photographie'],
        gastronomy: ['Lodge cuisine', 'Braai'],
        practicalInfo: {
          bestTime: 'Mai à Septembre (saison sèche)',
          transport: 'Vol vers Skukuza ou route',
          accommodation: ['Singita', 'andBeyond', 'Sabi Sabi', 'Londolozi']
        }
      },
      {
        id: 'garden-route',
        name: 'Route des Jardins',
        description: "Cette route côtière spectaculaire entre Le Cap et Port Elizabeth offre forêts, lagones, plages et villages charmants. Knysna, Plettenberg Bay et Tsitsikamma sont les étapes incontournables.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Knysna', 'Plettenberg Bay', 'Tsitsikamma', 'Oudtshoorn'],
        activities: ['Route panoramique', 'Bungee', 'Plages', 'Autruches'],
        gastronomy: ['Huîtres de Knysna', 'Fruits de mer', 'Vins'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Location voiture indispensable',
          accommodation: ['Pezula Resort', 'Phantom Forest', 'Tsala Tree Tops']
        }
      },
      {
        id: 'johannesburg',
        name: 'Johannesburg et Pretoria',
        description: "Gauteng, le cœur économique de l'Afrique, abrite Johannesburg et Pretoria. Soweto, l'Apartheid Museum et le Berceau de l'Humanité racontent l'histoire complexe du pays.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Apartheid Museum', 'Soweto', 'Cradle of Humankind', 'Pretoria'],
        activities: ['Histoire', 'Patrimoine', 'Art', 'Business'],
        gastronomy: ['Street food', 'Restaurants haut de gamme', 'Bunny chow'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Gautrain, Uber',
          accommodation: ['Four Seasons The Westcliff', 'Saxon Hotel', 'Michelangelo']
        }
      },
      {
        id: 'kwazulu-natal',
        name: 'KwaZulu-Natal',
        description: "Province zouloue offrant plages, montagnes et réserves. Durban et ses influences indiennes, le Drakensberg spectaculaire et les parcs Hluhluwe-iMfolozi font du KZN une région diverse.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Durban', 'Drakensberg', 'Hluhluwe-iMfolozi', 'iSimangaliso'],
        activities: ['Plages', 'Randonnée', 'Safari', 'Culture zouloue'],
        gastronomy: ['Bunny chow', 'Curry', 'Fruits de mer'],
        practicalInfo: {
          bestTime: 'Mai à Septembre (safari), Décembre à Février (plages)',
          transport: 'Vol vers Durban, Location voiture',
          accommodation: ['Oyster Box', 'Thanda Safari', 'Montusi Mountain Lodge']
        }
      },
      {
        id: 'winelands',
        name: 'Winelands',
        description: "Stellenbosch, Franschhoek et Paarl forment la région viticole du Cap. Architecture hollandaise du Cap, domaines viticoles prestigieux et restaurants étoilés créent une expérience gastronomique unique.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Stellenbosch', 'Franschhoek', 'Domaines viticoles', 'Gastronomie'],
        activities: ['Dégustation', 'Gastronomie', 'Architecture', 'Art'],
        gastronomy: ['Cuisine du Cap', 'Vins premium', 'Fromages'],
        practicalInfo: {
          bestTime: 'Février à Mai (vendanges)',
          transport: 'Location voiture depuis Le Cap',
          accommodation: ['Delaire Graff', 'La Residence', 'Babylonstoren']
        }
      }
    ],
    gastronomy: {
      dishes: ['Bobotie', 'Braai', 'Biltong', 'Bunny chow', 'Malva pudding', 'Koeksisters'],
      description: "La cuisine sud-africaine reflète la diversité du pays. Le braai (barbecue) est une institution. La cuisine Cape Malay mélange épices malaysiennes et traditions. Le biltong (viande séchée) et les vins du Cap sont emblématiques."
    },
    practicalInfo: {
      visa: 'Pas de visa pour nombreuses nationalités (séjour < 90 jours)',
      health: 'Antipaludéens pour le Kruger et le nord',
      safety: 'Vigilance dans les grandes villes. Éviter certaines zones la nuit',
      transport: 'Excellentes infrastructures. Vols intérieurs, location voiture recommandée'
    },
    testimonials: [
      {
        id: '1',
        author: 'Wine Lover',
        country: 'États-Unis',
        rating: 5,
        text: "L'Afrique du Sud offre le meilleur rapport qualité-prix au monde pour le vin et la gastronomie. Le Cap est une ville incroyable et le Kruger m'a émerveillé.",
        date: '2024-04-10'
      }
    ]
  },
  {
    id: 'namibie',
    name: 'Namibie',
    capital: 'Windhoek',
    description: "La Namibie est le pays des grands espaces et des contrastes. Dunes rouges de Sossusvlei, côte des Squelettes, faune d'Etosha et cultures San et Himba font de ce pays peu peuplé une destination photographique exceptionnelle.",
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    flag: '🇳🇦',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Anglais', 'Afrikaans', 'Allemand', 'Oshiwambo'],
    currency: 'Dollar namibien (NAD)',
    bestTimeToVisit: 'Mai à Octobre',
    highlights: ['Sossusvlei', 'Etosha', 'Côte des Squelettes', 'Damaraland'],
    regions: [
      {
        id: 'sossusvlei',
        name: 'Sossusvlei',
        description: "Les plus hautes dunes du monde (jusqu'à 300 m) créent un paysage surréaliste. Les teintes rouges au lever du soleil, Deadvlei avec ses arbres pétrifiés et le canyon de Sesriem sont inoubliables.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Dune 45', 'Deadvlei', 'Big Daddy', 'Canyon de Sesriem'],
        activities: ['Lever de soleil', 'Randonnée dunes', 'Photographie', 'Vol en montgolfière'],
        gastronomy: ['Lodge cuisine'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Voiture depuis Windhoek (5h)',
          accommodation: ['&Beyond Sossusvlei', 'Kulala Desert Lodge', 'Sossus Dune Lodge']
        }
      },
      {
        id: 'etosha',
        name: 'Parc National d\'Etosha',
        description: "Etosha est l'un des plus grands parcs d'Afrique australe. Le pan (lac salé asséché) attire une faune exceptionnelle aux points d'eau. Lions, éléphants, rhinocéros et girafes s'observent facilement.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Pan d\'Etosha', 'Points d\'eau', 'Rhinocéros noirs', 'Camps illuminés'],
        activities: ['Safari', 'Points d\'eau de nuit', 'Photographie'],
        gastronomy: ['Camps du parc'],
        practicalInfo: {
          bestTime: 'Mai à Octobre (saison sèche)',
          transport: 'Voiture depuis Windhoek (5h)',
          accommodation: ['Onguma', 'Ongava Lodge', 'Camps NWR']
        }
      },
      {
        id: 'skeleton-coast',
        name: 'Côte des Squelettes',
        description: "Cette côte inhospitalière doit son nom aux épaves de bateaux et squelettes de baleines. Brumes, dunes, phoques du Cap et otaries créent une atmosphère unique et sauvage.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Épaves', 'Colonie de phoques', 'Dunes', 'Isolement'],
        activities: ['Observation phoques', 'Épaves', 'Solitude', 'Photographie'],
        gastronomy: ['Lodges exclusifs'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Vol ou 4x4',
          accommodation: ['Shipwreck Lodge', 'Skeleton Coast Safari Camp']
        }
      },
      {
        id: 'damaraland',
        name: 'Damaraland',
        description: "Région de déserts rocheux où vivent les éléphants du désert et les rhinocéros noirs. Twyfelfontein et ses gravures rupestres, les orgues basaltiques et les villages Himba caractérisent cette région sauvage.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Éléphants du désert', 'Twyfelfontein', 'Orgues basaltiques', 'Rhinocéros'],
        activities: ['Tracking éléphants', 'Pétroglyphes', 'Paysages', 'Culture Himba'],
        gastronomy: ['Lodges'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: '4x4 recommandé',
          accommodation: ['Damaraland Camp', 'Mowani Mountain Camp', 'Camp Kipwe']
        }
      },
      {
        id: 'kaokoland',
        name: 'Kaokoland et Himba',
        description: "Le Kaokoland au nord-ouest est le territoire des Himba, peuple semi-nomade célèbre pour ses femmes enduites d'ocre rouge. Cette région sauvage et difficile d'accès offre une rencontre culturelle unique.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Villages Himba', 'Epupa Falls', 'Paysages sauvages', 'Culture'],
        activities: ['Rencontre Himba', 'Chutes d\'Epupa', 'Aventure 4x4'],
        gastronomy: ['Camps'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: '4x4 indispensable, guide recommandé',
          accommodation: ['Serra Cafema', 'Epupa Falls Lodge', 'Kunene Camp']
        }
      },
      {
        id: 'swakopmund',
        name: 'Swakopmund',
        description: "Ville coloniale allemande sur la côte atlantique, Swakopmund offre une ambiance surréaliste de Bavière en Afrique. Activités d'aventure, cuisine allemande et accès au désert du Namib en font une étape populaire.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Architecture coloniale', 'Plages', 'Dunes de Sandwich Harbour'],
        activities: ['Sandboarding', 'Quad', 'Kayak avec phoques', 'Skydive'],
        gastronomy: ['Cuisine allemande', 'Fruits de mer', 'Pâtisseries'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Route depuis Windhoek',
          accommodation: ['Strand Hotel', 'The Delight', 'Hansa Hotel']
        }
      }
    ],
    gastronomy: {
      dishes: ['Oryx', 'Kudu', 'Biltong', 'Potjiekos', 'Cuisine allemande', 'Saucisses'],
      description: "La cuisine namibienne mélange traditions africaines et héritage allemand. Les viandes de gibier (oryx, kudu, springbok) sont excellentes. La bière allemande et les pâtisseries rappellent l'histoire coloniale."
    },
    practicalInfo: {
      visa: 'Pas de visa pour nombreuses nationalités',
      health: 'Antipaludéens pour le nord. Désert : protection solaire indispensable',
      safety: 'Pays très sûr',
      transport: 'Location 4x4 recommandée. Grandes distances. Pistes de qualité variable'
    },
    testimonials: [
      {
        id: '1',
        author: 'Photographe',
        country: 'Allemagne',
        rating: 5,
        text: "La Namibie est le paradis des photographes. Sossusvlei au lever du soleil, Etosha, les Himba... Chaque image est une œuvre d'art naturelle.",
        date: '2024-06-20'
      }
    ]
  },
  {
    id: 'botswana',
    name: 'Botswana',
    capital: 'Gaborone',
    description: "Le Botswana est synonyme de safari haut de gamme et de nature préservée. Le delta de l'Okavango, merveille naturelle inondée, le Chobe et ses éléphants, et le Kalahari offrent des expériences de brousse exceptionnelles.",
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
    flag: '🇧🇼',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Anglais', 'Setswana'],
    currency: 'Pula (BWP)',
    bestTimeToVisit: 'Mai à Octobre',
    highlights: ['Delta de l\'Okavango', 'Chobe', 'Makgadikgadi', 'Kalahari central'],
    regions: [
      {
        id: 'okavango',
        name: 'Delta de l\'Okavango',
        description: "Le plus grand delta intérieur du monde est classé UNESCO. Les eaux de l'Okavango créent un labyrinthe de canaux, lagunes et îles où la faune abonde. Safari en mokoro (pirogue) et lodges exclusifs caractérisent l'expérience.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Mokoro', 'Faune aquatique', 'Îles', 'Lodges de luxe'],
        activities: ['Safari en mokoro', 'Game drives', 'Walking safaris', 'Héli-flip'],
        gastronomy: ['Lodges 5 étoiles'],
        practicalInfo: {
          bestTime: 'Mai à Octobre (inondation)',
          transport: 'Vol charter depuis Maun',
          accommodation: ['Mombo Camp', 'Chief\'s Camp', 'Jao Camp', 'Vumbura Plains']
        }
      },
      {
        id: 'chobe',
        name: 'Parc National de Chobe',
        description: "Chobe abrite la plus grande concentration d'éléphants d'Afrique (120 000+). La rivière Chobe offre des safaris aquatiques uniques où les éléphants traversent les eaux et les hippopotames paressent.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Éléphants', 'Safari aquatique', 'Rivière Chobe', 'Savuti'],
        activities: ['Croisière sur le Chobe', 'Game drives', 'Photographie'],
        gastronomy: ['Lodges de qualité'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Route depuis Kasane ou vol',
          accommodation: ['Chobe Game Lodge', 'Zarafa Camp', 'Savuti Safari Lodge']
        }
      },
      {
        id: 'makgadikgadi',
        name: 'Makgadikgadi Pans',
        description: "Ces immenses pans salés créent un paysage lunaire. En saison des pluies, des millions de flamants et zèbres migrent. Les suricates habituées et les nuits sous les étoiles sont des expériences uniques.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Pans salés', 'Suricates', 'Migration zèbres', 'Étoiles'],
        activities: ['Suricates', 'Quad', 'Nuit sur les pans', 'Migration'],
        gastronomy: ['Camps'],
        practicalInfo: {
          bestTime: 'Avril à Juin (migration) / Saison sèche (suricates)',
          transport: 'Vol ou route depuis Maun',
          accommodation: ['Jack\'s Camp', 'San Camp', 'Camp Kalahari']
        }
      },
      {
        id: 'kalahari',
        name: 'Kalahari Central',
        description: "L'immense réserve du Kalahari Central est le territoire des San (Bushmen). Ce désert de savane abrite des lions à crinière noire, des guépards et offre une expérience de wilderness absolue.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Lions à crinière noire', 'Bushmen San', 'Deception Valley', 'Solitude'],
        activities: ['Safari', 'Rencontre San', 'Wilderness', 'Photographie'],
        gastronomy: ['Camps mobiles'],
        practicalInfo: {
          bestTime: 'Décembre à Mars (saison verte)',
          transport: '4x4 ou vol charter',
          accommodation: ['Kalahari Plains Camp', 'Tau Pan Camp']
        }
      },
      {
        id: 'moremi',
        name: 'Réserve de Moremi',
        description: "La première réserve créée par une communauté africaine (les Batawana) est au cœur du delta. Chief's Island et les plaines inondées offrent une des meilleures expériences de safari au monde.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Chief\'s Island', 'Xakanaxa', 'Faune dense', 'Oiseaux'],
        activities: ['Safari terrestre et aquatique', 'Oiseaux', 'Prédateurs'],
        gastronomy: ['Camps de qualité'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Vol depuis Maun',
          accommodation: ['Camp Moremi', 'Xakanaxa Camp', 'Khwai River Lodge']
        }
      }
    ],
    gastronomy: {
      dishes: ['Seswaa', 'Morogo', 'Phane (chenilles mopane)', 'Vetkoek', 'Samp'],
      description: "La cuisine botswanaise est simple et nourrissante. Le seswaa (viande bouillie pilée) est le plat national. Les chenilles mopane grillées sont une spécialité locale. Les lodges offrent une cuisine internationale raffinée."
    },
    practicalInfo: {
      visa: 'Pas de visa pour nombreuses nationalités',
      health: 'Antipaludéens indispensables. Région de l\'Okavango à haut risque',
      safety: 'Pays très sûr',
      transport: 'Vols charter entre camps. Maun est le hub principal. Routes de gravier'
    },
    testimonials: [
      {
        id: '1',
        author: 'Safari Enthusiast',
        country: 'Royaume-Uni',
        rating: 5,
        text: "Le Botswana offre le safari le plus exclusif d'Afrique. Le mokoro dans l'Okavango et les éléphants de Chobe sont des moments de magie pure.",
        date: '2024-07-15'
      }
    ]
  },
  {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    capital: 'Harare',
    description: "Le Zimbabwe offre des safaris de qualité et les spectaculaires chutes Victoria. Malgré les défis économiques, le pays préserve sa faune et ses guides sont parmi les meilleurs d'Afrique. Hwange, Mana Pools et Great Zimbabwe méritent le détour.",
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    flag: '🇿🇼',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Anglais', 'Shona', 'Ndebele'],
    currency: 'Dollar américain (USD)',
    bestTimeToVisit: 'Mai à Octobre',
    highlights: ['Chutes Victoria', 'Hwange', 'Mana Pools', 'Great Zimbabwe'],
    regions: [
      {
        id: 'victoria-falls',
        name: 'Victoria Falls',
        description: "Les chutes Victoria, classées UNESCO, sont l'une des plus grandes merveilles naturelles du monde. Le rideau d'eau de 1.7 km de large se jette dans un gouffre de 100 m, créant un spectacle grandiose.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Chutes UNESCO', 'Devil\'s Pool', 'Gorge', 'Arc-en-ciel'],
        activities: ['Visite des chutes', 'Rafting', 'Bungee', 'Hélicoptère'],
        gastronomy: ['Restaurants touristiques', 'The Boma'],
        practicalInfo: {
          bestTime: 'Février à Mai (plein débit) / Septembre à Décembre (baignade Devil\'s Pool)',
          transport: 'Vol vers Victoria Falls',
          accommodation: ['Victoria Falls Safari Lodge', 'The Victoria Falls Hotel', 'Stanley & Livingstone']
        }
      },
      {
        id: 'hwange',
        name: 'Parc National de Hwange',
        description: "Le plus grand parc du Zimbabwe abrite une faune exceptionnelle. Plus de 100 espèces de mammifères, dont d'importants troupeaux d'éléphants et de buffles, peuplent cette réserve accessible depuis Victoria Falls.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Éléphants', 'Lycaons', 'Points d\'eau', 'Guides experts'],
        activities: ['Safari', 'Walking safaris', 'Points d\'eau de nuit'],
        gastronomy: ['Camps de brousse'],
        practicalInfo: {
          bestTime: 'Août à Octobre',
          transport: 'Route depuis Victoria Falls',
          accommodation: ['Somalisa', 'Linkwasha', 'The Hide', 'Camelthorn Lodge']
        }
      },
      {
        id: 'mana-pools',
        name: 'Mana Pools',
        description: "Classé UNESCO, Mana Pools sur le Zambèze offre des safaris à pied exceptionnels. Les éléphants debout sur leurs pattes arrière pour atteindre les branches et les safaris canoë sont emblématiques.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Zambèze', 'Safaris à pied', 'Éléphants debout', 'Canoë'],
        activities: ['Walking safari', 'Canoë', 'Camping sauvage', 'Photographie'],
        gastronomy: ['Camps'],
        practicalInfo: {
          bestTime: 'Juillet à Octobre',
          transport: 'Vol charter depuis Harare',
          accommodation: ['Chikwenya', 'Ruckomechi', 'John\'s Camp']
        }
      },
      {
        id: 'great-zimbabwe',
        name: 'Great Zimbabwe',
        description: "Les ruines de Great Zimbabwe, classées UNESCO, sont le plus grand site archéologique d'Afrique subsaharienne. Cette cité médiévale aux murs de pierre témoigne d'une civilisation bantoue avancée.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Ruines UNESCO', 'Grande Enceinte', 'Hill Complex', 'Histoire'],
        activities: ['Visite archéologique', 'Histoire', 'Patrimoine'],
        gastronomy: ['Lodges locaux'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Route depuis Harare',
          accommodation: ['Great Zimbabwe Hotel', 'Norma Jean\'s Lake View Resort']
        }
      },
      {
        id: 'matobo',
        name: 'Parc National de Matobo',
        description: "Les collines de granite de Matobo abritent des peintures rupestres San et la tombe de Cecil Rhodes. C'est aussi le meilleur endroit au monde pour observer les rhinocéros à pied.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Rochers de granite', 'Art rupestre', 'Tombe de Rhodes', 'Rhinocéros'],
        activities: ['Rhino tracking', 'Art rupestre', 'Histoire', 'Randonnée'],
        gastronomy: ['Lodges'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Route depuis Bulawayo',
          accommodation: ['Amalinda Lodge', 'Big Cave Camp', 'Camp Amalinda']
        }
      }
    ],
    gastronomy: {
      dishes: ['Sadza', 'Nyama', 'Matemba', 'Madora (chenilles)', 'Mazondo'],
      description: "La sadza (pâte de maïs) est l'aliment de base, servie avec des viandes et légumes. Les chenilles mopane (madora) sont une spécialité protéinée prisée. Le crocodile et l'impala se dégustent dans les restaurants touristiques."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée pour la plupart des nationalités. KAZA UniVisa avec la Zambie',
      health: 'Antipaludéens indispensables',
      safety: 'Situation politique variable. Se renseigner avant le voyage',
      transport: 'Vols vers Harare et Victoria Falls. Vols charters pour les camps'
    },
    testimonials: [
      {
        id: '1',
        author: 'Walking Safari Fan',
        country: 'Canada',
        rating: 5,
        text: "Mana Pools offre les meilleurs safaris à pied d'Afrique. Les guides zimbabwéens sont légendaires. Et les chutes Victoria sont à couper le souffle.",
        date: '2024-09-10'
      }
    ]
  },
  {
    id: 'zambie',
    name: 'Zambie',
    capital: 'Lusaka',
    description: "La Zambie est le berceau du walking safari. South Luangwa et Lower Zambezi offrent des expériences de brousse authentiques. Les chutes Victoria côté zambien et le lac Kariba complètent l'offre de ce pays accueillant.",
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    flag: '🇿🇲',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Anglais', 'Bemba', 'Nyanja', 'Tonga'],
    currency: 'Kwacha zambien (ZMW)',
    bestTimeToVisit: 'Mai à Octobre',
    highlights: ['South Luangwa', 'Lower Zambezi', 'Victoria Falls', 'Lac Kariba'],
    regions: [
      {
        id: 'south-luangwa',
        name: 'South Luangwa',
        description: "Berceau du walking safari, South Luangwa est l'un des plus grands sanctuaires de faune d'Afrique. La rivière Luangwa attire une concentration exceptionnelle d'animaux, notamment léopards et lycaons.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Léopards', 'Walking safari', 'Rivière Luangwa', 'Carmine bee-eaters'],
        activities: ['Walking safaris', 'Game drives', 'Night drives', 'Oiseaux'],
        gastronomy: ['Camps de brousse'],
        practicalInfo: {
          bestTime: 'Juin à Octobre',
          transport: 'Vol depuis Lusaka',
          accommodation: ['Mfuwe Lodge', 'Chinzombo', 'Norman Carr Safaris', 'Flatdogs Camp']
        }
      },
      {
        id: 'lower-zambezi',
        name: 'Lower Zambezi',
        description: "Le parc du Lower Zambezi face à Mana Pools offre des safaris aquatiques uniques. Canoë parmi les hippopotames et éléphants, pêche au tigerfish et camps exclusifs sur le fleuve caractérisent cette destination.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Safari en canoë', 'Tigerfish', 'Éléphants', 'Zambèze'],
        activities: ['Canoë', 'Pêche', 'Safari', 'Camping sauvage'],
        gastronomy: ['Lodges de qualité'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Vol depuis Lusaka',
          accommodation: ['Chiawa Camp', 'Old Mondoro', 'Sausage Tree Camp']
        }
      },
      {
        id: 'livingstone',
        name: 'Livingstone et Victoria Falls',
        description: "Côté zambien, les chutes Victoria offrent des perspectives différentes et l'accès à la Devil's Pool, piscine naturelle au bord du précipice. Livingstone est une ville touristique agréable.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Victoria Falls', 'Devil\'s Pool', 'Activités d\'aventure'],
        activities: ['Chutes', 'Devil\'s Pool', 'Rafting', 'Sunset cruise'],
        gastronomy: ['Restaurants internationaux'],
        practicalInfo: {
          bestTime: 'Août à Décembre (Devil\'s Pool)',
          transport: 'Vol vers Livingstone',
          accommodation: ['Royal Livingstone', 'Tongabezi', 'Islands of Siankaba']
        }
      },
      {
        id: 'kafue',
        name: 'Parc National de Kafue',
        description: "Le plus grand et plus ancien parc de Zambie reste peu visité. Plaines du Busanga inondées, grande diversité de faune et solitude absolue font de Kafue une destination pour puristes.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Busanga Plains', 'Lions', 'Antilopes rares', 'Wilderness'],
        activities: ['Safari', 'Walking safari', 'Solitude', 'Oiseaux'],
        gastronomy: ['Camps'],
        practicalInfo: {
          bestTime: 'Juin à Octobre (Busanga inondé Juillet-Octobre)',
          transport: 'Vol charter depuis Lusaka',
          accommodation: ['Busanga Bush Camp', 'Shumba', 'Musekese Camp']
        }
      }
    ],
    gastronomy: {
      dishes: ['Nshima', 'Ifisashi', 'Kapenta', 'Bream', 'Chibwabwa'],
      description: "La nshima (pâte de maïs) est l'aliment de base, similaire à la sadza. L'ifisashi (légumes aux arachides) et le kapenta (petits poissons séchés) sont des accompagnements typiques. Le tigerfish du Zambèze est un délice."
    },
    practicalInfo: {
      visa: 'e-visa disponible. KAZA UniVisa avec le Zimbabwe',
      health: 'Antipaludéens indispensables',
      safety: 'Pays sûr et accueillant',
      transport: 'Vols vers Lusaka et Livingstone. Vols charters pour les parcs'
    },
    testimonials: [
      {
        id: '1',
        author: 'Safari Purist',
        country: 'États-Unis',
        rating: 5,
        text: "South Luangwa est le meilleur endroit pour les walking safaris. Les guides zambiens sont exceptionnels et l'ambiance des camps sur la rivière est magique.",
        date: '2024-08-25'
      }
    ]
  },
  {
    id: 'mozambique',
    name: 'Mozambique',
    capital: 'Maputo',
    description: "Le Mozambique offre certaines des plus belles plages d'Afrique. L'archipel de Bazaruto, l'île de Benguerra et les côtes de Vilanculos attirent les amateurs de plongée et de farniente. L'héritage portugais ajoute une touche unique.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇲🇿',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Portugais', 'Makhuwa', 'Tsonga'],
    currency: 'Metical (MZN)',
    bestTimeToVisit: 'Avril à Novembre',
    highlights: ['Archipel de Bazaruto', 'Ilha de Moçambique', 'Plongée', 'Plages'],
    regions: [
      {
        id: 'bazaruto',
        name: 'Archipel de Bazaruto',
        description: "Classé parc national marin, l'archipel de Bazaruto offre des eaux cristallines, des récifs coralliens et des dunes de sable. Dugongs, dauphins et baleines peuplent ces eaux préservées.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages vierges', 'Dugongs', 'Plongée', 'Pêche'],
        activities: ['Plongée', 'Snorkeling', 'Pêche sportive', 'Observation baleines'],
        gastronomy: ['Fruits de mer', 'Cuisine portugaise'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Vol vers Vilanculos puis bateau',
          accommodation: ['andBeyond Benguerra', 'Azura Benguerra', 'Anantara Bazaruto']
        }
      },
      {
        id: 'tofo',
        name: 'Tofo et Inhambane',
        description: "Tofo est la capitale du plongeon au Mozambique. Raies manta géantes, requins-baleines et récifs coralliens attirent les plongeurs du monde entier. Inhambane colonial complète l'expérience.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Raies manta', 'Requins-baleines', 'Plongée', 'Inhambane'],
        activities: ['Plongée', 'Ocean safari', 'Surf', 'Patrimoine'],
        gastronomy: ['Fruits de mer', 'Piri-piri', 'Matapa'],
        practicalInfo: {
          bestTime: 'Octobre à Mars (requins-baleines)',
          transport: 'Route depuis Maputo',
          accommodation: ['Massinga Beach', 'Casa Barry', 'Barra Lodge']
        }
      },
      {
        id: 'maputo',
        name: 'Maputo',
        description: "Capitale aux influences portugaises, Maputo séduit par son architecture Art déco, ses restaurants de fruits de mer et son ambiance nonchalante. Le marché central et la vie nocturne sont animés.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Architecture coloniale', 'Marché central', 'Fruits de mer', 'Vie nocturne'],
        activities: ['Patrimoine', 'Gastronomie', 'Plages', 'Art'],
        gastronomy: ['Piri-piri chicken', 'Fruits de mer', 'Pão'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Vol international',
          accommodation: ['Polana Serena', 'Southern Sun Maputo', 'Hotel Cardoso']
        }
      },
      {
        id: 'ilha-de-mocambique',
        name: 'Ilha de Moçambique',
        description: "Classée UNESCO, l'île de Mozambique fut la capitale coloniale portugaise. Son architecture métissée portugaise, arabe et swahili et son atmosphère hors du temps en font un joyau historique.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Fort São Sebastião', 'Architecture UNESCO', 'Histoire', 'Plages'],
        activities: ['Patrimoine', 'Histoire', 'Photographie', 'Plages'],
        gastronomy: ['Cuisine créole', 'Fruits de mer'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Vol vers Nampula puis route',
          accommodation: ['Terraço das Quitandas', 'O Escondidinho']
        }
      },
      {
        id: 'quirimbas',
        name: 'Archipel des Quirimbas',
        description: "Au nord, l'archipel des Quirimbas offre des îles préservées et une culture swahili authentique. Ibo Island avec ses ruines coloniales et le parc national marin sont des trésors cachés.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Ibo Island', 'Plongée', 'Culture swahili', 'Isolement'],
        activities: ['Histoire', 'Plongée', 'Kayak', 'Dauphins'],
        gastronomy: ['Fruits de mer', 'Cuisine locale'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Vol vers Pemba',
          accommodation: ['Ibo Island Lodge', 'Azura Quilalea']
        }
      }
    ],
    gastronomy: {
      dishes: ['Piri-piri chicken', 'Matapa', 'Chamussas', 'Pão', 'Prawns Mozambique'],
      description: "La cuisine mozambicaine fusionne saveurs africaines et portugaises. Les fruits de mer au piri-piri sont légendaires. La matapa (feuilles de manioc au lait de coco) et les chamussas (samosas) sont des classiques. Le pão frais accompagne tous les repas."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée ou e-visa',
      health: 'Antipaludéens indispensables partout',
      safety: 'Éviter le nord (insurrection). Le sud est généralement sûr',
      transport: 'Vols vers Maputo. Vols intérieurs. Routes parfois difficiles'
    },
    testimonials: [
      {
        id: '1',
        author: 'Diver',
        country: 'Afrique du Sud',
        rating: 5,
        text: "Nager avec les requins-baleines à Tofo est l'expérience d'une vie. Bazaruto est un paradis. Le Mozambique mérite vraiment d'être découvert.",
        date: '2024-11-05'
      }
    ]
  },
  // PAYS AJOUTÉS
  {
    id: 'angola',
    name: 'Angola',
    capital: 'Luanda',
    description: "Le deuxième plus grand pays producteur de pétrole d'Afrique offre un contraste saisissant entre l'effervescence de Luanda et de vastes régions naturelles préservées. Les chutes spectaculaires de Kalandula, le parc national de Kissama et la culture lusophone distinctive en font une destination émergente.",
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    flag: '🇦🇴',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Portugais', 'Umbundu', 'Kimbundu', 'Kikongo'],
    currency: 'Kwanza (AOA)',
    bestTimeToVisit: 'Mai à Octobre (saison sèche)',
    highlights: ['Chutes de Kalandula', 'Luanda', 'Parc de Kissama', 'Plages du sud'],
    regions: [
      {
        id: 'luanda',
        name: 'Luanda',
        description: "Capitale dynamique et l'une des villes les plus chères d'Afrique, Luanda fascine par son énergie. La marginal (front de mer), l'architecture coloniale de la forteresse de São Miguel et la vie nocturne animée côtoient les défis urbains d'une métropole en pleine croissance pétrolière.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Baie de Luanda', 'Forteresse de São Miguel', 'Musée Nacional', 'Marché de Benfica'],
        activities: ['Vie urbaine', 'Histoire coloniale', 'Plages urbaines', 'Gastronomie'],
        gastronomy: ['Calulu', 'Moamba de galinha', 'Fruits de mer', 'Poulet piri-piri'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Taxi (coûteux)',
          accommodation: ['Hotel Presidente Luanda', 'EPIC SANA Luanda Hotel', 'Hotel Trópico']
        }
      },
      {
        id: 'kalandula',
        name: 'Chutes de Kalandula',
        description: "Sur la rivière Lucala, les chutes de Kalandula sont l'une des plus grandes d'Afrique en volume. Plus larges que les chutes Victoria, le rideau d'eau de 105 m de haut offre un spectacle puissant, surtout en saison des pluies, dans un cadre de forêt tropicale préservé.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Rideau d\'eau majestueux', 'Forêt tropicale', 'Point de vue principal'],
        activities: ['Observation des chutes', 'Photographie', 'Randonnée légère', 'Pique-nique'],
        gastronomy: ['Repas simples disponibles sur site'],
        practicalInfo: {
          bestTime: 'Novembre à Avril (plein débit maximal)',
          transport: 'Route depuis Malanje ou Ndalatando (4x4 conseillé)',
          accommodation: ['Pousadas à Malanje', 'Guesthouses locales']
        }
      },
      {
        id: 'kissama',
        name: 'Parc National de Quiçama (Kissama)',
        description: "Situé près de l'océan Atlantique, ce parc est un symbole des efforts de réhabilitation de la faune angolaise après la guerre civile. Grâce à l'Opération Noah's Ark, éléphants, girafes et autres espèces y ont été réintroduits pour des safaris en devenir.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Éléphants réintroduits', 'Savane et forêt', 'Proximité de l\'océan', 'Projet de conservation'],
        activities: ['Safari (en développement)', 'Observation des oiseaux', 'Visite du projet de conservation'],
        gastronomy: ['Cuisine du lodge'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Route depuis Luanda (1h30)',
          accommodation: ['Kissama Game Lodge', 'Camping organisé']
        }
      }
    ],
    gastronomy: {
      dishes: ['Moamba de galinha (poulet sauce palme)', 'Calulu (poisson séché ou viande avec feuilles)', 'Funje (pâte de manioc ou de maïs)', 'Mufete (poisson grillé avec haricots)'],
      description: "La cuisine angolaise est un riche héritage lusophone, à base de poisson, de poulet, de haricots et de manioc. Les sauces à l'huile de palme (moamba) et les plats de poisson séché (calulu) sont typiques. Les influences brésiliennes et portugaises sont également perceptibles."
    },
    practicalInfo: {
      visa: 'Visa obligatoire (e-visa disponible)',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables. Prévoir une pharmacie de base.',
      safety: 'Amélioration depuis la fin de la guerre, mais vigilance conseillée. Éviter les zones frontalières avec la RDC (nord).',
      transport: 'Vols internationaux vers Luanda (LAD). Réseau routier en grande partie détérioré, la location de 4x4 est quasi indispensable pour voyager hors des villes.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Explorateur moderne',
        country: 'Portugal',
        rating: 4,
        text: "L'Angola est une aventure. Luanda est intense, les chutes de Kalandula sont impressionnantes de puissance, et voir la nature reprendre ses droits à Kissama est porteur d'espoir. Un pays en reconstruction passionnant à découvrir.",
        date: '2024-06-12'
      }
    ]
  },
  {
    id: 'eswatini',
    name: 'Eswatini (Swaziland)',
    capital: 'Mbabane (administrative), Lobamba (royale et législative)',
    description: "Petit royaume montagneux enclavé en Afrique du Sud, l'Eswatini est l'une des dernières monarchies absolues d'Afrique. La riche culture swazi, les réserves naturelles et l'artisanat traditionnel (notamment les boucliers en peau et les perles) offrent une expérience authentique et paisible.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇸🇿',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Swati', 'Anglais'],
    currency: 'Lilangeni (SZL), à parité avec le Rand sud-africain',
    bestTimeToVisit: 'Mars à Mai et Septembre à Novembre (températures agréables)',
    highlights: ['Culture royale Swazi', 'Réserve de Mlilwane', 'Cérémonie Umhlanga (danse des roseaux)', 'Artisanat'],
    regions: [
      {
        id: 'ezulwini-valley',
        name: 'Vallée d\'Ezulwini',
        description: "La 'Vallée du Ciel' est le cœur touristique du pays, abritant de nombreux lodges, le marché artisanal de Mantenga et le site historique de la grotte d'Exil du roi Sobhuza II. Elle offre une vue imprenable sur les montagnes environnantes.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Marché artisanal de Mantenga', 'Cave d\'Exil', 'Vues panoramiques', 'Lodges'],
        activities: ['Shopping d\'artisanat', 'Visite culturelle', 'Randonnée légère', 'Détente'],
        gastronomy: ['Restaurants d\'hôtels', 'Cuisine internationale et locale'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Taxi ou voiture de location depuis Mbabane',
          accommodation: ['Royal Swazi Spa', 'Mantenga Lodge', 'Lugogo Sun']
        }
      },
      {
        id: 'mlilwane',
        name: 'Réserve de Faune de Mlilwane',
        description: "Première réserve privée de l'Eswatini, Mlilwane est un sanctuaire paisible où l'on peut observer la faune à pied, à vélo ou à cheval, sans prédateurs dangereux. C'est une introduction idéale à la nature swazie.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Safari à pied ou à vélo', 'Zèbres, antilopes, hippopotames', 'Montagnes', 'Repos'],
        activities: ['Randonnée', 'Vélo', 'Équitation', 'Observation faune en toute sécurité'],
        gastronomy: ['Restaurant de la réserve', 'Braai (barbecue)'],
        practicalInfo: {
          bestTime: 'Mars à Octobre',
          transport: 'Route depuis Mbabane ou l\'aéroport de Matsapha',
          accommodation: ['Reilly\'s Rock Hilltop Lodge', 'Mlilwane Rest Camp']
        }
      },
      {
        id: 'hlane',
        name: 'Parc National de Hlane Royal',
        description: "La plus grande réserve du pays, ancien terrain de chasse royal, abrite désormais lions, éléphants, rhinocéros blancs et une importante population d'oiseaux. Des safaris classiques en 4x4 y sont proposés.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Big Five (sans buffles)', 'Nidification des vautours', 'Histoire royale'],
        activities: ['Game drives', 'Observation des oiseaux', 'Visite culturelle'],
        gastronomy: ['Cuisine du camp'],
        practicalInfo: {
          bestTime: 'Mai à Septembre',
          transport: 'Route depuis Manzini',
          accommodation: ['Hlane Royal National Park Lodge', 'Ndlovu Camp']
        }
      }
    ],
    gastronomy: {
      dishes: ['Sishwala (bouillie de maïs épaisse)', 'Incwancwa (porridge aigre)', 'Sidvudvu (citrouille avec porridge de maïs)', 'Umbidvo wetintsanga (feuilles de courge aux cacahuètes)', 'Viande grillée'],
      description: "La cuisine swazie est simple et basée sur le maïs, les citrouilles et les légumes-feuilles. Les plats sont souvent accompagnés de viande grillée. La bière de sorgho traditionnelle (umcombotsi) est brassée pour les cérémonies."
    },
    practicalInfo: {
      visa: 'Pas de visa requis pour la plupart des nationalités pour un court séjour.',
      health: 'Région à risque de paludisme. Antipaludéens recommandés.',
      safety: 'Pays très sûr et paisible.',
      transport: 'Vols vers l\'aéroport international de Manzini (MTS). La location de voiture est le moyen le plus pratique pour se déplacer, ou les taxis.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Voyageur culturel',
        country: 'Royaume-Uni',
        rating: 5,
        text: "L'Eswatini est une bouffée d'air frais. La culture swazie est vibrante et accessible, et se promener au milieu des zèbres à Mlilwane est une expérience unique. Un petit royaume au grand cœur.",
        date: '2024-03-22'
      }
    ]
  },
  {
    id: 'lesotho',
    name: 'Lesotho',
    capital: 'Maseru',
    description: "Le 'Royaume dans le ciel' est le seul pays au monde situé entièrement au-dessus de 1000 mètres d'altitude. Enclavé en Afrique du Sud, il offre des paysages montagneux spectaculaires, une culture basotho forte avec ses célèbres couvertures et chapeaux coniques, et des aventures en 4x4 ou à cheval inoubliables.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇱🇸',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Sotho', 'Anglais'],
    currency: 'Loti (LSL), à parité avec le Rand sud-africain',
    bestTimeToVisit: 'Octobre à Avril (été, plus chaud). Les paysages d\'hiver (neige) sont magnifiques mais très froids.',
    highlights: ['Haute montagne (Drakensberg)', 'Culture Basotho', 'Passe de Sani (la plus haute d\'Afrique)', 'Ponys Basotho'],
    regions: [
      {
        id: 'sani-pass',
        name: 'Sani Pass et Highlands',
        description: "La légendaire Sani Pass est une piste de montagne vertigineuse qui relie le KwaZulu-Natal au Lesotho. En haut, à 2874 m, se trouve le 'pub le plus haut d'Afrique'. Les paysages lunaires des hauts plateaux (les Highlands) sont époustouflants.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Ascension de Sani Pass (4x4 obligatoire)', 'Pub le plus haut d\'Afrique', 'Vues panoramiques', 'Villages isolés'],
        activities: ['Aventure 4x4', 'Photographie', 'Rencontre avec les bergers Basotho', 'Randonnée courte'],
        gastronomy: ['Repas chaud au pub', 'Cuisine simple'],
        practicalInfo: {
          bestTime: 'Octobre à Avril (la passe peut être fermée par la neige en hiver)',
          transport: '4x4 indispensable. Tours organisés depuis Underberg (Afrique du Sud).',
          accommodation: ['Sani Mountain Lodge', 'Chalets en haut de la passe']
        }
      },
      {
        id: 'malealea',
        name: 'Région de Malealea',
        description: "Cette région reculée offre certains des paysages les plus pittoresques du Lesotho, avec des vallées profondes, des cascades et des villages traditionnels. C'est le point de départ idéal pour des randonnées à pied ou à dos de poney.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Lodge et mission de Malealea', 'Paysages de vallées', 'Randonnées avec guides locaux', 'Chutes de Maletsunyane (les plus hautes d\'Afrique australe)'],
        activities: ['Randonnée à pied ou à poney', 'Visite de villages', 'Observation des oiseaux', 'Repos en pleine nature'],
        gastronomy: ['Cuisine familiale du lodge', 'Produits locaux'],
        practicalInfo: {
          bestTime: 'Printemps et automne',
          transport: 'Route en terre depuis Maseru (4x4 recommandé)',
          accommodation: ['Malealea Lodge', 'Guesthouses communautaires']
        }
      },
      {
        id: 'tshehlanyane',
        name: 'Parc National de Sehlabathebe et Région de Tsehlanyane',
        description: "Le parc national de Sehlabathebe, classé UNESCO, est l'un des plus reculés et sauvages d'Afrique australe, avec des paysages de prairie alpine, des formations rocheuses étranges et une faune adaptée. La forêt primaire de Tsehlanyane est un joyau de biodiversité.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Paysages alpins uniques', 'Isolement total', 'Forêt primaire de Tsehlanyane', 'Endémisme'],
        activities: ['Trekking de plusieurs jours', 'Observation d\'espèces rares (léopard, gypaète barbu)', 'Camping sauvage', 'Photographie de paysages'],
        gastronomy: ['Nourriture de trek ou de camp de base'],
        practicalInfo: {
          bestTime: 'Décembre à Mars (été, plus accessible)',
          transport: 'Accès très difficile, nécessite un 4x4 robuste et un bon plan de voyage.',
          accommodation: ['Maliba Lodge (Tsehlanyane)', 'Chalets et camping basique dans le parc']
        }
      }
    ],
    gastronomy: {
      dishes: ['Papa (porridge de maïs)', 'Moroho (légumes-feuilles sautés)', 'Likhobe (ragoût de haricots, maïs et courge)', 'Viande de mouton (agneau festif)', 'Bière de sorgho traditionnelle'],
      description: "La cuisine basotho est nourrissante pour affronter le climat montagneux. Le papa (sadza) est l'aliment de base, accompagné de sauces de légumes ou de viande. Le mouton est la viande de prédilection pour les occasions spéciales. La bière de sorgho (joala) est une boisson sociale importante."
    },
    practicalInfo: {
      visa: 'Pas de visa requis pour de nombreux pays pour un court séjour.',
      health: 'Pas de paludisme en altitude. Se méfier du mal des montagnes. Hivers très froids, prévoir des vêtements adaptés.',
      safety: 'Pays très sûr, population accueillante.',
      transport: 'Vols limités vers Maseru (MSU). La route depuis l\'Afrique du Sud est le principal accès. Un 4x4 est indispensable pour explorer l\'intérieur du pays.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Randonneur',
        country: 'Afrique du Sud',
        rating: 5,
        text: "Le Lesotho, c'est un autre monde à deux pas de chez nous. Les paysages des Highlands sont à couper le souffle, et l'accueil dans les villages est d'une sincérité rare. Une aventure authentique.",
        date: '2024-01-15'
      }
    ]
  },
  {
    id: 'madagascar-afrique-australe',
    name: 'Madagascar',
    capital: 'Antananarivo',
    description: "Quatrième plus grande île du monde, Madagascar s'est séparée du continent il y a 88 millions d'années, développant une biodiversité unique au monde. Lémuriens, baobabs, forêts épineuses, rizières en terrasses et plages de rêve en font une destination hors norme pour les naturalistes et les aventuriers.",
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    flag: '🇲🇬',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Malgache', 'Français'],
    currency: 'Ariary (MGA)',
    bestTimeToVisit: 'Avril à Novembre (saison sèche). Décembre à Mars : chaud, humide et risque de cyclones.',
    highlights: ['Allée des Baobabs', 'Parcs à lémuriens (Andasibe)', 'Tsingy de Bemaraha', 'Plages de Nosy Be', 'Île Sainte-Marie'],
    regions: [
      {
        id: 'centre-mad',
        name: 'Centre - Antananarivo et Hautes Terres',
        description: "Antananarivo ('Tana'), capitale animée perchée sur douze collines. Les Hautes Terres offrent des paysages rizicoles en terrasses, des marchés artisanaux et l'accès aux forêts humides des lémuriens.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Palais de la Reine (Rova) à Tana', 'Parc d\'Andasibe-Mantadia (Indri)', 'Ambositra (artisanat Zafimaniry UNESCO)'],
        activities: ['Visite historique', 'Observation nocturne des lémuriens', 'Shopping d\'artisanat', 'Randonnée'],
        gastronomy: ['Romazava (ragoût de brèdes)', 'Ravitoto (feuilles de manioc pilées)', 'Rhum arrangé'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Taxis-brousses ou véhicule privé avec chauffeur.',
          accommodation: ['Hotel Carlton Madagascar', 'Vakona Forest Lodge']
        }
      },
      {
        id: 'ouest-mad',
        name: 'Ouest - Baobabs et Tsingy',
        description: "La région de l'Ouest est célèbre pour ses baobabs monumentaux (Allée des Baobabs) et les formations karstiques déchiquetées des Tsingy de Bemaraha, véritables cathédrales de calcaire classées UNESCO.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Allée des Baobabs à Morondava', 'Tsingy de Bemaraha (UNESCO)', 'Réserve de Kirindy (fosa)'],
        activities: ['Photographie des baobabs au coucher du soleil', 'Randonnée et via ferrata dans les Tsingy', 'Safari nocturne'],
        gastronomy: ['Poissons et fruits de mer', 'Cuisine simple'],
        practicalInfo: {
          bestTime: 'Avril à Novembre (les Tsingy sont inaccessibles en saison des pluies)',
          transport: 'Route difficile, 4x4 obligatoire.',
          accommodation: ['Chez Maggie (Morondava)', 'Lodge des Terres Blanches']
        }
      },
      {
        id: 'nord-mad',
        name: 'Nord - Nosy Be et Archipels',
        description: "Nosy Be, 'l'île aux parfums', est la destination balnéaire la plus connue, entourée d'îlots paradisiaques. Paradis pour la plongée, le snorkeling et l'observation des baleines à bosse (juillet-septembre).",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages de sable blanc', 'Réserve marine de Nosy Tanikely', 'Île de Nosy Komba (lémuriens)'],
        activities: ['Plongée et snorkeling', 'Observation des baleines', 'Excursion en bateau', 'Dégustation de rhum'],
        gastronomy: ['Fruits de mer grillés', 'Salade de poulpe'],
        practicalInfo: {
          bestTime: 'Avril à Décembre (juillet-sept. pour les baleines)',
          transport: 'Vol depuis Tana ou bateau.',
          accommodation: ['Andilana Beach Resort', 'Ravintsara Wellness Hotel']
        }
      }
    ],
    gastronomy: {
      dishes: ['Romazava (ragoût de viande et brèdes)', 'Ravitoto sy hena-kisoa (feuilles de manioc au porc)', 'Mofo gasy (petits gâteaux de riz)', 'Soupe chinoise malgache', 'Fruits tropicaux'],
      description: "La cuisine malgache est à base de riz (vary), consommé à presque tous les repas avec un accompagnement (laoka) de viande, poisson ou légumes. Les influences françaises, chinoises et indiennes sont perceptibles. Les fruits tropicaux sont délicieux. Le rhum arrangé est typique."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée pour la plupart des touristes (environ 35€ pour 30 jours).',
      health: 'Traitement antipaludéen indispensable. Risque de bilharziose dans certaines eaux douces.',
      safety: 'Vigilance accrue contre les vols, surtout à Tana. Circulation chaotique.',
      transport: 'Aéroport international d\'Ivato (TNR). Distances immenses et mauvais réseau routier. Vols domestiques conseillés.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Naturaliste amateur',
        country: 'France',
        rating: 5,
        text: "Madagascar est un rêve. Voir un Indri indri crier au lever du jour, se tenir au pied des baobabs géants, plonger dans des eaux cristallines... C'est fatiguant à parcourir, mais chaque jour est une découverte extraordinaire.",
        date: '2024-08-05'
      }
    ]
  },
  {
    id: 'malawi',
    name: 'Malawi',
    capital: 'Lilongwe',
    description: "Le 'Cœur chaud de l'Afrique' tire son nom de l'accueil légendaire de son peuple. Le lac Malawi, troisième plus grand lac d'Afrique, est son joyau, offrant plages de sable doré, eaux cristallines idéales pour le snorkeling parmi les cichlidés colorés, et une atmosphère détendue.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇲🇼',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Anglais', 'Chichewa'],
    currency: 'Kwacha malawien (MWK)',
    bestTimeToVisit: 'Mai à Octobre (saison sèche et fraîche)',
    highlights: ['Lac Malawi', 'Parc National de Liwonde', 'Plateau de Zomba', 'Îles de Likoma et Chizumulu'],
    regions: [
      {
        id: 'lake-malawi-south',
        name: 'Lac Malawi (Région Sud)',
        description: "La partie sud du lac est la plus développée touristiquement, avec des lodges et des plages autour de Cape Maclear (région du parc national du lac Malawi, UNESCO) et de Monkey Bay. L'eau est claire, les poissons tropicaux abondants et l'ambiance décontractée.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Cape Maclear', 'Snorkeling avec les cichlidés', 'Parc National du Lac Malawi (UNESCO)', 'Île de Mumbo'],
        activities: ['Snorkeling et plongée', 'Kayak', 'Croisière en dhow', 'Randonnée', 'Détente sur la plage'],
        gastronomy: ['Poisson frais du lac (chambo)', 'Nsima (pâte de maïs)', 'Salade de légumes'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Route depuis Lilongwe ou Blantyre. Bateau-taxi pour les îles.',
          accommodation: ['Pumulani Lodge', 'Mgoza Lodge', 'Gecko Lounge']
        }
      },
      {
        id: 'liwonde',
        name: 'Parc National de Liwonde',
        description: "Considéré comme le meilleur parc de faune du Malawi, Liwonde est bordé par la rivière Shire. Réintroductions réussies de lions et de rhinocéros noirs, forte population d'éléphants et promenades en bateau pour observer hippopotames et oiseaux aquatiques.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Safari en bateau sur la Shire', 'Rhinocéros noirs', 'Éléphants', 'Observation des oiseaux'],
        activities: ['Game drives', 'Croisière safari', 'Walking safaris', 'Observation des oiseaux'],
        gastronomy: ['Cuisine de lodge'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Route depuis Blantyre ou Lilongwe, ou transfert en bateau depuis le lac.',
          accommodation: ['Kuthengo Camp', 'Mvuu Lodge', 'Chintheche Inn']
        }
      },
      {
        id: 'northern-lake',
        name: 'Lac Malawi (Nord et Îles)',
        description: "Plus sauvage et moins fréquenté, le nord du lac abrite les charmantes îles de Likoma et Chizumulu (enclaves malawiennes dans les eaux mozambicaines) et la ville historique de Nkhata Bay. L'atmosphère y est encore plus authentique.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Île de Likoma (cathédrale anglicane)', 'Nkhata Bay', 'Plongée', 'Culture locale'],
        activities: ['Plongée sous-marine', 'Exploration d\'îles', 'Rencontre avec les communautés de pêcheurs', 'Farniente'],
        gastronomy: ['Poisson fumé', 'Nshima', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Avril à Novembre',
          transport: 'Bateau lent ou vol charter pour Likoma. Route pour Nkhata Bay.',
          accommodation: ['Kaya Mawa (Likoma)', 'Butterfly Space (Nkhata Bay)']
        }
      }
    ],
    gastronomy: {
      dishes: ['Nsima (pâte de maïs, l\'aliment de base)', 'Chambo (tilapia du lac, grillé ou frit)', 'Ndiwo (accompagnement de légumes, viande ou poisson servi avec la nsima)', 'Mbatata (bonbons à la patate douce)', 'Thobwa (boisson sucrée à base de sorgho ou de maïs)'],
      description: "La cuisine malawienne tourne autour de la nsima, une pâte de maïs blanche semblable au sadza, accompagnée de ragoûts de légumes (ndiwo), de viande ou de poisson. Le chambo (tilapia) du lac est le poisson national. La street food comprend des beignets et des brochettes."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée disponible pour la plupart des nationalités.',
      health: 'Traitement antipaludéen indispensable dans tout le pays.',
      safety: 'Pays très sûr et peuple extrêmement accueillant.',
      transport: 'Vols internationaux vers Lilongwe (LLW) et Blantyre (BLZ). Réseau de bus étendu. Location de voiture possible.'
    },
    testimonials: [
      {
        id: '1',
        author: 'Voyageur en famille',
        country: 'Royaume-Uni',
        rating: 5,
        text: "Le Malawi est parfait pour une première expérience en Afrique en famille. Le lac est magnifique et sûr pour se baigner, les enfants ont adoré les poissons colorés. Et les Malawiens méritent vraiment leur surnom de 'cœur chaud'.",
        date: '2024-07-30'
      }
    ]
  },
  {
    id: 'maurice-afrique-australe',
    name: 'Maurice',
    capital: 'Port-Louis',
    description: "Île volcanique luxuriante entourée d'un lagon turquoise et protégée par une barrière de corail. Maurice combine plages de carte postale, culture créole dynamique, histoire (Aapravasi Ghat) et une population multiculturelle (créole, indienne, chinoise, européenne) accueillante.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇲🇺',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Créole mauricien', 'Français', 'Anglais'],
    currency: 'Roupie mauricienne (MUR)',
    bestTimeToVisit: 'Mai à Décembre (hiver austral, frais et sec). Éviter Janvier à Mars (cyclones).',
    highlights: ['Plages de Flic-en-Flac et Trou aux Biches', 'Chamarel (terre 7 couleurs, chutes)', 'Port-Louis (marché central)', 'Île aux Cerfs'],
    regions: [
      {
        id: 'north-mauritius',
        name: 'Nord (Plages & Animations)',
        description: "Région la plus touristique, offrant les plus belles plages de sable blanc (Trou aux Biches, Mont Choisy) et une vie nocturne animée à Grand Baie. Idéale pour les familles et ceux qui aiment l'animation.",
        image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede3?w=800',
        highlights: ['Grand Baie', 'Plage de Trou aux Biches', 'Jardin de Pamplemousses (nénuphars géants)', 'Cap Malheureux'],
        activities: ['Sports nautiques', 'Shopping', 'Plongée avec tuba', 'Golf', 'Excursions en bateau'],
        gastronomy: ['Restaurants internationaux et créoles', 'Dhodas (snacks)', 'Alouda (boisson)'],
        practicalInfo: {
          bestTime: 'Mai à Décembre',
          transport: 'Location de voiture, taxi ou bus. Route facile.',
          accommodation: ['The Oberoi Beach Resort', 'Trou aux Biches Beachcomber', 'Lux* Grand Gaube']
        }
      },
      {
        id: 'south-west-mauritius',
        name: 'Sud-Ouest (Nature & Culture)',
        description: "Côte plus sauvage et authentique, avec des paysages volcaniques spectaculaires comme Chamarel, la capitale Port-Louis et le parc national des Gorges de la Rivière Noire. On y découvre l'histoire et la nature de l'île.",
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800',
        highlights: ['Chamarel (cascade et terre 7 couleurs)', 'Le Morne Brabant (UNESCO)', 'Port-Louis (marché, Aapravasi Ghat UNESCO)', 'Gorges de la Rivière Noire'],
        activities: ['Randonnée au Morne Brabant', 'Visite des domaines de rhum', 'Découverte du patrimoine à Port-Louis', 'Observation des baleines (juillet-nov.)'],
        gastronomy: ['Cuisine créole authentique', 'Déjeuners traditionnels', 'Dégustation de rhum'],
        practicalInfo: {
          bestTime: 'Toute l\'année (plus venteux de Juin à Septembre)',
          transport: 'Location de voiture recommandée.',
          accommodation: ['Lakaz Chamarel', 'Shanti Maurice', 'Résidence Peramal']
        }
      }
    ],
    gastronomy: {
      dishes: ['Rougaille (ragoût de tomates épicé)', 'Carri (curry) de poulet, poisson ou oursins', 'Mine frit (nouilles sautées)', 'Gateaux piments (beignets de lentilles)', 'Dholl puri (galette farcie)'],
      description: "La gastronomie mauricienne est un festival de saveurs multiculturelles : influences indiennes (currys), chinoises (mines frits), créoles (rougaille) et européennes. Le street food est excellent. Les fruits tropicaux et les rhums locaux sont incontournables."
    },
    practicalInfo: {
      visa: 'Aucun visa requis pour les séjours touristiques de moins de 90 jours pour la plupart des nationalités.',
      health: 'Aucun vaccin obligatoire. Pas de paludisme.',
      safety: 'Très sûr. Petite délinquance occasionnelle à Port-Louis.',
      transport: 'Aéroport international Sir Seewoosagur Ramgoolam (MRU). Location de voiture très pratique (conduite à gauche!).'
    },
    testimonials: [
      {
        id: '1',
        author: 'Lune de miel',
        country: 'France',
        rating: 5,
        text: "Maurice a été parfaite pour notre lune de miel. Des plages de rêve, une nature luxuriante à Chamarel, une cuisine incroyablement variée... Le mélange de détente et de découverte était idéal.",
        date: '2024-02-14'
      }
    ]
  },
  {
    id: 'seychelles-afrique-australe',
    name: 'Seychelles',
    capital: 'Victoria',
    description: "Archipel paradisiaque de 115 îles dans l'océan Indien, célèbre pour ses plages de sable blanc parmi les plus belles du monde, ses rochers de granit spectaculaires et sa nature préservée. Une destination de luxe pour la lune de miel et l'écotourisme.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    flag: '🇸🇨',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Seychellois (créole)', 'Anglais', 'Français'],
    currency: 'Roupie seychelloise (SCR)',
    bestTimeToVisit: 'Avril à Mai et Octobre à Novembre (périodes intermédiaires, moins de vent/pluie)',
    highlights: ['Plage d\'Anse Source d\'Argent (La Digue)', 'Vallée de Mai (UNESCO, coco de mer)', 'Parc marin de Sainte Anne', 'Île de Praslin'],
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
    id: 'comores-afrique-australe',
    name: 'Comores',
    capital: 'Moroni',
    description: "Archipel volcanique de l'océan Indien, les Comores sont 'les îles de la Lune' avec une culture swahili-arabe unique. Pays pauvre mais aux paysages spectaculaires, avec le volcan actif du Karthala, des forêts tropicales et des plages de sable noir. Une destination authentique et hors des sentiers battus.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    flag: '🇰🇲',
    continent: 'Afrique',
    subRegion: 'Afrique australe',
    languages: ['Comorien (shikomor)', 'Arabe', 'Français'],
    currency: 'Franc comorien (KMF) - indexé sur l\'euro',
    bestTimeToVisit: 'Mai à Novembre (saison sèche et fraîche)',
    highlights: ['Volcan Karthala (Grande Comore)', 'Ancienne médina de Moroni', 'Île de Mohéli (parc marin, tortues)', 'Plages de sable noir'],
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
  }
];