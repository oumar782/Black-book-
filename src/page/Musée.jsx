// Musée.jsx
import React, { useState, useEffect } from 'react';
import { Search, Filter, X, MapPin, Users, Book, Award, Globe, ArrowRight, ChevronDown, Star, Calendar, User, Heart, Share2, Eye, Zap, Target, TrendingUp } from 'lucide-react';
import './musée.css';
const Musée = () => {
  const [activeTab, setActiveTab] = useState('tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Écouter le scroll pour l'effet de header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Données de démonstration enrichies
  const personalities = [
    {
      id: 1,
      name: "Wangari Maathai",
      country: "Kenya",
      category: "scientifique",
      specialty: "Écologie & Environnement",
      period: "contemporain",
      image: "/api/placeholder/400/500",
      description: "Pionnière de l'écologie en Afrique, première femme africaine à recevoir le prix Nobel de la paix pour sa contribution au développement durable, à la démocratie et à la paix.",
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
        "Lutte pour la démocratie au Kenya"
      ],
      stats: { 
        publications: 45, 
        influence: 95,
        followers: "2.3M",
        projects: 127
      },
      color: "#2e7d32"
    },
    {
      id: 2,
      name: "Cheikh Anta Diop",
      country: "Sénégal",
      category: "scientifique",
      specialty: "Histoire & Anthropologie",
      period: "moderne",
      image: "/api/placeholder/400/500",
      description: "Historien et anthropologue visionnaire qui a rétabli la conscience historique africaine et démontré les origines africaines de la civilisation égyptienne.",
      detailedDescription: "Cheikh Anta Diop a consacré sa vie à la réhabilitation de la place de l'Afrique dans l'histoire mondiale. Ses travaux sur l'antériorité des civilisations nègres et leur contribution fondamentale au développement humain ont ouvert de nouvelles perspectives dans les études historiques et anthropologiques.",
      achievements: [
        "Théorie sur les origines africaines de la civilisation",
        "Directeur du laboratoire de radiocarbone de l'IFAN",
        "Docteur ès Lettres de la Sorbonne",
        "Prix international de la Recherche"
      ],
      contributions: [
        "Méthodologie de l'histoire africaine",
        "Études sur l'unité culturelle de l'Afrique",
        "Théorie du matriarcat primitif"
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
      id: 3,
      name: "Miriam Makeba",
      country: "Afrique du Sud",
      category: "non-scientifique",
      specialty: "Musique & Activisme",
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
        "Promotion des droits des femmes"
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
      id: 4,
      name: "Thomas Sankara",
      country: "Burkina Faso",
      category: "non-scientifique",
      specialty: "Leadership Révolutionnaire",
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
        "Réforme agraire et éducation"
      ],
      stats: { 
        publications: 12, 
        influence: 96,
        followers: "2.1M",
        projects: 203
      },
      color: "#d32f2f"
    }
  ];

  const countries = [...new Set(personalities.map(p => p.country))];
  const categories = [...new Set(personalities.map(p => p.category))];
  const periods = [...new Set(personalities.map(p => p.period))];

  const filteredPersonalities = personalities.filter(personality => {
    const matchesSearch = personality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = !selectedCountry || personality.country === selectedCountry;
    const matchesCategory = !selectedCategory || personality.category === selectedCategory;
    const matchesPeriod = !selectedPeriod || personality.period === selectedPeriod;
    const matchesTab = activeTab === 'tout' || personality.category === activeTab;

    return matchesSearch && matchesCountry && matchesCategory && matchesPeriod && matchesTab;
  });

  const openPersonalityModal = (personality) => {
    setSelectedPersonality(personality);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCountry('');
    setSelectedCategory('');
    setSelectedPeriod('');
  };

  const activeFilters = [
    selectedCountry && `Pays: ${selectedCountry}`,
    selectedCategory && `Catégorie: ${selectedCategory === 'scientifique' ? 'Scientifique' : 'Non-scientifique'}`,
    selectedPeriod && `Période: ${selectedPeriod}`
  ].filter(Boolean);

  return (
    <div className="musee-page">
      {/* Hero Section Spectaculaire */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-image"></div>
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} />
            Patrimoine Exceptionnel
          </div>
          
          <h1 className="hero-title">
            Musée des 
            <span className="hero-highlight"> Grandes Figures</span>
            <br />
            de l'Histoire Noire
          </h1>
          
          <p className="hero-subtitle">
            Découvrez l'héritage précieux des personnalités noires qui ont 
            façonné notre monde à travers la science, les arts, la politique 
            et l'innovation. Un voyage à travers les siècles d'excellence.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Personnalités</div>
            </div>
            <div className="stat">
              <div className="stat-number">42</div>
              <div className="stat-label">Pays représentés</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Domaines d'expertise</div>
            </div>
          </div>
          
          <button className="cta-button">
            Explorer la Collection
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="scroll-indicator">
          <ArrowRight size={20} className="bounce" />
        </div>
      </section>

 

      {/* Navigation par onglets */}
      <div className="tabs-section">
        <div className="container">
          <div className="tabs-container">
            <button 
              className={`tab ${activeTab === 'tout' ? 'active' : ''}`}
              onClick={() => setActiveTab('tout')}
            >
              <Globe size={18} />
              Toutes les catégories
            </button>
            <button 
              className={`tab ${activeTab === 'scientifique' ? 'active' : ''}`}
              onClick={() => setActiveTab('scientifique')}
            >
              <Award size={18} />
              Domaines scientifiques
            </button>
            <button 
              className={`tab ${activeTab === 'non-scientifique' ? 'active' : ''}`}
              onClick={() => setActiveTab('non-scientifique')}
            >
              <Users size={18} />
              Domaines non-scientifiques
            </button>
          </div>
        </div>
      </div>

      {/* Section de filtres */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            <div className="search-filter">
              <div className="search-box">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher une personnalité, une spécialité, un pays..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <button 
                className="filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Filtres avancés
                <ChevronDown size={16} className={showFilters ? 'rotated' : ''} />
              </button>
            </div>

            {showFilters && (
              <div className="advanced-filters">
                <div className="filter-group">
                  <label>Pays d'origine</label>
                  <select 
                    value={selectedCountry} 
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">Tous les pays</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label>Catégorie</label>
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">Toutes les catégories</option>
                    <option value="scientifique">Scientifique</option>
                    <option value="non-scientifique">Non-scientifique</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Période historique</label>
                  <select 
                    value={selectedPeriod} 
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="filter-select"
                  >
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
              <div className="active-filters">
                <div className="filters-list">
                  {activeFilters.map((filter, index) => (
                    <span key={index} className="filter-tag">
                      {filter}
                      <button onClick={clearFilters}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <button className="clear-all" onClick={clearFilters}>
                  Tout effacer
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <main className="main-content">
        <div className="container">
          <div className="results-header">
            <h2 className="results-title">
              {filteredPersonalities.length} personnalité{filteredPersonalities.length !== 1 ? 's' : ''} trouvée{filteredPersonalities.length !== 1 ? 's' : ''}
            </h2>
            <div className="results-stats">
              <div className="stat">
                <Users size={20} />
                <span>{personalities.filter(p => p.category === 'scientifique').length} Scientifiques</span>
              </div>
              <div className="stat">
                <Book size={20} />
                <span>{personalities.filter(p => p.category === 'non-scientifique').length} Non-scientifiques</span>
              </div>
            </div>
          </div>

          {filteredPersonalities.length === 0 ? (
            <div className="no-results">
              <div className="no-results-content">
                <Search size={48} />
                <h3>Aucune personnalité trouvée</h3>
                <p>Essayez de modifier vos critères de recherche ou vos filtres</p>
                <button className="reset-btn" onClick={clearFilters}>
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          ) : (
            <div className="personalities-grid">
              {filteredPersonalities.map(personality => (
                <div 
                  key={personality.id} 
                  className="personality-card"
                  onClick={() => openPersonalityModal(personality)}
                >
                  <div className="card-image">
                    <img src={personality.image} alt={personality.name} />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <span className="view-details">Voir les détails</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                    <div className="card-badge" style={{backgroundColor: personality.color}}>
                      {personality.category === 'scientifique' ? 'Science' : 'Leadership'}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="personality-name">{personality.name}</h3>
                      <div className="personality-meta">
                        <div className="country">
                          <MapPin size={14} />
                          {personality.country}
                        </div>
                        <div className="period">{personality.period}</div>
                      </div>
                    </div>
                    
                    <div className="specialty">{personality.specialty}</div>
                    <p className="description">{personality.description}</p>
                    
                    <div className="achievements">
                      {personality.achievements.slice(0, 2).map((achievement, index) => (
                        <span key={index} className="achievement-tag">
                          {achievement}
                        </span>
                      ))}
                    </div>
                    
                    <div className="card-stats">
                      <div className="stat">
                        <Book size={14} />
                        {personality.stats.publications} publication{personality.stats.publications !== 1 ? 's' : ''}
                      </div>
                      <div className="stat">
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
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="personality-image">
                <img src={selectedPersonality.image} alt={selectedPersonality.name} />
                <div className="image-overlay" style={{backgroundColor: `${selectedPersonality.color}20`}}></div>
              </div>
              
              <div className="personality-info">
                <div className="personality-meta">
                  <span className="category-tag" style={{backgroundColor: selectedPersonality.color}}>
                    {selectedPersonality.category === 'scientifique' ? 'Scientifique' : 'Leader'}
                  </span>
                  <span className="period-tag">{selectedPersonality.period}</span>
                </div>
                
                <h2>{selectedPersonality.name}</h2>
                <div className="specialty-large">{selectedPersonality.specialty}</div>
                
                <div className="info-grid">
                  <div className="info-item">
                    <MapPin size={18} />
                    <span>{selectedPersonality.country}</span>
                  </div>
                  <div className="info-item">
                    <Target size={18} />
                    <span>{selectedPersonality.stats.projects} projets</span>
                  </div>
                  <div className="info-item">
                    <Eye size={18} />
                    <span>{selectedPersonality.stats.followers} followers</span>
                  </div>
                </div>
                
                <div className="influence-meter">
                  <div className="meter-label">
                    <TrendingUp size={16} />
                    Niveau d'influence mondiale
                  </div>
                  <div className="meter-bar">
                    <div 
                      className="meter-fill" 
                      style={{
                        width: `${selectedPersonality.stats.influence}%`,
                        background: selectedPersonality.color
                      }}
                    ></div>
                  </div>
                  <span className="meter-value">{selectedPersonality.stats.influence}%</span>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="section">
                <h3>Biographie Complète</h3>
                <p>{selectedPersonality.detailedDescription}</p>
              </div>
              
              <div className="sections-grid">
                <div className="section">
                  <h3>Principales réalisations</h3>
                  <ul className="achievements-list">
                    {selectedPersonality.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="section">
                  <h3>Contributions majeures</h3>
                  <ul className="contributions-list">
                    {selectedPersonality.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <Book size={24} />
                  <div className="stat-value">{selectedPersonality.stats.publications}</div>
                  <div className="stat-label">Publications</div>
                </div>
                
                <div className="stat-card">
                  <Award size={24} />
                  <div className="stat-value">{selectedPersonality.achievements.length}</div>
                  <div className="stat-label">Réalisations</div>
                </div>
                
                <div className="stat-card">
                  <Users size={24} />
                  <div className="stat-value">{selectedPersonality.stats.followers}</div>
                  <div className="stat-label">Influence</div>
                </div>
                
                <div className="stat-card">
                  <Target size={24} />
                  <div className="stat-value">{selectedPersonality.stats.projects}</div>
                  <div className="stat-label">Projets</div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <div className="action-buttons">
                <button className="action-btn primary">
                  <Heart size={18} />
                  Ajouter aux favoris
                </button>
                <button className="action-btn secondary">
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

export default Musée;