// MuséePersonnalités.jsx
import React, { useState, useEffect } from 'react';
import { Search, Filter, X, MapPin, Users, Book, Award, Globe, ArrowRight, ChevronDown, Star, Calendar, User, Heart, Share2, Eye, Zap, Target, TrendingUp } from 'lucide-react';
import './musée.css';

const MuséePersonnalités = () => {
  const [activeTab, setActiveTab] = useState('tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
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
      discipline: "Écologie",
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
      discipline: "Histoire",
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
      discipline: "Musique",
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
      discipline: "Politique",
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
  const disciplines = [...new Set(personalities.map(p => p.discipline))];

  const filteredPersonalities = personalities.filter(personality => {
    const matchesSearch = personality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         personality.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = !selectedCountry || personality.country === selectedCountry;
    const matchesCategory = !selectedCategory || personality.category === selectedCategory;
    const matchesPeriod = !selectedPeriod || personality.period === selectedPeriod;
    const matchesDiscipline = !selectedDiscipline || personality.discipline === selectedDiscipline;
    const matchesTab = activeTab === 'tout' || personality.category === activeTab;

    return matchesSearch && matchesCountry && matchesCategory && matchesPeriod && matchesDiscipline && matchesTab;
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
    setSelectedDiscipline('');
  };

  const activeFilters = [
    selectedCountry && `Pays: ${selectedCountry}`,
    selectedCategory && `Catégorie: ${selectedCategory === 'scientifique' ? 'Scientifique' : 'Non-scientifique'}`,
    selectedPeriod && `Période: ${selectedPeriod}`,
    selectedDiscipline && `Discipline: ${selectedDiscipline}`
  ].filter(Boolean);

  return (
    <div className="mp-page">
      {/* Hero Section Spectaculaire */}
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
              <div className="mp-stat-number">150+</div>
              <div className="mp-stat-label">Personnalités</div>
            </div>
            <div className="mp-stat">
              <div className="mp-stat-number">42</div>
              <div className="mp-stat-label">Pays représentés</div>
            </div>
            <div className="mp-stat">
              <div className="mp-stat-number">12</div>
              <div className="mp-stat-label">Domaines d'expertise</div>
            </div>
          </div>
          
          <button className="mp-cta-button">
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
            <button 
              className={`mp-tab ${activeTab === 'tout' ? 'mp-active' : ''}`}
              onClick={() => setActiveTab('tout')}
            >
              <Globe size={18} />
              Toutes les catégories
            </button>
            <button 
              className={`mp-tab ${activeTab === 'scientifique' ? 'mp-active' : ''}`}
              onClick={() => setActiveTab('scientifique')}
            >
              <Award size={18} />
              Domaines scientifiques
            </button>
            <button 
              className={`mp-tab ${activeTab === 'non-scientifique' ? 'mp-active' : ''}`}
              onClick={() => setActiveTab('non-scientifique')}
            >
              <Users size={18} />
              Domaines non-scientifiques
            </button>
          </div>
        </div>
      </div>

      {/* Section de filtres */}
      <section className="mp-filters-section">
        <div className="mp-container">
          <div className="mp-filters-container">
            <div className="mp-search-filter">
              <div className="mp-search-box">
                <Search size={20} className="mp-search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher une personnalité, une spécialité, un pays..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mp-search-input"
                />
              </div>
              
              <button 
                className="mp-filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Filtres avancés
                <ChevronDown size={16} className={showFilters ? 'mp-rotated' : ''} />
              </button>
            </div>

            {showFilters && (
              <div className="mp-advanced-filters">
                <div className="mp-filter-group">
                  <label>Pays d'origine</label>
                  <select 
                    value={selectedCountry} 
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="mp-filter-select"
                  >
                    <option value="">Tous les pays</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div className="mp-filter-group">
                  <label>Catégorie</label>
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mp-filter-select"
                  >
                    <option value="">Toutes les catégories</option>
                    <option value="scientifique">Scientifique</option>
                    <option value="non-scientifique">Non-scientifique</option>
                  </select>
                </div>

                <div className="mp-filter-group">
                  <label>Discipline</label>
                  <select 
                    value={selectedDiscipline} 
                    onChange={(e) => setSelectedDiscipline(e.target.value)}
                    className="mp-filter-select"
                  >
                    <option value="">Toutes les disciplines</option>
                    {disciplines.map(discipline => (
                      <option key={discipline} value={discipline}>{discipline}</option>
                    ))}
                  </select>
                </div>

                <div className="mp-filter-group">
                  <label>Période historique</label>
                  <select 
                    value={selectedPeriod} 
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="mp-filter-select"
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
              <div className="mp-active-filters">
                <div className="mp-filters-list">
                  {activeFilters.map((filter, index) => (
                    <span key={index} className="mp-filter-tag">
                      {filter}
                      <button onClick={clearFilters}>
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
                <span>{personalities.filter(p => p.category === 'non-scientifique').length} Non-scientifiques</span>
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
                <div 
                  key={personality.id} 
                  className="mp-personality-card"
                  onClick={() => openPersonalityModal(personality)}
                >
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
                    {selectedPersonality.category === 'scientifique' ? 'Scientifique' : 'Leader'}
                  </span>
                  <span className="mp-period-tag">{selectedPersonality.period}</span>
                </div>
                
                <h2>{selectedPersonality.name}</h2>
                <div className="mp-specialty-large">{selectedPersonality.specialty}</div>
                
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