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
    regions: [
      {
        name: "Ouémé",
        capital: "Porto-Novo",
        description: "Région économique et politique avec la capitale Porto-Novo",
        highlights: ["Palais Royal", "Musée da Silva", "Marché Dantokpa"],
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800"
      },
      {
        name: "Atlantique",
        capital: "Cotonou",
        description: "Région côtière avec la capitale économique Cotonou",
        highlights: ["Plages de Fidjrossè", "Lac Nokoué", "Port de Cotonou"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Borgou",
        capital: "Parakou",
        description: "Région du nord avec Parakou comme carrefour commercial",
        highlights: ["Marché de Parakou", "Parc National du W", "Montagnes de l'Atakora"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      }
    ],
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
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-100"
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
  // ... (Les autres pays avec la même structure)
];

// Afrique Centrale
const centralAfrica = [
  {
    id: 17,
    name: "Cameroun",
    capital: "Yaoundé",
    majorCities: ["Douala", "Bamenda", "Garoua", "Maroua", "Bafoussam", "Ngaoundéré", "Bertoua", "Ebolowa", "Kumba", "Limbe"],
    regions: [
      {
        name: "Littoral",
        capital: "Douala",
        description: "Région côtière avec le plus grand port d'Afrique centrale",
        highlights: ["Plages de Limbe", "Mont Cameroun", "Île de Manoka"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Ouest",
        capital: "Bafoussam",
        description: "Région des hauts plateaux et des chefferies Bamiléké",
        highlights: ["Chefferies Bamiléké", "Lacs de cratères", "Plantations de café"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Nord",
        capital: "Garoua",
        description: "Région sahélienne avec des parcs nationaux",
        highlights: ["Parc National de Waza", "Parc de la Bénoué", "Culture Peule"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      }
    ],
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
  // ... (Les autres pays)
];

// Afrique de l'Est
const eastAfrica = [
  {
    id: 26,
    name: "Kenya",
    capital: "Nairobi",
    majorCities: ["Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega", "Nyeri"],
    regions: [
      {
        name: "Rift Valley",
        capital: "Nakuru",
        description: "Vallée du Rift avec lacs et parcs nationaux",
        highlights: ["Lac Nakuru", "Lac Naivasha", "Hells Gate National Park"],
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
      },
      {
        name: "Coast",
        capital: "Mombasa",
        description: "Région côtière avec plages et culture swahilie",
        highlights: ["Plages de Diani", "Vieille ville de Mombasa", "Réserve marine"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Central",
        capital: "Nyeri",
        description: "Région agricole avec le Mont Kenya",
        highlights: ["Mont Kenya", "Plantations de thé", "Réserve d'Aberdare"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      }
    ],
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
  // ... (Les autres pays)
];

// Afrique Australe
const southernAfrica = [
  {
    id: 37,
    name: "Afrique du Sud",
    capital: "Pretoria",
    majorCities: ["Johannesburg", "Le Cap", "Durban", "Port Elizabeth", "Bloemfontein", "East London", "Pietermaritzburg", "Polokwane", "Nelspruit", "Kimberley"],
    regions: [
      {
        name: "Western Cape",
        capital: "Le Cap",
        description: "Région avec Table Mountain et vignobles",
        highlights: ["Table Mountain", "Cape Point", "Winelands"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Gauteng",
        capital: "Johannesburg",
        description: "Région économique avec Johannesburg et Pretoria",
        highlights: ["Soweto", "Musée de l'Apartheid", "Cullinan Diamond Mine"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "KwaZulu-Natal",
        capital: "Durban",
        description: "Région côtière avec plages et montagnes",
        highlights: ["Drakensberg", "Plages de Durban", "Battlefields Route"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      }
    ],
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
  // ... (Les autres pays)
];

// Pays Afro-Américains
const afroAmericanCountries = [
  {
    id: 50,
    name: "Haïti",
    capital: "Port-au-Prince",
    majorCities: ["Cap-Haïtien", "Gonaïves", "Jacmel", "Les Cayes", "Saint-Marc", "Jérémie", "Miragoâne", "Port-de-Paix", "Petion-Ville", "Delmas"],
    regions: [
      {
        name: "Ouest",
        capital: "Port-au-Prince",
        description: "Région avec la capitale et principales attractions",
        highlights: ["Citadelle Laferrière", "Musée du Panthéon", "Plage de Labadie"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Nord",
        capital: "Cap-Haïtien",
        description: "Région historique avec citadelle et palais",
        highlights: ["Sans-Souci Palace", "Plage de Cormier", "Île de la Tortue"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      },
      {
        name: "Sud",
        capital: "Les Cayes",
        description: "Région côtière avec plages et culture créole",
        highlights: ["Île à Vache", "Bassin Bleu", "Côte des Arcadins"],
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
      }
    ],
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
  // ... (Les autres pays)
];

// Combiner toutes les destinations
const allDestinations = [
  ...westAfrica,
  ...centralAfrica,
  ...eastAfrica,
  ...southernAfrica,
  ...afroAmericanCountries
];

// ==================== COMPOSANT PRINCIPAL ====================
const TourismExplorer = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [isScrolled, setIsScrolled] = useState(false);

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
    { id: 'heritage', name: 'Patrimoine UNESCO', icon: <Award size={16} /> }
  ];

  return (
    <div className="tourism-explorer-app">
      {/* Header */}
      <header className={`tourism-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="tourism-container">
          <div className="tourism-header-content">
            <div className="tourism-logo">
              <Globe size={32} />
              <div>
                <h1>AFRO TRAVEL EXPERIENCE</h1>
                <p>Votre guide de voyage afro-culturel</p>
              </div>
            </div>
            
            <nav className="tourism-nav">
              <button className="tourism-nav-item active">
                <Globe size={20} />
                Destinations
              </button>
              <button className="tourism-nav-item">
                <Navigation size={20} />
                Circuits
              </button>
              <button className="tourism-nav-item">
                <Sparkles size={20} />
                Expériences
              </button>
              <button className="tourism-nav-item">
                <BookOpen size={20} />
                Blog
              </button>
              <button className="tourism-nav-item">
                <Users size={20} />
                Contact
              </button>
            </nav>
            
            <div className="tourism-header-actions">
              <button className="tourism-favorites-btn">
                <Heart size={20} />
                <span className="tourism-favorites-count">{favorites.size}</span>
              </button>
              <button className="tourism-account-btn">
                <User size={20} />
              </button>
              <button className="tourism-menu-btn">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              Explorez la <span className="tourism-hero-highlight">Richesse</span>
              <br />
              de l'Afrique et sa <span className="tourism-hero-highlight">Diaspora</span>
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
                <div className="tourism-quick-buttons">
                  {regions.map(region => (
                    <button 
                      key={region.id}
                      className={`tourism-quick-btn ${selectedRegion === region.id ? 'active' : ''}`}
                      onClick={() => setSelectedRegion(selectedRegion === region.id ? 'all' : region.id)}
                    >
                      {region.name}
                      <span className="tourism-quick-count">{region.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="tourism-main">
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
              </div>
            </div>
            
            <div className="tourism-filters-grid">
              <div className="tourism-filter-group">
                <label className="tourism-filter-label">
                  <Globe size={20} />
                  Région
                </label>
                <div className="tourism-region-buttons">
                  {regions.map(region => (
                    <button
                      key={region.id}
                      className={`tourism-region-btn ${selectedRegion === region.id ? 'active' : ''}`}
                      onClick={() => setSelectedRegion(region.id)}
                    >
                      {region.name}
                      <span className="tourism-region-count">{region.count}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="tourism-filter-group">
                <label className="tourism-filter-label">
                  <Compass size={20} />
                  Thématique
                </label>
                <div className="tourism-theme-buttons">
                  {themes.map(theme => (
                    <button
                      key={theme.id}
                      className={`tourism-theme-btn ${selectedTheme === theme.id ? 'active' : ''}`}
                      onClick={() => setSelectedTheme(theme.id)}
                    >
                      {theme.icon}
                      {theme.name}
                    </button>
                  ))}
                </div>
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
      </main>

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
        </div>
      </div>
      
      <div className="tourism-card-content">
        <h3 className="tourism-card-title">{destination.name}</h3>
        
        <div className="tourism-card-highlights">
          <div className="tourism-highlight">
            <Castle size={14} />
            <span>{destination.highlights.culture[0]}</span>
          </div>
          <div className="tourism-highlight">
            <Mountain size={14} />
            <span>{destination.highlights.nature[0]}</span>
          </div>
        </div>
        
        <div className="tourism-card-meta">
          <div className="tourism-meta-item">
            <Users size={12} />
            <span>{destination.majorCities.length} villes majeures</span>
          </div>
          <div className="tourism-meta-item">
            <Map size={12} />
            <span>{destination.regions.length} régions</span>
          </div>
        </div>
        
        <button className="tourism-card-btn">
          Explorer cette destination
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const CountryModal = ({ country, onClose, isFavorite, onToggleFavorite }) => {
  const [activeTab, setActiveTab] = useState('overview');
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
    console.log('Réservation soumise:', { country: country.name, ...bookingData });
    alert('Votre demande de réservation a été envoyée avec succès!');
    setBookingData({
      name: '',
      email: '',
      phone: '',
      dates: '',
      travelers: 1,
      message: ''
    });
  };

  return (
    <div className="tourism-modal-overlay" onClick={onClose}>
      <div className="tourism-country-modal" onClick={(e) => e.stopPropagation()}>
        <button className="tourism-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        {/* Header du Modal */}
        <div className="tourism-modal-header">
          <div className="tourism-modal-hero">
            <img src={country.image} alt={country.name} />
            <div className="tourism-modal-hero-content">
              <div className="tourism-modal-title-section">
                <h1>{country.name}</h1>
                <div className="tourism-modal-rating">
                  <Star size={20} fill="currentColor" />
                  <span>{country.rating}/5</span>
                  <span className="tourism-modal-reviews">({country.testimonials?.length || 12} avis)</span>
                </div>
              </div>
              
              <div className="tourism-modal-subtitle">
                <div className="tourism-modal-location">
                  <MapPin size={20} />
                  <div>
                    <span className="tourism-modal-label">Capitale</span>
                    <span className="tourism-modal-value">{country.capital}</span>
                  </div>
                </div>
                <div className="tourism-modal-location">
                  <Globe size={20} />
                  <div>
                    <span className="tourism-modal-label">Régions</span>
                    <span className="tourism-modal-value">{country.regions.length}</span>
                  </div>
                </div>
                <div className="tourism-modal-location">
                  <Users size={20} />
                  <div>
                    <span className="tourism-modal-label">Villes principales</span>
                    <span className="tourism-modal-value">{country.majorCities.length}</span>
                  </div>
                </div>
              </div>
              
              <div className="tourism-modal-actions">
                <button 
                  className={`tourism-favorite-action ${isFavorite ? 'active' : ''}`}
                  onClick={() => onToggleFavorite(country.id, { stopPropagation: () => {} })}
                >
                  <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                  {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
                <button className="tourism-share-action">
                  <Share2 size={20} />
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tourism-modal-tabs">
          <button 
            className={`tourism-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Compass size={20} />
            Vue d'ensemble
          </button>
          <button 
            className={`tourism-tab ${activeTab === 'regions' ? 'active' : ''}`}
            onClick={() => setActiveTab('regions')}
          >
            <Map size={20} />
            Régions & Villes
          </button>
          <button 
            className={`tourism-tab ${activeTab === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveTab('activities')}
          >
            <Navigation size={20} />
            Activités
          </button>
          <button 
            className={`tourism-tab ${activeTab === 'practical' ? 'active' : ''}`}
            onClick={() => setActiveTab('practical')}
          >
            <Info size={20} />
            Infos pratiques
          </button>
          <button 
            className={`tourism-tab ${activeTab === 'gastronomy' ? 'active' : ''}`}
            onClick={() => setActiveTab('gastronomy')}
          >
            <Utensils size={20} />
            Gastronomie
          </button>
          <button 
            className={`tourism-tab ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            <MessageCircle size={20} />
            Témoignages
          </button>
          <button 
            className={`tourism-tab ${activeTab === 'booking' ? 'active' : ''}`}
            onClick={() => setActiveTab('booking')}
          >
            <Calendar size={20} />
            Réserver
          </button>
        </div>

        {/* Contenu du Modal */}
        <div className="tourism-modal-content">
          {/* Vue d'ensemble */}
          {activeTab === 'overview' && (
            <div className="tourism-tab-content">
              <div className="tourism-overview-section">
                <h2>Découvrez {country.name}</h2>
                <p className="tourism-country-description">
                  {country.name} est une destination fascinante qui combine richesses culturelles, 
                  paysages naturels époustouflants et traditions ancestrales. De la capitale 
                  {country.capital} aux différentes régions, chaque coin du pays révèle une 
                  facette unique de son identité.
                </p>
                
                <div className="tourism-highlights-grid">
                  <div className="tourism-highlight-category">
                    <div className="tourism-category-header">
                      <Castle size={24} />
                      <h3>Culture & Patrimoine</h3>
                    </div>
                    <ul>
                      {country.highlights.culture.slice(0, 5).map((item, i) => (
                        <li key={i}>
                          <Check size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="tourism-see-more">
                      Voir plus ({country.highlights.culture.length})
                    </button>
                  </div>
                  
                  <div className="tourism-highlight-category">
                    <div className="tourism-category-header">
                      <Mountain size={24} />
                      <h3>Nature & Aventure</h3>
                    </div>
                    <ul>
                      {country.highlights.nature.slice(0, 5).map((item, i) => (
                        <li key={i}>
                          <Check size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="tourism-see-more">
                      Voir plus ({country.highlights.nature.length})
                    </button>
                  </div>
                  
                  <div className="tourism-highlight-category">
                    <div className="tourism-category-header">
                      <Utensils size={24} />
                      <h3>Gastronomie</h3>
                    </div>
                    <ul>
                      {country.highlights.gastronomy.slice(0, 5).map((item, i) => (
                        <li key={i}>
                          <Check size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="tourism-see-more">
                      Voir plus ({country.highlights.gastronomy.length})
                    </button>
                  </div>
                  
                  <div className="tourism-highlight-category">
                    <div className="tourism-category-header">
                      <Compass size={24} />
                      <h3>Aventures & Safaris</h3>
                    </div>
                    <ul>
                      {country.highlights.adventure?.slice(0, 5).map((item, i) => (
                        <li key={i}>
                          <Check size={16} />
                          {item}
                        </li>
                      )) || country.highlights.nature.slice(0, 5).map((item, i) => (
                        <li key={i}>
                          <Check size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="tourism-see-more">
                      Voir plus ({country.highlights.adventure?.length || country.highlights.nature.length})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Régions & Villes */}
          {activeTab === 'regions' && (
            <div className="tourism-tab-content">
              <div className="tourism-regions-section">
                <h2>Régions de {country.name}</h2>
                <p className="tourism-section-description">
                  Découvrez la diversité géographique et culturelle de {country.name} à travers ses différentes régions.
                </p>
                
                <div className="tourism-regions-grid">
                  {country.regions.map((region, index) => (
                    <div key={index} className="tourism-region-card">
                      <div className="tourism-region-image">
                        <img src={region.image} alt={region.name} />
                      </div>
                      <div className="tourism-region-content">
                        <div className="tourism-region-header">
                          <h3>{region.name}</h3>
                          <span className="tourism-region-capital">
                            <MapPin size={16} />
                            {region.capital}
                          </span>
                        </div>
                        <p className="tourism-region-description">{region.description}</p>
                        <div className="tourism-region-highlights">
                          <h4>Points forts :</h4>
                          <ul>
                            {region.highlights.map((highlight, i) => (
                              <li key={i}>
                                <Star size={12} />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="tourism-cities-section">
                  <h3>Villes principales</h3>
                  <div className="tourism-cities-grid">
                    {country.majorCities.map((city, index) => (
                      <div key={index} className="tourism-city-card">
                        <div className="tourism-city-header">
                          <MapPin size={20} />
                          <h4>{city}</h4>
                        </div>
                        <p className="tourism-city-description">
                          Ville importante de {country.name} offrant des attractions culturelles 
                          et touristiques uniques.
                        </p>
                        <button className="tourism-city-explore">
                          Explorer {city}
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activités */}
          {activeTab === 'activities' && (
            <div className="tourism-tab-content">
              <div className="tourism-activities-section">
                <h2>Activités & Expériences</h2>
                <p className="tourism-section-description">
                  Vivez des expériences uniques en {country.name} avec nos activités organisées.
                </p>
                
                {country.experiences ? (
                  <div className="tourism-experiences-grid">
                    {country.experiences.map((exp, index) => (
                      <div key={index} className="tourism-experience-card">
                        <div className="tourism-experience-header">
                          <div className="tourism-experience-type">
                            {exp.type === 'culture' && <Castle size={20} />}
                            {exp.type === 'nature' && <Mountain size={20} />}
                            {exp.type === 'gastronomy' && <Utensils size={20} />}
                            <span>{exp.type}</span>
                          </div>
                          <div className="tourism-experience-price">{exp.price}</div>
                        </div>
                        <h3>{exp.title}</h3>
                        <p className="tourism-experience-description">{exp.description}</p>
                        <div className="tourism-experience-meta">
                          <span><Clock size={16} /> {exp.duration}</span>
                          <span><Activity size={16} /> {exp.difficulty}</span>
                          <span><Calendar size={16} /> {exp.season}</span>
                        </div>
                        <div className="tourism-experience-includes">
                          <h4>Inclus :</h4>
                          <ul>
                            {exp.includes.map((item, i) => (
                              <li key={i}>
                                <CheckCircle size={14} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="tourism-experience-book">
                          Réserver cette expérience
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="tourism-activities-grid">
                    {[
                      {
                        title: "Visite culturelle guidée",
                        description: "Découverte des sites historiques et culturels majeurs",
                        icon: <Castle size={24} />,
                        duration: "1 journée",
                        price: "À partir de $50"
                      },
                      {
                        title: "Safari nature",
                        description: "Observation de la faune dans les parcs nationaux",
                        icon: <Mountain size={24} />,
                        duration: "2-3 jours",
                        price: "À partir de $200"
                      },
                      {
                        title: "Atelier gastronomique",
                        description: "Apprentissage de la cuisine locale traditionnelle",
                        icon: <Utensils size={24} />,
                        duration: "4 heures",
                        price: "À partir de $35"
                      },
                      {
                        title: "Randonnée guidée",
                        description: "Exploration des paysages naturels avec guide local",
                        icon: <Compass size={24} />,
                        duration: "1 journée",
                        price: "À partir de $40"
                      }
                    ].map((activity, index) => (
                      <div key={index} className="tourism-activity-card">
                        <div className="tourism-activity-icon">
                          {activity.icon}
                        </div>
                        <div className="tourism-activity-content">
                          <h3>{activity.title}</h3>
                          <p>{activity.description}</p>
                          <div className="tourism-activity-footer">
                            <span className="tourism-activity-duration">
                              <Clock size={14} />
                              {activity.duration}
                            </span>
                            <span className="tourism-activity-price">{activity.price}</span>
                          </div>
                          <button className="tourism-activity-book">
                            Réserver
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Infos pratiques */}
          {activeTab === 'practical' && (
            <div className="tourism-tab-content">
              <div className="tourism-practical-section">
                <h2>Informations pratiques</h2>
                
                <div className="tourism-info-grid">
                  <div className="tourism-info-card">
                    <div className="tourism-info-header">
                      <Calendar size={24} />
                      <h3>Meilleure période</h3>
                    </div>
                    <div className="tourism-info-content">
                      <p>{country.practicalInfo?.bestTime || "Novembre à Mars"}</p>
                      <div className="tourism-climate-details">
                        <div className="tourism-climate-item">
                          <Thermometer size={20} />
                          <div>
                            <span>Température</span>
                            <strong>{country.practicalInfo?.climate?.temperature || "25°C - 32°C"}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tourism-info-card">
                    <div className="tourism-info-header">
                      <DollarSign size={24} />
                      <h3>Budget & Devise</h3>
                    </div>
                    <div className="tourism-info-content">
                      <div className="tourism-currency-info">
                        <strong>Devise :</strong>
                        <span>{country.practicalInfo?.currency || "Franc CFA (XOF)"}</span>
                      </div>
                      <div className="tourism-budget-estimate">
                        <div className="tourism-budget-item">
                          <span>Budget économique :</span>
                          <strong>$30-$50/jour</strong>
                        </div>
                        <div className="tourism-budget-item">
                          <span>Budget moyen :</span>
                          <strong>$50-$100/jour</strong>
                        </div>
                        <div className="tourism-budget-item">
                          <span>Budget confort :</span>
                          <strong>$100-$200/jour</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tourism-info-card">
                    <div className="tourism-info-header">
                      <FileText size={24} />
                      <h3>Formalités</h3>
                    </div>
                    <div className="tourism-info-content">
                      <div className="tourism-formality-item">
                        <strong>Visa :</strong>
                        <span>{country.practicalInfo?.visa || "À vérifier selon nationalité"}</span>
                      </div>
                      <div className="tourism-formality-item">
                        <strong>Langues :</strong>
                        <span>{country.practicalInfo?.language || "Français, langues locales"}</span>
                      </div>
                      <div className="tourism-formality-item">
                        <strong>Santé :</strong>
                        <span>{country.practicalInfo?.health || "Vaccins recommandés"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tourism-info-card">
                    <div className="tourism-info-header">
                      <Car size={24} />
                      <h3>Transport</h3>
                    </div>
                    <div className="tourism-info-content">
                      <div className="tourism-transport-item">
                        <strong>Arrivée :</strong>
                        <span>{country.practicalInfo?.transport?.arrival || "Aéroport international"}</span>
                      </div>
                      <div className="tourism-transport-item">
                        <strong>Sur place :</strong>
                        <span>{country.practicalInfo?.transport?.local || "Taxis, bus, location"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tourism-info-card">
                    <div className="tourism-info-header">
                      <Bed size={24} />
                      <h3>Hébergement</h3>
                    </div>
                    <div className="tourism-info-content">
                      <div className="tourism-accommodation-list">
                        {(country.practicalInfo?.accommodation || [
                          "Hôtels 3-4 étoiles",
                          "Écolodges",
                          "Maisons d'hôtes",
                          "Auberges"
                        ]).map((item, index) => (
                          <div key={index} className="tourism-accommodation-item">
                            <Check size={16} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="tourism-info-card">
                    <div className="tourism-info-header">
                      <Shield size={24} />
                      <h3>Sécurité & Conseils</h3>
                    </div>
                    <div className="tourism-info-content">
                      <div className="tourism-safety-info">
                        <p>{country.practicalInfo?.safety || "Destination généralement sûre"}</p>
                        <div className="tourism-tips-list">
                          {(country.tips || [
                            "Emportez des vêtements légers",
                            "Crème solaire indispensable",
                            "Anti-moustiques recommandé",
                            "Eau en bouteille conseillée"
                          ]).map((tip, index) => (
                            <div key={index} className="tourism-tip-item">
                              <Lightbulb size={16} />
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gastronomie */}
          {activeTab === 'gastronomy' && (
            <div className="tourism-tab-content">
              <div className="tourism-gastronomy-section">
                <h2>Gastronomie de {country.name}</h2>
                <p className="tourism-section-description">
                  Découvrez les saveurs authentiques et les spécialités culinaires de {country.name}.
                </p>
                
                <div className="tourism-dishes-grid">
                  {country.highlights.gastronomy.map((dish, index) => (
                    <div key={index} className="tourism-dish-card">
                      <div className="tourism-dish-image">
                        <Utensils size={40} />
                      </div>
                      <div className="tourism-dish-content">
                        <h3>{dish}</h3>
                        <p className="tourism-dish-description">
                          Plat traditionnel à ne pas manquer lors de votre visite en {country.name}.
                        </p>
                        <div className="tourism-dish-tags">
                          <span className="tourism-dish-tag">Traditionnel</span>
                          <span className="tourism-dish-tag">Local</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="tourism-cooking-class">
                  <div className="tourism-cooking-content">
                    <h3>Atelier de cuisine locale</h3>
                    <p>Apprenez à préparer les plats traditionnels de {country.name} avec un chef local.</p>
                    <div className="tourism-cooking-details">
                      <span><Clock size={16} /> 3-4 heures</span>
                      <span><Users size={16} /> 2-6 personnes</span>
                      <span><DollarSign size={16} /> À partir de $50</span>
                    </div>
                    <button className="tourism-cooking-book">
                      Réserver un atelier
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Témoignages */}
          {activeTab === 'testimonials' && (
            <div className="tourism-tab-content">
              <div className="tourism-testimonials-section">
                <h2>Témoignages des voyageurs</h2>
                <p className="tourism-section-description">
                  Découvrez les expériences des voyageurs qui ont visité {country.name}.
                </p>
                
                <div className="tourism-testimonials-grid">
                  {(country.testimonials || [
                    {
                      name: "Jean D.",
                      text: "Une expérience incroyable ! La culture et l'accueil sont exceptionnels.",
                      rating: 5,
                      date: "Mars 2024",
                      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                    },
                    {
                      name: "Marie L.",
                      text: "Les paysages sont à couper le souffle. Je recommande vivement !",
                      rating: 4,
                      date: "Février 2024",
                      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
                    },
                    {
                      name: "Thomas K.",
                      text: "La gastronomie locale est une véritable découverte. Un voyage mémorable.",
                      rating: 5,
                      date: "Janvier 2024",
                      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                    }
                  ]).map((testimonial, index) => (
                    <div key={index} className="tourism-testimonial-card">
                      <div className="tourism-testimonial-header">
                        <div className="tourism-testimonial-avatar">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                        <div className="tourism-testimonial-info">
                          <h4>{testimonial.name}</h4>
                          <div className="tourism-testimonial-rating">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                fill={i < testimonial.rating ? "currentColor" : "none"} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="tourism-testimonial-date">{testimonial.date}</span>
                      </div>
                      <p className="tourism-testimonial-text">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
                
                <div className="tourism-add-testimonial">
                  <h3>Partagez votre expérience</h3>
                  <p>Vous avez visité {country.name} ? Partagez votre témoignage avec notre communauté.</p>
                  <button className="tourism-testimonial-btn">
                    <Edit3 size={20} />
                    Ajouter mon témoignage
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Formulaire de réservation */}
          {activeTab === 'booking' && (
            <div className="tourism-tab-content">
              <div className="tourism-booking-section">
                <h2>Réservez votre séjour en {country.name}</h2>
                <p className="tourism-section-description">
                  Planifiez votre voyage en {country.name} avec notre équipe d'experts.
                </p>
                
                <form className="tourism-booking-form" onSubmit={handleBookingSubmit}>
                  <div className="tourism-form-row">
                    <div className="tourism-form-group">
                      <label>
                        <User size={20} />
                        Nom complet
                      </label>
                      <input 
                        type="text" 
                        placeholder="Votre nom et prénom"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="tourism-form-group">
                      <label>
                        <Mail size={20} />
                        Email
                      </label>
                      <input 
                        type="email" 
                        placeholder="votre@email.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="tourism-form-row">
                    <div className="tourism-form-group">
                      <label>
                        <Phone size={20} />
                        Téléphone
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+33 1 23 45 67 89"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="tourism-form-group">
                      <label>
                        <Users size={20} />
                        Nombre de voyageurs
                      </label>
                      <select 
                        value={bookingData.travelers}
                        onChange={(e) => setBookingData({...bookingData, travelers: parseInt(e.target.value)})}
                        required
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="tourism-form-group">
                    <label>
                      <Calendar size={20} />
                      Dates souhaitées
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ex: 15/06/2024 - 30/06/2024"
                      value={bookingData.dates}
                      onChange={(e) => setBookingData({...bookingData, dates: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="tourism-form-group">
                    <label>
                      <MessageCircle size={20} />
                      Votre message
                    </label>
                    <textarea 
                      placeholder="Précisez vos centres d'intérêt, préférences d'hébergement, budget approximatif..."
                      rows="4"
                      value={bookingData.message}
                      onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                    />
                  </div>
                  
                  <div className="tourism-form-actions">
                    <button type="submit" className="tourism-submit-btn">
                      <CheckCircle size={20} />
                      Envoyer ma demande
                    </button>
                    <p className="tourism-form-note">
                      Un conseiller vous contactera dans les 24 heures pour personnaliser votre séjour.
                    </p>
                  </div>
                </form>
                
                <div className="tourism-contact-info">
                  <h3>Contact direct</h3>
                  <div className="tourism-contact-methods">
                    <div className="tourism-contact-item">
                      <Phone size={20} />
                      <div>
                        <span>Téléphone</span>
                        <strong>+33 1 23 45 67 89</strong>
                      </div>
                    </div>
                    <div className="tourism-contact-item">
                      <Mail size={20} />
                      <div>
                        <span>Email</span>
                        <strong>contact@afrotravel.com</strong>
                      </div>
                    </div>
                    <div className="tourism-contact-item">
                      <Clock size={20} />
                      <div>
                        <span>Horaires</span>
                        <strong>Lun-Ven 9h-18h</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourismExplorer;