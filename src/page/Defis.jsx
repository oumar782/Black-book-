import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Filter, X, Globe, Users, Leaf, TrendingUp, BookOpen, Heart, Zap, ArrowRight, Loader, Calendar, Target, Shield, Lightbulb, Sparkles, Star, Award, TargetIcon, BarChart3 } from 'lucide-react';
import './defis.css';

const DEFISPage = () => {
  const [activeTab, setActiveTab] = useState('tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defisData, setDefisData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Icônes pour chaque section
  const sectionIcons = {
    sante: <Heart size={28} className="defis-section-icon-svg" />,
    education: <BookOpen size={28} className="defis-section-icon-svg" />,
    environnement: <Leaf size={28} className="defis-section-icon-svg" />,
    economie: <TrendingUp size={28} className="defis-section-icon-svg" />,
    culture: <Globe size={28} className="defis-section-icon-svg" />,
    innovation: <Zap size={28} className="defis-section-icon-svg" />
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

  // Données des réalisations (remplace la timeline)
  const achievements = [
    {
      year: "2023",
      title: "Sommet sur le Climat Africain",
      icon: <Leaf size={24} />,
      description: "Engagement de 100K jeunes pour des initiatives vertes",
      stats: "+45% d'impact",
      color: "#10b981"
    },
    {
      year: "2022",
      title: "Initiative Santé pour Tous",
      icon: <Heart size={24} />,
      description: "Formation de 5000 agents de santé communautaires",
      stats: "127K bénéficiaires",
      color: "#ef4444"
    },
    {
      year: "2021",
      title: "Plan d'Éducation Digitale",
      icon: <BookOpen size={24} />,
      description: "Accès à l'éducation numérique pour 50K étudiants",
      stats: "92% de réussite",
      color: "#3b82f6"
    },
    {
      year: "2020",
      title: "Protocole Culturel Panafricain",
      icon: <Globe size={24} />,
      description: "Préservation de 200 traditions culturelles menacées",
      stats: "42 pays impliqués",
      color: "#8b5cf6"
    },
    {
      year: "2019",
      title: "Alliance pour l'Innovation",
      icon: <Zap size={24} />,
      description: "Incubation de 150 startups technologiques africaines",
      stats: "$2.5M levés",
      color: "#f59e0b"
    }
  ];

  const features = [
    {
      icon: <Target size={32} />,
      title: "Impact Ciblé",
      description: "Des solutions spécifiques aux défis les plus pressants de notre génération"
    },
    {
      icon: <Shield size={32} />,
      title: "Résilience Collective",
      description: "Renforcement des capacités communautaires pour un développement durable"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation Sociale",
      description: "Approches créatives mêlant tradition et modernité"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Transformation",
      description: "Changement systémique à travers l'éducation et la mobilisation"
    }
  ];

  // Récupérer les données depuis l'API
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

  // Filtrer les sections
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

  if (loading) {
    return (
      <div className="defis-page-wrapper">
        <div className="defis-loading-state">
          <div className="defis-loader-animation">
            <Loader size={48} className="defis-spinner-icon" />
            <div className="defis-loader-particles">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="defis-loader-particle" style={{ '--i': i }}></div>
              ))}
            </div>
          </div>
          <p className="defis-loading-text">Chargement des défis...</p>
        </div>
      </div>
    );
  }

  if (error && defisData.length === 0) {
    return (
      <div className="defis-page-wrapper">
        <div className="defis-error-state">
          <div className="defis-error-icon">⚠️</div>
          <h3 className="defis-error-title">Erreur de chargement</h3>
          <p className="defis-error-message">{error}</p>
          <button className="defis-retry-button" onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="defis-page-wrapper">
      {/* Hero Section */}
      <section className="defis-hero-section">
        <div className="defis-hero-background-effect">
          <div className="defis-hero-gradient-overlay"></div>
          <div className="defis-hero-orbits">
            <div className="defis-orbit defis-orbit-1"></div>
            <div className="defis-orbit defis-orbit-2"></div>
            <div className="defis-orbit defis-orbit-3"></div>
          </div>
          <div className="defis-hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="defis-hero-particle"></div>
            ))}
          </div>
        </div>
        
        <div className="defis-hero-container">
          <div className="defis-hero-content-wrapper">
            <div className="defis-hero-badge">
              <Sparkles size={16} />
              <span>Initiative Panafricaine</span>
            </div>
            
            <h1 className="defis-hero-main-title">
              <span className="defis-hero-title-line">Réveiller la</span>
              <span className="defis-hero-title-highlight">
                Conscience <Star size={32} className="defis-title-star" />
              </span>
              <span className="defis-hero-title-line">Collective</span>
            </h1>
            
            <p className="defis-hero-description">
              D.É.F.I.S. mobilise la jeunesse africaine autour des enjeux déterminants 
              pour l'avenir du continent. Notre mission : transformer les défis en 
              opportunités de croissance et d'innovation.
            </p>
            
            <div className="defis-hero-stats-grid">
              <div className="defis-hero-stat-item">
                <div className="defis-stat-value">{defisData.length}+</div>
                <div className="defis-stat-label">Domaines d'Action</div>
              </div>
              <div className="defis-hero-stat-item">
                <div className="defis-stat-value">127K</div>
                <div className="defis-stat-label">Jeunes Engagés</div>
              </div>
              <div className="defis-hero-stat-item">
                <div className="defis-stat-value">42</div>
                <div className="defis-stat-label">Projets Actifs</div>
              </div>
              <div className="defis-hero-stat-item">
                <div className="defis-stat-value">89%</div>
                <div className="defis-stat-label">Impact Mesurable</div>
              </div>
            </div>
            
            <div className="defis-hero-actions">
              <button className="defis-primary-action-button">
                Rejoindre le Mouvement
                <ArrowRight size={20} className="defis-button-icon" />
              </button>
              <button className="defis-secondary-action-button">
                <BookOpen size={20} />
                Voir le Manifeste
              </button>
            </div>
          </div>
        </div>
        
        <div className="defis-scroll-indicator-wrapper">
          <ChevronDown size={24} className="defis-scroll-icon" />
        </div>
      </section>

      {/* Features Section */}
      <section className="defis-features-section" id="mission">
        <div className="defis-features-container">
          <div className="defis-section-header-wrapper">
            <h2 className="defis-section-main-heading">Notre Approche</h2>
            <p className="defis-section-subtitle-text">
              Une méthodologie intégrée pour adresser les défis complexes avec agilité et impact
            </p>
          </div>
          
          <div className="defis-features-grid-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="defis-feature-card-item">
                <div className="defis-feature-icon-wrapper" style={{ '--delay': index * 0.1 + 's' }}>
                  {feature.icon}
                  <div className="defis-feature-icon-glow"></div>
                </div>
                <h3 className="defis-feature-card-title">{feature.title}</h3>
                <p className="defis-feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section (remplace timeline) */}
      <section className="defis-achievements-section">
        <div className="defis-achievements-container">
          <div className="defis-section-header-wrapper">
            <h2 className="defis-section-main-heading">Nos Réalisations</h2>
            <p className="defis-section-subtitle-text">
              Des résultats concrets qui témoignent de notre impact transformateur
            </p>
          </div>
          
          <div className="defis-achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="defis-achievement-card">
                <div className="defis-achievement-header">
                  <div className="defis-achievement-year" style={{ color: achievement.color }}>
                    {achievement.year}
                  </div>
                  <div className="defis-achievement-icon" style={{ backgroundColor: achievement.color + '20' }}>
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="defis-achievement-title">{achievement.title}</h3>
                <p className="defis-achievement-description">{achievement.description}</p>
                <div className="defis-achievement-stats" style={{ color: achievement.color }}>
                  {achievement.stats}
                </div>
                <div className="defis-achievement-progress">
                  <div 
                    className="defis-achievement-progress-bar" 
                    style={{ 
                      backgroundColor: achievement.color,
                      animationDelay: index * 0.2 + 's'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Domaines d'Intervention */}
      <section className="defis-main-content-section" id="domaines">
        <div className="defis-main-container">
          <div className="defis-tabs-wrapper">
            <div className="defis-tabs-container">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`defis-tab-button ${activeTab === category.id ? 'defis-tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab(category.id);
                    setSelectedCategory(category.id);
                  }}
                >
                  <span className="defis-tab-icon">{category.icon}</span>
                  <span className="defis-tab-text">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtres */}
          <div className="defis-filter-section-wrapper">
            <div className="defis-filter-controls">
              <div className="defis-search-wrapper">
                <Search className="defis-search-input-icon" size={20} />
                <input
                  type="text"
                  className="defis-search-input-field"
                  placeholder="Rechercher un défi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="defis-category-select-wrapper">
                <Filter className="defis-filter-select-icon" size={20} />
                <select 
                  className="defis-category-select-field"
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
            <div className="defis-filter-indicators-wrapper">
              {searchQuery && (
                <div className="defis-filter-tag-item">
                  <span className="defis-filter-tag-text">"{searchQuery}"</span>
                  <button 
                    className="defis-filter-tag-close"
                    onClick={() => setSearchQuery('')}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedCategory !== 'tous' && (
                <div className="defis-filter-tag-item">
                  <span className="defis-filter-tag-text">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                  <button 
                    className="defis-filter-tag-close"
                    onClick={() => {
                      setSelectedCategory('tous');
                      setActiveTab('tous');
                    }}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {(searchQuery || selectedCategory !== 'tous') && (
                <button 
                  className="defis-clear-filters-button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('tous');
                    setActiveTab('tous');
                  }}
                >
                  Effacer les filtres
                </button>
              )}
            </div>
            
            {/* Résultats du filtre */}
            <div className="defis-results-info">
              <p className="defis-results-count-text">
                {filteredSections.length} défi{filteredSections.length !== 1 ? 's' : ''} correspondant{filteredSections.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Grille des sections */}
          {filteredSections.length > 0 ? (
            <div className="defis-sections-grid-wrapper">
              {filteredSections.map((section, index) => (
                <div 
                  key={section.id} 
                  className="defis-section-card"
                  style={{ animationDelay: index * 0.1 + 's' }}
                >
                  <div className="defis-section-card-header">
                    <div 
                      className="defis-section-card-icon"
                      style={{ background: `linear-gradient(135deg, ${section.color}, ${section.color}80)` }}
                    >
                      {sectionIcons[section.section_key] || <Globe size={28} />}
                    </div>
                    <div className="defis-section-card-title-wrapper">
                      <h3 className="defis-section-card-title">{section.title}</h3>
                      <div className="defis-section-card-stats">{section.stats}</div>
                    </div>
                  </div>
                  
                  <div className="defis-section-card-content">
                    <p className="defis-section-card-text">{section.content}</p>
                    <button 
                      className="defis-section-card-button"
                      onClick={() => openArticleModal(section)}
                    >
                      Explorer le défi
                      <ArrowRight size={16} className="defis-card-button-icon" />
                    </button>
                  </div>
                  
                  <div className="defis-section-card-footer">
                    <div className="defis-progress-indicator">
                      <div className="defis-progress-bar">
                        <div 
                          className="defis-progress-fill" 
                          style={{ 
                            width: '75%',
                            background: section.color 
                          }}
                        ></div>
                      </div>
                      <span className="defis-progress-text">Impact en cours</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="defis-no-results-wrapper">
              <div className="defis-no-results-icon">🔍</div>
              <h3 className="defis-no-results-title">Aucun résultat trouvé</h3>
              <p className="defis-no-results-message">
                Aucun domaine ne correspond à votre recherche. Essayez d'autres termes.
              </p>
              <button 
                className="defis-reset-filters-button"
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

      {/* Quote Section */}
      <section className="defis-quote-section-wrapper">
        <div className="defis-quote-container">
          <div className="defis-quote-content-wrapper">
            <div className="defis-quote-decoration">
              <div className="defis-quote-line defis-quote-line-left"></div>
              <div className="defis-quote-mark">❝</div>
              <div className="defis-quote-line defis-quote-line-right"></div>
            </div>
            
            <blockquote className="defis-quote-text">
              L'héritage de nos ancêtres n'est pas un fardeau à porter, mais une terre à labourer. 
              Chaque génération a la responsabilité de faire fructifier ce qui lui a été transmis 
              et de préparer le terrain pour celles qui suivront.
            </blockquote>
            
            <div className="defis-quote-author-wrapper">
              <div className="defis-quote-author-line"></div>
              <div className="defis-quote-author">— Philosophie D.É.F.I.S.</div>
              <div className="defis-quote-author-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal d'article */}
      {isModalOpen && selectedArticle && (
        <div className="defis-modal-overlay" onClick={closeArticleModal}>
          <div className="defis-article-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="defis-modal-header-wrapper">
              <button className="defis-modal-close-button" onClick={closeArticleModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="defis-modal-content-wrapper">
              <div className="defis-article-modal-header">
                <div className="defis-article-modal-meta">
                  <div 
                    className="defis-article-modal-category"
                    style={{ 
                      background: `linear-gradient(135deg, ${selectedArticle.color}, ${selectedArticle.color}80)` 
                    }}
                  >
                    {selectedArticle.title}
                  </div>
                  <div className="defis-article-modal-info">
                    <div className="defis-modal-info-item">
                      <BarChart3 size={16} />
                      <span>{selectedArticle.stats}</span>
                    </div>
                    <div className="defis-modal-info-item">
                      <Users size={16} />
                      <span>Impact Communautaire</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="defis-article-modal-title">{selectedArticle.title}</h2>
                <div className="defis-article-modal-stats">{selectedArticle.stats}</div>
              </div>
              
              <div className="defis-article-modal-content">
                <p className="defis-article-modal-paragraph">
                  {selectedArticle.full_content}
                </p>
                
                <p className="defis-article-modal-paragraph">
                  Notre approche combine recherche approfondie, mobilisation communautaire et plaidoyer 
                  politique pour créer un impact durable. Nous travaillons main dans la main avec les 
                  leaders locaux, les institutions académiques et les organisations de la société civile 
                  pour développer des solutions adaptées aux contextes spécifiques.
                </p>
                
                <div className="defis-modal-highlight-box">
                  <TargetIcon size={24} className="defis-highlight-icon" />
                  <div className="defis-highlight-content">
                    <h4 className="defis-highlight-title">Objectif Stratégique</h4>
                    <p className="defis-highlight-text">
                      Réduire de 40% l'incidence de ce défi d'ici 2025 à travers des interventions 
                      ciblées et des partenariats stratégiques.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="defis-article-modal-footer">
                <div className="defis-modal-actions">
                  <button className="defis-modal-action-button defis-modal-action-secondary">
                    <BookOpen size={16} />
                    Télécharger le rapport
                  </button>
                  <button className="defis-modal-action-button defis-modal-action-primary">
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