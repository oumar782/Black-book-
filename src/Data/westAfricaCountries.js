export const westAfricaCountries = [
  // Sénégal
  {
    id: 'senegal',
    name: 'Sénégal',
    capital: 'Dakar',
    description: "Le Sénégal, porte d'entrée de l'Afrique de l'Ouest, est une terre de contrastes où la modernité de Dakar côtoie les traditions ancestrales. Des plages dorées de la Petite Côte aux mystérieux cercles de pierre de Saloum, le pays offre une mosaïque culturelle unique. La Teranga, l'hospitalité légendaire sénégalaise, vous accueillera dans chaque village.",
    image: 'https://images.unsplash.com/photo-1589804141513-1f5f7c6b9bba?w=800',
    flag: '🇸🇳',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Wolof', 'Sérère', 'Peul', 'Diola', 'Mandinka'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Mai',
    population: '17 millions',
    area: '196 722 km²',
    timeZone: 'UTC',
    callingCode: '+221',
    highlights: ['Île de Gorée', 'Lac Rose', 'Parc National du Djoudj', 'Saint-Louis', 'Delta du Saloum', 'Pays Bassari'],
    regionsAdmin: [
      'Dakar', 'Diourbel', 'Fatick', 'Kaffrine', 'Kaolack', 'Kédougou',
      'Kolda', 'Louga', 'Matam', 'Saint-Louis', 'Sédhiou', 'Tambacounda',
      'Thiès', 'Ziguinchor'
    ],
    regions: [
      {
        id: 'dakar',
        name: 'Dakar',
        description: "Capitale vibrante et cosmopolite, Dakar est le cœur battant du Sénégal. Entre modernité et tradition, la ville offre une scène artistique dynamique, des marchés colorés et une vie nocturne animée. Le monument de la Renaissance Africaine domine la presqu'île.",
        image: 'https://images.unsplash.com/photo-1589804141513-1f5f7c6b9bba?w=800',
        highlights: ['Monument de la Renaissance', 'Marché Sandaga', 'Île de Gorée', 'Plage de Ngor', 'Musée des Civilisations Noires', 'Soumbédioune'],
        activities: ['Surf à Ngor', 'Visite de musées', 'Shopping artisanal', 'Vie nocturne', 'Pêche', 'Art contemporain'],
        gastronomy: ['Thiéboudienne', 'Yassa poulet', 'Mafé', 'Fataya', 'Bissap', 'Café Touba'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Taxis, Car Rapides, DDD (bus), Uber',
          accommodation: ['Hôtel Teranga', 'Radisson Blu', 'Auberge Keur Diame', 'Pullman Dakar'],
          tips: ['Négocier dans les marchés', 'Éviter la plage de nuit']
        }
      },
      {
        id: 'saint-louis',
        name: 'Saint-Louis',
        description: "Ancienne capitale de l'AOF, Saint-Louis est classée au patrimoine mondial de l'UNESCO. Son architecture coloniale, ses rues pavées et son ambiance nostalgique en font une ville unique. Le festival de jazz de Saint-Louis attire des artistes du monde entier.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Pont Faidherbe', 'Quartier historique', 'Parc du Djoudj', 'Langue de Barbarie', 'Île de Sor', 'Faubourg Sud'],
        activities: ['Festival de Jazz', 'Observation oiseaux', 'Pêche', 'Architecture coloniale', 'Promenade en calèche', 'Photographie'],
        gastronomy: ['Thiof grillé', 'Riz au poisson', 'Jus de bouye', 'Pastels', 'Crevettes grillées'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Taxi, Calèche, Location vélo',
          accommodation: ['Hôtel de la Poste', 'La Résidence', 'Siki Hotel', 'Maison d\'hôtes'],
          tips: ['Réserver hôtel pendant le festival', 'Visiter le parc du Djoudj à l\'aube']
        }
      },
      {
        id: 'casamance',
        name: 'Casamance',
        description: "Région verdoyante du sud du Sénégal, la Casamance est un paradis naturel. Forêts de mangroves, rizières et plages désertes caractérisent cette région. La culture Diola y est préservée avec ses traditions et ses cases à impluvium.",
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
        highlights: ['Ziguinchor', 'Cap Skirring', 'Île de Carabane', 'Forêt de Basse Casamance', 'Oussouye', 'Parc de Basse Casamance'],
        activities: ['Kayak dans les bolongs', 'Observation de la faune', 'Plages', 'Découverte culturelle', 'Randonnée', 'Pêche'],
        gastronomy: ['Caldou', 'Vin de palme', 'Huîtres de mangrove', 'Riz de Casamance', 'Poisson braisé'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Bateau, 4x4, Avion Dakar-Ziguinchor',
          accommodation: ['Campements villageois', 'Hôtel Kabrousse', 'Ecolodges', 'Hôtel Aubert'],
          tips: ['Vaccination fièvre jaune requise', 'Respecter les traditions locales']
        }
      },
      {
        id: 'petite-cote',
        name: 'Petite Côte',
        description: "Station balnéaire prisée, la Petite Côte offre des plages de sable fin et une eau turquoise. De Saly à Joal-Fadiouth, cette côte est idéale pour les séjours balnéaires et la découverte de villages de pêcheurs traditionnels.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Saly', 'Joal-Fadiouth', 'Réserve de Bandia', 'Lac Rose', 'Mbour', 'Ngaparou'],
        activities: ['Baignade', 'Safari à Bandia', 'Quad', 'Pêche sportive', 'Jet-ski', 'Golf'],
        gastronomy: ['Poisson braisé', 'Langouste grillée', 'Bissap', 'Accras', 'Crevettes'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Taxi depuis Dakar (1h), Location voiture',
          accommodation: ['Palm Beach', 'Lamantin Beach', 'Royal Saly', 'Hôtel du Phare'],
          tips: ['Attention aux courants forts', 'Marchander les activités nautiques']
        }
      },
      {
        id: 'sine-saloum',
        name: 'Delta du Sine-Saloum',
        description: "Réserve de biosphère UNESCO, le delta du Sine-Saloum est un labyrinthe de mangroves, de bolongs et d'îles. Les oiseaux migrateurs y trouvent refuge et les villages Sérères perpétuent leurs traditions millénaires.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Îles du Saloum', 'Mangroves', 'Villages Sérères', 'Tumulus de coquillages', 'Palmarin', 'Foundiougne'],
        activities: ['Pirogue', 'Observation oiseaux', 'Pêche', 'Écotourisme', 'Randonnée', 'Photographie'],
        gastronomy: ['Huîtres fraîches', 'Poisson fumé', 'Riz au lait de coco', 'Crevettes', 'Fruits de mer'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Pirogue, 4x4, Taxi-brousse',
          accommodation: ['Campements communautaires', 'Lodge du Saloum', 'Keur Saloum', 'Ecolodges'],
          tips: ['Prévoir anti-moustiques', 'Visiter les îles avec guide local']
        }
      },
      {
        id: 'tambacounda',
        name: 'Tambacounda et l\'Est',
        description: "Région peu visitée de l'est du Sénégal, Tambacounda est la porte d'entrée du parc national du Niokolo-Koba, réserve de biosphère UNESCO. Savanes, forêts-galeries et faune abondante caractérisent cette région.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Parc Niokolo-Koba', 'Tambacounda', 'Kédougou', 'Chutes de Dindefelo', 'Pays Bassari', 'Fouta Djallon'],
        activities: ['Safari', 'Observation faune', 'Randonnée', 'Culture Bassari', 'Visite villages', 'Photographie'],
        gastronomy: ['Viande de brousse', 'Riz sauce arachide', 'Fonio', 'Lait caillé', 'Fruits sauvages'],
        practicalInfo: {
          bestTime: 'Décembre à Avril',
          transport: '4x4, Bus depuis Dakar',
          accommodation: ['Campements du parc', 'Hôtel Relais', 'Auberges Kédougou'],
          tips: ['Guide obligatoire dans le parc', 'Vaccins à jour']
        }
      },
      {
        id: 'thies',
        name: 'Thiès et l\'arrière-pays',
        description: "Deuxième ville du Sénégal, Thiès est réputée pour sa tapisserie et son artisanat. La région offre des paysages variés entre plateaux, forêts et terres agricoles, avec une riche histoire précoloniale.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Manufacture de tapisseries', 'Lac Tanma', 'Forêt de Mbao', 'Mont Rolland', 'Réserve de Bandia', 'Mékhé'],
        activities: ['Artisanat', 'Randonnée', 'Visite usine tapisserie', 'Observation oiseaux', 'Culture locale'],
        gastronomy: ['Thiéboudienne', 'Mafé', 'Lakh', 'Bissap', 'Jus de tamarin'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Train Express, Taxi, Bus',
          accommodation: ['Hôtel de la Gare', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Acheter tapisseries à la manufacture', 'Visiter le marché artisanal']
        }
      },
      {
        id: 'fatick',
        name: 'Fatick et le Sine',
        description: "Région historique du royaume du Sine, Fatick est au cœur du pays Sérère. La région est caractérisée par ses baobabs majestueux, ses villages traditionnels et ses sites historiques précoloniaux.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Fatick', 'Gossas', 'Villages Sérères', 'Baobabs sacrés', 'Tombes royales', 'Djilor'],
        activities: ['Culture Sérère', 'Visite villages', 'Arbres sacrés', 'Histoire précoloniale', 'Photographie'],
        gastronomy: ['Couscous de mil', 'Sauce feuille', 'Lait caillé', 'Madd', 'Fruits locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Taxi-brousse, Location voiture',
          accommodation: ['Auberges locales', 'Maisons d\'hôtes', 'Campements'],
          tips: ['Respecter les sites sacrés', 'Demander permission pour photos']
        }
      }
    ],
    gastronomy: {
      dishes: ['Thiéboudienne', 'Yassa', 'Mafé', 'Thiou', 'Caldou', 'Bissap', 'Bouye', 'Fataya', 'Accras', 'Café Touba'],
      description: "La cuisine sénégalaise est généreuse et savoureuse. Le Thiéboudienne, plat national à base de riz et poisson, est un véritable art culinaire. Les épices, l'huile de palme et les fruits de mer caractérisent cette gastronomie riche. Le café Touba, épicé au girofle et poivre, est la boisson nationale."
    },
    practicalInfo: {
      visa: 'Pas de visa requis pour les ressortissants de nombreux pays (séjour < 90 jours)',
      health: 'Vaccin fièvre jaune recommandé. Traitement antipaludéen conseillé',
      safety: 'Pays stable et sûr. Éviter la zone frontalière avec la Casamance',
      transport: 'Vols vers Dakar. Réseau de bus et taxis-brousse. Location de voiture possible',
      electricity: '230V, prises européennes (Type C/D/E)',
      internet: 'Wi-Fi disponible dans les hôtels. Bonne couverture mobile',
      culturalTips: ['La main droite pour manger', 'Enlever ses chaussures dans les maisons', 'Saluer longuement avant toute conversation']
    },
    festivals: [
      {
        name: 'Festival de Jazz de Saint-Louis',
        month: 'Mai',
        location: 'Saint-Louis',
        description: 'Festival international de jazz sur l\'île de Saint-Louis'
      },
      {
        name: 'Dakar Biennale',
        month: 'Mai-Juin',
        location: 'Dakar',
        description: 'Biennale de l\'art africain contemporain (Dak\'Art)'
      },
      {
        name: 'Fête de l\'Indépendance',
        month: 'Avril',
        location: 'Tout le pays',
        description: 'Célébrations du 4 avril, jour de l\'indépendance'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Marie Dupont',
        country: 'France',
        rating: 5,
        text: "Un voyage inoubliable ! La Teranga sénégalaise n'est pas un mythe. Les gens sont d'une gentillesse incroyable. Le Lac Rose au coucher du soleil est magique.",
        date: '2024-03-15'
      },
      {
        id: '2',
        author: 'Jean-Pierre Martin',
        country: 'Belgique',
        rating: 5,
        text: "Saint-Louis m'a transporté dans le temps. L'architecture coloniale et le festival de jazz en font une destination culturelle majeure en Afrique.",
        date: '2024-02-28'
      },
      {
        id: '3',
        author: 'Amadou B.',
        country: 'Sénégal',
        rating: 5,
        text: "Le Sénégal a tant à offrir ! Des plages de la Petite Côte aux traditions du Sine-Saloum, chaque région a son charme unique.",
        date: '2024-04-10'
      }
    ]
  },
  // Côte d'Ivoire
  {
    id: 'cote-ivoire',
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    description: "La Côte d'Ivoire, perle de l'Afrique de l'Ouest, offre une diversité exceptionnelle. Des gratte-ciels d'Abidjan aux villages sur pilotis de Grand-Bassam, en passant par les forêts tropicales de l'ouest, le pays séduit par son dynamisme et sa culture riche.",
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
    flag: '🇨🇮',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Dioula', 'Baoulé', 'Bété', 'Sénoufo', 'Malinké'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Mars',
    population: '27 millions',
    area: '322 463 km²',
    timeZone: 'UTC',
    callingCode: '+225',
    highlights: ['Basilique de Yamoussoukro', 'Grand-Bassam', 'Parc National de Taï', 'Abidjan', 'Korhogo', 'San-Pédro'],
    regionsAdmin: [
      'Abidjan', 'Yamoussoukro', 'Bas-Sassandra', 'Comoé', 'Denguélé',
      'Gôh-Djiboua', 'Lacs', 'Lagunes', 'Montagnes', 'Sassandra-Marahoué',
      'Savanes', 'Vallée du Bandama', 'Woroba', 'Zanzan'
    ],
    regions: [
      {
        id: 'abidjan',
        name: 'Abidjan',
        description: "Capitale économique bouillonnante, Abidjan est la Manhattan de l'Afrique. Le Plateau avec ses tours modernes, Treichville avec ses marchés animés et Cocody avec ses quartiers résidentiels offrent une expérience urbaine unique.",
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
        highlights: ['Le Plateau', 'Cathédrale Saint-Paul', 'Marché de Treichville', 'Île Boulay', 'Musée des Civilisations', 'Banco National Park'],
        activities: ['Vie nocturne', 'Shopping', 'Gastronomie', 'Art contemporain', 'Plages', 'Concerts'],
        gastronomy: ['Attiéké', 'Alloco', 'Garba', 'Kedjenou', 'Foutou', 'Poisson braisé'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: 'Woro-woro, Gbaka, Taxi, Uber',
          accommodation: ['Sofitel Ivoire', 'Pullman Abidjan', 'Hôtel Tiama', 'Novotel Abidjan'],
          tips: ['Éviter les embouteillages aux heures de pointe', 'Marchander dans les marchés']
        }
      },
      {
        id: 'yamoussoukro',
        name: 'Yamoussoukro',
        description: "Capitale politique et administrative, Yamoussoukro abrite la basilique Notre-Dame de la Paix, plus grande église du monde. Cette ville moderne au cœur du pays offre une atmosphère paisible et des lacs peuplés de crocodiles sacrés.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Basilique Notre-Dame de la Paix', 'Lac aux crocodiles', 'Fondation Houphouët-Boigny', 'Palais présidentiel', 'Mosquée', 'Jardins'],
        activities: ['Visite de la basilique', 'Nourrir les crocodiles', 'Patrimoine présidentiel', 'Photographie', 'Jardin botanique'],
        gastronomy: ['Foutou banane', 'Sauce graine', 'Poisson braisé', 'Kedjenou', 'Attiéké'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Abidjan, Taxi, Location voiture',
          accommodation: ["Hôtel Président", "Hôtel des Parlementaires", "Auberges"],
          tips: ['Vêtements appropriés pour la basilique', 'Guide recommandé pour la visite']
        }
      },
      {
        id: 'grand-bassam',
        name: 'Grand-Bassam',
        description: "Ancienne capitale coloniale classée UNESCO, Grand-Bassam charme par son architecture française décadente et ses plages. Le quartier France avec ses bâtiments historiques témoigne d'un passé colonial riche.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Quartier France', 'Musée du Costume', 'Plages', 'Marché artisanal', 'Pont de la Victoire', 'Cimetière colonial'],
        activities: ['Baignade', 'Histoire coloniale', 'Artisanat', 'Gastronomie', 'Visite musée', 'Photographie'],
        gastronomy: ['Poisson grillé', 'Attieke poisson', 'Jus de gingembre', 'Crevettes', 'Fruits de mer'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Gbaka depuis Abidjan, Taxi',
          accommodation: ['Taverne du Bassam', 'Hôtel Wharf', 'Boblin Resort', 'Maisons d\'hôtes'],
          tips: ['Attention aux courants forts', 'Visiter le musée en semaine']
        }
      },
      {
        id: 'man',
        name: 'Région de Man',
        description: "À l'ouest, la région montagneuse de Man est le pays Dan et Yacouba. Les masques sacrés, les danses sur échasses et les ponts de liane font de cette région un trésor culturel. Le Mont Tonkoui offre des vues spectaculaires.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Mont Tonkoui', 'Pont de liane', 'Danses sur échasses', 'Cascade de Man', 'Forêt sacrée', 'Village de Gbêpleu'],
        activities: ['Randonnée', 'Culture Dan', 'Observation de masques', 'Cascades', 'Photographie', 'Artisanat'],
        gastronomy: ['Riz sauce feuille', 'Viande de brousse', 'Vin de palme', 'Foutou', 'Sauce graine'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 recommandé, Bus depuis Abidjan',
          accommodation: ['Hôtel Les Cascades', 'Campements villageois', 'Auberges'],
          tips: ['Respecter les traditions locales', 'Guide pour les danses traditionnelles']
        }
      },
      {
        id: 'bouake',
        name: 'Bouaké',
        description: "Deuxième ville du pays, Bouaké est le carrefour commercial du centre. Le marché de gros et l'artisanat Baoulé caractérisent cette ville dynamique située au cœur du pays Baoulé.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Grand Marché', 'Artisanat Baoulé', 'Mosquée centrale', 'Lac de Kossou', 'Monument', 'Quartier Commerce'],
        activities: ['Shopping', 'Artisanat', 'Découverte culturelle', 'Marché', 'Lac', 'Photographie'],
        gastronomy: ['Foutou igname', 'Sauce claire', 'Bangui', 'Attiéké', 'Poisson'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Abidjan, Taxi local',
          accommodation: ['Ran Hôtel', 'Hôtel Mon Afrik', 'Auberges'],
          tips: ['Marchander au marché', 'Visiter tôt le matin']
        }
      },
      {
        id: 'korhogo',
        name: 'Korhogo et pays Sénoufo',
        description: "Capitale du nord et pays Sénoufo, Korhogo est célèbre pour ses tissus pagnes, ses masques et sa culture artistique riche. La région est réputée pour son artisanat traditionnel et ses festivals culturels.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Tissus pagnes', 'Artisanat Sénoufo', 'Marché central', 'Mont Korhogo', 'Forêt sacrée', 'Villages traditionnels'],
        activities: ['Artisanat', 'Culture Sénoufo', 'Photographie', 'Randonnée', 'Festivals', 'Marché'],
        gastronomy: ['Tô', 'Sauce feuille', 'Viande grillée', 'Sauce graine', 'Lait caillé'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Bus depuis Abidjan, Avion intérieur',
          accommodation: ['Hôtel Le Mont Korhogo', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Acheter tissus directement aux artisans', 'Respecter les sites sacrés']
        }
      },
      {
        id: 'san-pedro',
        name: 'San-Pédro et l\'Ouest',
        description: "Deuxième port du pays, San-Pédro est entourée de plages magnifiques et de parcs naturels. La région est riche en biodiversité avec le parc national de Taï, dernière forêt primaire d'Afrique de l'Ouest.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Parc National de Taï', 'Plages de San-Pédro', 'Port', 'Réserve du N\'zo', 'Sassandra', 'Tabou'],
        activities: ['Écotourisme', 'Plages', 'Observation chimpanzés', 'Randonnée', 'Pêche', 'Photographie'],
        gastronomy: ['Poissons variés', 'Fruits de mer', 'Riz sauce', 'Attiéké', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Décembre à Avril',
          transport: 'Avion depuis Abidjan, Route',
          accommodation: ['Hôtel le Bélier', 'Auberges', 'Ecolodges'],
          tips: ['Permis nécessaire pour le parc de Taï', 'Guide obligatoire']
        }
      },
      {
        id: 'bondoukou',
        name: 'Bondoukou et l\'Est',
        description: "Région historique de l'est, Bondoukou est connue pour son architecture traditionnelle et son riche passé commercial. La région est un carrefour culturel entre Akan, Malinké et populations locales.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Mosquée de Bondoukou', 'Architecture traditionnelle', 'Marché', 'Villages Koulango', 'Forêts', 'Sites historiques'],
        activities: ['Architecture', 'Histoire', 'Culture locale', 'Photographie', 'Randonnée', 'Artisanat'],
        gastronomy: ['Foutou', 'Sauce claire', 'Poisson fumé', 'Légumes locaux', 'Fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Abidjan, Taxi-brousse',
          accommodation: ['Auberges locales', 'Maisons d\'hôtes'],
          tips: ['Guide pour comprendre l\'histoire', 'Vêtements légers mais couvrants']
        }
      }
    ],
    gastronomy: {
      dishes: ['Attiéké', 'Alloco', 'Garba', 'Kedjenou', 'Foutou', 'Sauce graine', 'Bangui', 'Kplala'],
      description: "La cuisine ivoirienne est riche et variée. L'attiéké (semoule de manioc) accompagne de nombreux plats. Le kedjenou, poulet mijoté aux légumes, est un incontournable. Les braiseuries servent poissons et viandes grillées. Les sauces (graine, claire, feuille) parfument les féculents."
    },
    practicalInfo: {
      visa: 'E-visa obligatoire pour la plupart des nationalités',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens recommandés',
      safety: 'Situation stable. Vigilance normale recommandée',
      transport: 'Vols vers Abidjan. Réseau de bus et gbakas. Location possible',
      electricity: '220V, prises européennes (Type C/E)',
      internet: 'Bon réseau dans les villes. Wi-Fi dans les hôtels',
      culturalTips: ['La poignée de main importante', 'Respect des aînés', 'Vêtements modestes']
    },
    festivals: [
      {
        name: 'Fêtes des Masques',
        month: 'Février-Mars',
        location: 'Man',
        description: 'Célébration des masques sacrés chez les Dan et les Wê'
      },
      {
        name: 'Fête de l\'Abissa',
        month: 'Octobre-Novembre',
        location: 'Grand-Bassam',
        description: 'Célébration du nouvel an chez les N\'zima'
      },
      {
        name: 'Carnaval de Bouaké',
        month: 'Mars',
        location: 'Bouaké',
        description: 'Défilés et célébrations dans les rues'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Ahmed Diallo',
        country: 'Mali',
        rating: 5,
        text: "Abidjan ne dort jamais ! La vie nocturne, la gastronomie et l'énergie de cette ville sont incomparables. Un must en Afrique de l'Ouest.",
        date: '2024-04-10'
      },
      {
        id: '2',
        author: 'Sophie L.',
        country: 'France',
        rating: 4,
        text: "La basilique de Yamoussoukro est impressionnante. Les plages de Grand-Bassam sont magnifiques. Pays très accueillant.",
        date: '2024-03-18'
      }
    ]
  },
  // Ghana
  {
    id: 'ghana',
    name: 'Ghana',
    capital: 'Accra',
    description: "Le Ghana, première nation africaine indépendante, est un modèle de stabilité et de développement. Des châteaux esclavagistes de la Côte du Cap aux forêts tropicales d'Ashanti, le pays offre un voyage à travers l'histoire et la culture africaines.",
    image: 'https://images.unsplash.com/photo-1572379188054-03e5e11e0884?w=800',
    flag: '🇬🇭',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Anglais', 'Akan', 'Ewe', 'Ga', 'Dagbani', 'Dagaare'],
    currency: 'Cedi ghanéen (GHS)',
    bestTimeToVisit: 'Novembre à Mars',
    population: '32 millions',
    area: '238 535 km²',
    timeZone: 'UTC',
    callingCode: '+233',
    highlights: ['Cape Coast Castle', 'Kumasi', 'Parc National de Kakum', 'Accra', 'Volta Region', 'Mole National Park'],
    regionsAdmin: [
      'Ahafo', 'Ashanti', 'Bono', 'Bono East', 'Central', 'Eastern',
      'Greater Accra', 'North East', 'Northern', 'Oti', 'Savannah',
      'Upper East', 'Upper West', 'Volta', 'Western', 'Western North'
    ],
    regions: [
      {
        id: 'accra',
        name: 'Grand Accra',
        description: "Capitale dynamique, Accra mélange modernité et traditions. Du quartier historique de Jamestown aux plages de Labadi, la ville offre une expérience urbaine africaine authentique avec ses marchés, sa musique et sa vie nocturne.",
        image: 'https://images.unsplash.com/photo-1572379188054-03e5e11e0884?w=800',
        highlights: ['Jamestown', 'Kwame Nkrumah Memorial', 'Labadi Beach', 'Makola Market', 'Arts Centre', 'Osu Castle'],
        activities: ['Histoire de l\'indépendance', 'Plages', 'Vie nocturne', 'Marchés', 'Art contemporain', 'Gastronomie'],
        gastronomy: ['Jollof rice', 'Banku', 'Waakye', 'Kelewele', 'Red red', 'Fufu'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Trotro, Taxi, Uber, Bolt',
          accommodation: ['Kempinski Gold Coast', 'Labadi Beach Hotel', 'Villa Monticello', 'Mövenpick'],
          tips: ['Marchander dans les marchés', 'Éviter les plages la nuit']
        }
      },
      {
        id: 'ashanti',
        name: 'Région Ashanti',
        description: "Cœur culturel du Ghana, la région Ashanti autour de Kumasi est le royaume de l'or et du kente. Le palais royal, le marché de Kejetia et les villages d'artisans témoignent de la richesse de la culture Akan.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Palais Manhyia', 'Marché Kejetia', 'Village de Bonwire (Kente)', 'Lac Bosomtwe', 'Centre culturel', 'Forêt sacrée'],
        activities: ['Culture Ashanti', 'Artisanat Kente', 'Histoire royale', 'Lac cratère', 'Marché', 'Photographie'],
        gastronomy: ['Fufu', 'Light soup', 'Kontomire', 'Ampesi', 'Nkatekwan'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Bus depuis Accra, Taxi, Trotro',
          accommodation: ['Golden Tulip Kumasi', 'Royal Lamerta Hotel', 'Auberges'],
          tips: ['Respecter l\'étiquette royale', 'Acheter kente aux villages artisans']
        }
      },
      {
        id: 'cape-coast',
        name: 'Cape Coast',
        description: "Ville historique majeure, Cape Coast abrite le sinistre château esclavagiste classé UNESCO. Cette région côtière offre aussi le parc national de Kakum avec sa canopée suspendue et des plages préservées.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Cape Coast Castle', 'Elmina Castle', 'Parc Kakum', 'Canopy Walk', 'Plages', 'Université'],
        activities: ['Mémoire de l\'esclavage', 'Canopy walk', 'Plages', 'Forêt tropicale', 'Histoire', 'Photographie'],
        gastronomy: ['Poisson fumé', 'Kenkey', 'Red red', 'Jollof rice', 'Fruits de mer'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Bus depuis Accra, Trotro, Taxi',
          accommodation: ['Coconut Grove Beach Resort', 'Hans Cottage Botel', 'Elmina Beach Resort'],
          tips: ['Visite émotionnellement intense', 'Guide recommandé pour les châteaux']
        }
      },
      {
        id: 'volta',
        name: 'Région Volta',
        description: "À l'est, la région Volta offre des paysages spectaculaires. Les chutes de Wli, les plus hautes d'Afrique de l'Ouest, le Mont Afadjato et le lac Volta créent un terrain de jeu idéal pour les amateurs de nature.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Chutes de Wli', 'Mont Afadjato', 'Lac Volta', 'Tafi Atome (singes)', 'Ho', 'Keta'],
        activities: ['Randonnée', 'Cascades', 'Observation primates', 'Culture Ewe', 'Lac', 'Photographie'],
        gastronomy: ['Akple', 'Fetri detsi', 'Palm wine', 'Banku', 'Poisson du lac'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Accra, 4x4 recommandé',
          accommodation: ['Wli Water Heights', 'Chances Hotel Ho', 'Auberges'],
          tips: ['Bonnes chaussures pour randonnée', 'Guide pour les chutes']
        }
      },
      {
        id: 'northern',
        name: 'Région Nord',
        description: "Le nord du Ghana offre une expérience différente avec ses paysages de savane, ses villages traditionnels et sa culture musulmane. Tamale et Mole National Park sont les points forts de cette région moins visitée.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Mole National Park', 'Larabanga Mosque', 'Tamale', 'Architecture en terre', 'Paga Crocodile Pond', 'Wa'],
        activities: ['Safari à pied', 'Culture Dagomba', 'Mosquée ancienne', 'Architecture', 'Observation crocodiles', 'Photographie'],
        gastronomy: ['TZ (tuo zaafi)', 'Waakye', 'Guinea fowl', 'Fufu', 'Soupe'],
        practicalInfo: {
          bestTime: 'Décembre à Mars',
          transport: 'Vol ou bus depuis Accra, 4x4',
          accommodation: ['Mole Motel', 'Modern City Hotel Tamale', 'Auberges'],
          tips: ['Vêtements couvrants pour respect culturel', 'Guide pour le parc']
        }
      },
      {
        id: 'bono',
        name: 'Bono et Bono East',
        description: "Région historique avec le royaume de Bono, connu pour son architecture traditionnelle et ses kente. Sunyani, capitale régionale, et les villages traditionnels offrent un aperçu de la culture Akan du nord.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Sunyani', 'Bono Manso', 'Kente weaving villages', 'Forêts', 'Rivières', 'Sites historiques'],
        activities: ['Culture traditionnelle', 'Artisanat', 'Histoire', 'Randonnée', 'Photographie', 'Marchés'],
        gastronomy: ['Fufu', 'Palm nut soup', 'Ampesi', 'Grilled meat', 'Local vegetables'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Kumasi ou Accra',
          accommodation: ['Suncity Hotel', 'Auberges', 'Guest houses'],
          tips: ['Visiter les villages tisseurs', 'Guide local recommandé']
        }
      },
      {
        id: 'western',
        name: 'Région Occidentale',
        description: "Région riche en ressources naturelles avec des forêts tropicales, des plantations de cacao et des mines d'or. Takoradi et Sekondi sont les villes principales de cette région côtière.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Takoradi', 'Sekondi', 'Plantations de cacao', 'Plages', 'Forêts', 'Mines traditionnelles'],
        activities: ['Visite plantations', 'Plages', 'Histoire coloniale', 'Pêche', 'Randonnée', 'Photographie'],
        gastronomy: ['Fresh seafood', 'Banku', 'Fufu', 'Jollof rice', 'Local stews'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Accra, Taxi',
          accommodation: ['Atlantic Hotel', 'Auberges', 'Beach resorts'],
          tips: ['Visiter une plantation de cacao', 'Goûter le chocolat local']
        }
      },
      {
        id: 'eastern',
        name: 'Région Orientale',
        description: "Région montagneuse et verdoyante avec le point culminant du Ghana (Mont Afadjato), des cascades et une riche culture. Koforidua est la capitale régionale.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Koforidua', 'Boti Falls', 'Umbrella Rock', 'Abruri Falls', 'Mountains', 'Traditional villages'],
        activities: ['Randonnée', 'Cascades', 'Culture locale', 'Photographie', 'Nature', 'Birdwatching'],
        gastronomy: ['Fufu', 'Palm nut soup', 'Ampesi', 'Grilled tilapia', 'Local fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Accra, Trotro',
          accommodation: ['Casmir Hotel', 'Auberges', 'Guest houses'],
          tips: ['Bonnes chaussures pour randonnée', 'Guide pour les cascades']
        }
      }
    ],
    gastronomy: {
      dishes: ['Jollof rice', 'Fufu', 'Banku', 'Waakye', 'Kelewele', 'Red red', 'Kenkey', 'Tuo Zaafi'],
      description: "La cuisine ghanéenne est savoureuse et épicée. Le Jollof rice, riz parfumé à la tomate, fait l'objet d'une rivalité amicale avec le Nigeria. Le fufu, pâte de manioc servie avec des soupes, est le plat traditionnel par excellence. Les street foods comme kelewele (plantain épicé) sont délicieux."
    },
    practicalInfo: {
      visa: 'Visa obligatoire. E-visa disponible',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens recommandés',
      safety: 'Pays très sûr et stable',
      transport: 'Vols vers Accra. Réseau de bus. Trotros (minibus) omniprésents',
      electricity: '230V, prises britanniques (Type G)',
      internet: 'Bon réseau. Wi-Fi dans les hôtels',
      culturalTips: ['Respect des aînés', 'Poignée de main importante', 'Main droite pour manger']
    },
    festivals: [
      {
        name: 'Akwambo',
        month: 'Août',
        location: 'Côte centrale',
        description: 'Fête de purification des routes et des cours d\'eau'
      },
      {
        name: 'Homowo',
        month: 'Mai',
        location: 'Accra',
        description: 'Fête de la moisson des Ga'
      },
      {
        name: 'Fête de l\'Odwira',
        month: 'Septembre',
        location: 'Ashanti',
        description: 'Célébration de la nouvelle année Ashanti'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'James Brown',
        country: 'USA',
        rating: 5,
        text: "Year of Return was life-changing. Cape Coast Castle moved me to tears. Le Ghana est une destination spirituelle pour toute la diaspora africaine.",
        date: '2024-01-20'
      },
      {
        id: '2',
        author: 'Kwame A.',
        country: 'Ghana',
        rating: 5,
        text: "Notre pays a tant à offrir ! De l'histoire des châteaux à la beauté de Kakum, chaque région a sa magie.",
        date: '2024-03-15'
      }
    ]
  },
  // Nigeria
  {
    id: 'nigeria',
    name: 'Nigeria',
    capital: 'Abuja',
    description: "Géant de l'Afrique, le Nigeria est une nation de superlatifs. Lagos, mégalopole de 20 millions d'habitants, est le centre créatif du continent. Nollywood, Afrobeats et une scène artistique explosent les frontières. Culture Yoruba, Igbo et Haoussa créent une mosaïque fascinante.",
    image: 'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800',
    flag: '🇳🇬',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Anglais', 'Haoussa', 'Yoruba', 'Igbo', 'Fulfulde', 'Kanuri'],
    currency: 'Naira (NGN)',
    bestTimeToVisit: 'Novembre à Février',
    population: '216 millions',
    area: '923 768 km²',
    timeZone: 'UTC+1',
    callingCode: '+234',
    highlights: ['Lagos', 'Abuja', 'Calabar', 'Osun-Osogbo', 'Yankari', 'Port Harcourt'],
    regionsAdmin: [
      'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
      'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti',
      'Enugu', 'Federal Capital Territory', 'Gombe', 'Imo', 'Jigawa',
      'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
      'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
      'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
    ],
    regions: [
      {
        id: 'lagos',
        name: 'Lagos',
        description: "Mégalopole électrisante, Lagos est le cœur économique et culturel du Nigeria. Victoria Island, Lekki et le vieux Lagos offrent un contraste saisissant entre modernité et tradition. La vie nocturne et la scène musicale sont légendaires.",
        image: 'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800',
        highlights: ['Victoria Island', 'Lekki Conservation', 'Nike Art Gallery', 'Freedom Park', 'National Museum', 'Tarkwa Bay'],
        activities: ['Art contemporain', 'Vie nocturne', 'Plages', 'Shopping', 'Musique', 'Gastronomie'],
        gastronomy: ['Jollof rice', 'Suya', 'Egusi soup', 'Puff puff', 'Moi moi', 'Akara'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'BRT, Taxi, Uber, Keke, Okada',
          accommodation: ['Eko Hotels', 'Lagos Continental', 'The Wheatbaker', 'Radisson Blu'],
          tips: ['Éviter les heures de pointe', 'Attention aux pickpockets']
        }
      },
      {
        id: 'abuja',
        name: 'Abuja',
        description: "Capitale fédérale moderne, Abuja a été construite dans les années 80 au centre du pays. Son architecture contemporaine, le rocher de Zuma et le parc national offrent une expérience différente du chaos de Lagos.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Aso Rock', 'Mosquée nationale', 'Millennium Park', 'Arts and Crafts Village', 'National Mosque', 'Jabi Lake'],
        activities: ['Architecture moderne', 'Randonnée', 'Art et artisanat', 'Parcs', 'Photographie', 'Shopping'],
        gastronomy: ['Tuwo shinkafa', 'Kilishi', 'Fura da nono', 'Masa', 'Suya', 'Kunu'],
        practicalInfo: {
          bestTime: 'Octobre à Mars',
          transport: 'Taxi, Uber, Location voiture',
          accommodation: ['Transcorp Hilton', 'Sheraton Abuja', 'Fraser Suites', 'Nicon Luxury'],
          tips: ['Vêtements modestes pour la mosquée', 'Guide pour Aso Rock']
        }
      },
      {
        id: 'calabar',
        name: 'Calabar',
        description: "Au sud-est, Calabar est une ville historique charmante. Le carnaval annuel, le sanctuaire de Drill Ranch et le parc national de Cross River en font une destination nature et culture de premier plan.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Carnival Calabar', 'Drill Ranch', 'Cross River National Park', 'Slave History Museum', 'Tinapa Resort', 'Marina Resort'],
        activities: ['Carnaval', 'Primates', 'Forêt tropicale', 'Histoire', 'Plages', 'Photographie'],
        gastronomy: ['Ekpang nkukwo', 'Edikang ikong', 'Afang soup', 'Fisherman soup', 'Pepper soup'],
        practicalInfo: {
          bestTime: 'Décembre (Carnaval)',
          transport: 'Vol depuis Lagos, Bus, Taxi',
          accommodation: ['Transcorp Hotels Calabar', 'Channel View Hotel', 'Marian Hotel'],
          tips: ['Réserver longtemps à l\'avance pour le carnaval', 'Guide pour le parc']
        }
      },
      {
        id: 'osun-osogbo',
        name: 'Osun-Osogbo',
        description: "Classé UNESCO, le bosquet sacré d'Osun-Osogbo est l'un des derniers vestiges de la forêt sacrée Yoruba. Les sculptures de Suzanne Wenger et le festival annuel d'Osun attirent des fidèles du monde entier.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Bosquet sacré UNESCO', 'Festival d\'Osun', 'Sculptures Wenger', 'Spiritualité Yoruba', 'Osun River', 'Museum'],
        activities: ['Spiritualité', 'Art', 'Festival', 'Nature', 'Photographie', 'Culture'],
        gastronomy: ['Amala', 'Ewedu', 'Gbegiri', 'Obe ata', 'Asaro'],
        practicalInfo: {
          bestTime: 'Août (Festival)',
          transport: 'Bus depuis Lagos ou Ibadan, Taxi',
          accommodation: ['Hotels locaux à Osogbo', 'Guest houses', 'Ibadan (à proximité)'],
          tips: ['Respecter le caractère sacré', 'Guide recommandé']
        }
      },
      {
        id: 'kano',
        name: 'Kano',
        description: "Cité millénaire du nord, Kano est l'une des plus anciennes villes d'Afrique. Ses murs médiévaux, ses teinturiers traditionnels et l'émirat offrent une plongée dans l'Afrique musulmane historique.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Vieille ville', 'Puits de teinture', 'Palais de l\'Émir', 'Grande Mosquée', 'Kurmi Market', 'Gidan Makama Museum'],
        activities: ['Histoire médiévale', 'Artisanat', 'Culture Haoussa', 'Architecture', 'Marché', 'Photographie'],
        gastronomy: ['Tuwo', 'Miyan kuka', 'Masa', 'Kunu', 'Suya', 'Fura da nono'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Vol depuis Lagos/Abuja, Taxi',
          accommodation: ['Tahir Guest Palace', 'Bristol Palace Hotel', 'Prince Hotel'],
          tips: ['Vêtements modestes obligatoires', 'Respecter les traditions islamiques']
        }
      },
      {
        id: 'port-harcourt',
        name: 'Port Harcourt',
        description: "Capitale pétrolière du Nigeria, Port Harcourt est une ville portuaire dynamique du delta du Niger. Centre économique important avec une scène musicale vibrante et un accès aux mangroves du delta.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Port', 'Parc Pleasure', 'Musée', 'Marché', 'University', 'Bonne Island'],
        activities: ['Musique', 'Gastronomie', 'Marchés', 'Histoire', 'Photographie', 'Vie nocturne'],
        gastronomy: ['Banga soup', 'Starch', 'Pepper soup', 'Fried fish', 'Plantain'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Vol, Taxi, Bus',
          accommodation: ['Hotel Presidential', 'Genesis Hotel', 'Meridian Hotel'],
          tips: ['Vigilance accrue', 'Éviter certaines zones la nuit']
        }
      },
      {
        id: 'ibadan',
        name: 'Ibadan',
        description: "Ancienne capitale régionale, Ibadan est la plus grande ville du Nigeria par superficie. Ville universitaire et historique avec l'Université d'Ibadan (première université du Nigeria) et de nombreux instituts de recherche.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['University of Ibadan', 'Cocoa House', 'Mapo Hall', 'Agodi Gardens', 'National Museum', 'Bower Tower'],
        activities: ['Histoire', 'Université', 'Jardins', 'Culture', 'Photographie', 'Marchés'],
        gastronomy: ['Amala', 'Ewedu', 'Gbegiri', 'Ofada rice', 'Assorted meat'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Lagos, Taxi',
          accommodation: ['Kakanfo Inn', 'Premier Hotel', 'Bristol Hotel'],
          tips: ['Visiter l\'université', 'Guide pour l\'histoire']
        }
      },
      {
        id: 'enugu',
        name: 'Enugu',
        description: "Capitale de l'État d'Enugu dans le sud-est, connue comme la 'ville charbon' pour son histoire minière. Porte d'entrée de la région Igbo avec une culture riche et des paysages de collines.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Coal mines', 'Milliken Hill', 'National Museum', 'Ngwo Pine Forest', 'Udi Hills', 'Awhum Waterfall'],
        activities: ['Histoire minière', 'Randonnée', 'Culture Igbo', 'Nature', 'Photographie', 'Cascades'],
        gastronomy: ['Okpa', 'Abacha', 'Ugba', 'Ofe nsala', 'Fufu'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus, Vol depuis Lagos/Abuja',
          accommodation: ['Hotel Presidential', 'Olympic Hotel', 'Genesis Hotel'],
          tips: ['Guide pour les mines', 'Bonnes chaussures pour randonnée']
        }
      }
    ],
    gastronomy: {
      dishes: ['Jollof rice', 'Suya', 'Egusi soup', 'Pounded yam', 'Amala', 'Pepper soup', 'Moi moi', 'Akara'],
      description: "La cuisine nigériane est l'une des plus riches d'Afrique. Les soupes (egusi, ogbono) servies avec des féculents (pounded yam, eba) sont incontournables. Le suya, brochettes épicées, est le street food par excellence. Chaque région a ses spécialités : nord (tuwo), sud-ouest (amala), sud-est (fufu)."
    },
    practicalInfo: {
      visa: 'Visa obligatoire. Procédure en ligne disponible',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: 'Éviter le nord-est (Boko Haram). Lagos et le sud sont généralement sûrs',
      transport: 'Vols internationaux vers Lagos et Abuja. Vols intérieurs. Trafic intense à Lagos',
      electricity: '230V, prises britanniques (Type G)',
      internet: 'Variable. Bon dans les villes, limité ailleurs',
      culturalTips: ['Respect des aînés primordial', 'Main droite pour tout', 'Habillez-vous modestement']
    },
    festivals: [
      {
        name: 'Carnival Calabar',
        month: 'Décembre',
        location: 'Calabar',
        description: 'Plus grand carnaval d\'Afrique avec défilés et célébrations'
      },
      {
        name: 'Festival d\'Osun-Osogbo',
        month: 'Août',
        location: 'Osogbo',
        description: 'Festival religieux Yoruba au bosquet sacré'
      },
      {
        name: 'Argungu Fishing Festival',
        month: 'Février-Mars',
        location: 'Kebbi',
        description: 'Festival de pêche traditionnelle avec compétition'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Chioma Okafor',
        country: 'Nigeria',
        rating: 5,
        text: "Lagos is not for the faint-hearted! L'énergie de cette ville est unique au monde. La scène musicale et artistique explose.",
        date: '2024-03-05'
      },
      {
        id: '2',
        author: 'Emeka N.',
        country: 'Nigeria',
        rating: 4,
        text: "Le Nigeria est un pays de contrastes extraordinaires. De l'effervescence de Lagos à la spiritualité d'Osogbo, il y a tant à découvrir.",
        date: '2024-02-20'
      }
    ]
  },
  // Mali
  {
    id: 'mali',
    name: 'Mali',
    capital: 'Bamako',
    description: "⚠️ AVERTISSEMENT SÉCURITÉ : Le Mali connaît une situation sécuritaire complexe. Certaines régions sont déconseillées. Consultez les conseils aux voyageurs de votre gouvernement avant tout projet de voyage. Terre des empires africains, le Mali fascine par son histoire glorieuse. Tombouctou, cité mystérieuse, Djenné et sa mosquée de terre, le pays Dogon et ses falaises habitées... Le Mali est un trésor culturel inestimable.",
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    flag: '🇲🇱',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Bambara', 'Peul', 'Songhaï', 'Tamasheq', 'Sénoufo'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Février',
    population: '21 millions',
    area: '1 240 192 km²',
    timeZone: 'UTC',
    callingCode: '+223',
    highlights: ['⚠️ Tombouctou (zone à risque)', 'Djenné', 'Pays Dogon', 'Bamako', '⚠️ Gao (zone à risque)'],
    regionsAdmin: [
      'Kayes', 'Koulikoro', 'Sikasso', 'Ségou', 'Mopti', 'Tombouctou',
      'Gao', 'Kidal', 'Taoudénit', 'Ménaka', 'Bamako'
    ],
    regions: [
      {
        id: 'bamako',
        name: 'Bamako',
        description: "Capitale sur le Niger, Bamako est le cœur musical de l'Afrique. La scène musicale légendaire, les marchés colorés et la vie sur le fleuve offrent une introduction vibrante au Mali. Zone relativement plus sûre que le nord.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Marché de Médine', 'Musée National', 'Pont des Martyrs', 'Vie nocturne musicale', 'Point G Hill', 'Grande Mosquée'],
        activities: ['Concerts', 'Marchés', 'Fleuve Niger', 'Art', 'Photographie', 'Gastronomie'],
        gastronomy: ['Tô', 'Tigadeguena', 'Capitaine braisé', 'Dolo', 'Brochettes', 'Riz sauce'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Taxi, Sotrama, Location voiture',
          accommodation: ['Radisson Blu', 'Hôtel Salam', 'Azalaï Grand Hôtel', 'Maison des Jeunes'],
          tips: ['Vigilance accrue', 'Éviter les rassemblements', 'Conseils sécurité locaux']
        }
      },
      {
        id: 'djenne',
        name: 'Djenné',
        description: "Classée UNESCO, Djenné abrite la plus grande mosquée en terre du monde. Le lundi, le marché hebdomadaire transforme la place en un spectacle coloré unique. L'architecture en banco (terre crue) est fascinante. Situation sécuritaire à vérifier absolument avant visite.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Grande Mosquée', 'Marché du lundi', 'Architecture en banco', 'Artisanat', 'Vieille ville', 'Tombes'],
        activities: ['Architecture', 'Marché', 'Poterie', 'Photographie', 'Culture', 'Histoire'],
        gastronomy: ['Riz au gras', 'Poisson du Niger', 'Tô', 'Viande séchée', 'Thé'],
        practicalInfo: {
          bestTime: 'Novembre à Mars (lundi pour le marché)',
          transport: 'Route depuis Mopti ou Bamako (convoi possible)',
          accommodation: ['Hôtel Djenné Djenno', 'Chez le Marabout', 'Campements'],
          tips: ['⚠️ Vérifier sécurité absolument', 'Guide obligatoire', 'Voyage en groupe recommandé']
        }
      },
      {
        id: 'dogon',
        name: 'Pays Dogon',
        description: "⚠️ Situation sécuritaire variable. Les falaises de Bandiagara abritent le peuple Dogon et leur culture millénaire. Villages accrochés aux falaises, cosmogonie complexe, danses des masques... Le pays Dogon est un monde à part, gardien de traditions ancestrales.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Falaises de Bandiagara', 'Villages troglodytes', 'Danses des masques', 'Cosmogonie Dogon', 'Plateau', 'Sanctuaires'],
        activities: ['Randonnée', 'Culture Dogon', 'Villages', 'Masques', 'Photographie', 'Astronomie'],
        gastronomy: ['Tô', 'Bière de mil', 'Oignons de Sangha', 'Sauce feuille', 'Viande séchée'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Guide obligatoire, trekking, 4x4',
          accommodation: ['Campements villageois', 'Toits terrasses', 'Auberges'],
          tips: ['⚠️ Vérifier sécurité absolument', 'Guide local obligatoire', 'Respecter traditions']
        }
      },
      {
        id: 'tombouctou',
        name: 'Tombouctou',
        description: "⚠️ ZONE À HAUT RISQUE - DÉCONSEILLÉE. Cité mythique, Tombouctou fut un centre intellectuel majeur de l'Islam médiéval. Les manuscrits anciens, les mosquées Sankoré et Djinguereber témoignent de ce passé glorieux. Accès extrêmement dangereux.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Mosquée Djinguereber', 'Manuscrits anciens', 'Mosquée Sankoré', 'Désert', 'Bibliothèques', 'Histoire'],
        activities: ['Histoire', 'Manuscrits', 'Architecture en terre', 'Désert', 'Culture'],
        gastronomy: ['Cuisine touareg', 'Thé à la menthe', 'Viande de chameau', 'Dattes'],
        practicalInfo: {
          bestTime: 'Non recommandé',
          transport: 'Extrêmement dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE DANGEREUSE', 'Consulter autorités', 'Éviter absolument']
        }
      },
      {
        id: 'mopti',
        name: 'Mopti',
        description: "Surnommée la Venise du Mali, Mopti est construite à la confluence du Niger et du Bani. Le port de pirogues, le marché aux poissons et l'ambiance fluviale en font une étape importante. Situation sécuritaire à vérifier.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Port de pirogues', 'Marché au poisson', 'Mosquée de Komoguel', 'Fleuve Niger', 'Vieille ville', 'Artisanat'],
        activities: ['Pirogue', 'Marché', 'Vie fluviale', 'Photographie', 'Culture', 'Gastronomie'],
        gastronomy: ['Poisson fumé', 'Capitaine du Niger', 'Riz gras', 'Brochettes', 'Thé'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Pinasse sur le Niger, Route (prudence)',
          accommodation: ['Hôtel Kanaga', 'Y a Pas de Problème', 'Auberges'],
          tips: ['⚠️ Vérifier sécurité', 'Voyage en groupe', 'Guide local']
        }
      },
      {
        id: 'segou',
        name: 'Ségou',
        description: "Ancienne capitale du royaume Bambara, Ségou est une ville paisible sur les rives du Niger. Réputée pour sa poterie traditionnelle et son architecture coloniale, c'est une porte d'entrée plus sûre vers le nord.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Fleuve Niger', 'Poteries', 'Architecture coloniale', 'Marché', 'Royaume Bambara', 'Jardins'],
        activities: ['Poterie', 'Fleuve', 'Histoire', 'Photographie', 'Culture', 'Marche'],
        gastronomy: ['Poisson du Niger', 'Riz', 'Sauce arachide', 'Fruits', 'Thé'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Route depuis Bamako, Taxi',
          accommodation: ['Hôtel l\'Auberge', 'Hotel Savane', 'Maisons d\'hôtes'],
          tips: ['Plus sécurisée que le nord', 'Visiter les ateliers de poterie']
        }
      },
      {
        id: 'kayes',
        name: 'Kayes',
        description: "Région de l'ouest, Kayes est connue comme la 'ville la plus chaude d'Afrique'. Important carrefour commercial historique avec le Sénégal voisin. Paysages de savane et culture Mandingue préservée.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Gare historique', 'Fleuve Sénégal', 'Paysage Mandingue', 'Fort', 'Marché', 'Culture locale'],
        activities: ['Histoire', 'Culture Mandingue', 'Photographie', 'Nature', 'Marché', 'Gastronomie'],
        gastronomy: ['Tô', 'Sauce feuille', 'Riz', 'Viande', 'Lait caillé'],
        practicalInfo: {
          bestTime: 'Novembre à Février (moins chaud)',
          transport: 'Train depuis Bamako, Route',
          accommodation: ['Hôtel Relais', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Climat très chaud', 'Vêtements légers', 'Hydratation']
        }
      },
      {
        id: 'sikasso',
        name: 'Sikasso',
        description: "Deuxième ville du Mali, Sikasso est au sud près des frontières ivoirienne et burkinabè. Région agricole fertile avec une culture Sénoufo riche. Situation généralement plus stable que le nord.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Tata de Sikasso', 'Marché', 'Culture Sénoufo', 'Paysages verts', 'Agriculture', 'Traditions'],
        activities: ['Culture Sénoufo', 'Histoire', 'Marché', 'Photographie', 'Nature', 'Artisanat'],
        gastronomy: ['Tô', 'Sauce graine', 'Riz', 'Légumes', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Route depuis Bamako, Bus',
          accommodation: ['Hôtel le Luxury', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Plus stable que le nord', 'Culture Sénoufo riche', 'Agriculture locale']
        }
      }
    ],
    gastronomy: {
      dishes: ['Tô', 'Tigadeguena', 'Riz au gras', 'Capitaine braisé', 'Dolo', 'Brochettes', 'Sauce feuille'],
      description: "La cuisine malienne est simple et savoureuse. Le tô (pâte de mil ou maïs) est le plat de base, servi avec des sauces variées (feuille, arachide, gombo). Le capitaine du Niger, grillé ou en sauce, est un délice. Le dolo, bière de mil, accompagne les fêtes."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: '⚠️ SITUATION SÉCURITAIRE TRÈS COMPLEXE. Zones nord extrêmement dangereuses. Consulter les conseils aux voyageurs.',
      transport: 'Vols vers Bamako uniquement. Déplacements intérieurs très limités et dangereux',
      electricity: '220V, prises européennes (Type C)',
      internet: 'Limitée. Couverture mobile variable',
      culturalTips: ['Respect islamique important', 'Main droite pour tout', 'Patience nécessaire']
    },
    festivals: [
      {
        name: 'Festival au Désert',
        month: 'Janvier (suspendu)',
        location: 'Près de Tombouctou',
        description: '⚠️ Festival suspendu pour raisons de sécurité'
      },
      {
        name: 'Fête des Masques Dogon',
        month: 'Avril-Mai',
        location: 'Pays Dogon',
        description: '⚠️ Cérémonies traditionnelles - sécurité à vérifier'
      },
      {
        name: 'Biennale de la Photographie',
        month: 'Novembre',
        location: 'Bamako',
        description: 'Événement artistique à Bamako'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Pierre Dubois',
        country: 'France',
        rating: 5,
        text: "J'ai visité le pays Dogon avant la crise. Une expérience humaine et culturelle inoubliable. Les Dogon sont les gardiens d'une sagesse millénaire.",
        date: '2019-12-15'
      },
      {
        id: '2',
        author: '⚠️ Avertissement',
        country: 'Sécurité',
        rating: 1,
        text: "La situation sécuritaire s'est considérablement dégradée. De nombreuses zones sont extrêmement dangereuses. Consultez les autorités avant tout projet.",
        date: '2024-04-01'
      }
    ]
  },
  // Togo
  {
    id: 'togo',
    name: 'Togo',
    capital: 'Lomé',
    description: "Petit pays à la grande culture, le Togo offre une diversité surprenante. De Lomé, capitale balnéaire, aux villages Tamberma du nord avec leur architecture unique, en passant par Togoville et ses traditions vodou, le Togo est une destination authentique et encore préservée.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇹🇬',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Éwé', 'Kabyè', 'Mina', 'Dagomba'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Mars',
    population: '8,6 millions',
    area: '56 785 km²',
    timeZone: 'UTC',
    callingCode: '+228',
    highlights: ['Lomé', 'Koutammakou', 'Togoville', 'Cascades de Kpimé', 'Parc Fazao', 'Sokodé'],
    regionsAdmin: [
      'Maritime', 'Plateaux', 'Centrale', 'Kara', 'Savanes'
    ],
    regions: [
      {
        id: 'lome',
        name: 'Lomé',
        description: "Capitale sur l'Atlantique, Lomé est une ville agréable avec ses plages, ses marchés et son ambiance décontractée. Le grand marché et le marché des fétiches (vodou) sont des incontournables. Ville frontalière avec le Ghana.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Grand Marché', 'Marché des Fétiches', 'Plage de Lomé', 'Palais des Congrès', 'Musée National', 'Cathédrale'],
        activities: ['Marché vodou', 'Plages', 'Vie nocturne', 'Artisanat', 'Photographie', 'Gastronomie'],
        gastronomy: ['Fufu', 'Sauce d\'arachide', 'Poisson grillé', 'Dèmè', 'Ablo', 'Akpan'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Zémidjan, Taxi, Bus, Location',
          accommodation: ['Hôtel 2 Février', 'Onomo Hotel', 'Hotel Sarakawa', 'Maisons d\'hôtes'],
          tips: ['Marchander au marché', 'Respecter les fétiches']
        }
      },
      {
        id: 'koutammakou',
        name: 'Koutammakou',
        description: "Classé UNESCO, le Koutammakou est le pays des Batammariba et leurs maisons-forteresses à deux étages appelées Tata Somba. Cette architecture unique et la culture Tamberma préservée fascinent les visiteurs.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Tata Somba', 'Culture Tamberma', 'Paysage UNESCO', 'Traditions', 'Villages', 'Architecture'],
        activities: ['Architecture', 'Culture traditionnelle', 'Randonnée', 'Photographie', 'Artisanat', 'Rencontres'],
        gastronomy: ['Tchoukoutou', 'Igname pilée', 'Sauce locale', 'Viande', 'Céréales'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 depuis Kara, Bus',
          accommodation: ['Campements communautaires', 'Auberge de Nadoba', 'Maisons d\'hôtes'],
          tips: ['Respecter l\'architecture', 'Guide local recommandé']
        }
      },
      {
        id: 'togoville',
        name: 'Togoville',
        description: "Sur le lac Togo, Togoville est le berceau du vodou au Togo. Accessible en pirogue, cette ville paisible abrite une cathédrale et des temples vodou qui coexistent harmonieusement. Site historique important.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Lac Togo', 'Temples vodou', 'Cathédrale', 'Pirogue', 'Histoire', 'Paix'],
        activities: ['Spiritualité vodou', 'Pirogue', 'Patrimoine colonial', 'Pêche', 'Photographie', 'Culture'],
        gastronomy: ['Poisson du lac', 'Ablo', 'Akpan', 'Fruits', 'Légumes'],
        practicalInfo: {
          bestTime: 'Toute l\'année',
          transport: 'Pirogue depuis Agbodrafo, Taxi',
          accommodation: ['Chambres chez l\'habitant', 'Auberges', 'Lomé (retour)'],
          tips: ['Respecter les croyances', 'Pirogue traditionnelle']
        }
      },
      {
        id: 'kpalime',
        name: 'Kpalimé',
        description: "Dans les montagnes du Togo, Kpalimé est entourée de forêts tropicales et de cascades. La cascade de Kpimé, le Mont Agou et les plantations de café et cacao font de cette région un paradis vert.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Cascade de Kpimé', 'Mont Agou', 'Plantations', 'Forêt tropicale', 'Papillons', 'Artistes'],
        activities: ['Randonnée', 'Cascades', 'Café/Cacao', 'Papillons', 'Photographie', 'Nature'],
        gastronomy: ['Café Kpalimé', 'Cacao', 'Fruits tropicaux', 'Miel', 'Produits locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Lomé, Taxi, Moto',
          accommodation: ['Hôtel Le Geyser', 'Campement Chez Alice', 'Auberges'],
          tips: ['Guide pour les cascades', 'Dégustation café']
        }
      },
      {
        id: 'kara',
        name: 'Kara',
        description: "Principale ville du nord, Kara est le cœur de la région des Kabyè. Connue pour ses luttes traditionnelles (Evala) et son artisanat en fer forgé. Porte d'entrée du Koutammakou.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Marché central', 'Culture Kabyè', 'Stade', 'Artisanat fer', 'Montagnes', 'Traditions'],
        activities: ['Culture Kabyè', 'Artisanat', 'Marché', 'Photographie', 'Rencontres', 'Histoire'],
        gastronomy: ['Tchoukoutou', 'Igname', 'Sauce', 'Viande', 'Légumes locaux'],
        practicalInfo: {
          bestTime: 'Juillet (luttes Evala)',
          transport: 'Bus depuis Lomé, Avion intérieur',
          accommodation: ['Hôtel Kara', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Festival Evala en juillet', 'Artisanat fer']
        }
      },
      {
        id: 'sokode',
        name: 'Sokodé',
        description: "Deuxième ville du Togo, Sokodé est le fief des Kotokoli. Ville commerçante importante avec une grande mosquée centrale et une vie culturelle riche. Centre de l'islam au Togo.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Grande Mosquée', 'Marché', 'Culture Kotokoli', 'Artisanat', 'Tissus', 'Traditions'],
        activities: ['Culture islamique', 'Marché', 'Artisanat', 'Photographie', 'Rencontres', 'Gastronomie'],
        gastronomy: ['Riz', 'Sauce', 'Viande', 'Fufu', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Kara ou Lomé',
          accommodation: ['Hôtel Central', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Respect islamique', 'Vêtements modestes']
        }
      },
      {
        id: 'dapaong',
        name: 'Dapaong',
        description: "Ville du nord extrême, Dapaong est proche de la frontière burkinabè. Région des Moba avec des paysages de savane et des traditions pastorales. Accès aux marchés frontaliers.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Marché frontalier', 'Culture Moba', 'Savane', 'Traditions', 'Nature', 'Paysages'],
        activities: ['Culture Moba', 'Marché', 'Photographie', 'Nature', 'Rencontres', 'Traditions'],
        gastronomy: ['Céréales', 'Lait', 'Viande', 'Sauce', 'Produits locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Bus depuis Kara, Taxi-brousse',
          accommodation: ['Auberges locales', 'Maisons d\'hôtes'],
          tips: ['Frontière Burkina', 'Culture pastorale']
        }
      },
      {
        id: 'aneho',
        name: 'Aného',
        description: "Ancienne capitale coloniale, Aného est une ville historique sur la côte. Architecture coloniale allemande et française, plages tranquilles et histoire du commerce transatlantique.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Architecture coloniale', 'Plages', 'Histoire', 'Lagune', 'Calme', 'Patrimoine'],
        activities: ['Histoire', 'Architecture', 'Plages', 'Photographie', 'Repos', 'Culture'],
        gastronomy: ['Poisson', 'Fruits de mer', 'Riz', 'Légumes', 'Fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Taxi depuis Lomé, Bus',
          accommodation: ['Auberges', 'Maisons d\'hôtes', 'Lomé (retour)'],
          tips: ['Histoire coloniale', 'Plages tranquilles']
        }
      }
    ],
    gastronomy: {
      dishes: ['Fufu', 'Akume', 'Dèmè', 'Ablo', 'Tchoukoutou', 'Sauce arachide', 'Poisson grillé'],
      description: "La cuisine togolaise mêle influences ouest-africaines. Le fufu (pâte de manioc et plantain) avec sauce d'arachide est le plat national. L'ablo et l'akassa sont des accompagnements de base. La bière de mil (tchoukoutou) est la boisson traditionnelle. Les poissons et fruits de mer sont excellents sur la côte."
    },
    practicalInfo: {
      visa: 'Visa à l\'arrivée ou e-visa pour la plupart des nationalités',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens recommandés',
      safety: 'Pays sûr et stable. Vigilance normale',
      transport: 'Vols vers Lomé. Taxis et zémidjans dans les villes. Bus interurbains',
      electricity: '220V, prises européennes (Type C)',
      internet: 'Correct dans les villes. Wi-Fi dans les hôtels',
      culturalTips: ['Respect des traditions vodou', 'Salutations importantes', 'Patience']
    },
    festivals: [
      {
        name: 'Fête des Ignames',
        month: 'Août-Septembre',
        location: 'Tout le Togo',
        description: 'Célébration de la nouvelle récolte d\'ignames'
      },
      {
        name: 'Evala',
        month: 'Juillet',
        location: 'Kara',
        description: 'Luttes traditionnelles des jeunes Kabyè'
      },
      {
        name: 'Fête du Vodou',
        month: 'Janvier',
        location: 'Togoville et Lomé',
        description: 'Célébrations des traditions vodou'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Sophie Martin',
        country: 'Suisse',
        rating: 4,
        text: "Le Koutammakou m'a fascinée. Les Tata Somba sont des chefs-d'œuvre architecturaux. Un Togo authentique loin des sentiers battus.",
        date: '2024-01-10'
      },
      {
        id: '2',
        author: 'Thomas K.',
        country: 'Allemagne',
        rating: 5,
        text: "Petit pays mais grande diversité ! Des plages de Lomé aux montagnes de Kpalimé en passant par le nord traditionnel, chaque région a son charme.",
        date: '2024-02-15'
      }
    ]
  },
  // Burkina Faso
  {
    id: 'burkina-faso',
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    description: "⚠️ AVERTISSEMENT SÉCURITÉ : Situation sécuritaire dégradée, surtout dans le nord et l'est. Pays des hommes intègres, le Burkina Faso est un centre culturel majeur de l'Afrique. Le FESPACO (festival de cinéma), les masques Bobo et les Pics de Sindou font de ce pays enclavé une destination culturelle de premier plan.",
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    flag: '🇧🇫',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Mooré', 'Dioula', 'Fulfulde', 'Gourmantché'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Février',
    population: '22 millions',
    area: '274 200 km²',
    timeZone: 'UTC',
    callingCode: '+226',
    highlights: ['Ouagadougou', 'Bobo-Dioulasso', '⚠️ Pics de Sindou (sécurité)', 'FESPACO', '⚠️ Parc de l\'Arly (sécurité)'],
    regionsAdmin: [
      'Boucle du Mouhoun', 'Cascades', 'Centre', 'Centre-Est', 'Centre-Nord',
      'Centre-Ouest', 'Centre-Sud', 'Est', 'Hauts-Bassins', 'Nord',
      'Plateau-Central', 'Sahel', 'Sud-Ouest'
    ],
    regions: [
      {
        id: 'ouagadougou',
        name: 'Ouagadougou',
        description: "Capitale affectueusement appelée 'Ouaga', la ville est le cœur culturel du Burkina. Le FESPACO, plus grand festival de cinéma africain, et la scène musicale vibrante en font une capitale créative. Zone relativement plus sûre.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['FESPACO', 'Musée National', 'Grand Marché', 'Moro-Naba', 'Place de la Révolution', 'Monument'],
        activities: ['Cinéma africain', 'Musique', 'Artisanat', 'Culture Mossi', 'Photographie', 'Gastronomie'],
        gastronomy: ['Riz sauce', 'Tô', 'Poulet bicyclette', 'Dolo', 'Brochettes', 'Salade'],
        practicalInfo: {
          bestTime: 'Février-Mars (FESPACO)',
          transport: 'Taxi, Moto, Bus',
          accommodation: ['Sofitel Ouaga', 'Palm Beach Hotel', 'Bravia Hotel', 'Maisons d\'hôtes'],
          tips: ['Vigilance accrue', 'Éviter rassemblements', 'FESPACO réservations']
        }
      },
      {
        id: 'bobo-dioulasso',
        name: 'Bobo-Dioulasso',
        description: "Deuxième ville du pays, Bobo est considérée comme plus agréable que la capitale. La vieille ville Bobo, les masques et la Grande Mosquée de Dioulassoba offrent une immersion culturelle riche. Situation sécuritaire à vérifier.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Mosquée de Dioulassoba', 'Vieille ville Bobo', 'Marché', 'Mare aux poissons sacrés', 'Kibidwe', 'Culture'],
        activities: ['Culture Bobo', 'Architecture', 'Masques', 'Artisanat', 'Photographie', 'Histoire'],
        gastronomy: ['Tô', 'Sauce feuille', 'Brochettes', 'Chapalo', 'Riz', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Ouaga, Taxi local, Avion',
          accommodation: ['L\'Auberge', 'Relais Touristique', 'Hôtels locaux'],
          tips: ['⚠️ Vérifier sécurité', 'Guide pour la vieille ville', 'Masques traditionnels']
        }
      },
      {
        id: 'sindou',
        name: 'Pics de Sindou',
        description: "⚠️ Situation sécuritaire à vérifier absolument. Formation géologique spectaculaire, les Pics de Sindou sont des aiguilles rocheuses sculptées par l'érosion. Ce paysage unique, sacré pour les populations locales, offre des randonnées mémorables.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Formations rocheuses', 'Randonnée', 'Sites sacrés', 'Paysages', 'Culture Sénoufo', 'Nature'],
        activities: ['Randonnée', 'Photographie', 'Spiritualité locale', 'Escalade', 'Nature', 'Culture'],
        gastronomy: ['Cuisine locale', 'Dolo', 'Céréales', 'Sauce', 'Viande'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 depuis Banfora (prudence)',
          accommodation: ['Campements', 'Retour à Banfora', 'Auberges'],
          tips: ['⚠️ Vérifier sécurité absolument', 'Guide obligatoire', 'Voyage en groupe']
        }
      },
      {
        id: 'banfora',
        name: 'Banfora',
        description: "Porte d'entrée du sud-ouest, Banfora est entourée de merveilles naturelles. Les cascades de Karfiguéla, le lac de Tengrela avec ses hippopotames et les dômes de Fabédougou attirent les amoureux de nature. Sécurité à vérifier.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Cascades de Karfiguéla', 'Lac de Tengrela', 'Dômes de Fabédougou', 'Hippopotames', 'Paysages', 'Culture'],
        activities: ['Cascades', 'Observation hippos', 'Randonnée', 'Baignade', 'Photographie', 'Nature'],
        gastronomy: ['Poisson du lac', 'Fruits tropicaux', 'Jus de mangue', 'Riz', 'Légumes'],
        practicalInfo: {
          bestTime: 'Août à Novembre (cascades)',
          transport: 'Bus depuis Bobo, Taxi (prudence)',
          accommodation: ['Hôtel Canne à Sucre', 'Campement Comoe', 'Auberges'],
          tips: ['⚠️ Vérifier sécurité', 'Guide pour les hippos', 'Cascades en saison']
        }
      },
      {
        id: 'koudougou',
        name: 'Koudougou',
        description: "Troisième ville du pays, Koudougou est un centre commercial et culturel important. Ville étudiante dynamique avec une scène artistique active. Situation généralement plus stable.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Marché', 'Vie étudiante', 'Culture', 'Artisanat', 'Université', 'Dynamisme'],
        activities: ['Culture locale', 'Marché', 'Art', 'Photographie', 'Rencontres', 'Gastronomie'],
        gastronomy: ['Riz', 'Tô', 'Sauce', 'Viande', 'Légumes', 'Fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Ouaga, Taxi',
          accommodation: ['Hôtels locaux', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Ville étudiante', 'Artisanat local', 'Plus stable']
        }
      },
      {
        id: 'ouahigouya',
        name: 'Ouahigouya',
        description: "Ville du nord, capitale du royaume mossi de Yatenga. Architecture traditionnelle et histoire royale. ⚠️ Situation sécuritaire très préoccupante dans cette région.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Histoire royale', 'Architecture', 'Culture Mossi', 'Traditions', 'Marché', 'Patrimoine'],
        activities: ['Histoire', 'Culture', 'Photographie', 'Rencontres', 'Traditions'],
        gastronomy: ['Tô', 'Sauce', 'Viande', 'Céréales', 'Lait'],
        practicalInfo: {
          bestTime: 'Non recommandé actuellement',
          transport: 'Très dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE TRÈS DANGEREUSE', 'Éviter absolument']
        }
      },
      {
        id: 'fada-ngourma',
        name: 'Fada N\'Gourma',
        description: "Ville de l'est, capitale du peuple Gourmantché. Culture et traditions préservées. ⚠️ Situation sécuritaire extrêmement dangereuse dans cette région frontalière.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Culture Gourmantché', 'Traditions', 'Histoire', 'Artisanat', 'Marché'],
        activities: ['Culture', 'Traditions', 'Photographie', 'Histoire'],
        gastronomy: ['Cuisine locale', 'Céréales', 'Sauce', 'Viande'],
        practicalInfo: {
          bestTime: 'Non recommandé',
          transport: 'Extrêmement dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE DE CONFLIT', 'Éviter absolument']
        }
      },
      {
        id: 'gaoua',
        name: 'Gaoua',
        description: "Capitale du pays Lobi, connu pour son architecture fortifiée et ses traditions animistes. Culture préservée et artisanat unique. Sécurité à vérifier absolument.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Architecture Lobi', 'Culture animiste', 'Musée', 'Traditions', 'Artisanat', 'Histoire'],
        activities: ['Architecture', 'Culture', 'Photographie', 'Artisanat', 'Histoire', 'Rencontres'],
        gastronomy: ['Tô', 'Sauce', 'Viande', 'Céréales', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Février (si sécurité)',
          transport: 'Bus depuis Bobo (prudence)',
          accommodation: ['Auberges locales', 'Maisons d\'hôtes'],
          tips: ['⚠️ Vérifier sécurité absolument', 'Respecter traditions animistes']
        }
      }
    ],
    gastronomy: {
      dishes: ['Tô', 'Riz sauce', 'Poulet bicyclette', 'Brochettes', 'Dolo', 'Zoom-koom', 'Benga', 'Sagabo'],
      description: "La cuisine burkinabè est simple et goûteuse. Le tô (pâte de mil ou sorgho) accompagne toutes les sauces. Le poulet bicyclette, grillé au bord des routes, est l'emblème du pays. Le dolo (bière de mil) et le zoom-koom (boisson à base de mil) désaltèrent. Les brochettes de viande sont populaires."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: '⚠️ SITUATION SÉCURITAIRE TRÈS DÉGRADÉE. Nord et est extrêmement dangereux. Voyage déconseillé.',
      transport: 'Vols vers Ouagadougou uniquement. Déplacements intérieurs très limités',
      electricity: '220V, prises européennes (Type C)',
      internet: 'Limitée. Couverture mobile variable',
      culturalTips: ['Respect des aînés', 'Patience', 'Hospitalité importante']
    },
    festivals: [
      {
        name: 'FESPACO',
        month: 'Février-Mars (biennale)',
        location: 'Ouagadougou',
        description: 'Festival panafricain du cinéma et de la télévision'
      },
      {
        name: 'Nuits Atypiques',
        month: 'Mars',
        location: 'Koudougou',
        description: 'Festival de musique et de danse'
      },
      {
        name: '⚠️ Nombreux festivals suspendus',
        month: 'Variable',
        location: 'Divers',
        description: 'Pour raisons de sécurité'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Ousmane Traoré',
        country: 'Mali',
        rating: 5,
        text: "Le FESPACO est l'événement culturel majeur de l'Afrique. Ouaga vibre au rythme du cinéma pendant une semaine. Inoubliable !",
        date: '2023-02-28'
      },
      {
        id: '2',
        author: '⚠️ Avertissement',
        country: 'Sécurité',
        rating: 1,
        text: "La situation s'est considérablement détériorée. De nombreuses régions sont inaccessibles et dangereuses.",
        date: '2024-04-01'
      }
    ]
  },
  // Guinée
  {
    id: 'guinee',
    name: 'Guinée',
    capital: 'Conakry',
    description: "La Guinée, château d'eau de l'Afrique de l'Ouest, est une terre de contrastes. Le Fouta-Djalon et ses paysages montagneux, Conakry et ses îles, les forêts de Guinée forestière... Le pays offre une nature préservée et une culture riche, berceau de nombreuses traditions mandingues.",
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    flag: '🇬🇳',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Pular', 'Malinké', 'Soussou', 'Kissi', 'Toma'],
    currency: 'Franc guinéen (GNF)',
    bestTimeToVisit: 'Novembre à Avril',
    population: '13,5 millions',
    area: '245 857 km²',
    timeZone: 'UTC',
    callingCode: '+224',
    highlights: ['Fouta-Djalon', 'Îles de Los', 'Forêts du Sud-Est', 'Mont Nimba', 'Conakry', 'Kindia'],
    regionsAdmin: [
      'Conakry', 'Boké', 'Faranah', 'Kankan', 'Kindia', 'Labé', 'Mamou', 'Nzérékoré'
    ],
    regions: [
      {
        id: 'conakry',
        name: 'Conakry',
        description: "Capitale sur une presqu'île, Conakry est une ville dense et animée. Les îles de Los, le marché de Madina et la vie nocturne musicale offrent un aperçu de la culture guinéenne urbaine.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Îles de Los', 'Marché de Madina', 'Musée National', 'Plages', 'Palais du Peuple', 'Jardin botanique'],
        activities: ['Îles tropicales', 'Marchés', 'Musique mandingue', 'Vie nocturne', 'Photographie', 'Gastronomie'],
        gastronomy: ['Riz sauce feuille', 'Poulet yassa', 'Jus de gingembre', 'Poisson grillé', 'Fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Avril',
          transport: 'Taxi, Moto, Bus',
          accommodation: ['Riviera Royal Hotel', 'Noom Hotel', 'Palm Camayenne', 'Hôtel Ghi'],
          tips: ['Vigilance dans les marchés', 'Négocier les taxis', 'Eau en bouteille']
        }
      },
      {
        id: 'fouta-djalon',
        name: 'Fouta-Djalon',
        description: "Massif montagneux spectaculaire, le Fouta-Djalon est le pays Peul. Plateaux verdoyants, cascades, villages pittoresques... C'est le château d'eau de l'Afrique de l'Ouest où naissent le Niger, le Sénégal et la Gambie.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Dalaba', 'Chutes du Kinkon', 'Mali-ville', 'Labé', 'Pita', 'Paysages'],
        activities: ['Randonnée', 'Cascades', 'Culture Peul', 'Paysages', 'Photographie', 'Nature'],
        gastronomy: ['Lait caillé', 'Fonio', 'Viande séchée', 'Riz', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Bus ou 4x4 depuis Conakry',
          accommodation: ['SIB Hotel Dalaba', 'Campements', 'Hôtel Tata à Labé', 'Auberges'],
          tips: ['Routes difficiles', 'Guide pour randonnée', 'Climat frais']
        }
      },
      {
        id: 'kankan',
        name: 'Kankan',
        description: "Deuxième ville du pays, Kankan est le cœur du pays Malinké. Ville historique de l'empire du Mali, elle reste un centre religieux et culturel important avec sa grande mosquée et ses traditions mandingues.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Grande Mosquée', 'Fleuve Milo', 'Culture Malinké', 'Traditions', 'Marché', 'Histoire'],
        activities: ['Islam en Afrique', 'Musique mandingue', 'Histoire', 'Marchés', 'Photographie', 'Culture'],
        gastronomy: ['Riz gras', 'Mafé', 'Thé', 'Viande', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Route depuis Conakry (longue), Avion',
          accommodation: ['Hôtel Bate', 'Auberges locales', 'Maisons d\'hôtes'],
          tips: ['Culture mandingue riche', 'Respect islamique', 'Long trajet']
        }
      },
      {
        id: 'nzerekore',
        name: 'N\'Zérékoré',
        description: "Capitale de la Guinée forestière, N'Zérékoré est entourée de forêts tropicales. Le Mont Nimba (UNESCO), partagé avec la Côte d'Ivoire et le Liberia, abrite une biodiversité exceptionnelle.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Mont Nimba', 'Forêt tropicale', 'Biodiversité', 'Cultures forestières', 'Marché', 'Nature'],
        activities: ['Randonnée Mont Nimba', 'Faune et flore', 'Ethnies forestières', 'Photographie', 'Nature', 'Culture'],
        gastronomy: ['Sauce palmiste', 'Riz de forêt', 'Viande de brousse', 'Fruits sauvages', 'Miel'],
        practicalInfo: {
          bestTime: 'Décembre à Mars',
          transport: 'Route ou vol depuis Conakry',
          accommodation: ['Hôtel Mont Nimba', 'Auberges', 'Campements'],
          tips: ['Permis pour le mont Nimba', 'Guide obligatoire', 'Biodiversité unique']
        }
      },
      {
        id: 'kindia',
        name: 'Kindia',
        description: "Ville à mi-chemin entre Conakry et le Fouta-Djalon, Kindia est connue pour ses plantations d'agrumes et sa fabrique de cigarettes. Porte d'entrée vers les montagnes.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Plantations', 'Mont Gangan', 'Marché', 'Cultures', 'Paysages', 'Accessibilité'],
        activities: ['Visite plantations', 'Randonnée', 'Photographie', 'Marché', 'Nature', 'Culture'],
        gastronomy: ['Agrumes', 'Riz', 'Sauce', 'Viande', 'Légumes locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Route depuis Conakry, Bus',
          accommodation: ['Hôtel de la Gare', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Agrumes frais', 'Randonnée modérée', 'Escale pratique']
        }
      },
      {
        id: 'boke',
        name: 'Boké',
        description: "Région de l'ouest, Boké est le centre de l'industrie de la bauxite. Paysages de savane et culture Soussou. Accès aux îles proches et à la frontière avec la Guinée-Bissau.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Industrie bauxite', 'Culture Soussou', 'Îles proches', 'Savane', 'Marché', 'Frontière'],
        activities: ['Culture Soussou', 'Photographie', 'Îles', 'Nature', 'Marché', 'Histoire'],
        gastronomy: ['Poisson', 'Riz', 'Sauce', 'Fruits de mer', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Route depuis Conakry, Bus',
          accommodation: ['Hôtels locaux', 'Auberges'],
          tips: ['Industrie minière', 'Culture Soussou', 'Îles accessibles']
        }
      },
      {
        id: 'labe',
        name: 'Labé',
        description: "Capitale du Fouta-Djalon, Labé est le centre culturel des Peuls. Ville importante pour l'islam en Guinée avec ses nombreuses mosquées et écoles coraniques.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Culture Peul', 'Mosquées', 'Marché', 'Histoire', 'Traditions', 'Centre religieux'],
        activities: ['Culture Peul', 'Islam', 'Marché', 'Photographie', 'Histoire', 'Rencontres'],
        gastronomy: ['Lait caillé', 'Fonio', 'Viande', 'Riz', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Route depuis Conakry, Bus',
          accommodation: ['Hôtel Tata', 'Auberges', 'Maisons d\'hôtes'],
          tips: ['Culture peul riche', 'Respect islamique', 'Climat frais']
        }
      },
      {
        id: 'mamou',
        name: 'Mamou',
        description: "Ville au cœur du Fouta-Djalon, Mamou est un important carrefour commercial. Connue pour son marché animé et son rôle dans le commerce du bétail.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Marché', 'Carrefour', 'Culture', 'Commerce bétail', 'Paysages', 'Accessibilité'],
        activities: ['Marché', 'Culture', 'Photographie', 'Commerce', 'Rencontres', 'Gastronomie'],
        gastronomy: ['Viande', 'Lait', 'Riz', 'Sauce', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Route, Bus',
          accommodation: ['Hôtels locaux', 'Auberges'],
          tips: ['Marché important', 'Carrefour stratégique', 'Culture locale']
        }
      }
    ],
    gastronomy: {
      dishes: ['Riz sauce', 'Fonio', 'Mafé', 'Sauce feuille', 'Jus de gingembre', 'Poulet yassa', 'Lait caillé'],
      description: "La cuisine guinéenne est riche et variée. Le riz est la base, accompagné de sauces aux feuilles de manioc, patate ou arachide. Le fonio, céréale ancestrale, est une spécialité du Fouta. Les jus de fruits frais (bissap, gingembre, bouye) sont délicieux. Le poulet yassa, mariné au citron et oignon, est un plat national."
    },
    practicalInfo: {
      visa: 'Visa obligatoire pour la plupart des nationalités',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens indispensables',
      safety: 'Généralement sûr mais vigilance recommandée. Manifestations possibles',
      transport: 'Vols vers Conakry. Routes en mauvais état, 4x4 recommandé',
      electricity: '220V, prises européennes (Type C/F)',
      internet: 'Limitée hors de Conakry. Wi-Fi dans les grands hôtels',
      culturalTips: ['Respect des traditions', 'Patience importante', 'Hospitalité guinéenne']
    },
    festivals: [
      {
        name: 'Festival des Arts',
        month: 'Décembre',
        location: 'Conakry',
        description: 'Festival culturel avec musique et danse'
      },
      {
        name: 'Fête du Fonio',
        month: 'Mars',
        location: 'Labé',
        description: 'Célébration de la récolte du fonio'
      },
      {
        name: 'Festival Mandingue',
        month: 'Avril',
        location: 'Kankan',
        description: 'Célébration de la culture mandingue'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Mamadou Barry',
        country: 'Guinée',
        rating: 5,
        text: "Le Fouta-Djalon est un paradis méconnu. Les cascades, les villages peuls, l'air pur... Ma région natale a tant à offrir aux voyageurs !",
        date: '2024-02-20'
      },
      {
        id: '2',
        author: 'Aïssatou B.',
        country: 'France',
        rating: 4,
        text: "Conakry est une ville intense et les îles de Los sont magnifiques. La Guinée mérite d'être découverte pour son authenticité.",
        date: '2024-01-15'
      }
    ]
  },
  // Gambie
  {
    id: 'gambie',
    name: 'Gambie',
    capital: 'Banjul',
    description: "Plus petit pays d'Afrique continentale, la Gambie est un ruban de terre qui suit le fleuve Gambie. Destination balnéaire populaire avec ses plages de sable fin, ses hôtels-clubs et ses réserves naturelles. Le sourire gambien est légendaire.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇬🇲',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Anglais', 'Mandinka', 'Wolof', 'Fula', 'Jola'],
    currency: 'Dalasi (GMD)',
    bestTimeToVisit: 'Novembre à Mai',
    population: '2,4 millions',
    area: '10 689 km²',
    timeZone: 'UTC',
    callingCode: '+220',
    highlights: ['Plages de Kololi', 'Parc national de Kiang West', 'Île James', 'Banjul', 'Abuko Nature Reserve'],
    regionsAdmin: [
      'Banjul', 'Central River', 'Lower River', 'North Bank', 'Upper River', 'Western'
    ],
    regions: [
      {
        id: 'banjul',
        name: 'Banjul et la côte',
        description: "Banjul, capitale située sur l'île de Saint Mary, et la zone touristique de la côte (Kololi, Kotu, Bakau) offrent plages, hôtels et vie nocturne. Marchés colorés et réserves naturelles à proximité.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Arch 22', 'Albert Market', 'Plages de Kololi', 'Abuko Nature Reserve', 'Kachikally Crocodile Pool'],
        activities: ['Plages', 'Birdwatching', 'Marchés', 'Vie nocturne', 'Rencontres culturelles'],
        gastronomy: ['Benachin', 'Domoda', 'Yassa', 'Pepper soup', 'Fresh seafood'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Taxis, Minibuses (gele-gele), Car rental',
          accommodation: ['Coco Ocean Resort', 'Kairaba Beach Hotel', 'Sunset Beach Hotel'],
          tips: ['Négocier les prix des taxis', 'Éviter de nager seul la nuit']
        }
      },
      {
        id: 'up-river',
        name: 'Upper River Region',
        description: "En remontant le fleuve Gambie, la région offre des paysages sauvages, des villages traditionnels et des possibilités d'écotourisme. Le parc national de Kiang West et l'île James (site UNESCO) sont des incontournables.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Parc national de Kiang West', 'Île James', 'Villages traditionnels', 'Basse', 'Janjanbureh'],
        activities: ['Croisière sur le fleuve', 'Observation des chimpanzés', 'Visite de villages', 'Birdwatching', 'Histoire de l\'esclavage'],
        gastronomy: ['Poisson du fleuve', 'Riz local', 'Fruits tropicaux'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Bateau, 4x4',
          accommodation: ['Campements écotouristiques', 'Lodges fluviaux'],
          tips: ['Prévoir anti-moustiques', 'Respecter les coutumes locales']
        }
      }
    ],
    gastronomy: {
      dishes: ['Benachin', 'Domoda', 'Yassa', 'Pepper soup', 'Akara', 'Mbahal'],
      description: "La cuisine gambienne est savoureuse et épicée. Le benachin (riz au poisson ou à la viande) est le plat national. Les arachides sont utilisées dans de nombreuses sauces. Le poisson frais du fleuve et de l'océan est excellent."
    },
    practicalInfo: {
      visa: 'Visa non requis pour de nombreux pays (séjour < 90 jours)',
      health: 'Vaccin fièvre jaune obligatoire. Antipaludéens recommandés',
      safety: 'Pays généralement sûr. Vigilance normale sur les plages',
      transport: 'Vols vers Banjul. Taxis et minibus locaux'
    },
    testimonials: [
      {
        id: '1',
        author: 'Thomas Schmidt',
        country: 'Allemagne',
        rating: 4,
        text: "Parfait pour une première expérience africaine. Les plages sont magnifiques et les gens incroyablement accueillants. Le sourire gambien existe vraiment !",
        date: '2024-02-28'
      }
    ]
  },
  // Sierra Leone
  {
    id: 'sierra-leone',
    name: 'Sierra Leone',
    capital: 'Freetown',
    description: "La Sierra Leone, qui signifie 'Montagnes du Lion', se relève avec optimisme après des années difficiles. Des plages immaculées de la péninsule de Freetown aux forêts tropicales de l'intérieur, le pays redécouvre son potentiel touristique avec l'aide d'une diaspora dynamique.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇸🇱',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Anglais', 'Krio', 'Mende', 'Temne', 'Limba'],
    currency: 'Leone (SLL)',
    bestTimeToVisit: 'Novembre à Avril',
    population: '8,4 millions',
    area: '71 740 km²',
    timeZone: 'UTC',
    callingCode: '+232',
    highlights: ['Plages de la péninsule', 'Tacugama Chimpanzee Sanctuary', 'Îles Turtle', 'Bunce Island', 'Outamba-Kilimi National Park'],
    regionsAdmin: [
      'Eastern Province', 'Northern Province', 'North West Province', 'Southern Province', 'Western Area'
    ],
    regions: [
      {
        id: 'freetown',
        name: 'Freetown et péninsule',
        description: "Capitale fondée par d'anciens esclaves libérés, Freetown est une ville vibrante entourée de montagnes et de plages magnifiques. La péninsule offre certaines des plus belles plages d'Afrique de l'Ouest.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages de Lumley et Tokeh', 'Tacugama Chimpanzee Sanctuary', 'Cotton Tree', 'National Museum', 'Marché de Big Market'],
        activities: ['Plages', 'Observation des chimpanzés', 'Randonnée', 'Histoire de la diaspora', 'Vie nocturne'],
        gastronomy: ['Cassava leaves', 'Jollof rice', 'Groundnut stew', 'Foo-foo', 'Fresh oysters'],
        practicalInfo: {
          bestTime: 'Novembre à Avril',
          transport: 'Podas-podas (minibus), Taxis, Motorbikes',
          accommodation: ['Radisson Blu Mammy Yoko', 'Country Lodge Complex', 'Lumley Beach Hotel'],
          tips: ['Vérifier la sécurité des plages', 'Visiter Tacugama avec un guide']
        }
      },
      {
        id: 'province-nord',
        name: 'Northern Province',
        description: "Région historique avec les ruines de Bunce Island (ancien comptoir esclavagiste) et le parc national d'Outamba-Kilimi. Paysages de savane et de forêt, avec une riche culture Temne et Limba.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Bunce Island', 'Outamba-Kilimi National Park', 'Makeni', 'Kabala', 'Wara Wara Mountains'],
        activities: ['Histoire de l\'esclavage', 'Safari', 'Randonnée', 'Culture traditionnelle', 'Observation des hippopotames'],
        gastronomy: ['Plasas', 'Beans stew', 'Roasted meat', 'Local rice dishes'],
        practicalInfo: {
          bestTime: 'Décembre à Mars',
          transport: '4x4 recommandé, Bus locaux',
          accommodation: ['Guest houses à Makeni', 'Campements dans le parc'],
          tips: ['Guide nécessaire pour Bunce Island', 'Prévoir des vêtements légers mais couvrants']
        }
      },
      {
        id: 'province-sud',
        name: 'Southern Province',
        description: "Région côtière avec les îles Turtle et Bonthe, paradis pour les tortues et les oiseaux. Forêts tropicales et plages désertes caractérisent cette région encore préservée.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Îles Turtle', 'Bonthe', 'Tiwai Island Wildlife Sanctuary', 'Moyamba', 'Plages isolées'],
        activities: ['Observation des tortues', 'Birdwatching', 'Plongée', 'Pêche', 'Écotourisme'],
        gastronomy: ['Poisson fumé', 'Crab soup', 'Fresh seafood', 'Local fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Mars (pour les tortues)',
          transport: 'Bateau depuis Freetown ou Bo',
          accommodation: ['Ecolodges sur les îles', 'Guest houses à Bonthe'],
          tips: ['Respecter les zones de nidification des tortues', 'Prévoir du répulsif anti-moustiques']
        }
      },
      {
        id: 'province-est',
        name: 'Eastern Province',
        description: "Région des diamants et de la culture Mende. Kenema est la capitale du diamant, tandis que les districts de Kono et Kailahun offrent des paysages de collines et une culture riche.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Kenema', 'Kono', 'Gola Forest Reserve', 'Kailahun', 'Marchés de diamants'],
        activities: ['Culture Mende', 'Visite des mines (avec autorisation)', 'Randonnée', 'Forêt tropicale', 'Photographie'],
        gastronomy: ['Rice with various sauces', 'Palm oil stew', 'Bush meat', 'Local vegetables'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Freetown, 4x4 pour les zones reculées',
          accommodation: ['Hotels à Kenema', 'Guest houses locales'],
          tips: ['Autorisation nécessaire pour visiter les mines', 'Respecter les traditions locales']
        }
      }
    ],
    gastronomy: {
      dishes: ['Cassava leaves', 'Jollof rice', 'Groundnut stew', 'Foo-foo', 'Plasas', 'Pepper soup'],
      description: "La cuisine sierra-léonaise est riche et épicée. Le plat national est le cassava leaves (feuilles de manioc) avec du riz et du poisson ou de la viande. Les sauces à base d'arachide (groundnut stew) sont populaires. Le poisson et les fruits de mer sont excellents sur la côte."
    },
    practicalInfo: {
      visa: 'Visa obligatoire. E-visa disponible',
      health: 'Vaccin fièvre jaune obligatoire. Risque élevé de paludisme',
      safety: 'Situation sécuritaire stable mais vigilance recommandée',
      transport: 'Vols vers Freetown. Réseau de podas-podas (minibus). Routes en mauvais état',
      electricity: '230V, prises britanniques (Type G)',
      internet: 'Limité hors de Freetown. Wi-Fi dans les grands hôtels',
      culturalTips: ['Respecter les aînés', 'Salutations importantes', 'Photographie des personnes avec permission']
    },
    festivals: [
      {
        name: 'Fête de l\'Indépendance',
        month: 'Avril',
        location: 'Freetown',
        description: 'Célébrations du 27 avril avec défilés et événements culturels'
      },
      {
        name: 'Festival des Arts',
        month: 'Décembre',
        location: 'Freetown',
        description: 'Festival culturel avec musique, danse et artisanat'
      },
      {
        name: 'Fête de la Récolte',
        month: 'Août-Septembre',
        location: 'Tout le pays',
        description: 'Célébrations traditionnelles de la récolte'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Sarah Johnson',
        country: 'USA',
        rating: 4,
        text: "Les plages de la péninsule de Freetown sont parmi les plus belles que j'aie vues. Le peuple sierra-léonais est résilient et accueillant malgré les difficultés passées.",
        date: '2024-01-20'
      },
      {
        id: '2',
        author: 'Mohamed B.',
        country: 'Sierra Leone',
        rating: 5,
        text: "Notre pays renaît de ses cendres. Les plages, la forêt tropicale, la culture riche... La Sierra Leone a tant à offrir aux visiteurs ouverts d'esprit.",
        date: '2024-03-10'
      }
    ]
  },
  // Liberia
  {
    id: 'liberia',
    name: 'Liberia',
    capital: 'Monrovia',
    description: "Fondée par des esclaves afro-américains libérés, le Liberia a une histoire unique en Afrique. Après des années de conflit, le pays se reconstruit et révèle ses trésors : plages immaculées, forêt tropicale préservée et culture vibrante. La diaspora américano-libérienne a laissé un héritage architectural fascinant.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇱🇷',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Anglais', 'Kpelle', 'Bassa', 'Grebo', 'Kru'],
    currency: 'Dollar libérien (LRD)',
    bestTimeToVisit: 'Novembre à Avril',
    population: '5,2 millions',
    area: '111 369 km²',
    timeZone: 'UTC',
    callingCode: '+231',
    highlights: ['Plages de Robertsport', 'Sapo National Park', 'Monrovia', 'Providence Island', 'Kpatawee Waterfall'],
    regionsAdmin: [
      'Bomi', 'Bong', 'Gbarpolu', 'Grand Bassa', 'Grand Cape Mount',
      'Grand Gedeh', 'Grand Kru', 'Lofa', 'Margibi', 'Maryland',
      'Montserrado', 'Nimba', 'River Cess', 'River Gee', 'Sinoe'
    ],
    regions: [
      {
        id: 'monrovia',
        name: 'Monrovia',
        description: "Capitale fondée en 1822, Monrovia porte le nom du président américain James Monroe. La ville mélange architecture victorienne américano-libérienne, marchés animés et plages urbaines. Centre politique et économique du pays.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Providence Island', 'Centennial Pavilion', 'Ducor Hotel (abandonné)', 'Waterside Market', 'Plages de Monrovia'],
        activities: ['Histoire afro-américaine', 'Marchés', 'Plages', 'Architecture historique', 'Vie nocturne'],
        gastronomy: ['Rice bread', 'Cassava leaf', 'Palava sauce', 'Jollof rice', 'Fresh fish'],
        practicalInfo: {
          bestTime: 'Novembre à Avril',
          transport: 'Taxis, Keh-keh (tricycle), Motorbikes',
          accommodation: ['Royal Grand Hotel', 'Mamba Point Hotel', 'Kendeja Resort'],
          tips: ['Vigilance dans les marchés', 'Éviter certaines zones la nuit']
        }
      },
      {
        id: 'robertsport',
        name: 'Robertsport et Cape Mount',
        description: "Ville côtière fondée en 1829, Robertsport est devenue la capitale du surf au Liberia avec ses vagues constantes. Les plages immaculées et le lac Piso en font un paradis pour les amateurs de sports nautiques.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages de Robertsport', 'Lake Piso', 'Surf spots', 'Fishermen villages', 'Cape Mount'],
        activities: ['Surf', 'Pêche', 'Kayak sur le lac', 'Randonnée', 'Photographie'],
        gastronomy: ['Fresh fish', 'Lobster', 'Crab', 'Local rice dishes'],
        practicalInfo: {
          bestTime: 'Novembre à Avril (pour le surf)',
          transport: '4x4 depuis Monrovia (3-4 heures)',
          accommodation: ['Nana\'s Lodge', 'Guest houses locales', 'Camping sur la plage'],
          tips: ['Apporter son équipement de surf', 'Négocier les prix des excursions en bateau']
        }
      },
      {
        id: 'sapo',
        name: 'Sapo National Park',
        description: "Plus grand parc national du Liberia et l'une des dernières forêts tropicales primaires d'Afrique de l'Ouest. Sanctuaire pour les pygmées hippopotames, éléphants de forêt, chimpanzés et nombreuses espèces d'oiseaux.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Forêt tropicale primaire', 'Pygmy hippopotamus', 'Forest elephants', 'Birdwatching', 'Rivières et cascades'],
        activities: ['Trekking dans la forêt', 'Observation de la faune', 'Birdwatching', 'Photographie nature', 'Camping'],
        gastronomy: ['Cuisine locale simple', 'Poisson de rivière', 'Fruits de la forêt'],
        practicalInfo: {
          bestTime: 'Décembre à Mars (saison sèche)',
          transport: '4x4 obligatoire depuis Greenville ou Monrovia',
          accommodation: ['Campements de base dans le parc', 'Retour à Greenville'],
          tips: ['Guide obligatoire', 'Vaccins à jour', 'Équipement de camping nécessaire']
        }
      },
      {
        id: 'gbarnga',
        name: 'Gbarnga et le centre',
        description: "Gbarnga, capitale du comté de Bong, est une ville universitaire importante. La région centrale offre un accès aux chutes de Kpatawee et aux villages traditionnels Kpelle.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Kpatawee Waterfall', 'Cuttington University', 'Gbarnga Market', 'Kpelle villages', 'Farmland'],
        activities: ['Visite des chutes', 'Culture Kpelle', 'Randonnée', 'Photographie', 'Marchés'],
        gastronomy: ['Local rice dishes', 'Cassava products', 'Vegetables', 'Freshwater fish'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Monrovia, Taxis locaux',
          accommodation: ['S.T. Nagbe United Brothers Hotel', 'Guest houses'],
          tips: ['Meilleure période pour les chutes : après la saison des pluies', 'Respecter les coutumes locales']
        }
      },
      {
        id: 'harper',
        name: 'Harper et le sud-est',
        description: "Ville historique fondée en 1834, Harper fut la capitale de la République du Maryland avant son intégration au Liberia. Architecture américano-libérienne préservée et plages magnifiques sur l'océan Atlantique.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Architecture historique', 'Plages de Harper', 'Cape Palmas', 'Hoffman River', 'Fisher communities'],
        activities: ['Histoire', 'Architecture', 'Plages', 'Pêche', 'Photographie'],
        gastronomy: ['Seafood', 'Coconut-based dishes', 'Local rice', 'Tropical fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Avril',
          transport: 'Vol depuis Monrovia ou route très difficile',
          accommodation: ['Lib Palace Hotel', 'Guest houses'],
          tips: ['Vol recommandé plutôt que la route', 'Histoire fascinante de la région']
        }
      }
    ],
    gastronomy: {
      dishes: ['Rice bread', 'Cassava leaf', 'Palava sauce', 'Jollof rice', 'Fufu', 'Pepper soup', 'Dumboy'],
      description: "La cuisine libérienne ressemble à celle d'autres pays d'Afrique de l'Ouest mais avec des influences américaines. Le riz est la base de l'alimentation. Le cassava leaf (feuilles de manioc) avec du poisson ou de la viande est un plat national. Le dumboy (pâte de manioc) est populaire."
    },
    practicalInfo: {
      visa: 'Visa obligatoire. Peut être obtenu à l\'arrivée pour certains pays',
      health: 'Vaccin fièvre jaune obligatoire. Risque très élevé de paludisme',
      safety: 'Situation stable mais vigilance recommandée. Éviter les zones frontalières avec la Côte d\'Ivoire',
      transport: 'Vols vers Monrovia. Routes en très mauvais état, 4x4 essentiel',
      electricity: '120V/240V, prises américaines (Type A/B) et européennes',
      internet: 'Très limité hors de Monrovia. Wi-Fi dans quelques hôtels',
      culturalTips: ['Respecter les aînés', 'Salutations importantes', 'Photographie avec permission']
    },
    festivals: [
      {
        name: 'Fête de l\'Indépendance',
        month: 'Juillet',
        location: 'Monrovia',
        description: 'Célébrations du 26 juillet avec défilés et événements culturels'
      },
      {
        name: 'Thanksgiving',
        month: 'Novembre',
        location: 'Tout le pays',
        description: 'Héritage américain, jour férié le premier jeudi de novembre'
      },
      {
        name: 'Fête des Pionniers',
        month: 'Avril',
        location: 'Monrovia',
        description: 'Célébration de l\'arrivée des premiers colons afro-américains'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'James Wilson',
        country: 'USA',
        rating: 5,
        text: "Visiter le Liberia, c'est découvrir un chapitre unique de l'histoire afro-américaine. Les plages de Robertsport sont magnifiques et les vagues parfaites pour le surf.",
        date: '2024-02-15'
      },
      {
        id: '2',
        author: 'Amara K.',
        country: 'Liberia',
        rating: 4,
        text: "Notre pays se reconstruit jour après jour. La forêt de Sapo est un trésor écologique. Les Libériens sont fiers de leur héritage et accueillants envers les visiteurs.",
        date: '2024-03-05'
      }
    ]
  },
  // Guinée-Bissau
  {
    id: 'guinee-bissau',
    name: 'Guinée-Bissau',
    capital: 'Bissau',
    description: "Petit pays lusophone peu visité, la Guinée-Bissau offre un archipel paradisiaque (Bijagós) classé UNESCO, une culture créole unique et une nature préservée. Destination pour voyageurs aventureux cherchant l'authenticité et les plages désertes.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇬🇼',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Portugais', 'Crioulo', 'Balanta', 'Fula', 'Manjaco'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Mai',
    population: '2 millions',
    area: '36 125 km²',
    timeZone: 'UTC',
    callingCode: '+245',
    highlights: ['Archipel des Bijagós', 'Bissau', 'Parc naturel des Lagoas de Cufada', 'Cacheu', 'Bolama'],
    regionsAdmin: [
      'Bafatá', 'Biombo', 'Bolama', 'Cacheu', 'Gabú', 'Oio',
      'Quinara', 'Tombali', 'Bissau'
    ],
    regions: [
      {
        id: 'bissau',
        name: 'Bissau',
        description: "Petite capitale colorée aux influences portugaises et créoles. Architecture coloniale décadente, marchés animés et ambiance décontractée. Porte d'entrée vers l'archipel des Bijagós.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Fortaleza d\'Amura', 'Marché de Bandim', 'Pidjiguiti Memorial', 'Cathédrale', 'Bairro de Ajuda'],
        activities: ['Histoire coloniale', 'Marchés', 'Photographie urbaine', 'Gastronomie créole', 'Préparation pour les îles'],
        gastronomy: ['Caldo de peixe', 'Arroz de cabidela', 'Cachupa', 'Frango com molho', 'Fresh seafood'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Taxis, Aluguers (minibus), Motorbikes',
          accommodation: ['Hotel Azalai', 'Pensão Central', 'Residencial Coimbra'],
          tips: ['Changer de l\'argent au marché noir (prudence)', 'Négocier les prix des taxis']
        }
      },
      {
        id: 'bijagos',
        name: 'Archipel des Bijagós',
        description: "Classé réserve de biosphère par l'UNESCO, cet archipel de 88 îles est un paradis écologique. Culture animiste préservée, plages désertes, hippopotames marins et tortues géantes. Société matrilinéaire unique.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Orango Islands', 'Bubaque', 'Rubane', 'João Vieira', 'Poilão', 'Canhabaque'],
        activities: ['Observation des hippopotames marins', 'Tortues géantes', 'Plongée', 'Pêche', 'Culture Bijagó', 'Plages désertes'],
        gastronomy: ['Poisson frais', 'Crustacés', 'Riz des îles', 'Fruits de mer', 'Noix de cajou'],
        practicalInfo: {
          bestTime: 'Novembre à Mai (éviter juillet-septembre)',
          transport: 'Bateau depuis Bissau ou Bubaque',
          accommodation: ['Campements simples sur les îles', 'Pensão Bubaque', 'Chez l\'habitant'],
          tips: ['Respecter les traditions animistes', 'Prévoir des provisions', 'Autorisation pour certaines îles']
        }
      },
      {
        id: 'cacheu',
        name: 'Cacheu et le nord',
        description: "Région historique du commerce des esclaves avec le fort de Cacheu. Mangroves, forêts de palmiers et culture Manjaco. Parc naturel des Lagoas de Cufada, importante zone humide.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Fort de Cacheu', 'Parc des Lagoas de Cufada', 'Mangroves', 'Culture Manjaco', 'Farim'],
        activities: ['Histoire de l\'esclavage', 'Observation des oiseaux', 'Pirogue dans les mangroves', 'Culture locale', 'Photographie'],
        gastronomy: ['Poisson de mangrove', 'Huîtres', 'Riz', 'Noix de cajou', 'Fruits locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: '4x4 depuis Bissau, Bateau sur le fleuve Cacheu',
          accommodation: ['Simple guest houses à Cacheu', 'Campements'],
          tips: ['Guide pour les mangroves', 'Anti-moustiques essentiel']
        }
      },
      {
        id: 'bafata',
        name: 'Bafatá et l\'est',
        description: "Région intérieure avec la ville de Bafatá, lieu de naissance d'Amílcar Cabral. Paysages de savane et culture Fula (Peul). Plus sec et différent de la zone côtière.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Bafatá', 'Maison d\'Amílcar Cabral', 'Culture Fula', 'Savane', 'Marchés', 'Gabú'],
        activities: ['Histoire de la lutte pour l\'indépendance', 'Culture peule', 'Photographie', 'Marchés', 'Rencontres'],
        gastronomy: ['Viande', 'Lait caillé', 'Couscous de mil', 'Riz', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Bus depuis Bissau, Taxis-brousse',
          accommodation: ['Simple hôtels à Bafatá et Gabú'],
          tips: ['Culture peule riche', 'Climat plus sec', 'Histoire politique importante']
        }
      },
      {
        id: 'bolama',
        name: 'Bolama et les îles proches',
        description: "Bolama fut la première capitale de la Guinée portugaise. Architecture coloniale en ruines et ambiance nostalgique. Île de Roxa accessible à marée basse par une chaussée naturelle.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Bolama ville', 'Architecture coloniale', 'Île de Roxa', 'Plages', 'Calme', 'Histoire'],
        activities: ['Exploration urbaine', 'Photographie', 'Plages', 'Histoire', 'Pêche', 'Détente'],
        gastronomy: ['Poisson', 'Fruits de mer', 'Plats simples', 'Fruits'],
        practicalInfo: {
          bestTime: 'Novembre à Mai',
          transport: 'Bateau depuis Bissau',
          accommodation: ['Simple guest houses à Bolama', 'Chez l\'habitant'],
          tips: ['Ambiance de ville fantôme', 'Marée pour l\'île de Roxa']
        }
      }
    ],
    gastronomy: {
      dishes: ['Caldo de peixe', 'Arroz de cabidela', 'Cachupa', 'Frango com molho', 'Feijoada', 'Pirão'],
      description: "Cuisine créole aux influences portugaises et africaines. Beaucoup de poisson et fruits de mer. Le caldo de peixe (soupe de poisson) est un plat national. Le riz est servi avec diverses sauces. La noix de cajou (principal produit d'exportation) est utilisée dans certains plats."
    },
    practicalInfo: {
      visa: 'Visa obligatoire. Peut être obtenu à l\'arrivée',
      health: 'Vaccin fièvre jaune obligatoire. Paludisme très présent',
      safety: 'Instabilité politique périodique. Vérifier la situation avant le voyage',
      transport: 'Vols vers Bissau. Réseau routier très limité. Bateau pour les îles',
      electricity: '220V, prises européennes (Type C)',
      internet: 'Très limité. Presque inexistant hors de Bissau',
      culturalTips: ['Calme et patience nécessaires', 'Respecter les traditions animistes', 'Photographie discrète']
    },
    festivals: [
      {
        name: 'Carnaval de Bissau',
        month: 'Février',
        location: 'Bissau',
        description: 'Influence brésilienne avec défilés et musique'
      },
      {
        name: 'Festival des Bijagós',
        month: 'Avril-Mai',
        location: 'Archipel des Bijagós',
        description: 'Cérémonies traditionnelles animistes'
      },
      {
        name: 'Fête de l\'Indépendance',
        month: 'Septembre',
        location: 'Bissau',
        description: 'Célébration du 24 septembre'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Carlos Mendes',
        country: 'Portugal',
        rating: 5,
        text: "L'archipel des Bijagós est un paradis préservé. Les hippopotames marins sont uniques au monde. Destination pour voyageurs aventureux cherchant l'authenticité.",
        date: '2024-02-10'
      },
      {
        id: '2',
        author: 'Fatou D.',
        country: 'Sénégal',
        rating: 4,
        text: "Bissau a un charme décadent et l'archipel est magnifique. Pays difficile d'accès mais qui en vaut la peine pour ceux qui veulent sortir des sentiers battus.",
        date: '2024-01-25'
      }
    ]
  },
  // Niger
  {
    id: 'niger',
    name: 'Niger',
    capital: 'Niamey',
    description: "⚠️ AVERTISSEMENT SÉCURITÉ : Situation extrêmement dangereuse dans de nombreuses régions. Pays du désert du Sahara, le Niger est traversé par le fleuve Niger au sud. Malgré l'extrême pauvreté, le pays possède des trésors culturels : l'ancienne ville caravanée d'Agadez, le parc national du W et la culture des Touaregs.",
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    flag: '🇳🇪',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Haoussa', 'Zarma', 'Touareg', 'Fulfulde'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Février',
    population: '25 millions',
    area: '1 267 000 km²',
    timeZone: 'UTC+1',
    callingCode: '+227',
    highlights: ['⚠️ Agadez (zone à risque)', 'Parc national du W', 'Niamey', '⚠️ Massif de l\'Aïr (zone à risque)', 'Fleuve Niger'],
    regionsAdmin: [
      'Agadez', 'Diffa', 'Dosso', 'Maradi', 'Tahoua', 'Tillabéri',
      'Zinder', 'Niamey'
    ],
    regions: [
      {
        id: 'niamey',
        name: 'Niamey',
        description: "Capitale sur les rives du fleuve Niger, Niamey est une ville paisible malgré la chaleur étouffante. Marchés colorés, musée national et vie le long du fleuve. Zone relativement plus sûre que le nord.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Grand Marché', 'Musée National', 'Fleuve Niger', 'Grande Mosquée', 'Jardin botanique', 'Pont Kennedy'],
        activities: ['Marchés', 'Fleuve Niger', 'Musée', 'Photographie', 'Gastronomie', 'Rencontres'],
        gastronomy: ['Riz sauce', 'Brochettes', 'Tô', 'Dibi', 'Lait caillé', 'Thé touareg'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: 'Taxis, Moto-taxis, Bus',
          accommodation: ['Grand Hotel du Niger', 'Hotel Gaweye', 'Hotel Terminus'],
          tips: ['⚠️ Vigilance extrême', 'Éviter les rassemblements', 'Conseils sécurité locaux']
        }
      },
      {
        id: 'agadez',
        name: 'Agadez',
        description: "⚠️ ZONE EXTREMEMENT DANGEREUSE - DÉCONSEILLÉE. Ancienne ville caravanère classée UNESCO, porte du désert du Sahara. Architecture en terre, mosquée du XVIe siècle et culture touareg. Accès actuellement extrêmement risqué.",
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
        highlights: ['Mosquée d\'Agadez', 'Vieille ville', 'Culture touareg', 'Porte du désert', 'Histoire caravanière', 'Architecture'],
        activities: ['Histoire', 'Culture touareg', 'Architecture', 'Désert', 'Photographie'],
        gastronomy: ['Cuisine touareg', 'Thé à la menthe', 'Viande de chameau', 'Dattes', 'Céréales'],
        practicalInfo: {
          bestTime: 'Non recommandé',
          transport: 'Extrêmement dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE DE CONFLIT', 'Éviter absolument', 'Consulter autorités']
        }
      },
      {
        id: 'parc-w',
        name: 'Parc national du W',
        description: "⚠️ Sécurité à vérifier absolument. Parc transfrontalier avec le Bénin et le Burkina Faso, classé UNESCO. Biodiversité importante dans la zone de transition entre savane et forêt. Éléphants, hippopotames, lions.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Biodiversité', 'Éléphants', 'Hippopotames', 'Oiseaux', 'Fleuve Niger', 'Paysages'],
        activities: ['Safari', 'Observation faune', 'Birdwatching', 'Photographie', 'Nature'],
        gastronomy: ['Cuisine locale', 'Poisson du fleuve', 'Viande', 'Céréales'],
        practicalInfo: {
          bestTime: 'Décembre à Mai (si sécurité)',
          transport: '4x4 depuis Niamey (prudence extrême)',
          accommodation: ['Campements (si sécurité)', 'Retour à Niamey'],
          tips: ['⚠️ Vérifier sécurité absolument', 'Guide armé possible', 'Extrême prudence']
        }
      },
      {
        id: 'zinder',
        name: 'Zinder',
        description: "Ancienne capitale du Niger, Zinder possède un riche patrimoine historique. Architecture haoussa, sultanat et traditions préservées. ⚠️ Situation sécuritaire très préoccupante dans cette région.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Sultanat', 'Vieille ville', 'Culture haoussa', 'Marché', 'Traditions', 'Histoire'],
        activities: ['Histoire', 'Culture haoussa', 'Architecture', 'Photographie', 'Marché'],
        gastronomy: ['Cuisine haoussa', 'Tô', 'Sauce', 'Viande', 'Céréales'],
        practicalInfo: {
          bestTime: 'Non recommandé actuellement',
          transport: 'Très dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE DANGEREUSE', 'Éviter absolument']
        }
      },
      {
        id: 'maradi',
        name: 'Maradi',
        description: "Deuxième ville économique du Niger, centre commercial important près de la frontière nigériane. Culture haoussa et commerce transfrontalier. ⚠️ Situation sécuritaire dégradée.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Commerce', 'Culture haoussa', 'Marché', 'Frontière', 'Économie', 'Vie urbaine'],
        activities: ['Commerce', 'Culture', 'Marché', 'Photographie', 'Rencontres'],
        gastronomy: ['Cuisine locale', 'Influences nigérianes', 'Viande', 'Céréales'],
        practicalInfo: {
          bestTime: 'Non recommandé',
          transport: 'Dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE À RISQUE', 'Éviter']
        }
      },
      {
        id: 'tahoua',
        name: 'Tahoua',
        description: "Ville au centre du Niger, carrefour entre nord et sud. Culture mixte haoussa et touareg. Artisanat réputé (cuir, argent). ⚠️ Situation sécuritaire très incertaine.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Artisanat', 'Culture mixte', 'Carrefour', 'Marché', 'Traditions', 'Paysages'],
        activities: ['Artisanat', 'Culture', 'Photographie', 'Marché', 'Rencontres'],
        gastronomy: ['Cuisine mixte', 'Tô', 'Viande', 'Lait', 'Céréales'],
        practicalInfo: {
          bestTime: 'Non recommandé',
          transport: 'Dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE À HAUT RISQUE', 'Éviter']
        }
      },
      {
        id: 'dosso',
        name: 'Dosso',
        description: "Région au sud-ouest, peuplée majoritairement de Zarma. Plus verte et agricole que le nord. Culture zarma préservée. Situation relativement plus stable mais prudence nécessaire.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Culture zarma', 'Agriculture', 'Paysages verts', 'Traditions', 'Calme', 'Villages'],
        activities: ['Culture zarma', 'Agriculture', 'Photographie', 'Villages', 'Rencontres'],
        gastronomy: ['Cuisine zarma', 'Riz', 'Sauce', 'Poisson', 'Légumes'],
        practicalInfo: {
          bestTime: 'Novembre à Février (si sécurité)',
          transport: 'Route depuis Niamey (prudence)',
          accommodation: ['Simple hôtels', 'Maisons d\'hôtes'],
          tips: ['⚠️ Vérifier sécurité', 'Culture zarma riche', 'Plus stable que le nord']
        }
      },
      {
        id: 'diffa',
        name: 'Diffa',
        description: "Région extrême-est, frontalière avec le Tchad et le Nigeria. Peuplée de Kanuri et de populations pastorales. ⚠️ ZONE DE CONFLIT ACTIF - EXTREMEMENT DANGEREUSE.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Culture Kanuri', 'Frontière', 'Lac Tchad (proche)', 'Pastoralisme', 'Environnement difficile'],
        activities: ['Non recommandé'],
        gastronomy: ['Cuisine locale', 'Poisson du lac', 'Viande', 'Céréales'],
        practicalInfo: {
          bestTime: 'Non recommandé',
          transport: 'Extrêmement dangereux',
          accommodation: ['Non recommandé'],
          tips: ['⚠️ ZONE DE GUERRE', 'Éviter absolument', 'Consulter autorités']
        }
      }
    ],
    gastronomy: {
      dishes: ['Tô', 'Riz sauce', 'Brochettes', 'Dibi', 'Thé touareg', 'Lait caillé', 'Haince', 'Fari masa'],
      description: "La cuisine nigérienne est simple et adaptée au climat aride. Le tô (pâte de mil) est l'aliment de base. Les brochettes de viande (dibi) sont populaires. Le thé touareg, servi en trois fois, est un rituel social important. Dans le sud, le riz est plus courant."
    },
    practicalInfo: {
      visa: 'Visa obligatoire',
      health: 'Vaccin fièvre jaune obligatoire. Conditions sanitaires très difficiles',
      safety: '⚠️ SITUATION EXTRÊMEMENT DANGEREUSE. Risques terroristes élevés. Voyage déconseillé.',
      transport: 'Vols vers Niamey uniquement. Déplacements intérieurs extrêmement dangereux',
      electricity: '220V, prises européennes (Type C/D/E)',
      internet: 'Très limité. Couverture mobile aléatoire',
      culturalTips: ['Respect islamique strict', 'Extrême modestie vestimentaire', 'Patience nécessaire']
    },
    festivals: [
      {
        name: '⚠️ Nombreux festivals annulés',
        month: 'Variable',
        location: 'Divers',
        description: 'Pour raisons de sécurité'
      },
      {
        name: 'Cure Salée',
        month: 'Septembre (traditionnel)',
        location: 'Nord (suspendu)',
        description: 'Rassemblement traditionnel des éleveurs - suspendu'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: '⚠️ Avertissement',
        country: 'Sécurité',
        rating: 1,
        text: "Le Niger est actuellement l'un des pays les plus dangereux au monde pour les voyageurs. De nombreuses régions sont le théâtre de conflits actifs.",
        date: '2024-04-01'
      },
      {
        id: '2',
        author: 'Ancien visiteur',
        country: 'France',
        rating: 3,
        text: "J'ai visité il y a 10 ans. Le désert était magnifique et les Touaregs accueillants. Malheureusement, la situation s'est considérablement dégradée.",
        date: '2014-11-15'
      }
    ]
  },
  // Cap-Vert
  {
    id: 'cap-vert',
    name: 'Cap-Vert',
    capital: 'Praia',
    description: "Archipel volcanique au large des côtes sénégalaises, le Cap-Vert est une destination unique mêlant influences africaines, portugaises et brésiliennes. Musique (morna, coladeira), plages magnifiques, randonnées volcaniques et hospitalité créole caractérisent ces îles du bout du monde.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    flag: '🇨🇻',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Portugais', 'Crioulo'],
    currency: 'Escudo cap-verdien (CVE)',
    bestTimeToVisit: 'Novembre à Juin',
    population: '560 000',
    area: '4 033 km²',
    timeZone: 'UTC-1',
    callingCode: '+238',
    highlights: ['Île de Sal', 'Île de Santiago', 'Mindelo (São Vicente)', 'Fogo (volcan)', 'Santa Antão', 'Boa Vista'],
    regionsAdmin: [
      'Boa Vista', 'Brava', 'Fogo', 'Maio', 'Sal', 'Santo Antão',
      'São Nicolau', 'São Vicente', 'Santiago'
    ],
    regions: [
      {
        id: 'sal',
        name: 'Île de Sal',
        description: "Île la plus touristique avec ses plages de sable blanc et ses complexes hôteliers. Santa Maria est la station balnéaire principale. Conditions idéales pour les sports nautiques, surtout le kitesurf et windsurf.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Santa Maria', 'Plage de Ponta Preta', 'Salinas de Pedra de Lume', 'Buracona', 'Kitesurf spots', 'Vie nocturne'],
        activities: ['Kitesurf', 'Windsurf', 'Plongée', 'Plages', 'Excursions en buggy', 'Vie nocturne'],
        gastronomy: ['Cachupa', 'Lagosta grelhada', 'Pastel com diabo dentro', 'Grogue', 'Queijo de cabra'],
        practicalInfo: {
          bestTime: 'Novembre à Juin (kitesurf : décembre à mars)',
          transport: 'Taxis, Location voiture/quad, Transports hôteliers',
          accommodation: ['Hotel Riu Funana', 'Morabeza Hotel', 'Hotel Odjo d\'Agua'],
          tips: ['Réserver les activités nautiques à l\'avance', 'Protection solaire essentielle']
        }
      },
      {
        id: 'santiago',
        name: 'Île de Santiago',
        description: "Plus grande île et cœur historique de l'archipel. Praia, la capitale, et Cidade Velha, première ville européenne sous les tropiques (classée UNESCO). Paysages montagneux et culture authentique.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Praia (Plateau)', 'Cidade Velha UNESCO', 'Parque Natural da Serra da Malagueta', 'Tarrafal', 'Assomada market'],
        activities: ['Histoire', 'Randonnée', 'Plages (Tarrafal)', 'Culture locale', 'Marchés', 'Photographie'],
        gastronomy: ['Cachupa rica', 'Caldo de peixe', 'Feijoada', 'Frango churrasco', 'Grogue traditionnel'],
        practicalInfo: {
          bestTime: 'Novembre à Juin',
          transport: 'Aluguers (minibus), Taxis, Location voiture',
          accommodation: ['Hotel Pestana Trópico', 'Quintal da Música', 'Hotel Santa Maria'],
          tips: ['Visiter Cidade Velha avec un guide', 'Marchander dans les marchés']
        }
      },
      {
        id: 'sao-vicente',
        name: 'São Vicente - Mindelo',
        description: "Île culturelle par excellence, avec Mindelo considérée comme la capitale culturelle du Cap-Vert. Berceau de la morna (musique nationale) et de Cesária Évora. Carnaval réputé et vie nocturne animée.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Mindelo', 'Baía das Gatas', 'Monte Verde', 'Carnaval', 'Cesária Évora House', 'Laguna de Mindelo'],
        activities: ['Musique live', 'Carnaval (février)', 'Randonnée', 'Plongée', 'Vie nocturne', 'Culture'],
        gastronomy: ['Lapas grelhadas', 'Cachupa à la Mindelo', 'Pastéis', 'Grogue mindelense', 'Café'],
        practicalInfo: {
          bestTime: 'Toute l\'année (carnaval en février)',
          transport: 'Taxis, Aluguers, Location voiture',
          accommodation: ['Hotel Mindelo', 'Hotel Aparthotel Avenida', 'Chez Loutcha'],
          tips: ['Assister à un concert de morna', 'Réserver longtemps à l\'avance pour le carnaval']
        }
      },
      {
        id: 'fogo',
        name: 'Île de Fogo',
        description: "Île volcanique dominée par le Pico do Fogo (2 829 m), volcan actif. Paysages lunaires, vin produit dans le cratère Cha das Caldeiras et villages reconstruits après les éruptions.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Pico do Fogo', 'Cha das Caldeiras', 'São Filipe', 'Vin de Fogo', 'Paysages volcaniques', 'Mosteiros'],
        activities: ['Ascension du volcan', 'Dégustation de vin', 'Randonnée', 'Photographie spectaculaire', 'Culture locale'],
        gastronomy: ['Vin de Fogo', 'Cachupa de milho', 'Queijo do Fogo', 'Cozido (marmite volcanique)', 'Fruits locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Avril (pour l\'ascension)',
          transport: '4x4, Taxis, Vol depuis Praia ou Sal',
          accommodation: ['Casa Marisa (Cha das Caldeiras)', 'Hotel Savana', 'Pousadas à São Filipe'],
          tips: ['Guide obligatoire pour l\'ascension', 'Vêtements chauds pour le sommet', 'Goûter le vin local']
        }
      },
      {
        id: 'santa-antao',
        name: 'Santa Antão',
        description: "Île la plus verte et sauvage de l'archipel, paradis des randonneurs. Vallées profondes (Ribeira Grande, Paul), routes spectaculaire (cordova), et culture agricole préservée.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Vale do Paul', 'Cordova road', 'Cova crater', 'Ribeira Grande', 'Ponta do Sol', 'Hiking trails'],
        activities: ['Randonnée', 'Trekking', 'Photographie paysage', 'Découverte agricole', 'Rencontres locales'],
        gastronomy: ['Grogue artisanal', 'Cachupa de Santa Antão', 'Fruits tropicaux', 'Légumes frais', 'Poisson'],
        practicalInfo: {
          bestTime: 'Novembre à Juin (éviter juillet-octobre trop brumeux)',
          transport: 'Ferry depuis Mindelo, Aluguers, Location 4x4',
          accommodation: ['Residencial 5 de Julho', 'Hotel Ribeira Grande', 'Pousadas locales'],
          tips: ['Bonnes chaussures de randonnée', 'Guide pour les trails difficiles', 'Prendre le ferry tôt']
        }
      },
      {
        id: 'boa-vista',
        name: 'Boa Vista',
        description: "Île des dunes et des plages interminables. Paysages désertiques rappelant le Sahara, villages de pêcheurs et développement touristique récent. Paradis pour le kitesurf et les amateurs de plages désertes.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Sal Rei', 'Praia de Santa Monica', 'Viana Desert', 'Shipwreck of Cabo Santa Maria', 'Rabil', 'Turtle watching'],
        activities: ['Kitesurf', 'Quad dans le désert', 'Observation des tortues', 'Plages', 'Plongée', 'Photographie'],
        gastronomy: ['Fish espetada', 'Cachupa de Boa Vista', 'Seafood', 'Tortue eggs (hors saison de protection)'],
        practicalInfo: {
          bestTime: 'Novembre à Juin (tortues : juin-octobre)',
          transport: 'Taxis, Location quad/voiture, Transports hôteliers',
          accommodation: ['Royal Horizon Boavista', 'Hotel Riu Karamboa', 'Hotel Marine Club'],
          tips: ['Respecter les zones de nidification des tortues', 'Excursions en quad réservables à l\'hôtel']
        }
      },
      {
        id: 'maio',
        name: 'Île de Maio',
        description: "Île tranquille et préservée, peu développée touristiquement. Plages immaculées, villages de pêcheurs et production de sel. Pour ceux qui cherchent le calme et l'authenticité.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Vila do Maio', 'Praia de Ponta Preta', 'Salinas', 'Calheta', 'Plages désertes', 'Tranquillité'],
        activities: ['Plages', 'Observation des oiseaux', 'Vélo', 'Détente', 'Photographie', 'Rencontres locales'],
        gastronomy: ['Poisson frais', 'Cachupa simple', 'Fromage de chèvre', 'Fruits', 'Plats familiaux'],
        practicalInfo: {
          bestTime: 'Novembre à Juin',
          transport: 'Très limité, Taxis occasionnels, Location vélo',
          accommodation: ['Hotel Residencial Ayrton', 'Pousadas locales', 'Chez l\'habitant'],
          tips: ['Apporter ce dont on a besoin', 'Pas de distributeur de billets', 'Mode déconnexion']
        }
      },
      {
        id: 'sao-nicolau',
        name: 'São Nicolau',
        description: "Île montagneuse et authentique, peu visitée. Berceau de la morna (avec São Vicente). Randonnées dans les montagnes, villages traditionnels et culture préservée.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Vila da Ribeira Brava', 'Monte Gordo', 'Fajã', 'Preguiça', 'Culture traditionnelle', 'Paysages'],
        activities: ['Randonnée', 'Culture', 'Photographie', 'Villages', 'Rencontres', 'Histoire'],
        gastronomy: ['Cachupa tradicional', 'Grogue local', 'Produits de la mer', 'Fruits', 'Cuisine familiale'],
        practicalInfo: {
          bestTime: 'Novembre à Juin',
          transport: 'Aluguers, Taxis, Ferry',
          accommodation: ['Hotel Libertas', 'Pousadas', 'Maisons d\'hôtes'],
          tips: ['Île authentique', 'Peu de touristes', 'Culture préservée']
        }
      }
    ],
    gastronomy: {
      dishes: ['Cachupa', 'Lagosta grelhada', 'Caldo de peixe', 'Pastel com diabo dentro', 'Feijoada', 'Grogue', 'Queijo de cabra'],
      description: "La cuisine cap-verdienne est créole, mélange d'influences portugaises, africaines et brésiliennes. La cachupa (ragoût de maïs, haricots, viande ou poisson) est le plat national. Les fruits de mer sont excellents. Le grogue (rhum local) et le vin de Fogo sont les boissons typiques."
    },
    practicalInfo: {
      visa: 'Visa non requis pour de nombreux pays (séjour < 90 jours)',
      health: 'Aucun vaccin obligatoire mais hépatite A et typhoïde recommandés',
      safety: 'Pays très sûr et stable',
      transport: 'Vols internationaux vers Sal et Praia. Vols intérieurs et ferries entre îles',
      electricity: '220V, prises européennes (Type C/F)',
      internet: 'Correct dans les villes principales, limité sur les petites îles',
      culturalTips: ['Détendu et amical', 'Musique omniprésente', 'Ponctualité flexible']
    },
    festivals: [
      {
        name: 'Carnaval de Mindelo',
        month: 'Février',
        location: 'Mindelo, São Vicente',
        description: 'L\'un des meilleurs carnavals d\'Afrique, influence brésilienne'
      },
      {
        name: 'Festival de Baía das Gatas',
        month: 'Août',
        location: 'São Vicente',
        description: 'Festival de musique sur la plage'
      },
      {
        name: 'Fête de la musique',
        month: 'Juin',
        location: 'Tout l\'archipel',
        description: 'Célébrations de la morna et autres musiques'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Inês Silva',
        country: 'Portugal',
        rating: 5,
        text: "Le Cap-Vert est un archipel aux multiples facettes. Des plages de Sal aux montagnes de Santo Antão, chaque île a sa personnalité. La musique est partout !",
        date: '2024-03-20'
      },
      {
        id: '2',
        author: 'David Müller',
        country: 'Allemagne',
        rating: 5,
        text: "Parfait pour le kitesurf à Sal et la randonnée à Santo Antão. Les Cap-Verdiens sont parmi les gens les plus chaleureux que j'ai rencontrés.",
        date: '2024-02-10'
      }
    ]
  },
  // Mauritanie
  {
    id: 'mauritanie',
    name: 'Mauritanie',
    capital: 'Nouakchott',
    description: "⚠️ AVERTISSEMENT SÉCURITÉ : La Mauritanie connaît des risques liés au terrorisme, surtout dans les zones frontalières. Vérifiez les conseils de voyage avant tout départ. Pays de désert et d’oasis, la Mauritanie offre des paysages lunaires, des villes anciennes comme Chinguetti et une culture nomade profondément enracinée.",
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    flag: '🇲🇷',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Arabe (officiel)', 'Pulaar', 'Soninké', 'Wolof', 'Français (usuel)'],
    currency: 'Ouguiya (MRU)',
    bestTimeToVisit: 'Décembre à Février',
    population: '4,7 millions',
    area: '1 030 700 km²',
    timeZone: 'UTC',
    callingCode: '+222',
    highlights: ['⚠️ Chinguetti (risque)', 'Banc d’Arguin', 'Adrar', 'Nouakchott', 'Terjit Oasis', 'Gorges d’Amogjar'],
    regionsAdmin: [
      'Adrar', 'Assaba', 'Brakna', 'Dakhlet Nouadhibou', 'Gorgol',
      'Guidimaka', 'Hodh Ech Chargui', 'Hodh El Gharbi', 'Inchiri',
      'Nouakchott', 'Tagant', 'Tiris Zemmour', 'Trarza'
    ],
    regions: [
      {
        id: 'nouakchott',
        name: 'Nouakchott',
        description: "Capitale moderne située sur l’Atlantique, Nouakchott mélange marchés de poisson, mosquées et désert à perte de vue. C’est une porte d’entrée relativement sûre vers le pays.",
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        highlights: ['Marché de poisson', 'Mosquée saoudienne', 'Plage', 'Palais présidentiel', 'Centre culturel'],
        activities: ['Marchés', 'Plages', 'Photographie', 'Gastronomie', 'Rencontres nomades'],
        gastronomy: ['Thieboudienne', 'Méchoui', 'Lait de chamelle', 'Dattes', 'Couscous'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: 'Taxis, Location 4x4',
          accommodation: ['Hôtel Halima', 'Sahara Palace', 'Hôtel de l’Oasis'],
          tips: ['Vêtements très couvrants', 'Éviter les rassemblements']
        }
      },
      {
        id: 'chinguetti',
        name: 'Chinguetti',
        description: "⚠️ Zone à risque modéré. Ancienne ville sainte et carrefour caravanier classée UNESCO, Chinguetti abrite des bibliothèques manuscrites médiévales et des mosquées en pierre sèche. Accès possible en convoi sécurisé.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Bibliothèques anciennes', 'Mosquée du 13e siècle', 'Désert du Sahara', 'Architecture en pierre'],
        activities: ['Histoire islamique', 'Désert', 'Photographie', 'Manuscrits'],
        gastronomy: ['Couscous au lait', 'Dattes', 'Thé à la menthe', 'Viande séchée'],
        practicalInfo: {
          bestTime: 'Décembre à Février (avec guide agréé)',
          transport: '4x4 en convoi depuis Atar',
          accommodation: ['Auberges simples', 'Campement désert'],
          tips: ['⚠️ Vérifier sécurité', 'Guide obligatoire', 'Respect islamique strict']
        }
      },
      {
        id: 'banc-argin',
        name: 'Parc National du Banc d’Arguin',
        description: "Classé UNESCO, ce parc marin abrite des millions d’oiseaux migrateurs et des dauphins. Accès limité et réglementé pour protéger l’écosystème.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Oiseaux migrateurs', 'Pêche traditionnelle', 'Baie de Tanoudert', 'Écosystème marin'],
        activities: ['Observation oiseaux', 'Navigation traditionnelle', 'Photographie', 'Écotourisme'],
        gastronomy: ['Poisson grillé', 'Crustacés', 'Riz simple'],
        practicalInfo: {
          bestTime: 'Octobre à Mars',
          transport: 'Bateau depuis Nouadhibou (autorisation requise)',
          accommodation: ['Campement autorisé', 'Retour à Nouadhibou'],
          tips: ['Autorisation obligatoire', 'Respect strict de l’environnement']
        }
      },
      {
        id: 'adar',
        name: 'Région de l’Adrar',
        description: "Cœur montagneux du désert, avec les villes oasis d’Atar, Chinguetti et Ouadane. Paysages spectaculaires, gorges et oasis verdoyantes.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Atar', 'Gorges d’Amogjar', 'Terjit Oasis', 'Monts de l’Adrar', 'Pétroglyphes'],
        activities: ['Randonnée', 'Désert', 'Baignade à Terjit', 'Photographie', 'Culture nomade'],
        gastronomy: ['Lait de chamelle', 'Dattes', 'Couscous', 'Thé'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: '4x4 depuis Nouakchott',
          accommodation: ['Auberges à Atar', 'Campement désert'],
          tips: ['Eau en quantité', 'Guide local recommandé', 'Hydratation']
        }
      }
    ],
    gastronomy: {
      dishes: ['Couscous', 'Thieboudienne', 'Méchoui', 'Lait de chamelle', 'Dattes', 'Harira'],
      description: "La cuisine mauritanienne mêle influences berbères, arabes et sahariennes. Le couscous au lait ou à la viande, les dattes et le thé à la menthe (servi en trois tournées) sont des classiques. Le poisson est excellent sur la côte."
    },
    practicalInfo: {
      visa: 'Visa obligatoire (à obtenir avant le voyage)',
      health: 'Fièvre jaune recommandée. Paludisme faible mais présent au sud',
      safety: '⚠️ Risques terroristes dans le nord et l’est. Zones frontalières déconseillées.',
      transport: 'Vols vers Nouakchott. 4x4 indispensable pour l’intérieur',
      electricity: '220V, prises européennes (Type C)',
      internet: 'Limité hors capitale',
      culturalTips: ['Vêtements très modestes', 'Respect des pratiques islamiques', 'Ne pas photographier les militaires']
    },
    festivals: [
      {
        name: 'Festival des Oases',
        month: 'Décembre',
        location: 'Ouadane',
        description: 'Célébration culturelle avec musique, poésie et courses de chameaux'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Yacine Sall',
        country: 'Sénégal',
        rating: 4,
        text: "Le désert mauritanien est d’une beauté austère et hypnotique. Terjit est un véritable paradis caché.",
        date: '2023-12-10'
      },
      {
        id: '2',
        author: '⚠️ Avertissement',
        country: 'Sécurité',
        rating: 2,
        text: "Consultez impérativement les conseils de voyage. Certaines zones restent très dangereuses malgré la stabilité relative de la capitale.",
        date: '2024-04-01'
      }
    ]
  },
  // Bénin
  {
    id: 'benin',
    name: 'Bénin',
    capital: 'Porto-Novo',
    description: "Le Bénin, berceau du royaume du Dahomey et du vodou, est une destination riche en histoire et en spiritualité. Des palais royaux d’Abomey aux plages de Grand-Popo, en passant par les marchés fétiches de Ouidah, le pays offre une immersion profonde dans les racines culturelles de l’Afrique de l’Ouest.",
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    flag: '🇧🇯',
    continent: 'Afrique',
    subRegion: "Afrique de l'Ouest",
    languages: ['Français', 'Fon', 'Yoruba', 'Bariba', 'Dendi', 'Goun'],
    currency: 'Franc CFA (XOF)',
    bestTimeToVisit: 'Novembre à Mars',
    population: '13 millions',
    area: '114 763 km²',
    timeZone: 'UTC+1',
    callingCode: '+229',
    highlights: ['Abomey', 'Ouidah', 'Grand-Popo', 'Pendjari National Park', 'Lac Ahémé', 'Cotonou'],
    regionsAdmin: [
      'Alibori', 'Atacora', 'Atlantique', 'Borgou', 'Collines', 'Couffo',
      'Donga', 'Littoral', 'Mono', 'Ouémé', 'Plateau', 'Zou'
    ],
    regions: [
      {
        id: 'cotonou',
        name: 'Cotonou',
        description: "Capitale économique et cœur battant du Bénin, Cotonou est une ville animée où modernité et traditions coexistent. Le marché Dantokpa, l’une des plus grandes foires d’Afrique de l’Ouest, et la marina en font un centre commercial et culturel incontournable.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Marché Dantokpa', 'Lac Nokoué', 'Plage de Fidjrossè', 'Grande Mosquée', 'Palais présidentiel'],
        activities: ['Shopping artisanal', 'Balades en pirogue', 'Gastronomie locale', 'Vie nocturne', 'Photographie'],
        gastronomy: ['Akpan', 'Wèwè', 'Attiéké', 'Poulet bicyclette', 'Poisson braisé', 'Kuli-kuli'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Taxis, Moto-taxis (zémidjans), Bus',
          accommodation: ['Hôtel Ibis Cotonou', 'La Residence', 'Novotel Cotonou', 'Hôtel les Ambassadeurs'],
          tips: ['Négocier les prix des taxis', 'Éviter les plages isolées la nuit']
        }
      },
      {
        id: 'abomey',
        name: 'Abomey et le royaume du Dahomey',
        description: "Classé UNESCO, le palais royal d’Abomey fut le siège du puissant royaume du Dahomey. Les bas-reliefs historiques et les musées racontent l’histoire complexe des rois et de la résistance face à la colonisation.",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        highlights: ['Palais royal d’Abomey', 'Musée historique', 'Bas-reliefs', 'Porte du Non-Retour (à Ouidah)', 'Art sacré'],
        activities: ['Histoire du Dahomey', 'Visite de musées', 'Photographie historique', 'Culture fon'],
        gastronomy: ['Tô', 'Sauce feuille', 'Pâte d’igname', 'Viande grillée', 'Vin de palme'],
        practicalInfo: {
          bestTime: 'Décembre à Février',
          transport: 'Bus depuis Cotonou, Taxi',
          accommodation: ['Hôtel Royal', 'Auberges locales', 'Maisons d’hôtes'],
          tips: ['Visite guidée recommandée', 'Respect des lieux sacrés']
        }
      },
      {
        id: 'ouidah',
        name: 'Ouidah – capitale spirituelle du vodou',
        description: "Ouidah est le berceau du vodou et un lieu central de la mémoire de la traite transatlantique. La Route des Esclaves, la Porte du Non-Retour et les temples vodou attirent des pèlerins et visiteurs du monde entier.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Porte du Non-Retour', 'Route des Esclaves', 'Temple des Pythons', 'Forêt sacrée', 'Musée du Vodou'],
        activities: ['Rituel vodou (avec permission)', 'Pèlerinage historique', 'Plages', 'Photographie spirituelle'],
        gastronomy: ['Poisson fumé', 'Riz sauce', 'Fruits locaux', 'Vin de palme'],
        practicalInfo: {
          bestTime: 'Janvier (Fête du Vodou)',
          transport: 'Taxi ou bus depuis Cotonou (1h)',
          accommodation: ['Hôtel Casa del Papa', 'Le Rêve', 'Auberges locales'],
          tips: ['Demander la permission avant de photographier les rituels', 'Jour férié le 10 janvier (Fête du Vodou)']
        }
      },
      {
        id: 'pendjari',
        name: 'Parc national de la Pendjari',
        description: "L’un des plus beaux parcs d’Afrique de l’Ouest, la Pendjari abrite éléphants, lions, hippopotames et plus de 300 espèces d’oiseaux. C’est un sanctuaire de biodiversité en pleine savane.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Safari photo', 'Falaises de Tanguiéta', 'Fleuve Pendjari', 'Observation faune', 'Cascades de Koudou'],
        activities: ['Safari', 'Randonnée', 'Camping', 'Photographie animalière', 'Canoë'],
        gastronomy: ['Plats simples en brousse', 'Poisson du fleuve', 'Cuisine locale'],
        practicalInfo: {
          bestTime: 'Décembre à Mai (saison sèche)',
          transport: '4x4 obligatoire depuis Natitingou',
          accommodation: ['Campement Pendjari', 'Tanguiéta Lodge', 'Auberges à Natitingou'],
          tips: ['Guide obligatoire', 'Prévoir anti-moustiques et eau']
        }
      },
      {
        id: 'grand-popo',
        name: 'Grand-Popo et la côte des pêcheurs',
        description: "Station balnéaire paisible à la frontière togolaise, Grand-Popo séduit par ses plages tranquilles, ses cases en banco et son ambiance relaxante. Idéal pour se ressourcer après une immersion culturelle intense.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Plages de sable fin', 'Villages de pêcheurs', 'Pirogues colorées', 'Couchers de soleil', 'Marché artisanal'],
        activities: ['Baignade', 'Relaxation', 'Artisanat', 'Photographie', 'Pêche traditionnelle'],
        gastronomy: ['Poisson grillé', 'Langouste', 'Crevettes', 'Jus de coco', 'Riz au lait de coco'],
        practicalInfo: {
          bestTime: 'Toute l’année (évitez juillet-août très pluvieux)',
          transport: 'Taxi ou bus depuis Cotonou (3h)',
          accommodation: ['Hôtel Awérou', 'Auberge le Phare', 'Maisons d’hôtes'],
          tips: ['Courants marins parfois forts', 'Apporter crème solaire']
        }
      },
      {
        id: 'natitingou',
        name: 'Natitingou et l’Atakora',
        description: "Au pied des monts de l’Atakora, Natitingou est la porte d’entrée vers les cultures Somba, Betammaribe et Tammari. Les maisons-tours Tata Somba, classées UNESCO, reflètent une architecture défensive ancestrale.",
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
        highlights: ['Tata Somba', 'Monts de l’Atakora', 'Villages traditionnels', 'Marché de Natitingou', 'Tanguiéta'],
        activities: ['Randonnée', 'Culture Somba', 'Architecture', 'Artisanat local', 'Photographie ethnique'],
        gastronomy: ['Tô', 'Sauce gombo', 'Igname pilée', 'Viande de brousse', 'Lait caillé'],
        practicalInfo: {
          bestTime: 'Novembre à Février',
          transport: '4x4 recommandé',
          accommodation: ['Hôtel Tata Somba', 'Auberges locales', 'Campements'],
          tips: ['Respecter les coutumes locales', 'Demander permission avant de visiter les maisons']
        }
      },
      {
        id: 'portonovo',
        name: 'Porto-Novo – capitale administrative',
        description: "Capitale officielle du Bénin mais moins développée que Cotonou, Porto-Novo allie influences yoruba, brésiliennes et coloniales. Palais aux façades colorées, marchés animés et ambiance calme.",
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        highlights: ['Palais royal', 'Quartier brésilien', 'Marché Ouando', 'Cathédrale', 'Musée ethnographique'],
        activities: ['Architecture coloniale', 'Histoire culturelle', 'Marchés', 'Photographie urbaine'],
        gastronomy: ['Akassa', 'Gbégbi', 'Poisson fumé', 'Gâteaux locaux'],
        practicalInfo: {
          bestTime: 'Novembre à Mars',
          transport: 'Taxi depuis Cotonou (30 min)',
          accommodation: ['Hôtel Le Diplomate', 'Residencial Le Rocher'],
          tips: ['Visite combinée avec Ouidah (30 min)', 'Ville très calme']
        }
      },
      {
        id: 'lac-aheme',
        name: 'Lac Ahémé et les villages lacustres',
        description: "Le lac Ahémé et ses îles flottantes abritent des communautés qui vivent sur pilotis. Une expérience unique de vie lacustre, entre pêche, agriculture flottante et traditions.",
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        highlights: ['Villages sur pilotis', 'Pirogues traditionnelles', 'Pêche artisanale', 'Paysages lacustres', 'Coucher de soleil'],
        activities: ['Balade en pirogue', 'Découverte de la vie lacustre', 'Photographie', 'Écotourisme'],
        gastronomy: ['Poisson séché', 'Riz au poisson', 'Légumes lacustres'],
        practicalInfo: {
          bestTime: 'Décembre à Mars',
          transport: 'Taxi depuis Cotonou, puis pirogue',
          accommodation: ['Chez l’habitant', 'Retour à Cotonou conseillé'],
          tips: ['Respecter la vie privée des habitants', 'Apporter cadeau symbolique']
        }
      }
    ],
    gastronomy: {
      dishes: ['Akpan', 'Wèwè', 'Attiéké', 'Tô', 'Poulet bicyclette', 'Kuli-kuli', 'Gbégbi', 'Sauce gombo'],
      description: "La cuisine béninoise est variée et épicée. Le wèwè (bouillie de maïs) et l’akpan (beignet de farine de maïs) sont des classiques du petit-déjeuner. Le poisson frais, grillé ou fumé, domine sur la côte, tandis que les sauces (feuille, gombo, arachide) accompagnent les féculents à l’intérieur. Le kuli-kuli, beignet d’arachide, est une spécialité appréciée."
    },
    practicalInfo: {
      visa: 'Visa obligatoire, e-visa disponible en ligne',
      health: 'Vaccin fièvre jaune obligatoire. Traitement antipaludéen fortement recommandé',
      safety: 'Pays globalement sûr. Vigilance normale dans les grandes villes',
      transport: 'Vols vers Cotonou. Taxis, zémidjans (moto-taxis), bus interurbains',
      electricity: '220V, prises européennes (Type C/E)',
      internet: 'Bon réseau mobile 4G dans les villes, Wi-Fi dans les hôtels',
      culturalTips: ['Saluer avant toute interaction', 'Respecter les lieux vodou', 'Demander avant de photographier', 'La main droite pour manger']
    },
    festivals: [
      {
        name: 'Fête du Vodou',
        month: 'Janvier',
        location: 'Ouidah',
        description: 'Célébration officielle du vodou avec défilés, danses sacrées et rituels publics (10 janvier)'
      },
      {
        name: 'Fête de Guélor',
        month: 'Décembre',
        location: 'Abomey',
        description: 'Fête traditionnelle fon en l’honneur des ancêtres royaux'
      },
      {
        name: 'Carnaval de Cotonou',
        month: 'Mars-Avril',
        location: 'Cotonou',
        description: 'Carnaval coloré influencé par les traditions brésiliennes'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Agnès Kouassi',
        country: 'Côte d’Ivoire',
        rating: 5,
        text: "Ouidah m’a bouleversée. La Porte du Non-Retour est un lieu de mémoire puissant. Le Bénin est le cœur spirituel de l’Afrique.",
        date: '2024-02-18'
      },
      {
        id: '2',
        author: 'Ludovic Dubois',
        country: 'France',
        rating: 4,
        text: "La Pendjari est une merveille sauvage, et les Tata Somba sont uniques au monde. Un pays à découvrir en profondeur, loin des circuits touristiques.",
        date: '2024-03-05'
      }
    ]
  }
];