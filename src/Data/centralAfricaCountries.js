export const centralAfricaCountries = [
  {
    id: 'cameroun',
    name: 'Cameroun',
    capital: 'Yaoundé',
    description: "L'Afrique en miniature ! Le Cameroun offre une diversité exceptionnelle : des plages de Kribi aux montagnes de l'Ouest, des forêts tropicales du Sud aux savanes du Nord. Cultures Bamiléké, Beti, Peul et Pygmée coexistent dans ce pays fascinant.",
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    flag: '🇨🇲',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Français', 'Anglais', 'Fang', 'Bamiléké', 'Peul'],
    currency: 'Franc CFA (XAF)',
    bestTimeToVisit: 'Novembre à Février',
    highlights: ['Parc de Waza', 'Chutes de la Lobé', 'Pays Bamiléké', 'Mont Cameroun'],
    regions: [
      {
        id: 'yaounde',
        name: 'Yaoundé',
        description: "Capitale politique nichée dans les collines, Yaoundé offre une atmosphère plus calme que Douala. Le Musée National, le Mont Fébé et les marchés colorés permettent de découvrir la culture camerounaise.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Musée National', 'Mont Fébé', 'Cathédrale', 'Marché Mokolo'],
        activities: ['Musées', 'Randonnée', 'Vie nocturne', 'Gastronomie'],
        gastronomy: ['Ndolé', 'Poulet DG', 'Beignets haricots', 'Eru'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Taxi, Moto-taxi',
          accommodation: ['Hilton Yaoundé', 'Mont Febe Hotel', 'Merina Hotel']
        }
      },
      {
        id: 'douala',
        name: 'Douala',
        description: "Capitale économique et plus grande ville, Douala est le poumon commercial du Cameroun. Le port, les marchés et la vie nocturne animée en font une ville énergique au bord du Wouri.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Port', 'Marché des fleurs', 'Bonanjo', 'Vie nocturne'],
        activities: ['Business', 'Marchés', 'Restaurants', 'Musique'],
        gastronomy: ['Poisson braisé', 'Sanga', 'Miondo', 'Bière locale'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: 'Taxi, Moto-taxi',
          accommodation: ['Pullman Douala', 'Akwa Palace', 'Sawa Hotel']
        }
      },
      {
        id: 'kribi',
        name: 'Kribi',
        description: "Station balnéaire prisée, Kribi offre des plages de sable fin et les spectaculaires chutes de la Lobé qui se jettent directement dans l'océan. Les villages pygmées et la gastronomie de fruits de mer complètent l'expérience.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Chutes de la Lobé', 'Plages', 'Villages Pygmées', 'Fruits de mer'],
        activities: ['Plage', 'Chutes', 'Rencontre Pygmées', 'Pêche'],
        gastronomy: ['Crevettes géantes', 'Poisson grillé', 'Langoustes'],
        practicalInfo: {
          bestTime: 'Décembre à Mars',
          transport: 'Bus depuis Douala',
          accommodation: ['Hotel Ilomba', 'Tara Plage', 'Fini Hotel']
        }
      },
      {
        id: 'ouest-cameroun',
        name: "Région de l'Ouest",
        description: "Pays Bamiléké aux paysages vallonnés, l'Ouest camerounais est réputé pour ses chefferies traditionnelles, son artisanat et son dynamisme économique. Bafoussam et les villages alentour offrent une immersion culturelle unique.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Chefferies Bamiléké', 'Lac Baleng', 'Artisanat', 'Mont Manengouba'],
        activities: ['Culture Bamiléké', 'Artisanat', 'Randonnée', 'Chefferies'],
        gastronomy: ['Nkui', 'Kondre', 'Koki', 'Vin de raphia'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Douala/Yaoundé',
          accommodation: ['Hotel Ayaba', 'Le Diplomat Bafoussam']
        }
      },
      {
        id: 'nord-cameroun',
        name: 'Région du Nord',
        description: "Savanes, montagnes et cultures sahéliennes caractérisent le Nord. Le Parc National de Waza est l'un des meilleurs d'Afrique centrale pour observer la faune. Les Monts Mandara offrent des paysages spectaculaires.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Parc de Waza', 'Monts Mandara', 'Maroua', 'Rhumsiki'],
        activities: ['Safari', 'Culture peul', 'Randonnée', 'Villages'],
        gastronomy: ['Kilichi', 'Foléré', 'Lait caillé'],
        practicalInfo: {
          bestTime: 'Janvier à Mars',
          transport: 'Vol vers Maroua ou route',
          accommodation: ['Campement de Waza', 'La Porte Mayo Maroua']
        }
      },
      {
        id: 'littoral',
        name: 'Région du Littoral',
        description: "Entre Douala et Kribi, le Littoral offre des plages, des mangroves et la réserve de la Douala-Edéa. Le Mont Cameroun, plus haut sommet d'Afrique de l'Ouest, domine la région avec ses 4095 mètres.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Mont Cameroun', 'Limbe', 'Buea', 'Plages volcaniques'],
        activities: ['Ascension Mont Cameroun', 'Plages', 'Jardins botaniques'],
        gastronomy: ['Ekwang', 'Achu', 'Eru'],
        practicalInfo: {
          bestTime: 'Décembre à Février (ascension)',
          transport: 'Route depuis Douala',
          accommodation: ['Mount Cameroon Eco Resort', 'Mermoz Limbe']
        }
      }
    ],
    gastronomy: {
      dishes: ['Ndolé', 'Poulet DG', 'Eru', 'Koki', 'Achu', 'Sanga'],
      description: "La cuisine camerounaise est l'une des plus riches d'Afrique. Le Ndolé, plat national aux feuilles amères et crevettes, est un délice. Le Poulet DG (Directeur Général), le Koki et l'Eru sont des incontournables. Les bières locales sont excellentes."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: "Éviter les régions anglophones (Nord-Ouest, Sud-Ouest) et l'Extrême-Nord",
      transport: 'Vols vers Douala et Yaoundé. Réseau de bus. Routes parfois difficiles'
    },
    testimonials: [
      {
        id: '1',
        author: 'Jean-Claude Mbarga',
        country: 'Cameroun',
        rating: 5,
        text: "Mon pays natal est vraiment l'Afrique en miniature. Du Mont Cameroun aux plages de Kribi, de Waza au pays Bamiléké, quelle diversité !",
        date: '2024-03-01'
      }
    ]
  },
  {
    id: 'gabon',
    name: 'Gabon',
    capital: 'Libreville',
    description: "Le Gabon est l'Éden africain. Avec 85% de son territoire couvert de forêt équatoriale, le pays est un sanctuaire de biodiversité. Gorilles, éléphants de forêt, baleines et plages désertes font du Gabon une destination nature exceptionnelle.",
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    flag: '🇬🇦',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Français', 'Fang', 'Myéné'],
    currency: 'Franc CFA (XAF)',
    bestTimeToVisit: 'Juin à Septembre',
    highlights: ['Parc de la Lopé', 'Pointe Denis', 'Gorilles', 'Baleines'],
    regions: [
      {
        id: 'libreville',
        name: 'Libreville',
        description: "Capitale moderne sur l'estuaire du Gabon, Libreville offre un contraste entre immeubles et forêts. La Pointe Denis, accessible en pirogue, offre des plages idylliques à quelques minutes de la ville.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Pointe Denis', 'Marché Mont-Bouët', 'Cathédrale Sainte-Marie', 'Bord de mer'],
        activities: ['Plages', 'Observation baleines', 'Vie nocturne', 'Gastronomie'],
        gastronomy: ['Poisson fumé', 'Nyembwé', 'Feuilles de manioc'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxi',
          accommodation: ['Radisson Blu Okoumé', 'Park Inn by Radisson', 'Hotel Re Ndama']
        }
      },
      {
        id: 'lope',
        name: 'Parc National de la Lopé',
        description: "Classé UNESCO, la Lopé est un mélange unique de forêt et de savane. Gorilles, mandrills, éléphants de forêt et buffles peuplent ce parc accessible en train. L'art rupestre ajoute une dimension historique.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Gorilles', 'Mandrills', 'Art rupestre', 'Train'],
        activities: ['Safari', 'Tracking gorilles', 'Train', 'Randonnée'],
        gastronomy: ['Cuisine de brousse', 'Gibier'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Transgabonais (train)',
          accommodation: ['Lopé Hotel', 'Mikongo Camp']
        }
      },
      {
        id: 'loango',
        name: 'Parc National de Loango',
        description: "Surnommé le dernier paradis africain, Loango offre un spectacle unique : des éléphants et buffles sur les plages, des baleines à bosse dans l'océan, des gorilles dans la forêt. Un écosystème exceptionnel.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Éléphants sur la plage', 'Baleines', 'Forêt', 'Lagunes'],
        activities: ['Safari plage', 'Observation baleines', 'Kayak', 'Gorilles'],
        gastronomy: ['Poisson frais', 'Cuisine de lodge'],
        practicalInfo: {
          bestTime: 'Juillet à Septembre (baleines)',
          transport: 'Vol puis pirogue',
          accommodation: ['Loango Lodge', 'Operations Loango']
        }
      },
      {
        id: 'ivindo',
        name: "Parc National de l'Ivindo",
        description: "L'Ivindo est le paradis des chutes d'eau. Les majestueuses chutes de Kongou, les chutes de Mingouli et la forêt primaire abritent gorilles et chimpanzés. Un sanctuaire préservé au cœur du Gabon.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Chutes de Kongou', 'Chutes de Mingouli', 'Forêt primaire', 'Grands singes'],
        activities: ['Chutes', 'Randonnée', 'Observation faune', 'Pirogue'],
        gastronomy: ['Poisson de rivière', 'Manioc'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: '4x4 puis pirogue depuis Makokou',
          accommodation: ['Campements', 'Bungalows']
        }
      },
      {
        id: 'port-gentil',
        name: 'Port-Gentil',
        description: "Capitale économique (pétrole), Port-Gentil est une île accessible uniquement par avion ou bateau. Au-delà de l'industrie, les plages et l'accès au parc de Loango en font une escale intéressante.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages', 'Cap Lopez', 'Porte vers Loango'],
        activities: ['Plages', 'Pêche', 'Excursions Loango'],
        gastronomy: ['Fruits de mer', 'Cuisine internationale'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Vol depuis Libreville',
          accommodation: ['Meridien Re-Ndama', 'Hotels locaux']
        }
      }
    ],
    gastronomy: {
      dishes: ['Nyembwé', 'Poisson fumé', 'Feuilles de manioc', 'Pangolin (protégé)', 'Odika'],
      description: "La cuisine gabonaise utilise abondamment le manioc, le poisson fumé et le poulet au nyembwé (sauce de noix de palme). L'odika (chocolat gabonais) parfume de nombreux plats. La viande de brousse traditionnelle est désormais protégée."
    },
    practicalInfo: {
      visa: 'Visa obligatoire ou e-visa',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: 'Pays sûr. Infrastructure limitée hors Libreville',
      transport: 'Vols vers Libreville. Transgabonais (train). Routes difficiles'
    },
    testimonials: [
      {
        id: '1',
        author: 'Sarah Williams',
        country: 'Royaume-Uni',
        rating: 5,
        text: "Voir des éléphants marcher sur la plage à Loango est surréaliste. Le Gabon est le secret le mieux gardé d'Afrique pour les amoureux de la nature.",
        date: '2024-08-15'
      }
    ]
  },
  {
    id: 'congo-brazzaville',
    name: 'République du Congo',
    capital: 'Brazzaville',
    description: "La République du Congo, ou Congo-Brazzaville, est traversée par le puissant fleuve Congo. Des forêts du Nord abritant gorilles et éléphants aux villes coloniales de Brazzaville et Pointe-Noire, le pays offre nature et culture.",
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    flag: '🇨🇬',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Français', 'Kituba', 'Lingala'],
    currency: 'Franc CFA (XAF)',
    bestTimeToVisit: 'Juin à Septembre',
    highlights: ['Fleuve Congo', "Parc d'Odzala", 'Brazzaville', 'Pointe-Noire'],
    regions: [
      {
        id: 'brazzaville',
        name: 'Brazzaville',
        description: "Capitale face à Kinshasa, Brazzaville est une ville à taille humaine. Les rapides du Congo, les Sapeurs (dandys congolais) et l'ambiance musicale en font une capitale attachante.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Rapides du Congo', 'Basilique Sainte-Anne', 'Marché Poto-Poto', 'Sapeurs'],
        activities: ['Fleuve', 'Culture Sape', 'Musique congolaise', 'Marchés'],
        gastronomy: ['Saka-saka', 'Poulet Moambé', 'Poisson à la braise'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxi',
          accommodation: ["Radisson Blu M'Bamou", 'Hotel Ledger Plaza Maya Maya']
        }
      },
      {
        id: 'pointe-noire',
        name: 'Pointe-Noire',
        description: "Capitale économique (pétrole) sur l'Atlantique, Pointe-Noire offre des plages, une vie nocturne animée et sert de porte d'entrée vers la réserve de Conkouati-Douli avec ses gorilles et tortues marines.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages', 'Vie nocturne', 'Réserve Conkouati', 'Côte Sauvage'],
        activities: ['Plages', 'Tortues marines', 'Vie nocturne'],
        gastronomy: ['Poisson grillé', 'Fruits de mer', 'Bière Primus'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxi',
          accommodation: ['Azur Hotel', 'Atlantic Palace', 'Victory Palace']
        }
      },
      {
        id: 'odzala',
        name: "Parc National d'Odzala-Kokoua",
        description: "L'un des plus beaux parcs d'Afrique, Odzala abrite la plus grande concentration de gorilles des plaines de l'ouest. Forêt primaire, clairières (bais) et faune exceptionnelle font de ce parc un joyau.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Gorilles des plaines', 'Éléphants de forêt', 'Bais', 'Forêt primaire'],
        activities: ['Tracking gorilles', 'Safari', 'Pirogue', 'Observation faune'],
        gastronomy: ['Cuisine de lodge'],
        practicalInfo: {
          bestTime: 'Décembre à Mars / Juin à Septembre',
          transport: 'Vol depuis Brazzaville',
          accommodation: ['Odzala Discovery Camps', 'Ngaga Camp', 'Lango Camp']
        }
      },
      {
        id: 'likouala',
        name: 'Région de la Likouala',
        description: "Au nord, la Likouala est une région de forêts et de marécages. Le mystérieux Mokélé-mbembé (créature légendaire) et les tribus Aka (Pygmées) peuplent cette région isolée et sauvage.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Forêts marécageuses', 'Pygmées Aka', 'Faune sauvage'],
        activities: ['Exploration', 'Culture Pygmée', 'Nature sauvage'],
        gastronomy: ['Cuisine locale', 'Gibier'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Avion puis pirogue',
          accommodation: ['Campements']
        }
      }
    ],
    gastronomy: {
      dishes: ['Saka-saka', 'Poulet Moambé', 'Poisson à la braise', 'Chikwangue'],
      description: "La cuisine congolaise tourne autour du manioc sous toutes ses formes (saka-saka, chikwangue) et du poisson. Le poulet Moambé (sauce noix de palme) est le plat national. Les chenilles grillées sont une spécialité prisée."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: 'Relativement sûr. Region du Pool à éviter',
      transport: 'Vols vers Brazzaville et Pointe-Noire. Réseau routier limité'
    },
    testimonials: [
      {
        id: '1',
        author: 'Michel Lefèvre',
        country: 'France',
        rating: 5,
        text: "Odzala est un sanctuaire. Voir les gorilles de si près dans leur habitat naturel est une expérience qui change une vie.",
        date: '2024-07-20'
      }
    ]
  },
  {
    id: 'rdc',
    name: 'République Démocratique du Congo',
    capital: 'Kinshasa',
    description: "Le géant de l'Afrique ! La RDC est un pays-continent aux richesses naturelles inestimables. Du mythique fleuve Congo aux volcans du Virunga, des gorilles de montagne aux forêts du bassin du Congo, le pays fascine malgré ses défis.",
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    flag: '🇨🇩',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Français', 'Lingala', 'Swahili', 'Kikongo', 'Tshiluba'],
    currency: 'Franc congolais (CDF)',
    bestTimeToVisit: 'Juin à Septembre',
    highlights: ['Parc des Virunga', 'Kinshasa', 'Gorilles de montagne', 'Volcan Nyiragongo'],
    regions: [
      {
        id: 'kinshasa',
        name: 'Kinshasa',
        description: "Troisième plus grande ville d'Afrique, Kinshasa est une mégalopole de 15 millions d'habitants. Berceau de la rumba congolaise, la ville vibre au rythme de la musique. Le fleuve Congo sépare Kin de Brazzaville.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Fleuve Congo', 'Académie des Beaux-Arts', 'Gombe', 'Vie nocturne'],
        activities: ['Musique congolaise', 'Art', 'Vie nocturne', 'Fleuve'],
        gastronomy: ['Liboke', 'Pondu', 'Poulet à la Moambé', 'Primus'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxi',
          accommodation: ['Pullman Kinshasa', 'Memling Hotel', 'Sultani Hotel']
        }
      },
      {
        id: 'virunga',
        name: 'Parc National des Virunga',
        description: "Premier parc national d'Afrique (1925), Virunga est classé UNESCO. Les gorilles de montagne, le volcan Nyiragongo avec son lac de lave et les chimpanzés de Tongo en font un site unique au monde, malgré l'insécurité.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Gorilles de montagne', 'Volcan Nyiragongo', 'Chimpanzés', 'Lac Kivu'],
        activities: ['Tracking gorilles', 'Ascension volcan', 'Chimpanzés', 'Randonnée'],
        gastronomy: ['Cuisine locale', 'Lodge'],
        practicalInfo: {
          bestTime: 'Juin à Septembre / Décembre à Février',
          transport: 'Vol vers Goma',
          accommodation: ['Mikeno Lodge', 'Bukima Patrol Post']
        }
      },
      {
        id: 'goma',
        name: 'Goma',
        description: "Ville sur le lac Kivu au pied du Nyiragongo, Goma est la porte d'entrée du Virunga. Malgré les défis sécuritaires, la beauté du lac, les îles de Tchegera et la culture locale attirent les voyageurs intrépides.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Lac Kivu', 'Volcan Nyiragongo', 'Île de Tchegera'],
        activities: ['Lac', 'Kayak', 'Volcan', 'Culture locale'],
        gastronomy: ['Tilapia du lac', 'Samosas', 'Bière Primus'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Vol depuis Kinshasa ou Kigali',
          accommodation: ['Ihusi Hotel', 'Lake Kivu Lodge', 'Serena Hotel']
        }
      },
      {
        id: 'lubumbashi',
        name: 'Lubumbashi',
        description: "Deuxième ville du pays, capitale du cuivre et de la province du Haut-Katanga, Lubumbashi est une ville industrielle relativement paisible. Son architecture coloniale et sa proximité avec la Zambie en font une étape intéressante.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Architecture coloniale', 'Parc de la Kundelungu', 'Chutes de la Lofoi'],
        activities: ['Patrimoine', 'Parc national', 'Chutes'],
        gastronomy: ['Bifteck frites', 'Cuisine belge', 'Bière Simba'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Vol depuis Kinshasa',
          accommodation: ['Pullman Lubumbashi Grand Karavia', 'Hotel Memling']
        }
      },
      {
        id: 'kahuzi-biega',
        name: 'Parc de Kahuzi-Biega',
        description: "Classé UNESCO, Kahuzi-Biega est le sanctuaire des gorilles de Grauer (gorilles des plaines de l'est), les plus grands primates du monde. La forêt dense et la biodiversité exceptionnelle justifient le voyage.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Gorilles de Grauer', 'Forêt de montagne', 'Monts Kahuzi et Biega'],
        activities: ['Tracking gorilles', 'Randonnée', 'Observation faune'],
        gastronomy: ['Cuisine de lodge'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Depuis Bukavu',
          accommodation: ['Campements du parc', 'Hotels à Bukavu']
        }
      }
    ],
    gastronomy: {
      dishes: ['Pondu', 'Liboke', 'Poulet Moambé', 'Fufu', 'Makayabu'],
      description: "La cuisine congolaise est riche et variée. Le pondu (feuilles de manioc) est omniprésent, servi avec du fufu. Le liboke, poisson ou poulet cuit dans des feuilles de bananier, est un délice. Les chenilles (mbangu) sont un mets prisé."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens et précautions Ebola',
      safety: "ATTENTION: Situation sécuritaire complexe dans l'est. Se renseigner avant tout voyage",
      transport: 'Vols vers Kinshasa. Infrastructure limitée. Vols intérieurs recommandés'
    },
    testimonials: [
      {
        id: '1',
        author: 'David Attenborough Fan',
        country: 'Canada',
        rating: 5,
        text: "L'ascension du Nyiragongo et son lac de lave sont irréels. Les gorilles de Virunga sont majestueux. La RDC demande de la préparation mais quelle récompense !",
        date: '2023-07-10'
      }
    ]
  },
  {
    id: 'centrafrique',
    name: 'République Centrafricaine',
    capital: 'Bangui',
    description: "Au cœur du continent, la Centrafrique reste l'un des pays les moins visités d'Afrique en raison de l'instabilité. Pourtant, le parc de Dzanga-Sangha et ses gorilles de plaine, éléphants de forêt et Pygmées Aka offrent une expérience unique.",
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    flag: '🇨🇫',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Français', 'Sango'],
    currency: 'Franc CFA (XAF)',
    bestTimeToVisit: 'Décembre à Mars',
    highlights: ['Dzanga-Sangha', 'Gorilles', 'Pygmées Aka', 'Forêt tropicale'],
    regions: [
      {
        id: 'bangui',
        name: 'Bangui',
        description: "Capitale sur l'Oubangui, Bangui est une ville éprouvée par les conflits mais qui conserve une atmosphère unique. Le fleuve, les rapides et le Musée Boganda témoignent d'un patrimoine à découvrir.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Fleuve Oubangui', 'Musée Boganda', 'Marché central'],
        activities: ['Fleuve', 'Patrimoine', 'Marchés'],
        gastronomy: ['Ngunda', 'Kanda', 'Poisson du fleuve'],
        practicalInfo: {
          bestTime: 'Décembre à Mars',
          transport: 'Taxi',
          accommodation: ['Ledger Plaza Bangui', 'Hotel JM']
        }
      },
      {
        id: 'dzanga-sangha',
        name: 'Dzanga-Sangha',
        description: "Dans le sud-ouest, Dzanga-Sangha est un sanctuaire préservé. La clairière de Dzanga-Bai attire des dizaines d'éléphants de forêt. Les gorilles habitués et les Pygmées Aka font de ce parc une destination exceptionnelle.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Dzanga-Bai', 'Gorilles', 'Éléphants de forêt', 'Pygmées Aka'],
        activities: ['Observation éléphants', 'Tracking gorilles', 'Culture Pygmée', 'Forêt'],
        gastronomy: ['Cuisine de camp', 'Poisson fumé'],
        practicalInfo: {
          bestTime: 'Décembre à Mars / Juin à Septembre',
          transport: 'Vol vers Bayanga',
          accommodation: ['Doli Lodge', 'Sangha Lodge']
        }
      }
    ],
    gastronomy: {
      dishes: ['Ngunda', 'Kanda', 'Gozo', 'Chenilles'],
      description: "La cuisine centrafricaine utilise le manioc comme base (gozo). Les sauces de feuilles, le poisson fumé et les chenilles complètent l'alimentation. Le vin de palme accompagne les repas festifs."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens et précautions médicales',
      safety: 'ATTENTION: Pays en crise. Voyages déconseillés sauf zone Dzanga-Sangha',
      transport: 'Vols vers Bangui limités. Accès Dzanga par avion privé'
    },
    testimonials: [
      {
        id: '1',
        author: 'Biologiste anonyme',
        country: 'Belgique',
        rating: 5,
        text: "Dzanga-Bai est le spectacle naturel le plus extraordinaire que j'aie vu. Des dizaines d'éléphants dans une clairière, c'est magique.",
        date: '2022-02-15'
      }
    ]
  },
  // PAYS AJOUTÉS
  {
    id: 'guinee-equatoriale',
    name: 'Guinée Équatoriale',
    capital: 'Malabo',
    description: "Le seul pays hispanophone d'Afrique, la Guinée Équatoriale est riche en pétrole. Elle comprend une partie continentale et les îles de Bioko (avec la capitale Malabo) et Annobón. La forêt tropicale, les plages et la culture unique attirent les voyageurs curieux.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇬🇶',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Espagnol', 'Français', 'Portugais', 'Fang'],
    currency: 'Franc CFA (XAF)',
    bestTimeToVisit: 'Décembre à Février',
    highlights: ['Malabo', 'Île de Bioko', 'Forêt tropicale', 'Plages de sable noir'],
    regions: [
      {
        id: 'malabo',
        name: 'Malabo (Bioko)',
        description: "Capitale située sur l'île volcanique de Bioko, Malabo mêle architecture coloniale espagnole et buildings modernes. Le centre-ville, la cathédrale et les plages volcaniques de sable noir offrent un dépaysement total.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Cathédrale Santa Isabel', 'Plage Arena Blanca', 'Marché central', 'Pico Basile (volcan)'],
        activities: ['Plages', 'Visite historique', 'Randonnée volcan', 'Gastronomie'],
        gastronomy: ['Succotash', 'Poisson frais', 'Fruits tropicaux', 'Cuisine espagnole'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: 'Taxi',
          accommodation: ['Sofitel Malabo', 'Hotel Anda', 'Ibis Malabo']
        }
      },
      {
        id: 'bata',
        name: 'Bata (continent)',
        description: "Plus grande ville du pays, Bata est la capitale économique sur le continent. Le port, les plages de sable blanc et l'animation en font une ville vibrante. Point de départ pour explorer l'arrière-pays et les réserves naturelles.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Plages de Bata', 'Port', 'Vie nocturne', 'Réserve Monte Alén'],
        activities: ['Plages', 'Pêche', 'Randonnée', 'Culture Fang'],
        gastronomy: ['Soupe de poisson', 'Plantains', 'Poulet grillé'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: 'Taxi, vols domestiques',
          accommodation: ['Panafrica Hotel', 'Hotel Bantu', 'Hotel Ureka']
        }
      },
      {
        id: 'monte-alen',
        name: 'Parc National de Monte Alén',
        description: "Réserve protégée au cœur de la forêt équatoriale, Monte Alén abrite éléphants de forêt, gorilles, chimpanzés et une biodiversité exceptionnelle. Les chutes d'eau et les villages fang ajoutent à l'expérience.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Forêt primaire', 'Grands singes', 'Chutes d\'eau', 'Culture Fang'],
        activities: ['Randonnée', 'Observation faune', 'Visite villages', 'Photographie'],
        gastronomy: ['Cuisine de brousse', 'Fruits sauvages'],
        practicalInfo: {
          bestTime: 'Décembre à Février (sèche)',
          transport: '4x4 depuis Bata',
          accommodation: ['Campements écologiques', 'Lodges']
        }
      }
    ],
    gastronomy: {
      dishes: ['Succotash (ragoût de maïs, haricots, viande)', 'Soupe de poisson', 'Poulet à la sauce cacahuète', 'Plátanos (bananes plantains)', 'Manioc sous toutes formes'],
      description: "La cuisine équatoguinéenne mélange influences africaines et espagnoles. Les plats à base de poisson, manioc et banane plantain dominent. La présence espagnole se ressent dans certaines spécialités et le régime horaire des repas."
    },
    practicalInfo: {
      visa: 'Visa obligatoire, difficile à obtenir',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: 'Pays stable mais régime autoritaire. Peu de liberté',
      transport: 'Vols vers Malabo (SSG). Infrastructure routière limitée'
    },
    testimonials: [
      {
        id: '1',
        author: 'Miguel Fernandez',
        country: 'Espagne',
        rating: 4,
        text: "Malabo est une ville surprenante, mélange d'Afrique et d'Espagne. Les plages volcaniques de Bioko sont uniques. Un pays méconnu mais fascinant.",
        date: '2023-11-20'
      }
    ]
  },
  {
    id: 'sao-tome-et-principe',
    name: 'São Tomé et Príncipe',
    capital: 'São Tomé',
    description: "Archipel paradisiaque dans le golfe de Guinée, les îles de São Tomé et Príncipe sont d'anciennes plantations portugaises devenues un Écotourisme. Forêts tropicales, plages désertes, plantations de cacao et culture créole portugaise font le charme de ces îles.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    flag: '🇸🇹',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Portugais', 'Forro', 'Angolar'],
    currency: 'Dobra (STN)',
    bestTimeToVisit: 'Juin à Septembre (saison sèche)',
    highlights: ['Plantations de cacao', 'Forêt nuageuse', 'Plages isolées', 'Culture créole'],
    regions: [
      {
        id: 'sao-tome',
        name: 'Île de São Tomé',
        description: "L'île principale abrite la capitale éponyme. Les anciennes roças (plantations) portugaises, la forêt nuageuse d'Obô et les plages de sable noir créent un paysage romantique et sauvage.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['São Tomé ville', 'Roça Agostinho Neto', 'Forêt d\'Obô', 'Plage de Jalé'],
        activities: ['Visite plantations', 'Randonnée forêt', 'Plongée', 'Observation oiseaux'],
        gastronomy: ['Calulu (poisson séché)', 'Feijoada locale', 'Frutapão (fruit à pain)', 'Cacao'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxi collectif (candongueiro),Location 4x4',
          accommodation: ['Omali Lodge', 'Hotel Miramar', 'Bombom Island Resort']
        }
      },
      {
        id: 'principe',
        name: 'Île de Príncipe',
        description: "Plus petite et sauvage, Príncipe est une réserve de biosphère UNESCO. Des forêts primaires, des plages de rêve (Praia Banana) et une atmosphère paisible en font un paradis pour l'écotourisme.",
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800',
        highlights: ['Praia Banana', 'Santo António', 'Forêt primaire', 'Réserve biosphère'],
        activities: ['Plongée', 'Randonnée', 'Observation faune', 'Farniente'],
        gastronomy: ['Fruits de mer', 'Cuisine créole', 'Cacao de Príncipe'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Vol ou bateau depuis São Tomé',
          accommodation: ['Bom Bom Island Resort', 'Roca Sundy', 'Hotel Mucumbli']
        }
      }
    ],
    gastronomy: {
      dishes: ['Calulu (poisson séché avec feuilles de manioc)', 'Feijoada à la santoméenne', 'Blablá (pain de manioc)', 'Fruta-pão (fruit à pain préparé)', 'Cacao sous toutes formes'],
      description: "La cuisine santoméenne est un mélange créole portugais-africain. Le poisson, le manioc et les fruits tropicaux dominent. Le cacao local est utilisé dans certains plats. La gastronomie est simple mais savoureuse."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée pour la plupart des nationalités',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme présent',
      safety: 'Pays très sûr, peuple accueillant',
      transport: 'Vols vers São Tomé (TMS). Bateau ou vol pour Príncipe'
    },
    testimonials: [
      {
        id: '1',
        author: 'Isabel Silva',
        country: 'Portugal',
        rating: 5,
        text: "Ces îles sont un paradis préservé. Les anciennes plantations portugaises, les forêts et les plages désertes... Un véritable voyage dans le temps.",
        date: '2024-02-10'
      }
    ]
  },
  {
    id: 'tchad',
    name: 'Tchad',
    capital: "N'Djaména",
    description: "Pays sahélien au cœur de l'Afrique, le Tchad est une terre de contrastes entre le désert du Sahara au nord, le Sahel au centre et la savane au sud. Le lac Tchad, les montagnes du Tibesti et les parcs nationaux offrent des paysages spectaculaires.",
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    flag: '🇹🇩',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Français', 'Arabe', 'Sara'],
    currency: 'Franc CFA (XAF)',
    bestTimeToVisit: 'Novembre à Février (moins chaud)',
    highlights: ['Lac Tchad', 'Désert du Sahara', 'Montagnes Tibesti', 'Parc de Zakouma'],
    regions: [
      {
        id: 'ndjamena',
        name: "N'Djaména",
        description: "Capitale sur les rives du Chari, N'Djaména est une ville animée au carrefour des cultures africaines et arabes. Le marché central, la Grande Mosquée et l'animation des rues donnent le pouls du pays.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Marché central', 'Grande Mosquée', 'Musée National', 'Fleuve Chari'],
        activities: ['Marchés', 'Culture urbaine', 'Gastronomie', 'Observation fleuve'],
        gastronomy: ['Boule (mil)', 'Sauce gombo', 'Viande grillée', 'Thé sucré'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Taxi, moto-taxi',
          accommodation: ['Hilton N\'Djamena', 'Ledger Plaza N\'Djamena', 'Novotel N\'Djamena']
        }
      },
      {
        id: 'zakouma',
        name: 'Parc National de Zakouma',
        description: "L'un des plus beaux parcs d'Afrique, Zakouma a connu un renouveau spectaculaire. Éléphants, lions, girafes et antilopes peuplent cette savane préservée. Le safari à pied et les lodges de luxe en font une destination unique.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Grands troupeaux d\'éléphants', 'Lions', 'Oiseaux migrateurs', 'Savane'],
        activities: ['Safari', 'Observation oiseaux', 'Safari à pied', 'Photographie'],
        gastronomy: ['Cuisine de lodge', 'Produits locaux'],
        practicalInfo: {
          bestTime: 'Décembre à Mai',
          transport: 'Vol charter depuis N\'Djaména',
          accommodation: ['Camp Nomade', 'Tinga Camp', 'Zakouma Lodge']
        }
      },
      {
        id: 'lac-tchad',
        name: 'Lac Tchad',
        description: "Autrefois l'un des plus grands lacs d'Afrique, le lac Tchad a dramatiquement rétréci mais reste vital pour des millions de personnes. Les îles flottantes, les pêcheurs et la culture lacustre offrent un monde à part.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Îles flottantes', 'Villages de pêcheurs', 'Oiseaux aquatiques', 'Delta'],
        activities: ['Pirogue', 'Observation oiseaux', 'Rencontre pêcheurs', 'Photographie'],
        gastronomy: ['Poisson du lac', 'Couscous de mil', 'Dattes'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 puis pirogue',
          accommodation: ['Campements de pêcheurs', 'Guesthouses']
        }
      },
      {
        id: 'tibesti',
        name: 'Massif du Tibesti',
        description: "Montagnes volcaniques au cœur du Sahara, le Tibesti est l'une des régions les plus isolées d'Afrique. Les Toubous nomades, les sources chaudes et le volcan Emi Koussi (point culminant du Sahara) attirent les explorateurs.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Emi Koussi (3415m)', 'Sources chaudes', 'Art rupestre', 'Toubous nomades'],
        activities: ['Trekking', 'Culture Toubou', 'Photographie', 'Aventure'],
        gastronomy: ['Dates', 'Lait de chamelle', 'Viande séchée'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 avec guide, convoyage',
          accommodation: ['Bivouac', 'Campements nomades']
        }
      }
    ],
    gastronomy: {
      dishes: ['Boule (pâte de mil)', 'Sauce gombo (okra)', 'Viande de chèvre grillée', 'Couscous de mil', 'Dattes', 'Lait de chamelle'],
      description: "La cuisine tchadienne est simple et nutritive. Le mil est l'aliment de base, préparé en boule accompagnée de sauces (gombo, arachide, feuilles). La viande grillée est prisée. Le thé très sucré est la boisson sociale par excellence."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme au sud. Choléra possible',
      safety: 'ATTENTION: Insécurité dans le nord (Tibesti) et l\'est. Zakouma accessible avec organisation',
      transport: 'Vols vers N\'Djaména (NDJ). Routes très difficiles. 4x4 indispensable'
    },
    testimonials: [
      {
        id: '1',
        author: 'Explorateur confirmé',
        country: 'France',
        rating: 5,
        text: "Zakouma est une renaissance africaine. Voir des centaines d'éléphants en liberté est un privilège. Le Tchad récompense ceux qui osent s'y aventurer.",
        date: '2023-12-05'
      }
    ]
  },
  {
    id: 'burundi',
    name: 'Burundi',
    capital: 'Gitega',
    description: "Petit pays enclavé des Grands Lacs, le Burundi est le 'cœur de l'Afrique'. Paysages verdoyants, rives du lac Tanganyika et culture tambourinaire en font une destination authentique, malgré une histoire récente difficile.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇧🇮',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Kirundi', 'Français'],
    currency: 'Franc burundais (BIF)',
    bestTimeToVisit: 'Juin à Septembre (saison sèche)',
    highlights: ['Lac Tanganyika', 'Tambours sacrés', 'Source du Nil', 'Collines verdoyantes'],
    regions: [
      {
        id: 'bujumbura',
        name: 'Bujumbura',
        description: "Ancienne capitale sur le lac Tanganyika, Bujumbura conserve une ambiance détendue malgré les difficultés. Le bord du lac, la réserve de la Rusizi et la vie culturelle en font une ville attachante.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Lac Tanganyika', 'Réserve de la Rusizi', 'Mausolée Rwagasore', 'Marché central'],
        activities: ['Lac', 'Observation hippopotames', 'Histoire', 'Culture'],
        gastronomy: ['Brochettes', 'Poisson du lac', 'Bières locales'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Taxi',
          accommodation: ['Hotel Club du Lac Tanganyika', 'Sun Safari Hotel']
        }
      },
      {
        id: 'gitega',
        name: 'Gitega',
        description: "Nouvelle capitale politique, Gitega est plus petite et calme. Le Musée National et la proximité des sites historiques (source du Nil) en font une base pour explorer l'intérieur du pays.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Musée National', 'Tambours sacrés', 'Marché', 'Paysages'],
        activities: ['Musée', 'Culture tambour', 'Randonnée'],
        gastronomy: ['Plats traditionnels', 'Cuisine simple'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: 'Bus depuis Bujumbura',
          accommodation: ['Hotel Ubuntu', 'Guesthouses']
        }
      },
      {
        id: 'source-nil',
        name: 'Source du Nil',
        description: "Selon certaines théories, le Burundi abriterait la source la plus méridionale du Nil. Le site de Rutovu, avec sa pyramide commémorative, est un lieu symbolique au milieu des collines.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Pyramide source Nil', 'Paysages collines', 'Villages traditionnels'],
        activities: ['Visite site historique', 'Randonnée', 'Culture locale'],
        gastronomy: ['Cuisine locale'],
        practicalInfo: {
          bestTime: 'Juin à Septembre',
          transport: '4x4 depuis Gitega',
          accommodation: ['Guesthouses locales']
        }
      }
    ],
    gastronomy: {
      dishes: ['Brochettes (mishikaki)', 'Riz haricot', 'Isombe (feuilles de manioc)', 'Foufou (ugali)', 'Poisson tilapia du lac'],
      description: "La cuisine burundaise est simple et nourrissante, basée sur les haricots, le riz, la banane plantain et le manioc. Les brochettes de viande ou poisson sont populaires. Le poisson du lac Tanganyika est excellent."
    },
    practicalInfo: {
      visa: 'Visa requis, parfois délivré à l\'arrivée',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme très présent',
      safety: 'Situation politique tendue. Déconseillé sauf raison impérative',
      transport: 'Aéroport de Bujumbura (BJM). Réseau routier médiocre'
    },
    testimonials: [
      {
        id: '1',
        author: 'Journaliste',
        country: 'Confidentiel',
        rating: 3,
        text: "Le lac Tanganyika est magnifique et la culture tambourinaire fascinante, mais le contexte politique rend le voyage difficile. Un pays au potentiel touristique inexploité.",
        date: '2022-08-15'
      }
    ]
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    capital: 'Kigali',
    description: "Le 'Pays des Mille Collines' s'est reconstruit avec une force incroyable. Propre, organisé et sûr, le Rwanda offre les gorilles des Volcans, Kigali moderne, le lac Kivu serein et une expérience touristique de qualité.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇷🇼',
    continent: 'Afrique',
    subRegion: 'Afrique centrale',
    languages: ['Kinyarwanda', 'Français', 'Anglais', 'Swahili'],
    currency: 'Franc rwandais (RWF)',
    bestTimeToVisit: 'Juin à Septembre et Décembre à Février',
    highlights: ['Gorilles des Volcans', 'Kigali', 'Lac Kivu', 'Forêt de Nyungwe'],
    regions: [
      {
        id: 'kigali',
        name: 'Kigali',
        description: "Capitale étonnamment propre et organisée, souvent citée en modèle. Le Mémorial du Génocide, les marchés colorés et la scène culinaire dynamique reflètent la résilience et l'ambition du Rwanda.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Mémorial du Génocide', 'Marché de Kimironko', 'Ville propre', 'Art rwandais'],
        activities: ['Histoire', 'Shopping artisanal', 'Gastronomie', 'Visite projets'],
        gastronomy: ['Brochettes', 'Cuisine fusion', 'Café rwandais'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Taxi, moto-taxi réglementés',
          accommodation: ['Kigali Marriott', 'The Retreat', 'Radisson Blu']
        }
      },
      {
        id: 'volcans',
        name: 'Parc National des Volcans',
        description: "Sanctuaire des gorilles de montagne rendu célèbre par Dian Fossey. Le trekking pour observer ces géants paisibles est une expérience émouvante. Les paysages de pics volcaniques sont spectaculaires.",
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        highlights: ['Gorilles de montagne', 'Tombe Dian Fossey', 'Volcans', 'Singes dorés'],
        activities: ['Trekking gorilles', 'Randonnée volcans', 'Culture locale'],
        gastronomy: ['Cuisine de lodge', 'Produits locaux'],
        practicalInfo: {
          bestTime: 'Juin à Septembre / Décembre à Février',
          transport: 'Route depuis Kigali (2h30)',
          accommodation: ['Bisate Lodge', 'Singita Kwitonda', 'One&Only Gorilla\'s Nest']
        }
      }
    ],
    gastronomy: {
      dishes: ['Brochettes (mishikaki)', 'Isombe (feuilles de manioc)', 'Ugali (bugali)', 'Poisson tilapia', 'Bananes plantains'],
      description: "La cuisine rwandaise traditionnelle est simple, à base de haricots, bananes, patates douces. Les brochettes grillées sont le plat de rue. Kigali offre une scène gastronomique internationale de qualité."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée. East Africa Tourist Visa disponible',
      health: 'Vaccin fièvre jaune requis. Paludisme en basse altitude',
      safety: 'L\'un des pays les plus sûrs d\'Afrique',
      transport: 'Aéroport de Kigali (KGL). Réseau routier excellent'
    },
    testimonials: [
      {
        id: '1',
        author: 'David Chen',
        country: 'États-Unis',
        rating: 5,
        text: "Le Rwanda défie tous les préjugés. Kigali est une capitale modèle, et les gorilles sont magiques. Un pays qui inspire.",
        date: '2024-04-18'
      }
    ]
  },
  {
    id: 'angolafrique-centrale',
    name: 'Angola (partie Afrique centrale)',
    capital: 'Luanda',
    description: "Bien que souvent classé en Afrique australe, l'Angola a une partie nord dans le bassin du Congo. Le parc de Quiçama, les plages de Luanda et les chutes de Kalandula montrent la diversité de ce géant pétrolier en reconstruction.",
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    flag: '🇦🇴',
    continent: 'Afrique',
    subRegion: 'Afrique centrale / Afrique australe',
    languages: ['Portugais', 'Umbundu', 'Kimbundu', 'Kikongo'],
    currency: 'Kwanza (AOA)',
    bestTimeToVisit: 'Mai à Octobre (saison sèche)',
    highlights: ['Luanda', 'Chutes Kalandula', 'Parc de Quiçama', 'Culture Kongo'],
    regions: [
      {
        id: 'luanda',
        name: 'Luanda',
        description: "Capitale vibrante et l'une des villes les plus chères au monde, Luanda mêle gratte-ciel pétroliers, bidonvilles et plages. La forteresse de São Miguel, l'île de Luanda et l'animation contrastée fascinent.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Forteresse São Miguel', 'Île de Luanda', 'Marginal (front de mer)', 'Musée Nacional'],
        activities: ['Histoire coloniale', 'Plages', 'Vie nocturne', 'Gastronomie'],
        gastronomy: ['Moamba de galinha', 'Calulu', 'Poulet grillé', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: 'Taxi (chers)',
          accommodation: ['Hotel Presidente Luanda', 'EPIC SANA Luanda', 'Hotel Trópico']
        }
      },
      {
        id: 'quicama',
        name: 'Parc National de Quiçama',
        description: "Aussi appelé parc de Kissama, c'est le principal parc d'Angola, en cours de réhabilitation. Éléphants, buffles et antilopes repeuplent cette savane près de l'océan. Les safaris et le lodge offrent une échappée nature.",
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
        highlights: ['Éléphants', 'Savane', 'Lodge de luxe', 'Proximité océan'],
        activities: ['Safari', 'Observation faune', 'Photographie', 'Randonnée'],
        gastronomy: ['Cuisine de lodge', 'Poisson frais'],
        practicalInfo: {
          bestTime: 'Mai à Octobre',
          transport: '4x4 depuis Luanda (1h30)',
          accommodation: ['Kissama Game Lodge', 'Camping']
        }
      }
    ],
    gastronomy: {
      dishes: ['Moamba de galinha (poulet sauce palme)', 'Calulu (poisson séché avec feuilles)', 'Funje (pâte de manioc)', 'Mufete (poisson grillé avec haricots)', 'Cuscuz angolais'],
      description: "La cuisine angolaise est riche et épicée, héritage portugais et africain. La moamba (sauce de noix de palme), le calulu et le funje sont des piliers. Les fruits de mer sont excellents sur la côte."
    },
    practicalInfo: {
      visa: 'Visa obligatoire, e-visa disponible',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: 'Sécurité en amélioration mais vigilance à Luanda',
      transport: 'Vols vers Luanda (LAD). Routes en amélioration'
    },
    testimonials: [
      {
        id: '1',
        author: 'João Mendes',
        country: 'Portugal',
        rating: 4,
        text: "Luanda est intense et fascinante. Le parc de Quiçama montre le potentiel touristique de l'Angola. Un pays en pleine transformation.",
        date: '2024-01-30'
      }
    ]
  }
];