import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Filter, X, Globe, Users, Leaf, TrendingUp, BookOpen, Heart, Zap, ArrowRight, Menu, X as CloseIcon, Loader } from 'lucide-react';
import './defis.css';

const DEFISPage = () => {
  const [activeTab, setActiveTab] = useState('tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defisData, setDefisData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Icônes pour chaque section
  const sectionIcons = {
    sante: <Heart size={28} />,
    education: <BookOpen size={28} />,
    environnement: <Leaf size={28} />,
    economie: <TrendingUp size={28} />,
    culture: <Globe size={28} />,
    innovation: <Zap size={28} />
  };

  const categories = [
    { id: 'tous', name: 'Tous les domaines', icon: <Globe size={16} /> },
    { id: 'sante', name: 'Santé', icon: <Heart size={16} /> },
    { id: 'education', name: 'Éducation', icon: <BookOpen size={16} /> },
    { id: 'environnement', name: 'Environnement', icon: <Leaf size={16} /> },
    { id: 'economie', name: 'Économie', icon: <TrendingUp size={16} /> },
    { id: 'culture', name: 'Culture', icon: <Users size={16} /> },
    { id: 'innovation', name: 'Innovation', icon: <Zap size={16} /> }
  ];

  const timelineData = [
    { year: "2023", event: "Sommet sur le Climat Africain", location: "Nairobi, Kenya" },
    { year: "2022", event: "Initiative Santé pour Tous", location: "Dakar, Sénégal" },
    { year: "2021", event: "Plan d'Éducation Digitale", location: "Accra, Ghana" },
    { year: "2020", event: "Protocole de Préservation Culturelle", location: "Addis-Abeba, Éthiopie" },
    { year: "2019", event: "Alliance pour l'Innovation", location: "Kigali, Rwanda" }
  ];

  const features = [
    {
      icon: <Users size={32} />,
      title: "Engagement Communautaire",
      description: "Mobiliser les jeunes autour des enjeux qui affectent directement leurs communautés et leur avenir."
    },
    {
      icon: <Globe size={32} />,
      title: "Perspective Globale",
      description: "Analyser les défis dans leur contexte mondial tout en proposant des solutions locales adaptées."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Impact Mesurable",
      description: "Suivre et évaluer l'impact de nos actions à travers des indicateurs clairs et transparents."
    },
    {
      icon: <Leaf size={32} />,
      title: "Durabilité Environnementale",
      description: "Intégrer la protection de l'environnement dans toutes nos initiatives de développement."
    }
  ];

  // 🔌 Récupérer les données depuis l'API
  useEffect(() => {
    const fetchDefis = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://backblack.vercel.app/api/defis/');
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          setDefisData(result.data);
        } else {
          throw new Error(result.error || 'Erreur lors du chargement des données');
        }
      } catch (err) {
        console.error('Erreur API:', err);
        setError(err.message);
        // Données de secours en cas d'erreur
        setDefisData([
          {
            id: 1,
            section_key: 'sante',
            title: 'Santé Publique',
            color: '#e25822',
            stats: '62% des maladies évitables',
            content: 'La malaria continue daffecter des millions de personnes en Afrique...',
            full_content: 'En 2023, près de 250 millions de cas de malaria ont été recensés...'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDefis();
  }, []);

  // Filtrer les sections selon la recherche et la catégorie
  const filteredSections = defisData.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         section.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'tous' || section.section_key === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openArticleModal = (section) => {
    setSelectedArticle(section);
    setIsModalOpen(true);
  };

  const closeArticleModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  // Fermer le modal avec la touche Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeArticleModal();
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Afficher le loader pendant le chargement
  if (loading) {
    return (
      <div className="defis-app">
        <div className="defis-loading">
          <Loader size={48} className="defis-spinner" />
          <p>Chargement des défis...</p>
        </div>
      </div>
    );
  }

  // Afficher l'erreur si nécessaire
  if (error && defisData.length === 0) {
    return (
      <div className="defis-app">
        <div className="defis-error">
          <p>Erreur: {error}</p>
          <button onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="defis-app">
      {/* Hero Section */}
      <section className="defis-hero">
        <div className="defis-hero-background">
          <div className="defis-hero-gradient"></div>
          <div className="defis-hero-pattern"></div>
        </div>
        
        <div className="defis-container">
          <div className="defis-hero-content">
            <h1 className="defis-hero-title">
              Réveiller la <span className="defis-hero-highlight">Conscience</span> Collective
            </h1>
            
            <p className="defis-hero-subtitle">
              D.É.F.I.S. est une plateforme dédiée à la mobilisation des jeunes autour des enjeux critiques 
              qui façonnent l'avenir de l'Afrique et de notre planète. Notre héritage est une terre fertile 
              qui attend d'être cultivée par les générations montantes.
            </p>
            
            <div className="defis-hero-stats">
              <div className="defis-stat">
                <div className="defis-stat-number">{defisData.length}+</div>
                <div className="defis-stat-label">Domaines d'Action</div>
              </div>
              <div className="defis-stat">
                <div className="defis-stat-number">127K</div>
                <div className="defis-stat-label">Jeunes Mobilisés</div>
              </div>
              <div className="defis-stat">
                <div className="defis-stat-number">42</div>
                <div className="defis-stat-label">Projets Actifs</div>
              </div>
            </div>
            
            <button className="defis-cta-button">
              Rejoindre le Mouvement
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="defis-scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section className="defis-features-section" id="mission">
        <div className="defis-container">
          <div className="defis-section-header">
            <h2 className="defis-section-heading">Notre Approche</h2>
            <p className="defis-section-subtitle">
              Une méthodologie holistique pour adresser les défis complexes de notre temps
            </p>
          </div>
          
          <div className="defis-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="defis-feature-card">
                <div className="defis-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="defis-feature-title">{feature.title}</h3>
                <p className="defis-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Domaines d'Intervention */}
      <section className="defis-main" id="domaines">
        <div className="defis-container">
          <div className="defis-tabs-container">
            <div className="defis-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`defis-tab ${activeTab === category.id ? 'defis-tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab(category.id);
                    setSelectedCategory(category.id);
                  }}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Filtres */}
          <div className="defis-filter-section">
            <div className="defis-filter-container">
              <div className="defis-search-box">
                <Search className="defis-search-icon" size={20} />
                <input
                  type="text"
                  className="defis-search-input"
                  placeholder="Rechercher un domaine d'intervention..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="defis-category-filter">
                <Filter className="defis-filter-icon" size={20} />
                <select 
                  className="defis-category-select"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setActiveTab(e.target.value);
                  }}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Indicateurs de filtre */}
            <div className="defis-filter-indicators">
              {searchQuery && (
                <div className="defis-filter-tag">
                  Recherche: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedCategory !== 'tous' && (
                <div className="defis-filter-tag">
                  Catégorie: {categories.find(c => c.id === selectedCategory)?.name}
                  <button onClick={() => {
                    setSelectedCategory('tous');
                    setActiveTab('tous');
                  }}>
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {(searchQuery || selectedCategory !== 'tous') && (
                <button 
                  className="defis-clear-filters"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('tous');
                    setActiveTab('tous');
                  }}
                >
                  Effacer tous les filtres
                </button>
              )}
            </div>
            
            {/* Résultats du filtre */}
            <div className="defis-filter-results">
              <p className="defis-results-count">
                {filteredSections.length} domaine{filteredSections.length !== 1 ? 's' : ''} trouvé{filteredSections.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Grille des sections */}
          {filteredSections.length > 0 ? (
            <div className="defis-sections-grid">
              {filteredSections.map((section) => (
                <div key={section.id} className="defis-content-section">
                  <div className="defis-section-header-card">
                    <div 
                      className="defis-section-icon"
                      style={{ background: section.color }}
                    >
                      {sectionIcons[section.section_key] || <Globe size={28} />}
                    </div>
                    <div className="defis-section-title-content">
                      <h3 className="defis-section-title">{section.title}</h3>
                      <div className="defis-section-stats">{section.stats}</div>
                    </div>
                  </div>
                  
                  <div className="defis-section-content">
                    <p className="defis-section-text">{section.content}</p>
                    <button 
                      className="defis-section-link"
                      onClick={() => openArticleModal(section)}
                    >
                      En savoir plus
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="defis-no-results">
              <p>Aucun domaine ne correspond à votre recherche.</p>
              <button 
                className="defis-reset-filters-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('tous');
                  setActiveTab('tous');
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="defis-timeline-section" id="historique">
        <div className="defis-container">
          <div className="defis-section-header">
            <h2 className="defis-section-heading">Notre Parcours</h2>
            <p className="defis-section-subtitle">
              Les étapes marquantes de notre engagement pour le développement durable
            </p>
          </div>
          
          <div className="defis-timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="defis-timeline-item">
                <div className="defis-timeline-marker">
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {item.year}
                  </div>
                </div>
                <div className="defis-timeline-content">
                  <div className="defis-timeline-year">{item.year}</div>
                  <h3 className="defis-timeline-event">{item.event}</h3>
                  <div className="defis-timeline-location">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="defis-quote-section">
        <div className="defis-container">
          <div className="defis-quote-content">
            <div className="defis-quote-icon">❝</div>
            <blockquote className="defis-quote">
              L'héritage de nos ancêtres n'est pas un fardeau à porter, mais une terre à labourer. 
              Chaque génération a la responsabilité de faire fructifier ce qui lui a été transmis 
              et de préparer le terrain pour celles qui suivront.
            </blockquote>
            <div className="defis-quote-author">— Philosophie D.É.F.I.S.</div>
          </div>
        </div>
      </section>

      {/* Modal d'article */}
      {isModalOpen && selectedArticle && (
        <div className="defis-modal-overlay" onClick={closeArticleModal}>
          <div className="defis-article-modal" onClick={(e) => e.stopPropagation()}>
            <div className="defis-modal-header">
              <button className="defis-modal-close" onClick={closeArticleModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="defis-modal-content">
              <div className="defis-article-header">
                <div className="defis-article-meta">
                  <div 
                    className="defis-article-category"
                    style={{ background: selectedArticle.color }}
                  >
                    {selectedArticle.title}
                  </div>
                  <div className="defis-article-info">
                    <div className="defis-info-item">
                      <TrendingUp size={16} />
                      {selectedArticle.stats}
                    </div>
                    <div className="defis-info-item">
                      <Users size={16} />
                      Impact Communautaire
                    </div>
                  </div>
                </div>
                
                <h2 className="defis-article-title">{selectedArticle.title}</h2>
                <div className="defis-article-stats">{selectedArticle.stats}</div>
              </div>
              
              <div className="defis-article-content">
                <p className="defis-article-paragraph">
                  {selectedArticle.full_content}
                </p>
                
                <p className="defis-article-paragraph">
                  Notre approche combine recherche approfondie, mobilisation communautaire et plaidoyer 
                  politique pour créer un impact durable. Nous travaillons main dans la main avec les 
                  leaders locaux, les institutions académiques et les organisations de la société civile 
                  pour développer des solutions adaptées aux contextes spécifiques.
                </p>
                
                <p className="defis-article-paragraph">
                  L'engagement des jeunes est au cœur de notre méthodologie. Nous croyons fermement que 
                  la prochaine génération détient les clés pour résoudre les défis les plus pressants 
                  de notre temps, en s'appuyant à la fois sur la sagesse ancestrale et l'innovation moderne.
                </p>
              </div>
              
              <div className="defis-article-footer">
                <div className="defis-article-actions">
                  <button className="defis-action-btn defis-action-btn-secondary">
                    <BookOpen size={16} />
                    Télécharger le rapport
                  </button>
                  <button className="defis-action-btn defis-action-btn-primary">
                    <Users size={16} />
                    Rejoindre l'initiative
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

export default DEFISPage;