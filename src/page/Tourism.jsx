import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Globe, Mountain, Castle, Filter, X, 
  Calendar, Users, Star, ArrowRight, ChevronDown, 
  Compass, Palette, Camera, History, Sparkles,
  Plane, Heart, Share2, Clock, Navigation,
  Map, Utensils, Sun, Moon, Cloud, Umbrella,
  TrendingUp, Award, BookOpen, Video, Music,
  Coffee, ShoppingBag, Bike, Car, Train,
  Ship, Headphones, Mic, Trophy, Zap,
  Waves, Trees, Wind, CloudRain, Thermometer,
  Battery, Wifi, CreditCard, Shield, HelpCircle,
  Bell, MessageCircle, Menu, Phone, Mail,
  Instagram, Facebook, Twitter, Youtube, Linkedin,
  Home, Bed, Tent, Activity, User, Edit3,
  Bookmark, Rss, MessageSquare, CheckCircle,
  Trash2, Download, DollarSign, FileText,
  Lightbulb, Check, ZoomIn, ZoomOut, Info,
  CheckSquare, Plus, Minus, DownloadCloud,
  UploadCloud, Eye, EyeOff, Lock, Unlock,
  AlertCircle, ThumbsUp, TrendingDown, Package,
  Briefcase, Gift, Tag, Percent, Award as TrophyIcon,
  Crown, Target, Flag, Anchor, Coffee as Cafe,
  Wine, Music as MusicNote, Film, Radio,
  GamepadIcon, Palette as Art, Heart as Love,
  Smile, Frown, Meh, Laugh, Angry,
  Target as TargetIcon, Zap as Flash,
  Cloud as CloudIcon, Droplets, Wind as WindIcon,
  Sunrise, Sunset, Moon as MoonIcon,
  ThermometerSun, Snowflake, CloudLightning,
  CloudSnow, CloudFog, CloudDrizzle,
  CloudHail, Tornado
} from 'lucide-react';
import './tourism.css';

// ==================== DONNÉES COMPLÈTES DES PAYS ====================

// Afrique de l'Ouest - Liste complète
const westAfrica = [
  {
    id: 1,
    name: "Bénin",
    capital: "Porto-Novo",
    majorCities: ["Cotonou", "Abomey", "Parakou", "Djougou", "Bohicon", "Kétou", "Lokossa", "Ouidah", "Natitingou"],
    regions: ["Ouémé", "Atlantique", "Borgou", "Alibori", "Atakora", "Collines", "Couffo", "Donga", "Littoral", "Mono", "Plateau", "Zou"],
    highlights: {
      culture: [
        "Palais Royaux d'Abomey (UNESCO)",
        "Route des Esclaves à Ouidah",
        "Festival International du Vodun",
        "Musée d'Histoire de Ouidah",
        "Porte du Non-Retour",
        "Temple des Pythons",
        "Artisanat de bronze et tissage",
        "Forêt sacrée de Kpassè",
        "Statues des rois du Dahomey",
        "Centre de Promotion Artistique"
      ],
      nature: [
        "Parc National de la Pendjari (éléphants, lions)",
        "Parc National du W (biodiversité unique)",
        "Lac Nokoué et villages lacustres de Ganvié",
        "Plages de Grand-Popo et Fidjrossè",
        "Chutes de Kota",
        "Forêt sacrée de Kpassè",
        "Mangroves de l'Atlantique",
        "Collines de Dassa",
        "Cours du fleuve Ouémé"
      ],
      gastronomy: [
        "Pâte de maïs avec sauce gombo",
        "Sauce d'arachide (moyo)",
        "Poisson braisé au lac Nokoué",
        "Akassa (pâte de maïs fermenté)",
        "Dékounmè (haricot)",
        "Ablo (pain de maïs)",
        "Amìwo (riz rouge)",
        "Gari foto (semoule de manioc)",
        "Tchakpalo (boisson fermentée)",
        "Huile de palme rouge"
      ],
      adventure: [
        "Safari photo dans la Pendjari",
        "Navigation en pirogue sur le lac Nokoué",
        "Randonnée dans les collines de Dassa",
        "Visite des Tata Somba",
        "Observation des tortues marines",
        "Kayak dans les mangroves",
        "Vélo à travers les villages",
        "Camping dans la Pendjari"
      ],
      heritage: [
        "Route de l'esclave (classée UNESCO)",
        "Anciens royaumes du Danhomè",
        "Architecture coloniale à Cotonou",
        "Marché Dantokpa",
        "Fort portugais de Ouidah",
        "Cathédrale de Cotonou",
        "Musée Ethnographique"
      ]
    },
    experiences: [
      {
        type: "culture",
        title: "Immersion Vodun",
        description: "Cérémonie vodun authentique avec initiés et découverte des rites sacrés",
        duration: "3 jours",
        price: "$$",
        difficulty: "Moyen",
        season: "Toute l'année",
        includes: ["Cérémonie", "Rencontre avec prêtre", "Explication des symboles", "Repas traditionnel"]
      },
      {
        type: "nature",
        title: "Safari Pendjari",
        description: "Observation des Big 5 en 4x4 avec guide expérimenté",
        duration: "2 jours",
        price: "$$$",
        difficulty: "Facile",
        season: "Novembre à Mai",
        includes: ["Safari 4x4", "Guide naturaliste", "Hébergement lodge", "Tous les repas"]
      },
      {
        type: "gastronomy",
        title: "Atelier cuisine béninoise",
        description: "Apprentissage des recettes traditionnelles avec une chef locale",
        duration: "4 heures",
        price: "$",
        difficulty: "Facile",
        season: "Toute l'année",
        includes: ["Cours pratique", "Marché local", "Repas partagé", "Livret recettes"]
      }
    ],
    practicalInfo: {
      accommodation: [
        "Écolodges dans la Pendjari",
        "Hôtels 3-4 étoiles à Cotonou",
        "Chez l'habitant à Ganvié",
        "Auberges à Ouidah",
        "Campements de brousse",
        "Maisons d'hôtes à Abomey",
        "Résidences touristiques"
      ],
      transport: {
        arrival: "Aéroport international de Cotonou (COO)",
        local: "Taxi-motos (zemidjan), bus interurbains, voitures de location",
        tips: "Négocier les prix des taxis-motos, louer une voiture avec chauffeur pour les longs trajets"
      },
      climate: {
        type: "Tropical",
        seasons: [
          "Saison sèche : Novembre à Avril",
          "Grande saison des pluies : Avril à Juillet",
          "Petite saison des pluies : Septembre à Octobre"
        ],
        temperature: "25°C à 32°C toute l'année",
        humidity: "Élevée en saison des pluies"
      },
      bestTime: "Décembre à Février",
      visa: "Nécessaire pour la plupart des nationalités (visa touristique)",
      currency: "Franc CFA (XOF)",
      language: "Français (officiel), Fon, Yoruba, Goun",
      safety: "Relativement sûr, éviter les zones frontalières nord",
      health: "Vaccin fièvre jaune obligatoire, traitement anti-paludéen recommandé"
    },
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-in-a-village-in-africa-17941-large.mp4",
    rating: 4.5,
    testimonials: [
      {
        name: "Marie L.",
        text: "Le Bénin m'a fascinée par sa culture vodun authentique et l'accueil chaleureux des habitants.",
        rating: 5,
        date: "Mars 2024",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
      },
      {
        name: "Thomas K.",
        text: "Le safari dans la Pendjari était incroyable. Nous avons vu des éléphants de très près !",
        rating: 4,
        date: "Janvier 2024",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
      },
      {
        name: "Aïcha D.",
        text: "Ganvié, la Venise de l'Afrique, est un lieu magique. Dormir chez l'habitant était une expérience unique.",
        rating: 5,
        date: "Février 2024",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
      }
    ],
    festivals: [
      "Festival International du Vodun (10 Janvier)",
      "Fête du Gani (Janvier)",
      "Festival des Arts et Cultures de Ouidah (Décembre)",
      "Festival des Masques de Abomey (Mars)",
      "Fête de la Gaani (Avril)"
    ],
    tips: [
      "Apporter des vêtements légers en coton",
      "Crème solaire et anti-moustiques indispensables",
      "Apprendre quelques mots de fon pour impressionner les locaux",
      "Avoir des petites coupures pour les achats",
      "Respecter les interdits dans les lieux sacrés"
    ],
    historicalSignificance: [
      "Ancien Royaume du Dahomey (1625-1894)",
      "Porte du Non-Retour - Mémorial de la traite négrière",
      "Premier pays africain à passer du marxisme au capitalisme"
    ]
  },
  {
    id: 2,
    name: "Sénégal",
    capital: "Dakar",
    majorCities: ["Dakar", "Saint-Louis", "Touba", "Thiès", "Ziguinchor", "Kaolack", "Mbour", "Richard-Toll", "Diourbel", "Louga"],
    regions: ["Dakar", "Ziguinchor", "Diourbel", "Saint-Louis", "Tambacounda", "Kaolack", "Thiès", "Louga", "Fatick", "Kolda", "Matam", "Kaffrine", "Kédougou", "Sédhiou"],
    highlights: {
      culture: [
        "Île de Gorée (UNESCO - mémoire de l'esclavage)",
        "Grande Mosquée de Touba",
        "Festival International de Jazz de Saint-Louis",
        "Dakar Biennale (art contemporain)",
        "Tata de Diourbel",
        "Musée des Civilisations Noires",
        "Village des Arts de Dakar",
        "Culture Sérère et Lébou"
      ],
      nature: [
        "Parc National du Niokolo-Koba (UNESCO)",
        "Delta du Saloum (UNESCO)",
        "Lac Rose (Lac Retba)",
        "Réserve de Bandia",
        "Plages de Saly et Cap Skirring",
        "Falaises de Thiès",
        "Mangroves de Casamance",
        "Forêt de M'Bour"
      ],
      gastronomy: [
        "Thieboudienne (riz au poisson)",
        "Yassa poulet (oignons, citron)",
        "Mafé (sauce à l'arachide)",
        "Pastels (beignets farcis)",
        "Bissap et bouye (jus locaux)",
        "Couscous sénégalais",
        "Soupe kandia",
        "Dibi (grillade)"
      ],
      adventure: [
        "Surf à N'Gor et Ouakam",
        "Kayak dans le delta du Saloum",
        "Excursion au Lac Rose",
        "Randonnée dans le pays Bassari",
        "Observation des oiseaux à Djoudj",
        "Quad dans les dunes de Lompoul",
        "Pirogue traditionnelle"
      ],
      heritage: [
        "Musée des Civilisations Noires à Dakar",
        "Architecture coloniale de Saint-Louis",
        "Cases à impluvium en Casamance",
        "Monument de la Renaissance Africaine",
        "Fort d'Estrées à Gorée"
      ]
    },
    practicalInfo: {
      accommodation: [
        "Resorts à Saly",
        "Riads à Saint-Louis",
        "Campements en Casamance",
        "Hôtels de luxe à Dakar",
        "Auberges de jeunesse",
        "Ecolodges dans le Sine Saloum",
        "Maisons d'hôtes à Touba"
      ],
      transport: {
        arrival: "Aéroport international Blaise Diagne (DSS)",
        local: "Car rapide, taxi, train TER, voiture de location",
        tips: "Les cars rapides sont une expérience locale à vivre"
      },
      climate: {
        type: "Soudano-sahélien",
        seasons: [
          "Saison sèche : Novembre à Mai",
          "Saison des pluies : Juin à Octobre"
        ],
        temperature: "22°C à 30°C"
      },
      bestTime: "Novembre à Février",
      visa: "Exemption pour beaucoup de pays, vérifier avant le départ",
      currency: "Franc CFA (XOF)",
      language: "Français (officiel), Wolof, Sérère, Pulaar",
      safety: "Globalement sûr, vigilance dans les grandes villes"
    },
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Première capitale de l'Afrique Occidentale Française",
      "Île de Gorée - Principal centre de la traite négrière",
      "Berceau de la négritude avec Léopold Sédar Senghor"
    ]
  },
  {
    id: 3,
    name: "Côte d'Ivoire",
    capital: "Yamoussoukro",
    majorCities: ["Abidjan", "Bouaké", "Daloa", "Korhogo", "San-Pédro", "Man", "Gagnoa", "Divo", "Abengourou", "Agboville"],
    regions: ["Abidjan", "Bas-Sassandra", "Comoé", "Denguélé", "Gôh-Djiboua", "Lacs", "Lagunes", "Montagnes", "Sassandra-Marahoué", "Savanes", "Vallée du Bandama", "Woroba", "Zanzan"],
    highlights: {
      culture: [
        "Basilique Notre-Dame de la Paix (plus grande basilique au monde)",
        "Musée des Civilisations de Côte d'Ivoire",
        "Festival des Masques de Man",
        "Art Sénoufo à Korhogo",
        "Défilé du dipri à Gomon",
        "Culture Baoulé",
        "Palais du Roi à Abengourou",
        "Marché de Treichville"
      ],
      nature: [
        "Parc National de la Comoé (UNESCO)",
        "Parc National du Mont Péko",
        "Plages d'Assinie et de Grand-Bassam",
        "Forêt du Banco",
        "Chutes de Man",
        "Lac Kossou",
        "Mont Nimba (UNESCO)",
        "Réserve du Haut-Sassandra"
      ],
      gastronomy: [
        "Alloco (banane plantain frite)",
        "Kedjenou (poulet mijoté)",
        "Attiéké (semoule de manioc)",
        "Sauce graine (palmiste)",
        "Bangui (vin de palme)",
        "Foutou (pâte de banane)",
        "Placali (pâte fermentée)",
        "Garba (thony)"
      ],
      adventure: [
        "Randonnée au Mont Nimba",
        "Observation des chimpanzés au parc de Taï",
        "Plongée à San-Pédro",
        "Visite des plantations de cacao",
        "Safari dans le parc d'Abokouamékro",
        "VTT dans les collines de Man",
        "Pirogue sur la Comoé"
      ]
    },
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800",
    rating: 4.6,
    historicalSignificance: [
      "Premier producteur mondial de cacao",
      "Grand-Bassam - Première capitale coloniale",
      "Civilisation Akan avec les royaumes Baoulé"
    ]
  },
  {
    id: 4,
    name: "Ghana",
    capital: "Accra",
    majorCities: ["Kumasi", "Tamale", "Sekondi-Takoradi", "Cape Coast", "Obuasi", "Teshie", "Tema", "Koforidua", "Sunyani", "Ho"],
    regions: ["Greater Accra", "Ashanti", "Western", "Central", "Eastern", "Volta", "Northern", "Upper East", "Upper West", "Brong-Ahafo"],
    highlights: {
      culture: [
        "Châteaux et forts de la Côte (UNESCO)",
        "Palais Manhyia (rois Ashanti)",
        "Festival Homowo à Accra",
        "Centre culturel Nkrumah",
        "Cercle Kwame Nkrumah",
        "Musée national du Ghana",
        "Festival de l'Odwira",
        "Art Adinkra"
      ],
      nature: [
        "Parc National de Kakum (canopy walk)",
        "Chutes de Wli (plus hautes d'Afrique de l'Ouest)",
        "Plage de Busua (surf)",
        "Réserve de Shai Hills",
        "Lac Volta",
        "Mont Afadjato",
        "Réserve d'Ankasa",
        "Plage de Kokrobite"
      ],
      gastronomy: [
        "Jollof rice",
        "Banku et tilapia",
        "Fufu et light soup",
        "Red red (haricots et plantain)",
        "Kelewele (banane plantain épicée)",
        "Waakye (riz et haricots)",
        "Kenkey (pâte fermentée)",
        "Omo tuo (riz pilé)"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.8,
    historicalSignificance: [
      "Ancienne Gold Coast",
      "Premier pays africain à obtenir l'indépendance (1957)",
      "Royaume Ashanti - l'un des plus puissants d'Afrique"
    ]
  },
  {
    id: 5,
    name: "Nigeria",
    capital: "Abuja",
    majorCities: ["Lagos", "Kano", "Ibadan", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos", "Ilorin"],
    regions: ["Lagos", "Kano", "Rivers", "Delta", "Oyo", "Kaduna", "Katsina", "Edo", "Borno", "Imo", "Plateau", "Sokoto", "Ogun", "Ondo", "Osun", "Ekiti", "Anambra", "Enugu", "Akwa Ibom", "Cross River"],
    highlights: {
      culture: [
        "Festival de Calabar (plus grand carnaval d'Afrique)",
        "Art Nok (plus ancienne culture nigériane)",
        "Musique Afrobeat (héritage de Fela Kuti)",
        "Festival des Arts de Lagos",
        "Centre culturel de Benin City",
        "Musée national du Nigeria",
        "Festival d'Argungu",
        "Art Yoruba"
      ],
      nature: [
        "Chutes d'Erin Ijesha",
        "Réserve de Yankari (sources chaudes)",
        "Plage de Tarkwa Bay",
        "Parc National de Cross River",
        "Montagnes Mambilla",
        "Réserve d'Okomu",
        "Chutes de Owu",
        "Côte atlantique"
      ],
      gastronomy: [
        "Jollof rice nigérian",
        "Suya (brochettes épicées)",
        "Egusi soup (melon)",
        "Pounded yam",
        "Akara (beignets de haricots)",
        "Moi moi (pudding de haricots)",
        "Efo riro",
        "Pepper soup"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.4,
    historicalSignificance: [
      "Civilisation Nok (500 av. J.-C.)",
      "Royaume du Bénin (bronzes célèbres)",
      "Royaume d'Oyo - plus grand empire Yoruba"
    ]
  },
  {
    id: 6,
    name: "Mali",
    capital: "Bamako",
    majorCities: ["Ségou", "Mopti", "Tombouctou", "Gao", "Kidal", "Kayes", "Koutiala", "Sikasso", "Kita", "Bougouni"],
    regions: ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Ségou", "Sikasso", "Tombouctou"],
    highlights: {
      culture: [
        "Mosquée de Djenné (plus grande structure en terre)",
        "Manuscrits de Tombouctou",
        "Festival au Désert",
        "Culture Dogon",
        "Artisanat bogolan",
        "Tombeaux des Askia",
        "Musée national du Mali",
        "Artisanat Touareg"
      ],
      nature: [
        "Fleuve Niger",
        "Pays Dogon (falaise de Bandiagara - UNESCO)",
        "Dunes de sable du Sahara",
        "Lac Débo",
        "Forêt de Missira",
        "Delta intérieur du Niger",
        "Mont Hombori",
        "Désert de l'Adrar"
      ],
      gastronomy: [
        "Tô (pâte de mil)",
        "Riz au gras",
        "Thé à la menthe (3 services)",
        "Poulet yassa",
        "Bouillie de mil",
        "Sauce gombo",
        "Brochettes de mouton",
        "Dibi malien"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.3,
    historicalSignificance: [
      "Empire du Mali (XIIIe-XVIe siècle) - Mansa Musa",
      "Tombouctou - Centre intellectuel du Moyen Âge",
      "Royaume du Ghana (VIIIe-XIIe siècle)"
    ]
  },
  {
    id: 7,
    name: "Burkina Faso",
    capital: "Ouagadougou",
    majorCities: ["Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora", "Dédougou", "Kaya", "Tenkodogo", "Dori", "Gaoua", "Fada N'Gourma"],
    regions: ["Boucle du Mouhoun", "Cascades", "Centre", "Centre-Est", "Centre-Nord", "Centre-Ouest", "Centre-Sud", "Est", "Hauts-Bassins", "Nord", "Plateau-Central", "Sahel", "Sud-Ouest"],
    highlights: {
      culture: [
        "FESPACO (Festival panafricain du cinéma)",
        "SIAO (Salon International de l'Artisanat)",
        "Ruines de Loropéni (UNESCO)",
        "Maison du Peuple",
        "Marché central de Ouaga",
        "Musée de la Musique",
        "Artisanat Mossi",
        "Festival Jazz à Ouaga"
      ],
      nature: [
        "Chutes de Karfiguéla",
        "Dômes de Fabédougou",
        "Lac de Bam",
        "Réserve de Nazinga",
        "Forêt classée de Kou",
        "Pic de Nahouri",
        "Mare aux crocodiles sacrés",
        "Falaises de Sindou"
      ],
      gastronomy: [
        "Riz gras",
        "Poulet bicyclette",
        "Sauce gombo",
        "Boule de mil",
        "Dolo (bière de mil)",
        "Ragout d'oseille",
        "Brochettes",
        "Tô sauce gombo"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.2,
    historicalSignificance: [
      "Empire Mossi - un des plus anciens d'Afrique",
      "Ruines de Loropéni - vestiges d'exploitation aurifère",
      "Terre des hommes intègres (signification du nom)"
    ]
  },
  {
    id: 8,
    name: "Niger",
    capital: "Niamey",
    majorCities: ["Zinder", "Maradi", "Agadez", "Tahoua", "Dosso", "Diffa", "Tillabéri", "Gaya", "Birni N'Konni"],
    regions: ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillabéri", "Zinder"],
    highlights: {
      culture: [
        "Vieille ville d'Agadez (UNESCO)",
        "Festival de l'Aïr",
        "Culture Touareg",
        "Marché de Niamey",
        "Mosquée de Niamey",
        "Artisanat touareg",
        "Musée national Boubou Hama",
        "Festival Cure Salée"
      ],
      nature: [
        "Désert du Ténéré",
        "Massif de l'Aïr (UNESCO)",
        "Réserve naturelle de l'Aïr et du Ténéré",
        "Parc national du W",
        "Oasis de Bilma",
        "Fleuve Niger",
        "Dunes d'In-Gall",
        "Montagnes du Hoggar"
      ],
      gastronomy: [
        "Riz gras",
        "Sauce arachide",
        "Brochettes de mouton",
        "Thé à la menthe",
        "Millet",
        "Dattes de Bilma",
        "Viande séchée",
        "Sauce gombo"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.1,
    historicalSignificance: [
      "Empire du Mali - ancien territoire",
      "Royaume du Kanem-Bornou",
      "Carrefour des routes transsahariennes"
    ]
  },
  {
    id: 9,
    name: "Guinée",
    capital: "Conakry",
    majorCities: ["Kankan", "Kindia", "Nzérékoré", "Labé", "Mamou", "Faranah", "Boké", "Kissidougou"],
    regions: ["Conakry", "Boké", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"],
    highlights: {
      culture: [
        "Îles de Loos",
        "Marché du Niger",
        "Musée national de Guinée",
        "Culture Soussou",
        "Festival des Arts de Conakry",
        "Danses traditionnelles",
        "Artisanat malinké",
        "Palais du Gouverneur"
      ],
      nature: [
        "Chutes de la Sala",
        "Mont Nimba (UNESCO)",
        "Plages de Bel Air",
        "Fleuve Niger",
        "Forêt de Ziama",
        "Monts du Fouta Djallon",
        "Chutes du Kinkon",
        "Réserve naturelle de Diécké"
      ],
      gastronomy: [
        "Riz au gras",
        "Poulet yassa",
        "Sauce feuille",
        "Fouti (couscous de manioc)",
        "Bouillie de mil",
        "Poisson fumé",
        "Fruits tropicaux",
        "Sauce arachide"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Empire du Mali - originaire de la Guinée",
      "Samory Touré - résistant à la colonisation",
      "Fouta Djallon - royaume théocratique"
    ]
  },
  {
    id: 10,
    name: "Sierra Leone",
    capital: "Freetown",
    majorCities: ["Bo", "Kenema", "Makeni", "Koidu", "Port Loko", "Kabala", "Waterloo", "Segbwema"],
    regions: ["Western Area", "Eastern Province", "Northern Province", "Southern Province"],
    highlights: {
      culture: [
        "Fourah Bay College (plus ancienne université d'Afrique)",
        "Île de Bunce (mémoire esclavagiste)",
        "Marché de King Jimmy",
        "Culture Krio",
        "Musée national de Sierra Leone",
        "Danse Bubu",
        "Festival de la Rue Lumley",
        "Art Temne"
      ],
      nature: [
        "Plages de la péninsule",
        "Outamba-Kilimi National Park",
        "Mont Bintumani",
        "Tiwai Island Wildlife Sanctuary",
        "Rivière Rokel",
        "Lacs de la péninsule",
        "Forêt de Gola",
        "Chutes de Bumbuna"
      ],
      gastronomy: [
        "Cassava leaves",
        "Jollof rice",
        "Groundnut stew",
        "Plasas (sauce verte)",
        "Fry fry (beignets)",
        "Poyo (vin de palme)",
        "Fish benachin",
        "Akara"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Freetown - colonie pour esclaves libérés",
      "Fourah Bay College (1827)",
      "Première république africaine moderne"
    ]
  },
  {
    id: 11,
    name: "Liberia",
    capital: "Monrovia",
    majorCities: ["Gbarnga", "Buchanan", "Zwedru", "Kakata", "Voinjama", "Robertsport", "Greenville", "Barclayville"],
    regions: ["Montserrado", "Bomi", "Grand Bassa", "Margibi", "Sinoe", "Grand Cape Mount", "Lofa", "Nimba", "Rivercess", "Grand Gedeh", "Grand Kru", "Maryland", "River Gee", "Gbarpolu"],
    highlights: {
      culture: [
        "Providence Island (arrivée des colons)",
        "Musée national du Liberia",
        "Culture des Americo-Liberians",
        "Danse traditionnelle",
        "Marché de Waterside",
        "Centenary Pavilion",
        "Art Vai",
        "Festival culturel"
      ],
      nature: [
        "Plages de Robertsport",
        "Sapo National Park",
        "Mount Nimba (UNESCO)",
        "Lacs de Firestone",
        "Forêt de Gola",
        "Rivière Saint Paul",
        "Côte atlantique",
        "Mangroves de Monrovia"
      ],
      gastronomy: [
        "Rice bread",
        "Palm butter soup",
        "Jollof rice",
        "Cassava leaf",
        "Fufu",
        "Pepper soup",
        "Roasted fish",
        "Plantain chips"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.9,
    historicalSignificance: [
      "Fondée par des esclaves américains libérés",
      "Première république d'Afrique",
      "Joseph Jenkins Roberts - premier président noir d'Afrique"
    ]
  },
  {
    id: 12,
    name: "Togo",
    capital: "Lomé",
    majorCities: ["Sokodé", "Kara", "Atakpamé", "Palimé", "Bassar", "Tsévié", "Aného", "Mango"],
    regions: ["Maritime", "Plateaux", "Centrale", "Kara", "Savanes"],
    highlights: {
      culture: [
        "Marché des féticheurs d'Akodessewa",
        "Palais des gouverneurs à Lomé",
        "Festival des Ephémères",
        "Culture Ewe",
        "Musée national du Togo",
        "Voodoo festival",
        "Artisanat Kabyè",
        "Marché artisanal"
      ],
      nature: [
        "Lac Togo",
        "Mont Agou",
        "Plages de Lomé",
        "Parc national de Fazao-Malfakassa",
        "Cascade de Kpimé",
        "Forêt d'Assahoun",
        "Rivière Mono",
        "Réserve d'Alédjo"
      ],
      gastronomy: [
        "Fufu",
        "Sauce gombo",
        "Djenkoumé",
        "Ablo",
        "Grillades",
        "Sauce arachide",
        "Akoumé",
        "Pâte de maïs"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Colonie allemande puis française",
      "Royaume de Notse (XVIIe siècle)",
      "Indépendance en 1960"
    ]
  },
  {
    id: 13,
    name: "Guinée-Bissau",
    capital: "Bissau",
    majorCities: ["Bafatá", "Gabú", "Bissorã", "Bolama", "Cacheu", "Catió", "Farim", "Mansôa"],
    regions: ["Bissau", "Biombo", "Bafatá", "Gabú", "Oio", "Bolama", "Cacheu", "Tombali", "Quinara"],
    highlights: {
      culture: [
        "Fort de Cacheu",
        "Archipel des Bijagos (UNESCO)",
        "Culture Bijago",
        "Carnaval de Bissau",
        "Marché central",
        "Artisanat traditionnel",
        "Danses traditionnelles",
        "Rites d'initiation"
      ],
      nature: [
        "Archipel des Bijagos",
        "Parc naturel des mangroves",
        "Plages de Bubaque",
        "Rivière Geba",
        "Forêt de Cantanhez",
        "Île de Bolama",
        "Parc national d'Orango",
        "Mangroves du Rio Cacheu"
      ],
      gastronomy: [
        "Caldo de mancarra",
        "Arroz de cabidela",
        "Peixe grelhado",
        "Cachupa",
        "Frango piri-piri",
        "Doces de coco",
        "Sumo de caju",
        "Café da Guiné"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.8,
    historicalSignificance: [
      "Premier territoire portugais en Afrique",
      "Archipel des Bijagos - société matriarcale",
      "Résistance à la colonisation"
    ]
  },
  {
    id: 14,
    name: "Gambie",
    capital: "Banjul",
    majorCities: ["Serekunda", "Brikama", "Bakau", "Farafenni", "Lamin", "Sukuta", "Basse Santa Su", "Gunjur"],
    regions: ["Banjul", "Kanifing", "Brikama", "Mansa Konko", "Kerewan", "Kuntaur", "Janjanbureh", "Basse"],
    highlights: {
      culture: [
        "Arch de Banjul",
        "Musée national de Gambie",
        "Roots Heritage Festival",
        "Culture Mandinka",
        "Marché Albert",
        "Kachikally crocodile pool",
        "Tanji fishing village",
        "Wassu stone circles (UNESCO)"
      ],
      nature: [
        "Fleuve Gambie",
        "Parc national de Kiang West",
        "Plages de Kotu",
        "Réserve d'Abuko",
        "Île de Janjanbureh",
        "Parc national du fleuve Gambie",
        "Mangroves",
        "Bird watching areas"
      ],
      gastronomy: [
        "Domoda (sauce arachide)",
        "Benachin",
        "Yassa",
        "Superkanja",
        "Chura gerrteh",
        "Baobab juice",
        "Grilled fish",
        "Mbahal"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Kunta Kinte - ancêtre d'Alex Haley",
      "Royaume de Songhai",
      "Point de départ de la traite négrière"
    ]
  },
  {
    id: 15,
    name: "Cap-Vert",
    capital: "Praia",
    majorCities: ["Mindelo", "Santa Maria", "Cidade Velha", "Assomada", "Tarrafal", "Porto Novo", "São Filipe", "Espargos"],
    regions: ["Santiago", "São Vicente", "Santo Antão", "São Nicolau", "Sal", "Boa Vista", "Maio", "Fogo", "Brava"],
    highlights: {
      culture: [
        "Cidade Velha (UNESCO)",
        "Carnaval de Mindelo",
        "Musique morna",
        "Festival de Baía das Gatas",
        "Culture créole",
        "Musée ethnographique",
        "Artisanat local",
        "Festival de musique"
      ],
      nature: [
        "Plages de Sal",
        "Volcan de Fogo",
        "Désert de Viana",
        "Parc naturel de Monte Verde",
        "Baie de São Pedro",
        "Île de Santo Antão",
        "Lac de sal de Pedra de Lume",
        "Ribeira Grande"
      ],
      gastronomy: [
        "Cachupa",
        "Lagostada",
        "Pastel com diabo dentro",
        "Grogue",
        "Queijo de cabra",
        "Caldo de peixe",
        "Feijoada",
        "Doce de coco"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.5,
    historicalSignificance: [
      "Première colonie européenne dans les tropiques",
      "Cidade Velha - première ville construite par les Européens",
      "Creuset culturel africain-portugais"
    ]
  },
  {
    id: 16,
    name: "Mauritanie",
    capital: "Nouakchott",
    majorCities: ["Nouadhibou", "Rosso", "Zouérat", "Kiffa", "Kaédi", "Atar", "Néma", "Aleg"],
    regions: ["Nouakchott", "Dakhlet Nouadhibou", "Tagant", "Gorgol", "Brakna", "Trarza", "Adrar", "Hodh El Gharbi", "Hodh Ech Chargui", "Assaba", "Guidimaka", "Tiris Zemmour", "Inchiri"],
    highlights: {
      culture: [
        "Ancienne ville de Chinguetti (UNESCO)",
        "Mosquée de Nouakchott",
        "Culture maure",
        "Marché de Nouakchott",
        "Festival des Dattes",
        "Artisanat berbère",
        "Musée national",
        "Vieille ville d'Ouadane"
      ],
      nature: [
        "Désert du Sahara",
        "Parc national du Banc d'Arguin (UNESCO)",
        "Plateau de l'Adrar",
        "Oasis de Terjit",
        "Côte atlantique",
        "Dunes de l'erg Ouarane",
        "Guelb er Richat",
        "Falaise de l'Adrar"
      ],
      gastronomy: [
        "Thé à la menthe",
        "Méchoui",
        "Couscous",
        "Dates",
        "Lait de chamelle",
        "Bissara",
        "Harira",
        "Poisson séché"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Empire du Ghana (IIIe-XIIIe siècle)",
      "Chinguetti - ville sainte de l'Islam",
      "Carrefour des caravanes transsahariennes"
    ]
  }
];

// Afrique Centrale
const centralAfrica = [
  {
    id: 17,
    name: "Cameroun",
    capital: "Yaoundé",
    majorCities: ["Douala", "Bamenda", "Garoua", "Maroua", "Bafoussam", "Ngaoundéré", "Bertoua", "Ebolowa", "Kumba", "Limbe"],
    regions: ["Adamaoua", "Centre", "Est", "Extrême-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"],
    highlights: {
      culture: [
        "Chefferies Bamiléké (architecture traditionnelle)",
        "Musée National du Cameroun",
        "Festival Ngondo (peuple Sawa)",
        "Festival des Arts Nègres",
        "Cases obus des Mousgoum",
        "Artisanat Bamoun",
        "Danse du lion",
        "Festival des Masques"
      ],
      nature: [
        "Mont Cameroun (plus haut sommet d'Afrique de l'Ouest)",
        "Parc National de Waza",
        "Plage de Kribi et chutes de la Lobé",
        "Parc National de Korup",
        "Lac Nyos et lac Monoun",
        "Forêt de Dja (UNESCO)",
        "Chutes de la Méfou",
        "Sanctuaire de gorilles"
      ],
      gastronomy: [
        "Ndolé (feuilles amères avec arachide)",
        "Poulet DG (poulet avec plantain)",
        "Bobolo (bâton de manioc)",
        "Kondrè (sauce verte)",
        "Sanga (escargots géants)",
        "Koki (haricots)",
        "Eru (feuilles sauvages)",
        "So'o (sauce tomate)"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.5,
    historicalSignificance: [
      "Royaume Bamoun - écriture Shümom",
      "Chefferies Bamiléké - architecture unique",
      "Cameroun allemand puis franco-britannique"
    ]
  },
  {
    id: 18,
    name: "République Démocratique du Congo",
    capital: "Kinshasa",
    majorCities: ["Lubumbashi", "Mbuji-Mayi", "Kisangani", "Goma", "Bukavu", "Kananga", "Kikwit", "Matadi", "Mbandaka", "Bandundu"],
    regions: ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Mai-Ndombe", "Kasaï", "Kasaï Central", "Kasaï Oriental", "Lomami", "Sankuru", "Maniema", "Sud-Kivu", "Nord-Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Nord-Ubangi", "Sud-Ubangi", "Équateur", "Mongala", "Tshuapa", "Tanganyika", "Haut-Lomami", "Lualaba", "Haut-Katanga"],
    highlights: {
      culture: [
        "Musée National de la RDC",
        "Art contemporain de Kinshasa",
        "Rumba congolaise (patrimoine UNESCO)",
        "Masques et statuettes traditionnelles",
        "Peuple Pygmée",
        "Danse Ndunga",
        "Art Kuba",
        "Festival Amani"
      ],
      nature: [
        "Parc National des Virunga (gorilles de montagne)",
        "Fleuve Congo (2ème plus long d'Afrique)",
        "Lac Kivu",
        "Chutes de Boyoma (Stanley Falls)",
        "Volcan Nyiragongo (lac de lave)",
        "Parc national de la Salonga",
        "Forêt équatoriale",
        "Rivière Kasaï"
      ],
      gastronomy: [
        "Fufu (pâte de manioc)",
        "Maboke (poisson en feuille)",
        "Pondu (feuilles de manioc)",
        "Chikwangue (bâton de manioc)",
        "Saka-saka",
        "Mikate (beignets)",
        "Liboke ya mbisi",
        "Ngulu ya nsamba"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.2,
    historicalSignificance: [
      "Royaume Kongo (XIVe-XIXe siècle)",
      "État indépendant du Congo (Léopold II)",
      "Patrice Lumumba - héros de l'indépendance"
    ]
  },
  {
    id: 19,
    name: "République du Congo",
    capital: "Brazzaville",
    majorCities: ["Pointe-Noire", "Dolisie", "Nkayi", "Owando", "Ouesso", "Madingou", "Gamboma", "Impfondo"],
    regions: ["Brazzaville", "Pointe-Noire", "Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"],
    highlights: {
      culture: [
        "Basilique Sainte-Anne du Congo",
        "Musée national du Congo",
        "Peuple Pygmée",
        "Art Téké",
        "Danses traditionnelles",
        "Marché de Poto-Poto",
        "Palais du Peuple",
        "Artisanat Kongo"
      ],
      nature: [
        "Parc national d'Odzala-Kokoua",
        "Forêt du Bassin du Congo",
        "Plages de Pointe-Noire",
        "Rivière Congo",
        "Réserve de la Léfini",
        "Mont de la Lékéti",
        "Chutes de Loufoulakari",
        "Lacs du Nord"
      ],
      gastronomy: [
        "Saka-saka",
        "Poulet moambé",
        "Fufu",
        "Poisson braisé",
        "Feuilles de manioc",
        "Beignets de banane",
        "Sauce arachide",
        "Brochettes"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.1,
    historicalSignificance: [
      "Royaume Loango",
      "Brazzaville - capitale de la France libre",
      "Pierre Savorgnan de Brazza"
    ]
  },
  {
    id: 20,
    name: "Gabon",
    capital: "Libreville",
    majorCities: ["Port-Gentil", "Franceville", "Oyem", "Moanda", "Mouila", "Lambaréné", "Tchibanga", "Koulamoutou", "Makokou", "Bitam"],
    regions: ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"],
    highlights: {
      culture: [
        "Musée des Arts et Traditions du Gabon",
        "Rituels Bwiti",
        "Masques Punu",
        "Festival culturel de Libreville",
        "Artisanat des peuples de la forêt",
        "Danses traditionnelles",
        "Art Fang",
        "Festival Mvan"
      ],
      nature: [
        "Parcs Nationaux (13 au total)",
        "Plages de sable fin (Pointe Denis)",
        "Forêt équatoriale (2ème poumon de la terre)",
        "Réserve de la Lopé (UNESCO)",
        "Lac Oguemoué",
        "Monts de Cristal",
        "Chutes de Kongou",
        "Îles de l'Estuaire"
      ],
      gastronomy: [
        "Nyembwe (sauce à la noix de palme)",
        "Bouillon de poisson frais",
        "Plantains mûrs frits",
        "Feuilles de manioc",
        "Poisson braisé",
        "Viande de brousse",
        "Soupe de queue de bœuf",
        "Beignets de crevettes"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.6,
    historicalSignificance: [
      "Culture Bwiti - spiritualité traditionnelle",
      "Art Punu - masques blancs célèbres",
      "Albert Schweitzer - hôpital de Lambaréné"
    ]
  },
  {
    id: 21,
    name: "Guinée équatoriale",
    capital: "Malabo",
    majorCities: ["Bata", "Ebebiyín", "Aconibe", "Añisoc", "Luba", "Evinayong", "Mongomo", "Mbini"],
    regions: ["Région Insulaire", "Région Continentale"],
    highlights: {
      culture: [
        "Cathédrale de Malabo",
        "Culture Fang",
        "Musée national",
        "Danses traditionnelles",
        "Art Bubi",
        "Festival culturel",
        "Architecture coloniale",
        "Marchés locaux"
      ],
      nature: [
        "Île de Bioko",
        "Parc national de Monte Alén",
        "Plages de Bata",
        "Forêt équatoriale",
        "Volcan Pico Basilé",
        "Réserve scientifique de la Caldera de Luba",
        "Cascade d'Ureka",
        "Mangroves du Río Muni"
      ],
      gastronomy: [
        "Succotash",
        "Poulet à la sauce d'arachide",
        "Poisson fumé",
        "Banane plantain",
        "Feuilles de manioc",
        "Soupe de poisson",
        "Fruits de mer",
        "Tortillas"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.9,
    historicalSignificance: [
      "Ancienne colonie espagnole",
      "Royaume Bubi",
      "Découverte pétrolière récente"
    ]
  },
  {
    id: 22,
    name: "São Tomé-et-Príncipe",
    capital: "São Tomé",
    majorCities: ["Santo António", "Santana", "Neves", "Guadalupe", "São João dos Angolares", "Trindade", "Santa Cruz", "Ribeira Afonso"],
    regions: ["São Tomé", "Príncipe"],
    highlights: {
      culture: [
        "Musée national",
        "Plantations de cacao",
        "Culture créole",
        "Festival de la Musique",
        "Architecture coloniale",
        "Danses traditionnelles",
        "Artisanat local",
        "Carnaval"
      ],
      nature: [
        "Plages paradisiaques",
        "Parc naturel d'Obô",
        "Cascade de São Nicolau",
        "Jardin botanique",
        "Mont Pico de São Tomé",
        "Réserve de la Biosphère",
        "Rochers de Pão de Açúcar",
        "Baie d'Ana Chaves"
      ],
      gastronomy: [
        "Calulu",
        "Feijoada santomense",
        "Peixe grelhado",
        "Frango com arroz",
        "Doce de banana",
        "Café local",
        "Chocolat artisanal",
        "Suco de fruta-pão"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.4,
    historicalSignificance: [
      "Première colonie sucrière portugaise",
      "Histoire de l'esclavage",
      "Plantations de cacao mondialement connues"
    ]
  },
  {
    id: 23,
    name: "République centrafricaine",
    capital: "Bangui",
    majorCities: ["Bimbo", "Berbérati", "Carnot", "Bambari", "Bouar", "Bossangoa", "Bria", "Bangassou"],
    regions: ["Bangui", "Bamingui-Bangoran", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Vakaga"],
    highlights: {
      culture: [
        "Musée Boganda",
        "Culture Aka (pygmées)",
        "Artisanat traditionnel",
        "Marché central",
        "Danses rituelles",
        "Musique traditionnelle",
        "Festival culturel",
        "Art Sango"
      ],
      nature: [
        "Parc national du Manovo-Gounda St Floris (UNESCO)",
        "Forêt de Dzanga-Sangha",
        "Chutes de Boali",
        "Rivière Oubangui",
        "Mont Ngaoui",
        "Réserve de Dzanga-Ndoki",
        "Savanes du Nord",
        "Forêts du Sud"
      ],
      gastronomy: [
        "Koko",
        "Sauce feuille",
        "Viande de brousse",
        "Fufu",
        "Sauce gombo",
        "Poisson fumé",
        "Beignets de manioc",
        "Fruits sauvages"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.7,
    historicalSignificance: [
      "Empire centrafricain de Bokassa",
      "Culture Aka - peuple autochtone",
      "Carrefour des royaumes africains"
    ]
  },
  {
    id: 24,
    name: "Tchad",
    capital: "N'Djamena",
    majorCities: ["Moundou", "Sarh", "Abéché", "Kélo", "Koumra", "Pala", "Am Timan", "Bongor"],
    regions: ["N'Djamena", "Batha", "Borkou", "Chari-Baguirmi", "Ennedi", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"],
    highlights: {
      culture: [
        "Musée national du Tchad",
        "Culture Sara",
        "Marché central de N'Djamena",
        "Artisanat Toubou",
        "Danses traditionnelles",
        "Festival du désert",
        "Mosquée de N'Djamena",
        "Peuple Maba"
      ],
      nature: [
        "Lac Tchad",
        "Désert du Sahara",
        "Massif du Tibesti",
        "Réserve de Mandelia",
        "Dunes de l'Ennedi",
        "Oasis de Faya-Largeau",
        "Parc national de Zakouma",
        "Mont Emi Koussi"
      ],
      gastronomy: [
        "Boule",
        "Sauce gombo",
        "Viande grillée",
        "Mil",
        "Lait de chamelle",
        "Dattes",
        "Thé sucré",
        "Sauce arachide"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.8,
    historicalSignificance: [
      "Royaume du Kanem-Bornou",
      "Empire du Ouaddaï",
      "Civilisation Sao (IXe-XVIe siècle)"
    ]
  },
  {
    id: 25,
    name: "Angola",
    capital: "Luanda",
    majorCities: ["Huambo", "Lobito", "Benguela", "Kuito", "Lubango", "Malanje", "Namibe", "Soyo", "Cabinda", "Uíge"],
    regions: ["Luanda", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"],
    highlights: {
      culture: [
        "Fortaleza de São Miguel",
        "Musée national d'Anthropologie",
        "Culture Mbunda",
        "Carnaval de Luanda",
        "Art Tchokwe",
        "Danses traditionnelles",
        "Festival de la Musique",
        "Artisanat local"
      ],
      nature: [
        "Chutes de Kalandula",
        "Désert de Moçâmedes",
        "Parc national da Kissama",
        "Plages de l'île de Luanda",
        "Mont Moco",
        "Lac Arco",
        "Forêt do Maiombe",
        "Rivière Kwanza"
      ],
      gastronomy: [
        "Muamba de galinha",
        "Calulu",
        "Mufete",
        "Pirão",
        "Feijão de óleo de palma",
        "Carne de caça",
        "Peixe grelhado",
        "Doce de ginguba"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.3,
    historicalSignificance: [
      "Royaume du Kongo",
      "Royaume Ndongo (reine Nzinga)",
      "Guerre civile longue"
    ]
  }
];

// Afrique de l'Est
const eastAfrica = [
  {
    id: 26,
    name: "Kenya",
    capital: "Nairobi",
    majorCities: ["Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega", "Nyeri"],
    regions: ["Nairobi", "Central", "Coast", "Eastern", "North Eastern", "Nyanza", "Rift Valley", "Western"],
    highlights: {
      culture: [
        "Tribus Masaï (visite de manyatta)",
        "Musée national de Nairobi",
        "Festival de Lamu (mashujaa)",
        "Centre de girafes de Nairobi",
        "Karen Blixen Museum",
        "Culture Swahilie",
        "Festival de la Rue",
        "Art Kikuyu"
      ],
      nature: [
        "Parc National du Masai Mara (grande migration)",
        "Mont Kenya",
        "Plages de Diani et Watamu",
        "Réserve nationale de Samburu",
        "Lac Nakuru (flamants roses)",
        "Parc national d'Amboseli",
        "Parc national de Tsavo",
        "Lac Victoria"
      ],
      gastronomy: [
        "Nyama choma (viande grillée)",
        "Ugali (pâte de maïs)",
        "Sukuma wiki (légumes)",
        "Pilau (riz épicé)",
        "Mandaazi (beignets)",
        "Githeri",
        "Chapati",
        "Muthokoi"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.8,
    historicalSignificance: [
      "Fossiles d'hominidés (berceau de l'humanité)",
      "Royaume swahili",
      "Indépendance mouvementée"
    ]
  },
  {
    id: 27,
    name: "Tanzanie",
    capital: "Dodoma",
    majorCities: ["Dar es Salaam", "Arusha", "Mwanza", "Zanzibar City", "Mbeya", "Morogoro", "Tanga", "Kigoma", "Moshi", "Tabora"],
    regions: ["Arusha", "Dar es Salaam", "Dodoma", "Geita", "Iringa", "Kagera", "Katavi", "Kigoma", "Kilimanjaro", "Lindi", "Manyara", "Mara", "Mbeya", "Mjini Magharibi", "Morogoro", "Mtwara", "Mwanza", "Njombe", "Pemba North", "Pemba South", "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Simiyu", "Singida", "Songwe", "Tabora", "Tanga"],
    highlights: {
      culture: [
        "Stone Town de Zanzibar (UNESCO)",
        "Culture swahilie",
        "Festival de Sauti za Busara",
        "Peuple Hadzabe (chasseurs-cueilleurs)",
        "Art makondé",
        "Musée national de Tanzanie",
        "Festival de Zanzibar",
        "Culture Chaga"
      ],
      nature: [
        "Kilimandjaro (plus haut sommet d'Afrique)",
        "Parc National du Serengeti",
        "Cratère du Ngorongoro",
        "Archipel de Zanzibar",
        "Parc National de Tarangire",
        "Parc national de Ruaha",
        "Parc national de Selous",
        "Lac Manyara"
      ],
      gastronomy: [
        "Pilau de Zanzibar",
        "Ugali na samaki",
        "Fruits de mer frais",
        "Chipsi mayai (omelette frites)",
        "Mishkaki (brochettes)",
        "Mchemsho",
        "Vitumbua",
        "Mkate wa kumimina"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.9,
    historicalSignificance: [
      "Site des gorges d'Olduvai (fossiles humains)",
      "Royaumes swahilis",
      "Julius Nyerere - père de la nation"
    ]
  },
  {
    id: 28,
    name: "Éthiopie",
    capital: "Addis-Abeba",
    majorCities: ["Dire Dawa", "Mekele", "Gondar", "Bahir Dar", "Hawassa", "Jimma", "Dessie", "Jijiga", "Harar", "Nazret"],
    regions: ["Addis-Abeba", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Région des nations, nationalités et peuples du Sud", "Tigré"],
    highlights: {
      culture: [
        "Églises rupestres de Lalibela (UNESCO)",
        "Châteaux de Gondar",
        "Festival Timkat (épiphanie)",
        "Stèles d'Aksum",
        "Musée national (Lucy)",
        "Ville fortifiée de Harar Jugol",
        "Culture Oromo",
        "Musique éthiopienne"
      ],
      nature: [
        "Montagnes du Simien (UNESCO)",
        "Lac Tana (source du Nil Bleu)",
        "Dépression du Danakil (volcan Erta Ale)",
        "Parc national des montagnes du Balé",
        "Chutes du Nil Bleu",
        "Lac Abaya",
        "Vallée de l'Omo",
        "Mont Abuna Yosef"
      ],
      gastronomy: [
        "Injera (pain fermenté)",
        "Wat (ragoût épicé)",
        "Cérémonie du café",
        "Tibs (viande sauté)",
        "Kitfo (viande crue épicée)",
        "Shiro",
        "Doro wat",
        "Tej (hydromel)"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Royaume d'Aksum (Ier-VIIIe siècle)",
      "Seul pays africain jamais colonisé",
      "Lucy - plus vieil hominidé connu"
    ]
  },
  {
    id: 29,
    name: "Rwanda",
    capital: "Kigali",
    majorCities: ["Butare", "Gisenyi", "Ruhengeri", "Byumba", "Cyangugu", "Kibuye", "Rwamagana", "Nyagatare", "Musanze", "Ruhango"],
    regions: ["Kigali", "Est", "Nord", "Ouest", "Sud"],
    highlights: {
      culture: [
        "Musée national du Rwanda",
        "Mémorial du génocide de Kigali",
        "Danses traditionnelles Intore",
        "Palais du roi à Nyanza",
        "Centre culturel de Butare",
        "Artisanat local",
        "Festival de Kwita Izina",
        "Culture Tutsi"
      ],
      nature: [
        "Parc National des Volcans (gorilles)",
        "Lac Kivu",
        "Forêt de Nyungwe (canopy walk)",
        "Parc national de l'Akagera",
        "Sources du Nil",
        "Lacs de Burera et Ruhondo",
        "Mont Karisimbi",
        "Bamboo forest"
      ],
      gastronomy: [
        "Brochettes rwandaises",
        "Isombe (feuilles de manioc)",
        "Ugali",
        "Ibiharage (haricots)",
        "Poisson du lac Kivu",
        "Matoke (bananes plantain)",
        "Mizuzu (patates douces)",
        "Akabenz"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.8,
    historicalSignificance: [
      "Royaume du Rwanda",
      "Génocide des Tutsi (1994)",
      "Paix et réconciliation exemplaires"
    ]
  },
  {
    id: 30,
    name: "Ouganda",
    capital: "Kampala",
    majorCities: ["Gulu", "Lira", "Mbarara", "Jinja", "Bwizibwera", "Mbale", "Mukono", "Kasese", "Masaka", "Entebbe"],
    regions: ["Central", "Eastern", "Northern", "Western"],
    highlights: {
      culture: [
        "Tombeaux des rois du Buganda (UNESCO)",
        "Musée de l'Ouganda",
        "Culture Baganda",
        "Festival de Nyege Nyege",
        "Danses traditionnelles",
        "Artisanat local",
        "Marché de Kampala",
        "Traditions royales"
      ],
      nature: [
        "Parc national de la Reine Elizabeth",
        "Parc national de Murchison Falls",
        "Parc national de Bwindi (gorilles)",
        "Lac Victoria",
        "Montagnes de Rwenzori (UNESCO)",
        "Source du Nil",
        "Parc national de Kibale",
        "Lac Bunyonyi"
      ],
      gastronomy: [
        "Matooke (bananes plantain)",
        "Luwombo",
        "Rolex (omelette roulée)",
        "Chapati",
        "Posho (maïs)",
        "Beans",
        "Groundnut sauce",
        "Grilled meat"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.6,
    historicalSignificance: [
      "Royaume du Buganda",
      "Idi Amin Dada",
      "Pays des grands lacs"
    ]
  },
  {
    id: 31,
    name: "Burundi",
    capital: "Gitega",
    majorCities: ["Bujumbura", "Muyinga", "Ruyigi", "Kayanza", "Muramvya", "Ngozi", "Rutana", "Bururi", "Makamba", "Cibitoke"],
    regions: ["Bujumbura Mairie", "Bujumbura Rural", "Bubanza", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"],
    highlights: {
      culture: [
        "Tambourinaires royaux (UNESCO)",
        "Musée national du Burundi",
        "Danses traditionnelles",
        "Culture Hutu et Tutsi",
        "Artisanat local",
        "Festival culturel",
        "Poésie traditionnelle",
        "Chants royaux"
      ],
      nature: [
        "Lac Tanganyika",
        "Parc national de la Kibira",
        "Parc national de la Ruvubu",
        "Chutes de la Karera",
        "Réserve naturelle de Rusizi",
        "Sources du Nil",
        "Mont Heha",
        "Lac Cohoha"
      ],
      gastronomy: [
        "Boko boko harees",
        "Mukeke (poisson du Tanganyika)",
        "Ubugari (pâte de manioc)",
        "Ibiharage (haricots)",
        "Isombe (feuilles de manioc)",
        "Brochettes",
        "Bananes plantain",
        "Patates douces"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Royaume du Burundi",
      "Conflits ethniques",
      "Culture du tambour sacré"
    ]
  },
  {
    id: 32,
    name: "Soudan du Sud",
    capital: "Djouba",
    majorCities: ["Wau", "Malakal", "Yei", "Yambio", "Aweil", "Bentiu", "Bor", "Torit", "Rumbek", "Kuajok"],
    regions: ["Équatoria-Central", "Équatoria-Oriental", "Équatoria-Occidental", "Bahr el Ghazal-Occidental", "Bahr el Ghazal-Septentrional", "Bahr el Ghazal-Oriental", "Warrap", "Lacs", "Jonglei", "Unité", "Haut-Nil", "Northern Liech", "Southern Liech", "Terekeka", "Gbudwe", "Imatong"],
    highlights: {
      culture: [
        "Culture Dinka",
        "Cérémonies traditionnelles",
        "Peuple Nuer",
        "Danses tribales",
        "Artisanat local",
        "Musique traditionnelle",
        "Festivals tribaux",
        "Scarifications"
      ],
      nature: [
        "Parc national de Boma",
        "Parc national de Bandingilo",
        "Marais du Sudd",
        "Rivière Nil Blanc",
        "Mont Kinyeti",
        "Forêts d'Imatong",
        "Lac No",
        "Savanes"
      ],
      gastronomy: [
        "Kisra (pain)",
        "Wal wal (pâte de maïs)",
        "Asida",
        "Moukhbaza (purée de banane)",
        "Shaiyah (viande grillée)",
        "Ful medames",
        "Salata",
        "Shorba"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.5,
    historicalSignificance: [
      "Plus jeune pays d'Afrique (2011)",
      "Civilisations nilotiques",
      "Conflits et reconstruction"
    ]
  },
  {
    id: 33,
    name: "Soudan",
    capital: "Khartoum",
    majorCities: ["Omdourman", "Port-Soudan", "Kassala", "El Obeid", "Nyala", "Wad Madani", "El Fasher", "Kosti", "Dongola", "Ed Damer"],
    regions: ["Khartoum", "Nord", "Nil", "Mer Rouge", "Kassala", "Gedaref", "Sennar", "Nil Blanc", "Nil Bleu", "Nord-Kordofan", "Sud-Kordofan", "Ouest-Kordofan", "Nord-Darfour", "Sud-Darfour", "Centre-Darfour", "Est-Darfour", "Ouest-Darfour"],
    highlights: {
      culture: [
        "Pyramides de Méroé (UNESCO)",
        "Musée national du Soudan",
        "Culture Nubienne",
        "Souk d'Omdourman",
        "Mosquées historiques",
        "Danses soufies",
        "Artisanat nubien",
        "Festival de la Mer Rouge"
      ],
      nature: [
        "Désert de Nubie",
        "Mer Rouge",
        "Parc national de Dinder",
        "Montagnes de la Mer Rouge",
        "Îles Suakin",
        "Oasis de la Mer Rouge",
        "Rivière Nil",
        "Dunes de Bayuda"
      ],
      gastronomy: [
        "Ful medames",
        "Kisra",
        "Shorba",
        "Gurasa",
        "Mulawah",
        "Aseeda",
        "Shakshouka",
        "Dates"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Royaume de Kouch",
      "Pyramides de Méroé",
      "Civilisation nubienne"
    ]
  },
  {
    id: 34,
    name: "Érythrée",
    capital: "Asmara",
    majorCities: ["Keren", "Massawa", "Assab", "Mendefera", "Dekemhare", "Adi Keyh", "Akordat", "Teseney", "Senafe", "Ghinda"],
    regions: ["Maekel", "Debub", "Gash-Barka", "Anseba", "Semien-Keih-Bahri", "Debub-Keih-Bahri"],
    highlights: {
      culture: [
        "Architecture Art déco d'Asmara (UNESCO)",
        "Culture Tigrinya",
        "Mosquées de Massawa",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals culturels",
        "Musique érythréenne",
        "Monastères orthodoxes"
      ],
      nature: [
        "Archipel Dahlak",
        "Mer Rouge",
        "Monts de l'Érythrée",
        "Désert de Danakil",
        "Îles de Massawa",
        "Forêts du Sud",
        "Côtes de la Mer Rouge",
        "Lac Asale"
      ],
      gastronomy: [
        "Zigni (ragoût épicé)",
        "Injera",
        "Shiro",
        "Tsebhi (sauce)",
        "Hembesha (pain)",
        "Coffee ceremony",
        "Seafood",
        "Ful"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.1,
    historicalSignificance: [
      "Civilisation axoumite",
      "Colonie italienne",
      "Guerre d'indépendance"
    ]
  },
  {
    id: 35,
    name: "Djibouti",
    capital: "Djibouti",
    majorCities: ["Ali Sabieh", "Tadjourah", "Obock", "Dikhil", "Arta", "Holhol", "Dorra", "Yoboki"],
    regions: ["Djibouti", "Ali Sabieh", "Arta", "Dikhil", "Obock", "Tadjourah"],
    highlights: {
      culture: [
        "Marché central de Djibouti",
        "Culture Afar et Somali",
        "Mosquée Hamoudi",
        "Danses traditionnelles",
        "Artisanat nomade",
        "Festival de la Mer Rouge",
        "Poésie orale",
        "Culture islamique"
      ],
      nature: [
        "Lac Assal (point le plus bas d'Afrique)",
        "Golfe de Tadjourah",
        "Îles Moucha",
        "Forêt du Day",
        "Lac Abbe",
        "Mer Rouge",
        "Mont Goda",
        "Plages de Dorale"
      ],
      gastronomy: [
        "Skoudehkaris",
        "Lahoh (pain)",
        "Cambabur",
        "Bariis iskukaris",
        "Maraq",
        "Sabayad",
        "Injera",
        "Poisson grillé"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.0,
    historicalSignificance: [
      "Port stratégique",
      "Culture Afar",
      "Colonie française"
    ]
  },
  {
    id: 36,
    name: "Somalie",
    capital: "Mogadiscio",
    majorCities: ["Hargeisa", "Bosaso", "Kismayo", "Merca", "Berbera", "Garoowe", "Jamame", "Baidoa", "Burao", "Afgooye"],
    regions: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiran", "Mudug", "Nugal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"],
    highlights: {
      culture: [
        "Mosquée de Fakr ad-Din",
        "Culture somalienne",
        "Poésie orale",
        "Danses traditionnelles",
        "Artisanat nomade",
        "Musique somalienne",
        "Festivals culturels",
        "Architecture islamique"
      ],
      nature: [
        "Côtes de l'océan Indien",
        "Plages de Berbera",
        "Montagnes de Cal Madow",
        "Désert de Guban",
        "Rivière Shabelle",
        "Baie d'Aden",
        "Îles Bajuni",
        "Savanes du Sud"
      ],
      gastronomy: [
        "Canjeero (pain)",
        "Bariis iskukaris",
        "Sambusa",
        "Muufo",
        "Maraq",
        "Cambuulo",
        "Baasto",
        "Xalwo"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 3.5,
    historicalSignificance: [
      "Royaumes médiévaux",
      "Culture nomade",
      "Histoire maritime"
    ]
  }
];

// Afrique Australe
const southernAfrica = [
  {
    id: 37,
    name: "Afrique du Sud",
    capital: "Pretoria",
    majorCities: ["Johannesburg", "Le Cap", "Durban", "Port Elizabeth", "Bloemfontein", "East London", "Pietermaritzburg", "Polokwane", "Nelspruit", "Kimberley"],
    regions: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"],
    highlights: {
      culture: [
        "Musée de l'Apartheid",
        "Visites des townships",
        "Festival National des Arts",
        "Royaume Zoulou",
        "Robben Island (Nelson Mandela)",
        "District Six Museum",
        "Culture Xhosa",
        "Hector Pieterson Museum"
      ],
      nature: [
        "Table Mountain",
        "Parc National Kruger",
        "Route des Jardins (Garden Route)",
        "Drakensberg",
        "Safari dans le parc Addo",
        "Blyde River Canyon",
        "Cape Point",
        "Parc national des éléphants d'Addo"
      ],
      gastronomy: [
        "Braai (barbecue sud-africain)",
        "Bobotie (hachis épicé)",
        "Biltong (viande séchée)",
        "Potjiekos (ragoût)",
        "Malva pudding",
        "Bunny chow",
        "Koeksisters",
        "Boerewors"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.9,
    historicalSignificance: [
      "Nelson Mandela",
      "Apartheid",
      "Civilisations San et Khoi"
    ]
  },
  {
    id: 38,
    name: "Namibie",
    capital: "Windhoek",
    majorCities: ["Swakopmund", "Walvis Bay", "Lüderitz", "Rundu", "Oshakati", "Katima Mulilo", "Grootfontein", "Keetmanshoop", "Tsumeb", "Otjiwarongo"],
    regions: ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"],
    highlights: {
      culture: [
        "Peuple Himba",
        "Art rupestre de Twyfelfontein (UNESCO)",
        "Architecture germanique à Swakopmund",
        "Cuisine bushman",
        "Festival de Windhoek",
        "Culture Damara",
        "Artisanat San",
        "Festival de la Côte"
      ],
      nature: [
        "Dunes de Sossusvlei (les plus hautes du monde)",
        "Parc National d'Etosha",
        "Côte des Squelettes",
        "Canyon de la Fish River",
        "Désert du Namib",
        "Cap Cross (colonie de phoques)",
        "Montagne de Brandberg",
        "Rivière Orange"
      ],
      gastronomy: [
        "Viande de gibier (springbok, oryx)",
        "Biltong",
        "Potjiekos",
        "Braaivleis",
        "Melktert",
        "Kalahari truffle",
        "Seafood",
        "Kapana"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.8,
    historicalSignificance: [
      "Peuple San (premières nations)",
      "Colonie allemande",
      "Mandat sud-africain"
    ]
  },
  {
    id: 39,
    name: "Botswana",
    capital: "Gaborone",
    majorCities: ["Francistown", "Molepolole", "Maun", "Serowe", "Selibe Phikwe", "Kanye", "Mahalapye", "Mochudi", "Palapye", "Lobatse"],
    regions: ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North-East", "North-West", "South-East", "Southern"],
    highlights: {
      culture: [
        "Art rupestre de Tsodilo (UNESCO)",
        "Culture San",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cuisine tswana",
        "Cérémonies d'initiation"
      ],
      nature: [
        "Delta de l'Okavango (UNESCO)",
        "Réserve de Chobe",
        "Désert du Kalahari",
        "Parc national de Makgadikgadi",
        "Réserve de Moremi",
        "Salt pans de Makgadikgadi",
        "Savanes du Nord",
        "Rivière Limpopo"
      ],
      gastronomy: [
        "Seswaa (viande bouillie)",
        "Pap (bouillie de maïs)",
        "Morogo (légumes sauvages)",
        "Bogobe",
        "Dikgobe",
        "Mopane worms",
        "Madila",
        "Diphaphata"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Royaume Tswana",
      "Culture San",
      "Indépendance pacifique"
    ]
  },
  {
    id: 40,
    name: "Zimbabwe",
    capital: "Harare",
    majorCities: ["Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi", "Marondera", "Norton"],
    regions: ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"],
    highlights: {
      culture: [
        "Monuments nationaux du Grand Zimbabwe (UNESCO)",
        "Culture Shona",
        "Art rupestre de Matobo",
        "Danses traditionnelles",
        "Sculpture shona",
        "Festivals culturels",
        "Musique mbira",
        "Cuisine traditionnelle"
      ],
      nature: [
        "Chutes Victoria (UNESCO)",
        "Parc national de Hwange",
        "Lac Kariba",
        "Matobo Hills",
        "Parc national de Mana Pools",
        "Eastern Highlands",
        "Save Valley",
        "Rivière Zambezi"
      ],
      gastronomy: [
        "Sadza (bouillie de maïs)",
        "Mopane worms",
        "Kapenta",
        "Dovi (sauce arachide)",
        "Murivo",
        "Madora",
        "Boerewors",
        "Mahewu"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.5,
    historicalSignificance: [
      "Grand Zimbabwe",
      "Royaume du Monomotapa",
      "Indépendance mouvementée"
    ]
  },
  {
    id: 41,
    name: "Zambie",
    capital: "Lusaka",
    majorCities: ["Ndola", "Kitwe", "Kabwe", "Chingola", "Mufulira", "Livingstone", "Luanshya", "Chipata", "Kasama", "Solwezi"],
    regions: ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Muchinga", "Northern", "North-Western", "Southern", "Western"],
    highlights: {
      culture: [
        "Village culturel de Maramba",
        "Culture Bemba",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cérémonies Kuomboka",
        "Art Tonga"
      ],
      nature: [
        "Chutes Victoria",
        "Parc national de South Luangwa",
        "Lac Kariba",
        "Parc national de Kafue",
        "Rivière Zambezi",
        "Bangweulu Wetlands",
        "Parc national de Lower Zambezi",
        "Kasanka National Park"
      ],
      gastronomy: [
        "Nshima (bouillie de maïs)",
        "Ifisashi",
        "Kapenta",
        "Chikanda",
        "Vinkubala",
        "Ifinkubala",
        "Munkoyo",
        "Mabisi"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.6,
    historicalSignificance: [
      "Royaume Lozi",
      "Route de l'esclavage",
      "Indépendance pacifique"
    ]
  },
  {
    id: 42,
    name: "Malawi",
    capital: "Lilongwe",
    majorCities: ["Blantyre", "Mzuzu", "Zomba", "Kasungu", "Mangochi", "Karonga", "Salima", "Nkhotakota", "Liwonde", "Balaka"],
    regions: ["Central", "Northern", "Southern"],
    highlights: {
      culture: [
        "Musée du Malawi",
        "Culture Chewa",
        "Danse Gule Wamkulu (UNESCO)",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cuisine malawite",
        "Cérémonies d'initiation"
      ],
      nature: [
        "Lac Malawi (UNESCO)",
        "Parc national de Liwonde",
        "Réserve naturelle de Majete",
        "Plateau de Zomba",
        "Mont Mulanje",
        "Parc national de Nyika",
        "Rivière Shire",
        "Kasungu National Park"
      ],
      gastronomy: [
        "Nsima (bouillie de maïs)",
        "Chambo (poisson)",
        "Ndiwo",
        "Kachumbari",
        "Mandasi",
        "Mkhwani",
        "Mtedza",
        "Thobwa"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.4,
    historicalSignificance: [
      "Royaume Maravi",
      "David Livingstone",
      "Pays du lac"
    ]
  },
  {
    id: 43,
    name: "Mozambique",
    capital: "Maputo",
    majorCities: ["Matola", "Nampula", "Beira", "Chimoio", "Nacala", "Quelimane", "Tete", "Lichinga", "Pemba", "Gurué"],
    regions: ["Maputo", "Gaza", "Inhambane", "Manica", "Sofala", "Tete", "Zambézia", "Nampula", "Cabo Delgado", "Niassa"],
    highlights: {
      culture: [
        "Forteresse de Maputo",
        "Culture Makonde",
        "Artisanat local",
        "Musique marrabenta",
        "Danses traditionnelles",
        "Festivals culturels",
        "Architecture coloniale",
        "Cuisine métissée"
      ],
      nature: [
        "Archipel de Bazaruto",
        "Plages de l'océan Indien",
        "Parc national de Gorongosa",
        "Île de Mozambique (UNESCO)",
        "Parc national du Limpopo",
        "Quirimbas Archipelago",
        "Lac Malawi (partage)",
        "Rivière Zambezi"
      ],
      gastronomy: [
        "Piri-piri chicken",
        "Matata",
        "Camarão grelhado",
        "Xima",
        "Feijoada",
        "Frango assado",
        "Pãozinho",
        "Doce de coco"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.3,
    historicalSignificance: [
      "Île de Mozambique",
      "Royaume du Monomotapa",
      "Guerre civile"
    ]
  },
  {
    id: 44,
    name: "Eswatini",
    capital: "Mbabane",
    majorCities: ["Manzini", "Big Bend", "Malkerns", "Nhlangano", "Piggs Peak", "Siteki", "Hlatikulu", "Mhlume"],
    regions: ["Hhohho", "Lubombo", "Manzini", "Shiselweni"],
    highlights: {
      culture: [
        "Cérémonie annuelle des roseaux",
        "Culture Swazi",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals royaux",
        "Musique traditionnelle",
        "Cuisine swazie",
        "Cérémonies d'initiation"
      ],
      nature: [
        "Réserve naturelle de Mlilwane",
        "Parc national de Hlane",
        "Montagnes de Malolotja",
        "Chutes de Mantenga",
        "Rivière Usuthu",
        "Lubombo Mountains",
        "Savanes",
        "Forêts"
      ],
      gastronomy: [
        "Sishwala",
        "Incwancwa",
        "Sidvudvu",
        "Umbhidvo",
        "Emasi",
        "Siphuphe setindlubu",
        "Tjwala",
        "Mageu"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.2,
    historicalSignificance: [
      "Royaume du Swaziland",
      "Dernière monarchie absolue d'Afrique",
      "Culture nguni"
    ]
  },
  {
    id: 45,
    name: "Lesotho",
    capital: "Maseru",
    majorCities: ["Teyateyaneng", "Mafeteng", "Hlotse", "Mohale's Hoek", "Maputsoe", "Qacha's Nek", "Quthing", "Butha-Buthe", "Roma", "Semonkong"],
    regions: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
    highlights: {
      culture: [
        "Culture Basotho",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cuisine basotho",
        "Cérémonies d'initiation",
        "Vêtements traditionnels"
      ],
      nature: [
        "Montagnes du Drakensberg",
        "Parc national de Sehlabathebe",
        "Chutes de Maletsunyane",
        "Ha Baroana rock art",
        "Rivière Orange",
        "Hauts plateaux",
        "Pony trekking",
        "Ski en hiver"
      ],
      gastronomy: [
        "Papa",
        "Moroho",
        "Likhobe",
        "Mokoenya",
        "Motoho",
        "Kota",
        "Makoenya",
        "Joala"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.3,
    historicalSignificance: [
      "Royaume du Lesotho",
      "Pays enclavé",
      "Culture sotho"
    ]
  },
  {
    id: 46,
    name: "Madagascar",
    capital: "Antananarivo",
    majorCities: ["Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Ambovombe", "Ambanja", "Moramanga", "Sambava"],
    regions: ["Diana", "Sava", "Itasy", "Analamanga", "Vakinankaratra", "Bongolava", "Sofia", "Boeny", "Betsiboka", "Melaky", "Alaotra Mangoro", "Atsinanana", "Analanjirofo", "Amoron'i Mania", "Haute Matsiatra", "Vatovavy", "Fitovinany", "Atsimo-Atsinanana", "Ihorombe", "Menabe", "Atsimo-Andrefana", "Androy", "Anosy"],
    highlights: {
      culture: [
        "Palais de la Reine",
        "Culture malgache",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cuisine malgache",
        "Cérémonies funéraires"
      ],
      nature: [
        "Allée des Baobabs",
        "Parc national de l'Isalo",
        "Réserve de l'Ankarana",
        "Nosy Be",
        "Parc national de Ranomafana",
        "Tsingy de Bemaraha (UNESCO)",
        "Parc national d'Andasibe",
        "Canal des Pangalanes"
      ],
      gastronomy: [
        "Romazava",
        "Ravitoto",
        "Koba",
        "Mofo gasy",
        "Lasary",
        "Varanga",
        "Sakay",
        "Ranovola"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Peuplement austronésien",
      "Royaume Merina",
      "Culture unique"
    ]
  },
  {
    id: 47,
    name: "Maurice",
    capital: "Port Louis",
    majorCities: ["Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes", "Triolet", "Goodlands", "Centre de Flacq", "Bel Air", "Mahébourg", "Saint Pierre"],
    regions: ["Port Louis", "Pamplemousses", "Rivière du Rempart", "Flacq", "Grand Port", "Savanne", "Plaines Wilhems", "Moka", "Black River"],
    highlights: {
      culture: [
        "Aapravasi Ghat (UNESCO)",
        "Culture créole",
        "Festival Holi",
        "Danses séga",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cuisine métissée"
      ],
      nature: [
        "Plages de l'océan Indien",
        "Parc national des Gorges de la Rivière Noire",
        "Île aux Cerfs",
        "Chamarel Seven Coloured Earth",
        "Jardin botanique de Pamplemousses",
        "Île aux Aigrettes",
        "Montagne du Morne",
        "Lac Grand Bassin"
      ],
      gastronomy: [
        "Rougaille",
        "Dholl puri",
        "Briani",
        "Gateau piment",
        "Mine frite",
        "Samoussa",
        "Farata",
        "Alouda"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.8,
    historicalSignificance: [
      "Île sans population indigène",
      "Route des épices",
      "Diversité culturelle"
    ]
  },
  {
    id: 48,
    name: "Seychelles",
    capital: "Victoria",
    majorCities: ["Anse Boileau", "Beau Vallon", "Cascade", "Takamaka", "Grand'Anse", "Mont Fleuri", "Plaisance", "Port Glaud", "La Réunion", "Baie Lazare"],
    regions: ["Mahé", "Praslin", "La Digue", "Silhouette", "Inner Islands", "Outer Islands"],
    highlights: {
      culture: [
        "Musée national d'Histoire",
        "Culture créole",
        "Danses moutya",
        "Artisanat local",
        "Festivals culturels",
        "Musique traditionnelle",
        "Cuisine créole",
        "Architecture coloniale"
      ],
      nature: [
        "Plages de sable blanc",
        "Vallée de Mai (UNESCO)",
        "Parc national du Morne Seychellois",
        "Île de la Digue",
        "Réserve marine",
        "Aldabra Atoll (UNESCO)",
        "Jardin botanique",
        "Tortues géantes"
      ],
      gastronomy: [
        "Poisson grillé",
        "Rougaille",
        "Ladob",
        "Chatini",
        "Satini",
        "Bouillon brède",
        "Cari coco",
        "Fruits de mer"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.9,
    historicalSignificance: [
      "Colonie française puis britannique",
      "Population d'origine diverse",
      "Pionnier de l'écotourisme"
    ]
  },
  {
    id: 49,
    name: "Comores",
    capital: "Moroni",
    majorCities: ["Mutsamudu", "Fomboni", "Domoni", "Tsimbeo", "Ouani", "Moya", "Iconi", "Sima", "Koni-Djodjo", "M'Beni"],
    regions: ["Grande Comore", "Mohéli", "Anjouan", "Mayotte (revendiqué)"],
    highlights: {
      culture: [
        "Vieille ville de Moroni",
        "Culture comorienne",
        "Danses traditionnelles",
        "Artisanat local",
        "Festivals culturels",
        "Musique twarab",
        "Cuisine comorienne",
        "Architecture arabe-swahilie"
      ],
      nature: [
        "Plages des îles",
        "Volcan Karthala",
        "Parc marin de Mohéli",
        "Lac Salé",
        "Forêts tropicales",
        "Récifs coralliens",
        "Tortues marines",
        "Oiseaux endémiques"
      ],
      gastronomy: [
        "Langouste grillée",
        "Mataba",
        "Pilao",
        "Mkatra foutra",
        "Sambusa",
        "M'tsolola",
        "Cassava leaf",
        "Fruits tropicaux"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.2,
    historicalSignificance: [
      "Sultanats indépendants",
      "Culture swahilie",
      "Îles aux parfums"
    ]
  }
];

// Pays Afro-Américains
const afroAmericanCountries = [
  {
    id: 50,
    name: "Haïti",
    capital: "Port-au-Prince",
    majorCities: ["Cap-Haïtien", "Gonaïves", "Jacmel", "Les Cayes", "Saint-Marc", "Jérémie", "Miragoâne", "Port-de-Paix", "Petion-Ville", "Delmas"],
    regions: ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"],
    highlights: {
      culture: [
        "Carnaval de Port-au-Prince",
        "Peinture naïve haïtienne",
        "Vodou haïtien",
        "Forteresse Laferrière",
        "Musée du Panthéon National",
        "Culture créole",
        "Musique compas",
        "Artisanat local"
      ],
      nature: [
        "Citadelle Laferrière (UNESCO)",
        "Plage de Labadie",
        "Bassin Bleu",
        "Pic Macaya",
        "Île à Vache",
        "Chutes de Saut-d'Eau",
        "Forêt des Pins",
        "Côte des Arcadins"
      ],
      gastronomy: [
        "Griot (porc mariné frit)",
        "Soup joumou (soupe de citrouille)",
        "Pâté haïtien",
        "Diri ak djon djon (riz aux champignons)",
        "Tassot (viande séchée)",
        "Lambi",
        "Mayi moulen",
        "Pain patate"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.3,
    historicalSignificance: [
      "Première république noire (1804)",
      "Révolution haïtienne",
      "Toussaint Louverture"
    ]
  },
  {
    id: 51,
    name: "Jamaïque",
    capital: "Kingston",
    majorCities: ["Montego Bay", "Ocho Rios", "Negril", "Port Antonio", "Spanish Town", "Mandeville", "May Pen", "Savanna-la-Mar", "Old Harbour", "Portmore"],
    regions: ["Cornwall", "Middlesex", "Surrey"],
    highlights: {
      culture: [
        "Musique reggae (Bob Marley Museum)",
        "Festival Reggae Sumfest",
        "Art rasta",
        "Maison de Marcus Garvey",
        "National Gallery of Jamaica",
        "Culture maroon",
        "Dancehall",
        "Festival de la Culture"
      ],
      nature: [
        "Chutes de Dunn's River",
        "Blue Mountains (café)",
        "Seven Mile Beach",
        "Luminous Lagoon",
        "Rio Grande",
        "Martha Brae River",
        "Cockpit Country",
        "Blue Hole"
      ],
      gastronomy: [
        "Jerk chicken",
        "Ackee and saltfish",
        "Patties",
        "Curry goat",
        "Escovitch fish",
        "Bammy",
        "Callaloo",
        "Gizzada"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Maroons (esclaves en fuite)",
      "Bob Marley",
      "Marcus Garvey"
    ]
  },
  {
    id: 52,
    name: "Barbade",
    capital: "Bridgetown",
    majorCities: ["Speightstown", "Oistins", "Holetown", "Bathsheba", "Crane", "Hastings", "Rockley", "Worthing", "Six Cross Roads", "Black Rock"],
    regions: ["Saint Michael", "Christ Church", "Saint James", "Saint Peter", "Saint Lucy", "Saint Andrew", "Saint Joseph", "Saint John", "Saint George", "Saint Philip", "Saint Thomas"],
    highlights: {
      culture: [
        "Crop Over Festival",
        "Musique soca",
        "Histoire coloniale",
        "Musée de la Barbade",
        "Synagogue de Bridgetown",
        "Culture bajan",
        "Architecture géorgienne",
        "Festival de jazz"
      ],
      nature: [
        "Plages de sable blanc",
        "Harrison's Cave",
        "Animal Flower Cave",
        "Jardins botaniques d'Andromeda",
        "Réserve naturelle de Welchman Hall Gully",
        "Côte est sauvage",
        "Réserve marine",
        "Parc national de la Barbade"
      ],
      gastronomy: [
        "Cou-cou et poisson volant",
        "Rum punch",
        "Conkies",
        "Pudding et souse",
        "Bakes",
        "Macaroni pie",
        "Black cake",
        "Mauby"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.6,
    historicalSignificance: [
      "Ancienne colonie britannique",
      "Route du sucre",
      "Culture afro-caribéenne"
    ]
  },
  {
    id: 53,
    name: "Trinité-et-Tobago",
    capital: "Port-d'Espagne",
    majorCities: ["San Fernando", "Chaguanas", "Arima", "Point Fortin", "Tunapuna", "Scarborough", "Sangre Grande", "Princes Town", "Diego Martin", "Couva"],
    regions: ["Trinité", "Tobago"],
    highlights: {
      culture: [
        "Carnaval de Trinidad",
        "Steelpan (instrument national)",
        "Festival de musique",
        "Temple hindou de Waterloo",
        "Fort George",
        "Culture calypso",
        "Festival Diwali",
        "Architecture victorienne"
      ],
      nature: [
        "Asa Wright Nature Centre",
        "Plages de Tobago",
        "Pitch Lake",
        "Grotte de Gasparee",
        "Parc national du Nord Range",
        "Réserve forestière de Main Ridge",
        "Bird of Paradise Island",
        "Nylon Pool"
      ],
      gastronomy: [
        "Roti",
        "Callaloo",
        "Doubles",
        "Pelau",
        "Bake and shark",
        "Curry crab and dumpling",
        "Pholourie",
        "Souse"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.5,
    historicalSignificance: [
      "Premier pays à inventer le steelpan",
      "Mélange indo-africain",
      "Carnaval célèbre"
    ]
  },
  {
    id: 54,
    name: "Bahamas",
    capital: "Nassau",
    majorCities: ["Freeport", "West End", "Coopers Town", "Marsh Harbour", "Freetown", "High Rock", "Andros Town", "George Town", "Duncan Town", "Matthew Town"],
    regions: ["New Providence", "Grand Bahama", "Andros", "Abaco", "Eleuthera", "Cat Island", "Exuma", "Long Island", "San Salvador", "Acklins", "Mayaguana", "Inagua", "Berry Islands", "Bimini"],
    highlights: {
      culture: [
        "Junkanoo Festival",
        "Musique goombay",
        "Histoire des pirates",
        "Musée des Bahamas",
        "Culture bahaméenne",
        "Danses traditionnelles",
        "Artisanat local",
        "Architecture coloniale"
      ],
      nature: [
        "Plages de sable rose",
        "Exuma Cays",
        "Blue Holes",
        "Parc national de Lucayan",
        "Île de San Salvador",
        "Récifs coralliens",
        "Swimming pigs",
        "Dean's Blue Hole"
      ],
      gastronomy: [
        "Conch salad",
        "Rock lobster",
        "Peas and rice",
        "Johnnycake",
        "Guava duff",
        "Souse",
        "Boiled fish",
        "Sky juice"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Premier débarquement de Colomb",
      "Repaire de pirates",
      "Culture lucayenne"
    ]
  },
  {
    id: 55,
    name: "Cuba",
    capital: "La Havane",
    majorCities: ["Santiago de Cuba", "Camagüey", "Holguín", "Santa Clara", "Guantánamo", "Bayamo", "Cienfuegos", "Pinar del Río", "Matanzas", "Ciego de Ávila"],
    regions: ["Pinar del Río", "Artemisa", "La Havane", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Granma", "Holguín", "Santiago de Cuba", "Guantánamo", "Île de la Jeunesse"],
    highlights: {
      culture: [
        "Vieille Havane (UNESCO)",
        "Musique salsa",
        "Carnaval de Santiago",
        "Musée de la Révolution",
        "Culture afro-cubaine",
        "Danses traditionnelles",
        "Art cubain",
        "Architecture coloniale"
      ],
      nature: [
        "Plages de Varadero",
        "Vallée de Viñales (UNESCO)",
        "Parc national de la péninsule de Zapata",
        "Montagnes de la Sierra Maestra",
        "Cayo Coco",
        "Jardins de la Reina",
        "Topes de Collantes",
        "Île de la Jeunesse"
      ],
      gastronomy: [
        "Ropa vieja",
        "Moros y cristianos",
        "Lechón asado",
        "Cuban sandwich",
        "Tostones",
        "Yuca con mojo",
        "Arroz con pollo",
        "Flan"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.8,
    historicalSignificance: [
      "Révolution cubaine",
      "Culture afro-cubaine",
      "Colonie espagnole"
    ]
  },
  {
    id: 56,
    name: "République dominicaine",
    capital: "Saint-Domingue",
    majorCities: ["Santiago de los Caballeros", "La Romana", "San Pedro de Macorís", "San Francisco de Macorís", "Salvaleón de Higüey", "San Cristóbal", "Puerto Plata", "Concepción de La Vega", "San Juan de la Maguana", "Bonao"],
    regions: ["Distrito Nacional", "Azua", "Bahoruco", "Barahona", "Dajabón", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"],
    highlights: {
      culture: [
        "Zone coloniale de Saint-Domingue (UNESCO)",
        "Musique merengue",
        "Carnaval dominicain",
        "Musée de l'Homme dominicain",
        "Culture afro-dominicaine",
        "Danses traditionnelles",
        "Artisanat taino",
        "Festival del Merengue"
      ],
      nature: [
        "Plages de Punta Cana",
        "Parc national Los Haitises",
        "Pico Duarte",
        "Île Saona",
        "Lago Enriquillo",
        "Parc national del Este",
        "Cascade de El Limón",
        "Bahía de las Águilas"
      ],
      gastronomy: [
        "Mangú",
        "Sancocho",
        "La Bandera",
        "Mofongo",
        "Pastelón",
        "Chicharrón",
        "Habichuelas con dulce",
        "Morir soñando"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.7,
    historicalSignificance: [
      "Première colonie européenne",
      "Culture taino",
      "Indépendance d'Haïti"
    ]
  },
  {
    id: 57,
    name: "Brésil (régions afro-brésiliennes)",
    capital: "Brasília",
    majorCities: ["Salvador", "Rio de Janeiro", "São Paulo", "Recife", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Porto Alegre", "Belém"],
    regions: ["Bahia", "Rio de Janeiro", "São Paulo", "Pernambuco", "Maranhão", "Ceará", "Minas Gerais", "Amazonas", "Pará", "Rio Grande do Sul"],
    highlights: {
      culture: [
        "Pelourinho de Salvador",
        "Carnaval de Rio",
        "Capoeira",
        "Candomblé",
        "Musique samba",
        "Festival de Parintins",
        "Culture afro-brésilienne",
        "Quilombos"
      ],
      nature: [
        "Plages de Copacabana",
        "Amazonie",
        "Chutes d'Iguaçu",
        "Pantanal",
        "Chapada Diamantina",
        "Lençóis Maranhenses",
        "Archipel de Fernando de Noronha",
        "Côte de la découverte"
      ],
      gastronomy: [
        "Feijoada",
        "Moqueca",
        "Acarajé",
        "Vatapá",
        "Pão de queijo",
        "Brigadeiro",
        "Caipirinha",
        "Açaí"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.9,
    historicalSignificance: [
      "Plus grande population noire hors Afrique",
      "Quilombos (communautés d'esclaves en fuite)",
      "Culture afro-brésilienne riche"
    ]
  },
  {
    id: 58,
    name: "Colombie (régions afro-colombiennes)",
    capital: "Bogota",
    majorCities: ["Cali", "Medellín", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibagué", "Pasto"],
    regions: ["Chocó", "Cauca", "Nariño", "Valle del Cauca", "Bolívar", "Atlántico", "Magdalena", "Cesar", "La Guajira", "Antioquia"],
    highlights: {
      culture: [
        "Carnaval de Barranquilla",
        "Culture afro-colombienne",
        "Musique cumbia",
        "Festival de Petronio Álvarez",
        "Palenque de San Basilio",
        "Danses traditionnelles",
        "Artisanat local",
        "Festival de la Cumbia"
      ],
      nature: [
        "Plages de Cartagena",
        "Parc national de Tayrona",
        "Amazonie colombienne",
        "Îles de San Andrés",
        "Désert de la Tatacoa",
        "Vallée de Cocora",
        "Caño Cristales",
        "Cerro de Monserrate"
      ],
      gastronomy: [
        "Bandeja paisa",
        "Ajiaco",
        "Arepa",
        "Sancocho",
        "Empanadas",
        "Lechona",
        "Tamales",
        "Coconut rice"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.6,
    historicalSignificance: [
      "Palenque - premier territoire libre des Amériques",
      "Culture afro-colombienne",
      "Route des esclaves"
    ]
  },
  {
    id: 59,
    name: "Panama (régions afro-panaméennes)",
    capital: "Panama",
    majorCities: ["Colón", "David", "La Chorrera", "Santiago", "Chitré", "Penonomé", "Antón", "Aguadulce", "Almirante", "Changuinola"],
    regions: ["Panama", "Colón", "Darién", "Chiriquí", "Veraguas", "Los Santos", "Herrera", "Coclé", "Bocas del Toro", "Panama Ouest"],
    highlights: {
      culture: [
        "Carnaval de Panama",
        "Culture afro-panaméenne",
        "Musique salsa",
        "Festival del Manito",
        "Danses congos",
        "Artisanat local",
        "Festival de la Pollera",
        "Culture Guna"
      ],
      nature: [
        "Canal de Panama",
        "Archipel de San Blas",
        "Parc national de Coiba",
        "Bocas del Toro",
        "Volcan Barú",
        "Parc national de Darién",
        "Plages du Pacifique",
        "Îles Perles"
      ],
      gastronomy: [
        "Sancocho",
        "Ropa vieja",
        "Ceviche",
        "Tamales",
        "Patacones",
        "Arroz con pollo",
        "Hojaldres",
        "Raspados"
      ]
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    rating: 4.4,
    historicalSignificance: [
      "Canal de Panama",
      "Culture afro-antillaise",
      "Route de transit"
    ]
  }
];

// ==================== DONNÉES BLOG ET MAGAZINE ====================
const travelBlogs = [
  {
    id: 1,
    title: "Safari au Kenya: Rencontre avec les Big Five",
    author: "Jean Dupont",
    date: "15 Mars 2024",
    readTime: "8 min",
    excerpt: "Mon expérience inoubliable dans le Masai Mara où j'ai pu observer de près les lions, éléphants, buffles, léopards et rhinocéros. Un rêve d'enfant réalisé !",
    category: "aventure",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    tags: ["safari", "kenya", "nature", "photographie", "wildlife"],
    content: `Le réveil à 5h du matin dans le lodge était difficile, mais l'excitation prenait le dessus. Notre guide Moses nous attendait déjà avec le 4x4. La première lumière du jour éclairait doucement la savane...`,
    featured: true,
    comments: 24,
    likes: 156
  },
  {
    id: 2,
    title: "Culture Yoruba au Nigeria: Entre tradition et modernité",
    author: "Amina Diallo",
    date: "2 Avril 2024",
    readTime: "12 min",
    excerpt: "Plongée dans les traditions ancestrales yoruba, des cérémonies d'Ifa aux festivals colorés en passant par l'art contemporain de Lagos.",
    category: "culture",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",
    tags: ["culture", "tradition", "art", "nigeria", "yoruba"],
    content: `La ville d'Ife, berceau de la civilisation yoruba, m'a accueillie avec ses mystères et sa beauté. Le musée d'Ife abrite des têtes en bronze parmi les plus anciennes d'Afrique...`,
    featured: true,
    comments: 18,
    likes: 89
  },
  {
    id: 3,
    title: "Gastronomie sénégalaise: Un voyage des sens",
    author: "Chef Pierre",
    date: "28 Février 2024",
    readTime: "6 min",
    excerpt: "Découverte des saveurs du Sénégal, du célèbre thieboudienne aux délicieux pastels, en passant par les secrets du yassa.",
    category: "gastronomie",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
    tags: ["cuisine", "recettes", "senegal", "food", "gastronomie"],
    content: `C'est dans la cuisine fumante de Mama Diarra que j'ai appris les secrets du véritable thieboudienne. Le riz cassé, le poisson frais du marché de Soumbédioune...`,
    featured: false,
    comments: 32,
    likes: 145
  },
  {
    id: 4,
    title: "Randonnée sur le Kilimandjaro: Au sommet de l'Afrique",
    author: "Marc Leblanc",
    date: "10 Janvier 2024",
    readTime: "15 min",
    excerpt: "Récit de mon ascension du toit de l'Afrique, des forêts tropicales jusqu'au sommet enneigé à 5895 mètres d'altitude.",
    category: "aventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["randonnée", "kilimandjaro", "montagne", "tanzanie", "challenge"],
    content: `Jour 5: Le camp de Barafu à 4600m. La nuit est froide, très froide. Mon sac de couchage résiste à -15°C mais je sens chaque degré. À minuit, nous commençons l'ascension finale...`,
    featured: true,
    comments: 45,
    likes: 210
  },
  {
    id: 5,
    title: "Architecture vernaculaire au Mali: Les mosquées de terre",
    author: "Sarah M.",
    date: "5 Mars 2024",
    readTime: "10 min",
    excerpt: "Découverte des mosquées en banco du Mali, véritables chefs-d'œuvre d'architecture traditionnelle.",
    category: "culture",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800",
    tags: ["architecture", "mali", "patrimoine", "UNESCO", "tradition"],
    content: `La mosquée de Djenné se dresse comme un géant de terre face au ciel malien. Chaque année, toute la ville participe à la réfection de cet édifice unique...`,
    featured: false,
    comments: 22,
    likes: 98
  },
  {
    id: 6,
    title: "Plongée aux Seychelles: Le paradis sous-marin",
    author: "Jacques L.",
    date: "18 Avril 2024",
    readTime: "7 min",
    excerpt: "Exploration des fonds marins des Seychelles, entre récifs coralliens et rencontres avec les tortues géantes.",
    category: "nature",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    tags: ["plongée", "seychelles", "mer", "corail", "biodiversité"],
    content: `À quelques mètres sous la surface, un monde silencieux et coloré s'offre à nous. Les coraux dansent avec le courant tandis que les poissons tropicaux...`,
    featured: false,
    comments: 31,
    likes: 167
  }
];

// ==================== CIRCUITS ORGANISÉS ====================
const organizedTours = [
  {
    id: 1,
    title: "Circuit Afrique de l'Ouest Authentique",
    duration: "15 jours",
    countries: ["Sénégal", "Ghana", "Bénin"],
    price: "$2,499",
    includes: ["Vols internationaux", "Hébergement 3-4*", "Guide francophone", "Excursions incluses", "Petit-déjeuner", "Transferts"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    rating: 4.8,
    difficulty: "Modéré",
    groupSize: "12 personnes max",
    highlights: ["Île de Gorée", "Châteaux du Ghana", "Pendjari Safari"],
    dates: ["15/06/2024", "20/07/2024", "15/08/2024"],
    spotsLeft: 8,
    discount: "-15%"
  },
  {
    id: 2,
    title: "Safari Grandiose Afrique de l'Est",
    duration: "12 jours",
    countries: ["Kenya", "Tanzanie"],
    price: "$3,299",
    includes: ["Safari en 4x4 privé", "Lodge de luxe", "Guide expert", "Tous les repas", "Vols domestiques", "Frais de parc"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    rating: 4.9,
    difficulty: "Facile",
    groupSize: "8 personnes max",
    highlights: ["Masai Mara", "Serengeti", "Ngorongoro", "Zanzibar"],
    dates: ["01/07/2024", "15/08/2024", "01/09/2024"],
    spotsLeft: 3,
    discount: "-10%"
  },
  {
    id: 3,
    title: "Découverte des Caraïbes Afro",
    duration: "10 jours",
    countries: ["Jamaïque", "Barbade"],
    price: "$2,899",
    includes: ["Vols internationaux", "Hôtel 4*", "Excursions culturelles", "Demi-pension", "Transferts", "Guide local"],
    image: "https://images.unsplash.com/photo-1518834103325-6725c4b54c14?w=800",
    rating: 4.7,
    difficulty: "Facile",
    groupSize: "15 personnes max",
    highlights: ["Bob Marley Museum", "Harrison's Cave", "Plages paradisiaques"],
    dates: ["10/06/2024", "25/07/2024", "10/08/2024"],
    spotsLeft: 12,
    discount: null
  },
  {
    id: 4,
    title: "Voyage Culturel au Bénin",
    duration: "8 jours",
    countries: ["Bénin"],
    price: "$1,799",
    includes: ["Vols internationaux", "Hébergement", "Guide local", "Excursions", "Petit-déjeuner"],
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800",
    rating: 4.6,
    difficulty: "Facile",
    groupSize: "10 personnes max",
    highlights: ["Ouidah", "Abomey", "Ganvié", "Pendjari"],
    dates: ["05/07/2024", "12/08/2024", "09/09/2024"],
    spotsLeft: 6,
    discount: "-20%"
  }
];

// ==================== EXPÉRIENCES UNIQUES ====================
const uniqueExperiences = [
  {
    id: 1,
    title: "Trekking avec les Gorilles",
    category: "aventure",
    location: "Rwanda",
    duration: "3 jours",
    price: "$$$$",
    icon: <Trees size={24} />,
    description: "Rencontre exclusive avec les gorilles de montagne dans le Parc National des Volcans",
    difficulty: "Difficile",
    bestSeason: "Juin à Septembre",
    includes: ["Permis gorille", "Guide expert", "Hébergement", "Repas", "Transferts"],
    rating: 4.9,
    spotsAvailable: 4
  },
  {
    id: 2,
    title: "Atelier Cuisine Africaine",
    category: "gastronomie",
    location: "Sénégal",
    duration: "4 heures",
    price: "$",
    icon: <Utensils size={24} />,
    description: "Apprenez les secrets du thieboudienne avec une chef sénégalaise",
    difficulty: "Facile",
    bestSeason: "Toute l'année",
    includes: ["Cours de cuisine", "Ingrédients", "Repas", "Recettes"],
    rating: 4.7,
    spotsAvailable: 8
  },
  {
    id: 3,
    title: "Safari Photo Nocturne",
    category: "nature",
    location: "Afrique du Sud",
    duration: "2 jours",
    price: "$$$",
    icon: <Camera size={24} />,
    description: "Photographiez la vie sauvage africaine sous les étoiles",
    difficulty: "Moyen",
    bestSeason: "Mai à Octobre",
    includes: ["Guide photographe", "Équipement nuit", "Safari privé", "Hébergement"],
    rating: 4.8,
    spotsAvailable: 6
  },
  {
    id: 4,
    title: "Immersion Culturelle Masaï",
    category: "culture",
    location: "Kenya",
    duration: "2 jours",
    price: "$$",
    icon: <Users size={24} />,
    description: "Vivez comme les Masaï dans un manyatta traditionnel",
    difficulty: "Moyen",
    bestSeason: "Toute l'année",
    includes: ["Nuit chez l'habitant", "Activités culturelles", "Repas", "Guide masaï"],
    rating: 4.6,
    spotsAvailable: 10
  },
  {
    id: 5,
    title: "Surf au Sénégal",
    category: "aventure",
    location: "Sénégal",
    duration: "5 jours",
    price: "$$$",
    icon: <Waves size={24} />,
    description: "Apprentissage du surf sur les vagues de N'Gor",
    difficulty: "Moyen",
    bestSeason: "Octobre à Mars",
    includes: ["Cours de surf", "Équipement", "Hébergement", "Repas"],
    rating: 4.5,
    spotsAvailable: 12
  },
  {
    id: 6,
    title: "Randonnée dans le Simien",
    category: "nature",
    location: "Éthiopie",
    duration: "4 jours",
    price: "$$$$",
    icon: <Mountain size={24} />,
    description: "Exploration des montagnes du Simien et rencontre avec les babouins gelada",
    difficulty: "Difficile",
    bestSeason: "Octobre à Avril",
    includes: ["Guide de montagne", "Porteurs", "Camping", "Repas"],
    rating: 4.9,
    spotsAvailable: 8
  }
];

// ==================== COMPONENT PRINCIPAL ====================
const TourismExplorer = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [activeTab, setActiveTab] = useState('destinations');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showPlanification, setShowPlanification] = useState(false);
  const [planificationData, setPlanificationData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: '',
    interests: [],
    accommodation: '',
    activities: []
  });

  // Combiner toutes les destinations
  const allDestinations = [
    ...westAfrica,
    ...centralAfrica,
    ...eastAfrica,
    ...southernAfrica,
    ...afroAmericanCountries
  ];

  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = allDestinations;

    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.majorCities.some(city => 
          city.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        Object.values(dest.highlights).flat().some(highlight => 
          highlight.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedRegion !== 'all') {
      switch(selectedRegion) {
        case 'west':
          filtered = filtered.filter(dest => westAfrica.includes(dest));
          break;
        case 'central':
          filtered = filtered.filter(dest => centralAfrica.includes(dest));
          break;
        case 'east':
          filtered = filtered.filter(dest => eastAfrica.includes(dest));
          break;
        case 'south':
          filtered = filtered.filter(dest => southernAfrica.includes(dest));
          break;
        case 'afro':
          filtered = filtered.filter(dest => afroAmericanCountries.includes(dest));
          break;
      }
    }

    if (selectedTheme !== 'all') {
      filtered = filtered.filter(dest => {
        const themeMap = {
          'culture': dest.highlights.culture,
          'nature': dest.highlights.nature,
          'gastronomy': dest.highlights.gastronomy,
          'adventure': dest.highlights.adventure,
          'heritage': dest.highlights.heritage
        };
        return themeMap[selectedTheme] && themeMap[selectedTheme].length > 0;
      });
    }

    setFilteredDestinations(filtered);
  }, [searchTerm, selectedRegion, selectedTheme]);

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const regions = [
    { id: 'all', name: 'Toutes les régions', count: allDestinations.length },
    { id: 'west', name: 'Afrique de l\'Ouest', count: westAfrica.length },
    { id: 'central', name: 'Afrique Centrale', count: centralAfrica.length },
    { id: 'east', name: 'Afrique de l\'Est', count: eastAfrica.length },
    { id: 'south', name: 'Afrique Australe', count: southernAfrica.length },
    { id: 'afro', name: 'Amérique Afro', count: afroAmericanCountries.length }
  ];

  const themes = [
    { id: 'all', name: 'Toutes les thématiques', icon: <Globe size={16} /> },
    { id: 'culture', name: 'Culture & Patrimoine', icon: <Castle size={16} /> },
    { id: 'nature', name: 'Nature & Aventure', icon: <Mountain size={16} /> },
    { id: 'gastronomy', name: 'Gastronomie', icon: <Utensils size={16} /> },
    { id: 'adventure', name: 'Aventure & Safari', icon: <Compass size={16} /> },
    { id: 'heritage', name: 'Patrimoine UNESCO', icon: <Award size={16} /> },
    { id: 'beach', name: 'Plages & Mer', icon: <Waves size={16} /> },
    { id: 'history', name: 'Histoire & Mémoire', icon: <History size={16} /> }
  ];

  const handlePlanificationSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Planification soumise:', planificationData);
    alert('Votre planification a été soumise avec succès! Un conseiller vous contactera bientôt.');
    setShowPlanification(false);
  };

  const handleInterestToggle = (interest) => {
    const newInterests = [...planificationData.interests];
    if (newInterests.includes(interest)) {
      const index = newInterests.indexOf(interest);
      newInterests.splice(index, 1);
    } else {
      newInterests.push(interest);
    }
    setPlanificationData({...planificationData, interests: newInterests});
  };

  return (
    <div className="tourism-explorer-app">
      {/* Header */}
    
      {/* Hero Section avec vidéo immersive */}
      <section className="tourism-hero">
        <div className="tourism-hero-background">
          <video autoPlay muted loop className="tourism-hero-video">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-walking-in-a-village-in-africa-17941-large.mp4" type="video/mp4" />
          </video>
          <div className="tourism-hero-overlay"></div>
        </div>
        
        <div className="tourism-container">
          <div className="tourism-hero-content">
            <h1 className="tourism-hero-title">
              Découvrez l'Âme de
              <span className="tourism-hero-highlight"> l'Afrique</span>
              <br />
              et de sa
              <span className="tourism-hero-highlight"> Diaspora</span>
            </h1>
            <p className="tourism-hero-subtitle">
              Des safaris épiques aux plages paradisiaques, des cultures ancestrales 
              aux saveurs enivrantes. Votre aventure afro-culturelle commence ici.
            </p>
            
            <div className="tourism-search-container">
              <div className="tourism-search-box">
                <Search className="tourism-search-icon" size={24} />
                <input
                  type="text"
                  placeholder="Rechercher une destination, une activité, un monument..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="tourism-search-input"
                />
                <button className="tourism-search-btn">
                  <Search size={20} />
                  <span>Explorer</span>
                </button>
              </div>
              
              <div className="tourism-quick-filters">
  <span className="tourism-quick-filter-label">Explorer par région :</span>
  <div className="tourism-quick-buttons">
    <button 
      className={`tourism-quick-btn ${selectedRegion === 'west' ? 'active' : ''}`}
      onClick={() => setSelectedRegion(selectedRegion === 'west' ? 'all' : 'west')}
    >
      <Globe size={16} />
      Afrique de l'Ouest
    </button>
    <button 
      className={`tourism-quick-btn ${selectedRegion === 'central' ? 'active' : ''}`}
      onClick={() => setSelectedRegion(selectedRegion === 'central' ? 'all' : 'central')}
    >
      <Globe size={16} />
      Afrique Centrale
    </button>
    <button 
      className={`tourism-quick-btn ${selectedRegion === 'east' ? 'active' : ''}`}
      onClick={() => setSelectedRegion(selectedRegion === 'east' ? 'all' : 'east')}
    >
      <Globe size={16} />
      Afrique de l'Est
    </button>
    <button 
      className={`tourism-quick-btn ${selectedRegion === 'south' ? 'active' : ''}`}
      onClick={() => setSelectedRegion(selectedRegion === 'south' ? 'all' : 'south')}
    >
      <Globe size={16} />
      Afrique Australe
    </button>
    <button 
      className={`tourism-quick-btn ${selectedRegion === 'afro' ? 'active' : ''}`}
      onClick={() => setSelectedRegion(selectedRegion === 'afro' ? 'all' : 'afro')}
    >
      <Plane size={16} />
      Amérique Afro
    </button>
  </div>
</div>

<div className="tourism-quick-filters mt-3">
  <span className="tourism-quick-filter-label">Explorer par thème :</span>
  <div className="tourism-quick-buttons">
    <button 
      className={`tourism-quick-btn ${selectedTheme === 'culture' ? 'active' : ''}`}
      onClick={() => setSelectedTheme(selectedTheme === 'culture' ? 'all' : 'culture')}
    >
      <Castle size={16} />
      Culture
    </button>
    <button 
      className={`tourism-quick-btn ${selectedTheme === 'nature' ? 'active' : ''}`}
      onClick={() => setSelectedTheme(selectedTheme === 'nature' ? 'all' : 'nature')}
    >
      <Mountain size={16} />
      Nature
    </button>
    <button 
      className={`tourism-quick-btn ${selectedTheme === 'gastronomy' ? 'active' : ''}`}
      onClick={() => setSelectedTheme(selectedTheme === 'gastronomy' ? 'all' : 'gastronomy')}
    >
      <Utensils size={16} />
      Gastronomie
    </button>
    <button 
      className={`tourism-quick-btn ${selectedTheme === 'beach' ? 'active' : ''}`}
      onClick={() => setSelectedTheme(selectedTheme === 'beach' ? 'all' : 'beach')}
    >
      <Waves size={16} />
      Plages
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de planification */}
      {showPlanification && (
        <div className="tourism-modal-overlay">
          <div className="tourism-planification-modal">
            <button className="tourism-modal-close" onClick={() => setShowPlanification(false)}>
              <X size={24} />
            </button>
            
            <h2 className="tourism-modal-title">
              <Calendar size={28} />
              Planifiez votre voyage
            </h2>
            
            <form className="tourism-planification-form" onSubmit={handlePlanificationSubmit}>
              <div className="tourism-form-grid">
                <div className="tourism-form-group">
                  <label>
                    <MapPin size={18} />
                    Destination souhaitée
                  </label>
                  <select 
                    value={planificationData.destination}
                    onChange={(e) => setPlanificationData({...planificationData, destination: e.target.value})}
                    required
                  >
                    <option value="">Sélectionnez une destination</option>
                    {allDestinations.map(dest => (
                      <option key={dest.id} value={dest.name}>{dest.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="tourism-form-group">
                  <label>
                    <Calendar size={18} />
                    Date de départ
                  </label>
                  <input 
                    type="date" 
                    value={planificationData.startDate}
                    onChange={(e) => setPlanificationData({...planificationData, startDate: e.target.value})}
                    required
                  />
                </div>
                
                <div className="tourism-form-group">
                  <label>
                    <Calendar size={18} />
                    Date de retour
                  </label>
                  <input 
                    type="date" 
                    value={planificationData.endDate}
                    onChange={(e) => setPlanificationData({...planificationData, endDate: e.target.value})}
                    required
                  />
                </div>
                
                <div className="tourism-form-group">
                  <label>
                    <Users size={18} />
                    Nombre de voyageurs
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    max="20"
                    value={planificationData.travelers}
                    onChange={(e) => setPlanificationData({...planificationData, travelers: parseInt(e.target.value)})}
                    required
                  />
                </div>
                
                <div className="tourism-form-group">
                  <label>
                    <DollarSign size={18} />
                    Budget estimé (par personne)
                  </label>
                  <select 
                    value={planificationData.budget}
                    onChange={(e) => setPlanificationData({...planificationData, budget: e.target.value})}
                    required
                  >
                    <option value="">Sélectionnez un budget</option>
                    <option value="economique">Économique ($500-$1000)</option>
                    <option value="moyen">Moyen ($1000-$3000)</option>
                    <option value="confort">Confort ($3000-$5000)</option>
                    <option value="luxe">Luxe ($5000+)</option>
                  </select>
                </div>
                
                <div className="tourism-form-group">
                  <label>
                    <Bed size={18} />
                    Type d'hébergement
                  </label>
                  <select 
                    value={planificationData.accommodation}
                    onChange={(e) => setPlanificationData({...planificationData, accommodation: e.target.value})}
                    required
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="hotel">Hôtel</option>
                    <option value="auberge">Auberge</option>
                    <option value="maison-hotes">Maison d'hôtes</option>
                    <option value="ecolodge">Écolodge</option>
                    <option value="camping">Camping</option>
                    <option value="location">Location saisonnière</option>
                  </select>
                </div>
              </div>
              
              <div className="tourism-form-group full-width">
                <label>
                  <Compass size={18} />
                  Centres d'intérêt (sélectionnez plusieurs)
                </label>
                <div className="tourism-interests-grid">
                  {[
                    { id: 'culture', label: 'Culture & Patrimoine', icon: <Castle size={16} /> },
                    { id: 'nature', label: 'Nature & Safari', icon: <Mountain size={16} /> },
                    { id: 'gastronomy', label: 'Gastronomie', icon: <Utensils size={16} /> },
                    { id: 'beach', label: 'Plages & Mer', icon: <Waves size={16} /> },
                    { id: 'adventure', label: 'Aventure', icon: <Compass size={16} /> },
                    { id: 'history', label: 'Histoire', icon: <History size={16} /> },
                    { id: 'shopping', label: 'Shopping', icon: <ShoppingBag size={16} /> },
                    { id: 'relaxation', label: 'Détente', icon: <Sun size={16} /> }
                  ].map(interest => (
                    <button
                      key={interest.id}
                      type="button"
                      className={`tourism-interest-btn ${planificationData.interests.includes(interest.id) ? 'active' : ''}`}
                      onClick={() => handleInterestToggle(interest.id)}
                    >
                      {interest.icon}
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="tourism-form-group full-width">
                <label>
                  <MessageCircle size={18} />
                  Informations complémentaires
                </label>
                <textarea 
                  placeholder="Précisez vos attentes, restrictions alimentaires, préférences..."
                  rows="4"
                  value={planificationData.notes}
                  onChange={(e) => setPlanificationData({...planificationData, notes: e.target.value})}
                />
              </div>
              
              <div className="tourism-form-actions">
                <button type="button" className="tourism-secondary-btn" onClick={() => setShowPlanification(false)}>
                  Annuler
                </button>
                <button type="submit" className="tourism-primary-btn">
                  <CheckCircle size={20} />
                  Soumettre ma planification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Filters */}
      {showFilters && (
        <div className="tourism-mobile-filters">
          <div className="tourism-container">
            <div className="tourism-filters-grid">
              <div className="tourism-filter-group">
                <label className="tourism-filter-label">
                  <Globe size={18} />
                  Région
                </label>
                <div className="tourism-region-buttons">
                  {regions.map(region => (
                    <button
                      key={region.id}
                      className={`tourism-region-btn ${selectedRegion === region.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedRegion(region.id);
                        setShowFilters(false);
                      }}
                    >
                      {region.name}
                      <span className="tourism-region-count">{region.count}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="tourism-filter-group">
                <label className="tourism-filter-label">
                  <Compass size={18} />
                  Thématique
                </label>
                <div className="tourism-theme-buttons">
                  {themes.map(theme => (
                    <button
                      key={theme.id}
                      className={`tourism-theme-btn ${selectedTheme === theme.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedTheme(theme.id);
                        setShowFilters(false);
                      }}
                    >
                      {theme.icon}
                      {theme.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="tourism-main">
        {activeTab === 'destinations' && (
          <>
            {/* Filters Section */}
            <section className="tourism-filters-section">
              <div className="tourism-container">
                <div className="tourism-filters-header">
                  <h2 className="tourism-section-title">
                    <Filter size={24} />
                    Filtres de Recherche
                  </h2>
                  <div className="tourism-filter-stats">
                    <div className="tourism-stat">
                      <span className="tourism-stat-number">{filteredDestinations.length}</span>
                      <span className="tourism-stat-label">Destinations</span>
                    </div>
                    <div className="tourism-stat">
                      <span className="tourism-stat-number">{favorites.size}</span>
                      <span className="tourism-stat-label">Favoris</span>
                    </div>
                    <button 
                      className="tourism-reset-btn"
                      onClick={() => {
                        setSelectedRegion('all');
                        setSelectedTheme('all');
                        setSearchTerm('');
                      }}
                    >
                      <X size={16} />
                      Réinitialiser
                    </button>
                  </div>
                </div>
                
                <div className="tourism-filters-grid">
                  <div className="tourism-filter-group">
                    <label className="tourism-filter-label">
                      <Globe size={20} />
                      Sélectionnez une région
                    </label>
                    <div className="tourism-select-wrapper">
                      <select 
                        value={selectedRegion} 
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="tourism-filter-select"
                      >
                        {regions.map(region => (
                          <option key={region.id} value={region.id}>
                            {region.name} ({region.count})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="tourism-select-arrow" />
                    </div>
                  </div>
                  
                  <div className="tourism-filter-group">
                    <label className="tourism-filter-label">
                      <Compass size={20} />
                      Choisissez une thématique
                    </label>
                    <div className="tourism-select-wrapper">
                      <select 
                        value={selectedTheme} 
                        onChange={(e) => setSelectedTheme(e.target.value)}
                        className="tourism-filter-select"
                      >
                        {themes.map(theme => (
                          <option key={theme.id} value={theme.id}>
                            {theme.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="tourism-select-arrow" />
                    </div>
                  </div>
                  
                  <div className="tourism-filter-group">
                    <label className="tourism-filter-label">
                      <Search size={20} />
                      Recherche avancée
                    </label>
                    <input
                      type="text"
                      placeholder="Pays, ville, monument, activité..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="tourism-search-filter"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Destinations Grid */}
            <section className="tourism-destinations-section">
              <div className="tourism-container">
                <div className="tourism-section-header">
                  <h2 className="tourism-section-title">
                    <MapPin size={28} />
                    Nos Destinations
                    <span className="tourism-section-subtitle">
                      Découvrez {filteredDestinations.length} destinations uniques
                    </span>
                  </h2>
                  
                </div>
                
                {filteredDestinations.length === 0 ? (
                  <div className="tourism-no-results">
                    <Compass size={80} />
                    <h3>Aucune destination ne correspond à votre recherche</h3>
                    <p>Essayez de modifier vos filtres ou votre recherche</p>
                    <button 
                      className="tourism-reset-search-btn"
                      onClick={() => {
                        setSelectedRegion('all');
                        setSelectedTheme('all');
                        setSearchTerm('');
                      }}
                    >
                      Afficher toutes les destinations
                    </button>
                  </div>
                ) : (
                  <div className="tourism-destinations-grid">
                    {filteredDestinations.map(destination => (
                      <DestinationCard 
                        key={destination.id}
                        destination={destination}
                        onSelect={setSelectedCountry}
                        isFavorite={favorites.has(destination.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {activeTab === 'experiences' && (
          <ExperiencesSection experiences={uniqueExperiences} />
        )}

        {activeTab === 'blog' && (
          <BlogSection blogs={travelBlogs} />
        )}

        {activeTab === 'circuits' && (
          <ToursSection tours={organizedTours} />
        )}

        {activeTab === 'comparateur' && (
          <ComparatorSection destinations={allDestinations} />
        )}

        {activeTab === 'favorites' && (
          <FavoritesSection 
            destinations={allDestinations.filter(d => favorites.has(d.id))}
            onSelect={setSelectedCountry}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        )}
      </main>

   

      {/* Témoignages */}
      <section className="tourism-testimonials">
        <div className="tourism-container">
          <h2 className="tourism-section-title">
            <Mic size={28} />
            Ils ont vécu l'expérience
            <span className="tourism-section-subtitle">
              Découvrez les avis de nos voyageurs
            </span>
          </h2>
          
          <div className="tourism-testimonials-grid">
            {[
              {
                name: "Sarah K.",
                country: "Kenya",
                text: "Le safari dans le Masai Mara a dépassé toutes mes attentes. Voir les animaux dans leur habitat naturel est une expérience qui marque à vie. Notre guide Moses était incroyablement compétent.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
                date: "Mars 2024",
                tour: "Safari Grandiose"
              },
              {
                name: "Thomas M.",
                country: "Sénégal",
                text: "L'accueil chaleureux des Sénégalais et la beauté des plages de la Petite Côte. La visite de l'île de Gorée était particulièrement émouvante. Une destination riche en histoire et en sourires.",
                rating: 4,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                date: "Février 2024",
                tour: "Circuit Ouest Africain"
              },
              {
                name: "Aïcha D.",
                country: "Bénin",
                text: "La découverte de la culture vodun et la visite de la route des esclaves à Ouidah ont été des moments forts. Le safari dans la Pendjari était magnifique. Je recommande vivement !",
                rating: 5,
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
                date: "Janvier 2024",
                tour: "Culture Béninoise"
              },
              {
                name: "Kwame N.",
                country: "Ghana",
                text: "Les châteaux de la côte et l'histoire de la traite négrière sont impressionnants. L'énergie du peuple ghanéen est contagieuse. Une expérience éducative et émouvante.",
                rating: 4,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                date: "Décembre 2023",
                tour: "Circuit Historique"
              },
              {
                name: "Fatou D.",
                country: "Sénégal",
                text: "Le festival de jazz de Saint-Louis était extraordinaire. La musique, l'ambiance, l'accueil... tout était parfait. Une destination culturelle à ne pas manquer.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100",
                date: "Novembre 2023",
                tour: "Festival de Jazz"
              },
              {
                name: "Marcus J.",
                country: "Afrique du Sud",
                text: "Le parc Kruger et la route des jardins étaient au-delà de mes espérances. La diversité des paysages sud-africains est époustouflante. Un voyage qui reste gravé dans ma mémoire.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
                date: "Octobre 2023",
                tour: "Safari Sud-Africain"
              }
            ].map((testimonial, index) => (
              <div key={index} className="tourism-testimonial-card">
                <div className="tourism-testimonial-header">
                  <div className="tourism-testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="tourism-testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <div className="tourism-testimonial-meta">
                      <span className="tourism-testimonial-country">
                        <MapPin size={12} />
                        {testimonial.country}
                      </span>
                      <span className="tourism-testimonial-date">{testimonial.date}</span>
                    </div>
                  </div>
                  <div className="tourism-testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                    <span>{testimonial.rating}.0</span>
                  </div>
                </div>
                <p className="tourism-testimonial-text">"{testimonial.text}"</p>
                <div className="tourism-testimonial-tour">
                  <Navigation size={12} />
                  <span>{testimonial.tour}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="tourism-testimonials-cta">
            <button className="tourism-primary-btn">
              <MessageCircle size={20} />
              Laisser mon témoignage
            </button>
            <button className="tourism-secondary-btn">
              Voir tous les avis
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="tourism-newsletter-section">
        <div className="tourism-container">
          <div className="tourism-newsletter-content">
            <div className="tourism-newsletter-text">
              <h3>
                <Bell size={28} />
                Ne manquez aucune offre
              </h3>
              <p>Inscrivez-vous à notre newsletter pour recevoir les dernières promotions, conseils de voyage et offres exclusives.</p>
            </div>
            <div className="tourism-newsletter-form">
              <div className="tourism-newsletter-input-group">
                <Mail size={20} />
                <input type="email" placeholder="Votre adresse email" />
                <button className="tourism-newsletter-btn">
                  S'abonner
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="tourism-newsletter-privacy">
                En vous inscrivant, vous acceptez notre politique de confidentialité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tourism-footer">
        <div className="tourism-container">
          <div className="tourism-footer-content">
            <div className="tourism-footer-section">
              <div className="tourism-footer-logo">
                <Globe size={32} />
                <div>
                  <h3>AFRO TRAVEL EXPERIENCE</h3>
                  <p>Votre guide de voyage afro-culturel</p>
                </div>
              </div>
              <p className="tourism-footer-description">
                Nous connectons les voyageurs à la richesse culturelle et naturelle 
                de l'Afrique et de sa diaspora à travers des expériences authentiques.
              </p>
              <div className="tourism-social-links">
                <button className="tourism-social-btn">
                  <Instagram size={20} />
                </button>
                <button className="tourism-social-btn">
                  <Facebook size={20} />
                </button>
                <button className="tourism-social-btn">
                  <Twitter size={20} />
                </button>
                <button className="tourism-social-btn">
                  <Youtube size={20} />
                </button>
                <button className="tourism-social-btn">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
            
            <div className="tourism-footer-section">
              <h4>Destinations</h4>
              <ul className="tourism-footer-links">
                <li><a href="#">Afrique de l'Ouest</a></li>
                <li><a href="#">Afrique Centrale</a></li>
                <li><a href="#">Afrique de l'Est</a></li>
                <li><a href="#">Afrique Australe</a></li>
                <li><a href="#">Caraïbes Afro</a></li>
                <li><a href="#">Amérique Latine Afro</a></li>
              </ul>
            </div>
            
            <div className="tourism-footer-section">
              <h4>Services</h4>
              <ul className="tourism-footer-links">
                <li><a href="#">Circuits organisés</a></li>
                <li><a href="#">Réservation d'hôtels</a></li>
                <li><a href="#">Comparateur de vols</a></li>
                <li><a href="#">Guide touristique</a></li>
                <li><a href="#">Assurance voyage</a></li>
                <li><a href="#">Visas et formalités</a></li>
              </ul>
            </div>
            
            <div className="tourism-footer-section">
              <h4>Contact & Assistance</h4>
              <ul className="tourism-footer-links">
                <li>
                  <Phone size={16} />
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>contact@afrotravel.com</span>
                </li>
                <li>
                  <Clock size={16} />
                  <span>Lun-Ven 9h-18h</span>
                </li>
                <li>
                  <HelpCircle size={16} />
                  <span>Centre d'aide</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="tourism-footer-bottom">
            <div className="tourism-footer-bottom-content">
              <p>© 2024 Afro Travel Experience. Tous droits réservés.</p>
              <div className="tourism-footer-legal">
                <a href="#">Conditions générales</a>
                <a href="#">Politique de confidentialité</a>
                <a href="#">Mentions légales</a>
                <a href="#">Cookies</a>
              </div>
            </div>
            <div className="tourism-footer-payment">
              <div className="tourism-payment-methods">
                <CreditCard size={20} />
                <span>Paiements sécurisés</span>
              </div>
              <div className="tourism-security-badge">
                <Shield size={20} />
                <span>Site sécurisé SSL</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Country Modal */}
      {selectedCountry && (
        <CountryModal 
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          isFavorite={favorites.has(selectedCountry.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

// ==================== COMPOSANTS ====================

const DestinationCard = ({ destination, onSelect, isFavorite, onToggleFavorite }) => {
  return (
    <div className="tourism-destination-card" onClick={() => onSelect(destination)}>
      <div className="tourism-card-image">
        <img src={destination.image} alt={destination.name} />
        <div className="tourism-card-overlay"></div>
        <button 
          className={`tourism-favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => onToggleFavorite(destination.id, e)}
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
        <div className="tourism-card-badges">
          <span className="tourism-badge rating">
            <Star size={12} fill="currentColor" />
            {destination.rating}
          </span>
          <span className="tourism-badge capital">
            <MapPin size={12} />
            {destination.capital}
          </span>
          <span className="tourism-badge region">
            <Globe size={12} />
            {destination.regions[0]}
          </span>
        </div>
      </div>
      
      <div className="tourism-card-content">
        <h3 className="tourism-card-title">{destination.name}</h3>
        <p className="tourism-card-description">
          Découvrez {destination.name} avec sa capitale {destination.capital} et explorez {destination.majorCities.length} villes principales.
        </p>
        
        <div className="tourism-card-highlights">
          <div className="tourism-highlight">
            <Castle size={14} />
            <span>{destination.highlights.culture[0]}</span>
          </div>
          <div className="tourism-highlight">
            <Mountain size={14} />
            <span>{destination.highlights.nature[0]}</span>
          </div>
          <div className="tourism-highlight">
            <Utensils size={14} />
            <span>{destination.highlights.gastronomy[0]}</span>
          </div>
        </div>
        
        <div className="tourism-card-meta">
          <div className="tourism-meta-item">
            <Users size={12} />
            <span>{destination.majorCities.slice(0, 3).join(', ')}...</span>
          </div>
          <div className="tourism-meta-item">
            <Compass size={12} />
            <span>{destination.experiences?.[0]?.title || "Expériences disponibles"}</span>
          </div>
        </div>
        
        <button className="tourism-card-btn">
          Découvrir cette destination
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const CountryModal = ({ country, onClose, isFavorite, onToggleFavorite }) => {
  const [activeInfoTab, setActiveInfoTab] = useState('overview');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    travelers: 1,
    message: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission de réservation
    console.log('Réservation soumise:', { country: country.name, ...bookingData });
    alert('Votre demande de réservation a été envoyée avec succès!');
    setShowBookingForm(false);
  };

  return (
    <div className="tourism-modal-overlay" onClick={onClose}>
      <div className="tourism-country-modal" onClick={(e) => e.stopPropagation()}>
        <button className="tourism-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="tourism-modal-header">
          <div className="tourism-modal-hero">
            <img src={country.image} alt={country.name} />
            <div className="tourism-modal-hero-content">
              <h1>{country.name}</h1>
              <div className="tourism-modal-subtitle">
                <div className="tourism-modal-location">
                  <MapPin size={16} />
                  <span>Capitale: {country.capital}</span>
                </div>
                <div className="tourism-modal-region">
                  <Globe size={16} />
                  <span>Région: {country.regions?.[0] || 'Afrique'}</span>
                </div>
              </div>
              <div className="tourism-modal-rating">
                <Star size={20} fill="currentColor" />
                <span>{country.rating}/5</span>
                <span className="tourism-modal-reviews">({country.testimonials?.length || 12} avis)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tourism-modal-tabs">
          <button 
            className={`tourism-tab ${activeInfoTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveInfoTab('overview')}
          >
            <Compass size={18} />
            Aperçu
          </button>
          <button 
            className={`tourism-tab ${activeInfoTab === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveInfoTab('activities')}
          >
            <Navigation size={18} />
            Activités
          </button>
          <button 
            className={`tourism-tab ${activeInfoTab === 'practical' ? 'active' : ''}`}
            onClick={() => setActiveInfoTab('practical')}
          >
            <Info size={18} />
            Infos pratiques
          </button>
          <button 
            className={`tourism-tab ${activeInfoTab === 'gastronomy' ? 'active' : ''}`}
            onClick={() => setActiveInfoTab('gastronomy')}
          >
            <Utensils size={18} />
            Gastronomie
          </button>
          <button 
            className={`tourism-tab ${activeInfoTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveInfoTab('testimonials')}
          >
            <MessageCircle size={18} />
            Témoignages
          </button>
        </div>
        
        <div className="tourism-modal-content">
          {activeInfoTab === 'overview' && (
            <div className="tourism-tab-content">
              <div className="tourism-highlights-grid">
                <div className="tourism-highlight-category">
                  <h3><Castle size={20} /> Culture & Patrimoine</h3>
                  <ul>
                    {country.highlights.culture.map((item, i) => (
                      <li key={i}>
                        <Award size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tourism-highlight-category">
                  <h3><Mountain size={20} /> Nature & Aventure</h3>
                  <ul>
                    {country.highlights.nature.map((item, i) => (
                      <li key={i}>
                        <Trees size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tourism-highlight-category">
                  <h3><Utensils size={20} /> Gastronomie</h3>
                  <ul>
                    {country.highlights.gastronomy.map((item, i) => (
                      <li key={i}>
                        <Coffee size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tourism-highlight-category">
                  <h3><Compass size={20} /> Aventure & Safari</h3>
                  <ul>
                    {country.highlights.adventure?.map((item, i) => (
                      <li key={i}>
                        <Navigation size={12} />
                        {item}
                      </li>
                    )) || [
                      "Safari photo",
                      "Randonnée guidée",
                      "Observation faunique"
                    ].map((item, i) => (
                      <li key={i}>
                        <Navigation size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {country.experiences && (
                <div className="tourism-experiences-section">
                  <h3>Expériences recommandées</h3>
                  <div className="tourism-experiences-list">
                    {country.experiences.map((exp, i) => (
                      <div key={i} className="tourism-experience-item">
                        <div className="tourism-experience-header">
                          <h4>{exp.title}</h4>
                          <span className="tourism-experience-price">{exp.price}</span>
                        </div>
                        <p>{exp.description}</p>
                        <div className="tourism-experience-meta">
                          <span><Clock size={12} /> {exp.duration}</span>
                          <span><Activity size={12} /> {exp.difficulty}</span>
                          <span><Calendar size={12} /> {exp.season}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeInfoTab === 'practical' && (
            <div className="tourism-tab-content">
              <div className="tourism-practical-info">
                <div className="tourism-info-section">
                  <h4><Users size={18} /> Hébergement</h4>
                  <div className="tourism-accommodation-grid">
                    {(country.practicalInfo?.accommodation || ['Hôtels 3-4 étoiles', 'Écolodges', 'Chez l\'habitant', 'Auberges de jeunesse', 'Campements']).map((item, i) => (
                      <div key={i} className="tourism-accommodation-item">
                        <div className="tourism-accommodation-icon">
                          {i === 0 ? <Star size={16} /> : 
                           i === 1 ? <Trees size={16} /> : 
                           i === 2 ? <Home size={16} /> : 
                           i === 3 ? <Bed size={16} /> : 
                           <Tent size={16} />}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="tourism-info-section">
                  <h4><Car size={18} /> Transport</h4>
                  <div className="tourism-transport-info">
                    <div className="tourism-transport-item">
                      <strong>Arrivée :</strong>
                      <span>{country.practicalInfo?.transport?.arrival || 'Aéroport international disponible'}</span>
                    </div>
                    <div className="tourism-transport-item">
                      <strong>Sur place :</strong>
                      <span>{country.practicalInfo?.transport?.local || 'Taxis, bus, location de voiture'}</span>
                    </div>
                    {country.practicalInfo?.transport?.tips && (
                      <div className="tourism-tips">
                        <Info size={16} />
                        <span>{country.practicalInfo.transport.tips}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="tourism-info-section">
                  <h4><Cloud size={18} /> Climat & Saisons</h4>
                  <div className="tourism-climate-info">
                    <div className="tourism-climate-item">
                      <Thermometer size={16} />
                      <div>
                        <strong>Température :</strong>
                        <span>{country.practicalInfo?.climate?.temperature || '25°C à 32°C'}</span>
                      </div>
                    </div>
                    <div className="tourism-climate-item">
                      <Calendar size={16} />
                      <div>
                        <strong>Meilleure période :</strong>
                        <span>{country.practicalInfo?.bestTime || 'Novembre à Mars'}</span>
                      </div>
                    </div>
                    <div className="tourism-seasons">
                      <h5>Saisons :</h5>
                      <ul>
                        {(country.practicalInfo?.climate?.seasons || [
                          'Saison sèche : Novembre à Avril',
                          'Saison des pluies : Mai à Octobre'
                        ]).map((season, i) => (
                          <li key={i}>
                            {i === 0 ? <Sun size={14} /> : <CloudRain size={14} />}
                            {season}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="tourism-info-section">
                  <h4><FileText size={18} /> Formalités</h4>
                  <div className="tourism-formalities">
                    <div className="tourism-formality-item">
                      <strong>Visa :</strong>
                      <span>{country.practicalInfo?.visa || 'À vérifier selon votre nationalité'}</span>
                    </div>
                    <div className="tourism-formality-item">
                      <strong>Devise :</strong>
                      <span>{country.practicalInfo?.currency || 'Franc CFA (XOF)'}</span>
                    </div>
                    <div className="tourism-formality-item">
                      <strong>Langues :</strong>
                      <span>{country.practicalInfo?.language || 'Français, langues locales'}</span>
                    </div>
                  </div>
                </div>
                
                {country.tips && (
                  <div className="tourism-info-section">
                    <h4><Lightbulb size={18} /> Conseils pratiques</h4>
                    <div className="tourism-tips-list">
                      {country.tips.map((tip, i) => (
                        <div key={i} className="tourism-tip-item">
                          <Check size={16} />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {activeInfoTab === 'gastronomy' && (
            <div className="tourism-tab-content">
              <div className="tourism-gastronomy-section">
                <h3>Spécialités culinaires à découvrir</h3>
                <div className="tourism-dishes-grid">
                  {country.highlights.gastronomy.map((dish, i) => (
                    <div key={i} className="tourism-dish-card">
                      <div className="tourism-dish-icon">
                        <Utensils size={24} />
                      </div>
                      <div className="tourism-dish-content">
                        <h4>{dish}</h4>
                        <p>Plat traditionnel à ne pas manquer</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="tourism-cooking-classes">
                  <h4>Ateliers de cuisine disponibles</h4>
                  <div className="tourism-class-card">
                    <div className="tourism-class-info">
                      <h5>Atelier cuisine locale</h5>
                      <p>Apprenez à préparer les plats traditionnels avec un chef local</p>
                      <div className="tourism-class-meta">
                        <span><Clock size={12} /> 3 heures</span>
                        <span><Users size={12} /> 2-6 personnes</span>
                        <span><DollarSign size={12} /> À partir de $50</span>
                      </div>
                    </div>
                    <button className="tourism-class-book" onClick={() => setShowBookingForm(true)}>
                      Réserver
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeInfoTab === 'testimonials' && (
            <div className="tourism-tab-content">
              <div className="tourism-testimonials-list">
                <h3>Avis des voyageurs</h3>
                {(country.testimonials || []).map((testimonial, i) => (
                  <div key={i} className="tourism-testimonial-item">
                    <div className="tourism-testimonial-header">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                      <div>
                        <h4>{testimonial.name}</h4>
                        <div className="tourism-testimonial-rating">
                          {[...Array(5)].map((_, j) => (
                            <Star 
                              key={j} 
                              size={14} 
                              fill={j < testimonial.rating ? "currentColor" : "none"} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="tourism-testimonial-date">{testimonial.date}</span>
                    </div>
                    <p className="tourism-testimonial-text">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="tourism-modal-actions">
          <button className="tourism-primary-action" onClick={() => setShowBookingForm(true)}>
            <Calendar size={20} />
            Réserver un séjour
          </button>
          <button className="tourism-secondary-action">
            <Navigation size={20} />
            Voir les circuits
          </button>
          <button 
            className={`tourism-favorite-action ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(country.id, { stopPropagation: () => {} })}
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            {isFavorite ? 'Retirer des' : 'Ajouter aux'} favoris
          </button>
        </div>
      </div>

      {/* Modal de réservation */}
      {showBookingForm && (
        <div className="tourism-modal-overlay" onClick={() => setShowBookingForm(false)}>
          <div className="tourism-booking-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tourism-modal-close" onClick={() => setShowBookingForm(false)}>
              <X size={24} />
            </button>
            
            <h3>Réserver votre séjour au {country.name}</h3>
            
            <form className="tourism-booking-form" onSubmit={handleBookingSubmit}>
              <div className="tourism-form-group">
                <label>Nom complet</label>
                <input 
                  type="text" 
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="tourism-form-row">
                <div className="tourism-form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="tourism-form-group">
                  <label>Téléphone</label>
                  <input 
                    type="tel" 
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="tourism-form-row">
                <div className="tourism-form-group">
                  <label>Dates souhaitées</label>
                  <input 
                    type="text" 
                    placeholder="JJ/MM/AAAA - JJ/MM/AAAA"
                    value={bookingData.dates}
                    onChange={(e) => setBookingData({...bookingData, dates: e.target.value})}
                    required
                  />
                </div>
                <div className="tourism-form-group">
                  <label>Nombre de voyageurs</label>
                  <input 
                    type="number" 
                    min="1"
                    value={bookingData.travelers}
                    onChange={(e) => setBookingData({...bookingData, travelers: parseInt(e.target.value)})}
                    required
                  />
                </div>
              </div>
              
              <div className="tourism-form-group">
                <label>Message (préférences, exigences...)</label>
                <textarea 
                  rows="4"
                  value={bookingData.message}
                  onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                />
              </div>
              
              <div className="tourism-form-actions">
                <button type="submit" className="tourism-primary-btn">
                  <CheckCircle size={20} />
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ExperiencesSection = ({ experiences }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Toutes', count: experiences.length },
    { id: 'aventure', name: 'Aventure', count: experiences.filter(e => e.category === 'aventure').length },
    { id: 'culture', name: 'Culture', count: experiences.filter(e => e.category === 'culture').length },
    { id: 'nature', name: 'Nature', count: experiences.filter(e => e.category === 'nature').length },
    { id: 'gastronomy', name: 'Gastronomie', count: experiences.filter(e => e.category === 'gastronomy').length }
  ];
  
  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);
  
  return (
    <section className="tourism-experiences-section">
      <div className="tourism-container">
        <div className="tourism-section-header">
          <h2 className="tourism-section-title">
            <Sparkles size={28} />
            Expériences Uniques
            <span className="tourism-section-subtitle">
              Des activités mémorables pour vivre l'Afrique autrement
            </span>
          </h2>
          <button className="tourism-view-all">
            Voir toutes les expériences
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="tourism-experience-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tourism-experience-category ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
              <span className="tourism-experience-count">{cat.count}</span>
            </button>
          ))}
        </div>
        
        <div className="tourism-experiences-grid">
          {filteredExperiences.map(exp => (
            <div key={exp.id} className="tourism-experience-card">
              <div className="tourism-experience-icon">
                {exp.icon}
              </div>
              <div className="tourism-experience-content">
                <div className="tourism-experience-header">
                  <h3>{exp.title}</h3>
                  <div className="tourism-experience-price-badge">{exp.price}</div>
                </div>
                <p className="tourism-experience-description">{exp.description}</p>
                <div className="tourism-experience-meta">
                  <span className="tourism-experience-location">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                  <span className="tourism-experience-duration">
                    <Clock size={12} />
                    {exp.duration}
                  </span>
                  <span className="tourism-experience-difficulty">
                    <Activity size={12} />
                    {exp.difficulty}
                  </span>
                </div>
                <div className="tourism-experience-includes">
                  <h4>Inclus :</h4>
                  <ul>
                    {exp.includes.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tourism-experience-footer">
                  <div className="tourism-experience-rating">
                    <Star size={14} fill="currentColor" />
                    <span>{exp.rating}</span>
                    <span className="tourism-experience-spots">
                      {exp.spotsAvailable} places restantes
                    </span>
                  </div>
                  <button className="tourism-experience-btn">
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="tourism-categories">
          <h3>Catégories d'expériences</h3>
          <div className="tourism-categories-grid">
            {[
              { icon: <Camera size={24} />, name: 'Photographie', count: '12 expériences' },
              { icon: <Utensils size={24} />, name: 'Gastronomie', count: '8 ateliers' },
              { icon: <Trees size={24} />, name: 'Nature', count: '15 activités' },
              { icon: <Users size={24} />, name: 'Culture', count: '10 immersions' },
              { icon: <Waves size={24} />, name: 'Plage', count: '7 excursions' },
              { icon: <Award size={24} />, name: 'Patrimoine', count: '9 visites' },
              { icon: <Music size={24} />, name: 'Musique', count: '6 concerts' },
              { icon: <Palette size={24} />, name: 'Artisanat', count: '5 ateliers' }
            ].map((cat, i) => (
              <div key={i} className="tourism-category-card">
                <div className="tourism-category-icon">{cat.icon}</div>
                <h4>{cat.name}</h4>
                <span className="tourism-category-count">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'aventure', name: 'Aventure' },
    { id: 'culture', name: 'Culture' },
    { id: 'gastronomie', name: 'Gastronomie' },
    { id: 'conseils', name: 'Conseils' },
    { id: 'itinéraires', name: 'Itinéraires' },
    { id: 'nature', name: 'Nature' }
  ];
  
  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);
  
  return (
    <section className="tourism-blog-section">
      <div className="tourism-container">
        <div className="tourism-section-header">
          <h2 className="tourism-section-title">
            <BookOpen size={28} />
            Magazine & Récits
            <span className="tourism-section-subtitle">
              Inspirations, conseils et partages d'expériences
            </span>
          </h2>
          <button className="tourism-view-all">
            <Rss size={20} />
            S'abonner au magazine
          </button>
        </div>
        
        <div className="tourism-blog-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tourism-blog-category ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="tourism-blog-grid">
          {filteredBlogs.map(blog => (
            <div key={blog.id} className="tourism-blog-card">
              <div className="tourism-blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="tourism-blog-category">{blog.category}</span>
                {blog.featured && (
                  <span className="tourism-blog-featured">À la une</span>
                )}
              </div>
              <div className="tourism-blog-content">
                <div className="tourism-blog-meta">
                  <span className="tourism-blog-author">
                    <User size={12} />
                    Par {blog.author}
                  </span>
                  <span className="tourism-blog-date">
                    <Calendar size={12} />
                    {blog.date}
                  </span>
                  <span className="tourism-blog-readtime">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="tourism-blog-title">{blog.title}</h3>
                <p className="tourism-blog-excerpt">{blog.excerpt}</p>
                <div className="tourism-blog-tags">
                  {blog.tags.map(tag => (
                    <span key={tag} className="tourism-blog-tag">#{tag}</span>
                  ))}
                </div>
                <div className="tourism-blog-actions">
                  <button className="tourism-blog-readmore">
                    Lire l'article complet
                    <ArrowRight size={16} />
                  </button>
                  <div className="tourism-blog-stats">
                    <span><MessageCircle size={14} /> {blog.comments}</span>
                    <span><Heart size={14} /> {blog.likes}</span>
                    <button className="tourism-blog-share">
                      <Share2 size={16} />
                    </button>
                    <button className="tourism-blog-save">
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="tourism-blog-cta">
          <div className="tourism-blog-cta-content">
            <h3>Vous avez une histoire à partager ?</h3>
            <p>Rejoignez notre communauté de voyageurs et partagez votre expérience afro-culturelle.</p>
            <button className="tourism-primary-btn">
              <Edit3 size={20} />
              Proposer un article
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ToursSection = ({ tours }) => {
  const [selectedDuration, setSelectedDuration] = useState('all');
  
  const durations = [
    { id: 'all', name: 'Toutes durées' },
    { id: '7', name: '≤ 7 jours' },
    { id: '14', name: '8-14 jours' },
    { id: '21', name: '15-21 jours' },
    { id: '21+', name: '> 21 jours' }
  ];
  
  const filteredTours = selectedDuration === 'all' 
    ? tours 
    : tours.filter(tour => {
        const days = parseInt(tour.duration);
        if (selectedDuration === '7') return days <= 7;
        if (selectedDuration === '14') return days > 7 && days <= 14;
        if (selectedDuration === '21') return days > 14 && days <= 21;
        return days > 21;
      });
  
  return (
    <section className="tourism-tours-section">
      <div className="tourism-container">
        <div className="tourism-section-header">
          <h2 className="tourism-section-title">
            <Navigation size={28} />
            Circuits Organisés
            <span className="tourism-section-subtitle">
              Des itinéraires conçus par nos experts
            </span>
          </h2>
          
          <div className="tourism-tours-filters">
            <div className="tourism-tours-filter-group">
              <label>Durée :</label>
              <div className="tourism-duration-buttons">
                {durations.map(dur => (
                  <button
                    key={dur.id}
                    className={`tourism-duration-btn ${selectedDuration === dur.id ? 'active' : ''}`}
                    onClick={() => setSelectedDuration(dur.id)}
                  >
                    {dur.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="tourism-tours-filter-group">
              <label>Prix maximum :</label>
              <div className="tourism-price-slider">
                <input type="range" min="1000" max="5000" step="500" defaultValue="3000" />
                <span>$3000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tourism-tours-grid">
          {filteredTours.map(tour => (
            <div key={tour.id} className="tourism-tour-card">
              <div className="tourism-tour-image">
                <img src={tour.image} alt={tour.title} />
                <div className="tourism-tour-badges">
                  <div className="tourism-tour-badge duration">
                    <Clock size={12} />
                    {tour.duration}
                  </div>
                  <div className="tourism-tour-badge difficulty">
                    <Activity size={12} />
                    {tour.difficulty}
                  </div>
                  <div className="tourism-tour-badge group">
                    <Users size={12} />
                    {tour.groupSize}
                  </div>
                  {tour.discount && (
                    <div className="tourism-tour-badge discount">
                      <Percent size={12} />
                      {tour.discount}
                    </div>
                  )}
                </div>
                {tour.spotsLeft < 5 && (
                  <div className="tourism-tour-spots">
                    <Users size={12} />
                    {tour.spotsLeft} places restantes
                  </div>
                )}
              </div>
              
              <div className="tourism-tour-content">
                <div className="tourism-tour-header">
                  <h3>{tour.title}</h3>
                  <div className="tourism-tour-price">
                    {tour.discount && (
                      <span className="tourism-price-old">
                        ${parseInt(tour.price.replace('$', '').replace(',', '')) * 1.15}
                      </span>
                    )}
                    <span className="tourism-price">{tour.price}</span>
                    <span className="tourism-price-note">par personne</span>
                  </div>
                </div>
                
                <div className="tourism-tour-countries">
                  {tour.countries.map((country, i) => (
                    <span key={i} className="tourism-tour-country">
                      <MapPin size={14} />
                      {country}
                    </span>
                  ))}
                </div>
                
                <div className="tourism-tour-highlights">
                  <h4>Points forts :</h4>
                  <ul>
                    {tour.highlights.map((highlight, i) => (
                      <li key={i}>
                        <Check size={12} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="tourism-tour-includes">
                  <h4>Ce qui est inclus :</h4>
                  <div className="tourism-includes-grid">
                    {tour.includes.map((item, i) => (
                      <div key={i} className="tourism-include-item">
                        <CheckCircle size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="tourism-tour-dates">
                  <h4>Prochains départs :</h4>
                  <div className="tourism-dates-list">
                    {tour.dates.map((date, i) => (
                      <span key={i} className="tourism-date-item">
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="tourism-tour-footer">
                  <div className="tourism-tour-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{tour.rating}/5</span>
                    <span className="tourism-reviews">(24 avis)</span>
                  </div>
                  <div className="tourism-tour-actions">
                    <button className="tourism-tour-details">
                      <Info size={16} />
                      Détails
                    </button>
                    <button className="tourism-tour-book">
                      Réserver maintenant
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="tourism-tours-cta">
          <div className="tourism-tours-cta-content">
            <h3>Circuit sur mesure ?</h3>
            <p>Créez votre propre itinéraire avec l'aide de nos experts.</p>
            <button className="tourism-primary-btn">
              <MessageSquare size={20} />
              Demander un devis personnalisé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparatorSection = ({ destinations }) => {
  const [comparisonType, setComparisonType] = useState('flights');
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    dates: '',
    passengers: '1'
  });
  
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  
  const handleSearch = () => {
    // Logique de recherche
    console.log('Recherche:', { comparisonType, searchParams });
  };
  
  const toggleDestinationComparison = (dest) => {
    const newSelection = [...selectedDestinations];
    const index = newSelection.findIndex(d => d.id === dest.id);
    if (index > -1) {
      newSelection.splice(index, 1);
    } else {
      if (newSelection.length < 3) {
        newSelection.push(dest);
      }
    }
    setSelectedDestinations(newSelection);
  };
  
  return (
    <section className="tourism-comparator-section">
      <div className="tourism-container">
        <h2 className="tourism-section-title">
          <TrendingUp size={28} />
          Comparateur
          <span className="tourism-section-subtitle">
            Comparez et trouvez les meilleures offres
          </span>
        </h2>
        
        <div className="tourism-comparator-tabs">
          <button 
            className={`tourism-comparator-tab ${comparisonType === 'flights' ? 'active' : ''}`}
            onClick={() => setComparisonType('flights')}
          >
            <Plane size={20} />
            Vols
          </button>
          <button 
            className={`tourism-comparator-tab ${comparisonType === 'hotels' ? 'active' : ''}`}
            onClick={() => setComparisonType('hotels')}
          >
            <Bed size={20} />
            Hôtels
          </button>
          <button 
            className={`tourism-comparator-tab ${comparisonType === 'packages' ? 'active' : ''}`}
            onClick={() => setComparisonType('packages')}
          >
            <ShoppingBag size={20} />
            Forfaits
          </button>
          <button 
            className={`tourism-comparator-tab ${comparisonType === 'cars' ? 'active' : ''}`}
            onClick={() => setComparisonType('cars')}
          >
            <Car size={20} />
            Voitures
          </button>
          <button 
            className={`tourism-comparator-tab ${comparisonType === 'destinations' ? 'active' : ''}`}
            onClick={() => setComparisonType('destinations')}
          >
            <MapPin size={20} />
            Destinations
          </button>
        </div>
        
        <div className="tourism-comparator-content">
          {comparisonType === 'flights' && (
            <div className="tourism-flight-comparator">
              <div className="tourism-comparator-form">
                <div className="tourism-form-row">
                  <div className="tourism-form-group">
                    <label>
                      <Plane size={16} />
                      Départ
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ville ou aéroport de départ"
                      value={searchParams.from}
                      onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
                    />
                  </div>
                  <div className="tourism-form-group">
                    <label>
                      <MapPin size={16} />
                      Destination
                    </label>
                    <input 
                      type="text" 
                      placeholder="Où allez-vous ?"
                      value={searchParams.to}
                      onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="tourism-form-row">
                  <div className="tourism-form-group">
                    <label>
                      <Calendar size={16} />
                      Dates
                    </label>
                    <input 
                      type="text" 
                      placeholder="Aller-retour ou aller simple"
                      value={searchParams.dates}
                      onChange={(e) => setSearchParams({...searchParams, dates: e.target.value})}
                    />
                  </div>
                  <div className="tourism-form-group">
                    <label>
                      <Users size={16} />
                      Passagers
                    </label>
                    <select 
                      value={searchParams.passengers}
                      onChange={(e) => setSearchParams({...searchParams, passengers: e.target.value})}
                    >
                      <option value="1">1 passager</option>
                      <option value="2">2 passagers</option>
                      <option value="3">3 passagers</option>
                      <option value="4">4 passagers</option>
                      <option value="5">5 passagers</option>
                      <option value="6">6 passagers</option>
                    </select>
                  </div>
                </div>
                
                <div className="tourism-form-actions">
                  <button 
                    className="tourism-comparator-search"
                    onClick={handleSearch}
                  >
                    <Search size={20} />
                    Comparer les vols
                  </button>
                  <button className="tourism-comparator-advanced">
                    Options avancées
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              
              <div className="tourism-results-placeholder">
                <div className="tourism-results-header">
                  <h4>Résultats de comparaison</h4>
                  <div className="tourism-sort-by">
                    <span>Trier par :</span>
                    <select>
                      <option>Prix croissant</option>
                      <option>Prix décroissant</option>
                      <option>Durée</option>
                      <option>Compagnie</option>
                    </select>
                  </div>
                </div>
                
                <div className="tourism-results-grid">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="tourism-flight-result">
                      <div className="tourism-flight-airline">
                        <div className="tourism-airline-logo">
                          <Plane size={24} />
                        </div>
                        <div className="tourism-airline-info">
                          <h5>Air France</h5>
                          <span>Vol direct</span>
                        </div>
                      </div>
                      
                      <div className="tourism-flight-schedule">
                        <div className="tourism-flight-time">
                          <strong>14:30</strong>
                          <span>CDG</span>
                        </div>
                        <div className="tourism-flight-duration">
                          <div className="tourism-flight-line"></div>
                          <span>6h 45m</span>
                        </div>
                        <div className="tourism-flight-time">
                          <strong>21:15</strong>
                          <span>DKR</span>
                        </div>
                      </div>
                      
                      <div className="tourism-flight-price">
                        <div className="tourism-price-main">
                          <span className="tourism-currency">$</span>
                          <span className="tourism-amount">489</span>
                        </div>
                        <span className="tourism-price-note">aller-retour</span>
                      </div>
                      
                      <button className="tourism-flight-select">
                        Sélectionner
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {comparisonType === 'destinations' && (
            <div className="tourism-destinations-comparator">
              <h3>Comparer des destinations</h3>
              <p>Sélectionnez jusqu'à 3 destinations pour les comparer</p>
              
              <div className="tourism-destinations-selector">
                {destinations.slice(0, 12).map(dest => (
                  <div 
                    key={dest.id}
                    className={`tourism-destination-select ${selectedDestinations.some(d => d.id === dest.id) ? 'selected' : ''}`}
                    onClick={() => toggleDestinationComparison(dest)}
                  >
                    <img src={dest.image} alt={dest.name} />
                    <div className="tourism-destination-select-content">
                      <h4>{dest.name}</h4>
                      <span>{dest.capital}</span>
                    </div>
                    {selectedDestinations.some(d => d.id === dest.id) && (
                      <div className="tourism-destination-check">
                        <Check size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {selectedDestinations.length > 0 && (
                <div className="tourism-comparison-results">
                  <h4>Comparaison</h4>
                  <div className="tourism-comparison-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Critères</th>
                          {selectedDestinations.map(dest => (
                            <th key={dest.id}>{dest.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Note</td>
                          {selectedDestinations.map(dest => (
                            <td key={dest.id}>
                              <Star size={14} fill="currentColor" />
                              {dest.rating}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td>Meilleure période</td>
                          {selectedDestinations.map(dest => (
                            <td key={dest.id}>{dest.practicalInfo?.bestTime || 'N/A'}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Budget moyen/jour</td>
                          {selectedDestinations.map(dest => (
                            <td key={dest.id}>$50-$150</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Langues</td>
                          {selectedDestinations.map(dest => (
                            <td key={dest.id}>{dest.practicalInfo?.language?.split(',')[0] || 'N/A'}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Visa</td>
                          {selectedDestinations.map(dest => (
                            <td key={dest.id}>{dest.practicalInfo?.visa || 'N/A'}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="tourism-promotions">
          <h3>
            <Zap size={24} />
            Promotions spéciales
          </h3>
          <div className="tourism-promo-cards">
            {[
              { 
                title: "Early Bird 2024", 
                discount: "-30%", 
                code: "EARLY2024",
                description: "Réservez 3 mois à l'avance",
                validUntil: "31/12/2024"
              },
              { 
                title: "Last Minute", 
                discount: "-40%", 
                code: "LASTMIN40",
                description: "Départ dans les 15 jours",
                validUntil: "Dernière minute"
              },
              { 
                title: "Groupe & Famille", 
                discount: "-25%", 
                code: "GROUP25",
                description: "À partir de 6 personnes",
                validUntil: "31/12/2024"
              },
              { 
                title: "Honeymoon", 
                discount: "-20%", 
                code: "HONEY20",
                description: "Forfaits romantiques",
                validUntil: "31/12/2024"
              }
            ].map((promo, i) => (
              <div key={i} className="tourism-promo-card">
                <div className="tourism-promo-header">
                  <div className="tourism-promo-badge">{promo.discount}</div>
                  <h4>{promo.title}</h4>
                </div>
                <p className="tourism-promo-desc">{promo.description}</p>
                <div className="tourism-promo-code">
                  <span>Code :</span>
                  <strong>{promo.code}</strong>
                </div>
                <div className="tourism-promo-footer">
                  <small>Valable jusqu'au {promo.validUntil}</small>
                  <button className="tourism-promo-apply">
                    Appliquer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FavoritesSection = ({ destinations, onSelect, onToggleFavorite, favorites }) => {
  const [showExportModal, setShowExportModal] = useState(false);
  
  if (destinations.length === 0) {
    return (
      <section className="tourism-favorites-section">
        <div className="tourism-container">
          <div className="tourism-no-favorites">
            <Heart size={80} />
            <h3>Vous n'avez pas encore de favoris</h3>
            <p>Explorez nos destinations et ajoutez vos coups de cœur</p>
            <button className="tourism-explore-btn">
              Explorer les destinations
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="tourism-favorites-section">
      <div className="tourism-container">
        <div className="tourism-section-header">
          <h2 className="tourism-section-title">
            <Heart size={28} />
            Mes Favoris
            <span className="tourism-section-subtitle">
              {destinations.length} destination(s) sauvegardée(s)
            </span>
          </h2>
          <div className="tourism-favorites-actions-header">
            <button 
              className="tourism-clear-favorites"
              onClick={() => {
                if (window.confirm('Voulez-vous vraiment effacer tous vos favoris ?')) {
                  // Logique pour effacer tous les favoris
                }
              }}
            >
              <Trash2 size={20} />
              Tout effacer
            </button>
            <button 
              className="tourism-export-favorites"
              onClick={() => setShowExportModal(true)}
            >
              <Download size={20} />
              Exporter
            </button>
          </div>
        </div>
        
        <div className="tourism-favorites-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="tourism-favorite-card">
              <div className="tourism-favorite-image">
                <img src={destination.image} alt={destination.name} />
                <button 
                  className="tourism-favorite-remove"
                  onClick={(e) => onToggleFavorite(destination.id, e)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="tourism-favorite-content">
                <h3>{destination.name}</h3>
                <div className="tourism-favorite-meta">
                  <span>
                    <MapPin size={12} />
                    {destination.capital}
                  </span>
                  <span>
                    <Star size={12} />
                    {destination.rating}/5
                  </span>
                  <span>
                    <Compass size={12} />
                    {destination.highlights.culture.length} sites culturels
                  </span>
                </div>
                <div className="tourism-favorite-actions">
                  <button 
                    className="tourism-favorite-view"
                    onClick={() => onSelect(destination)}
                  >
                    Voir les détails
                  </button>
                  <button 
                    className="tourism-favorite-share"
                    onClick={() => {
                      // Logique de partage
                      navigator.clipboard.writeText(
                        `Découvrez ${destination.name} sur Afro Travel Experience!`
                      );
                      alert('Lien copié dans le presse-papier');
                    }}
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="tourism-favorites-actions">
          <button className="tourism-primary-btn" onClick={() => setShowExportModal(true)}>
            <Download size={20} />
            Exporter ma liste
          </button>
          <button className="tourism-secondary-btn">
            <Share2 size={20} />
            Partager avec des amis
          </button>
        </div>
      </div>
      
      {/* Modal d'export */}
      {showExportModal && (
        <div className="tourism-modal-overlay" onClick={() => setShowExportModal(false)}>
          <div className="tourism-export-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tourism-modal-close" onClick={() => setShowExportModal(false)}>
              <X size={24} />
            </button>
            
            <h3>Exporter vos favoris</h3>
            
            <div className="tourism-export-options">
              <div className="tourism-export-option">
                <FileText size={24} />
                <div>
                  <h4>Format PDF</h4>
                  <p>Document structuré avec photos et descriptions</p>
                </div>
                <button className="tourism-export-btn">
                  <DownloadCloud size={20} />
                  Exporter
                </button>
              </div>
              
              <div className="tourism-export-option">
                <FileText size={24} />
                <div>
                  <h4>Format Excel</h4>
                  <p>Tableau avec toutes les informations pratiques</p>
                </div>
                <button className="tourism-export-btn">
                  <DownloadCloud size={20} />
                  Exporter
                </button>
              </div>
              
              <div className="tourism-export-option">
                <Share2 size={24} />
                <div>
                  <h4>Partager par email</h4>
                  <p>Envoyer la liste à vos amis par email</p>
                </div>
                <button className="tourism-export-btn">
                  <Mail size={20} />
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TourismExplorer;