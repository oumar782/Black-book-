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
  Sparkles
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // STRUCTURE COMPLÈTE DE CATÉGORISATION
  const categoriesStructure = {
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
  };

  // DONNÉES COMPLÈTES DES PERSONNALITÉS
  const personalities = [
    // SCIENCES FONDAMENTALES
    {
      id: 1,
      name: "Cheikh Anta Diop",
      country: "Sénégal",
      category: "scientifique",
      subcategory: "fondamentales",
      discipline: "Histoire",
      subdiscipline: "Histoire Ancienne",
      specialty: "Égyptologie & Histoire Africaine",
      period: "moderne",
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
    {
      id: 2,
      name: "Dr. Thomas Mensah",
      country: "Ghana",
      category: "scientifique",
      subcategory: "fondamentales",
      discipline: "Chimie",
      subdiscipline: "Chimie des Matériaux",
      specialty: "Fibres Optiques & Nanotechnologie",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Pionnier des fibres optiques et des nanotechnologies, inventeur de procédés révolutionnaires dans les matériaux avancés.",
      detailedDescription: "Le Dr. Thomas Mensah est un ingénieur chimiste de renommée mondiale qui a développé des procédés de fabrication de fibres optiques à haute vitesse. Ses innovations ont révolutionné les télécommunications et lui ont valu de nombreux prix internationaux.",
      achievements: [
        "Développement de fibres optiques à haute vitesse",
        "7 brevets internationaux en nanotechnologie",
        "Membre de l'Académie nationale d'ingénierie des États-Unis",
        "Prix Percy Julian"
      ],
      contributions: [
        "Procédés de fabrication de fibres optiques",
        "Développement de matériaux composites",
        "Recherche en nanotechnologie",
        "Innovation dans les télécommunications"
      ],
      stats: { 
        publications: 45, 
        influence: 92,
        followers: "1.2M",
        projects: 67
      },
      color: "#1565c0"
    },

    // SCIENCES APPLIQUÉES
    {
      id: 3,
      name: "Philip Emeagwali",
      country: "Nigeria",
      category: "scientifique",
      subcategory: "appliquees",
      discipline: "Informatique et Science Numérique",
      subdiscipline: "Calcul Parallèle",
      specialty: "Supercalculateurs & Internet",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Pionnier de l'informatique, connu pour ses travaux révolutionnaires sur les supercalculateurs et les fondements de l'Internet.",
      detailedDescription: "Philip Emeagwali a révolutionné le calcul scientifique en développant des algorithmes permettant à 65,000 processeurs de fonctionner en parallèle. Ses travaux ont pavé la voie pour les technologies modernes de calcul distribué et ont influencé le développement de l'Internet.",
      achievements: [
        "Prix Gordon Bell 1989 (le Nobel de l'informatique)",
        "Développement du calcul parallèle massif",
        "65,000 processeurs interconnectés",
        "Pionnier des technologies Internet"
      ],
      contributions: [
        "Architecture des supercalculateurs modernes",
        "Algorithmes de calcul parallèle",
        "Modélisation des réservoirs pétroliers",
        "Fondements du cloud computing"
      ],
      stats: { 
        publications: 32, 
        influence: 88,
        followers: "850K",
        projects: 56
      },
      color: "#1565c0"
    },
    {
      id: 4,
      name: "Dr. Wangari Maathai",
      country: "Kenya",
      category: "scientifique",
      subcategory: "appliquees",
      discipline: "Science de l'Environnement",
      subdiscipline: "Écologie",
      specialty: "Écologie Sociale & Reboisement",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Pionnière de l'écologie en Afrique, première femme africaine à recevoir le prix Nobel de la paix pour sa contribution au développement durable.",
      detailedDescription: "Wangari Maathai a révolutionné la conservation environnementale en Afrique grâce à son mouvement de la Ceinture Verte. Son travail a non seulement planté des millions d'arbres mais a aussi autonomisé des milliers de femmes rurales. Sa vision a intégré la protection de l'environnement avec les droits humains et le développement communautaire.",
      achievements: [
        "Prix Nobel de la Paix 2004",
        "Fondatrice du Green Belt Movement",
        "Plus de 50 millions d'arbres plantés",
        "Première femme d'Afrique de l'Est à obtenir un doctorat"
      ],
      contributions: [
        "Théorie de l'écologie sociale",
        "Mouvement de reboisement communautaire",
        "Lutte pour la démocratie au Kenya",
        "Autonomisation des femmes rurales"
      ],
      stats: { 
        publications: 45, 
        influence: 95,
        followers: "2.3M",
        projects: 127
      },
      color: "#2e7d32"
    },

    // SCIENCES DE LA SANTÉ
    {
      id: 5,
      name: "Dr. Denis Mukwege",
      country: "République Démocratique du Congo",
      category: "scientifique",
      subcategory: "sante",
      discipline: "Médecine",
      subdiscipline: "Chirurgie",
      specialty: "Gynécologie Réparatrice & Droits Humains",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Gynécologue et militant des droits de l'homme, Prix Nobel de la Paix 2018 pour son combat contre les violences sexuelles en temps de guerre.",
      detailedDescription: "Le Dr. Mukwege a consacré sa vie à soigner les femmes victimes de violences sexuelles en RDC. Fondateur de l'hôpital de Panzi, il a soigné des dizaines de milliers de femmes et est devenu une voix mondiale contre l'utilisation du viol comme arme de guerre. Son expertise en chirurgie réparatrice est reconnue internationalement.",
      achievements: [
        "Prix Nobel de la Paix 2018",
        "Prix Sakharov 2014",
        "Fondateur de l'hôpital de Panzi",
        "Soins à plus de 50,000 survivantes"
      ],
      contributions: [
        "Techniques chirurgicales reconstructives innovantes",
        "Plaidoyer international contre les violences sexuelles",
        "Formation de médecins en traumatologie",
        "Défense des droits des femmes"
      ],
      stats: { 
        publications: 67, 
        influence: 97,
        followers: "1.5M",
        projects: 45
      },
      color: "#1976d2"
    },

    // ARTS ET CULTURE
    {
      id: 6,
      name: "Miriam Makeba",
      country: "Afrique du Sud",
      category: "non_scientifique",
      subcategory: "arts_culture",
      discipline: "Musique et Chant",
      subdiscipline: "Interprétation",
      specialty: "World Music & Activisme",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Chanteuse légendaire et militante infatigable contre l'apartheid, surnommée Mama Africa, voix puissante de la liberté et de la dignité africaine.",
      detailedDescription: "Miriam Makeba a utilisé sa voix extraordinaire comme arme contre l'oppression. Exilée pendant 31 ans pour son combat contre l'apartheid, elle est devenue l'ambassadrice musicale de l'Afrique, popularisant les rythmes africains à travers le monde tout en maintenant son engagement politique constant.",
      achievements: [
        "Première artiste africaine à recevoir un Grammy",
        "Ambassadrice de l'UNICEF",
        "Prix de la Paix Dag Hammarskjöld",
        "Légion d'honneur française"
      ],
      contributions: [
        "Popularisation de la world music",
        "Lutte contre l'apartheid",
        "Promotion des droits des femmes",
        "Préservation des musiques traditionnelles africaines"
      ],
      stats: { 
        publications: 0, 
        influence: 90,
        followers: "3.2M",
        projects: 64
      },
      color: "#f9a825"
    },
    {
      id: 7,
      name: "Chinua Achebe",
      country: "Nigeria",
      category: "non_scientifique",
      subcategory: "arts_culture",
      discipline: "Littérature et Poésie",
      subdiscipline: "Roman",
      specialty: "Littérature Postcoloniale",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Écrivain nigérian de renommée mondiale, auteur de 'Le Monde s'effondre', considéré comme le père de la littérature africaine moderne.",
      detailedDescription: "Chinua Achebe a révolutionné la littérature africaine en donnant une voix authentique aux expériences africaines. Ses œuvres explorent les conflits entre traditions africaines et influences coloniales, établissant de nouveaux standards pour la littérature postcoloniale. Son roman 'Le Monde s'effondre' est considéré comme l'œuvre fondatrice de la littérature africaine moderne.",
      achievements: [
        "Auteur de 'Le Monde s'effondre' (1958)",
        "Man Booker International Prize 2007",
        "Plus de 20 millions de livres vendus",
        "Traduit dans 50 langues"
      ],
      contributions: [
        "Déconstruction des stéréotypes coloniaux",
        "Établissement du réalisme africain",
        "Critique littéraire postcoloniale",
        "Formation de toute une génération d'écrivains"
      ],
      stats: { 
        publications: 28, 
        influence: 94,
        followers: "1.2M",
        projects: 32
      },
      color: "#7b1fa2"
    },
    {
      id: 8,
      name: "Ousmane Sembène",
      country: "Sénégal",
      category: "non_scientifique",
      subcategory: "arts_culture",
      discipline: "Cinéma et Audiovisuel",
      subdiscipline: "Réalisation",
      specialty: "Cinéma Engagé Africain",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Père du cinéma africain, réalisateur et écrivain engagé, pionnier du cinéma postcolonial africain.",
      detailedDescription: "Ousmane Sembène a utilisé le cinéma comme outil de conscientisation politique et sociale. Ses films dénoncent les injustices et célèbrent la résistance africaine. Considéré comme le père du cinéma africain, il a créé un langage cinématographique unique mêlant réalisme social et critique politique.",
      achievements: [
        "Prix de la Critique Internationale à Cannes",
        "Fondateur du cinéma africain moderne",
        "Plus de 20 films réalisés",
        "Prix du patrimoine au FESPACO"
      ],
      contributions: [
        "Cinéma engagé et politique",
        "Narration africaine authentique",
        "Formation de jeunes cinéastes",
        "Décolonisation de l'image africaine"
      ],
      stats: { 
        publications: 15, 
        influence: 92,
        followers: "980K",
        projects: 24
      },
      color: "#ff6f00"
    },

    // HUMANITÉS
    {
      id: 9,
      name: "Thomas Sankara",
      country: "Burkina Faso",
      category: "non_scientifique",
      subcategory: "humanites",
      discipline: "Philosophie",
      subdiscipline: "Philosophie Politique",
      specialty: "Révolution & Panafricanisme",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Révolutionnaire charismatique et président visionnaire du Burkina Faso, icône du panafricanisme et de l'intégrité politique.",
      detailedDescription: "Thomas Sankara a transformé la Haute-Volta en Burkina Faso ('Pays des hommes intègres') en seulement quatre ans. Son leadership anticolonial et son engagement pour l'autosuffisance ont inspiré toute une génération. Sa lutte contre la corruption et pour l'émancipation des femmes reste un modèle de gouvernance progressiste.",
      achievements: [
        "Campagne de vaccination massive (2.5 millions d'enfants)",
        "Émancipation des femmes et interdiction de l'excision",
        "Refus de l'aide internationale conditionnée",
        "Programme national de reboisement"
      ],
      contributions: [
        "Théorie de la révolution démocratique",
        "Politique d'autosuffisance alimentaire",
        "Réforme agraire et éducation",
        "Panafricanisme révolutionnaire"
      ],
      stats: { 
        publications: 12, 
        influence: 96,
        followers: "2.1M",
        projects: 203
      },
      color: "#d32f2f"
    },

    // VIE SOCIALE ET TRADITIONS
    {
      id: 10,
      name: "Amadou Hampâté Bâ",
      country: "Mali",
      category: "non_scientifique",
      subcategory: "vie_sociale",
      discipline: "Mythes et Traditions",
      subdiscipline: "Traditions Orales",
      specialty: "Sagesse Ancestrale & Préservation Culturelle",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Écrivain, ethnologue et défenseur infatigable des traditions orales africaines, gardien de la sagesse ancestrale.",
      detailedDescription: "Amadou Hampâté Bâ a consacré sa vie à la préservation et à la transmission des traditions orales africaines. Sa célèbre phrase 'En Afrique, quand un vieillard meurt, c'est une bibliothèque qui brûle' résume son combat pour sauvegarder le patrimoine culturel immatériel de l'Afrique.",
      achievements: [
        "Membre fondateur de l'UNESCO",
        "Collection exhaustive de traditions orales",
        "Prix de l'Académie française",
        "Ambassadeur de la culture africaine"
      ],
      contributions: [
        "Préservation des traditions orales",
        "Sauvegarde du patrimoine culturel",
        "Transmission de la sagesse ancestrale",
        "Défense de la diversité culturelle"
      ],
      stats: { 
        publications: 25, 
        influence: 89,
        followers: "1.1M",
        projects: 78
      },
      color: "#5d4037"
    },
    {
      id: 11,
      name: "Soyinka Wole",
      country: "Nigeria",
      category: "non_scientifique",
      subcategory: "vie_sociale",
      discipline: "Langues et Dialectes",
      subdiscipline: "Linguistique Descriptive",
      specialty: "Littérature & Engagement Politique",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Écrivain, poète et dramaturge nigérian, premier Africain à recevoir le prix Nobel de littérature en 1986.",
      detailedDescription: "Wole Soyinka est une figure majeure de la littérature mondiale et un infatigable défenseur des droits de l'homme. Son œuvre explore les complexités de la société africaine moderne tout en s'enracinant dans les traditions yoruba.",
      achievements: [
        "Prix Nobel de Littérature 1986",
        "Fondateur du Théâtre national du Nigeria",
        "Prix international des écrivains",
        "Docteur honoris causa de nombreuses universités"
      ],
      contributions: [
        "Renouvellement du théâtre africain",
        "Défense des droits de l'homme",
        "Fusion traditions-modernité",
        "Promotion de la langue anglaise africaine"
      ],
      stats: { 
        publications: 40, 
        influence: 93,
        followers: "1.4M",
        projects: 56
      },
      color: "#004d40"
    }
  ];

  // EXTRACTION DES DONNÉES POUR LES FILTRES
  const countries = [...new Set(personalities.map(p => p.country))];
  const periods = [...new Set(personalities.map(p => p.period))];
  const allDisciplines = [...new Set(personalities.map(p => p.discipline))];
  const allSubDisciplines = [...new Set(personalities.map(p => p.subdiscipline))];

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
    selectedSubCategory && `Sous-catégorie: ${categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory]?.name || selectedSubCategory}`,
    selectedDiscipline && `Discipline: ${selectedDiscipline}`,
    selectedSubDiscipline && `Spécialité: ${selectedSubDiscipline}`,
    selectedPeriod && `Période: ${selectedPeriod}`
  ].filter(Boolean);

  // FONCTIONS POUR LES FILTRES DÉPENDANTS
  const getSubCategories = () => {
    if (!selectedCategory) return [];
    const categoryData = categoriesStructure[selectedCategory];
    return categoryData ? Object.entries(categoryData.subcategories).map(([key, value]) => ({
      key,
      name: value.name,
      icon: value.icon
    })) : [];
  };

  const getDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory) return [];
    const subcategoryData = categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory];
    return subcategoryData ? Object.entries(subcategoryData.disciplines).map(([key, value]) => ({
      key,
      name: value.name,
      icon: value.icon
    })) : [];
  };

  const getSubDisciplines = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedDiscipline) return [];
    const disciplineData = categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory]?.disciplines[Object.keys(categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory]?.disciplines || {}).find(key => 
      categoriesStructure[selectedCategory]?.subcategories[selectedSubCategory]?.disciplines[key]?.name === selectedDiscipline
    )];
    return disciplineData ? disciplineData.subdisciplines : [];
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
          
          <button className="mp-cta-button" onClick={() => document.querySelector('.mp-filters-section').scrollIntoView({ behavior: 'smooth' })}>
            Explorer la Collection
            <ArrowRight size={20} />
          </button>
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
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
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
                        <option key={sub.key} value={sub.key}>{sub.name}</option>
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
                        <option key={discipline.key} value={discipline.name}>{discipline.name}</option>
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
                    <option value="historique">Historique</option>
                    <option value="moderne">Moderne</option>
                    <option value="contemporain">Contemporain</option>
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
                    <img src={personality.image} alt={personality.name} />
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
                        <div className="mp-period">{personality.period}</div>
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

      {/* Modal de détail */}
      {isModalOpen && selectedPersonality && (
        <div className="mp-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="mp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mp-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            
            <div className="mp-modal-header">
              <div className="mp-personality-image">
                <img src={selectedPersonality.image} alt={selectedPersonality.name} />
                <div className="mp-image-overlay" style={{backgroundColor: `${selectedPersonality.color}20`}}></div>
              </div>
              
              <div className="mp-personality-info">
                <div className="mp-personality-meta">
                  <span className="mp-category-tag" style={{backgroundColor: selectedPersonality.color}}>
                    {selectedPersonality.category === 'scientifique' ? 'Scientifique' : 'Arts & Culture'}
                  </span>
                  <span className="mp-period-tag">{selectedPersonality.period}</span>
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