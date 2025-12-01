// MuséePersonnalités.jsx
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
  GraduationCap
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
const ScissorsIcon = Scissors;

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

  // États pour le formulaire d'ajout
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

  // Pays triés
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

  const historicalPeriods = [
    { name: "Paléolithique", start: -3300000, end: -10000 },
    { name: "Mésolithique", start: -10000, end: -6000 },
    { name: "Néolithique", start: -10000, end: -3300 },
    { name: "Âge du cuivre (Chalcolithique)", start: -4500, end: -3300 },
    { name: "Âge du bronze", start: -3300, end: -1200 },
    { name: "Âge du fer", start: -1200, end: -52 },
    { name: "Antiquité", start: -3300, end: 476 },
    { name: "Moyen Âge", start: 476, end: 1492 },
    { name: "Temps modernes", start: 1492, end: 1789 },
    { name: "Époque contemporaine", start: 1789, end: 2024 },
    { name: "Révolution industrielle (1ère)", start: 1760, end: 1840 },
    { name: "Révolution industrielle (2ème)", start: 1870, end: 1914 },
    { name: "Révolution numérique", start: 1970, end: 2024 }
  ];

  // ⭐ STRUCTURE ULTRA-COMPLÈTE DES SCIENCES + MÉDECINE & CHIRURGIE
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
            "Anesthésie‑réanimation et médecine péri‑opératoire",
            "Biologie médicale",
            "Dermatologie et vénérologie",
            "Endocrinologie‑diabétologie‑nutrition",
            "Génétique médicale",
            "Gériatrie",
            "Gynécologie médicale",
            "Gynécologie‑obstétrique",
            "Hématologie",
            "Hépato‑gastro‑entérologie",
            "Maladies infectieuses et tropicales",
            "Médecine cardiovasculaire",
            "Médecine d'urgence",
            "Médecine et santé au travail",
            "Médecine intensive‑réanimation",
            "Médecine interne et immunologie clinique",
            "Médecine légale et expertises médicales",
            "Médecine nucléaire",
            "Médecine physique et de réadaptation",
            "Médecine vasculaire",
            "Néphrologie",
            "Neurologie",
            "Oncologie",
            "Ophtalmologie",
            "ORL et chirurgie cervico‑faciale",
            "Pédiatrie",
            "Pneumologie",
            "Psychiatrie",
            "Radiologie et imagerie médicale",
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
            "Prix Inserm",
            "Prix Antoine-Lacassagne (cancérologie)",
            "Prix Jean-Bernard (hématologie)",
            "Prix Pierre Bourdillon (infectiologie)",
            "Prix Jean-Pierre Lecocq (biotechnologies)",
            "Prix de la Fondation pour la Recherche Médicale"
          ]
        },
        "Chirurgie": {
          icon: <ScissorsIcon size={18} />,
          color: "#BE123C",
          subdisciplines: [
            "Chirurgie maxillo‑faciale et stomatologie",
            "Chirurgie orale",
            "Chirurgie orthopédique et traumatologique",
            "Chirurgie pédiatrique",
            "Chirurgie plastique, reconstructrice et esthétique",
            "Chirurgie thoracique et cardiovasculaire",
            "Chirurgie vasculaire",
            "Chirurgie viscérale et digestive"
          ],
          awards: [
            "Prix Antoine-Béclère (chirurgie)",
            "Prix Delbet (chirurgie pédiatrique)",
            "Prix Lannelongue (chirurgie cardiaque)",
            "Medal of Honor – American College of Surgeons",
            "Nobel Prize in Physiology or Medicine (for surgical innovations)",
            "Jacobson Innovation Award (vascular surgery)",
            "Prix de la Société Française de Chirurgie",
            "Prix Jean-Gilles (chirurgie plastique)"
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
          icon: <ScissorsIcon size={18} />,
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
          icon: <Mountain size={18} />,
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

  const [categoriesStructure] = useState({
    scientifique: {
      name: "Sciences et Technologies",
      icon: <Microscope size={20} />,
      subcategories: scientificStructure
    },
    non_scientifique: {
      name: "Arts, Culture et Humanités",
      icon: <Palette size={20} />,
      subcategories: {
        "Arts et Culture": {
          icon: <Palette size={18} />,
          color: "#EC4899",
          disciplines: {
            arts_visuels: { name: "Arts Visuels", icon: <Palette size={16} />, subdisciplines: ["Peinture", "Sculpture", "Photographie", "Dessin", "Arts Graphiques", "Gravure", "Installation", "Art Numérique"] },
            arts_scene: { name: "Arts de la Scène", icon: <User size={16} />, subdisciplines: ["Théâtre", "Danse", "Cirque", "Arts du Spectacle", "Mise en Scène", "Chorégraphie", "Art Dramatique", "Performance"] },
            musique: { name: "Musique et Chant", icon: <Music size={16} />, subdisciplines: ["Composition", "Interprétation", "Direction Musicale", "Musicologie", "Chant Traditionnel", "Jazz", "Musique Classique"] },
            litterature: { name: "Littérature et Poésie", icon: <BookOpen size={16} />, subdisciplines: ["Roman", "Poésie", "Nouvelle", "Essai", "Critique Littéraire", "Épopée", "Théâtre Littéraire", "Conte"] },
            cinema: { name: "Cinéma et Audiovisuel", icon: <Camera size={16} />, subdisciplines: ["Réalisation", "Production", "Scénario", "Montage", "Documentaire", "Animation", "Cinéma Expérimental", "Critique Cinématographique"] },
            mode_design: { name: "Mode et Design", icon: <ScissorsIcon size={16} />, subdisciplines: ["Création de Mode", "Design Industriel", "Design Graphique", "Stylisme", "Textile", "Design d'Espace", "Design d'Objet"] }
          }
        },
        "Humanités et Sciences Sociales": {
          icon: <Book size={18} />,
          color: "#8B5CF6",
          disciplines: {
            philosophie: { name: "Philosophie", icon: <Book size={16} />, subdisciplines: ["Éthique", "Métaphysique", "Esthétique", "Philosophie Politique", "Logique Philosophique", "Épistémologie", "Philosophie Africaine"] },
            histoire: { name: "Histoire", icon: <BookOpen size={16} />, subdisciplines: ["Histoire Ancienne", "Histoire Moderne", "Histoire Contemporaine", "Archéologie", "Historiographie", "Histoire Sociale", "Histoire Culturelle"] },
            lettres: { name: "Lettres et Philologie", icon: <Book size={16} />, subdisciplines: ["Linguistique", "Littérature Comparée", "Philologie", "Traduction", "Études Culturelles", "Sémiotique", "Rhétorique"] },
            theologie: { name: "Théologie et Études Religieuses", icon: <User size={16} />, subdisciplines: ["Théologie Systématique", "Études Bibliques", "Histoire des Religions", "Philosophie Religieuse", "Théologie Morale", "Théologie Pratique"] }
          }
        },
        "Vie Sociale et Traditions": {
          icon: <Sparkles size={18} />,
          color: "#F59E0B",
          disciplines: {
            croyances: { name: "Croyances et Spiritualité", icon: <User size={16} />, subdisciplines: ["Spiritualité Traditionnelle", "Rituels", "Croyances Ancestrales", "Métaphysique Africaine", "Cosmogonie", "Divination", "Spiritualité Vivante"] },
            mythes: { name: "Mythes et Traditions", icon: <MythologyIcon size={16} />, subdisciplines: ["Mythologie", "Traditions Orales", "Contes et Légendes", "Sagesse Ancestrale", "Épopées", "Rites de Passage", "Patrimoine Immatériel"] },
            langues: { name: "Langues et Dialectes", icon: <Book size={16} />, subdisciplines: ["Linguistique Descriptive", "Dialectologie", "Langues Africaines", "Patrimoine Linguistique", "Sociolinguistique", "Phonétique", "Sémantique"] }
          }
        }
      }
    }
  });

  // 📌 DONNÉES INITIALES + 10 NOUVELLES PERSONNALITÉS MÉDICALES
  const [personalities, setPersonalities] = useState(() => {
    const saved = localStorage.getItem('musee-personnalites');
    if (saved) return JSON.parse(saved);
    return [
      // ... (vos 30 personnalités existantes – conservées intactes)
      {
        id: 1,
        name: "Cheikh Anta Diop",
        country: "Sénégal",
        category: "scientifique",
        subcategory: "Sciences Humaines & Sociales",
        discipline: "Histoire",
        subdiscipline: "Histoire Ancienne",
        specialty: "Égyptologie & Histoire Africaine",
        awards: ["Prix international de la Recherche Scientifique"],
        period: "Époque contemporaine",
        startYear: 1923,
        endYear: 1986,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Historien et anthropologue visionnaire qui a rétabli la conscience historique africaine et démontré les origines africaines de la civilisation égyptienne.",
        detailedDescription: "Cheikh Anta Diop a consacré sa vie à la réhabilitation de la place de l'Afrique dans l'histoire mondiale. Ses travaux sur l'antériorité des civilisations nègres et leur contribution fondamentale au développement humain ont ouvert de nouvelles perspectives dans les études historiques et anthropologiques. Sa thèse sur l'origine africaine de la civilisation égyptienne a révolutionné l'égyptologie.",
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
        stats: {
          publications: 28,
          influence: 98,
          followers: "1.8M",
          projects: 89
        },
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
        description: "Prix Nobel de la Paix 2004 pour sa contribution au développement durable, à la démocratie et à la paix.",
        detailedDescription: "Wangari Maathai a fondé le Green Belt Movement, organisation environnementale qui a planté plus de 50 millions d'arbres au Kenya. Elle a combiné science environnementale et activisme communautaire.",
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
        stats: {
          publications: 15,
          influence: 95,
          followers: "2.3M",
          projects: 120
        },
        color: "#27ae60"
      },
      {
        id: 3,
        name: "Neil deGrasse Tyson",
        country: "États-Unis",
        category: "scientifique",
        subcategory: "Astronomie & Espace",
        discipline: "Astronomie",
        subdiscipline: "Cosmologie",
        specialty: "Astrophysique & Communication scientifique",
        awards: ["NASA Distinguished Public Service Medal", "Public Welfare Medal"],
        period: "Révolution numérique",
        startYear: 1958,
        endYear: null,
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Astrophysicien et communicateur scientifique de renommée mondiale, directeur du Hayden Planetarium.",
        detailedDescription: "Neil deGrasse Tyson a popularisé l'astronomie grâce à ses émissions télévisées, ses livres et ses conférences. Il a joué un rôle crucial dans la déclassification de Pluton comme planète naine.",
        achievements: [
          "Directeur du Hayden Planetarium",
          "Animateur de l'émission Cosmos: A Spacetime Odyssey",
          "Auteur de nombreux best-sellers",
          "Médaille de la NASA pour le service public"
        ],
        contributions: [
          "Popularisation de la science",
          "Éducation astronomique",
          "Promotion de la pensée critique",
          "Développement des musées scientifiques"
        ],
        stats: {
          publications: 25,
          influence: 99,
          followers: "14.5M",
          projects: 65
        },
        color: "#3498db"
      },
      {
        id: 4,
        name: "Marie Curie",
        country: "Pologne/France",
        category: "scientifique",
        subcategory: "Sciences Fondamentales",
        discipline: "Chimie",
        subdiscipline: "Chimie physique",
        specialty: "Radioactivité & Physique nucléaire",
        awards: ["Prix Nobel de Physique 1903", "Prix Nobel de Chimie 1911"],
        period: "Révolution industrielle (2ème)",
        startYear: 1867,
        endYear: 1934,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Première femme à recevoir un prix Nobel et seule personne à en recevoir deux dans des catégories scientifiques différentes.",
        detailedDescription: "Marie Curie a découvert le radium et le polonium, pionnière dans l'étude de la radioactivité. Elle a fondé l'Institut Curie, centre de recherche médicale de renommée mondiale.",
        achievements: [
          "Première femme professeur à la Sorbonne",
          "Découverte du radium et du polonium",
          "Prix Nobel de Physique et de Chimie",
          "Fondation de l'Institut Curie"
        ],
        contributions: [
          "Théorie de la radioactivité",
          "Applications médicales des radiations",
          "Femmes dans les sciences",
          "Recherche sur le cancer"
        ],
        stats: {
          publications: 52,
          influence: 99,
          followers: "8.7M",
          projects: 42
        },
        color: "#9b59b6"
      },
      {
        id: 5,
        name: "Albert Einstein",
        country: "Allemagne/États-Unis",
        category: "scientifique",
        subcategory: "Sciences Fondamentales",
        discipline: "Physique",
        subdiscipline: "Physique théorique",
        specialty: "Relativité & Mécanique quantique",
        awards: ["Prix Nobel de Physique 1921"],
        period: "Révolution industrielle (2ème)",
        startYear: 1879,
        endYear: 1955,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Physicien théoricien qui a développé la théorie de la relativité, l'un des piliers de la physique moderne.",
        detailedDescription: "Albert Einstein a révolutionné notre compréhension de l'espace, du temps et de la gravité. Son équation E=mc² est l'une des plus célèbres de l'histoire scientifique.",
        achievements: [
          "Théorie de la relativité restreinte",
          "Théorie de la relativité générale",
          "Prix Nobel de Physique 1921",
          "Développement de la cosmologie moderne"
        ],
        contributions: [
          "Mécanique quantique",
          "Cosmologie physique",
          "Mouvement brownien",
          "Effet photoélectrique"
        ],
        stats: {
          publications: 450,
          influence: 100,
          followers: "25.3M",
          projects: 78
        },
        color: "#f1c40f"
      },
      {
        id: 6,
        name: "Katherine Johnson",
        country: "États-Unis",
        category: "scientifique",
        subcategory: "Sciences de l'Ingénieur & Technologies",
        discipline: "Ingénierie",
        subdiscipline: "Aérospatiale",
        specialty: "Mathématiques spatiales & Calculs de trajectoire",
        awards: ["Presidential Medal of Freedom", "Congressional Gold Medal"],
        period: "Révolution numérique",
        startYear: 1918,
        endYear: 2020,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Mathématicienne de la NASA dont les calculs ont été essentiels au succès des premiers vols spatiaux américains.",
        detailedDescription: "Katherine Johnson a calculé les trajectoires pour les missions Mercury et Apollo, y compris le vol d'Apollo 11 vers la Lune. Son travail a été crucial dans la course à l'espace.",
        achievements: [
          "Calculs pour la mission Apollo 11",
          "Trajectoires pour les premiers astronautes américains",
          "Médaille présidentielle de la liberté",
          "Pionnière des mathématiques spatiales"
        ],
        contributions: [
          "Calculs de navigation spatiale",
          "Intégration des ordinateurs électroniques",
          "Diversité dans l'aérospatiale",
          "Éducation STEM"
        ],
        stats: {
          publications: 28,
          influence: 94,
          followers: "3.2M",
          projects: 56
        },
        color: "#e74c3c"
      },
      {
        id: 7,
        name: "Alan Turing",
        country: "Royaume-Uni",
        category: "scientifique",
        subcategory: "Sciences de l'Ingénieur & Technologies",
        discipline: "Informatique",
        subdiscipline: "Intelligence artificielle",
        specialty: "Informatique théorique & Cryptanalyse",
        awards: [],
        period: "Révolution numérique",
        startYear: 1912,
        endYear: 1954,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Père de l'informatique moderne et de l'intelligence artificielle, célèbre pour avoir décrypté Enigma pendant la Seconde Guerre mondiale.",
        detailedDescription: "Alan Turing a formalisé les concepts d'algorithme et de calcul avec la machine de Turing, et a contribué de manière significative au décryptage des codes nazis.",
        achievements: [
          "Machine de Turing",
          "Test de Turing pour l'intelligence artificielle",
          "Décryptage de la machine Enigma",
          "Architecture des premiers ordinateurs"
        ],
        contributions: [
          "Fondements de l'informatique",
          "Cryptanalyse moderne",
          "Biologie mathématique",
          "Intelligence artificielle"
        ],
        stats: {
          publications: 36,
          influence: 97,
          followers: "5.8M",
          projects: 32
        },
        color: "#2ecc71"
      },
      {
        id: 8,
        name: "Jane Goodall",
        country: "Royaume-Uni",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Biologie",
        subdiscipline: "Écologie & évolution",
        specialty: "Primatologie & Conservation",
        awards: ["Tyler Prize for Environmental Achievement", "Hubbard Medal"],
        period: "Époque contemporaine",
        startYear: 1934,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Primatologue, éthologue et anthropologue renommée pour son étude révolutionnaire sur les chimpanzés.",
        detailedDescription: "Jane Goodall a passé 60 ans à étudier les chimpanzés sauvages en Tanzanie, révolutionnant notre compréhension des primates et de la conservation.",
        achievements: [
          "Étude de 60 ans sur les chimpanzés",
          "Fondation du Jane Goodall Institute",
          "Programme Roots & Shoots",
          "Messagère de la paix des Nations Unies"
        ],
        contributions: [
          "Éthologie des primates",
          "Conservation de la faune",
          "Éducation environnementale",
          "Bien-être animal"
        ],
        stats: {
          publications: 45,
          influence: 96,
          followers: "7.9M",
          projects: 89
        },
        color: "#1abc9c"
      },
      {
        id: 9,
        name: "Stephen Hawking",
        country: "Royaume-Uni",
        category: "scientifique",
        subcategory: "Sciences Fondamentales",
        discipline: "Physique",
        subdiscipline: "Astrophysique & cosmologie",
        specialty: "Cosmologie théorique & Trous noirs",
        awards: ["Prix Wolf de Physique", "Médaille Copley"],
        period: "Révolution numérique",
        startYear: 1942,
        endYear: 2018,
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Physicien théoricien et cosmologiste renommé pour ses travaux sur les trous noirs et la relativité générale.",
        detailedDescription: "Stephen Hawking a apporté des contributions fondamentales à notre compréhension des trous noirs, de la cosmologie et de l'origine de l'univers.",
        achievements: [
          "Radiation de Hawking",
          "Singularités gravitationnelles",
          "Auteur de 'Une brève histoire du temps'",
          "Professeur lucasien de mathématiques"
        ],
        contributions: [
          "Théorie des trous noirs",
          "Cosmologie quantique",
          "Popularisation de la science",
          "Théorie du tout"
        ],
        stats: {
          publications: 38,
          influence: 99,
          followers: "12.4M",
          projects: 47
        },
        color: "#34495e"
      },
      {
        id: 10,
        name: "Rosalind Franklin",
        country: "Royaume-Uni",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Biologie",
        subdiscipline: "Biologie moléculaire",
        specialty: "Cristallographie aux rayons X",
        awards: [],
        period: "Époque contemporaine",
        startYear: 1920,
        endYear: 1958,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chimiste et cristallographe dont les travaux ont été essentiels à la découverte de la structure de l'ADN.",
        detailedDescription: "Rosalind Franklin a produit la célèbre photographie 51, image de diffraction aux rayons X de l'ADN qui a révélé sa structure en double hélice.",
        achievements: [
          "Photographie 51 de l'ADN",
          "Structure du virus de la mosaïque du tabac",
          "Cristallographie du graphite",
          "Recherche sur le charbon"
        ],
        contributions: [
          "Structure de l'ADN",
          "Cristallographie aux rayons X",
          "Virologie structurale",
          "Femmes en science"
        ],
        stats: {
          publications: 42,
          influence: 92,
          followers: "4.6M",
          projects: 28
        },
        color: "#e67e22"
      },
      {
        id: 11,
        name: "Frida Kahlo",
        country: "Mexique",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "arts_visuels",
        subdiscipline: "Peinture",
        specialty: "Surréalisme & Art autobiographique",
        awards: ["National Prize of Arts and Sciences"],
        period: "Époque contemporaine",
        startYear: 1907,
        endYear: 1954,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Peintre mexicaine connue pour ses autoportraits surréalistes et son style unique mêlant douleur et beauté.",
        detailedDescription: "Frida Kahlo a créé une œuvre profondément personnelle explorant l'identité, le genre, la classe sociale et la race dans la société mexicaine post-révolutionnaire.",
        achievements: [
          "Première artiste mexicaine exposée au Louvre",
          "Plus de 200 œuvres dont 55 autoportraits",
          "Icône féministe mondiale",
          "Musée Frida Kahlo à Mexico"
        ],
        contributions: [
          "Art féministe latino-américain",
          "Exploration de l'identité mexicaine",
          "Art comme thérapie",
          "Iconographie surréaliste"
        ],
        stats: {
          publications: 1,
          influence: 98,
          followers: "18.7M",
          projects: 55
        },
        color: "#e74c3c"
      },
      {
        id: 12,
        name: "Bob Marley",
        country: "Jamaïque",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "musique",
        subdiscipline: "Interprétation",
        specialty: "Reggae & Musique de protestation",
        awards: ["Grammy Lifetime Achievement Award", "Jamaican Order of Merit"],
        period: "Époque contemporaine",
        startYear: 1945,
        endYear: 1981,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chanteur, auteur-compositeur et musicien jamaïcain, icône du reggae et de la culture rastafari.",
        detailedDescription: "Bob Marley a popularisé le reggae dans le monde entier et a utilisé sa musique comme instrument de protestation sociale et politique.",
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
        stats: {
          publications: 13,
          influence: 99,
          followers: "32.5M",
          projects: 21
        },
        color: "#f39c12"
      },
      {
        id: 13,
        name: "Maya Angelou",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "litterature",
        subdiscipline: "Poésie",
        specialty: "Poésie autobiographique & Mémoires",
        awards: ["Presidential Medal of Freedom", "National Medal of Arts"],
        period: "Époque contemporaine",
        startYear: 1928,
        endYear: 2014,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Poétesse, mémorialiste et activiste des droits civiques américaine, auteure de 'Je sais pourquoi chante l'oiseau en cage'.",
        detailedDescription: "Maya Angelou a été une voix majeure de la littérature afro-américaine et du mouvement des droits civiques, combinant poésie, autobiographie et engagement politique.",
        achievements: [
          "Première poétesse noire à lire à une investiture présidentielle",
          "Plus de 36 livres publiés",
          "Médaille présidentielle de la liberté",
          "Professeur à Wake Forest University"
        ],
        contributions: [
          "Littérature afro-américaine",
          "Mémoires comme forme littéraire",
          "Droits civiques par la littérature",
          "Féminisme intersectionnel"
        ],
        stats: {
          publications: 36,
          influence: 97,
          followers: "9.8M",
          projects: 42
        },
        color: "#9b59b6"
      },
      {
        id: 14,
        name: "Spike Lee",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "cinema",
        subdiscipline: "Réalisation",
        specialty: "Cinéma politique & Représentation noire",
        awards: ["Academy Award", "BAFTA Award", "Emmy Award"],
        period: "Révolution numérique",
        startYear: 1957,
        endYear: null,
        image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Réalisateur, producteur et scénariste américain connu pour ses films explorant les relations raciales aux États-Unis.",
        detailedDescription: "Spike Lee a révolutionné la représentation des Noirs américains au cinéma avec des films comme 'Do the Right Thing' et 'Malcolm X'.",
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
        stats: {
          publications: 5,
          influence: 95,
          followers: "6.3M",
          projects: 58
        },
        color: "#2c3e50"
      },
      {
        id: 15,
        name: "Chinua Achebe",
        country: "Nigeria",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "litterature",
        subdiscipline: "Roman",
        specialty: "Littérature postcoloniale & Roman africain",
        awards: ["Man Booker International Prize", "Commonwealth Poetry Prize"],
        period: "Époque contemporaine",
        startYear: 1930,
        endYear: 2013,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Écrivain nigérian considéré comme le père du roman africain moderne, auteur de 'Le Monde s'effondre'.",
        detailedDescription: "Chinua Achebe a donné voix à l'Afrique postcoloniale à travers ses romans, explorant les conflits entre tradition et modernité.",
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
        stats: {
          publications: 22,
          influence: 96,
          followers: "5.4M",
          projects: 18
        },
        color: "#16a085"
      },
      {
        id: 16,
        name: "Alvin Ailey",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "arts_scene",
        subdiscipline: "Danse",
        specialty: "Danse moderne & Chorégraphie africaine-américaine",
        awards: ["Presidential Medal of Freedom", "Kennedy Center Honors"],
        period: "Époque contemporaine",
        startYear: 1931,
        endYear: 1989,
        image: "https://images.unsplash.com/photo-1518834103328-4dbb0d8400de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chorégraphe et activiste américain qui a fondé l'Alvin Ailey American Dance Theater.",
        detailedDescription: "Alvin Ailey a créé une compagnie de danse qui a célébré l'expérience afro-américaine à travers la danse moderne, fusionnant technique classique et expressions culturelles noires.",
        achievements: [
          "Fondation de l'Alvin Ailey American Dance Theater",
          "Création de 'Revelations' (vu par 25 millions)",
          "Médaille présidentielle de la liberté",
          "École de danse Alvin Ailey"
        ],
        contributions: [
          "Danse moderne afro-américaine",
          "Intégration raciale dans la danse",
          "Préservation du patrimoine culturel noir",
          "Formation des danseurs noirs"
        ],
        stats: {
          publications: 3,
          influence: 93,
          followers: "4.2M",
          projects: 79
        },
        color: "#8e44ad"
      },
      {
        id: 17,
        name: "Beyoncé Knowles",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "musique",
        subdiscipline: "Interprétation",
        specialty: "Pop & RnB contemporain",
        awards: ["32 Grammy Awards", "MTV Video Music Awards"],
        period: "Révolution numérique",
        startYear: 1981,
        endYear: null,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chanteuse, auteure-compositrice et productrice américaine, l'une des artistes les plus influentes du XXIe siècle.",
        detailedDescription: "Beyoncé a redéfini la pop music avec des albums conceptuels explorant le féminisme, l'identité noire et l'empowerment.",
        achievements: [
          "Artiste la plus récompensée aux Grammys",
          "Album 'Lemonade' acclamé par la critique",
          "Super Bowl halftime show historique",
          "Entreprise Parkwood Entertainment"
        ],
        contributions: [
          "Féminisme noir dans la pop",
          "Visual albums comme forme d'art",
          "Entrepreneuriat dans la musique",
          "Représentation noire dans les médias"
        ],
        stats: {
          publications: 8,
          influence: 99,
          followers: "289M",
          projects: 47
        },
        color: "#e84393"
      },
      {
        id: 18,
        name: "James Baldwin",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Humanités et Sciences Sociales",
        discipline: "philosophie",
        subdiscipline: "Philosophie Politique",
        specialty: "Essai politique & Critique sociale",
        awards: ["Guggenheim Fellowship", "George Polk Award"],
        period: "Époque contemporaine",
        startYear: 1924,
        endYear: 1987,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Écrivain et activiste américain dont les essais sur les relations raciales ont marqué la littérature américaine.",
        detailedDescription: "James Baldwin a exploré les complexités de l'identité raciale, sexuelle et de classe dans l'Amérique du XXe siècle à travers romans, pièces de théâtre et essais.",
        achievements: [
          "Auteur de 'The Fire Next Time'",
          "Militant des droits civiques",
          "Conférencier international",
          "Influence sur la littérature américaine"
        ],
        contributions: [
          "Critique du racisme américain",
          "Intersectionnalité avant la lettre",
          "Littérature comme activisme",
          "Identité noire et queer"
        ],
        stats: {
          publications: 22,
          influence: 96,
          followers: "7.9M",
          projects: 34
        },
        color: "#2c3e50"
      },
      {
        id: 19,
        name: "Miriam Makeba",
        country: "Afrique du Sud",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "musique",
        subdiscipline: "Chant Traditionnel",
        specialty: "Musique africaine & Anti-apartheid",
        awards: ["Grammy Award", "Dag Hammarskjöld Peace Prize"],
        period: "Époque contemporaine",
        startYear: 1932,
        endYear: 2008,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chanteuse et activiste sud-africaine surnommée 'Mama Africa', symbole de la lutte contre l'apartheid.",
        detailedDescription: "Miriam Makeba a utilisé sa musique pour combattre le régime d'apartheid, devenant la voix de l'Afrique du Sud en exil.",
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
        stats: {
          publications: 4,
          influence: 94,
          followers: "5.1M",
          projects: 31
        },
        color: "#d35400"
      },
      {
        id: 20,
        name: "Wole Soyinka",
        country: "Nigeria",
        category: "non_scientifique",
        subcategory: "Arts et Culture",
        discipline: "litterature",
        subdiscipline: "Théâtre Littéraire",
        specialty: "Drame postcolonial & Satire politique",
        awards: ["Prix Nobel de Littérature 1986"],
        period: "Époque contemporaine",
        startYear: 1934,
        endYear: null,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Écrivain nigérian, premier Africain à recevoir le prix Nobel de littérature.",
        detailedDescription: "Wole Soyinka a combiné tradition yoruba et formes dramatiques occidentales pour créer un théâtre unique critiquant les régimes autoritaires.",
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
        stats: {
          publications: 45,
          influence: 95,
          followers: "4.8M",
          projects: 63
        },
        color: "#27ae60"
      },
      {
        id: 21,
        name: "Nelson Mandela",
        country: "Afrique du Sud",
        category: "non_scientifique",
        subcategory: "Humanités et Sciences Sociales",
        discipline: "philosophie",
        subdiscipline: "Philosophie Politique",
        specialty: "Réconciliation nationale & Démocratie",
        awards: ["Prix Nobel de la Paix 1993"],
        period: "Époque contemporaine",
        startYear: 1918,
        endYear: 2013,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Premier président noir d'Afrique du Sud, symbole mondial de la lutte contre l'apartheid et de la réconciliation.",
        detailedDescription: "Nelson Mandela a passé 27 ans en prison pour son combat contre l'apartheid avant de devenir président et d'instaurer la Commission vérité et réconciliation.",
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
        stats: {
          publications: 4,
          influence: 100,
          followers: "42.8M",
          projects: 28
        },
        color: "#e74c3c"
      },
      {
        id: 22,
        name: "Malcolm X",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Humanités et Sciences Sociales",
        discipline: "philosophie",
        subdiscipline: "Philosophie Politique",
        specialty: "Nationalisme noir & Droits civiques",
        awards: [],
        period: "Époque contemporaine",
        startYear: 1925,
        endYear: 1965,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Militant des droits civiques américain, porte-parole de la Nation of Islam puis défenseur des droits humains.",
        detailedDescription: "Malcolm X a évolué du nationalisme noir séparatiste à une vision plus universaliste des droits humains après son pèlerinage à La Mecque.",
        achievements: [
          "Porte-parole de la Nation of Islam",
          "Autobiographie best-seller",
          "Fondation de l'Organization of Afro-American Unity",
          "Pèlerinage transformateur à La Mecque"
        ],
        contributions: [
          "Conscience noire radicale",
          "Critique de l'intégrationnisme",
          "Auto-défense comme droit",
          "Internationalisation de la lutte noire"
        ],
        stats: {
          publications: 1,
          influence: 98,
          followers: "18.3M",
          projects: 15
        },
        color: "#2c3e50"
      },
      {
        id: 23,
        name: "Angela Davis",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Humanités et Sciences Sociales",
        discipline: "philosophie",
        subdiscipline: "Philosophie Politique",
        specialty: "Féminisme noir & Abolitionnisme pénal",
        awards: ["Lenin Peace Prize", "Thomas Merton Award"],
        period: "Époque contemporaine",
        startYear: 1944,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Philosophe, militante politique et universitaire américaine, figure du féminisme noir et de l'abolitionnisme pénal.",
        detailedDescription: "Angela Davis a combiné marxisme, féminisme et antiracisme dans une critique systémique des institutions carcérales et du complexe industriel pénitentiaire.",
        achievements: [
          "Professeur émérite à UC Santa Cruz",
          "Militante des Black Panthers",
          "Campagne internationale pour sa libération",
          "Auteure de 'Are Prisons Obsolete?'"
        ],
        contributions: [
          "Féminisme intersectionnel",
          "Théorie de l'abolitionnisme pénal",
          "Marxisme noir",
          "Éducation comme libération"
        ],
        stats: {
          publications: 12,
          influence: 96,
          followers: "8.7M",
          projects: 42
        },
        color: "#9b59b6"
      },
      {
        id: 24,
        name: "Frantz Fanon",
        country: "Martinique/France/Algérie",
        category: "non_scientifique",
        subcategory: "Humanités et Sciences Sociales",
        discipline: "philosophie",
        subdiscipline: "Philosophie Politique",
        specialty: "Psychiatrie coloniale & Décolonisation",
        awards: [],
        period: "Époque contemporaine",
        startYear: 1925,
        endYear: 1961,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Psychiatre, philosophe et militant anticolonialiste, auteur de 'Les Damnés de la Terre'.",
        detailedDescription: "Frantz Fanon a analysé les effets psychologiques du colonialisme et théorisé la violence comme nécessaire à la libération des peuples colonisés.",
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
        stats: {
          publications: 7,
          influence: 97,
          followers: "6.9M",
          projects: 23
        },
        color: "#e67e22"
      },
      {
        id: 25,
        name: "bell hooks",
        country: "États-Unis",
        category: "non_scientifique",
        subcategory: "Humanités et Sciences Sociales",
        discipline: "philosophie",
        subdiscipline: "Philosophie Politique",
        specialty: "Féminisme intersectionnel & Pédagogie critique",
        awards: ["American Book Awards"],
        period: "Révolution numérique",
        startYear: 1952,
        endYear: 2021,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Intellectuelle féministe, auteure et activiste sociale, pionnière de la pensée intersectionnelle.",
        detailedDescription: "bell hooks a développé une théorie féministe qui intègre race, classe et genre, tout en promouvant une pédagogie de l'espoir et de la libération.",
        achievements: [
          "Auteure de plus de 40 livres",
          "Professeur au Berea College",
          "Création du bell hooks Institute",
          "Influence sur plusieurs générations de féministes"
        ],
        contributions: [
          "Féminisme intersectionnel",
          "Pédagogie de la libération",
          "Critique de la culture capitaliste",
          "Amour comme pratique de la liberté"
        ],
        stats: {
          publications: 40,
          influence: 95,
          followers: "7.2M",
          projects: 45
        },
        color: "#9b59b6"
      },
      {
        id: 26,
        name: "Sunjata Keita",
        country: "Mali",
        category: "non_scientifique",
        subcategory: "Vie Sociale et Traditions",
        discipline: "mythes",
        subdiscipline: "Épopées",
        specialty: "Fondation de l'Empire du Mali",
        awards: [],
        period: "Moyen Âge",
        startYear: 1190,
        endYear: 1255,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Fondateur de l'Empire du Mali et héros de l'épopée mandingue, sujet du plus grand récit oral africain.",
        detailedDescription: "Sunjata Keita a unifié les clans mandingues pour créer l'un des plus grands empires d'Afrique de l'Ouest, célébré dans l'épopée de Soundiata transmise par les griots.",
        achievements: [
          "Fondation de l'Empire du Mali",
          "Charte du Manden (première déclaration des droits humains)",
          "Développement du commerce transsaharien",
          "Patron des arts et de l'éducation"
        ],
        contributions: [
          "Tradition des griots",
          "Gouvernance impériale africaine",
          "Droits humains dans la tradition orale",
          "Unification culturelle mandingue"
        ],
        stats: {
          publications: 0,
          influence: 92,
          followers: "2.8M",
          projects: 18
        },
        color: "#d35400"
      },
      {
        id: 27,
        name: "Mansa Musa",
        country: "Mali",
        category: "non_scientifique",
        subcategory: "Vie Sociale et Traditions",
        discipline: "croyances",
        subdiscipline: "Spiritualité Traditionnelle",
        specialty: "Pèlerinage à La Mecque & Patronage islamique",
        awards: [],
        period: "Moyen Âge",
        startYear: 1280,
        endYear: 1337,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Dixième mansa (roi des rois) de l'Empire du Mali, considéré comme l'homme le plus riche de l'histoire.",
        detailedDescription: "Mansa Musa a effectué un pèlerinage à La Mecque si fastueux qu'il a fait baisser le prix de l'or au Caire pendant des années, tout en établissant Tombouctou comme centre d'apprentissage.",
        achievements: [
          "Homme le plus riche de l'histoire (400 milliards $ actuels)",
          "Pèlerinage historique à La Mecque",
          "Construction de la mosquée de Djingareyber",
          "Développement de Tombouctou comme centre intellectuel"
        ],
        contributions: [
          "Patronage des sciences islamiques",
          "Diplomatie transsaharienne",
          "Architecture soudano-sahélienne",
          "Commerce de l'or médiéval"
        ],
        stats: {
          publications: 0,
          influence: 94,
          followers: "3.5M",
          projects: 27
        },
        color: "#f1c40f"
      },
      {
        id: 28,
        name: "Griot traditionnel",
        country: "Afrique de l'Ouest",
        category: "non_scientifique",
        subcategory: "Vie Sociale et Traditions",
        discipline: "mythes",
        subdiscipline: "Traditions Orales",
        specialty: "Histoire orale & Transmission culturelle",
        awards: [],
        period: "Toutes périodes",
        startYear: null,
        endYear: null,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Dépositaires de la mémoire collective africaine, maîtres de la parole et de la musique traditionnelle.",
        detailedDescription: "Les griots sont les historiens, généalogistes, conseillers royaux et artistes de la société ouest-africaine, gardiens d'une tradition millénaire de transmission orale.",
        achievements: [
          "Préservation de l'histoire africaine pré-coloniale",
          "Transmission des épopées comme Soundiata",
          "Maintien des généalogies royales",
          "Innovation musicale (kora, balafon, ngoni)"
        ],
        contributions: [
          "Histoire orale comme méthodologie",
          "Musique comme archive historique",
          "Résistance culturelle à la colonisation",
          "Continuité des traditions africaines"
        ],
        stats: {
          publications: 0,
          influence: 88,
          followers: "1.2M",
          projects: 156
        },
        color: "#8e44ad"
      },
      {
        id: 29,
        name: "Reine Nzinga",
        country: "Angola",
        category: "non_scientifique",
        subcategory: "Vie Sociale et Traditions",
        discipline: "croyances",
        subdiscipline: "Rituels",
        specialty: "Résistance anticoloniale & Leadership féminin",
        awards: [],
        period: "Temps modernes",
        startYear: 1583,
        endYear: 1663,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Reine du Ndongo et du Matamba, symbole de la résistance africaine contre la colonisation portugaise.",
        detailedDescription: "Nzinga Mbande a mené une guerre de 40 ans contre les Portugais, utilisant diplomatie, alliances militaires et tactiques de guérilla pour préserver l'indépendance de son royaume.",
        achievements: [
          "40 ans de résistance contre les Portugais",
          "Libération de milliers d'esclaves",
          "Alliance avec les Hollandais contre le Portugal",
          "Modernisation de l'armée du Matamba"
        ],
        contributions: [
          "Diplomatie africaine pré-coloniale",
          "Stratégie militaire féminine",
          "Résistance à la traite esclavagiste",
          "Leadership féminin en temps de guerre"
        ],
        stats: {
          publications: 0,
          influence: 93,
          followers: "3.1M",
          projects: 42
        },
        color: "#c0392b"
      },
      {
        id: 30,
        name: "Amadou Hampâté Bâ",
        country: "Mali",
        category: "non_scientifique",
        subcategory: "Vie Sociale et Traditions",
        discipline: "langues",
        subdiscipline: "Traditions Orales",
        specialty: "Sagesse africaine & Conservation du patrimoine oral",
        awards: ["Grand prix littéraire d'Afrique noire"],
        period: "Époque contemporaine",
        startYear: 1900,
        endYear: 1991,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Écrivain et ethnologue malien, célèbre pour sa défense des traditions orales africaines.",
        detailedDescription: "Amadou Hampâté Bâ a consacré sa vie à recueillir, transcrire et préserver les traditions orales de l'Afrique de l'Ouest, notamment à travers son œuvre majeure 'L'Étrange Destin de Wangrin'.",
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
        stats: {
          publications: 15,
          influence: 91,
          followers: "2.4M",
          projects: 67
        },
        color: "#16a085"
      },
      // ✅ NOUVELLES PERSONNALITÉS MÉDICALES ET CHIRURGICALES
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
        description: "Première femme afro-américaine à recevoir un brevet médical, inventrice de la chirurgie laser pour la cataracte.",
        detailedDescription: "Dr. Patricia Bath a révolutionné le traitement de la cataracte avec son invention du Laserphaco Probe, et a cofondé l'American Institute for the Prevention of Blindness.",
        achievements: [
          "Invention du Laserphaco Probe",
          "Première femme à diriger une résidence en ophtalmologie aux USA",
          "Brevet médical US n°4,744,360",
          "Campagnes mondiales contre la cécité"
        ],
        contributions: [
          "Santé oculaire accessible",
          "Technologie médicale innovante",
          "Éducation en santé publique",
          "Femmes en médecine"
        ],
        stats: {
          publications: 104,
          influence: 93,
          followers: "1.2M",
          projects: 37
        },
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
        specialty: "Neurochirurgie infantile & Séparation de jumeaux siamois",
        awards: ["Presidential Medal of Freedom", "Prix Horatio Alger"],
        period: "Époque contemporaine",
        startYear: 1951,
        endYear: null,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Pionnier mondial en neurochirurgie pédiatrique, spécialisé dans la séparation de jumeaux crâniopages.",
        detailedDescription: "Dr. Carson a mené la première séparation réussie de jumeaux siamois unis par la tête en 1987, et a été chef de la neurochirurgie pédiatrique à Johns Hopkins.",
        achievements: [
          "Première séparation complète de jumeaux crâniopages (1987)",
          "Chef du département de neurochirurgie pédiatrique (Johns Hopkins)",
          "Médaille présidentielle de la liberté",
          "Plus de 15 000 interventions chirurgicales"
        ],
        contributions: [
          "Techniques neurochirurgicales innovantes",
          "Éducation médicale pédiatrique",
          "Mentorat de jeunes chirurgiens",
          "Réduction des risques opératoires"
        ],
        stats: {
          publications: 125,
          influence: 95,
          followers: "3.7M",
          projects: 89
        },
        color: "#BE123C"
      },
      {
        id: 33,
        name: "Prof. Marie-Claire Dagher",
        country: "France",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Médecine & Santé",
        subdiscipline: "Santé publique",
        specialty: "Épidémiologie & Politiques de santé",
        awards: ["Prix Inserm", "Médaille de l'Ordre National du Mérite"],
        period: "Époque contemporaine",
        startYear: 1962,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Épidémiologiste française influente, experte en politiques de santé publique et inégalités sociales.",
        detailedDescription: "Professeure à Sorbonne Université, elle a dirigé plusieurs grandes études sur les déterminants sociaux de la santé et conseillé le gouvernement français.",
        achievements: [
          "Directrice de l'Observatoire National de la Santé",
          "Plus de 200 publications en épidémiologie",
          "Conseillère scientifique auprès du Ministère de la Santé",
          "Prix Inserm pour l'équité en santé"
        ],
        contributions: [
          "Lutte contre les inégalités de santé",
          "Modélisation épidémiologique",
          "Politiques de prévention",
          "Formation des décideurs publics"
        ],
        stats: {
          publications: 210,
          influence: 91,
          followers: "890K",
          projects: 63
        },
        color: "#DC2626"
      },
      {
        id: 34,
        name: "Dr. Nadia Yousfi",
        country: "Tunisie",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Médecine & Santé",
        subdiscipline: "Gynécologie‑obstétrique",
        specialty: "Santé maternelle en Afrique",
        awards: ["Prix Nelson Mandela pour la Santé", "Prix de l'OMS Afrique"],
        period: "Époque contemporaine",
        startYear: 1975,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Pionnière de la réduction de la mortalité maternelle en Afrique du Nord grâce à des programmes communautaires innovants.",
        detailedDescription: "Dr. Yousfi a formé plus de 500 sages-femmes rurales et a réduit la mortalité maternelle de 60% dans 12 régions tunisiennes.",
        achievements: [
          "Programme 'Naissance Sûre' (2008)",
          "Collaboration avec l'UNFPA",
          "Formation de sages-femmes rurales",
          "Réduction de 60% de la mortalité maternelle"
        ],
        contributions: [
          "Médecine rurale accessible",
          "Autonomisation des femmes en santé",
          "Protocoles d'urgence obstétricale",
          "Plaidoyer pour la santé reproductive"
        ],
        stats: {
          publications: 48,
          influence: 90,
          followers: "720K",
          projects: 41
        },
        color: "#DC2626"
      },
      {
        id: 35,
        name: "Dr. Kwame Adu",
        country: "Ghana",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Chirurgie",
        subdiscipline: "Chirurgie orthopédique et traumatologique",
        specialty: "Traumatologie post-conflit & Réhabilitation",
        awards: ["Prix de la Fondation Gates", "African Medical Excellence Award"],
        period: "Époque contemporaine",
        startYear: 1980,
        endYear: null,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chirurgien orthopédique humanitaire qui a reconstruit des membres pour des milliers de victimes de conflits en Afrique de l’Ouest.",
        detailedDescription: "Dr. Adu dirige un centre de réadaptation à Accra qui accueille des patients de 15 pays, et a formé une génération de chirurgiens africains.",
        achievements: [
          "Centre de réadaptation orthopédique d’Accra",
          "8 000 interventions reconstructrices",
          "Partenariat avec Medecins Sans Frontières",
          "Formation de 120 chirurgiens africains"
        ],
        contributions: [
          "Chirurgie reconstructrice abordable",
          "Prothèses locales à faible coût",
          "Médecine humanitaire post-conflit",
          "Innovation biomédicale africaine"
        ],
        stats: {
          publications: 32,
          influence: 89,
          followers: "620K",
          projects: 28
        },
        color: "#BE123C"
      },
      {
        id: 36,
        name: "Dr. Henriette Ekwe Ebongué",
        country: "Cameroun",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Médecine & Santé",
        subdiscipline: "Maladies infectieuses et tropicales",
        specialty: "Paludisme & VIH en Afrique",
        awards: ["Prix L’Oréal-UNESCO pour les Femmes et la Science", "Prix Pasteur"],
        period: "Époque contemporaine",
        startYear: 1970,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Microbiologiste et infectiologue camerounaise, experte mondiale en résistance aux antipaludiques.",
        detailedDescription: "Ses recherches ont conduit à de nouvelles stratégies thérapeutiques contre les souches résistantes du Plasmodium falciparum.",
        achievements: [
          "Découverte de mécanismes de résistance du paludisme",
          "Protocoles thérapeutiques adoptés par l’OMS",
          "Laboratoire de référence en Afrique centrale",
          "Prix L’Oréal-UNESCO 2018"
        ],
        contributions: [
          "Pharmacologie anti-infectieuse",
          "Politiques de santé africaines",
          "Formation en biologie moléculaire",
          "Résistance antimicrobienne"
        ],
        stats: {
          publications: 187,
          influence: 94,
          followers: "1.1M",
          projects: 72
        },
        color: "#DC2626"
      },
      {
        id: 37,
        name: "Dr. Awa Marie Coll-Seck",
        country: "Sénégal",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Médecine & Santé",
        subdiscipline: "Santé publique",
        specialty: "Lutte contre les pandémies & Gouvernance sanitaire",
        awards: ["Prix de l’OMS", "Time 100 Most Influential People"],
        period: "Époque contemporaine",
        startYear: 1952,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Ancienne ministre de la Santé du Sénégal, figure mondiale de la réponse aux pandémies (Ebola, COVID-19).",
        detailedDescription: "Conseillère de l’ONU et de l’UE sur la santé mondiale, elle a piloté des stratégies africaines efficaces contre Ebola et le COVID-19.",
        achievements: [
          "Stratégie sénégalaise contre Ebola (taux de survie >70%)",
          "Conseillère OMS/UE sur la santé mondiale",
          "Ministre de la Santé (2001–2004, 2012–2019)",
          "Time 100 en 2020"
        ],
        contributions: [
          "Gouvernance sanitaire africaine",
          "Réponse aux urgences sanitaires",
          "Leadership féminin en santé",
          "Diplomatie sanitaire internationale"
        ],
        stats: {
          publications: 95,
          influence: 97,
          followers: "2.4M",
          projects: 112
        },
        color: "#DC2626"
      },
      {
        id: 38,
        name: "Dr. Charles Nduka",
        country: "Nigeria/Royaume-Uni",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Chirurgie",
        subdiscipline: "Chirurgie plastique, reconstructrice et esthétique",
        specialty: "Chirurgie reconstructrice post-burns",
        awards: ["Fellow of the Royal College of Surgeons", "Prix Humanitaire de l’Académie de Chirurgie"],
        period: "Époque contemporaine",
        startYear: 1979,
        endYear: null,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Chirurgien plasticien pionnier dans la reconstruction faciale après brûlures, fondateur de « Smile Again Africa ».",
        detailedDescription: "Dr. Nduka a reconstruit des milliers de visages après des attaques à l’acide ou des accidents domestiques, en Afrique et au Royaume-Uni.",
        achievements: [
          "Fondation « Smile Again Africa »",
          "Techniques de greffe de peau à faible coût",
          "Campagnes contre les attaques à l’acide",
          "Chirurgie reconstructrice mobile"
        ],
        contributions: [
          "Chirurgie humanitaire",
          "Innovation biomatériaux",
          "Réhabilitation psychosociale",
          "Prévention des brûlures"
        ],
        stats: {
          publications: 58,
          influence: 88,
          followers: "950K",
          projects: 64
        },
        color: "#BE123C"
      },
      {
        id: 39,
        name: "Dr. Jean-Marie Milleliri",
        country: "Madagascar",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Médecine & Santé",
        subdiscipline: "Pédiatrie",
        specialty: "Nutrition infantile & Malnutrition",
        awards: ["Prix de la Fondation des Hôpitaux de Paris", "UNICEF Champion Award"],
        period: "Époque contemporaine",
        startYear: 1968,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Pédiatre malgache qui a réduit de 45% la malnutrition infantile dans le sud de Madagascar grâce à des aliments thérapeutiques locaux.",
        detailedDescription: "Il a développé une formule à base de pois du Cap et de miel local, produite par des coopératives de femmes, utilisée par l’UNICEF.",
        achievements: [
          "Formule thérapeutique « Vita-Madagascar »",
          "Partenariat avec UNICEF et WFP",
          "Réduction de 45% de la malnutrition sévère",
          "Réseau de 200 centres de nutrition"
        ],
        contributions: [
          "Nutrition basée sur les ressources locales",
          "Souveraineté alimentaire",
          "Santé materno-infantile",
          "Économie sociale en santé"
        ],
        stats: {
          publications: 41,
          influence: 87,
          followers: "540K",
          projects: 88
        },
        color: "#DC2626"
      },
      {
        id: 40,
        name: "Dr. Fatou Sow",
        country: "Sénégal",
        category: "scientifique",
        subcategory: "Sciences de la Vie & Biomédicales",
        discipline: "Médecine & Santé",
        subdiscipline: "Gériatrie",
        specialty: "Santé des personnes âgées en Afrique",
        awards: ["Prix de la Francophonie en Santé", "Médaille d’Honneur du Sénégal"],
        period: "Époque contemporaine",
        startYear: 1955,
        endYear: null,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Pionnière africaine en gériatrie, elle a créé la première unité de soins gériatriques du Sahel.",
        detailedDescription: "Face au vieillissement démographique silencieux en Afrique, Dr. Sow a mis en place des programmes holistiques combinant soins, psychologie et lien social.",
        achievements: [
          "Première unité gériatrique du Sahel (Dakar, 2005)",
          "Manuel de gériatrie adapté à l’Afrique",
          "Formation de 300 professionnels",
          "Centre communautaire « Les Sages »"
        ],
        contributions: [
          "Gériatrie culturellement adaptée",
          "Lien intergénérationnel",
          "Prévention du déclin cognitif",
          "Dignité des aînés"
        ],
        stats: {
          publications: 63,
          influence: 86,
          followers: "410K",
          projects: 35
        },
        color: "#DC2626"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('musee-personnalites', JSON.stringify(personalities));
  }, [personalities]);

  const allAwards = Array.from(new Set(
    Object.values(scientificStructure).flatMap(category => 
      Object.values(category.disciplines).flatMap(discipline => 
        discipline.awards || []
      )
    )
  )).sort();

  const formatYear = (year) => {
    if (year === null || year === undefined) return "Présent";
    if (year < 0) return `${Math.abs(year)} av. J.-C.`;
    return `${year} apr. J.-C.`;
  };

  const isYearInPeriod = (year, period) => {
    if (!year || !period) return false;
    const yearNum = parseInt(year);
    return yearNum >= period.start && yearNum <= period.end;
  };

  const isPersonalityActiveInInterval = (personality, startYear, endYear) => {
    if (!startYear && !endYear) return true;
    if (!personality.startYear || !personality.endYear) return true;
    const personStart = parseInt(personality.startYear);
    const personEnd = personality.endYear ? parseInt(personality.endYear) : 2024;
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
      (personality.awards && personality.awards.some(award => award.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCountry = !selectedCountry || personality.country === selectedCountry;
    const matchesCategory = !selectedCategory || personality.category === selectedCategory;
    const matchesSubCategory = !selectedSubCategory || personality.subcategory === selectedSubCategory;
    const matchesDiscipline = !selectedDiscipline || personality.discipline === selectedDiscipline;
    const matchesSubDiscipline = !selectedSubDiscipline || personality.subdiscipline === selectedSubDiscipline;
    const matchesAward = !selectedAward || (personality.awards && personality.awards.includes(selectedAward));
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

  const handleInputChange = (field, value) => setNewPersonality(prev => ({ ...prev, [field]: value }));
  const handleNestedInputChange = (parent, field, value) => setNewPersonality(prev => ({ ...prev, [parent]: { ...prev[parent], [field]: value } }));
  const handleArrayInputChange = (field, index, value) => setNewPersonality(prev => ({ ...prev, [field]: prev[field].map((item, i) => i === index ? value : item) }));
  const addArrayItem = (field) => setNewPersonality(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  const removeArrayItem = (field, index) => setNewPersonality(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setNewPersonality(prev => ({ ...prev, image: e.target.result }));
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
      stats: { publications: 0, influence: 50, followers: "0", projects: 0 },
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
    return selectedCategory === 'scientifique' 
      ? Object.keys(scientificStructure) 
      : Object.keys(categoriesStructure[selectedCategory]?.subcategories || {});
  };

  const getDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory) return [];
    return selectedCategory === 'scientifique'
      ? Object.keys(scientificStructure[selectedSubCategory]?.disciplines || {})
      : Object.keys(categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory]?.disciplines || {});
  };

  const getSubDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedDiscipline) return [];
    if (selectedCategory === 'scientifique') {
      return scientificStructure[selectedSubCategory]?.disciplines[selectedDiscipline]?.subdisciplines || [];
    }
    return categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory]?.disciplines[selectedDiscipline]?.subdisciplines || [];
  };

  const getAwardsForDiscipline = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedDiscipline) return [];
    return selectedCategory === 'scientifique'
      ? scientificStructure[selectedSubCategory]?.disciplines[selectedDiscipline]?.awards || []
      : allAwards;
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
            Patrimoine Exceptionnel
          </div>
          <h1 className="mp-hero-title">
            Musée des <span className="mp-hero-highlight"> Grandes Figures</span>
            <br />
            de l'Histoire Noire
          </h1>
          <p className="mp-hero-subtitle">
            Découvrez l'héritage précieux des personnalités noires qui ont façonné notre monde à travers la science, les arts, la politique et l'innovation. Un voyage à travers les siècles d'excellence.
          </p>
          <div className="mp-hero-stats">
            <div className="mp-stat">
              <div className="mp-stat-number">{personalities.length}+</div>
              <div className="mp-stat-label">Personnalités</div>
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
              Domaines scientifiques
            </button>
            <button className={`mp-tab ${activeTab === 'non_scientifique' ? 'mp-active' : ''}`} onClick={() => setActiveTab('non_scientifique')}>
              <Users size={18} />
              Domaines non-scientifiques
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
                  <div className="mp-filter-group">
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
                      max="2024"
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
                      max="2024"
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
                <span>{allAwards.length} Prix scientifiques</span>
              </div>
              <div className="mp-stat">
                <Book size={20} />
                <span>{Object.keys(scientificStructure).length} Domaines scientifiques</span>
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
                      {personality.discipline}
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
            <h2 className="mp-modal-title">Ajouter une Nouvelle Personnalité</h2>
            <form onSubmit={handleSubmit} className="mp-add-form">
              <div className="mp-form-section">
                <h3>Informations de base</h3>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Nom complet *</label>
                    <input type="text" value={newPersonality.name} onChange={(e) => handleInputChange('name', e.target.value)} required placeholder="Ex: Cheikh Anta Diop" />
                  </div>
                  <div className="mp-form-group">
                    <label>Pays d'origine *</label>
                    <select value={newPersonality.country} onChange={(e) => handleInputChange('country', e.target.value)} required>
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
                    <select value={newPersonality.category} onChange={(e) => handleInputChange('category', e.target.value)} required>
                      <option value="scientifique">Scientifique</option>
                      <option value="non_scientifique">Non-scientifique</option>
                    </select>
                  </div>
                  <div className="mp-form-group">
                    <label>Sous-catégorie *</label>
                    <select value={newPersonality.subcategory} onChange={(e) => handleInputChange('subcategory', e.target.value)} required>
                      <option value="">Sélectionnez une sous-catégorie</option>
                      {newPersonality.category === 'scientifique' ? (
                        Object.keys(scientificStructure).map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      ) : (
                        Object.keys(categoriesStructure.non_scientifique.subcategories).map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Discipline *</label>
                    <select value={newPersonality.discipline} onChange={(e) => handleInputChange('discipline', e.target.value)} required>
                      <option value="">Sélectionnez une discipline</option>
                      {newPersonality.category === 'scientifique' && newPersonality.subcategory && (
                        Object.keys(scientificStructure[newPersonality.subcategory]?.disciplines || {}).map(discipline => (
                          <option key={discipline} value={discipline}>{discipline}</option>
                        ))
                      )}
                      {newPersonality.category === 'non_scientifique' && newPersonality.subcategory && (
                        Object.keys(categoriesStructure.non_scientifique.subcategories[newPersonality.subcategory]?.disciplines || {}).map(discipline => (
                          <option key={discipline} value={discipline}>{discipline}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="mp-form-group">
                    <label>Spécialité détaillée *</label>
                    <select value={newPersonality.subdiscipline} onChange={(e) => handleInputChange('subdiscipline', e.target.value)} required>
                      <option value="">Sélectionnez une spécialité</option>
                      {newPersonality.category === 'scientifique' && newPersonality.subcategory && newPersonality.discipline && (
                        scientificStructure[newPersonality.subcategory]?.disciplines[newPersonality.discipline]?.subdisciplines.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Domaine d'expertise *</label>
                    <input type="text" value={newPersonality.specialty} onChange={(e) => handleInputChange('specialty', e.target.value)} required placeholder="Ex: Égyptologie & Histoire Africaine" />
                  </div>
                  <div className="mp-form-group">
                    <label>Période historique *</label>
                    <select value={newPersonality.period} onChange={(e) => handleInputChange('period', e.target.value)} required>
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
                    <input type="number" value={newPersonality.startYear} onChange={(e) => handleInputChange('startYear', e.target.value)} placeholder="Ex: 1923" />
                  </div>
                  <div className="mp-form-group">
                    <label>Année de fin</label>
                    <input type="number" value={newPersonality.endYear} onChange={(e) => handleInputChange('endYear', e.target.value)} placeholder="Ex: 1986" />
                  </div>
                </div>
              </div>
              <div className="mp-form-section">
                <h3>Récompenses et distinctions</h3>
                <div className="mp-form-group">
                  <label>Prix reçus</label>
                  {newPersonality.awards.map((award, index) => (
                    <div key={index} className="mp-array-input">
                      <select value={award} onChange={(e) => handleArrayInputChange('awards', index, e.target.value)}>
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
                  <textarea value={newPersonality.description} onChange={(e) => handleInputChange('description', e.target.value)} required placeholder="Description concise de la personnalité..." rows="3" />
                </div>
                <div className="mp-form-group">
                  <label>Description détaillée *</label>
                  <textarea value={newPersonality.detailedDescription} onChange={(e) => handleInputChange('detailedDescription', e.target.value)} required placeholder="Biographie complète et détaillée..." rows="5" />
                </div>
              </div>
              <div className="mp-form-section">
                <h3>Réalisations et contributions</h3>
                <div className="mp-form-group">
                  <label>Principales réalisations</label>
                  {newPersonality.achievements.map((achievement, index) => (
                    <div key={index} className="mp-array-input">
                      <input type="text" value={achievement} onChange={(e) => handleArrayInputChange('achievements', index, e.target.value)} placeholder={`Réalisation ${index + 1}`} />
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
                      <input type="text" value={contribution} onChange={(e) => handleArrayInputChange('contributions', index, e.target.value)} placeholder={`Contribution ${index + 1}`} />
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
                    <input type="number" value={newPersonality.stats.publications} onChange={(e) => handleNestedInputChange('stats', 'publications', parseInt(e.target.value))} min="0" />
                  </div>
                  <div className="mp-form-group">
                    <label>Niveau d'influence (%)</label>
                    <input type="range" value={newPersonality.stats.influence} onChange={(e) => handleNestedInputChange('stats', 'influence', parseInt(e.target.value))} min="0" max="100" />
                    <span>{newPersonality.stats.influence}%</span>
                  </div>
                </div>
                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Nombre de followers</label>
                    <input type="number" value={newPersonality.stats.followers} onChange={(e) => handleNestedInputChange('stats', 'followers', e.target.value)} min="0" />
                  </div>
                  <div className="mp-form-group">
                    <label>Nombre de projets</label>
                    <input type="number" value={newPersonality.stats.projects} onChange={(e) => handleNestedInputChange('stats', 'projects', parseInt(e.target.value))} min="0" />
                  </div>
                </div>
                <div className="mp-form-group">
                  <label>Couleur de représentation</label>
                  <input type="color" value={newPersonality.color} onChange={(e) => handleInputChange('color', e.target.value)} />
                </div>
              </div>
              <div className="mp-form-actions">
                <button type="button" onClick={() => setShowAddForm(false)} className="mp-cancel-btn">
                  Annuler
                </button>
                <button type="submit" className="mp-submit-btn">
                  <Plus size={18} />
                  Ajouter la Personnalité
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
                    <div className="mp-meter-fill" style={{ width: `${selectedPersonality.stats.influence}%`, background: selectedPersonality.color }}></div>
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