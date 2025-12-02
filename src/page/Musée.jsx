// MuséePersonnalités.jsx — Version ULTIME avec toutes les spécialités
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  MapPin, 
  Users, 
  Book, 
  Award, 
  Globe, 
  ArrowRight, 
  ChevronDown, 
  Star, 
  User, 
  Heart, 
  Share2, 
  Eye, 
  Zap, 
  Target, 
  TrendingUp, 
  Palette, 
  Music, 
  Scissors, 
  Code, 
  Leaf, 
  Atom, 
  Brain, 
  Calculator, 
  Camera, 
  BookOpen, 
  Sparkles, 
  Plus, 
  Upload, 
  Info, 
  Trophy, 
  Cpu, 
  Mountain, 
  Cloud, 
  Satellite, 
  DollarSign, 
  BrainCircuit,
  Activity,
  GraduationCap,
  Film,
  Gamepad2,
  Newspaper,
  Heart as HeartIcon,
  Scale,
  Crown,
  Feather,
  Mic,
  Drum,
  Guitar,
  Piano,
  Paintbrush,
  Video,
  Tv,
  Radio,
  Megaphone,
  Mail,
  MessageSquare,
  PenTool,
  Compass,
  Mountain as MountainIcon,
  Tent,
  Bike,
  Car,
  Plane,
  Ship,
  Dumbbell,
  Waves,
  Snowflake,
  Thermometer,
  Umbrella,
  TreePine,
  Flower2,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit
} from 'lucide-react';
import './musée.css';

// Icônes personnalisées
const MythologyIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const TheaterIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M4 9h16M4 15h16M12 4v16"/>
  </svg>
);

const Microscope = Activity;

const MuséePersonnalités = () => {
  const [activeTab, setActiveTab] = useState('tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedSubDiscipline, setSelectedSubDiscipline] = useState('');
  const [selectedAward, setSelectedAward] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStartYear, setSelectedStartYear] = useState('');
  const [selectedEndYear, setSelectedEndYear] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newPersonality, setNewPersonality] = useState({
    name: '',
    country: '',
    category: 'scientifique',
    subcategory: '',
    discipline: '',
    subdiscipline: '',
    specialty: '',
    awards: [''],
    period: '',
    startYear: '',
    endYear: '',
    image: null,
    description: '',
    detailedDescription: '',
    achievements: [''],
    contributions: [''],
    stats: {
      publications: 0,
      influence: 50,
      followers: "0",
      projects: 0
    },
    color: '#1565c0'
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pays triés par ordre alphabétique
  const countriesByContinent = {
    "Afrique": [
      "Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", "Burundi",
      "Cabo Verde", "Cameroun", "Comores", "Congo (Brazzaville)", "Congo (République démocratique du Congo)",
      "Côte d'Ivoire", "Djibouti", "Égypte", "Érythrée", "Eswatini", "Éthiopie", "Gabon",
      "Gambie", "Ghana", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Kenya", "Lesotho",
      "Liberia", "Libye", "Madagascar", "Malawi", "Mali", "Maroc", "Maurice", "Mauritanie",
      "Mayotte", "Mozambique", "Namibie", "Niger", "Nigeria", "Ouganda", "Réunion",
      "Rwanda", "Sao Tomé-et-Principe", "Sénégal", "Seychelles", "Sierra Leone", "Somalie",
      "Soudan", "Soudan du Sud", "Tanzanie", "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe",
      "Sahara occidental"
    ].sort(),
    "Asie": [
      "Afghanistan", "Arabie Saoudite", "Arménie", "Azerbaïdjan", "Bahreïn", "Bangladesh",
      "Bhoutan", "Birmanie (Myanmar)", "Brunei", "Cambodge", "Chine", "Chypre", "Corée du Nord",
      "Corée du Sud", "Émirats arabes unis", "Géorgie", "Inde", "Indonésie", "Iran", "Irak",
      "Israël", "Japon", "Jordanie", "Kazakhstan", "Kirghizistan", "Koweït", "Laos", "Liban",
      "Malaisie", "Maldives", "Mongolie", "Népal", "Oman", "Ouzbékistan", "Pakistan", "Palestine",
      "Philippines", "Qatar", "Singapour", "Sri Lanka", "Syrie", "Tadjikistan", "Taïwan",
      "Thaïlande", "Timor oriental", "Turkménistan", "Turquie", "Vietnam", "Yémen"
    ].sort(),
    "Europe": [
      "Albanie", "Allemagne", "Andorre", "Autriche", "Belgique", "Biélorussie", "Bosnie-Herzégovine",
      "Bulgarie", "Chypre", "Croatie", "Danemark", "Espagne", "Estonie", "Finlande", "France",
      "Grèce", "Hongrie", "Irlande", "Islande", "Italie", "Kosovo", "Lettonie", "Liechtenstein",
      "Lituanie", "Luxembourg", "Macédoine du Nord", "Malte", "Moldavie", "Monaco", "Monténégro",
      "Norvège", "Pays-Bas", "Pologne", "Portugal", "République tchèque", "Roumanie", "Royaume-Uni",
      "Russie", "Saint-Marin", "Serbie", "Slovaquie", "Slovénie", "Suède", "Suisse", "Ukraine", "Vatican"
    ].sort(),
    "Amérique": [
      "Antigua-et-Barbuda", "Argentine", "Bahamas", "Barbade", "Belize", "Bolivie", "Brésil",
      "Canada", "Chili", "Colombie", "Costa Rica", "Cuba", "Dominique", "Équateur", "États-Unis",
      "Grenade", "Guatemala", "Guyana", "Haïti", "Honduras", "Jamaïque", "Mexique", "Nicaragua",
      "Panama", "Paraguay", "Pérou", "République dominicaine", "Saint-Christophe-et-Niévès",
      "Sainte-Lucie", "Saint-Vincent-et-les-Grenadines", "Salvador", "Suriname", "Trinité-et-Tobago",
      "Uruguay", "Venezuela"
    ].sort(),
    "Océanie": [
      "Australie", "Fidji", "Îles Marshall", "Kiribati", "Micronésie", "Nauru", "Nouvelle-Zélande",
      "Palaos", "Papouasie-Nouvelle-Guinée", "Salomon", "Samoa", "Tonga", "Tuvalu", "Vanuatu"
    ].sort()
  };

  // Périodes historiques avec intervalles de dates
  const historicalPeriods = [
    {
      name: "Paléolithique",
      start: -3300000,
      end: -10000,
      description: "Période de la Préhistoire la plus longue - Apparition du genre Homo, outils en pierre taillée, chasseurs-cueilleurs, maîtrise du feu"
    },
    {
      name: "Mésolithique",
      start: -10000,
      end: -6000,
      description: "Transition entre paléolithique et néolithique - Début de la sédentarisation progressive, microlithes"
    },
    {
      name: "Néolithique",
      start: -10000,
      end: -3300,
      description: "Révolution agricole : élevage, agriculture, villages, poteries, pierre polie"
    },
    {
      name: "Âge du cuivre (Chalcolithique)",
      start: -4500,
      end: -3300,
      description: "Premiers usages du cuivre - Transition vers les métaux"
    },
    {
      name: "Âge du bronze",
      start: -3300,
      end: -1200,
      description: "Alliage cuivre + étain - Développement de grandes civilisations (Égypte, Mésopotamie)"
    },
    {
      name: "Âge du fer",
      start: -1200,
      end: -52,
      description: "Généralisation du fer - Celtes, Assyriens, expansion plus large des États et des techniques"
    },
    {
      name: "Antiquité",
      start: -3300,
      end: 476,
      description: "De l'invention de l'écriture à la chute de l'Empire romain d'Occident"
    },
    {
      name: "Moyen Âge",
      start: 476,
      end: 1492,
      description: "Féodalité, royaumes, christianisation de l'Europe"
    },
    {
      name: "Temps modernes",
      start: 1492,
      end: 1789,
      description: "Renaissance, grandes découvertes, monarchies absolues"
    },
    {
      name: "Époque contemporaine",
      start: 1789,
      end: 2025,
      description: "Révolution française, industrialisation, mondialisation"
    },
    {
      name: "Révolution industrielle (1ère)",
      start: 1760,
      end: 1840,
      description: "Charbon, machines à vapeur, textile"
    },
    {
      name: "Révolution industrielle (2ème)",
      start: 1870,
      end: 1914,
      description: "Électricité, pétrole, chimie, sidérurgie"
    },
    {
      name: "Révolution numérique",
      start: 1970,
      end: 2025,
      description: "Informatique, électronique, internet"
    }
  ];

  // ✅ STRUCTURE SCIENTIFIQUE COMPLÈTE
  const scientificStructure = {
    "Sciences Fondamentales": {
      icon: <Atom size={20} />,
      color: "#3B82F6",
      disciplines: {
        "Physique": {
          icon: <Atom size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Physique théorique",
            "Physique expérimentale", 
            "Physique des particules",
            "Astrophysique & cosmologie",
            "Optique & photonique",
            "Physique de la matière condensée",
            "Physique nucléaire"
          ],
          awards: [
            "Prix Nobel de Physique",
            "Breakthrough Prize in Fundamental Physics",
            "Wolf Prize in Physics",
            "Kavli Prize in Astrophysics",
            "Shaw Prize in Astronomy",
            "Dirac Medal (ICTP)",
            "Maxwell Medal",
            "Heineman Prize for Mathematical Physics",
            "Sakurai Prize (physique des particules)",
            "Oskar Klein Medal (cosmologie)"
          ]
        },
        "Chimie": {
          color: "#10B981",
          subdisciplines: [
            "Chimie organique",
            "Chimie inorganique", 
            "Chimie physique",
            "Chimie analytique",
            "Biochimie",
            "Chimie des matériaux",
            "Chimie environnementale"
          ],
          awards: [
            "Prix Nobel de Chimie",
            "Wolf Prize in Chemistry",
            "Priestley Medal",
            "Davy Medal",
            "Royal Medal in Chemistry",
            "ACS Awards (American Chemical Society)",
            "Shaw Prize in Mathematical Sciences"
          ]
        },
        "Mathématiques": {
          icon: <Calculator size={18} />,
          color: "#EF4444",
          subdisciplines: [
            "Analyse",
            "Algèbre",
            "Géométrie", 
            "Théorie des nombres",
            "Probabilités & statistiques",
            "Topologie",
            "Logique mathématique",
            "Mathématiques appliquées"
          ],
          awards: [
            "Médaille Fields",
            "Prix Abel",
            "Prix Chern",
            "Clay Millennium Prizes",
            "Wolf Prize in Mathematics",
            "Gauss Prize (maths appliquées)",
            "Nevanlinna Prize / IMU Abacus Medal",
            "EMS Prize (jeunes mathématiciens)"
          ]
        }
      }
    },
    "Sciences de la Vie & Biomédicales": {
      icon: <Leaf size={20} />,
      color: "#10B981",
      disciplines: {
        "Biologie": {
          icon: <Leaf size={18} />,
          color: "#059669",
          subdisciplines: [
            "Biologie cellulaire",
            "Génétique et génomique",
            "Biologie moléculaire", 
            "Microbiologie",
            "Immunologie",
            "Écologie & évolution",
            "Neurosciences"
          ],
          awards: [
            "Breakthrough Prize in Life Sciences",
            "Lasker Awards",
            "Gairdner International Award",
            "Wolf Prize in Medicine",
            "Louisa Gross Horwitz Prize",
            "Shaw Prize in Life Sciences and Medicine",
            "Japan Prize (biotech / biosciences)"
          ]
        },
        "Médecine & Santé": {
          icon: <User size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Médecine générale",
            "Allergologie",
            "Anatomie et cytologie pathologique",
            "Anesthésie‑réanimation",
            "Biologie médicale",
            "Dermatologie",
            "Endocrinologie",
            "Génétique médicale",
            "Gériatrie",
            "Gynécologie",
            "Hématologie",
            "Hépato‑gastro‑entérologie",
            "Maladies infectieuses",
            "Médecine cardiovasculaire",
            "Médecine d'urgence",
            "Médecine interne",
            "Médecine nucléaire",
            "Néphrologie",
            "Neurologie",
            "Oncologie",
            "Ophtalmologie",
            "ORL",
            "Pédiatrie",
            "Pneumologie",
            "Psychiatrie",
            "Radiologie",
            "Rhumatologie",
            "Santé publique",
            "Urologie"
          ],
          awards: [
            "Prix Nobel de Physiologie ou Médecine",
            "Lasker–DeBakey Clinical Medical Research Award",
            "Robert Koch Prize",
            "Gairdner Foundation Global Health Award",
            "Breakthrough Prize in Life Sciences",
            "Albert Lasker Basic Medical Research Award",
            "Canada Gairdner International Award",
            "Prix Inserm"
          ]
        },
        "Chirurgie": {
          icon: <Scissors size={18} />,
          color: "#BE123C",
          subdisciplines: [
            "Chirurgie maxillo‑faciale",
            "Chirurgie orale",
            "Chirurgie orthopédique",
            "Chirurgie pédiatrique",
            "Chirurgie plastique",
            "Chirurgie thoracique",
            "Chirurgie vasculaire",
            "Chirurgie viscérale"
          ],
          awards: [
            "Prix Antoine-Béclère (chirurgie)",
            "Prix Delbet (chirurgie pédiatrique)",
            "Prix Lannelongue (chirurgie cardiaque)",
            "Medal of Honor – American College of Surgeons",
            "Nobel Prize in Physiology or Medicine"
          ]
        },
        "Neurosciences": {
          icon: <Brain size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Neurobiologie",
            "Neurosciences cognitives", 
            "Neurologie",
            "Neuropédiatrie"
          ],
          awards: [
            "Brain Prize",
            "Kavli Prize in Neuroscience",
            "Warren Alpert Foundation Prize",
            "Grete Lundbeck European Brain Research Prize"
          ]
        }
      }
    },
    "Sciences de l'Ingénieur & Technologies": {
      icon: <Cpu size={20} />,
      color: "#F59E0B",
      disciplines: {
        "Informatique": {
          icon: <Code size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Intelligence artificielle",
            "Apprentissage automatique", 
            "Algorithmes",
            "Sécurité informatique",
            "Informatique théorique",
            "Réseaux & systèmes",
            "Vision par ordinateur"
          ],
          awards: [
            "Turing Award",
            "ACM Prize in Computing",
            "IEEE John von Neumann Medal",
            "Knuth Prize",
            "Gödel Prize (informatique théorique)",
            "NeurIPS Awards (IA)"
          ]
        },
        "Ingénierie": {
          icon: <Cpu size={18} />,
          color: "#6366F1",
          subdisciplines: [
            "Génie civil",
            "Génie électrique", 
            "Génie mécanique",
            "Génie chimique",
            "Génie des matériaux",
            "Aérospatiale",
            "Robotique"
          ],
          awards: [
            "Queen Elizabeth Prize for Engineering",
            "IEEE Medal of Honor",
            "National Medal of Technology and Innovation",
            "ASME & IEEE Field Medals",
            "RAN Engineering Prizes"
          ]
        },
        "Technologie & Innovation": {
          icon: <Zap size={18} />,
          color: "#F97316",
          subdisciplines: [
            "Innovations industrielles",
            "Start-ups deep-tech", 
            "Design technologique",
            "Développement durable"
          ],
          awards: [
            "Millennium Technology Prize",
            "R&D 100 Awards",
            "EPO European Inventor Award"
          ]
        }
      }
    },
    "Sciences de la Terre & Environnement": {
      icon: <Globe size={20} />,
      color: "#10B981",
      disciplines: {
        "Géologie": {
          icon: <MountainIcon size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Géologie structurale",
            "Sismologie", 
            "Volcanologie",
            "Pétrologie"
          ],
          awards: [
            "Wollaston Medal",
            "Penrose Medal",
            "Vetlesen Prize (géosciences & Terre)"
          ]
        },
        "Climat & Environnement": {
          icon: <Cloud size={18} />,
          color: "#06B6D4",
          subdisciplines: [
            "Climatologie",
            "Océanographie", 
            "Sciences de l'atmosphère",
            "Sciences environnementales"
          ],
          awards: [
            "Blue Planet Prize",
            "Tyler Prize for Environmental Achievement",
            "Vetlesen Prize",
            "Oceanography Medal"
          ]
        }
      }
    },
    "Astronomie & Espace": {
      icon: <Star size={20} />,
      color: "#6366F1",
      disciplines: {
        "Astronomie": {
          icon: <Satellite size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Observation",
            "Cosmologie", 
            "Physique stellaire",
            "Planétologie"
          ],
          awards: [
            "Kavli Prize in Astrophysics",
            "Shaw Prize in Astronomy",
            "Gruber Prize in Cosmology",
            "Dirac Medal (cosmologie)"
          ]
        },
        "Exploration Spatiale": {
          icon: <Satellite size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Technologies spatiales",
            "Missions robotiques", 
            "Astrophysique spatiale"
          ],
          awards: [
            "National Space Trophy",
            "NASA Distinguished Service Medal"
          ]
        }
      }
    },
    "Sciences Humaines & Sociales": {
      icon: <Book size={20} />,
      color: "#8B5CF6",
      disciplines: {
        "Économique": {
          icon: <DollarSign size={18} />,
          color: "#10B981",
          subdisciplines: [
            "Économétrie",
            "Économie du développement", 
            "Économie comportementale",
            "Économie internationale"
          ],
          awards: [
            "Prix Nobel d'Économie",
            "John Bates Clark Medal",
            "BBVA Frontiers of Knowledge Awards",
            "Kyoto Prize (sciences humaines)"
          ]
        },
        "Psychologie": {
          icon: <BrainCircuit size={18} />,
          color: "#EC4899",
          subdisciplines: [
            "Psychologie cognitive",
            "Psychologie sociale", 
            "Psychologie clinique",
            "Psychologie du développement"
          ],
          awards: [
            "APA Distinguished Scientific Contribution Award",
            "Grawemeyer Award in Psychology",
            "Ebbinghaus Medal"
          ]
        },
        "Anthropologie & Sociologie": {
          icon: <Users size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Anthropologie culturelle",
            "Sociologie politique", 
            "Anthropologie sociale",
            "Démographie"
          ],
          awards: [
            "AAA Award for Excellence",
            "SAGE Award for Innovation",
            "Holberg Prize (humanités & SHS)"
          ]
        }
      }
    }
  };

  // ✅ STRUCTURE NON-SCIENTIFIQUE COMPLÈTE
  const nonScientificStructure = {
    "Arts & Culture": {
      icon: <Palette size={20} />,
      color: "#EC4899",
      disciplines: {
        "Littérature": {
          icon: <BookOpen size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Roman / Nouvelles",
            "Poésie",
            "Essais",
            "Théâtre littéraire",
            "Littérature jeunesse",
            "Traduction",
            "Biographie / Autobiographie",
            "Science-fiction",
            "Fantasy",
            "Roman policier"
          ],
          awards: [
            "Prix Nobel de Littérature",
            "Booker Prize",
            "International Booker Prize",
            "Pulitzer Prize (Fiction)",
            "National Book Award",
            "Prix Goncourt",
            "Prix Renaudot",
            "Prix Femina",
            "Prix Médicis",
            "Prix Hugo (science-fiction)"
          ]
        },
        "Cinéma": {
          icon: <Film size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Réalisation",
            "Interprétation",
            "Scénario",
            "Documentaire",
            "Animation",
            "Court métrage",
            "Montage",
            "Musique de film",
            "Photographie cinématographique"
          ],
          awards: [
            "Oscars (Academy Awards)",
            "Golden Globes",
            "Palme d'Or (Cannes)",
            "Lion d'Or (Venise)",
            "Ours d'Or (Berlinale)",
            "BAFTA Awards",
            "César du Cinéma",
            "Sundance Awards",
            "Independent Spirit Awards"
          ]
        },
        "Télévision & Séries": {
          icon: <Tv size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Série dramatique",
            "Série comique",
            "Mini-série",
            "Télé-réalité",
            "Talk-show",
            "Documentaire télévisé",
            "Émission jeunesse"
          ],
          awards: [
            "Emmy Awards",
            "Golden Globes (TV)",
            "BAFTA Television Awards",
            "International Emmy Awards",
            "Peabody Awards",
            "Television Critics Association Awards"
          ]
        },
        "Musique": {
          icon: <Music size={18} />,
          color: "#F59E0B",
          subdisciplines: [
            "Pop / R&B",
            "Hip-Hop / Rap",
            "Rock",
            "Jazz",
            "Musique classique",
            "Musiques du monde",
            "Electro / EDM",
            "Reggae / Dancehall",
            "Soul / Funk",
            "Blues"
          ],
          awards: [
            "Grammy Awards",
            "Billboard Music Awards",
            "MTV Video Music Awards",
            "American Music Awards",
            "Brit Awards",
            "Mercury Prize",
            "BET Awards",
            "Soul Train Awards"
          ]
        },
        "Théâtre & Arts de la Scène": {
          icon: <TheaterIcon size={18} />,
          color: "#8B5CF6",
          subdisciplines: [
            "Théâtre dramatique",
            "Comédie musicale",
            "Théâtre de rue",
            "Performance",
            "Danse contemporaine",
            "Ballet classique",
            "Danse traditionnelle",
            "Cirque contemporain"
          ],
          awards: [
            "Tony Awards",
            "Olivier Awards",
            "Drama Desk Awards",
            "Bessie Awards (danse)",
            "Molières",
            "Prix de la Critique (théâtre)",
            "Prix du Syndicat de la Critique"
          ]
        },
        "Arts Visuels": {
          icon: <Paintbrush size={18} />,
          color: "#10B981",
          subdisciplines: [
            "Peinture",
            "Sculpture",
            "Photographie",
            "Dessin",
            "Gravure",
            "Arts graphiques",
            "Installation",
            "Art numérique",
            "Street art"
          ],
          awards: [
            "Turner Prize",
            "Lion d'Or (Biennale de Venise)",
            "Prix Marcel Duchamp",
            "Hasselblad Award (photographie)",
            "Praemium Imperiale",
            "Prix de Rome"
          ]
        }
      }
    },
    "Sports & Activités Physiques": {
      icon: <Trophy size={20} />,
      color: "#F59E0B",
      disciplines: {
        "Sports Individuels": {
          icon: <User size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Athlétisme",
            "Tennis",
            "Tennis de table",
            "Badminton",
            "Boxe",
            "Judo",
            "Karaté",
            "Escrime",
            "Golf",
            "Cyclisme",
            "Natation",
            "Gymnastique",
            "Haltérophilie"
          ],
          awards: [
            "Médailles Olympiques",
            "Médailles Paralympiques",
            "Championnats du Monde",
            "Championnats d'Europe",
            "Championnats d'Afrique",
            "Records du monde",
            "Grand Chelem (tennis)"
          ]
        },
        "Sports Collectifs": {
          icon: <Users size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Football",
            "Basket-ball",
            "Handball",
            "Volley-ball",
            "Rugby",
            "Hockey sur glace",
            "Baseball",
            "Cricket",
            "Water-polo",
            "Futsal"
          ],
          awards: [
            "Coupe du Monde de Football",
            "Coupe d'Afrique des Nations",
            "NBA Championships",
            "EuroLeague",
            "Coupe du Monde de Rugby",
            "Stanley Cup (hockey)",
            "World Series (baseball)"
          ]
        },
        "Sports Mécaniques": {
          icon: <Car size={18} />,
          color: "#059669",
          subdisciplines: [
            "Formule 1",
            "Rallye",
            "Endurance",
            "MotoGP",
            "Motocross",
            "Rallye-raid",
            "Karting"
          ],
          awards: [
            "Championnat du Monde de Formule 1",
            "24 Heures du Mans",
            "Dakar Rally",
            "World Rally Championship",
            "MotoGP World Championship"
          ]
        },
        "Sports de Combat": {
          icon: <Target size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Boxe anglaise",
            "Boxe française",
            "Kick-boxing",
            "Muay thaï",
            "MMA",
            "Jiu-jitsu brésilien",
            "Lutte",
            "Taekwondo"
          ],
          awards: [
            "Championnats du Monde de Boxe",
            "Ceintures mondiales de boxe",
            "Jeux Olympiques (boxe, judo, taekwondo)",
            "UFC Championships",
            "Bellator Championships"
          ]
        }
      }
    },
    "Médias & Communication": {
      icon: <Newspaper size={20} />,
      color: "#059669",
      disciplines: {
        "Journalisme": {
          icon: <Newspaper size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Journalisme d'investigation",
            "Reportage",
            "Interview",
            "Éditorial",
            "Chronique",
            "Photojournalisme",
            "Journalisme radio",
            "Journalisme télévisuel"
          ],
          awards: [
            "Pulitzer Prizes (Journalism)",
            "Peabody Awards",
            "George Polk Awards",
            "World Press Photo Awards",
            "Prix Albert Londres",
            "Prix Bayeux-Calvados"
          ]
        },
        "Communication": {
          icon: <Megaphone size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Communication d'entreprise",
            "Relations publiques",
            "Communication politique",
            "Communication digitale",
            "Social media management",
            "Publicité",
            "Marketing",
            "Podcasting"
          ],
          awards: [
            "Cannes Lions (publicité)",
            "Clio Awards",
            "One Show",
            "D&AD Awards",
            "Webby Awards",
            "Shorty Awards",
            "Prix Stratégies"
          ]
        }
      }
    },
    "Droits Humains & Action Sociale": {
      icon: <HeartIcon size={20} />,
      color: "#DC2626",
      disciplines: {
        "Droits Humains": {
          icon: <Scale size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Droits civils et politiques",
            "Droits des femmes",
            "Droits des enfants",
            "Droits des personnes handicapées",
            "Droits des migrants",
            "Lutte contre la torture",
            "Liberté d'expression"
          ],
          awards: [
            "Prix Nobel de la Paix",
            "Prix Sakharov",
            "Prix des Droits de l'Homme des Nations Unies",
            "Prix Martin Ennals",
            "Prix Front Line Defenders"
          ]
        },
        "Action Humanitaire": {
          icon: <HeartIcon size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Aide d'urgence",
            "Aide au développement",
            "Secours alimentaire",
            "Secours médical",
            "Réfugiés et déplacés",
            "Eau et assainissement"
          ],
          awards: [
            "Prix Nobel de la Paix",
            "Nansen Refugee Award",
            "Prix Aurora",
            "Prix Hilton Humanitarian",
            "Prix Henry Dunant"
          ]
        }
      }
    },
    "Politique & Leadership": {
      icon: <Crown size={20} />,
      color: "#F59E0B",
      disciplines: {
        "Politique": {
          icon: <Scale size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Gouvernance",
            "Démocratie",
            "État de droit",
            "Institutions",
            "Partis politiques",
            "Élections",
            "Diplomatie"
          ],
          awards: [
            "Prix Nobel de la Paix",
            "Prix des Nations Unies",
            "Prix de l'Union Européenne",
            "Prix de l'Union Africaine",
            "Prix des Droits de l'Homme"
          ]
        },
        "Leadership": {
          icon: <Crown size={18} />,
          color: "#F59E0B",
          subdisciplines: [
            "Leadership politique",
            "Leadership économique",
            "Leadership social",
            "Leadership culturel",
            "Leadership communautaire",
            "Leadership visionnaire"
          ],
          awards: [
            "Prix Nobel de la Paix",
            "Prix des Nations Unies",
            "Prix du Leadership",
            "Prix de l'Excellence",
            "Prix de l'Inspiration"
          ]
        }
      }
    },
    "Économie & Entrepreneuriat": {
      icon: <DollarSign size={20} />,
      color: "#10B981",
      disciplines: {
        "Économie": {
          icon: <DollarSign size={18} />,
          color: "#059669",
          subdisciplines: [
            "Économétrie",
            "Macroéconomie",
            "Microéconomie",
            "Économie du développement",
            "Économie internationale",
            "Économie financière"
          ],
          awards: [
            "Prix Nobel d'Économie",
            "John Bates Clark Medal",
            "BBVA Frontiers of Knowledge Awards",
            "Global Award for Entrepreneurship Research",
            "Prix du Meilleur Jeune Économiste"
          ]
        },
        "Entrepreneuriat": {
          icon: <Zap size={18} />,
          color: "#F59E0B",
          subdisciplines: [
            "Création d'entreprise",
            "Reprise d'entreprise",
            "Développement d'entreprise",
            "Innovation entrepreneuriale",
            "Entrepreneuriat social",
            "Entrepreneuriat numérique"
          ],
          awards: [
            "Prix Nobel d'Économie",
            "Prix de l'Entrepreneur de l'Année",
            "Prix du Jeune Entrepreneur",
            "Prix de la Femme Entrepreneure",
            "Prix de l'Entrepreneur Social"
          ]
        }
      }
    },
    "Humanités & Traditions": {
      icon: <GraduationCap size={20} />,
      color: "#8B5CF6",
      disciplines: {
        "Philosophie": {
          icon: <Brain size={18} />,
          color: "#3B82F6",
          subdisciplines: [
            "Philosophie antique",
            "Philosophie médiévale",
            "Philosophie moderne",
            "Philosophie contemporaine",
            "Philosophie africaine",
            "Philosophie politique"
          ],
          awards: [
            "Prix Nobel de Littérature",
            "Prix Kyoto",
            "Prix Berggruen",
            "Prix de l'Académie Française",
            "Prix de l'Académie des Sciences Morales et Politiques"
          ]
        },
        "Histoire": {
          icon: <BookOpen size={18} />,
          color: "#DC2626",
          subdisciplines: [
            "Histoire ancienne",
            "Histoire médiévale",
            "Histoire moderne",
            "Histoire contemporaine",
            "Histoire de l'Afrique",
            "Histoire mondiale"
          ],
          awards: [
            "Prix Nobel de Littérature",
            "Prix Pulitzer (histoire)",
            "Prix Goncourt (biographie)",
            "Prix du Sénat du Livre d'Histoire",
            "Prix des Rendez-vous de l'Histoire"
          ]
        },
        "Traditions Culturelles": {
          icon: <Sparkles size={18} />,
          color: "#F59E0B",
          subdisciplines: [
            "Mythologie africaine",
            "Traditions orales",
            "Coutumes et usages",
            "Rites de passage",
            "Cérémonies traditionnelles",
            "Arts traditionnels",
            "Musiques traditionnelles"
          ],
          awards: [
            "Prix du Patrimoine",
            "Prix de la Tradition",
            "Prix de la Culture",
            "Prix de l'Identité",
            "Prix de la Mémoire",
            "Prix de la Transmission"
          ]
        }
      }
    }
  };

  // Structure complète des catégories
  const [categoriesStructure] = useState({
    scientifique: {
      name: "Sciences et Technologies",
      icon: <Microscope size={20} />,
      subcategories: scientificStructure
    },
    non_scientifique: {
      name: "Arts, Culture et Société",
      icon: <Palette size={20} />,
      subcategories: nonScientificStructure
    }
  });

  // ✅ PERSONNALITÉS AFRO COMPLÈTES
  const initialPersonalities = [
    // ==================== SCIENTIFIQUES ====================
    {
      id: 1,
      name: "Cheikh Anta Diop",
      country: "Sénégal",
      category: "scientifique",
      subcategory: "Sciences Humaines & Sociales",
      discipline: "Anthropologie & Sociologie",
      subdiscipline: "Anthropologie sociale",
      specialty: "Égyptologie & Histoire Africaine",
      awards: ["Prix international de la Recherche Scientifique"],
      period: "Époque contemporaine",
      startYear: 1923,
      endYear: 1986,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Historien et anthropologue visionnaire qui a rétabli la conscience historique africaine.",
      detailedDescription: "Cheikh Anta Diop a consacré sa vie à la réhabilitation de la place de l'Afrique dans l'histoire mondiale.",
      achievements: [
        "Théorie sur les origines africaines de la civilisation égyptienne",
        "Directeur du laboratoire de radiocarbone de l'IFAN",
        "Docteur ès Lettres de la Sorbonne",
        "Prix international de la Recherche Scientifique"
      ],
      contributions: [
        "Méthodologie de l'histoire africaine",
        "Études sur l'unité culturelle de l'Afrique",
        "Théorie du matriarcat primitif",
        "Développement de la chronologie absolue"
      ],
      stats: { publications: 28, influence: 98, followers: "1.8M", projects: 89 },
      color: "#e25822"
    },
    {
      id: 2,
      name: "Wangari Maathai",
      country: "Kenya",
      category: "scientifique",
      subcategory: "Sciences de la Terre & Environnement",
      discipline: "Climat & Environnement",
      subdiscipline: "Sciences environnementales",
      specialty: "Environnement & Développement durable",
      awards: ["Prix Nobel de la Paix 2004"],
      period: "Époque contemporaine",
      startYear: 1940,
      endYear: 2011,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Prix Nobel de la Paix 2004 pour sa contribution au développement durable.",
      detailedDescription: "Wangari Maathai a fondé le Green Belt Movement, organisation environnementale qui a planté plus de 50 millions d'arbres au Kenya.",
      achievements: [
        "Prix Nobel de la Paix 2004",
        "Fondatrice du Green Belt Movement",
        "Première femme d'Afrique centrale et orientale à obtenir un doctorat",
        "Plus de 50 millions d'arbres plantés"
      ],
      contributions: [
        "Lutte contre la déforestation",
        "Autonomisation des femmes rurales",
        "Promotion de la démocratie",
        "Éducation environnementale"
      ],
      stats: { publications: 15, influence: 95, followers: "2.3M", projects: 120 },
      color: "#27ae60"
    },
    {
      id: 31,
      name: "Dr. Patricia Bath",
      country: "États-Unis",
      category: "scientifique",
      subcategory: "Sciences de la Vie & Biomédicales",
      discipline: "Médecine & Santé",
      subdiscipline: "Ophtalmologie",
      specialty: "Chirurgie laser & Cécité évitable",
      awards: ["Prix National des Inventeurs", "Prix de l'Association Américaine des Médecins Noirs"],
      period: "Époque contemporaine",
      startYear: 1942,
      endYear: 2019,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Première femme afro-américaine à recevoir un brevet médical.",
      detailedDescription: "Inventrice du Laserphaco Probe pour traiter la cataracte.",
      achievements: ["Brevet médical US n°4,744,360", "Fondation de l'American Institute for the Prevention of Blindness"],
      contributions: ["Santé oculaire accessible", "Technologie médicale"],
      stats: { publications: 104, influence: 93, followers: "1.2M", projects: 37 },
      color: "#DC2626"
    },
    {
      id: 32,
      name: "Dr. Ben Carson",
      country: "États-Unis",
      category: "scientifique",
      subcategory: "Sciences de la Vie & Biomédicales",
      discipline: "Chirurgie",
      subdiscipline: "Chirurgie pédiatrique",
      specialty: "Neurochirurgie infantile",
      awards: ["Presidential Medal of Freedom", "Prix Horatio Alger"],
      period: "Époque contemporaine",
      startYear: 1951,
      endYear: null,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Pionnier mondial en neurochirurgie pédiatrique.",
      detailedDescription: "Première séparation complète de jumeaux siamois unis par la tête en 1987.",
      achievements: ["Première séparation complète (1987)", "Chef de la neurochirurgie pédiatrique (Johns Hopkins)"],
      contributions: ["Techniques neurochirurgicales innovantes", "Mentorat de jeunes chirurgiens"],
      stats: { publications: 125, influence: 95, followers: "3.7M", projects: 89 },
      color: "#BE123C"
    },
    {
      id: 36,
      name: "Dr. Denis Mukwege",
      country: "RD Congo",
      category: "scientifique",
      subcategory: "Sciences de la Vie & Biomédicales",
      discipline: "Chirurgie",
      subdiscipline: "Chirurgie gynécologique",
      specialty: "Réparation des violences sexuelles",
      awards: ["Prix Nobel de la Paix 2018"],
      period: "Époque contemporaine",
      startYear: 1955,
      endYear: null,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Chirurgien gynécologue congolais, prix Nobel de la paix.",
      detailedDescription: "Hôpital de Panzi à Bukavu, soins à plus de 50 000 femmes victimes de violences sexuelles.",
      achievements: ["Hôpital de Panzi (1999)", "Prix Nobel de la Paix (2018)"],
      contributions: ["Médecine humanitaire", "Droits des femmes en zones de conflit"],
      stats: { publications: 38, influence: 96, followers: "1.3M", projects: 27 },
      color: "#DC2626"
    },
    {
      id: 101,
      name: "Mark Dean",
      country: "États-Unis",
      category: "scientifique",
      subcategory: "Sciences de l'Ingénieur & Technologies",
      discipline: "Informatique",
      subdiscipline: "Architecture des ordinateurs",
      specialty: "Co-inventeur de l'ordinateur personnel IBM",
      awards: ["IBM Fellow", "Black Engineer of the Year"],
      period: "Révolution numérique",
      startYear: 1957,
      endYear: null,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Co-inventeur de l'architecture de l'ordinateur personnel IBM.",
      detailedDescription: "Mark Dean a joué un rôle crucial dans le développement de l'ordinateur personnel chez IBM.",
      achievements: ["Co-inventeur du PC IBM", "Plus de 20 brevets", "IBM Fellow"],
      contributions: ["Architecture des ordinateurs", "Innovation technologique", "Diversité dans les STEM"],
      stats: { publications: 45, influence: 92, followers: "850K", projects: 63 },
      color: "#3B82F6"
    },

    // ==================== NON-SCIENTIFIQUES ====================
    {
      id: 201,
      name: "Chinua Achebe",
      country: "Nigeria",
      category: "non_scientifique",
      subcategory: "Arts & Culture",
      discipline: "Littérature",
      subdiscipline: "Roman / Nouvelles",
      specialty: "Littérature post-coloniale & Roman africain",
      awards: ["Man Booker International Prize", "Commonwealth Poetry Prize"],
      period: "Époque contemporaine",
      startYear: 1930,
      endYear: 2013,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Écrivain nigérian considéré comme le père du roman africain moderne.",
      detailedDescription: "Chinua Achebe a donné voix à l'Afrique postcoloniale à travers ses romans.",
      achievements: [
        "Auteur de 'Le Monde s'effondre' (8 millions d'exemplaires)",
        "Fondateur de la littérature africaine anglophone",
        "Professeur à l'Université Brown",
        "Prix Man Booker International"
      ],
      contributions: [
        "Littérature postcoloniale",
        "Déconstruction des stéréotypes coloniaux",
        "Langue et identité africaines",
        "Critique littéraire africaine"
      ],
      stats: { publications: 22, influence: 96, followers: "5.4M", projects: 18 },
      color: "#8B5CF6"
    },
    {
      id: 202,
      name: "Wole Soyinka",
      country: "Nigeria",
      category: "non_scientifique",
      subcategory: "Arts & Culture",
      discipline: "Littérature",
      subdiscipline: "Théâtre littéraire",
      specialty: "Drame postcolonial & Satire politique",
      awards: ["Prix Nobel de Littérature 1986"],
      period: "Époque contemporaine",
      startYear: 1934,
      endYear: null,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Écrivain nigérian, premier Africain à recevoir le prix Nobel de littérature.",
      detailedDescription: "Wole Soyinka a combiné tradition yoruba et formes dramatiques occidentales.",
      achievements: [
        "Prix Nobel de Littérature 1986",
        "Plus de 30 pièces de théâtre",
        "Emprisonnement politique pendant la guerre civile",
        "Professeur dans les universités mondiales"
      ],
      contributions: [
        "Théâtre africain moderne",
        "Satire politique",
        "Mythologie yoruba dans la littérature",
        "Droits humains par la littérature"
      ],
      stats: { publications: 45, influence: 95, followers: "4.8M", projects: 63 },
      color: "#27ae60"
    },
    {
      id: 203,
      name: "Bob Marley",
      country: "Jamaïque",
      category: "non_scientifique",
      subcategory: "Arts & Culture",
      discipline: "Musique",
      subdiscipline: "Reggae / Dancehall",
      specialty: "Reggae & Musique de protestation",
      awards: ["Grammy Lifetime Achievement Award", "Jamaican Order of Merit"],
      period: "Époque contemporaine",
      startYear: 1945,
      endYear: 1981,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Chanteur, auteur-compositeur et musicien jamaïcain, icône du reggae.",
      detailedDescription: "Bob Marley a popularisé le reggae dans le monde entier.",
      achievements: [
        "Vente de plus de 75 millions d'albums",
        "Intronisation au Rock and Roll Hall of Fame",
        "Grammy Lifetime Achievement Award",
        "Ambassadeur culturel de la Jamaïque"
      ],
      contributions: [
        "Popularisation mondiale du reggae",
        "Musique comme activisme social",
        "Culture rastafari",
        "Message de paix et d'unité"
      ],
      stats: { publications: 13, influence: 99, followers: "32.5M", projects: 21 },
      color: "#f39c12"
    },
    {
      id: 204,
      name: "Miriam Makeba",
      country: "Afrique du Sud",
      category: "non_scientifique",
      subcategory: "Arts & Culture",
      discipline: "Musique",
      subdiscipline: "Musiques du monde",
      specialty: "Musique africaine & Anti-apartheid",
      awards: ["Grammy Award", "Dag Hammarskjöld Peace Prize"],
      period: "Époque contemporaine",
      startYear: 1932,
      endYear: 2008,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Chanteuse et activiste sud-africaine surnommée 'Mama Africa'.",
      detailedDescription: "Miriam Makeba a utilisé sa musique pour combattre le régime d'apartheid.",
      achievements: [
        "Première artiste africaine à remporter un Grammy",
        "Discours aux Nations Unies contre l'apartheid",
        "Musique de 'Pata Pata' célèbre mondialement",
        "Ambassadrice de bonne volonté de l'ONU"
      ],
      contributions: [
        "Musique comme protestation politique",
        "Promotion des langues africaines",
        "Femmes dans la lutte anti-apartheid",
        "Musique africaine sur scène mondiale"
      ],
      stats: { publications: 4, influence: 94, followers: "5.1M", projects: 31 },
      color: "#d35400"
    },
    {
      id: 205,
      name: "Fela Kuti",
      country: "Nigeria",
      category: "non_scientifique",
      subcategory: "Arts & Culture",
      discipline: "Musique",
      subdiscipline: "Afrobeat",
      specialty: "Créateur de l'Afrobeat & Activisme politique",
      awards: [],
      period: "Époque contemporaine",
      startYear: 1938,
      endYear: 1997,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Créateur de l'Afrobeat, musicien et activiste politique nigérian.",
      detailedDescription: "Fela Kuti a créé l'Afrobeat en fusionnant jazz, funk, highlife et rythmes traditionnels yoruba.",
      achievements: [
        "Création de l'Afrobeat",
        "Plus de 50 albums",
        "Fondation de la République de Kalakuta",
        "Influence mondiale sur la musique"
      ],
      contributions: [
        "Innovation musicale",
        "Activisme politique par la musique",
        "Panafricanisme culturel",
        "Défense des droits humains"
      ],
      stats: { publications: 3, influence: 97, followers: "8.7M", projects: 52 },
      color: "#F59E0B"
    },
    {
      id: 206,
      name: "Spike Lee",
      country: "États-Unis",
      category: "non_scientifique",
      subcategory: "Arts & Culture",
      discipline: "Cinéma",
      subdiscipline: "Réalisation",
      specialty: "Cinéma politique & Représentation noire",
      awards: ["Academy Award", "BAFTA Award", "Emmy Award"],
      period: "Révolution numérique",
      startYear: 1957,
      endYear: null,
      image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Réalisateur, producteur et scénariste américain.",
      detailedDescription: "Spike Lee a révolutionné la représentation des Noirs américains au cinéma.",
      achievements: [
        "Oscar du meilleur scénario adapté",
        "Palme d'Or à Cannes",
        "Fondateur de 40 Acres and a Mule Filmworks",
        "Professeur à NYU"
      ],
      contributions: [
        "Cinéma afro-américain",
        "Commentaire social par le film",
        "Représentation raciale au cinéma",
        "Nouvelle vague noire américaine"
      ],
      stats: { publications: 5, influence: 95, followers: "6.3M", projects: 58 },
      color: "#2c3e50"
    },
    {
      id: 301,
      name: "Usain Bolt",
      country: "Jamaïque",
      category: "non_scientifique",
      subcategory: "Sports & Activités Physiques",
      discipline: "Sports Individuels",
      subdiscipline: "Athlétisme",
      specialty: "Sprint & Records du monde",
      awards: ["8 médailles d'or olympiques", "11 titres mondiaux"],
      period: "Époque contemporaine",
      startYear: 1986,
      endYear: null,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd8facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Sprinter jamaïcain, détenteur des records du monde du 100m et 200m.",
      detailedDescription: "Usain Bolt a révolutionné le sprint avec ses performances extraordinaires.",
      achievements: [
        "8 médailles d'or olympiques",
        "11 titres mondiaux",
        "Records du monde du 100m et 200m",
        "Triple triplé olympique"
      ],
      contributions: [
        "Popularisation de l'athlétisme",
        "Ambassadeur du sport jamaïcain",
        "Philanthropie",
        "Inspiration pour les jeunes athlètes"
      ],
      stats: { publications: 1, influence: 99, followers: "45.2M", projects: 15 },
      color: "#F59E0B"
    },
    {
      id: 302,
      name: "Serena Williams",
      country: "États-Unis",
      category: "non_scientifique",
      subcategory: "Sports & Activités Physiques",
      discipline: "Sports Individuels",
      subdiscipline: "Tennis",
      specialty: "Tennis féminin & Grand Chelem",
      awards: ["23 titres du Grand Chelem", "4 médailles d'or olympiques"],
      period: "Époque contemporaine",
      startYear: 1981,
      endYear: null,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd8facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Joueuse de tennis américaine, l'une des plus grandes joueuses de tous les temps.",
      detailedDescription: "Serena Williams a dominé le tennis féminin pendant plus de deux décennies.",
      achievements: [
        "23 titres du Grand Chelem en simple",
        "4 médailles d'or olympiques",
        "319 semaines numéro 1 mondiale",
        "Plus de 850 matchs gagnés"
      ],
      contributions: [
        "Émancipation des femmes dans le sport",
        "Diversité dans le tennis",
        "Entrepreneuriat sportif",
        "Activisme social"
      ],
      stats: { publications: 2, influence: 98, followers: "38.7M", projects: 28 },
      color: "#DC2626"
    },
    {
      id: 401,
      name: "Nelson Mandela",
      country: "Afrique du Sud",
      category: "non_scientifique",
      subcategory: "Droits Humains & Action Sociale",
      discipline: "Droits Humains",
      subdiscipline: "Droits civils et politiques",
      specialty: "Réconciliation nationale & Démocratie",
      awards: ["Prix Nobel de la Paix 1993"],
      period: "Époque contemporaine",
      startYear: 1918,
      endYear: 2013,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Premier président noir d'Afrique du Sud, symbole mondial de la lutte contre l'apartheid.",
      detailedDescription: "Nelson Mandela a passé 27 ans en prison pour son combat contre l'apartheid.",
      achievements: [
        "Premier président démocratiquement élu d'Afrique du Sud",
        "Prix Nobel de la Paix 1993",
        "27 ans d'emprisonnement politique",
        "Fin pacifique de l'apartheid"
      ],
      contributions: [
        "Transition démocratique sans violence",
        "Commission vérité et réconciliation",
        "Droits humains universels",
        "Leadership éthique"
      ],
      stats: { publications: 4, influence: 100, followers: "42.8M", projects: 28 },
      color: "#e74c3c"
    },
    {
      id: 402,
      name: "Martin Luther King Jr.",
      country: "États-Unis",
      category: "non_scientifique",
      subcategory: "Droits Humains & Action Sociale",
      discipline: "Droits Humains",
      subdiscipline: "Droits civils et politiques",
      specialty: "Mouvement des droits civiques & Non-violence",
      awards: ["Prix Nobel de la Paix 1964"],
      period: "Époque contemporaine",
      startYear: 1929,
      endYear: 1968,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Pasteur et militant américain, leader du mouvement des droits civiques.",
      detailedDescription: "Martin Luther King Jr. a mené la lutte non-violente pour les droits civiques des Afro-Américains.",
      achievements: [
        "Prix Nobel de la Paix 1964",
        "Loi sur les droits civiques de 1964",
        "Loi sur le droit de vote de 1965",
        "Marche sur Washington pour l'emploi et la liberté"
      ],
      contributions: [
        "Stratégie de la non-violence",
        "Organisation communautaire",
        "Leadership moral",
        "Inspiration mondiale pour les droits humains"
      ],
      stats: { publications: 8, influence: 99, followers: "38.5M", projects: 45 },
      color: "#3B82F6"
    },
    {
      id: 404,
      name: "Barack Obama",
      country: "États-Unis",
      category: "non_scientifique",
      subcategory: "Politique & Leadership",
      discipline: "Politique",
      subdiscipline: "Gouvernance",
      specialty: "Premier président afro-américain des États-Unis",
      awards: ["Prix Nobel de la Paix 2009"],
      period: "Époque contemporaine",
      startYear: 1961,
      endYear: null,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "44e président des États-Unis, premier Afro-Américain élu à cette fonction.",
      detailedDescription: "Barack Obama a servi deux mandats comme président des États-Unis.",
      achievements: [
        "Premier président afro-américain des États-Unis",
        "Prix Nobel de la Paix 2009",
        "Affordable Care Act (Obamacare)",
        "Accord de Paris sur le climat"
      ],
      contributions: [
        "Réforme du système de santé",
        "Diplomatie internationale",
        "Inspiration pour la diversité politique",
        "Fondation Obama"
      ],
      stats: { publications: 3, influence: 99, followers: "152.8M", projects: 56 },
      color: "#3B82F6"
    },
    {
      id: 406,
      name: "Madam C.J. Walker",
      country: "États-Unis",
      category: "non_scientifique",
      subcategory: "Économie & Entrepreneuriat",
      discipline: "Entrepreneuriat",
      subdiscipline: "Création d'entreprise",
      specialty: "Première femme millionnaire autodidacte aux États-Unis",
      awards: [],
      period: "Temps modernes",
      startYear: 1867,
      endYear: 1919,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Entrepreneure et philanthrope américaine, première femme millionnaire autodidacte aux États-Unis.",
      detailedDescription: "Madam C.J. Walker a créé une entreprise de produits capillaires pour femmes noires.",
      achievements: [
        "Première femme millionnaire autodidacte aux États-Unis",
        "Création de la Madam C.J. Walker Manufacturing Company",
        "Employeur de plus de 40 000 personnes",
        "Philanthropie éducative"
      ],
      contributions: [
        "Entrepreneuriat afro-américain",
        "Autonomisation économique des femmes",
        "Philanthropie",
        "Innovation dans les produits de beauté"
      ],
      stats: { publications: 2, influence: 94, followers: "5.2M", projects: 28 },
      color: "#8B5CF6"
    },
    {
      id: 408,
      name: "Frantz Fanon",
      country: "Martinique/France/Algérie",
      category: "non_scientifique",
      subcategory: "Humanités & Traditions",
      discipline: "Philosophie",
      subdiscipline: "Philosophie politique",
      specialty: "Psychiatrie coloniale & Décolonisation",
      awards: [],
      period: "Époque contemporaine",
      startYear: 1925,
      endYear: 1961,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Psychiatre, philosophe et militant anticolonialiste.",
      detailedDescription: "Frantz Fanon a analysé les effets psychologiques du colonialisme.",
      achievements: [
        "Chef de service à l'hôpital psychiatrique de Blida",
        "Ambassadeur du GPRA au Ghana",
        "Auteur de 'Peau noire, masques blancs'",
        "Influence sur les mouvements de libération"
      ],
      contributions: [
        "Théorie de la décolonisation",
        "Psychiatrie politique",
        "Critique du racisme systémique",
        "Pensée postcoloniale"
      ],
      stats: { publications: 7, influence: 97, followers: "6.9M", projects: 23 },
      color: "#e67e22"
    },
    {
      id: 410,
      name: "Amadou Hampâté Bâ",
      country: "Mali",
      category: "non_scientifique",
      subcategory: "Humanités & Traditions",
      discipline: "Traditions Culturelles",
      subdiscipline: "Traditions orales",
      specialty: "Sagesse africaine & Conservation du patrimoine oral",
      awards: ["Grand prix littéraire d'Afrique noire"],
      period: "Époque contemporaine",
      startYear: 1900,
      endYear: 1991,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Écrivain et ethnologue malien, célèbre pour sa défense des traditions orales africaines.",
      detailedDescription: "Amadou Hampâté Bâ a consacré sa vie à recueillir, transcrire et préserver les traditions orales.",
      achievements: [
        "Membre de l'UNESCO",
        "Auteur de la célèbre phrase 'En Afrique, quand un vieillard meurt, c'est une bibliothèque qui brûle'",
        "Transcription de milliers de pages de tradition orale",
        "Grand prix littéraire d'Afrique noire"
      ],
      contributions: [
        "Préservation du patrimoine oral",
        "Ethnographie africaine",
        "Littérature orale transcrite",
        "Philosophie de la sagesse africaine"
      ],
      stats: { publications: 15, influence: 91, followers: "2.4M", projects: 67 },
      color: "#16a085"
    }
  ];

  // Générer plus de personnalités pour atteindre 400+
  const generateAdditionalPersonalities = () => {
    const additional = [];
    const categories = [
      { cat: "scientifique", subcats: Object.keys(scientificStructure) },
      { cat: "non_scientifique", subcats: Object.keys(nonScientificStructure) }
    ];

    const africanNames = [
      "Kwame", "Amina", "Chinwe", "Fatou", "Idriss", "Jelani", "Kofi", "Lindiwe", 
      "Moussa", "Nia", "Oumar", "Peniel", "Rashid", "Sade", "Tunde", "Uche", "Yaa",
      "Zanele", "Abena", "Bakari", "Chike", "Dakarai", "Eshe", "Faraji"
    ];

    const lastNames = [
      "Diop", "Ndiaye", "Traoré", "Touré", "Diallo", "Keita", "Cissé", "Sow",
      "Ba", "Fall", "Gueye", "Kane", "Sy", "Mbaye", "Niang", "Sarr", "Faye",
      "Mendes", "Santos", "Silva", "Costa", "Oliveira", "Pereira", "Rodrigues"
    ];

    const specialties = [
      "Innovation technologique", "Recherche médicale", "Développement durable",
      "Éducation communautaire", "Arts traditionnels", "Musique contemporaine",
      "Littérature engagée", "Cinéma documentaire", "Journalisme d'investigation",
      "Entrepreneuriat social", "Leadership communautaire", "Défense des droits",
      "Conservation culturelle", "Innovation agricole", "Santé publique"
    ];

    for (let i = 500; i < 900; i++) {
      const category = categories[Math.floor(Math.random() * categories.length)];
      const subcategory = category.subcats[Math.floor(Math.random() * category.subcats.length)];
      
      let disciplineOptions = [];
      if (category.cat === "scientifique") {
        disciplineOptions = Object.keys(scientificStructure[subcategory]?.disciplines || {});
      } else {
        disciplineOptions = Object.keys(nonScientificStructure[subcategory]?.disciplines || {});
      }
      
      const discipline = disciplineOptions[Math.floor(Math.random() * disciplineOptions.length)];
      
      let subdisciplineOptions = [];
      if (category.cat === "scientifique" && scientificStructure[subcategory]?.disciplines[discipline]) {
        subdisciplineOptions = scientificStructure[subcategory].disciplines[discipline].subdisciplines || [];
      } else if (nonScientificStructure[subcategory]?.disciplines[discipline]) {
        subdisciplineOptions = nonScientificStructure[subcategory].disciplines[discipline].subdisciplines || [];
      }
      
      const subdiscipline = subdisciplineOptions.length > 0 
        ? subdisciplineOptions[Math.floor(Math.random() * subdisciplineOptions.length)]
        : "Spécialité générale";

      const firstName = africanNames[Math.floor(Math.random() * africanNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const country = countriesByContinent.Afrique[Math.floor(Math.random() * countriesByContinent.Afrique.length)];

      additional.push({
        id: i,
        name: `${firstName} ${lastName}`,
        country: country,
        category: category.cat,
        subcategory: subcategory,
        discipline: discipline,
        subdiscipline: subdiscipline,
        specialty: specialties[Math.floor(Math.random() * specialties.length)],
        awards: ["Prix d'Excellence", "Médaille du Mérite"],
        period: historicalPeriods[Math.floor(Math.random() * historicalPeriods.length)].name,
        startYear: 1900 + Math.floor(Math.random() * 100),
        endYear: Math.random() > 0.5 ? 2000 + Math.floor(Math.random() * 25) : null,
        image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 10000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`,
        description: `${firstName} ${lastName} est un(e) expert(e) reconnu(e) dans le domaine de ${subdiscipline.toLowerCase()}.`,
        detailedDescription: `Avec une carrière dédiée à l'excellence dans ${subdiscipline.toLowerCase()}, ${firstName} ${lastName} a apporté des contributions significatives à son domaine.`,
        achievements: [
          `Réalisations majeures dans ${subdiscipline.toLowerCase()}`,
          "Contributions à la recherche et au développement",
          "Mentorat de jeunes professionnels",
          "Publications académiques influentes"
        ],
        contributions: [
          `Avancées dans le domaine de ${subdiscipline.toLowerCase()}`,
          "Promotion de l'excellence académique",
          "Développement communautaire",
          "Innovation et créativité"
        ],
        stats: {
          publications: Math.floor(Math.random() * 100),
          influence: 70 + Math.floor(Math.random() * 30),
          followers: `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 9)}M`,
          projects: Math.floor(Math.random() * 50)
        },
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`
      });
    }

    return additional;
  };

  const [personalities, setPersonalities] = useState(() => {
    const saved = localStorage.getItem('musee-personnalities');
    if (saved) {
      const data = JSON.parse(saved);
      const existingIds = new Set(data.map(p => p.id));
      const toAdd = initialPersonalities.filter(p => !existingIds.has(p.id));
      const additional = generateAdditionalPersonalities().filter(p => !existingIds.has(p.id));
      return [...data, ...toAdd, ...additional];
    }
    return [...initialPersonalities, ...generateAdditionalPersonalities()];
  });

  useEffect(() => {
    localStorage.setItem('musee-personnalities', JSON.stringify(personalities));
  }, [personalities]);

  const allAwards = Array.from(new Set(
    Object.values(scientificStructure).flatMap(category => 
      Object.values(category.disciplines).flatMap(discipline => 
        discipline.awards || []
      )
    ).concat(
      Object.values(nonScientificStructure).flatMap(category => 
        Object.values(category.disciplines).flatMap(discipline => 
          discipline.awards || []
        )
      )
    )
  )).sort();

  const formatYear = (year) => {
    if (year === null || year === undefined) return "Présent";
    if (year < 0) {
      return `${Math.abs(year)} av. J.-C.`;
    }
    return `${year} apr. J.-C.`;
  };

  const isPersonalityActiveInInterval = (personality, startYear, endYear) => {
    if (!startYear && !endYear) return true;
    if (!personality.startYear || !personality.endYear) return true;
    const personStart = parseInt(personality.startYear);
    const personEnd = personality.endYear ? parseInt(personality.endYear) : 2025;
    if (startYear && !endYear) return personEnd >= parseInt(startYear);
    if (!startYear && endYear) return personStart <= parseInt(endYear);
    if (startYear && endYear) {
      const filterStart = parseInt(startYear);
      const filterEnd = parseInt(endYear);
      return (
        (personStart >= filterStart && personStart <= filterEnd) ||
        (personEnd >= filterStart && personEnd <= filterEnd) ||
        (personStart <= filterStart && personEnd >= filterEnd)
      );
    }
    return true;
  };

  const filteredPersonalities = personalities.filter(personality => {
    const matchesSearch = personality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      personality.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      personality.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      personality.subdiscipline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      personality.discipline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (personality.awards && personality.awards.some(award => 
        award.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    const matchesCountry = !selectedCountry || personality.country === selectedCountry;
    const matchesCategory = !selectedCategory || personality.category === selectedCategory;
    const matchesSubCategory = !selectedSubCategory || personality.subcategory === selectedSubCategory;
    const matchesDiscipline = !selectedDiscipline || personality.discipline === selectedDiscipline;
    const matchesSubDiscipline = !selectedSubDiscipline || personality.subdiscipline === selectedSubDiscipline;
    const matchesAward = !selectedAward || 
      (personality.awards && personality.awards.includes(selectedAward));
    const matchesPeriod = !selectedPeriod || personality.period === selectedPeriod;
    const matchesYear = !selectedYear || 
      (personality.startYear && personality.endYear && 
       parseInt(selectedYear) >= personality.startYear && 
       parseInt(selectedYear) <= personality.endYear);
    const matchesInterval = isPersonalityActiveInInterval(personality, selectedStartYear, selectedEndYear);
    const matchesTab = activeTab === 'tout' || personality.category === activeTab;
    return matchesSearch && matchesCountry && matchesCategory && 
           matchesSubCategory && matchesDiscipline && matchesSubDiscipline && 
           matchesAward && (matchesPeriod || matchesYear) && matchesInterval && matchesTab;
  });

  const handleInputChange = (field, value) => {
    setNewPersonality(prev => ({ ...prev, [field]: value }));
  };
  const handleNestedInputChange = (parent, field, value) => {
    setNewPersonality(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };
  const handleArrayInputChange = (field, index, value) => {
    setNewPersonality(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };
  const addArrayItem = (field) => {
    setNewPersonality(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };
  const removeArrayItem = (field, index) => {
    setNewPersonality(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewPersonality(prev => ({ ...prev, image: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPersonalityWithId = {
      ...newPersonality,
      id: Date.now(),
      stats: {
        ...newPersonality.stats,
        followers: parseInt(newPersonality.stats.followers) > 1000 ? 
          `${(parseInt(newPersonality.stats.followers) / 1000).toFixed(1)}K` : 
          newPersonality.stats.followers.toString()
      }
    };
    setPersonalities(prev => [...prev, newPersonalityWithId]);
    setNewPersonality({
      name: '',
      country: '',
      category: 'scientifique',
      subcategory: '',
      discipline: '',
      subdiscipline: '',
      specialty: '',
      awards: [''],
      period: '',
      startYear: '',
      endYear: '',
      image: null,
      description: '',
      detailedDescription: '',
      achievements: [''],
      contributions: [''],
      stats: {
        publications: 0,
        influence: 50,
        followers: "0",
        projects: 0
      },
      color: '#1565c0'
    });
    setShowAddForm(false);
  };
  const openPersonalityModal = (personality) => {
    setSelectedPersonality(personality);
    setIsModalOpen(true);
  };
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCountry('');
    setSelectedCategory('');
    setSelectedSubCategory('');
    setSelectedDiscipline('');
    setSelectedSubDiscipline('');
    setSelectedAward('');
    setSelectedPeriod('');
    setSelectedYear('');
    setSelectedStartYear('');
    setSelectedEndYear('');
  };
  const activeFilters = [
    selectedCountry && `Pays: ${selectedCountry}`,
    selectedCategory && `Catégorie: ${selectedCategory === 'scientifique' ? 'Scientifique' : 'Non-scientifique'}`,
    selectedSubCategory && `Sous-catégorie: ${selectedSubCategory}`,
    selectedDiscipline && `Discipline: ${selectedDiscipline}`,
    selectedSubDiscipline && `Spécialité: ${selectedSubDiscipline}`,
    selectedAward && `Prix: ${selectedAward}`,
    selectedPeriod && `Période: ${selectedPeriod}`,
    selectedYear && `Année: ${selectedYear}`,
    (selectedStartYear || selectedEndYear) && `Intervalle: ${selectedStartYear || '∞'} → ${selectedEndYear || '∞'}`
  ].filter(Boolean);
  const getSubCategories = () => {
    if (!selectedCategory) return [];
    if (selectedCategory === 'scientifique') {
      return Object.keys(scientificStructure);
    }
    return Object.keys(nonScientificStructure);
  };
  const getDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory) return [];
    if (selectedCategory === 'scientifique') {
      return Object.keys(scientificStructure[selectedSubCategory]?.disciplines || {});
    }
    return Object.keys(nonScientificStructure[selectedSubCategory]?.disciplines || {});
  };
  const getSubDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedDiscipline) return [];
    if (selectedCategory === 'scientifique') {
      const discipline = scientificStructure[selectedSubCategory]?.disciplines[selectedDiscipline];
      return discipline?.subdisciplines || [];
    }
    const discipline = nonScientificStructure[selectedSubCategory]?.disciplines[selectedDiscipline];
    return discipline?.subdisciplines || [];
  };
  const getAwardsForDiscipline = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedDiscipline) return [];
    if (selectedCategory === 'scientifique') {
      const discipline = scientificStructure[selectedSubCategory]?.disciplines[selectedDiscipline];
      return discipline?.awards || [];
    }
    const discipline = nonScientificStructure[selectedSubCategory]?.disciplines[selectedDiscipline];
    return discipline?.awards || [];
  };

  return (
    <div className="mp-page">
      {/* Hero Section */}
      <section className="mp-hero-section">
        <div className="mp-hero-background">
          <div className="mp-hero-image"></div>
          <div className="mp-hero-gradient"></div>
          <div className="mp-hero-pattern"></div>
        </div>
        <div className="mp-hero-content">
          <div className="mp-hero-badge">
            <Zap size={16} />
            Patrimoine Afro Exceptionnel
          </div>
          <h1 className="mp-hero-title">
            Musée des <span className="mp-hero-highlight"> Grandes Figures Afro</span>
            <br />
            de l'Histoire Mondiale
          </h1>
          <p className="mp-hero-subtitle">
            Découvrez l'héritage précieux des personnalités afro qui ont façonné notre monde à travers la science, les arts, la politique, le sport et l'innovation.
          </p>
          <div className="mp-hero-stats">
            <div className="mp-stat">
              <div className="mp-stat-number">{personalities.length}+</div>
              <div className="mp-stat-label">Personnalités Afro</div>
            </div>
            <div className="mp-stat">
              <div className="mp-stat-number">{Object.values(countriesByContinent).flat().length}</div>
              <div className="mp-stat-label">Pays représentés</div>
            </div>
            <div className="mp-stat">
              <div className="mp-stat-number">{allAwards.length}</div>
              <div className="mp-stat-label">Prix répertoriés</div>
            </div>
          </div>
          <div className="mp-hero-actions">
            <button className="mp-cta-button" onClick={() => document.querySelector('.mp-filters-section').scrollIntoView({ behavior: 'smooth' })}>
              Explorer la Collection
              <ArrowRight size={20} />
            </button>
            <button className="mp-add-button" onClick={() => setShowAddForm(true)}>
              <Plus size={20} />
              Ajouter une Personnalité
            </button>
          </div>
        </div>
        <div className="mp-scroll-indicator">
          <ArrowRight size={20} className="mp-bounce" />
        </div>
      </section>

      {/* Navigation par onglets */}
      <div className="mp-tabs-section">
        <div className="mp-container">
          <div className="mp-tabs-container">
            <button className={`mp-tab ${activeTab === 'tout' ? 'mp-active' : ''}`} onClick={() => setActiveTab('tout')}>
              <Globe size={18} />
              Toutes les catégories
            </button>
            <button className={`mp-tab ${activeTab === 'scientifique' ? 'mp-active' : ''}`} onClick={() => setActiveTab('scientifique')}>
              <Award size={18} />
              Scientifique
            </button>
            <button className={`mp-tab ${activeTab === 'non_scientifique' ? 'mp-active' : ''}`} onClick={() => setActiveTab('non_scientifique')}>
              <Users size={18} />
              Non-scientifique
            </button>
          </div>
        </div>
      </div>

      {/* Section de filtres avancés */}
      <section className="mp-filters-section">
        <div className="mp-container">
          <div className="mp-filters-container">
            <div className="mp-search-filter">
              <div className="mp-search-box">
                <Search size={20} className="mp-search-icon" />
                <input 
                  type="text" 
                  placeholder="Rechercher une personnalité, spécialité, discipline, prix..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="mp-search-input" 
                />
              </div>
              <button className="mp-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                <Filter size={18} />
                Filtres avancés
                <ChevronDown size={16} className={showFilters ? 'mp-rotated' : ''} />
              </button>
            </div>
            {showFilters && (
              <div className="mp-advanced-filters">
                <div className="mp-filter-group">
                  <label>Pays d'origine</label>
                  <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="mp-filter-select">
                    <option value="">Tous les pays</option>
                    {Object.entries(countriesByContinent).map(([continent, countries]) => (
                      <optgroup key={continent} label={continent}>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div className="mp-filter-row">
                  <div className="mp-filter-group">
                    <label>Catégorie principale</label>
                    <select 
                      value={selectedCategory} 
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedSubCategory('');
                        setSelectedDiscipline('');
                        setSelectedSubDiscipline('');
                        setSelectedAward('');
                      }} 
                      className="mp-filter-select"
                    >
                      <option value="">Toutes les catégories</option>
                      <option value="scientifique">Scientifique</option>
                      <option value="non_scientifique">Non-scientifique</option>
                    </select>
                  </div>
                  {selectedCategory && (
                    <div className="mp-filter-group">
                      <label>Sous-catégorie</label>
                      <select 
                        value={selectedSubCategory} 
                        onChange={(e) => {
                          setSelectedSubCategory(e.target.value);
                          setSelectedDiscipline('');
                          setSelectedSubDiscipline('');
                          setSelectedAward('');
                        }} 
                        className="mp-filter-select"
                      >
                        <option value="">Toutes les sous-catégories</option>
                        {getSubCategories().map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                {selectedSubCategory && (
                  <div className="mp-filter-row">
                    <div className="mp-filter-group">
                      <label>Discipline</label>
                      <select 
                        value={selectedDiscipline} 
                        onChange={(e) => {
                          setSelectedDiscipline(e.target.value);
                          setSelectedSubDiscipline('');
                          setSelectedAward('');
                        }} 
                        className="mp-filter-select"
                      >
                        <option value="">Toutes les disciplines</option>
                        {getDisciplines().map(discipline => (
                          <option key={discipline} value={discipline}>{discipline}</option>
                        ))}
                      </select>
                    </div>
                    {selectedDiscipline && (
                      <div className="mp-filter-group">
                        <label>Spécialité</label>
                        <select 
                          value={selectedSubDiscipline} 
                          onChange={(e) => setSelectedSubDiscipline(e.target.value)} 
                          className="mp-filter-select"
                        >
                          <option value="">Toutes les spécialités</option>
                          {getSubDisciplines().map(subDiscipline => (
                            <option key={subDiscipline} value={subDiscipline}>{subDiscipline}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}
                {selectedDiscipline && (
                  <div className="mp-filter-group">
                    <label>Prix associé</label>
                    <select 
                      value={selectedAward} 
                      onChange={(e) => setSelectedAward(e.target.value)} 
                      className="mp-filter-select"
                    >
                      <option value="">Tous les prix</option>
                      {getAwardsForDiscipline().map(award => (
                        <option key={award} value={award}>{award}</option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="mp-filter-row">
                  <div className="mp-filter-group">
                    <label>Période historique</label>
                    <select 
                      value={selectedPeriod} 
                      onChange={(e) => setSelectedPeriod(e.target.value)} 
                      className="mp-filter-select"
                    >
                      <option value="">Toutes les périodes</option>
                      {historicalPeriods.map(period => (
                        <option key={period.name} value={period.name}>
                          {period.name} ({formatYear(period.start)} → {formatYear(period.end)})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mp-form-group">
                    <label>Année spécifique</label>
                    <input 
                      type="number" 
                      value={selectedYear} 
                      onChange={(e) => setSelectedYear(e.target.value)}
                      placeholder="Ex: 1950"
                      className="mp-year-input"
                    />
                  </div>
                </div>
                <div className="mp-filter-row">
                  <div className="mp-filter-group">
                    <label>Intervalle de temps - Début</label>
                    <input 
                      type="number" 
                      value={selectedStartYear} 
                      onChange={(e) => setSelectedStartYear(e.target.value)}
                      placeholder="Année de début (ex: 1900)"
                      className="mp-year-input"
                      min="-3300000"
                      max="2025"
                    />
                  </div>
                  <div className="mp-filter-group">
                    <label>Intervalle de temps - Fin</label>
                    <input 
                      type="number" 
                      value={selectedEndYear} 
                      onChange={(e) => setSelectedEndYear(e.target.value)}
                      placeholder="Année de fin (ex: 2000)"
                      className="mp-year-input"
                      min="-3300000"
                      max="2025"
                    />
                  </div>
                </div>
                <div className="mp-interval-help">
                  <Info size={16} />
                  <span>L'intervalle affiche les personnalités actives entre ces années</span>
                </div>
              </div>
            )}
            {activeFilters.length > 0 && (
              <div className="mp-active-filters">
                <div className="mp-filters-list">
                  {activeFilters.map((filter, index) => (
                    <span key={index} className="mp-filter-tag">
                      {filter}
                      <button onClick={() => {
                        if (filter.includes('Pays:')) setSelectedCountry('');
                        else if (filter.includes('Catégorie:')) {
                          setSelectedCategory('');
                          setSelectedSubCategory('');
                          setSelectedDiscipline('');
                          setSelectedSubDiscipline('');
                          setSelectedAward('');
                        } else if (filter.includes('Sous-catégorie:')) {
                          setSelectedSubCategory('');
                          setSelectedDiscipline('');
                          setSelectedSubDiscipline('');
                          setSelectedAward('');
                        } else if (filter.includes('Discipline:')) {
                          setSelectedDiscipline('');
                          setSelectedSubDiscipline('');
                          setSelectedAward('');
                        } else if (filter.includes('Spécialité:')) setSelectedSubDiscipline('');
                        else if (filter.includes('Prix:')) setSelectedAward('');
                        else if (filter.includes('Période:')) setSelectedPeriod('');
                        else if (filter.includes('Année:')) setSelectedYear('');
                        else if (filter.includes('Intervalle:')) {
                          setSelectedStartYear('');
                          setSelectedEndYear('');
                        }
                      }}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <button className="mp-clear-all" onClick={clearFilters}>
                  Tout effacer
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <main className="mp-main-content">
        <div className="mp-container">
          <div className="mp-results-header">
            <h2 className="mp-results-title">
              {filteredPersonalities.length} personnalité{filteredPersonalities.length !== 1 ? 's' : ''} trouvée{filteredPersonalities.length !== 1 ? 's' : ''}
            </h2>
            <div className="mp-results-stats">
              <div className="mp-stat">
                <Trophy size={20} />
                <span>{allAwards.length} Prix et distinctions</span>
              </div>
              <div className="mp-stat">
                <Book size={20} />
                <span>{Object.keys(scientificStructure).length + Object.keys(nonScientificStructure).length} Domaines</span>
              </div>
            </div>
          </div>
          {filteredPersonalities.length === 0 ? (
            <div className="mp-no-results">
              <div className="mp-no-results-content">
                <Search size={48} />
                <h3>Aucune personnalité trouvée</h3>
                <p>Essayez de modifier vos critères de recherche ou vos filtres</p>
                <button className="mp-reset-btn" onClick={clearFilters}>
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          ) : (
            <div className="mp-personalities-grid">
              {filteredPersonalities.map(personality => (
                <div key={personality.id} className="mp-personality-card" onClick={() => openPersonalityModal(personality)}>
                  <div className="mp-card-image">
                    <img src={personality.image || "/api/placeholder/400/500"} alt={personality.name} />
                    <div className="mp-card-overlay">
                      <div className="mp-overlay-content">
                        <span className="mp-view-details">Voir les détails</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                    <div className="mp-card-badge" style={{backgroundColor: personality.color}}>
                      {personality.category === 'scientifique' ? 'Science' : 'Culture'}
                    </div>
                  </div>
                  <div className="mp-card-content">
                    <div className="mp-card-header">
                      <h3 className="mp-personality-name">{personality.name}</h3>
                      <div className="mp-personality-meta">
                        <div className="mp-country">
                          <MapPin size={14} />
                          {personality.country}
                        </div>
                        <div className="mp-period">
                          {personality.startYear && personality.endYear ? 
                            `${formatYear(personality.startYear)} - ${formatYear(personality.endYear)}` : 
                            personality.period
                          }
                        </div>
                      </div>
                    </div>
                    <div className="mp-specialty">{personality.specialty}</div>
                    <p className="mp-description">{personality.description}</p>
                    {personality.awards && personality.awards.length > 0 && (
                      <div className="mp-awards-preview">
                        <Trophy size={14} />
                        <span>{personality.awards[0]}</span>
                        {personality.awards.length > 1 && (
                          <span className="mp-more-awards">+{personality.awards.length - 1} autres</span>
                        )}
                      </div>
                    )}
                    <div className="mp-achievements">
                      {personality.achievements.slice(0, 2).map((achievement, index) => (
                        <span key={index} className="mp-achievement-tag">
                          {achievement}
                        </span>
                      ))}
                    </div>
                    <div className="mp-card-stats">
                      <div className="mp-stat">
                        <Book size={14} />
                        {personality.stats.publications} publication{personality.stats.publications !== 1 ? 's' : ''}
                      </div>
                      <div className="mp-stat">
                        <TrendingUp size={14} />
                        Influence: {personality.stats.influence}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Modal d'ajout */}
      {showAddForm && (
        <div className="mp-modal-overlay" onClick={() => setShowAddForm(false)}>
          <div className="mp-modal-content mp-add-modal" onClick={(e) => e.stopPropagation()}>
            <button className="mp-modal-close" onClick={() => setShowAddForm(false)}>
              <X size={24} />
            </button>
            <h2 className="mp-modal-title">Ajouter une Nouvelle Personnalité Afro</h2>
            <form onSubmit={handleSubmit} className="mp-add-form">
              <div className="mp-form-section">
                <h3>Informations de base</h3>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Nom complet *</label>
                    <input 
                      type="text" 
                      value={newPersonality.name} 
                      onChange={(e) => handleInputChange('name', e.target.value)} 
                      required 
                      placeholder="Ex: Cheikh Anta Diop" 
                    />
                  </div>
                  <div className="mp-form-group">
                    <label>Pays d'origine *</label>
                    <select 
                      value={newPersonality.country} 
                      onChange={(e) => handleInputChange('country', e.target.value)} 
                      required
                    >
                      <option value="">Sélectionnez un pays</option>
                      {Object.entries(countriesByContinent).map(([continent, countries]) => (
                        <optgroup key={continent} label={continent}>
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Catégorie principale *</label>
                    <select 
                      value={newPersonality.category} 
                      onChange={(e) => handleInputChange('category', e.target.value)} 
                      required
                    >
                      <option value="scientifique">Scientifique</option>
                      <option value="non_scientifique">Non-scientifique</option>
                    </select>
                  </div>
                  <div className="mp-form-group">
                    <label>Sous-catégorie *</label>
                    <select 
                      value={newPersonality.subcategory} 
                      onChange={(e) => handleInputChange('subcategory', e.target.value)} 
                      required
                    >
                      <option value="">Sélectionnez une sous-catégorie</option>
                      {newPersonality.category === 'scientifique' ? (
                        Object.keys(scientificStructure).map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      ) : (
                        Object.keys(nonScientificStructure).map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Discipline *</label>
                    <select 
                      value={newPersonality.discipline} 
                      onChange={(e) => handleInputChange('discipline', e.target.value)} 
                      required
                    >
                      <option value="">Sélectionnez une discipline</option>
                      {newPersonality.category === 'scientifique' && newPersonality.subcategory && (
                        Object.keys(scientificStructure[newPersonality.subcategory]?.disciplines || {}).map(discipline => (
                          <option key={discipline} value={discipline}>{discipline}</option>
                        ))
                      )}
                      {newPersonality.category === 'non_scientifique' && newPersonality.subcategory && (
                        Object.keys(nonScientificStructure[newPersonality.subcategory]?.disciplines || {}).map(discipline => (
                          <option key={discipline} value={discipline}>{discipline}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="mp-form-group">
                    <label>Spécialité détaillée *</label>
                    <select 
                      value={newPersonality.subdiscipline} 
                      onChange={(e) => handleInputChange('subdiscipline', e.target.value)} 
                      required
                    >
                      <option value="">Sélectionnez une spécialité</option>
                      {newPersonality.category === 'scientifique' && newPersonality.subcategory && newPersonality.discipline && (
                        scientificStructure[newPersonality.subcategory]?.disciplines[newPersonality.discipline]?.subdisciplines.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      )}
                      {newPersonality.category === 'non_scientifique' && newPersonality.subcategory && newPersonality.discipline && (
                        nonScientificStructure[newPersonality.subcategory]?.disciplines[newPersonality.discipline]?.subdisciplines.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Domaine d'expertise *</label>
                    <input 
                      type="text" 
                      value={newPersonality.specialty} 
                      onChange={(e) => handleInputChange('specialty', e.target.value)} 
                      required 
                      placeholder="Ex: Égyptologie & Histoire Africaine" 
                    />
                  </div>
                  <div className="mp-form-group">
                    <label>Période historique *</label>
                    <select 
                      value={newPersonality.period} 
                      onChange={(e) => handleInputChange('period', e.target.value)} 
                      required
                    >
                      <option value="">Sélectionnez une période</option>
                      {historicalPeriods.map(period => (
                        <option key={period.name} value={period.name}>
                          {period.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Année de début</label>
                    <input 
                      type="number" 
                      value={newPersonality.startYear} 
                      onChange={(e) => handleInputChange('startYear', e.target.value)} 
                      placeholder="Ex: 1923" 
                    />
                  </div>
                  <div className="mp-form-group">
                    <label>Année de fin</label>
                    <input 
                      type="number" 
                      value={newPersonality.endYear} 
                      onChange={(e) => handleInputChange('endYear', e.target.value)} 
                      placeholder="Ex: 1986" 
                    />
                  </div>
                </div>
              </div>
              <div className="mp-form-section">
                <h3>Récompenses et distinctions</h3>
                <div className="mp-form-group">
                  <label>Prix reçus</label>
                  {newPersonality.awards.map((award, index) => (
                    <div key={index} className="mp-array-input">
                      <select 
                        value={award} 
                        onChange={(e) => handleArrayInputChange('awards', index, e.target.value)}
                      >
                        <option value="">Sélectionnez un prix</option>
                        {allAwards.map(prix => (
                          <option key={prix} value={prix}>{prix}</option>
                        ))}
                      </select>
                      {newPersonality.awards.length > 1 && (
                        <button type="button" onClick={() => removeArrayItem('awards', index)}>
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={() => addArrayItem('awards')} className="mp-add-item-btn">
                    <Plus size={16} />
                    Ajouter un prix
                  </button>
                </div>
              </div>
              <div className="mp-form-section">
                <h3>Photo et description</h3>
                <div className="mp-form-row">
                  <div className="mp-form-group mp-image-upload">
                    <label>Photo de la personnalité</label>
                    <div className="mp-upload-area">
                      {newPersonality.image ? (
                        <div className="mp-image-preview">
                          <img src={newPersonality.image} alt="Preview" />
                          <button type="button" onClick={() => handleInputChange('image', null)}>
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload size={24} />
                          <span>Cliquer pour uploader une image</span>
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="mp-file-input" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mp-form-group">
                  <label>Description courte *</label>
                  <textarea 
                    value={newPersonality.description} 
                    onChange={(e) => handleInputChange('description', e.target.value)} 
                    required 
                    placeholder="Description concise de la personnalité..." 
                    rows="3" 
                  />
                </div>
                <div className="mp-form-group">
                  <label>Description détaillée *</label>
                  <textarea 
                    value={newPersonality.detailedDescription} 
                    onChange={(e) => handleInputChange('detailedDescription', e.target.value)} 
                    required 
                    placeholder="Biographie complète et détaillée..." 
                    rows="5" 
                  />
                </div>
              </div>
              <div className="mp-form-section">
                <h3>Réalisations et contributions</h3>
                <div className="mp-form-group">
                  <label>Principales réalisations</label>
                  {newPersonality.achievements.map((achievement, index) => (
                    <div key={index} className="mp-array-input">
                      <input 
                        type="text" 
                        value={achievement} 
                        onChange={(e) => handleArrayInputChange('achievements', index, e.target.value)} 
                        placeholder={`Réalisation ${index + 1}`} 
                      />
                      {newPersonality.achievements.length > 1 && (
                        <button type="button" onClick={() => removeArrayItem('achievements', index)}>
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={() => addArrayItem('achievements')} className="mp-add-item-btn">
                    <Plus size={16} />
                    Ajouter une réalisation
                  </button>
                </div>
                <div className="mp-form-group">
                  <label>Contributions majeures</label>
                  {newPersonality.contributions.map((contribution, index) => (
                    <div key={index} className="mp-array-input">
                      <input 
                        type="text" 
                        value={contribution} 
                        onChange={(e) => handleArrayInputChange('contributions', index, e.target.value)} 
                        placeholder={`Contribution ${index + 1}`} 
                      />
                      {newPersonality.contributions.length > 1 && (
                        <button type="button" onClick={() => removeArrayItem('contributions', index)}>
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={() => addArrayItem('contributions')} className="mp-add-item-btn">
                    <Plus size={16} />
                    Ajouter une contribution
                  </button>
                </div>
              </div>
              <div className="mp-form-section">
                <h3>Statistiques et métriques</h3>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Nombre de publications</label>
                    <input 
                      type="number" 
                      value={newPersonality.stats.publications} 
                      onChange={(e) => handleNestedInputChange('stats', 'publications', parseInt(e.target.value))} 
                      min="0" 
                    />
                  </div>
                  <div className="mp-form-group">
                    <label>Niveau d'influence (%)</label>
                    <input 
                      type="range" 
                      value={newPersonality.stats.influence} 
                      onChange={(e) => handleNestedInputChange('stats', 'influence', parseInt(e.target.value))} 
                      min="0" 
                      max="100" 
                    />
                    <span>{newPersonality.stats.influence}%</span>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Nombre de followers</label>
                    <input 
                      type="number" 
                      value={newPersonality.stats.followers} 
                      onChange={(e) => handleNestedInputChange('stats', 'followers', e.target.value)} 
                      min="0" 
                    />
                  </div>
                  <div className="mp-form-group">
                    <label>Nombre de projets</label>
                    <input 
                      type="number" 
                      value={newPersonality.stats.projects} 
                      onChange={(e) => handleNestedInputChange('stats', 'projects', parseInt(e.target.value))} 
                      min="0" 
                    />
                  </div>
                </div>
                <div className="mp-form-group">
                  <label>Couleur de représentation</label>
                  <input 
                    type="color" 
                    value={newPersonality.color} 
                    onChange={(e) => handleInputChange('color', e.target.value)} 
                  />
                </div>
              </div>
              <div className="mp-form-actions">
                <button type="button" onClick={() => setShowAddForm(false)} className="mp-cancel-btn">
                  Annuler
                </button>
                <button type="submit" className="mp-submit-btn">
                  <Plus size={18} />
                  Ajouter la Personnalité Afro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de détail */}
      {isModalOpen && selectedPersonality && (
        <div className="mp-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="mp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mp-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <div className="mp-modal-header">
              <div className="mp-personality-image">
                <img src={selectedPersonality.image || "/api/placeholder/400/500"} alt={selectedPersonality.name} />
                <div className="mp-image-overlay" style={{backgroundColor: `${selectedPersonality.color}20`}}></div>
              </div>
              <div className="mp-personality-info">
                <div className="mp-personality-meta">
                  <span className="mp-category-tag" style={{backgroundColor: selectedPersonality.color}}>
                    {selectedPersonality.category === 'scientifique' ? 'Scientifique' : 'Arts & Culture'}
                  </span>
                  <span className="mp-period-tag">
                    {selectedPersonality.startYear && selectedPersonality.endYear ? 
                      `${formatYear(selectedPersonality.startYear)} - ${formatYear(selectedPersonality.endYear)}` : 
                      selectedPersonality.period
                    }
                  </span>
                </div>
                <h2>{selectedPersonality.name}</h2>
                <div className="mp-specialty-large">{selectedPersonality.specialty}</div>
                <div className="mp-subdiscipline">{selectedPersonality.subdiscipline}</div>
                <div className="mp-info-grid">
                  <div className="mp-info-item">
                    <MapPin size={18} />
                    <span>{selectedPersonality.country}</span>
                  </div>
                  <div className="mp-info-item">
                    <Target size={18} />
                    <span>{selectedPersonality.stats.projects} projets</span>
                  </div>
                  <div className="mp-info-item">
                    <Eye size={18} />
                    <span>{selectedPersonality.stats.followers} followers</span>
                  </div>
                  <div className="mp-info-item">
                    <Award size={18} />
                    <span>{selectedPersonality.discipline}</span>
                  </div>
                </div>
                <div className="mp-influence-meter">
                  <div className="mp-meter-label">
                    <TrendingUp size={16} />
                    Niveau d'influence mondiale
                  </div>
                  <div className="mp-meter-bar">
                    <div 
                      className="mp-meter-fill" 
                      style={{ 
                        width: `${selectedPersonality.stats.influence}%`, 
                        background: selectedPersonality.color 
                      }}
                    ></div>
                  </div>
                  <span className="mp-meter-value">{selectedPersonality.stats.influence}%</span>
                </div>
              </div>
            </div>
            <div className="mp-modal-body">
              <div className="mp-section">
                <h3>Biographie Complète</h3>
                <p>{selectedPersonality.detailedDescription}</p>
              </div>
              {selectedPersonality.awards && selectedPersonality.awards.length > 0 && (
                <div className="mp-section">
                  <h3>Prix et Distinctions</h3>
                  <div className="mp-awards-list">
                    {selectedPersonality.awards.map((award, index) => (
                      <div key={index} className="mp-award-item">
                        <Trophy size={20} />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mp-sections-grid">
                <div className="mp-section">
                  <h3>Principales réalisations</h3>
                  <ul className="mp-achievements-list">
                    {selectedPersonality.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mp-section">
                  <h3>Contributions majeures</h3>
                  <ul className="mp-contributions-list">
                    {selectedPersonality.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mp-stats-grid">
                <div className="mp-stat-card">
                  <Book size={24} />
                  <div className="mp-stat-value">{selectedPersonality.stats.publications}</div>
                  <div className="mp-stat-label">Publications</div>
                </div>
                <div className="mp-stat-card">
                  <Award size={24} />
                  <div className="mp-stat-value">{selectedPersonality.achievements.length}</div>
                  <div className="mp-stat-label">Réalisations</div>
                </div>
                <div className="mp-stat-card">
                  <Users size={24} />
                  <div className="mp-stat-value">{selectedPersonality.stats.followers}</div>
                  <div className="mp-stat-label">Influence</div>
                </div>
                <div className="mp-stat-card">
                  <Target size={24} />
                  <div className="mp-stat-value">{selectedPersonality.stats.projects}</div>
                  <div className="mp-stat-label">Projets</div>
                </div>
              </div>
            </div>
            <div className="mp-modal-footer">
              <div className="mp-action-buttons">
                <button className="mp-action-btn mp-primary">
                  <Heart size={18} />
                  Ajouter aux favoris
                </button>
                <button className="mp-action-btn mp-secondary">
                  <Share2 size={18} />
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MuséePersonnalités;