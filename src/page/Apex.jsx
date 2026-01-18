import React, { useState, useEffect } from 'react';
import { Globe, History, Users, MapPin, Award, BookOpen, ArrowRight, ChevronDown, Star, Zap, Brain, Heart, Compass, Dna, Mountain, Search, Filter, X, Clock, User, Calendar, Sparkles, Target, Shield, Telescope } from 'lucide-react';
import './apex.css';

const ApexHeritage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('decouvertes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  // URLs des APIs
  const API_BASE = 'https://backblack.vercel.app/api';
  const BLOG_API = `${API_BASE}/apex`;

  // Données initiales enrichies
  const defaultSections = [
    {
      id: 1,
      title: "L'Afrique, Berceau de l'Humanité",
      content: "Les découvertes archéologiques en Afrique ont révélé les plus anciens vestiges humains, démontrant que l'évolution complète de l'homme moderne s'est déroulée sur le continent africain. De Lucy en Éthiopie aux sites de Sterkfontein en Afrique du Sud, l'Afrique regorge de sites préhistoriques qui retracent l'histoire de l'humanité sur plusieurs millions d'années.\n\nLes recherches génétiques confirment que tous les humains modernes partagent des ancêtres communs originaires d'Afrique. L'ADN mitochondrial de l'Ève mitochondriale remonte à 200 000 ans en Afrique, établissant notre origine commune.\n\nCette réalité scientifique fondamentale nous rappelle notre unité et notre histoire partagée en tant qu'espèce humaine.",
      icon: 'Globe',
      stats: "7M d'années d'histoire",
      color: "#e53e3e",
      category: "archéologie",
      author_name: "Dr. Sarah Mensah",
      read_time: 8,
      published_at: "2024-01-15T10:30:00.000Z",
      is_published: true
    },
    {
      id: 2,
      title: "Lucy : Notre Ancêtre Commun",
      content: "Découverte en 1974 en Éthiopie, Lucy (Australopithecus afarensis) représente l'un des fossiles les plus complets jamais trouvés. Âgée de 3,2 millions d'années, elle démontre la bipédie précoce de nos ancêtres et constitue une pièce maîtresse dans la compréhension de l'évolution humaine.\n\nLes analyses ont montré que Lucy mesurait environ 1,10 mètre et pesait 27 kg. Sa structure osseuse indique qu'elle était bipède, mais conservait encore une aptitude à grimper aux arbres.\n\nCette découverte a confirmé que la bipédie est apparue avant le développement important du cerveau chez les hominidés, révolutionnant notre compréhension de l'évolution humaine.",
      icon: 'Users',
      stats: "3.2M d'années",
      color: "#3182ce",
      category: "fossiles",
      author_name: "Prof. Jean Koffi",
      read_time: 6,
      published_at: "2024-01-14T14:20:00.000Z",
      is_published: true
    },
    {
      id: 3,
      title: "Civilisations Anciennes",
      content: "L'Égypte antique, le Royaume du Mali, l'Empire du Ghana, le Grand Zimbabwe... L'Afrique a vu naître certaines des civilisations les plus avancées de l'histoire humaine, avec des réalisations architecturales, scientifiques et culturelles remarquables.\n\nLes pyramides de Gizeh, construites il y a plus de 4500 ans, témoignent d'une maîtrise technique exceptionnelle. Le Royaume du Mali, sous l'empereur Mansa Moussa, était l'un des plus riches et puissants de son époque.\n\nCes civilisations ont développé des systèmes d'écriture, des connaissances astronomiques avancées et des réseaux commerciaux sophistiqués bien avant les contacts avec d'autres continents.",
      icon: 'History',
      stats: "10 000 ans d'histoire",
      color: "#38a169",
      category: "civilisations",
      author_name: "Dr. Amina Diallo",
      read_time: 10,
      published_at: "2024-01-13T09:15:00.000Z",
      is_published: true
    },
    {
      id: 4,
      title: "Héritage Génétique",
      content: "Les recherches en génétique confirment que toute l'humanité moderne partage des ancêtres communs originaires d'Afrique. L'ADN mitochondrial de l'Ève mitochondriale remonte à 200 000 ans en Afrique, établissant notre origine commune.\n\nLes analyses génétiques montrent que la diversité génétique est la plus élevée en Afrique, ce qui soutient la théorie de l'origine africaine de l'humanité. Chaque population humaine hors d'Afrique ne représente qu'un sous-ensemble de la diversité génétique africaine.\n\nCes découvertes ont des implications importantes pour comprendre les migrations humaines à travers le monde et notre unité fondamentale en tant qu'espèce.",
      icon: 'Dna',
      stats: "99.9% ADN commun",
      color: "#805ad5",
      category: "génétique",
      author_name: "Dr. Kwame Nkrumah",
      read_time: 7,
      published_at: "2024-01-12T16:45:00.000Z",
      is_published: true
    }
  ];

  // Nouvelle timeline stylée
  const heritageJourney = [
    { 
      period: "7M années", 
      title: "Origines Préhistoriques", 
      description: "Premiers hominidés en Afrique centrale",
      icon: 'Users',
      color: "#e53e3e",
      discoveries: ["Toumaï au Tchad", "Premiers outils lithiques"]
    },
    { 
      period: "3.2M années", 
      title: "Lucy & la Bipédie", 
      description: "Australopithecus afarensis en Éthiopie",
      icon: 'Compass',
      color: "#3182ce",
      discoveries: ["Squelette complet", "Preuve de bipédie"]
    },
    { 
      period: "2.5M années", 
      title: "Âge de Pierre", 
      description: "Fabrication d'outils systématique",
      icon: 'Zap',
      color: "#38a169",
      discoveries: ["Outils Oldowayen", "Technologie lithique"]
    },
    { 
      period: "1.8M années", 
      title: "Homo Erectus", 
      description: "Migration hors d'Afrique",
      icon: 'Globe',
      color: "#805ad5",
      discoveries: ["Feu maîtrisé", "Migration mondiale"]
    },
    { 
      period: "300K années", 
      title: "Sapiens Archaïque", 
      description: "Homo sapiens à Jebel Irhoud",
      icon: 'Brain',
      color: "#d69e2e",
      discoveries: ["Plus anciens sapiens", "Innovations culturelles"]
    },
    { 
      period: "100K années", 
      title: "Humanité Moderne", 
      description: "Expansion mondiale depuis l'Afrique",
      icon: 'Heart',
      color: "#319795",
      discoveries: ["Art rupestre", "Langages complexes"]
    }
  ];

  const features = [
    { icon: 'Brain', title: "Intelligence", description: "Développement cognitif précoce" },
    { icon: 'Shield', title: "Résilience", description: "Adaptation aux climats extrêmes" },
    { icon: 'Target', title: "Innovation", description: "Technologies révolutionnaires" },
    { icon: 'Sparkles', title: "Créativité", description: "Premières expressions artistiques" }
  ];

  const categories = ['all', 'archéologie', 'fossiles', 'civilisations', 'génétique', 'savoirs', 'technologie', 'évolution'];

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams();
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      if (searchTerm) params.append('search', searchTerm);
      
      const url = `${BLOG_API}${params.toString() ? `?${params.toString()}` : ''}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      const formattedData = data.map(post => ({
        ...post,
        icon: post.icon || getDefaultIcon(post.category),
        color: post.color || getCategoryColor(post.category),
        stats: post.stats || getDefaultStats(post.category)
      }));
      
      setBlogPosts(formattedData);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
      setError('Impossible de charger les articles. Affichage des données de démonstration.');
      setBlogPosts(defaultSections);
    } finally {
      setLoading(false);
    }
  };

  const getDefaultIcon = (category) => {
    const iconMap = {
      'archéologie': 'Globe',
      'fossiles': 'Users',
      'civilisations': 'History',
      'génétique': 'Dna',
      'savoirs': 'BookOpen',
      'technologie': 'Zap',
      'évolution': 'Compass'
    };
    return iconMap[category] || 'Star';
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'archéologie': '#e53e3e',
      'fossiles': '#3182ce',
      'civilisations': '#38a169',
      'génétique': '#805ad5',
      'savoirs': '#d69e2e',
      'technologie': '#dd6b20',
      'évolution': '#319795'
    };
    return colorMap[category] || '#718096';
  };

  const getDefaultStats = (category) => {
    const statsMap = {
      'archéologie': "7M d'années d'histoire",
      'fossiles': "3.2M d'années",
      'civilisations': "10 000 ans d'histoire",
      'génétique': "99.9% ADN commun",
      'savoirs': "Savoirs ancestraux",
      'technologie': "Innovations majeures",
      'évolution': "Processus évolutif"
    };
    return statsMap[category] || "Données historiques";
  };

  const openModal = async (post) => {
    try {
      if (!post.content || post.content.length < 500) {
        const response = await fetch(`${BLOG_API}/${post.id}`);
        if (response.ok) {
          const fullPost = await response.json();
          setSelectedPost(fullPost);
        } else {
          setSelectedPost(post);
        }
      } else {
        setSelectedPost(post);
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'article complet:', error);
      setSelectedPost(post);
    }
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Date inconnue';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredSections = blogPosts.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (section.content && section.content.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const iconComponents = {
    Globe,
    History,
    Users,
    MapPin,
    Award,
    BookOpen,
    Star,
    Zap,
    Brain,
    Heart,
    Compass,
    Dna,
    Mountain,
    Search,
    Filter,
    X,
    Clock,
    User,
    Calendar,
    Sparkles,
    Target,
    Shield,
    Telescope
  };

  const getIconComponent = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? React.createElement(IconComponent, { className: "apex-icon" }) : React.createElement(Star, { className: "apex-icon" });
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="apex-app">
      {/* Hero Section */}
      <section className="apex-hero">
        <div className="apex-hero-background">
          <div className="apex-hero-gradient"></div>
          <div className="apex-hero-pattern"></div>
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Carte de l'Afrique historique"
            className="apex-hero-image"
          />
        </div>
        <div className="apex-container">
          <div className="apex-hero-content">
            <div className="apex-hero-badge">
              <Sparkles size={18} />
              <span>Notre Origine Commune</span>
            </div>
            <h1 className="apex-hero-title">
              L'Afrique est le <span className="apex-hero-highlight">Berceau de l'Humanité</span>
            </h1>
            <p className="apex-hero-subtitle">
              Découvrez les preuves scientifiques qui établissent l'Afrique comme origine unique de l'humanité moderne et le théâtre de son évolution complète
            </p>
            <div className="apex-hero-stats">
              <div className="apex-stat">
                <div className="apex-stat-number">7M</div>
                <div className="apex-stat-label">Années d'histoire</div>
              </div>
              <div className="apex-stat">
                <div className="apex-stat-number">200+</div>
                <div className="apex-stat-label">Sites archéologiques</div>
              </div>
              <div className="apex-stat">
                <div className="apex-stat-number">54</div>
                <div className="apex-stat-label">Pays témoins</div>
              </div>
            </div>
            <button className="apex-cta-button">
              Explorer l'Héritage <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="apex-scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section className="apex-features-section">
        <div className="apex-container">
          <div className="apex-section-header">
            <h2 className="apex-section-heading">Les Piliers de l'Évolution Humaine</h2>
            <p className="apex-section-subtitle">Découvrez les fondements qui ont façonné l'humanité moderne</p>
          </div>
          <div className="apex-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="apex-feature-card">
                <div className="apex-feature-icon-wrapper">
                  <div className="apex-feature-icon-glow" style={{ backgroundColor: feature.color + '20' }}></div>
                  <div className="apex-feature-icon">
                    {getIconComponent(feature.icon)}
                  </div>
                </div>
                <h3 className="apex-feature-title">{feature.title}</h3>
                <p className="apex-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nouvelle Timeline Section */}
      <section className="apex-journey-section">
        <div className="apex-container">
          <div className="apex-section-header">
            <h2 className="apex-section-heading">Le Voyage de l'Humanité</h2>
            <p className="apex-section-subtitle">Chronologie de notre évolution depuis l'Afrique</p>
          </div>
          
          <div className="apex-journey-timeline">
            {heritageJourney.map((item, index) => (
              <div key={index} className="apex-journey-item">
                <div className="apex-journey-timeline-line">
                  <div className="apex-journey-dot" style={{ backgroundColor: item.color }}>
                    <div className="apex-journey-dot-inner">
                      {getIconComponent(item.icon)}
                    </div>
                  </div>
                </div>
                
                <div className="apex-journey-content">
                  <div className="apex-journey-period" style={{ color: item.color }}>
                    {item.period}
                  </div>
                  <h3 className="apex-journey-title">{item.title}</h3>
                  <p className="apex-journey-description">{item.description}</p>
                  
                  <div className="apex-journey-discoveries">
                    {item.discoveries.map((discovery, dIndex) => (
                      <span key={dIndex} className="apex-discovery-tag">
                        {discovery}
                      </span>
                    ))}
                  </div>
                  
                  <div className="apex-journey-connector">
                    <div className="apex-connector-line"></div>
                    <div className="apex-connector-arrow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="apex-main">
        <div className="apex-container">
          {error && (
            <div className="apex-error-banner">
              <span>{error}</span>
            </div>
          )}

          {/* Filtre Section */}
          <div className="apex-filter-section">
            <div className="apex-filter-container">
              <div className="apex-search-box">
                <Search size={20} className="apex-search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher une découverte..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="apex-search-input"
                />
              </div>
              
              <div className="apex-category-filter">
                <Filter size={18} className="apex-filter-icon" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="apex-category-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Toutes les catégories' : 
                       category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="apex-tabs-container">
            <div className="apex-tabs">
              <button 
                className={`apex-tab ${activeTab === 'decouvertes' ? 'apex-tab-active' : ''}`}
                onClick={() => setActiveTab('decouvertes')}
              >
                <MapPin size={18} />
                Découvertes
              </button>
              <button 
                className={`apex-tab ${activeTab === 'civilisations' ? 'apex-tab-active' : ''}`}
                onClick={() => setActiveTab('civilisations')}
              >
                <History size={18} />
                Civilisations
              </button>
              <button 
                className={`apex-tab ${activeTab === 'science' ? 'apex-tab-active' : ''}`}
                onClick={() => setActiveTab('science')}
              >
                <Telescope size={18} />
                Science
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="apex-articles-grid">
            {loading ? (
              <div className="apex-loading-state">
                <div className="apex-spinner"></div>
                <p>Chargement des articles...</p>
              </div>
            ) : filteredSections.length > 0 ? (
              filteredSections.map((section, index) => (
                <article key={section.id || index} className="apex-article-card">
                  <div className="apex-article-header">
                    <div className="apex-article-icon" style={{ color: section.color }}>
                      <div className="apex-article-icon-bg" style={{ backgroundColor: section.color + '20' }}></div>
                      {getIconComponent(section.icon)}
                    </div>
                    <div className="apex-article-title-content">
                      <div className="apex-article-category">{section.category}</div>
                      <h2 className="apex-article-title">{section.title}</h2>
                      <div className="apex-article-stats">{section.stats}</div>
                    </div>
                  </div>
                  <div className="apex-article-content">
                    <p className="apex-article-excerpt">
                      {section.content ? 
                        section.content.split('\n')[0].substring(0, 180) + '...' : 
                        'Contenu non disponible'}
                    </p>
                    <div className="apex-article-footer">
                      <div className="apex-article-meta">
                        <span className="apex-meta-item">
                          <User size={14} />
                          {section.author_name || 'Auteur inconnu'}
                        </span>
                        <span className="apex-meta-item">
                          <Clock size={14} />
                          {section.read_time || 5} min
                        </span>
                      </div>
                      <button 
                        className="apex-read-more"
                        onClick={() => openModal(section)}
                      >
                        Lire la suite <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="apex-no-results">
                <p>Aucun résultat trouvé pour votre recherche.</p>
                <button 
                  className="apex-reset-filters-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quote Section */}
      <section className="apex-quote-section">
        <div className="apex-container">
          <div className="apex-quote-content">
            <div className="apex-quote-icon">❝</div>
            <blockquote className="apex-quote">
              "L'Afrique n'est pas seulement le berceau de l'humanité, elle est la source de notre histoire commune et le fondement de notre avenir partagé. Chaque être humain porte en lui l'héritage génétique et culturel de ce continent ancestral."
            </blockquote>
            <div className="apex-quote-author">- Commission du Patrimoine Africain</div>
          </div>
        </div>
      </section>

      {/* Modal de lecture complète */}
      {showModal && selectedPost && (
        <div className="apex-modal-overlay" onClick={closeModal}>
          <div className="apex-article-modal" onClick={(e) => e.stopPropagation()}>
            <div className="apex-modal-header">
              <button className="apex-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            <div className="apex-modal-content">
              <div className="apex-modal-article-header">
                <div className="apex-modal-article-meta">
                  <span className="apex-modal-article-category">{selectedPost.category}</span>
                  <div className="apex-modal-article-info">
                    <span className="apex-modal-info-item">
                      <User size={16} />
                      {selectedPost.author_name || 'Auteur inconnu'}
                    </span>
                    <span className="apex-modal-info-item">
                      <Calendar size={16} />
                      {formatDate(selectedPost.published_at)}
                    </span>
                    <span className="apex-modal-info-item">
                      <Clock size={16} />
                      {selectedPost.read_time || 5} min de lecture
                    </span>
                  </div>
                </div>
                
                <h1 className="apex-modal-article-title">{selectedPost.title}</h1>
                <div className="apex-modal-article-stats">{selectedPost.stats}</div>
              </div>

              <div className="apex-modal-article-content">
                {selectedPost.content ? (
                  selectedPost.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="apex-modal-article-paragraph">
                        {paragraph}
                      </p>
                    )
                  ))
                ) : (
                  <p className="apex-modal-article-paragraph">Contenu non disponible.</p>
                )}
              </div>

              <div className="apex-modal-article-footer">
                <div className="apex-modal-article-actions">
                  <button className="apex-modal-action-btn apex-modal-primary" onClick={closeModal}>
                    Fermer
                  </button>
                  <button className="apex-modal-action-btn apex-modal-secondary">
                    Partager
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApexHeritage;