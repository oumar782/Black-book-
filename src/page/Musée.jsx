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
  Calendar, 
  User, 
  Heart, 
  Share2, 
  Eye, 
  Zap, 
  Target, 
  TrendingUp,
  Microscope,
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
  GraduationCap,
  Sparkles,
  Plus,
  Upload
} from 'lucide-react';
import './musée.css';

// Icônes personnalisées
const FlaskIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M14 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M15.5 2H8.5a1 1 0 0 0-.86.49l-2.9 5a1 1 0 0 0 .03 1.03l6.9 10.5a1 1 0 0 0 1.66 0l6.9-10.5a1 1 0 0 0 .03-1.03l-2.9-5A1 1 0 0 0 15.5 2z"/>
    <path d="M6 12h12"/>
  </svg>
);

const MythologyIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const MuséePersonnalités = () => {
  const [activeTab, setActiveTab] = useState('tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedSubDiscipline, setSelectedSubDiscipline] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
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
    period: 'contemporain',
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

  // Données des pays par continent
  const countriesByContinent = {
    "Afrique": {
      "Afrique du Nord": ["Algérie", "Égypte", "Libye", "Maroc", "Soudan", "Tunisie"],
      "Afrique de l'Est": ["Burundi", "Comores", "Djibouti", "Érythrée", "Éthiopie", "Kenya", "Madagascar", "Malawi", "Maurice", "Mozambique", "Rwanda", "Seychelles", "Somalie", "Soudan du Sud", "Tanzanie", "Ouganda"],
      "Afrique centrale": ["Angola", "Cameroun", "République centrafricaine", "Tchad", "Congo (Brazzaville)", "République démocratique du Congo", "Guinée équatoriale", "Gabon", "Sao Tomé‑et‑Principe"],
      "Afrique australe": ["Botswana", "Eswatini", "Lesotho", "Namibie", "Afrique du Sud", "Zambie", "Zimbabwe"],
      "Afrique de l'Ouest": ["Bénin", "Burkina Faso", "Cabo Verde", "Côte d'Ivoire", "Gambie", "Ghana", "Guinée", "Guinée‑Bissau", "Liberia", "Mali", "Mauritanie", "Niger", "Nigeria", "Sénégal", "Sierra Leone", "Togo"]
    },
    "Asie": {
      "Asie occidentale": ["Arménie", "Azerbaïdjan", "Bahreïn", "Chypre", "Géorgie", "Irak", "Israël", "Jordanie", "Koweït", "Liban", "Oman", "Palestine", "Qatar", "Arabie Saoudite", "Syrie", "Turquie", "Émirats arabes unis", "Yémen"],
      "Asie du Sud": ["Afghanistan", "Bangladesh", "Bhoutan", "Inde", "Iran", "Maldives", "Népal", "Pakistan", "Sri Lanka"],
      "Asie centrale": ["Kazakhstan", "Kirghizistan", "Tadjikistan", "Turkménistan", "Ouzbékistan"],
      "Asie de l'Est": ["Chine", "Japon", "Mongolie", "Corée du Nord", "Corée du Sud", "Taïwan"],
      "Asie du Sud‑Est": ["Brunei", "Cambodge", "Indonésie", "Laos", "Malaisie", "Myanmar", "Philippines", "Singapour", "Thaïlande", "Timor‑Leste", "Vietnam"]
    },
    "Europe": {
      "Europe du Nord": ["Danemark", "Estonie", "Finlande", "Islande", "Irlande", "Lettonie", "Lituanie", "Norvège", "Suède", "Royaume‑Uni"],
      "Europe de l'Ouest": ["Autriche", "Belgique", "France", "Allemagne", "Liechtenstein", "Luxembourg", "Monaco", "Pays‑Bas", "Suisse"],
      "Europe de l'Est": ["Biélorussie", "Bulgarie", "République tchèque", "Hongrie", "Pologne", "Moldavie", "Roumanie", "Russie", "Slovaquie", "Ukraine"],
      "Europe du Sud": ["Albanie", "Andorre", "Bosnie‑Herzégovine", "Croatie", "Chypre", "Grèce", "Italie", "Malte", "Monténégro", "Macédoine du Nord", "Portugal", "Saint‑Marin", "Serbie", "Slovénie", "Espagne", "Vatican"]
    },
    "Amérique": {
      "Amérique du Nord": ["Canada", "États‑Unis", "Mexique"],
      "Amérique centrale": ["Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama"],
      "Caraïbes": ["Antigua‑et‑Barbuda", "Bahamas", "Barbade", "Cuba", "Dominique", "République dominicaine", "Grenade", "Haïti", "Jamaïque", "Saint‑Kitts‑et‑Nevis", "Sainte‑Lucie", "Saint‑Vincent‑et‑les‑Grenadines", "Trinité‑et‑Tobago"],
      "Amérique du Sud": ["Argentine", "Bolivie", "Brésil", "Chili", "Colombie", "Équateur", "Guyana", "Paraguay", "Pérou", "Suriname", "Uruguay", "Venezuela"]
    },
    "Océanie": {
      "Australasie": ["Australie", "Nouvelle‑Zélande"],
      "Mélanésie": ["Fidji", "Papouasie‑Nouvelle‑Guinée", "Îles Salomon", "Vanuatu"],
      "Micronésie": ["Kiribati", "Îles Marshall", "Micronésie (États fédérés de)", "Nauru", "Palaos"],
      "Polynésie": ["Samoa", "Tonga", "Tuvalu"]
    }
  };

  // Périodes historiques
  const historicalPeriods = [
    "Paléolithique (≈ 3 300 000 - 10 000 av. J.-C.)",
    "Mésolithique (≈ 10 000 - 6 000 av. J.-C.)",
    "Néolithique (≈ 10 000 - 3 300 av. J.-C.)",
    "Âge du cuivre (≈ 4 500 - 3 300 av. J.-C.)",
    "Âge du bronze (≈ 3 300 - 1 200 av. J.-C.)",
    "Âge du fer (≈ 1 200 av. J.-C. - 52 apr. J.-C.)",
    "Antiquité (≈ 3 300 av. J.-C. - 476 apr. J.-C.)",
    "Moyen Âge (476 - 1453)",
    "Temps modernes (1453 - 1789)",
    "Époque contemporaine (1789 - aujourd'hui)",
    "Révolution industrielle (1760 - 1840)",
    "Révolution numérique (1970 - aujourd'hui)"
  ];

  // STRUCTURE COMPLÈTE DE CATÉGORISATION
  const [categoriesStructure, setCategoriesStructure] = useState({
    scientifique: {
      name: "Sciences et Technologies",
      icon: <Microscope size={20} />,
      subcategories: {
        fondamentales: {
          name: "Sciences Fondamentales",
          icon: <Atom size={18} />,
          disciplines: {
            mathematiques: { 
              name: "Mathématiques", 
              icon: <Calculator size={16} />,
              subdisciplines: [
                "Logique", "Algèbre", "Géométrie", "Statistique", 
                "Analyse", "Théorie des Nombres", "Mathématiques Appliquées"
              ] 
            },
            physique: { 
              name: "Physique", 
              icon: <Atom size={16} />,
              subdisciplines: [
                "Mécanique", "Thermodynamique", "Astrophysique", "Physique Quantique",
                "Électromagnétisme", "Optique", "Physique Nucléaire", "Physique des Particules"
              ] 
            },
            chimie: { 
              name: "Chimie", 
              icon: <FlaskIcon size={16} />,
              subdisciplines: [
                "Chimie Organique", "Chimie Inorganique", "Chimie Physique", 
                "Chimie Analytique", "Biochimie", "Chimie des Matériaux"
              ] 
            },
            biologie: { 
              name: "Biologie", 
              icon: <Leaf size={16} />,
              subdisciplines: [
                "Génétique", "Microbiologie", "Écologie", "Zoologie", 
                "Botanique", "Biologie Moléculaire", "Biologie Cellulaire", "Évolution"
              ] 
            },
            sciences_terre: { 
              name: "Sciences de la Terre", 
              icon: <Globe size={16} />,
              subdisciplines: [
                "Géologie", "Climatologie", "Océanographie", "Volcanologie",
                "Hydrologie", "Pédologie", "Géophysique"
              ] 
            },
            astronomie: { 
              name: "Astronomie", 
              icon: <Star size={16} />,
              subdisciplines: [
                "Étude des Astres", "Cosmologie", "Astrophysique", 
                "Planétologie", "Radioastronomie", "Astrobiologie"
              ] 
            }
          }
        },
        appliquees: {
          name: "Sciences Appliquées et Technologie",
          icon: <Code size={18} />,
          disciplines: {
            informatique: { 
              name: "Informatique et Science Numérique", 
              icon: <Code size={16} />,
              subdisciplines: [
                "Intelligence Artificielle", "Cybersécurité", "Robotique", 
                "Science des Données", "Développement Logiciel", "Réseaux",
                "Base de Données", "Algorithmique"
              ] 
            },
            ingenierie: { 
              name: "Ingénierie", 
              icon: <GraduationCap size={16} />,
              subdisciplines: [
                "Mécanique", "Civile", "Électrique", "Aéronautique",
                "Chimique", "Biomédicale", "Génie des Procédés", "Génie Industriel"
              ] 
            },
            science_materiaux: { 
              name: "Science des Matériaux", 
              icon: <Scissors size={16} />,
              subdisciplines: [
                "Nanotechnologie", "Polymères", "Métaux", "Céramiques",
                "Matériaux Composites", "Science des Surfaces", "Tribologie"
              ] 
            },
            environnement: { 
              name: "Science de l'Environnement", 
              icon: <Leaf size={16} />,
              subdisciplines: [
                "Énergies Renouvelables", "Gestion des Ressources", "Écologie Industrielle",
                "Développement Durable", "Traitement des Pollutions", "Économie Circulaire"
              ] 
            }
          }
        },
        sante: {
          name: "Sciences de la Santé et du Vivant",
          icon: <User size={18} />,
          disciplines: {
            medecine: { 
              name: "Médecine", 
              icon: <User size={16} />,
              subdisciplines: [
                "Cardiologie", "Neurologie", "Pédiatrie", "Chirurgie",
                "Médecine Interne", "Psychiatrie", "Gynécologie", "Dermatologie"
              ] 
            },
            pharmacie: { 
              name: "Pharmacie", 
              icon: <FlaskIcon size={16} />,
              subdisciplines: [
                "Développement de Médicaments", "Pharmacologie", "Pharmacie Clinique",
                "Pharmacognosie", "Toxicologie", "Pharmacie Hospitalière"
              ] 
            },
            veterinaire: { 
              name: "Sciences Vétérinaires", 
              icon: <User size={16} />,
              subdisciplines: [
                "Médecine Vétérinaire", "Chirurgie Vétérinaire", "Santé Animale",
                "Épidémiologie Vétérinaire", "Zootechnie", "Hygiène des Aliments"
              ] 
            },
            nutrition: { 
              name: "Sciences de la Nutrition", 
              icon: <Leaf size={16} />,
              subdisciplines: [
                "Nutrition Humaine", "Diététique", "Biochimie Nutritionnelle",
                "Sécurité Alimentaire", "Nutrition Clinique", "Épidémiologie Nutritionnelle"
              ] 
            }
          }
        }
      }
    },
    non_scientifique: {
      name: "Arts, Culture et Humanités",
      icon: <Palette size={20} />,
      subcategories: {
        arts_culture: {
          name: "Arts et Culture",
          icon: <Palette size={18} />,
          disciplines: {
            arts_visuels: { 
              name: "Arts Visuels", 
              icon: <Palette size={16} />,
              subdisciplines: [
                "Peinture", "Sculpture", "Photographie", "Dessin",
                "Arts Graphiques", "Gravure", "Installation", "Art Numérique"
              ] 
            },
            arts_scene: { 
              name: "Arts de la Scène", 
              icon: <User size={16} />,
              subdisciplines: [
                "Théâtre", "Danse", "Cirque", "Arts du Spectacle",
                "Mise en Scène", "Chorégraphie", "Art Dramatique", "Performance"
              ] 
            },
            musique: { 
              name: "Musique et Chant", 
              icon: <Music size={16} />,
              subdisciplines: [
                "Composition", "Interprétation", "Direction Musicale", 
                "Musicologie", "Chant Traditionnel", "Jazz", "Musique Classique"
              ] 
            },
            litterature: { 
              name: "Littérature et Poésie", 
              icon: <BookOpen size={16} />,
              subdisciplines: [
                "Roman", "Poésie", "Nouvelle", "Essai", 
                "Critique Littéraire", "Épopée", "Théâtre Littéraire", "Conte"
              ] 
            },
            cinema: { 
              name: "Cinéma et Audiovisuel", 
              icon: <Camera size={16} />,
              subdisciplines: [
                "Réalisation", "Production", "Scénario", "Montage",
                "Documentaire", "Animation", "Cinéma Expérimental", "Critique Cinématographique"
              ] 
            },
            mode_design: { 
              name: "Mode et Design", 
              icon: <Scissors size={16} />,
              subdisciplines: [
                "Création de Mode", "Design Industriel", "Design Graphique",
                "Stylisme", "Textile", "Design d'Espace", "Design d'Objet"
              ] 
            }
          }
        },
        humanites: {
          name: "Humanités et Sciences Sociales",
          icon: <Book size={18} />,
          disciplines: {
            philosophie: { 
              name: "Philosophie", 
              icon: <Book size={16} />,
              subdisciplines: [
                "Éthique", "Métaphysique", "Esthétique", "Philosophie Politique",
                "Logique Philosophique", "Épistémologie", "Philosophie Africaine"
              ] 
            },
            histoire: { 
              name: "Histoire", 
              icon: <BookOpen size={16} />,
              subdisciplines: [
                "Histoire Ancienne", "Histoire Moderne", "Histoire Contemporaine",
                "Archéologie", "Historiographie", "Histoire Sociale", "Histoire Culturelle"
              ] 
            },
            lettres: { 
              name: "Lettres et Philologie", 
              icon: <Book size={16} />,
              subdisciplines: [
                "Linguistique", "Littérature Comparée", "Philologie",
                "Traduction", "Études Culturelles", "Sémiotique", "Rhétorique"
              ] 
            },
            theologie: { 
              name: "Théologie et Études Religieuses", 
              icon: <User size={16} />,
              subdisciplines: [
                "Théologie Systématique", "Études Bibliques", "Histoire des Religions",
                "Philosophie Religieuse", "Théologie Morale", "Théologie Pratique"
              ] 
            }
          }
        },
        vie_sociale: {
          name: "Vie Sociale et Traditions",
          icon: <Sparkles size={18} />,
          disciplines: {
            croyances: { 
              name: "Croyances et Spiritualité", 
              icon: <User size={16} />,
              subdisciplines: [
                "Spiritualité Traditionnelle", "Rituels", "Croyances Ancestrales",
                "Métaphysique Africaine", "Cosmogonie", "Divination", "Spiritualité Vivante"
              ] 
            },
            mythes: { 
              name: "Mythes et Traditions", 
              icon: <MythologyIcon size={16} />,
              subdisciplines: [
                "Mythologie", "Traditions Orales", "Contes et Légendes",
                "Sagesse Ancestrale", "Épopées", "Rites de Passage", "Patrimoine Immatériel"
              ] 
            },
            langues: { 
              name: "Langues et Dialectes", 
              icon: <Book size={16} />,
              subdisciplines: [
                "Linguistique Descriptive", "Dialectologie", "Langues Africaines",
                "Patrimoine Linguistique", "Sociolinguistique", "Phonétique", "Sémantique"
              ] 
            }
          }
        }
      }
    }
  });

  // DONNÉES COMPLÈTES DES PERSONNALITÉS (stockage local)
  const [personalities, setPersonalities] = useState(() => {
    const saved = localStorage.getItem('musee-personnalities');
    if (saved) {
      return JSON.parse(saved);
    }
    
    // Données initiales
    return [
      {
        id: 1,
        name: "Cheikh Anta Diop",
        country: "Sénégal",
        category: "scientifique",
        subcategory: "fondamentales",
        discipline: "Histoire",
        subdiscipline: "Histoire Ancienne",
        specialty: "Égyptologie & Histoire Africaine",
        period: "Époque contemporaine (1789 - aujourd'hui)",
        image: "/api/placeholder/400/500",
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
      // ... autres personnalités initiales (identique à votre code précédent)
    ];
  });

  // Sauvegarder dans le localStorage quand personalities change
  useEffect(() => {
    localStorage.setItem('musee-personnalities', JSON.stringify(personalities));
  }, [personalities]);

  // EXTRACTION DES DONNÉES POUR LES FILTRES (dynamique)
  const countries = [...new Set(personalities.map(p => p.country))];
  const periods = [...new Set(personalities.map(p => p.period))];
  const allDisciplines = [...new Set(personalities.map(p => p.discipline))];
  const allSubDisciplines = [...new Set(personalities.map(p => p.subdiscipline))];
  const allSubCategories = [...new Set(personalities.map(p => p.subcategory))];

  // FONCTION DE FILTRAGE COMPLÈTE
  const filteredPersonalities = personalities.filter(personality => {
    const matchesSearch = personality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.subdiscipline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.discipline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = !selectedCountry || personality.country === selectedCountry;
    const matchesCategory = !selectedCategory || personality.category === selectedCategory;
    const matchesSubCategory = !selectedSubCategory || personality.subcategory === selectedSubCategory;
    const matchesDiscipline = !selectedDiscipline || personality.discipline === selectedDiscipline;
    const matchesSubDiscipline = !selectedSubDiscipline || personality.subdiscipline === selectedSubDiscipline;
    const matchesPeriod = !selectedPeriod || personality.period === selectedPeriod;
    const matchesTab = activeTab === 'tout' || personality.category === activeTab;

    return matchesSearch && matchesCountry && matchesCategory && matchesSubCategory && 
           matchesDiscipline && matchesSubDiscipline && matchesPeriod && matchesTab;
  });

  // Fonctions pour la gestion du formulaire
  const handleInputChange = (field, value) => {
    setNewPersonality(prev => ({
      ...prev,
      [field]: value
    }));
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
        setNewPersonality(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPersonalityWithId = {
      ...newPersonality,
      id: Date.now(), // ID unique basé sur le timestamp
      stats: {
        ...newPersonality.stats,
        followers: parseInt(newPersonality.stats.followers) > 1000 ? 
          `${(parseInt(newPersonality.stats.followers) / 1000).toFixed(1)}K` : 
          newPersonality.stats.followers.toString()
      }
    };

    setPersonalities(prev => [...prev, newPersonalityWithId]);
    
    // Réinitialiser le formulaire
    setNewPersonality({
      name: '',
      country: '',
      category: 'scientifique',
      subcategory: '',
      discipline: '',
      subdiscipline: '',
      specialty: '',
      period: 'contemporain',
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
    setSelectedPeriod('');
  };

  const activeFilters = [
    selectedCountry && `Pays: ${selectedCountry}`,
    selectedCategory && `Catégorie: ${selectedCategory === 'scientifique' ? 'Scientifique' : 'Non-scientifique'}`,
    selectedSubCategory && `Sous-catégorie: ${selectedSubCategory}`,
    selectedDiscipline && `Discipline: ${selectedDiscipline}`,
    selectedSubDiscipline && `Spécialité: ${selectedSubDiscipline}`,
    selectedPeriod && `Période: ${selectedPeriod}`
  ].filter(Boolean);

  // FONCTIONS POUR LES FILTRES DÉPENDANTS
  const getSubCategories = () => {
    if (!selectedCategory) return [];
    return [...new Set(personalities
      .filter(p => p.category === selectedCategory)
      .map(p => p.subcategory)
    )];
  };

  const getDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory) return [];
    return [...new Set(personalities
      .filter(p => p.category === selectedCategory && p.subcategory === selectedSubCategory)
      .map(p => p.discipline)
    )];
  };

  const getSubDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedDiscipline) return [];
    return [...new Set(personalities
      .filter(p => p.category === selectedCategory && p.subcategory === selectedSubCategory && p.discipline === selectedDiscipline)
      .map(p => p.subdiscipline)
    )];
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
            Musée des 
            <span className="mp-hero-highlight"> Grandes Figures</span>
            <br />
            de l'Histoire Noire
          </h1>
          
          <p className="mp-hero-subtitle">
            Découvrez l'héritage précieux des personnalités noires qui ont 
            façonné notre monde à travers la science, les arts, la politique 
            et l'innovation. Un voyage à travers les siècles d'excellence.
          </p>
          
          <div className="mp-hero-stats">
            <div className="mp-stat">
              <div className="mp-stat-number">{personalities.length}+</div>
              <div className="mp-stat-label">Personnalités</div>
            </div>
            <div className="mp-stat">
              <div className="mp-stat-number">{countries.length}</div>
              <div className="mp-stat-label">Pays représentés</div>
            </div>
            <div className="mp-stat">
              <div className="mp-stat-number">{allDisciplines.length}</div>
              <div className="mp-stat-label">Domaines d'expertise</div>
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
                  placeholder="Rechercher une personnalité, spécialité, discipline..."
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
                    {Object.entries(countriesByContinent).map(([continent, regions]) => (
                      <optgroup key={continent} label={continent}>
                        {Object.entries(regions).flatMap(([region, countries]) =>
                          countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))
                        )}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="mp-filter-group">
                  <label>Catégorie principale</label>
                  <select value={selectedCategory} onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubCategory('');
                    setSelectedDiscipline('');
                    setSelectedSubDiscipline('');
                  }} className="mp-filter-select">
                    <option value="">Toutes les catégories</option>
                    <option value="scientifique">Scientifique</option>
                    <option value="non_scientifique">Non-scientifique</option>
                  </select>
                </div>

                {selectedCategory && (
                  <div className="mp-filter-group">
                    <label>Sous-catégorie</label>
                    <select value={selectedSubCategory} onChange={(e) => {
                      setSelectedSubCategory(e.target.value);
                      setSelectedDiscipline('');
                      setSelectedSubDiscipline('');
                    }} className="mp-filter-select">
                      <option value="">Toutes les sous-catégories</option>
                      {getSubCategories().map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                )}

                {selectedSubCategory && (
                  <div className="mp-filter-group">
                    <label>Discipline</label>
                    <select value={selectedDiscipline} onChange={(e) => {
                      setSelectedDiscipline(e.target.value);
                      setSelectedSubDiscipline('');
                    }} className="mp-filter-select">
                      <option value="">Toutes les disciplines</option>
                      {getDisciplines().map(discipline => (
                        <option key={discipline} value={discipline}>{discipline}</option>
                      ))}
                    </select>
                  </div>
                )}

                {selectedDiscipline && (
                  <div className="mp-filter-group">
                    <label>Spécialité</label>
                    <select value={selectedSubDiscipline} onChange={(e) => setSelectedSubDiscipline(e.target.value)} className="mp-filter-select">
                      <option value="">Toutes les spécialités</option>
                      {getSubDisciplines().map(subDiscipline => (
                        <option key={subDiscipline} value={subDiscipline}>{subDiscipline}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="mp-filter-group">
                  <label>Période historique</label>
                  <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)} className="mp-filter-select">
                    <option value="">Toutes les périodes</option>
                    {historicalPeriods.map(period => (
                      <option key={period} value={period}>{period}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Indicateurs de filtres actifs */}
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
                        }
                        else if (filter.includes('Sous-catégorie:')) {
                          setSelectedSubCategory('');
                          setSelectedDiscipline('');
                          setSelectedSubDiscipline('');
                        }
                        else if (filter.includes('Discipline:')) {
                          setSelectedDiscipline('');
                          setSelectedSubDiscipline('');
                        }
                        else if (filter.includes('Spécialité:')) setSelectedSubDiscipline('');
                        else if (filter.includes('Période:')) setSelectedPeriod('');
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
                <Users size={20} />
                <span>{personalities.filter(p => p.category === 'scientifique').length} Scientifiques</span>
              </div>
              <div className="mp-stat">
                <Book size={20} />
                <span>{personalities.filter(p => p.category === 'non_scientifique').length} Non-scientifiques</span>
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
                        <div className="mp-period">{personality.period.split('(')[0].trim()}</div>
                      </div>
                    </div>
                    
                    <div className="mp-specialty">{personality.specialty}</div>
                    <p className="mp-description">{personality.description}</p>
                    
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

      {/* Modal d'ajout de personnalité */}
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
                      {Object.entries(countriesByContinent).map(([continent, regions]) => (
                        <optgroup key={continent} label={continent}>
                          {Object.entries(regions).flatMap(([region, countries]) =>
                            countries.map(country => (
                              <option key={country} value={country}>{country}</option>
                            ))
                          )}
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
                    <input
                      type="text"
                      value={newPersonality.subcategory}
                      onChange={(e) => handleInputChange('subcategory', e.target.value)}
                      required
                      placeholder="Ex: Sciences Fondamentales"
                    />
                  </div>
                </div>

                <div className="mp-form-row">
                  <div className="mp-form-group">
                    <label>Discipline *</label>
                    <input
                      type="text"
                      value={newPersonality.discipline}
                      onChange={(e) => handleInputChange('discipline', e.target.value)}
                      required
                      placeholder="Ex: Mathématiques"
                    />
                  </div>
                  
                  <div className="mp-form-group">
                    <label>Spécialité détaillée *</label>
                    <input
                      type="text"
                      value={newPersonality.subdiscipline}
                      onChange={(e) => handleInputChange('subdiscipline', e.target.value)}
                      required
                      placeholder="Ex: Algèbre"
                    />
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
                        <option key={period} value={period}>{period}</option>
                      ))}
                    </select>
                  </div>
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
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="mp-file-input"
                          />
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
                  <span className="mp-period-tag">{selectedPersonality.period.split('(')[0].trim()}</span>
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